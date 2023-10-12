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
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-900" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 ">
        {title}
      </span>
    </Link>
  )
}
