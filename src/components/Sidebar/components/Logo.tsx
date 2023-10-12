import Image from 'next/image'

export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900 ">
      <Image width={38} height={38} src={'/kira.svg'} alt="Logo" />

      <span>KX Finance</span>
    </strong>
  )
}
