import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { BackToTop } from '@/components/layout/BackToTop'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
