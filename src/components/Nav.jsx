import { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

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
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const handleSubClick = (to) => {
    const [path, hash] = to.split('#')
    navigate(path)
    setMenuOpen(false)
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
        <NavLink to="/" className="nav__logo" onClick={handleLogoClick}>
          <img src="/images/main_logo.svg" alt="호호붕붕" />
        </NavLink>

        {/* 데스크탑 메뉴 */}
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

        {/* 햄버거 버튼 */}
        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="메뉴 열기"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          {navItems.map(item => (
            <div key={item.to} className="nav__mobile-item">
              <NavLink
                to={item.to}
                className="nav__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
              {item.sub && (
                <div className="nav__mobile-sub">
                  {item.sub.map(s => (
                    <button
                      key={s.to}
                      className="nav__mobile-sub-item"
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
      )}
    </nav>
  )
}
