'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
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
      <strong className="text-3xl text-zinc-200">{title}</strong>

      {status === 'unauthenticated' && (
        <button
          className="text-sm font-semibold text-zinc-200"
          onClick={handleSingIn}
        >
          Login
        </button>
      )}

      {status === 'authenticated' && (
        <div className="border-gray2 relative flex items-center gap-3 rounded-full border border-solid py-2 px-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
              <Menu size={20} className="cursor-pointer text-gray2" />
              <Image
                src={data.user.image!}
                alt={data.user.name!}
                width={30}
                height={30}
                className="rounded-full"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-3 mt-2 bg-gray4">
              <DropdownMenuLabel className="text-gray2">
                Minha conta
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-gray2 border-border cursor-pointer border-b border-solid pb-2 text-sm font-semibold">
                <Link href="/profile">Meu perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-gray2 cursor-pointer pt-2 text-sm font-semibold"
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
