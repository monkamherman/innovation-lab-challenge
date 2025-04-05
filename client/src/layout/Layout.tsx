import { Outlet } from 'react-router-dom'
import { WarpBackground } from '@/components/magicui/warp-background';
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Layout() {
  return (
    <div className="">
        <Header />
     
      <main>
        <WarpBackground>
          <Outlet />
        </WarpBackground>
      </main>
     
      <Footer />
    </div>
  )
} 