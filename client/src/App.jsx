import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar        from '@/components/layout/Navbar'
import Footer        from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import BackToTop     from '@/components/ui/BackToTop'
import Home          from '@/pages/Home'
import About         from '@/pages/About'
import Services      from '@/pages/Services'
import Gallery       from '@/pages/Gallery'
import Contact       from '@/pages/Contact'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Routes>
        <Route path="/"         element={<Layout><Home /></Layout>} />
        <Route path="/about"    element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/gallery"  element={<Layout><Gallery /></Layout>} />
        <Route path="/contact"  element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
