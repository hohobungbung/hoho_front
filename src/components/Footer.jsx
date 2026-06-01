export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            {/* 🖼 로고 SVG 받으면 img 태그로 교체 */}
            <div className="footer__logo">호호붕붕 <span>®</span></div>
            <div className="footer__tagline">사계절 따뜻한 간식</div>
          </div>
        </div>
        <div className="footer__info">
          <span>상호: 호호붕붕</span>
          <span>대표자: (대표자명)</span>
          <span>사업자등록번호: (번호)</span>
          <span>주소: 서울특별시 강동구 상일동</span>
          <span>상담문의: 010.5518.3807</span>
        </div>
      </div>
      <div className="footer__bottom">© 2026 호호붕붕. All rights reserved.</div>
    </footer>
  )
}
