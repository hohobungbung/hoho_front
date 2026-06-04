export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <img src="/main_logo.svg" alt="호호붕붕" className="footer__logo-img" />
          <div className="footer__info">
            <span>상호: 호호붕붕</span>
            <span>대표자: (대표자명)</span>
            <span>사업자등록번호: (번호)</span>
            <span>주소: 서울특별시 강동구 상일동</span>
            <span>이메일: hohobungbung@gmail.com</span>
            <span>상담문의: 010.8386.2949</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">© 2026 호호붕붕. All rights reserved.</div>
    </footer>
  )
}
