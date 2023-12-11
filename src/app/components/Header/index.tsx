'use client'
import { Logo } from './Logo'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex flex-col h-[93px] w-screen items-start justify-between px-5">
      <Logo />
      <strong className="text-3xl text-zinc-200">{title}</strong>
    </div>
  )
}
