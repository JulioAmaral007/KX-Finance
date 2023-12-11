import { Sidebar } from '@/components/BottomBar'
import { ToastProvider } from '@/providers/toast'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

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
      <body className={roboto.className}>
        <ToastProvider>
          <div className="grid min-h-screen bg-gray6">
            <main className="pb-12 pt-2 lg:col-start-2">{children}</main>
            <Sidebar />
          </div>
        </ToastProvider>
      </body>
    </html>
  )
}
