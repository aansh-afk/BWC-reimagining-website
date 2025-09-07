import type { Metadata } from 'next'
import './globals.css'
import MouseEffect from '@/components/MouseEffect'
import IsometricBackground from '@/components/IsometricBackground'

export const metadata: Metadata = {
  title: 'BrainWave Consulting - Engineering Tomorrow\'s Digital Infrastructure',
  description: 'Precision-engineered technology solutions driving exponential growth for forward-thinking enterprises',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <IsometricBackground />
        <MouseEffect />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
