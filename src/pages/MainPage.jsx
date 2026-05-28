import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import InquiryForm from '../components/InquiryForm'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ===========================
   🖼 에셋 교체 포인트 (Hero)
   src: null → '/images/hero-1.jpg' 등으로 교체
=========================== */
const HERO_SLIDES = [
  { src: null, title: ['따뜻한 겨울,', '행복한 한 입!'], sub: '바삭하고 달콤한 호호붕붕과 함께!', sub2: '전국 가맹점 모집 중' },
  { src: null, title: ['달콤한 행복,', '나만을 위한 특별한 한 입'], sub: '매일 만나는 작은 사치', sub2: '호호붕붕과 함께!' },
  { src: null, title: ['은퇴 후에도', '든든한 평생 직장'], sub: '누구나 시작할 수 있는 창업', sub2: '호호붕붕이 함께합니다' },
]

const MARQUEE_ITEMS = [
  { num: '로열티', label: '없음' }, null,
  { num: '가맹비', label: '없음' }, null,
  { num: '운영 간섭', label: '없음' }, null,
  { num: '필수 물류', label: '강제 없음' }, null,
  { num: '180만원+', label: '시범점 일 매출' }, null,
  { num: '400~500만', label: '월 순수익(원)' }, null,
  { num: '3평~', label: '소규모 창업 가능' }, null,
  { num: '6개월', label: '투자비 회수 목표' }, null,
]

const FOUR_ZERO = [
  { icon: '🚫', name: '로열티 없음', desc: '매출의 일정 비율을 본사에 납부하는 구조가 없습니다. 내가 번 돈은 온전히 내 것입니다.' },
  { icon: '💳', name: '가맹비 없음', desc: '계약 시 별도의 가맹비를 받지 않습니다. 교육비 200만원은 원부자재 실비로만 사용됩니다.' },
  { icon: '🙅', name: '운영 간섭 없음', desc: '영업시간, 운영 방식 모두 점주님이 결정합니다. 본사는 필요할 때만 지원합니다.' },
  { icon: '📦', name: '필수물류 강제 없음', desc: '특정 업체를 통한 의무 구매가 없습니다. 좋은 재료를 합리적인 가격에 자유롭게 구매하세요.' },
]

/* 🖼 에셋 교체: 메뉴 이미지 src: null → '/images/menu-red-bean.jpg' */
const MENUS = [
  { emoji:'🐟', name:'팥 붕어빵', sub:'Red Bean', price:'900원', src:null },
  { emoji:'🍮', name:'슈크림 붕어빵', sub:'Custard', price:'900원', src:null },
  { emoji:'🍠', name:'고구마 붕어빵', sub:'Sweet Potato', price:'1,500원', src:null },
  { emoji:'🥜', name:'통 땅콩 붕어빵', sub:'Whole Peanut', price:'-', src:null, badge:'NEW' },
]

