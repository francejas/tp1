import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TP1 Francisco Cejas',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <h1>XD</h1>

        <Link href="/">Inicio</Link>
        <Link href="/contacto">Contacto</Link>

        {children}

        </body>
    </html>
  )
}