import Image from 'next/image'

export function Logo() {
  return (
    <strong className="mx-auto flex flex-col items-center text-zinc-400">
      <Image width={28} height={28} src={'/kira.svg'} alt="Logo" />

      <span className="text-sm">KX Finance</span>
    </strong>
  )
}
