export default function Hero({ onCtaClick }) {
  return (
    <section className="hero">
      
      <div
        className="hero__slide active"
        style={{ backgroundImage: 'url(/images/in_store.png)' }}
      />

      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__sub">Since 2026 · Gangdong-gu, Seoul</p>

        <h1 className="hero__title">
          겨울을 기다리지 않아도 되는<br />
          <span className="hero__title--accent">붕어빵 창업</span>
        </h1>

        <p className="hero__desc">
          로열티 없음 · 가맹비 없음 · 운영 간섭 없음
        </p>

        <button className="hero__btn" onClick={onCtaClick}>
          무료 상담 신청하기
        </button>
      </div>
    </section>
  )
}