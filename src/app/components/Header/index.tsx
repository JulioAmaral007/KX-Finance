'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

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
        <div className="border-primary relative flex items-center gap-3 rounded-full border border-solid py-2 px-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              Open
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-3 mt-2 bg-primary-foreground">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-primary border-border cursor-pointer border-b border-solid pb-2 text-sm font-semibold">
                <Link href="/profile">Meu perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-primary cursor-pointer pt-2 text-sm font-semibold"
                onClick={handleSignOut}
              >
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  )
}
