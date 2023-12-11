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
      className="group flex items-center p-7"
    >
      <Icon className="h-7 w-7 text-primaryLight" />
    </Link>
  )
}
