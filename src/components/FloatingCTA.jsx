import { useNavigate } from 'react-router-dom'

/* 🖼 에셋 교체: 붕어빵 PNG/SVG 받으면 <img> 태그로 교체
   <img src="/images/taiyaki-icon.png" className="floating-cta__fish" onClick={...} alt="상담신청" />
*/
function TaiyakiSVG({ onClick }) {
  return (
      <img src="/images/mini.svg" className="floating-cta__fish" onClick={onClick} alt="상담신청" />
  )
}

export default function FloatingCTA() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/franchise')
    setTimeout(() => {
      document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
  return (
    <div className="floating-cta">
      <TaiyakiSVG onClick={handleClick} />
      <span className="floating-cta__label">상담신청</span>
    </div>
  )
}
