export default function Footer({ onCtaClick }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <div className="footer__logo">
              호호붕붕 <span>®</span>
            </div>
            <div className="footer__tagline">겨울을 기다리지 않아도 되는 붕어빵</div>
          </div>
          <button className="footer__cta-btn" onClick={onCtaClick}>
            지금 상담 신청하기
          </button>
        </div>

        <div className="footer__info">
          <p>상호: 호호붕붕 · 대표자: (대표자명)</p>
          <p>주소: 서울특별시 강동구 상일동</p>
          <p>문의: (연락처) · 운영시간: (운영시간)</p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 40, paddingTop: 24 }}>
        <p className="footer__bottom">
          © 2024 호호붕붕. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
