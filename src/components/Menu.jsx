const menus = [
  { emoji: '🐟', name: '팥 붕어빵', desc: '국내산 팥 통팥 앙금' },
  { emoji: '🍫', name: '슈크림 붕어빵', desc: '부드러운 커스터드 크림' },
  { emoji: '🧀', name: '치즈 붕어빵', desc: '쫀득한 모짜렐라 치즈' },
  { emoji: '🍠', name: '고구마 붕어빵', desc: '달콤한 군고구마 크림' },
]

export default function Menu() {
  return (
    <section className="menu">
      <div className="menu__inner">
        <div className="menu__header">
          <p className="section-tag">Our Menu</p>
          <h2 className="section-title">호호붕붕 대표 메뉴</h2>
        </div>
        <div className="menu__grid">
          {menus.map((m) => (
            <div className="menu__card" key={m.name}>
              <div className="menu__card-img">
                {/* 이미지 에셋 수령 후 <img> 태그로 교체 */}
                {m.emoji}
              </div>
              <div className="menu__card-body">
                <div className="menu__card-name">{m.name}</div>
                <div className="menu__card-desc">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
