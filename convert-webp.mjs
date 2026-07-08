import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join, extname, basename } from 'path'

const dir = './public/images'
const exts = ['.png', '.jpg', '.jpeg']

const files = readdirSync(dir).filter(f => exts.includes(extname(f).toLowerCase()))

for (const file of files) {
  const input = join(dir, file)
  const output = join(dir, basename(file, extname(file)) + '.webp')
  const before = statSync(input).size
  await sharp(input).webp({ quality: 82 }).toFile(output)
  const after = statSync(output).size
  console.log(`${file} → ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`)
}
