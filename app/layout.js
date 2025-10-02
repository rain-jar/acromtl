import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'AcroMTL',
  description: 'MTL community for AcroYoga',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0F0E0D] text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
