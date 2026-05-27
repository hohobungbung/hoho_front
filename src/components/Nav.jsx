export default function Nav({ onCtaClick }) {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__logo">
          호호붕붕 <span>®</span>
        </div>
        <button className="nav__cta" onClick={onCtaClick}>
          가맹 상담 신청
        </button>
      </div>
    </nav>
  )
}
