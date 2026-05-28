import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const goInquiry = () => { navigate('/franchise'); setTimeout(() => document.getElementById('inquiry')?.scrollIntoView({ behavior:'smooth' }), 100) }
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            {/* 🖼 로고 교체: SVG 받으면 텍스트 로고 대신 img 태그 사용 */}
            <div className="footer__logo">호호붕붕 <span>®</span></div>
            <div className="footer__tagline">사계절 따뜻한 간식</div>
          </div>
          <button className="nav__cta" onClick={goInquiry} style={{ background:'var(--brand-pink)', color:'#fff', padding:'10px 22px', borderRadius:4, fontFamily:'var(--font-korean)', fontSize:14, fontWeight:700 }}>
            지금 상담 신청
          </button>
        </div>
        <div className="footer__info">
          <span>상호: 호호붕붕</span>
          <span>대표자: (대표자명)</span>
          <span>사업자등록번호: (번호)</span>
          <span>주소: 서울특별시 강동구 상일동</span>
          <span>상담문의: 010.5518.3807</span>
        </div>
      </div>
      <div className="footer__bottom">
        © 2026 호호붕붕. All rights reserved.
      </div>
    </footer>
  )
}
