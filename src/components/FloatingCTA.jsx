import { useNavigate } from 'react-router-dom'

/* 🖼 에셋 교체: 붕어빵 PNG/SVG 받으면 <img> 태그로 교체
   <img src="/images/taiyaki-icon.png" className="floating-cta__fish" onClick={...} alt="상담신청" />
*/
function TaiyakiSVG({ onClick }) {
  return (
    <svg
      viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"
      className="floating-cta__fish"
      onClick={onClick}
    >
      {/* 꼬리 */}
      <path d="M54 10 L70 4 L70 44 L54 38 Z" fill="#9a3d12" opacity=".9"/>
      {/* 몸통 */}
      <ellipse cx="30" cy="24" rx="26" ry="17" fill="#D4537E"/>
      {/* 배 명암 */}
      <ellipse cx="30" cy="28" rx="20" ry="11" fill="#BA7517" opacity=".22"/>
      {/* 비늘 결 */}
      <path d="M30 10 Q24 18 30 26 Q36 18 30 10" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1.2"/>
      <path d="M42 13 Q36 21 42 29" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="1"/>
      {/* 눈 */}
      <circle cx="13" cy="18" r="4" fill="#4B1528"/>
      <circle cx="12" cy="17" r="1.5" fill="rgba(255,255,255,.8)"/>
      {/* 입 */}
      <path d="M10 24 Q14 28 18 24" stroke="#4B1528" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* 지느러미 */}
      <path d="M22 8 Q18 14 22 20" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.5"/>
    </svg>
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
