import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './styles/main.scss'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import MainPage from './pages/MainPage'
import BrandPage from './pages/BrandPage'
import MenuPage from './pages/MenuPage'
import LocationPage from './pages/LocationPage'
import FranchisePage from './pages/FranchisePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-wrap">
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
        </Routes>
        <Footer />
      </div>
      <FloatingCTA />
    </BrowserRouter>
  )
}
