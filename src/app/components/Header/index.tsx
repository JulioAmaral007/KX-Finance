'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const { status, data } = useSession()

  const handleSingIn = () => signIn()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <div className="flex h-[93px] w-screen items-center justify-between px-5 lg:w-full">
      <strong className="text-3xl text-zinc-900">{title}</strong>

      {status === 'unauthenticated' && (
        <button
          className="text-sm font-semibold text-black"
          onClick={handleSingIn}
        >
          Login
        </button>
      )}

      {status === 'authenticated' && data.user && (

      )}
    </div>
  )
}
