import { useRef, useState, useEffect } from 'react'
import InquiryForm from '../components/InquiryForm'
import ImgWithSkeleton from '../components/ImgWithSkeleton'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IMAGES } from '../config/images'
import { TABS, MONTHLY_DATA, TABLE_ROWS, REASONS, TYPES, FAQS, REVENUE_SLIDES } from '../data/franchiseData'

function FranchiseTypeCard({ type: t, index }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 })
  const fromLeft = index % 2 === 0
  return (
    <div
      ref={ref}
      className="franchise-type"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateX(0)'
          : `translateX(${fromLeft ? '-60px' : '60px'})`,
        transition: 'opacity .7s ease, transform .7s ease',
      }}
    >
      <div className="franchise-type__img">
        {t.img
          ? <ImgWithSkeleton src={t.img} alt={t.badge} style={{ width:'100%', height:'100%', borderRadius:'inherit' }} />
          : t.emoji
        }
      </div>
      <div>
        <span className="franchise-type__badge">{t.badge}</span>
        <h3 className="franchise-type__title">{t.title}</h3>
        <p className="franchise-type__subtitle">{t.subtitle}</p>
        <p className="franchise-type__desc">{t.desc}</p>
        <div className="franchise-type__tags">
          {t.tags.map(tag => <span key={tag} className="franchise-type__tag">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}

/* ─ 스크롤 시 카드가 하나씩 나오는 월별 매출 ─ */
function MonthlyCard({ data, index }) {
  const [ref, visible] = useScrollReveal({ threshold:0.1 })
  return (
    <div ref={ref} className={`monthly-card${visible?' visible':''}`} style={{ transitionDelay:`${index*0.15}s` }}>
      <div className="monthly-card__header">
        <div className="monthly-card__month">{data.month}</div>
        <span className="monthly-card__badge">{data.badge}</span>
        <div className="monthly-card__total">합계 {data.total}</div>
      </div>
      <div className="monthly-weeks">
        {data.weeks.map(w => (
          <div className="monthly-week" key={w.label}>
            <div className="monthly-week__label">{w.label}</div>
            {w.days.map(d => (
              <div key={d.d} className={`monthly-week__day${d.holiday?' holiday':''}`}>
                <span>{d.d}</span><span>{d.v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function RevenueTable({ activeRow }) {
  return (
    <table className="revenue__table">
      <thead><tr><th>구분</th><th>금액</th><th>비율</th></tr></thead>
      <tbody>
        {TABLE_ROWS.map((r, i) => (
          <tr key={r.label} style={{
            transform: activeRow > i ? 'translateX(0)' : 'translateX(120%)',
            opacity: activeRow > i ? 1 : 0,
            transition: `transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94) ${i*0.05}s, opacity 0.4s ease ${i*0.05}s`,
          }}>
            <td className={r.profit?'profit-row':''}>{r.label}</td>
            <td className={r.profit?'profit-row':''}>{r.amount}</td>
            <td className={r.profit?'profit-row':''}>{r.ratio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function StickyRevenueSection() {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)
  const n = REVENUE_SLIDES.length

  useEffect(() => {
    const onScroll = () => {
      const el = scrollRef.current
      if (!el) return
      const { top, height } = el.getBoundingClientRect()
      const scrolled = -top
      const max = height - window.innerHeight
      if (max <= 0) return
      const progress = Math.max(0, Math.min(scrolled / max, 1))
      setActive(Math.min(n - 1, Math.floor(progress * n)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [n])

  const bgStyle = IMAGES.revenueBg
    ? { backgroundImage:`url(${IMAGES.revenueBg})`, backgroundSize:'cover', backgroundPosition:'center' }
    : {}

  return (
    <div ref={scrollRef} style={{ height:`${n * 100}vh` }}>
      <section className="monthly-revenue monthly-revenue--sticky" style={bgStyle}>
        <div className="monthly-revenue__panel" style={{ background:`rgba(0,0,0,${IMAGES.revenuePanelOpacity ?? 0.7})` }} />

        <div className="monthly-revenue__inner">
          <div className="monthly-revenue__header">
            <p style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:14, color:'var(--soft-pink)', letterSpacing:'.15em', marginBottom:12 }}>The Real Numbers</p>
            <h2 style={{ fontFamily:'var(--font-korean)', fontSize:'clamp(22px,3vw,36px)', fontWeight:700, color:'var(--white)', marginBottom:24 }}>
              4평에서 만들어내는 <span className="text-grad-gold">성공신화</span>
            </h2>
          </div>

          {/* 트랙 — active 인덱스만큼 왼쪽으로 이동 */}
          <div className="monthly-revenue__stage">
            <div
              className="monthly-revenue__track"
              style={{ transform: `translateX(calc(-${active} * 100%))` }}
            >
              {REVENUE_SLIDES.map((slide, i) => (
                <div key={i} className="monthly-revenue__slide">
                  {slide.type === 'month'
                    ? <MonthlyCard data={slide.data} index={0} />
                    : <div className="monthly-revenue__table-slide">
                        <p style={{ fontFamily:'var(--font-korean)', fontSize:16, fontWeight:700, color:'var(--white)', textAlign:'center', marginBottom:20 }}>수익 구조 분석 (4평 기준)</p>
                        <RevenueTable activeRow={99} />
                        <p style={{ fontSize:12, color:'rgba(255,255,255,.3)', marginTop:12, textAlign:'center' }}>* 상일동 직영점 기준. 입지·운영 방식에 따라 달라질 수 있습니다.</p>
                      </div>
                  }
                </div>
              ))}
            </div>
          </div>

          <div className="monthly-revenue__dots">
            {REVENUE_SLIDES.map((_, i) => (
              <span key={i} className={`stype-dot${i === active ? ' stype-dot--active' : ''}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-item__q" onClick={() => setOpen(v=>!v)}>
        <span><span className="faq-item__q-label">Q.</span> {q}</span>
        <span className={`faq-item__icon${open?' open':''}`}>+</span>
      </button>
      {open && <div className="faq-item__a">A. {a}</div>}
    </div>
  )
}

export default function FranchisePage() {
  const [active, setActive] = useState('guide')
  const guideRef = useRef(null)
  const typesRef = useRef(null)
  const inquiryRef = useRef(null)
  const refMap = { guide:guideRef, types:typesRef, inquiry:inquiryRef }

  const scrollTo = (id) => {
    const el = refMap[id]?.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - (64+52+16)
    window.scrollTo({ top, behavior:'smooth' })
    setActive(id)
  }

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin:'-100px 0px -50% 0px' })
    Object.values(refMap).forEach(r => { if (r.current) obs.observe(r.current) })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__inner">
          <p className="page-hero__tag">Franchise</p>
          <h1 className="page-hero__title">창업 안내</h1>
        </div>
      </div>

      <div className="sticky-tabs">
        <div className="sticky-tabs__inner">
          {TABS.map(t => (
            <button key={t.id} className={`sticky-tab${active===t.id?' active':''}`} onClick={() => scrollTo(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── 창업안내 ─── */}
      <div id="guide" ref={guideRef}>
        {/* 이유 5가지 */}
        <section className="reasons section section--light">
          <div className="reasons__inner">
            <div className="reasons__header">
              <p className="section-tag">Why Hoho Bungbung</p>
              <h2 className="section-title">
                호호붕붕을&nbsp;<span className="keyword-box">창업해야 하는 이유</span>
              </h2>
              <div className="divider" />
              <p className="section-body" style={{ maxWidth:560, margin:'0 auto' }}>
                2,000만원 내외 소자본으로 시작하는 현실적인 창업.<br />
                인건비 부담 없이 1인 운영 가능, 빠른 회수 구조까지.
              </p>
            </div>
            <div className="reasons__grid">
              {REASONS.slice(0,3).map(r => (
                <div className="reason-card" key={r.num}>
                  <div className="reason-card__num text-grad">{r.num}</div>
                  <div className="reason-card__title">{r.title}</div>
                  <p className="reason-card__desc">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="reasons__grid--2">
              {REASONS.slice(3).map(r => (
                <div className="reason-card" key={r.num}>
                  <div className="reason-card__num text-grad">{r.num}</div>
                  <div className="reason-card__title">{r.title}</div>
                  <p className="reason-card__desc">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="reasons__brand-promise">
              <p style={{ fontFamily:'var(--font-korean)', fontSize:16, color:'#888', marginBottom:16 }}>창업의 꿈, 호호붕붕과 함께 하세요</p>
              <p className="brand-promise__text">
                호호붕붕이 가장 빛나는 브랜드가 아닐 수 있습니다.
                하지만 매일, 매 순간 고객에게 진심을 다했고,{' '}
                <strong style={{ color:'var(--brand-pink)', fontSize:18 }}>그 결과 일 매출 167만원이라는 숫자를 만들었습니다.</strong>
                {' '}호호붕붕과 50년, 100년을 함께 할 가맹 대표님을 기다립니다.
              </p>
            </div>
          </div>
        </section>

        {/* 월별 매출 — sticky 슬라이드 */}
        <StickyRevenueSection />

        {/* 창업 절차 */}
        <section className="process">
          <div className="process__inner">
            <div className="process__header">
              <p className="section-tag">How to Start</p>
              <h2 className="section-title">창업 절차</h2>
              <div className="divider" />
            </div>
            <div className="process__steps">
              {[
                { title:'온라인 상담 신청', desc:'하단 폼으로 이름과 연락처를 남겨주시면 1~2 영업일 내로 연락드립니다.' },
                { title:'전화 상담 및 현장 방문', desc:'상일동 직영점 방문 후 실제 운영 현장과 매출 데이터를 직접 확인하실 수 있습니다.' },
                { title:'창업 교육 (2주~1개월)', desc:'반죽 배합부터 굽는 기술, 재료 소싱, 위생 관리까지 실전 교육. 교육비 200만원은 원부자재 실비입니다.' },
                { title:'장비 세팅 및 오픈', desc:'장비 설치, 초기 재료 준비를 지원해드립니다. 준비 완료 후 바로 오픈 가능합니다.' },
              ].map((s, i) => (
                <div className="process__step" key={i}>
                  <div className="process__step-num">{i+1}</div>
                  <div className="process__step-content">
                    <div className="process__step-title">{s.title}</div>
                    <p className="process__step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 창업 비용 */}
        <section className="cost section section--light">
          <div className="cost__inner">
            <p className="section-tag">Investment</p>
            <h2 className="section-title" style={{ marginBottom:8 }}>창업 비용 안내</h2>
            <p style={{ fontSize:13, color:'#aaa' }}>로열티·가맹비·의무 물류비 없음</p>
            <table className="cost__table">
              <thead><tr><th>항목</th><th>내용</th><th style={{ textAlign:'right' }}>금액</th></tr></thead>
              <tbody>
                {[
                  { i:'시설비용',      d:'붕어빵·땅콩빵·십원빵·미니·계란빵 기계,\n온장고, 냉장고 일체', a:'약 873만원'       },
                  { i:'집기·비품·식품', d:'집기, 포장재료, 주방도구,\n초도 식품 재료',               a:'약 913만원'       },
                  { i:'인테리어비',    d:'매대, 간판, 선반, 조명 등\n(견적에 따라 상이)',              a:'견적에 따라 상이'  },
                  { i:'교육비',        d:'2주~1개월 실전 교육\n(원부자재 실비)',                     a:'200만원'         },
                  { i:'기타 준비금',   d:'인허가, 예비 자금 등',                                    a:'별도'            },
                ].map(c => (
                  <tr key={c.i}>
                    <td style={{ fontWeight:600 }}>{c.i}</td>
                    <td style={{ color:'#888', whiteSpace:'pre-line' }}>{c.d}</td>
                    <td style={{ textAlign:'right', whiteSpace:'nowrap' }}>{c.a}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td colSpan={2} style={{ fontWeight:700 }}>총 창업 비용</td>
                  <td style={{ textAlign:'right', whiteSpace:'nowrap' }}>약 2,000만원 + 인테리어</td>
                </tr>
              </tbody>
            </table>
            <p className="cost__notice">* 위 금액은 예상 비용이며 입지·장비 선택에 따라 달라질 수 있습니다.<br/>* 중형차 한 대 가격으로 시작할 수 있는 소자본 창업 모델입니다.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="faq__inner">
            <div className="faq__header">
              <p className="section-tag">FAQ</p>
              <h2 className="section-title">자주 묻는 질문</h2>
              <div style={{ display:'flex', justifyContent:'center', marginTop:16 }}>
                <span className="keyword-box">한 눈에 확인하세요!</span>
              </div>
            </div>
            {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </section>
      </div>

      {/* ─── 창업유형 ─── */}
      <section id="types" ref={typesRef} className="franchise-types">
        <div className="franchise-types__inner">
          <div className="franchise-types__header">
            <p className="section-tag">Franchise Types</p>
            <h2 className="section-title">상황에 따른 <span className="keyword-box">맞춤형 설계</span></h2>
            <div className="divider" />
          </div>
          {TYPES.map((t, i) => ( <FranchiseTypeCard key={t.badge} type={t} index={i} /> ))}
        </div>
      </section>

      {/* ─── 상담신청 ─── */}
      <div id="inquiry" ref={inquiryRef}>
        <InquiryForm />
      </div>
    </>
  )
}
