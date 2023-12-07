import { Quicksand } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
})

export const metadata = {
  title: 'Julain`s Abenteuer',
  description: 'Gute-Nacht Geschichten für kinder',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {quicksand.styles}
      </head>
      <body className={quicksand.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
