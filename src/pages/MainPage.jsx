import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie, Cell } from 'recharts'
import InquiryForm from '../components/InquiryForm'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { TITLE_IMGS } from '../config/titleAssets'

const HERO_SLIDES = [
  { src:null, title:['따뜻한 겨울,','행복한 한 입!'], sub:'바삭하고 달콤한 호호붕붕과 함께!', sub2:'전국 가맹점 모집 중' },
  { src:null, title:['달콤한 행복,','나만을 위한 특별한 한 입'], sub:'매일 만나는 작은 사치', sub2:'호호붕붕과 함께!' },
  { src:null, title:['은퇴 후에도','든든한 평생 직장'], sub:'누구나 시작할 수 있는 창업', sub2:'호호붕붕이 함께합니다' },
]
const MARQUEE_ITEMS = [
  { num:'로열티', label:'없음' }, null,
  { num:'가맹비', label:'없음' }, null,
  { num:'운영 간섭', label:'없음' }, null,
  { num:'필수 물류', label:'강제 없음' }, null,
  { num:'180만원+', label:'시범점 일 매출' }, null,
  { num:'400~500만', label:'월 순수익(원)' }, null,
  { num:'3평~', label:'소규모 창업 가능' }, null,
  { num:'6개월', label:'투자비 회수 목표' }, null,
]

const FOUR_ZERO = [
  { icon:'🚫', name:'로열티 없음', desc:'매출의 일정 비율을 본사에 납부하는 구조가 없습니다. 내가 번 돈은 온전히 내 것입니다.', fromLeft:true },
  { icon:'💳', name:'가맹비 없음', desc:'계약 시 별도의 가맹비를 받지 않습니다. 교육비 200만원은 원부자재 실비로만 사용됩니다.', fromLeft:false },
  { icon:'🙅', name:'운영 간섭 없음', desc:'영업시간, 운영 방식 모두 점주님이 결정합니다. 본사는 필요할 때만 지원합니다.', fromLeft:true },
  { icon:'📦', name:'필수물류 강제 없음', desc:'특정 업체를 통한 의무 구매가 없습니다. 좋은 재료를 합리적인 가격에 자유롭게 구매하세요.', fromLeft:false },
]

const STARTUP_TYPES = [
  {
    badge:'청년 & 1인창업', emoji:'🌟',
    title:'"취업"만이 답은 아닙니다',
    brief:'중형차 한 대 비용으로 내 매장을 오픈하다.',
    detail:'스펙 경쟁, 불안한 미래, 반복되는 취업 준비. 중형차 한 대 비용으로 내 매장을 오픈하다. 호호붕붕은 청년이 현실적으로 시작할 수 있도록 설계된 브랜드입니다.',
    tags:['저비용 창업','1인 운영 가능','감성 인테리어'],
    origin:'bottom right', imgSrc:null,
  },
  {
    badge:'부부창업', emoji:'💑',
    title:'함께라서 더 효율적입니다',
    brief:'매대 2개 동시 운영으로 매출 극대화.',
    detail:'두 명이 운영하면 매대 2개 동시 운영 가능. 한 명이 굽는 동안 한 명이 판매하면 회전율이 크게 올라갑니다. 은퇴 후 든든한 평생 직장.',
    tags:['매대 2개 운영','노후 준비','매출 극대화'],
    origin:'bottom left', imgSrc:null,
  },
  {
    badge:'샵앤샵', emoji:'🏪',
    title:'기존 매장에 수익 라인 추가',
    brief:'공간만 있으면 바로 시작 가능.',
    detail:'미용실, 카페, 편의점 등 유동인구가 있는 공간이라면 충분합니다. 설치부터 교육까지 본사가 지원해드립니다.',
    tags:['기존 공간 활용','추가 수익','시즌 매출 UP'],
    origin:'top right', imgSrc:null,
  },
  {
    badge:'기타창업', emoji:'✨',
    title:'나만의 방식으로 시작',
    brief:'축제, 마켓, 푸드트럭 등 다양하게.',
    detail:'축제, 마켓, 푸드트럭 등 다양한 형태로 운영 가능. 어떤 형태로 시작하고 싶으신지 상담을 통해 맞춤 안내해드립니다.',
    tags:['유연한 운영','푸드트럭 가능','맞춤 상담'],
    origin:'top left', imgSrc:null,
  },
]

