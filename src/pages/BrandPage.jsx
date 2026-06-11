import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IMAGES } from '../config/images'

const TABS = [{ id:'concept', label:'브랜드 컨셉' },{ id:'factory', label:'제조공장' }]

const FACTORY_ALTS = [
  '지니스 제조공장 전경', '반죽 생산 현장', '원재료 창고',
  '포장 및 출고', '제조공장 5', '제조공장 6',
  '제조공장 7', '제조공장 8', '제조공장 9',
]
const FACTORY_EMOJIS = ['🏭','🍞','📦','🚚','🧊','⚙️','🧪','📋','✅']

const FACTORY_IMAGES = IMAGES.factory.map((src, i) => ({
  src,
  alt: FACTORY_ALTS[i] ?? `제조공장 ${i + 1}`,
  emoji: FACTORY_EMOJIS[i] ?? '🏭',
}))

function ImageSlider({ images }) {
  const [cur, setCur] = useState(0)
  const prev = () => setCur(c => (c-1+images.length)%images.length)
  const next = () => setCur(c => (c+1)%images.length)
  return (
    <div className="img-slider">
      {images.map((img, i) => (
        <div key={i} className={`img-slider__slide${i===cur?' active':''}`}>
          {img.src
            ? <img src={img.src} alt={img.alt} />
            : <div className="img-slider__placeholder"><span style={{ fontSize:64 }}>{img.emoji}</span><span>{img.alt}</span></div>
          }
        </div>
      ))}
      <button className="img-slider__arrow img-slider__arrow--left" onClick={prev}>‹</button>
      <button className="img-slider__arrow img-slider__arrow--right" onClick={next}>›</button>
      <div className="img-slider__dots">
        {images.map((_, i) => (
          <button key={i} className={`img-slider__dot${i===cur?' active':''}`} onClick={() => setCur(i)} />
        ))}
      </div>
    </div>
  )
}

