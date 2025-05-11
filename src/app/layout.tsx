// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Madeira Travel',
  description: 'Discover Madeira in a local way',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header será incluído no layout de todas as páginas */}
        <Header />
        
        {/* O conteúdo da página será injetado aqui */}
        <main>{children}</main>
      </body>
    </html>
  )
}