function HeroSlider() {
  const [cur, setCur] = useState(0)
  const prev = () => setCur(c => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  const next = () => setCur(c => (c + 1) % HERO_SLIDES.length)
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t) }, [])
  return (
    <section className="hero">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero__slide${i === cur ? ' active' : ''}`}
          style={s.src ? { backgroundImage:`url(${s.src})` } : {}}
        >
          <div className="hero__overlay" />
        </div>
      ))}
      <div className="hero__content">
        <p className="hero__label">Since 2024 · Gangdong-gu, Seoul</p>
        <h1 className="hero__title">
          {HERO_SLIDES[cur].title[0]}<br />
          <em>{HERO_SLIDES[cur].title[1]}</em>
        </h1>
        <p className="hero__sub">{HERO_SLIDES[cur].sub}</p>
        <p className="hero__sub">{HERO_SLIDES[cur].sub2}</p>
        <div className="hero__checks">
          {['젊은 감성의 매장 분위기', '차별화된 특별한 반죽 레시피', '사계절 운영 가능한 메뉴', '소형 창업 모델'].map(c => (
            <span className="hero__check" key={c}>{c}</span>
          ))}
        </div>
        <Link to="/franchise" className="hero__btn">가맹 상담 신청하기</Link>
      </div>
      <button className="hero__arrow hero__arrow--left" onClick={prev}>‹</button>
      <button className="hero__arrow hero__arrow--right" onClick={next}>›</button>
      <div className="hero__dots">
        {HERO_SLIDES.map((_, i) => (
          <button key={i} className={`hero__dot${i === cur ? ' active' : ''}`} onClick={() => setCur(i)} />
        ))}
      </div>
    </section>
  )
}

function StatStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="stat-strip">
      <div className="stat-strip__track-wrap">
        <div className="stat-strip__track">
          {doubled.map((item, i) =>
            item === null
              ? <span key={i} className="stat-strip__item stat-strip__sep">✦</span>
              : (
                <div key={i} className="stat-strip__item">
                  <span className="stat-strip__num">{item.num}</span>
                  <span className="stat-strip__label">{item.label}</span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

function BrandPreview() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="brand-preview">
      {/* 🖼 에셋 교체: style에 backgroundImage:url('/images/brand-bg.jpg') 추가 */}
      <div className="brand-preview__overlay" />
      <div className="brand-preview__inner" ref={ref}>
        <p className={`brand-preview__tag reveal${visible?' visible':''}`}>Brand Story</p>
        <h2 className={`brand-preview__title reveal${visible?' visible':''}`} style={{ transitionDelay:'.1s' }}>
          사계절 따뜻한 붕어빵,
        </h2>
        <p className={`brand-preview__title-sub reveal${visible?' visible':''}`} style={{ transitionDelay:'.2s' }}>
          "호호붕붕"
        </p>
        <p className={`brand-preview__text reveal${visible?' visible':''}`} style={{ transitionDelay:'.3s' }}>
          붕어빵은 오랫동안 노점 간식이라는 이미지로 남아 있었지만<br />
          우리는 그 속에서 누구나 좋아하는 <strong>따뜻한 간식의 가능성</strong>을 보았습니다.<br /><br />
          그래서 호호붕붕은 노점의 붕어빵을 넘어<br />
          젊은 감성의 공간에서 즐기는 사계절 간식 브랜드로 새롭게 태어났습니다.
        </p>
        <Link to="/brand" className={`more-link reveal${visible?' visible':''}`} style={{ transitionDelay:'.4s' }}>
          브랜드 스토리 더 보기 →
        </Link>
      </div>
    </section>
  )
}

function FourZero() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="four-zero">
      <div className="four-zero__overlay" />
      <div className="four-zero__inner" ref={ref}>
        <div className="four-zero__header">
          <div className={`four-zero__big reveal${visible?' visible':''}`}>4無</div>
          <p className={`four-zero__sub-title reveal${visible?' visible':''}`} style={{ transitionDelay:'.15s' }}>
            초기 부담을 줄이고 <strong>운영 수익에 집중하는 구조</strong>
          </p>
          <span className={`four-zero__edu reveal${visible?' visible':''}`} style={{ transitionDelay:'.25s' }}>
            ✦ 교육비 200만원 = 2주~1개월 교육 원부자재 실비
          </span>
        </div>
        <div className="four-zero__grid">
          {FOUR_ZERO.map((item, i) => (
            <div
              key={item.name}
              className={`four-zero__card reveal${visible?' visible':''}`}
              style={{ transitionDelay:`${.35 + i * .1}s` }}
            >
              <div className="four-zero__icon-wrap">{item.icon}</div>
              <div className="four-zero__name">{item.name}</div>
              <p className="four-zero__desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="four-zero__notice">* 로열티·가맹비·운영 간섭·필수 물류 강제 — 4가지 없는 것이 호호붕붕의 약속입니다.</p>
      </div>
    </section>
  )
}

function JinisQuality() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="jinis section section--light">
      <div className="jinis__inner" ref={ref}>
        <div className="jinis__header">
          <p className="section-tag">Quality Assurance</p>
          <h2 className="section-title">
            품질은&nbsp;
            <span className="keyword-box">지니스가 보증합니다</span>
          </h2>
        </div>
        <div className="jinis__grid">
          <div className={`reveal-left${visible?' visible':''}`}>
            <div className="jinis__badge">🏅 HACCP 안전관리인증 · 식품의약품안전처</div>
            <h3 className="jinis__title">
              점주님은 <span className="text-grad-pink">굽는 것만</span><br />
              집중하시면 됩니다
            </h3>
            <p className="jinis__body">
              호호붕붕은 HACCP 기반 생산시설을 갖춘 지니스에서 반죽과 재료를 공급받습니다.
              단순 인증을 넘어, 점주님의 운영 리스크를 줄이기 위한 철저한 품질 관리입니다.
            </p>
            <div className="jinis__benefits">
              {['반복 생산시에도 품질 일관성 유지','유통기한 관리 부담 대폭 감소','문제 발생시 이력 추적 및 신속 대응','1인 운영이 가능한 실제 이유'].map(b => (
                <div className="jinis__benefit" key={b}>{b}</div>
              ))}
            </div>
          </div>
          <div className={`jinis__img-area reveal${visible?' visible':''}`} style={{ transitionDelay:'.2s' }}>
            {/* 🖼 에셋 교체: <img src="/images/factory-main.jpg" alt="지니스 제조공장" /> */}
            제조공장 이미지
          </div>
        </div>
      </div>
    </section>
  )
}

function Revenue() {
  const tableRef = useRef(null)
  const [rowsVisible, setRowsVisible] = useState([])
  const rows = [
    { label:'매출', amount:'15,000,000원', ratio:'100%', profit:false },
    { label:'임대료', amount:'1,000,000원', ratio:'6.67%', profit:false },
    { label:'인건비', amount:'3,000,000원', ratio:'20%', profit:false },
    { label:'원부자재', amount:'4,500,000원', ratio:'30%', profit:false },
    { label:'공과금/고정비/세금', amount:'1,500,000원', ratio:'10%', profit:false },
    { label:'순이익', amount:'5,000,000원', ratio:'30~35%', profit:true },
  ]
  useEffect(() => {
    if (!tableRef.current) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        rows.forEach((_, i) => setTimeout(() => setRowsVisible(v => { const n=[...v]; n[i]=true; return n }), i*150))
        obs.disconnect()
      }
    }, { threshold:0.3 })
    obs.observe(tableRef.current)
    return () => obs.disconnect()
  }, [])
  const [ref, visible] = useScrollReveal()
  return (
    <section className="revenue">
      <div className="revenue__inner" ref={ref}>
        <p className={`revenue__tag reveal${visible?' visible':''}`}>The Real Numbers</p>
        <h2 className={`revenue__title reveal${visible?' visible':''}`} style={{ transitionDelay:'.1s' }}>
          4평에서 만들어내는 <span className="text-grad-gold">성공신화</span>
        </h2>
        <p className={`revenue__sub reveal${visible?' visible':''}`} style={{ transitionDelay:'.15s' }}>투명하고 정직하게 보여드리겠습니다</p>
        <p className={`revenue__challenge reveal${visible?' visible':''}`} style={{ transitionDelay:'.2s' }}>
          "타 프랜차이즈, 매출만 높으면 그만일까요?" — 지금은 수익률까지 따져야 할 때입니다.
        </p>
        <div className={`revenue__nums reveal${visible?' visible':''}`} style={{ transitionDelay:'.25s' }}>
          {[{ v:'180만+', u:'원 / 일', l:'시범점 일 매출\n(상일동 직영점)' },{ v:'30~35', u:'%', l:'순이익률' },{ v:'6개월', u:'내', l:'투자비 회수 목표\n(3평 기준)' }].map(n => (
            <div className="revenue__num-card" key={n.l}>
              <div className="revenue__value">{n.v}</div>
              <div className="revenue__unit">{n.u}</div>
              <div className="revenue__num-label">{n.l}</div>
            </div>
          ))}
        </div>
        <table className="revenue__table" ref={tableRef}>
          <thead><tr><th>구분</th><th>금액</th><th>비율</th></tr></thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={rowsVisible[i] ? 'row-visible' : 'row-hidden'} style={{ animationDelay:`${i*0.12}s` }}>
                <td className={r.profit ? 'profit-row' : ''}>{r.label}</td>
                <td className={r.profit ? 'profit-row' : ''}>{r.amount}</td>
                <td className={r.profit ? 'profit-row' : ''}>{r.ratio}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="revenue__notice">* 상일동 직영점 기준. 입지·운영 방식에 따라 달라질 수 있습니다.</p>
      </div>
    </section>
  )
}

function MenuPreview() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="menu-preview section section--light" ref={ref}>
      <div className="menu-preview__header">
        <p className="section-tag">Our Menu</p>
        <h2 className="section-title">
          호호붕붕 <span className="text-grad">대표 메뉴</span>
        </h2>
      </div>
      <div className="menu-grid">
        {MENUS.map((m, i) => (
          <div className={`menu-card reveal${visible?' visible':''}`} key={m.name} style={{ transitionDelay:`${i*.1}s` }}>
            <div className="menu-card__img">
              {m.src ? <img src={m.src} alt={m.name} /> : m.emoji}
              {/* 🖼 에셋 교체: m.src에 이미지 경로 넣으면 자동 표시 */}
              {m.badge && <span className="menu-card__badge">{m.badge}</span>}
            </div>
            <div className="menu-card__body">
              <div className="menu-card__name">{m.name}</div>
              <div className="menu-card__sub">{m.sub}</div>
              <div className="menu-card__price">{m.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="menu-preview__more">
        <Link to="/menu" className="more-link">전체 메뉴 보기 →</Link>
      </div>
    </section>
  )
}

export default function MainPage() {
  return (
    <>
      <HeroSlider />
      <StatStrip />
      <BrandPreview />
      <FourZero />
      <JinisQuality />
      <Revenue />
      <MenuPreview />
      <InquiryForm />
    </>
  )
}
