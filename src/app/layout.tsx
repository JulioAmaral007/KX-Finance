import { Sidebar } from '@/components/Sidebar'
import { NextAuthProvider } from '@/providers/auth'
import type { Metadata } from 'next'
import { Ubuntu_Mono } from 'next/font/google'
import './globals.css'

const ubuntuMono = Ubuntu_Mono({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Finance',
  description:
    'Domine suas finanças e alcance suas metas financeiras com esse aplicativo. Este aplicativo intuitivo e poderoso é o seu parceiro essencial para o sucesso financeiro.',
  keywords: ['Finanças'],
  openGraph: {
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light antialiased">
      <body className={ubuntuMono.className}>
        <NextAuthProvider>
          <div className="grid min-h-screen grid-cols-app bg-white">
            <Sidebar />
            <main className="pb-12 pt-14 lg:col-start-2 lg:px-2 lg:pt-0">
              {children}
            </main>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
