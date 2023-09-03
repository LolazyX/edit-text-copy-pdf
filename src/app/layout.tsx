import './globals.css'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import Navbar from './sections/navbar'

const prompt = Prompt({ subsets: ['latin'], display: 'swap', weight: '400' })

export const metadata: Metadata = {
  title: 'แก้ไขตัวอักษรจาก PDF ผิดเพี้ยน',
  description: 'เมื่อคัดลอกอักษรจาก PDF แล้วผิดเพี้ยน เราสามารถช่วยได้โดยสามารถจัดเรียงอักษรใหม่ให้ใกล้เคียงกับหลักไวยากรณ์',
  themeColor: '#000',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={prompt.className}>
          <Navbar />
          {children}
      </body>
    </html>
  )
}