const DONUT_DATA = [
  { label:'임대료',      percent:6.67,  color:'#f5c0d0', display:'6.67%'  },
  { label:'원부자재',    percent:30,    color:'#D4537E', display:'30%'    },
  { label:'인건비',      percent:20,    color:'#e8829e', display:'20%'    },
  { label:'공과잡비세금',percent:10,    color:'#f0a8be', display:'10%'    },
  { label:'순이익',      percent:33.33, color:'#c04570', display:'30~35%' },
]

const MENUS_FAN = [
  { emoji:'🐟', name:'팥 붕어빵',     sub:'Red Bean',     price:'900원',   src:null },
  { emoji:'🍮', name:'슈크림 붕어빵',  sub:'Custard',      price:'900원',   src:null },
  { emoji:'🍠', name:'고구마 붕어빵',  sub:'Sweet Potato', price:'1,500원', src:null },
  { emoji:'🥜', name:'통 땅콩 붕어빵', sub:'Whole Peanut', price:'-',       src:null, badge:'NEW' },
  { emoji:'🧀', name:'치즈 붕어빵',    sub:'Mozzarella',   price:'-',       src:null, badge:'NEW' },
  { emoji:'🐡', name:'미니 붕어빵',    sub:'Mini',         price:'-',       src:null, badge:'NEW' },
  { emoji:'🪙', name:'십원빵',         sub:'10원빵',        price:'-',       src:null, badge:'NEW' },
]

/* ─ 히어로 ─ */
function HeroSlider() {
  const [cur, setCur] = useState(0)
  const prev = () => setCur(c => (c-1+HERO_SLIDES.length)%HERO_SLIDES.length)
  const next = () => setCur(c => (c+1)%HERO_SLIDES.length)
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t) }, [])
  return (
    <section className="hero">
      {HERO_SLIDES.map((s,i) => (
        <div key={i} className={`hero__slide${i===cur?' active':''}`} style={s.src?{backgroundImage:`url(${s.src})`}:{}}>
          <div className="hero__overlay" />
        </div>
      ))}
      <div className="hero__content">
        <p className="hero__label">Since 2026 · Gangdong-gu, Seoul</p>
        {/* 🖼 AI 폰트 이미지: titleAssets.js 의 heroTitle1/2/3 에 경로 입력 */}
        {(cur === 0 && TITLE_IMGS.heroTitle1) || (cur === 1 && TITLE_IMGS.heroTitle2) || (cur === 2 && TITLE_IMGS.heroTitle3)
          ? <>
              <img
                src={cur === 0 ? TITLE_IMGS.heroTitle1 : cur === 1 ? TITLE_IMGS.heroTitle2 : TITLE_IMGS.heroTitle3}
                alt={`${HERO_SLIDES[cur].title[0]} ${HERO_SLIDES[cur].title[1]}`}
                className="title-img"
              />
              <h1 className="sr-only">{HERO_SLIDES[cur].title[0]} {HERO_SLIDES[cur].title[1]}</h1>
            </>
          : <h1 className="hero__title">{HERO_SLIDES[cur].title[0]}<br /><em>{HERO_SLIDES[cur].title[1]}</em></h1>
        }
        <p className="hero__sub">{HERO_SLIDES[cur].sub}</p>
        <p className="hero__sub">{HERO_SLIDES[cur].sub2}</p>
        <div className="hero__checks">
          {['젊은 감성의 매장 분위기','차별화된 특별한 반죽 레시피','사계절 운영 가능한 메뉴','소형 창업 모델'].map(c=>(
            <span className="hero__check" key={c}>{c}</span>
          ))}
        </div>
        <Link to="/franchise" className="hero__btn">가맹 상담 신청하기</Link>
      </div>
      <button className="hero__arrow hero__arrow--left" onClick={prev}>‹</button>
      <button className="hero__arrow hero__arrow--right" onClick={next}>›</button>
      <div className="hero__dots">
        {HERO_SLIDES.map((_,i)=>(
          <button key={i} className={`hero__dot${i===cur?' active':''}`} onClick={()=>setCur(i)} />
        ))}
      </div>
    </section>
  )
}

