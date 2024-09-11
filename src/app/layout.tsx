import '@/assets/styles/global.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

type MainLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  title: 'Beng Move',
  keywords: 'rental, property, real estate',
  description: 'Find the best rental property for you'
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout
