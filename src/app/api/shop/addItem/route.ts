import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const req = await request.json()

  const { name, quantity, category } = req

  await prisma.shop.create({
    data: {
      name,
      quantity,
      category,
    },
  })

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 201 },
  )
}
