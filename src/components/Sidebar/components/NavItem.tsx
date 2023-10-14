import Link from 'next/link'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <Link
      href={`${
        title.toLowerCase() === 'dashboard' ? '/' : `${title.toLowerCase()}`
      }`}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-primary"
    >
      <Icon className="h-5 w-5 text-primaryLight" />
      <span className="font-normal text-zinc-300">{title}</span>
    </Link>
  )
}
