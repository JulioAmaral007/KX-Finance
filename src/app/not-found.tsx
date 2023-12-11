import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="grid min-h-[100vh] place-items-center px-6
    py-24 sm:py-32 lg:px-8  error-page"
    >
      <div
        className="text-center py-8 sm:px-24 sm:py-8 
        rounded-lg backdrop-blur"
      >
        <p className="sm:text-2xl font-semibold text-gray-100">404</p>
        <h1
          className="mt-4 text-3xl font-extrabold tracking-tight
            text-gray-100 sm:text-6xl"
        >
          Página não encontrada
        </h1>
        <div
          className="mt-10 flex items-center justify-center
            gap-x-1 sm:gap-x-6"
        >
          <Link
            href="/"
            className="rounded-md flex items-center text-xl gap-2 px-3.5 py-2.5sm:text-lg
                font-semibold text-white shadow-sm hover:bg-teal-500
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          >
            <ArrowLeft /> Voltar ao Ínicio
          </Link>
        </div>
      </div>
    </main>
  )
}
