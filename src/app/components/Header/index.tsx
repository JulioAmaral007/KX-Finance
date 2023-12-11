'use client'
interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex h-[93px] w-screen items-center justify-between px-5 lg:w-full">
      <strong className="text-3xl text-zinc-200">{title}</strong>
    </div>
  )
}