export default function BrandPage() {
  const [active, setActive] = useState('concept')
  const conceptRef = useRef(null)
  const factoryRef = useRef(null)
  const refMap = { concept:conceptRef, factory:factoryRef }
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - (64 + 52 + 16)
        window.scrollTo({ top, behavior: 'smooth' })
        setActive(id)
      }
    }, 100)
  }, [hash])

  const scrollTo = (id) => {
    const el = refMap[id]?.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - (64+52+16)
    window.scrollTo({ top, behavior:'smooth' })
    setActive(id)
  }
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin:'-120px 0px -55% 0px' })
    Object.values(refMap).forEach(r => { if(r.current) obs.observe(r.current) })
    return () => obs.disconnect()
  }, [])

  const [r1, v1] = useScrollReveal()
  const [r2, v2] = useScrollReveal()

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__inner">
          <p className="page-hero__tag">Brand Story</p>
          <h1 className="page-hero__title">
            호호붕붕 <span className="text-grad">브랜드 스토리</span>
          </h1>
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

      {/* 브랜드 컨셉 */}
      <section id="concept" ref={conceptRef} className="brand-full section section--light">
        <div className="brand-full__inner">
          <p className="section-tag">Brand Concept</p>
          <h2 className="section-title" style={{ fontSize:'clamp(28px,4vw,48px)', marginBottom:32 }}>
            HOHO BUNGBUNG<br />
            <span className="text-grad-gold">Brand Concept</span>
          </h2>
          <div className="divider divider--left" />

          <div ref={r1} className="brand-concept-grid" style={{ marginBottom:64 }}>
            <div className={`jinis__img-area reveal-left${v1?' visible':''}`} style={{ aspectRatio:'4/3' }}>
              {IMAGES.brandConcept
                ? <img src={IMAGES.brandConcept} alt="호호붕붕 매장" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                : '브랜드 컨셉 이미지'
              }
            </div>
            <div className={`reveal${v1?' visible':''}`} style={{ transitionDelay:'.15s' }}>
              <div className="brand-full__body">
                <p>붕어빵은 오랫동안 노점 간식이라는 이미지로 남아 있었지만 우리는 그 속에서 누구나 좋아하는 <strong>따뜻한 간식의 가능성</strong>을 보았습니다.</p>
                <p>그래서 호호붕붕은 노점의 붕어빵을 넘어 젊은 감성의 공간에서 즐기는 <strong>사계절 간식 브랜드</strong>로 새롭게 태어났습니다.</p>
                <p>차별화된 반죽으로 완성한 맛, 누구나 부담 없이 시작할 수 있는 소형 창업, 그리고 사람들이 자연스럽게 모여드는 따뜻한 공간.</p>
              </div>
            </div>
          </div>

          <div className="brand-full__highlight">
            호호붕붕은 단순히 붕어빵을 판매하는 브랜드가 아니라<br />
            <strong>작은 가게에서 시작되는 큰 행복을 만드는 브랜드</strong>입니다.<br /><br />
            누군가에게는 따뜻한 간식이 되고<br />
            누군가에게는 새로운 인생의 시작이 됩니다.<br /><br />
            따뜻한 붕어빵처럼 따뜻한 창업을 만드는 브랜드,<br />
            그것이 바로 HOHO BUNGBUNG 호호붕붕입니다.
          </div>

          <div ref={r2} style={{ marginTop:64 }}>
            <h3 className="section-title" style={{ marginBottom:32, fontSize:'clamp(22px,3vw,32px)' }}>
              호호붕붕만의 <span className="text-grad">차별점</span>
            </h3>
            <div className="brand-diff-grid">
              {[
                { num:'01', title:'차별화된 반죽', desc:'밀가루보다 팥소가 더 많은 붕어빵. 모짜렐라 2장 기본, 통 땅콩 4개 이상 보장. 재료를 아끼지 않는 정직함.' },
                { num:'02', title:'감각적인 공간', desc:'노점이 아닌 젊은 세대가 좋아하는 감각적인 매장 분위기. 인스타그램에 올리고 싶은 공간을 만듭니다.' },
                { num:'03', title:'사계절 메뉴', desc:'겨울만 아닌 사계절 운영이 가능한 메뉴 구성. 여름에도 매출이 끊기지 않는 구조를 만들었습니다.' },
              ].map((c, i) => (
                <div key={c.num} className={`brand-diff-card reveal${v2?' visible':''}`} style={{ transitionDelay:`${i*.12}s` }}>
                  <div className="brand-diff-num text-grad">{c.num}</div>
                  <div className="brand-diff-title">{c.title}</div>
                  <p className="brand-diff-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 제조공장 */}
      <section id="factory" ref={factoryRef} className="factory">
        <div className="factory__inner">
          <div className="factory__header">
            <p className="section-tag">Manufacturing</p>
            <h2 className="section-title">제조 · <span className="text-grad">품질운영의 핵심</span></h2>
            <div className="divider" />
            <p className="section-body" style={{ maxWidth:600, margin:'0 auto' }}>
              지니스의 HACCP 기반 공정은 단순히 인증을 충족하기 위한 절차를 넘어,<br />
              점주님의 운영 리스크를 줄이기 위한 관리방식입니다.
            </p>
          </div>

          {/* 슬라이더 */}
          <div style={{ marginBottom:40 }}>
            <ImageSlider images={FACTORY_IMAGES} />
          </div>

          <div style={{ display:'flex', justifyContent:'center', marginBottom:40 }}>
            <div className="factory__haccp-badge">🏅 HACCP 안전관리인증 · 식품의약품안전처</div>
          </div>

          <h3 style={{ fontFamily:'var(--font-korean)', fontSize:15, fontWeight:700, textAlign:'center', marginBottom:20, color:'var(--text)' }}>
            HACCP 기반생산 · 품질 · 공정 프로세스
          </h3>
          <div className="factory__steps">
            {[
              { n:'01', t:'상품기획\n사전관리', s:'사전위해분석\n공장설계' },
              { n:'02', t:'원재료\n매입·입고', s:'공급업체관리\n원재료검수' },
              { n:'03', t:'반죽 생산\n제조', s:'혼합반죽성형\n분할CCP관리' },
              { n:'04', t:'포장·보관\n출고관리', s:'콜드체인·FEFO\n위해요소관리' },
              { n:'05', t:'고객서비스\n검증·개선', s:'클레임·로트추적\n개선' },
            ].map(s => (
              <div className="factory__step" key={s.n}>
                <div className="factory__step-num">{s.n}</div>
                <div className="factory__step-title">{s.t}</div>
                <div className="factory__step-sub">{s.s}</div>
              </div>
            ))}
          </div>

          <div className="factory__benefits">
            <div className="factory__benefits-title">가맹 점주님의 이점</div>
            <div className="factory__benefits-grid">
              {['제품 출시 이후 문제 발생가능성 최소화','제품 및 유통기한 관리 부담 감소','반복 생산시에도 품질 일관성 유지','문제 발생시 이력 추적 및 신속한 대응'].map(b => (
                <div className="factory__benefit-item" key={b}>{b}</div>
              ))}
            </div>
            <p className="factory__bottom">점주님과는 제품·품질관리의 상당부분을 지니스의 관리 체계에 맡길 수 있습니다</p>
          </div>
        </div>
      </section>
    </>
  )
}