/* ─ StatStrip ─ */
function StatStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="stat-strip">
      <div className="stat-strip__track-wrap">
        <div className="stat-strip__track">
          {doubled.map((item,i) =>
            item===null
              ? <span key={i} className="stat-strip__item stat-strip__sep">✦</span>
              : <div key={i} className="stat-strip__item">
                  <span className="stat-strip__num">{item.num}</span>
                  <span className="stat-strip__label">{item.label}</span>
                </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─ Brand Preview ─ */
function BrandPreview() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="brand-preview">
      <div className="brand-preview__overlay" />
      <div className="brand-preview__inner" ref={ref}>
        <p className={`brand-preview__tag reveal${visible?' visible':''}`}>Brand Story</p>
        {TITLE_IMGS.brandPreviewTitle
          ? <>
              <img src={TITLE_IMGS.brandPreviewTitle} alt="사계절 따뜻한 붕어빵, 호호붕붕" className="title-img" />
              <h2 className="sr-only">사계절 따뜻한 붕어빵, 호호붕붕</h2>
            </>
          : <h2 className={`brand-preview__title reveal${visible?' visible':''}`} style={{transitionDelay:'.1s'}}>사계절 따뜻한 붕어빵,</h2>
        }
        <p className={`brand-preview__title-sub reveal${visible?' visible':''}`} style={{transitionDelay:'.2s'}}>"호호붕붕"</p>
        <p className={`brand-preview__text reveal${visible?' visible':''}`} style={{transitionDelay:'.3s'}}>
          붕어빵은 오랫동안 노점 간식이라는 이미지로 남아 있었지만<br />
          우리는 그 속에서 누구나 좋아하는 <strong>따뜻한 간식의 가능성</strong>을 보았습니다.<br /><br />
          그래서 호호붕붕은 노점의 붕어빵을 넘어<br />
          젊은 감성의 공간에서 즐기는 사계절 간식 브랜드로 새롭게 태어났습니다.
        </p>
        <Link to="/brand" className={`more-link reveal${visible?' visible':''}`} style={{transitionDelay:'.4s'}}>
          브랜드 스토리 더 보기 →
        </Link>
      </div>
    </section>
  )
}

/* ─ 4無: 행별 컴포넌트로 분리 → 훅 루프 문제 해결 ─ */
function FourZeroRow({ item }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.3 })
  const animClass = visible ? (item.fromLeft ? 'fz-row--slide-left' : 'fz-row--slide-right') : ''
  return (
    <div ref={ref} className={`fz-row${item.fromLeft?'':' fz-row--reverse'} ${animClass}`.trim()}>
      <div className="fz-row__icon">
        <div className="fz-row__icon-circle">{item.icon}</div>
      </div>
      <div className="fz-row__text">
        <h3 className="fz-row__name">{item.name}</h3>
        <p className="fz-row__desc">{item.desc}</p>
      </div>
    </div>
  )
}

