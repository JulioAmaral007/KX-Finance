import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request) {
  const req = await request.json()

  const { id } = req

  const item = await prisma.shop.delete({
    where: {
      id,
    },
  })

  return new NextResponse(JSON.stringify(item), { status: 200 })
}
