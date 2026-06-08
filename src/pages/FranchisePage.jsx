import { useRef, useState, useEffect } from 'react'
import InquiryForm from '../components/InquiryForm'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IMAGES } from '../config/images'

const TABS = [{ id:'guide', label:'창업안내' },{ id:'types', label:'창업유형' },{ id:'inquiry', label:'상담신청' }]

// ─── 실제 매출 데이터 (3~5월) ───────────────────────────
const MONTHLY_DATA = [
  {
    month:'3월', badge:'비수기 오픈', color:'#4B7BEC',
    total:'43,340,500원',
    weeks:[
      { label:'1주 3/1~3/7', days:[
        {d:'3/1(토)', v:'미오픈'},
        {d:'3/2(일)', v:'₩934,500'},
        {d:'3/3(월)', v:'₩1,072,500'},
        {d:'3/4(화)', v:'₩1,373,000'},
        {d:'3/5(수)', v:'₩1,333,500'},
        {d:'3/6(목)', v:'₩1,273,000'},
        {d:'3/7(금)', v:'₩1,747,500'},
      ]},
      { label:'2주 3/8~3/14', days:[
        {d:'3/8(토)',  v:'₩1,794,000'},
        {d:'3/9(일)',  v:'휴무', holiday:true},
        {d:'3/10(월)', v:'₩1,694,000'},
        {d:'3/11(화)', v:'₩1,557,000'},
        {d:'3/12(수)', v:'₩1,692,000'},
        {d:'3/13(목)', v:'₩1,786,500'},
        {d:'3/14(금)', v:'₩1,804,000'},
      ]},
      { label:'3주 3/15~3/21', days:[
        {d:'3/15(토)', v:'₩1,730,000'},
        {d:'3/16(일)', v:'휴무', holiday:true},
        {d:'3/17(월)', v:'₩1,740,000'},
        {d:'3/18(화)', v:'₩1,829,500'},
        {d:'3/19(수)', v:'₩1,542,500'},
        {d:'3/20(목)', v:'₩1,855,000'},
        {d:'3/21(금)', v:'₩2,103,000'},
      ]},
      { label:'4주 3/22~3/28', days:[
        {d:'3/22(토)', v:'₩1,932,000'},
        {d:'3/23(일)', v:'휴무', holiday:true},
        {d:'3/24(월)', v:'₩1,906,500'},
        {d:'3/25(화)', v:'₩1,662,500'},
        {d:'3/26(수)', v:'₩1,639,000'},
        {d:'3/27(목)', v:'₩1,704,000'},
        {d:'3/28(금)', v:'₩2,097,500'},
      ]},
      { label:'5주 3/29~3/31', days:[
        {d:'3/29(토)', v:'₩1,802,500'},
        {d:'3/30(일)', v:'휴무', holiday:true},
        {d:'3/31(월)', v:'₩1,785,000'},
      ]},
    ]
  },
  {
    month:'4월', badge:'봄 시즌', color:'#20bf6b',
    total:'42,029,500원',
    weeks:[
      { label:'1주 4/1~4/7', days:[
        {d:'4/1(화)',  v:'₩1,414,500'},
        {d:'4/2(수)',  v:'₩1,610,500'},
        {d:'4/3(목)',  v:'₩1,700,500'},
        {d:'4/4(금)',  v:'₩1,970,000'},
        {d:'4/5(토)',  v:'₩1,832,500'},
        {d:'4/6(일)',  v:'휴무', holiday:true},
        {d:'4/7(월)',  v:'₩1,585,000'},
      ]},
      { label:'2주 4/8~4/14', days:[
        {d:'4/8(화)',  v:'₩1,578,500'},
        {d:'4/9(수)',  v:'₩1,409,000'},
        {d:'4/10(목)', v:'₩1,593,500'},
        {d:'4/11(금)', v:'₩1,835,000'},
        {d:'4/12(토)', v:'₩1,519,000'},
        {d:'4/13(일)', v:'₩1,323,500'},
        {d:'4/14(월)', v:'₩1,253,500'},
      ]},
      { label:'3주 4/15~4/21', days:[
        {d:'4/15(화)', v:'₩1,278,000'},
        {d:'4/16(수)', v:'₩1,403,000'},
        {d:'4/17(목)', v:'₩1,594,500'},
        {d:'4/18(금)', v:'₩1,543,500'},
        {d:'4/19(토)', v:'₩1,094,500'},
        {d:'4/20(일)', v:'₩1,380,500'},
        {d:'4/21(월)', v:'₩1,266,500'},
      ]},
      { label:'4주 4/22~4/28', days:[
        {d:'4/22(화)', v:'₩1,169,500'},
        {d:'4/23(수)', v:'₩1,290,500'},
        {d:'4/24(목)', v:'₩1,248,000'},
        {d:'4/25(금)', v:'₩1,585,000'},
        {d:'4/26(토)', v:'₩1,453,000'},
        {d:'4/27(일)', v:'₩1,133,000'},
        {d:'4/28(월)', v:'₩1,505,500'},
      ]},
      { label:'5주 4/29~4/30', days:[
        {d:'4/29(화)', v:'₩1,221,000'},
        {d:'4/30(수)', v:'₩1,238,500'},
      ]},
    ]
  },
  {
    month:'5월', badge:'봄 시즌', color:'#fd9644',
    total:'32,158,500원',
    weeks:[
      { label:'1주 5/1~5/7', days:[
        {d:'5/1(목)',  v:'₩1,115,500'},
        {d:'5/2(금)',  v:'₩1,214,000'},
        {d:'5/3(토)',  v:'₩1,195,500'},
        {d:'5/4(일)',  v:'₩1,457,000'},
        {d:'5/5(월)',  v:'₩1,179,500'},
        {d:'5/6(화)',  v:'₩956,500'},
        {d:'5/7(수)',  v:'₩1,005,500'},
      ]},
      { label:'2주 5/8~5/14', days:[
        {d:'5/8(목)',  v:'₩1,352,500'},
        {d:'5/9(금)',  v:'₩1,361,500'},
        {d:'5/10(토)', v:'₩1,126,000'},
        {d:'5/11(일)', v:'₩1,156,500'},
        {d:'5/12(월)', v:'₩1,159,000'},
        {d:'5/13(화)', v:'₩912,000'},
        {d:'5/14(수)', v:'₩760,500'},
      ]},
      { label:'3주 5/15~5/21', days:[
        {d:'5/15(목)', v:'₩1,011,000'},
        {d:'5/16(금)', v:'₩1,012,000'},
        {d:'5/17(토)', v:'₩811,000'},
        {d:'5/18(일)', v:'₩873,500'},
        {d:'5/19(월)', v:'₩1,075,000'},
        {d:'5/20(화)', v:'₩870,000'},
        {d:'5/21(수)', v:'₩1,110,000'},
      ]},
      { label:'4주 5/22~5/28', days:[
        {d:'5/22(목)', v:'₩1,106,000'},
        {d:'5/23(금)', v:'₩1,205,000'},
        {d:'5/24(토)', v:'₩885,500'},
        {d:'5/25(일)', v:'₩833,500'},
        {d:'5/26(월)', v:'₩777,000'},
        {d:'5/27(화)', v:'₩794,000'},
        {d:'5/28(수)', v:'₩980,000'},
      ]},
      { label:'5주 5/29~5/31', days:[
        {d:'5/29(목)', v:'₩1,193,500'},
        {d:'5/30(금)', v:'₩1,007,500'},
        {d:'5/31(토)', v:'₩662,500'},
      ]},
    ]
  },
]

// ─── 수익 구조 분석 (3월 기준) ──────────────────────────
const TABLE_ROWS = [
  { label:'매출',      amount:'43,340,500원',  ratio:'100%',  profit:false },
  { label:'반죽',      amount:'8,668,100원',   ratio:'20%',   profit:false },
  { label:'부재료',    amount:'3,467,240원',   ratio:'8%',    profit:false },
  { label:'세금·경비', amount:'5,200,860원',   ratio:'12%',   profit:false },
  { label:'인건비',    amount:'6,000,000원',   ratio:'고정',   profit:false },
  { label:'월세·관리', amount:'3,000,000원',   ratio:'고정',   profit:false },
  { label:'지출계',    amount:'26,336,200원',  ratio:'-',     profit:false },
  { label:'순이익',    amount:'17,004,300원',  ratio:'-',     profit:true  },
]

const REASONS = [
  { num:'01', title:'소자본 창업', desc:'3평부터 시작 가능. 총 창업비 약 2,500만원 내외. 중형차 한 대 비용으로 내 매장을 오픈할 수 있습니다.' },
  { num:'02', title:'2인 운영 가능', desc:'최적화된 동선 설계로 부부 2명 운영 가능. 알바 불필요. 인건비 부담을 최소화합니다.' },
  { num:'03', title:'검증된 수익 구조', desc:'시범점 기준 일 매출 180만원 이상. 월 순수익 400~500만원. 투자비 6개월 내 회수 목표.' },
  { num:'04', title:'차별화된 메뉴', desc:'모짜렐라 2장 기본, 통 땅콩 4개 이상 보장. HACCP 인증 공장 납품. 업계 최고 품질 재료 고집.' },
  { num:'05', title:'본사 완전 지원', desc:'교육·운영 매뉴얼·현장 방문 지원. 처음이어도 걱정 없는 창업 시스템.' },
]

