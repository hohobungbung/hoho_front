import { useState } from 'react'

/* 🖼 에셋 교체 포인트: src: null → '/images/menu-xxx.jpg' */
const MENU_DATA = {
  붕어빵: [
    { emoji:'🐟', name:'팥 붕어빵', sub:'Red Bean', price:'900원', desc:'국내산 통팥 앙금. 팥소가 밀가루보다 더 많은 붕어빵. 재료를 아끼지 않는 정직함', src:null },
    { emoji:'🍮', name:'슈크림 붕어빵', sub:'Custard', price:'900원', desc:'부드럽고 달콤한 커스터드 크림. 한 입 베어물면 크림이 흘러나옵니다', src:null },
    { emoji:'🍠', name:'고구마 붕어빵', sub:'Sweet Potato', price:'1,500원', desc:'달콤한 군고구마 크림. 부드럽고 고소한 풍미', src:null },
    { emoji:'🧀', name:'치즈 붕어빵', sub:'Mozzarella', price:'-', desc:'모짜렐라 2장 기본. 늘어나는 치즈의 쫀득한 식감', src:null, badge:'NEW' },
  ],
  미니붕어빵: [
    { emoji:'🐡', name:'미니 팥 붕어빵', sub:'Mini Red Bean', price:'-', desc:'한 입에 쏙, 간식으로 선물로. 작지만 가득한 행복', src:null, badge:'NEW' },
    { emoji:'🤍', name:'미니 슈크림 붕어빵', sub:'Mini Custard', price:'-', desc:'한 입에 쏙, 미니붕어빵. 달콤한 커스터드가 가득', src:null, badge:'NEW' },
  ],
  십원빵: [
    { emoji:'🪙', name:'십원빵', sub:'10원빵', price:'-', desc:'즐겨워 호회만원 — 삼이코즈로 빵빵. 바삭하고 고소한 십원빵', src:null, badge:'NEW' },
    { emoji:'🟡', name:'치즈 십원빵', sub:'Cheese 10원빵', price:'-', desc:'녹아흐르는 치즈가 가득한 십원빵 시리즈', src:null, badge:'NEW' },
  ],
  땅콩빵: [
    { emoji:'🥜', name:'통 땅콩 붕어빵', sub:'Whole Peanut', price:'-', desc:'통 땅콩 4개 이상 보장. 고소함이 터집니다. 업계 최고 품질의 재료', src:null, badge:'NEW' },
    { emoji:'🥜', name:'땅콩 크림빵', sub:'Peanut Cream', price:'-', desc:'고소한 땅콩 크림이 가득한 부드러운 빵', src:null },
  ],
  계란빵: [
    { emoji:'🍳', name:'계란빵', sub:'Egg Bread', price:'-', desc:'촉촉하고 담백한 계란빵. 아침 간식으로 안성맞춤', src:null },
  ],
  음료: [
    { emoji:'☕', name:'아메리카노', sub:'Americano', price:'-', desc:'붕어빵과 함께 즐기는 따뜻한 커피', src:null },
    { emoji:'🍵', name:'쌍화차', sub:'Herbal Tea', price:'-', desc:'따뜻한 쌍화차로 몸을 녹이세요', src:null },
  ],
  기타: [
    { emoji:'🎁', name:'선물세트', sub:'Gift Set', price:'-', desc:'소중한 사람에게 전하는 호호붕붕 선물세트', src:null },
    { emoji:'🛍', name:'테이크아웃박스', sub:'Takeout Box', price:'-', desc:'갓 구운 붕어빵을 따뜻하게 포장해드립니다', src:null },
  ],
}
const TAB_KEYS = Object.keys(MENU_DATA)

function MenuPopup({ item, onClose }) {
  return (
    <div className="menu-popup-backdrop" onClick={onClose}>
      <div className="menu-popup" onClick={e => e.stopPropagation()}>
        <div className="menu-popup__img">
          {item.src ? <img src={item.src} alt={item.name} /> : item.emoji}
          {/* 🖼 에셋 교체: item.src에 이미지 경로 넣으면 자동 표시 */}
        </div>
        <div className="menu-popup__body">
          {item.badge && <span className="menu-card__badge" style={{ position:'static', marginBottom:10, display:'inline-block' }}>{item.badge}</span>}
          <div className="menu-popup__name">{item.name}</div>
          <div className="menu-popup__sub">{item.sub}</div>
          <div className="menu-popup__price">{item.price}</div>
          <p className="menu-popup__desc">{item.desc}</p>
          <button className="menu-popup__close" onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  )
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState(TAB_KEYS[0])
  const [popup, setPopup] = useState(null)
  const items = MENU_DATA[activeTab]

  return (
    <>
      {popup && <MenuPopup item={popup} onClose={() => setPopup(null)} />}
      <div className="page-hero">
        <div className="page-hero__inner">
          <p className="page-hero__tag">Our Menu</p>
          <h1 className="page-hero__title">
            호호붕붕 <span className="text-grad">메뉴 소개</span>
          </h1>
        </div>
      </div>
      <section className="menu-page">
        <div className="menu-page__inner">
          <div className="menu-tabs">
            {TAB_KEYS.map(t => (
              <button key={t} className={`menu-tab${activeTab===t?' active':''}`} onClick={() => setActiveTab(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="menu-photo-grid">
            {items.map(item => (
              <div className="menu-photo-card" key={item.name} onClick={() => setPopup(item)}>
                <div className="menu-photo-card__img">
                  {item.src ? <img src={item.src} alt={item.name} /> : item.emoji}
                  {item.badge && <span className="menu-card__badge">{item.badge}</span>}
                </div>
                <div className="menu-photo-card__body">
                  <div className="menu-photo-card__name">{item.name}</div>
                  <div className="menu-photo-card__desc">{item.desc.substring(0,30)}...</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background:'var(--light-pink)', borderRadius:16, padding:'32px', textAlign:'center', marginTop:60 }}>
            <p style={{ fontFamily:'var(--font-korean)', fontSize:18, fontWeight:700, color:'var(--text)', marginBottom:10 }}>
              모짜렐라 2장 기본 · 통 땅콩 <span className="text-grad-gold">4개 이상 보장</span>
            </p>
            <p style={{ fontSize:14, color:'#888' }}>재료를 아끼지 않는 정직함이 고객의 신뢰를 만듭니다</p>
          </div>
        </div>
      </section>
    </>
  )
}
