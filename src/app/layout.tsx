import '@/assets/styles/global.css'

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
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