function FourZero() {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.3 })
  return (
    <section className="fz-section">
      <div className="fz-inner">
        <div className="fz-title-wrap" ref={titleRef}>
          {/* 🖼 AI 폰트 이미지: titleAssets.js 의 fourZeroTitle 에 경로 입력 */}
          {TITLE_IMGS.fourZeroTitle
            ? <>
                <img src={TITLE_IMGS.fourZeroTitle} alt="4無 로열티없음 가맹비없음 운영간섭없음 필수물류강제없음" className="title-img" style={{maxWidth:400}} />
                <h2 className="sr-only">4無 — 로열티 없음, 가맹비 없음, 운영 간섭 없음, 필수 물류 강제 없음</h2>
              </>
            : '4無'.split('').map((ch,i) => (
                <span key={i} className={`fz-char${titleVisible?' fz-char--drop':''}`} style={{animationDelay:`${i*0.2}s`}}>
                  {ch}
                </span>
              ))
          }
          <p className={`fz-sub-title reveal${titleVisible?' visible':''}`} style={{transitionDelay:'.45s'}}>
            초기 부담을 줄이고 <strong>운영 수익에 집중하는 구조</strong>
          </p>
          <span className={`four-zero__edu reveal${titleVisible?' visible':''}`} style={{transitionDelay:'.6s'}}>
            ✦ 교육비 200만원 = 2주~1개월 교육 원부자재 실비
          </span>
        </div>
        <div className="fz-rows">
          {FOUR_ZERO.map(item => <FourZeroRow key={item.name} item={item} />)}
        </div>
      </div>
    </section>
  )
}