const TYPES = [
  { badge:'청년 & 1인창업', emoji:'🌟', img: IMAGES.franchiseType1, title:'"취업"만이 답은 아닙니다', subtitle:'스펙 경쟁, 불안한 미래, 반복되는 취업 준비.', desc:'중형차 한 대 비용으로 내 매장을 오픈하다. 호호붕붕은 청년이 현실적으로 시작할 수 있도록 설계된 브랜드입니다.', tags:['저비용 창업','1인 운영 가능','저금리 창업대출','감성 인테리어'] },
  { badge:'부부창업',      emoji:'💑', img: IMAGES.franchiseType2, title:'함께 운영하면 더 효율적입니다', subtitle:'은퇴 후에도 든든한 평생 직장.', desc:'두 명이 운영하면 매대 2개 동시 운영 가능. 한 명이 굽는 동안 한 명이 판매하면 회전율이 크게 올라갑니다.', tags:['매대 2개 운영','역할 분담','노후 준비','매출 극대화'] },
  { badge:'샵앤샵',        emoji:'🏪', img: IMAGES.franchiseType3, title:'기존 매장에 수익 라인 추가', subtitle:'공간만 있으면 됩니다.', desc:'미용실, 카페, 편의점 등 유동인구가 있는 공간이라면 충분합니다. 설치부터 교육까지 지원해드립니다.', tags:['기존 공간 활용','추가 수익','시즌 매출 UP','최소 공간'] },
  { badge:'기타창업',      emoji:'✨', img: IMAGES.franchiseType4, title:'나만의 방식으로 시작하세요', subtitle:'다양한 형태의 창업을 지원합니다.', desc:'축제, 마켓, 푸드트럭 등 다양한 형태로 운영 가능. 어떤 형태로 시작하고 싶으신지 상담으로 안내드립니다.', tags:['유연한 운영','푸드트럭 가능','테이크아웃형','맞춤 상담'] },
]

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
          ? <img src={t.img} alt={t.badge} style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'inherit' }} />
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

const FAQS = [
  { q:'로열티가 정말 없나요?', a:'네, 로열티는 일체 없습니다. 매출에서 본사로 납부하는 금액이 없어요. 내가 번 돈은 온전히 내 것입니다.' },
  { q:'교육비 200만원은 무엇인가요?', a:'2주~한 달간의 교육 기간 동안 사용되는 원부자재 실비입니다. 별도의 수업료가 아닙니다.' },
  { q:'1인 운영이 가능한가요?', a:'HACCP 인증 공장(지니스)에서 반죽이 공급되기 때문에 점주는 굽는 것에만 집중하면 됩니다. 1인 운영이 충분히 가능합니다.' },
  { q:'상일동 매장을 직접 볼 수 있나요?', a:'네, 상담 신청 후 상일동 직영점 방문 일정을 잡아드립니다. 실제 매출 데이터도 현장에서 직접 확인하실 수 있습니다.' },
  { q:'창업 후 지원은 어떻게 이루어지나요?', a:'교육 이후에도 운영 매뉴얼, 현장 방문 지원으로 초기 안착을 도와드립니다.' },
]

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


// 슬라이드 목록: 월별카드 3장 + 수익구조표 1장
const REVENUE_SLIDES = [
  ...MONTHLY_DATA.map((d, i) => ({ type: 'month', data: d, index: i })),
  { type: 'table' },
]

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
                        <p style={{ fontFamily:'var(--font-korean)', fontSize:16, fontWeight:700, color:'var(--white)', textAlign:'center', marginBottom:20 }}>수익 구조 분석 (3평 기준)</p>
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
              <p style={{ fontSize:16, lineHeight:2, color:'#555', wordBreak:'keep-all', maxWidth:640, margin:'0 auto' }}>
                호호붕붕이 가장 빛나는 브랜드가 아닐 수 있습니다.<br />
                하지만 매일, 매 순간 고객에게 진심을 다했고,<br />
                <strong style={{ color:'var(--brand-pink)', fontSize:18 }}>그 결과 일 매출 180만원이라는 숫자를 만들었습니다.</strong><br /><br />
                호호붕붕과 50년, 100년을 함께 할 가맹 대표님을 기다립니다.
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
                {[{ i:'장비 구입비', d:'붕어빵 틀, 가스 버너, 매대 등', a:'약 1,200만원' },{ i:'초기 재료비', d:'밀가루, 팥, 크림 등 1개월치', a:'약 300만원' },{ i:'교육비', d:'2주~1개월 실전 교육 (원부자재 실비)', a:'200만원' },{ i:'기타 준비금', d:'인허가, 예비 자금 등', a:'약 800만원' }].map(c => (
                  <tr key={c.i}><td style={{ fontWeight:600 }}>{c.i}</td><td style={{ color:'#888' }}>{c.d}</td><td style={{ textAlign:'right' }}>{c.a}</td></tr>
                ))}
                <tr className="total"><td colSpan={2} style={{ fontWeight:700 }}>총 창업 비용</td><td style={{ textAlign:'right' }}>약 2,500만원</td></tr>
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
