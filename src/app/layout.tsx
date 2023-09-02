import './globals.css'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import Navbar from './sections/navbar'

const prompt = Prompt({ subsets: ['latin'], display: 'swap', weight: '400' })

export const metadata: Metadata = {
  title: 'Edit text Copy PDF',
  description: 'Generated by create next app',
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
