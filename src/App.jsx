import './index.css'
import TopBar from './components/TopBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatStrip from './components/StatStrip'
import BrandStory from './components/BrandStory'
import FourZero from './components/FourZero'
import Revenue from './components/Revenue'
import StartupTypes from './components/StartupTypes'
import Menu from './components/Menu'
import StartupProcess from './components/StartupProcess'
import StartupCost from './components/StartupCost'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'

function App() {
  const scrollToForm = () => {
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <TopBar />
      <Nav onCtaClick={scrollToForm} />
      <Hero onCtaClick={scrollToForm} />
      <StatStrip />
      <BrandStory />
      <FourZero />
      <Revenue />
      <StartupTypes />
      <Menu />
      <StartupProcess />
      <StartupCost />
      <InquiryForm />
      <Footer onCtaClick={scrollToForm} />
    </>
  )
}

export default App
