import { prisma } from '@/lib/prisma'
import { ClipboardEdit } from 'lucide-react'
import { Item } from './Item'

async function getShop() {
  const shop = await prisma.shop.findMany({})

  return shop
}

export async function ListItems() {
  const data = await getShop()

  return (
    <section className="w-full lg:max-w-2xl container mx-auto lg:mt-4 lg:px-4">
      <div className="flex flex-col gap-3">
        {data.map((shop) => (
          <Item
            key={shop.id}
            id={shop.id}
            name={shop.name}
            quantity={shop.quantity}
            category={shop.category}
          />
        ))}

        {data.length <= 0 && (
          <section className="mt-16 items-center justify-center flex flex-col gap-4 text-zinc-400 text-center">
            <ClipboardEdit className="w-10 h-10" />
            <div>
              <p>Você ainda não tem itens cadastradas</p>
              <span>Adicione itens a sua lista</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}
