import { NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  {
    label: '브랜드스토리', to: '/brand',
    sub: [
      { label: '브랜드 컨셉', to: '/brand#concept' },
      { label: '제조공장', to: '/brand#factory' },
    ]
  },
  { label: '메뉴소개', to: '/menu' },
  { label: '매장위치', to: '/location' },
  {
    label: '창업안내', to: '/franchise',
    sub: [
      { label: '창업안내', to: '/franchise#guide' },
      { label: '창업유형', to: '/franchise#types' },
      { label: '상담신청', to: '/franchise#inquiry' },
    ]
  },
]

export default function Nav() {
  const navigate = useNavigate()

  const handleSubClick = (to) => {
    const [path, hash] = to.split('#')
    navigate(path)
    if (hash) setTimeout(() => {
      const el = document.getElementById(hash)
      if (el) {
        const offset = 64 + 52 + 16
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 120)
  }

  return (
    <nav className="nav">
      <div className="nav__inner">
        {/* 🖼 로고 교체 포인트: SVG 받으면 아래 img 태그의 display를 block으로, 텍스트 로고는 숨기기 */}
        <NavLink to="/" className="nav__logo">
          <img src="/images/logo.svg" alt="호호붕붕" style={{ display: 'none' }} />
          <span>호호붕붕 <span>®</span></span>
        </NavLink>

        <div className="nav__menu">
          {navItems.map(item => (
            <div className="nav__item" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
              {item.sub && (
                <div className="nav__dropdown">
                  {item.sub.map(s => (
                    <button
                      key={s.to}
                      className="nav__dropdown-item"
                      onClick={() => handleSubClick(s.to)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
