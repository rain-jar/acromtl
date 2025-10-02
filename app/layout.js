import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Running Crew',
  description: 'Community runs, routes, and announcements',
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