/* ─ 창업유형 2×2: 이미지+텍스트 5:5, 호버 확장 ─ */
function StartupTypesSection() {
  const [ref, visible] = useScrollReveal({ threshold: 0.05 })
  return (
    <section className="stype-section">
      <div className={`stype-header reveal${visible?' visible':''}`} ref={ref}>
        <p className="section-tag">Who We Welcome</p>
        <h2 className="section-title">상황에 따른 <span className="keyword-box">맞춤형 설계</span></h2>
      </div>
      <div className="stype-grid">
        {STARTUP_TYPES.map(t => (
          <div key={t.badge} className="stype-card" style={{ transformOrigin: t.origin }}>
            {/* 왼쪽 이미지 (5) */}
            <div className="stype-card__img">
              {t.imgSrc
                ? <img src={t.imgSrc} alt={t.badge} />
                : <span className="stype-card__emoji">{t.emoji}</span>
              }
              {/* 🖼 에셋 교체: t.imgSrc 에 '/images/startup-xxx.jpg' 넣으면 자동 */}
            </div>
            {/* 오른쪽 텍스트 (5) */}
            <div className="stype-card__content">
              <span className="stype-card__badge">{t.badge}</span>
              <h3 className="stype-card__title">{t.title}</h3>
              <p className="stype-card__brief">{t.brief}</p>
              <div className="stype-card__detail">
                <p className="stype-card__detail-text">{t.detail}</p>
                <div className="stype-card__tags">
                  {t.tags.map(tag => <span key={tag} className="franchise-type__tag">{tag}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─ Jinis ─ */
function JinisQuality() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="jinis section section--light">
      <div className="jinis__inner" ref={ref}>
        <div className="jinis__header">
          <p className="section-tag">Quality Assurance</p>
          <h2 className="section-title">품질은&nbsp;<span className="keyword-box">지니스가 보증합니다</span></h2>
        </div>
        <div className="jinis__grid">
          <div className={`reveal-left${visible?' visible':''}`}>
            <div className="jinis__badge">🏅 HACCP 안전관리인증 · 식품의약품안전처</div>
            <h3 className="jinis__title">점주님은 <span className="text-grad-pink">굽는 것만</span><br />집중하시면 됩니다</h3>
            <p className="jinis__body">호호붕붕은 HACCP 기반 생산시설을 갖춘 지니스에서 반죽과 재료를 공급받습니다.</p>
            <div className="jinis__benefits">
              {['반복 생산시에도 품질 일관성 유지','유통기한 관리 부담 대폭 감소','문제 발생시 이력 추적 및 신속 대응','1인 운영이 가능한 실제 이유'].map(b=>(
                <div className="jinis__benefit" key={b}>{b}</div>
              ))}
            </div>
          </div>
          <div className={`jinis__img-area reveal${visible?' visible':''}`} style={{transitionDelay:'.2s'}}>제조공장 이미지</div>
        </div>
      </div>
    </section>
  )
}

/* ─ 도넛 차트 (recharts) ─ */
function DonutChart({ visible }) {
  return (
    <div className="donut-wrap">
      <div className="donut-chart-container">
        <PieChart width={380} height={380}>
          <Pie
            data={DONUT_DATA}
            cx={190} cy={190}
            innerRadius={110} outerRadius={168}
            dataKey="percent"
            startAngle={90} endAngle={450}
            animationBegin={visible ? 200 : 999999}
            animationDuration={1800}
            animationEasing="ease-out"
            isAnimationActive={visible}
          >
            {DONUT_DATA.map((entry,i) => <Cell key={i} fill={entry.color} stroke="none" />)}
          </Pie>
        </PieChart>
        <div className="donut-center">
          <span className="donut-center__label">순이익</span>
          <strong className="donut-center__value">30~35%</strong>
        </div>
      </div>
      <div className="donut-legend">
        {DONUT_DATA.map(d => (
          <div key={d.label} className="donut-legend__item">
            <span className="donut-legend__dot" style={{background:d.color}} />
            <span className="donut-legend__label">{d.label}</span>
            <span className="donut-legend__val">{d.display}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─ Revenue ─ */
function Revenue() {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 })
  const tableRef = useRef(null)
  const [rowsOn, setRowsOn] = useState(Array(6).fill(false))
  const rows = [
    { label:'매출',              amount:'15,000,000원', ratio:'100%'    },
    { label:'임대료',             amount:'1,000,000원',  ratio:'6.67%'   },
    { label:'인건비(점주님 제외)', amount:'3,000,000원',  ratio:'20%'     },
    { label:'원부자재',            amount:'4,500,000원',  ratio:'30%'     },
    { label:'공과금/고정비/세금',   amount:'1,500,000원',  ratio:'10%'     },
    { label:'순이익',              amount:'5,000,000원',  ratio:'30~35%', profit:true },
  ]
  useEffect(() => {
    if (!tableRef.current) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        rows.forEach((_,i) => setTimeout(() => setRowsOn(v => { const n=[...v]; n[i]=true; return n }), i*160))
        obs.disconnect()
      }
    }, { threshold:0.3 })
    obs.observe(tableRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="revenue" ref={ref}>
      <div className="revenue__inner" style={{textAlign:'center', marginBottom:48}}>
        <p className={`revenue__tag reveal${visible?' visible':''}`}>The Real Numbers</p>
        {TITLE_IMGS.revenueTitle
          ? <>
              <img src={TITLE_IMGS.revenueTitle} alt="4평에서 만들어내는 성공신화" className="title-img" />
              <h2 className="sr-only">4평에서 만들어내는 성공신화 — 시범점 일 매출 180만원, 순이익률 30~35%</h2>
            </>
          : <h2 className={`revenue__title reveal${visible?' visible':''}`} style={{transitionDelay:'.1s'}}>
              4평에서 만들어내는 <span className="text-grad-gold">성공신화</span>
            </h2>
        }
        <p className={`revenue__sub reveal${visible?' visible':''}`} style={{transitionDelay:'.15s'}}>투명하고 정직하게 보여드리겠습니다</p>
        <p className={`revenue__challenge reveal${visible?' visible':''}`} style={{transitionDelay:'.2s'}}>
          "타 프랜차이즈, 매출만 높으면 그만일까요? 높은 매출, 몸만 힘들고 남는 게 없다면?"
        </p>
      </div>
      <div className="revenue__body">
        <DonutChart visible={visible} />
        <div className="revenue__table-side">
          <p className="revenue__table-headline">
            <span className="keyword-box keyword-box--gold">투자비대비 6개월안에 회수가능</span>
            <span style={{fontSize:13, color:'rgba(255,255,255,.45)', marginLeft:10}}>(3평기준)</span>
          </p>
          <table className="revenue__table" ref={tableRef}>
            <thead><tr><th>구분</th><th>금액</th><th>비율</th></tr></thead>
            <tbody>
              {rows.map((r,i) => (
                <tr key={r.label} className={rowsOn[i]?'row-visible':'row-hidden'} style={{animationDelay:`${i*0.1}s`}}>
                  <td className={r.profit?'profit-row':''}>{r.label}</td>
                  <td className={r.profit?'profit-row':''}>{r.amount}</td>
                  <td className={r.profit?'profit-row':''}>{r.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="revenue__big-num">
            최대&nbsp;
            <span className="text-grad-gold" style={{fontSize:'clamp(32px,4vw,56px)', fontFamily:'var(--font-display)', fontWeight:700}}>30~35%</span>
          </div>
          <p className="revenue__bottom-copy">
            시원하게 대답해 드립니다!<br />
            시대가 변한 만큼, <strong>지금은 수익률까지 따져야 할 때!</strong>
          </p>
          <p className="revenue__notice">* 상일동 직영점 기준. 입지·운영 방식에 따라 달라질 수 있습니다.</p>
        </div>
      </div>
    </section>
  )
}

/* ─ 무지개 팬 ─ */
const FAN_RADIUS=520, FAN_CENTER_SZ=200, FAN_ANGLE=22, FAN_DECAY=0.78, FAN_RANGE=2
function FanCarousel({ items }) {
  const [center, setCenter] = useState(0)
  const n = items.length
  const prev = () => setCenter(c=>(c-1+n)%n)
  const next = () => setCenter(c=>(c+1)%n)
  const getSlot = (i) => { let s=i-center; if(s>n/2)s-=n; if(s<-n/2)s+=n; return s }
  const getStyle = (slot) => {
    const rad=slot*FAN_ANGLE*Math.PI/180
    const x=FAN_RADIUS*Math.sin(rad), y=FAN_RADIUS*(1-Math.cos(rad))
    const size=FAN_CENTER_SZ*Math.pow(FAN_DECAY,Math.abs(slot))
    const vis=Math.abs(slot)<=FAN_RANGE
    const opacity=vis?Math.max(0,1-Math.abs(slot)*0.14):0
    return { position:'absolute', width:`${size}px`, height:`${size}px`, left:`calc(50% + ${x}px)`, top:`${y}px`, transform:'translateX(-50%)', opacity, zIndex:vis?FAN_RANGE+1-Math.abs(slot):0, borderRadius:'50%', overflow:'hidden', background:'var(--light-pink)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:`${size*0.42}px`, transition:'all .55s cubic-bezier(0.4,0,0.2,1)', pointerEvents:vis?'auto':'none', boxShadow:slot===0?'0 10px 36px rgba(212,83,126,0.25)':'0 4px 14px rgba(0,0,0,0.08)' }
  }
  const centerItem = items[center]
  return (
    <div className="fan-section">
      <div className="fan-stage">
        {items.map((item,i) => {
          const slot=getSlot(i)
          return (
            <div key={i} style={getStyle(slot)}>
              {item.src?<img src={item.src} alt={item.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>:item.emoji}
              {item.badge&&slot===0&&<span style={{position:'absolute',top:10,right:10,background:'var(--brand-pink)',color:'#fff',fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:100}}>{item.badge}</span>}
            </div>
          )
        })}
      </div>
      <button className="fan-btn fan-btn--left" onClick={prev}>‹</button>
      <button className="fan-btn fan-btn--right" onClick={next}>›</button>
      <div className="fan-info">
        <div className="fan-info__name">{centerItem.name}</div>
        <div className="fan-info__sub">{centerItem.sub}</div>
        <div className="fan-info__price">{centerItem.price}</div>
      </div>
    </div>
  )
}

function MenuPreview() {
  const [ref, visible] = useScrollReveal()
  return (
    <section className="menu-preview section section--light" ref={ref}>
      <div className="menu-preview__header">
        <p className="section-tag">Our Menu</p>
        <h2 className="section-title">호호붕붕 <span className="text-grad">대표 메뉴</span></h2>
        <p style={{fontSize:14,color:'#aaa',marginTop:8}}>좌우 버튼으로 메뉴를 둘러보세요</p>
      </div>
      <div className={`reveal${visible?' visible':''}`}><FanCarousel items={MENUS_FAN} /></div>
      <div className="menu-preview__more" style={{marginTop:16}}>
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
      <StartupTypesSection />
      <JinisQuality />
      <Revenue />
      <MenuPreview />
      <InquiryForm />
    </>
  )
}
