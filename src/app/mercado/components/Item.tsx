import { Milk, Trash2 } from 'lucide-react'

interface ItemProps {
  id: string
  name: string
  quantity: string
  category: string
}

export function Item(item: ItemProps) {
  const onDelete = async (data: ItemProps) => {
    // await fetch('/api/shop/deleteItem', {
    //   method: 'DELETE',
    //   body: Buffer.from(
    //     JSON.stringify({
    //       id: data.id,
    //     }),
    //   ),
    // })

    console.log(data.id)
  }
  return (
    <div className="w-full bg-gray4 border-none px-4 flex rounded-lg items-center h-20 justify-between gap-3">
      <button
        className="w-5 h-5 border border-purple rounded-md flex justify-center items-center"
        // onClick={() => onComplete(task.id)}
      >
        {/* {item.isCompleted ? <Check className="text-purple" /> : <div />} */}
      </button>

      {/* <p>{task.title}</p> */}
      <div className="flex flex-col flex-1 ml-2">
        <p className="text-base text-gray1">{item.name}</p>
        <span className="text-xs text-gray1">{item.quantity} unidade</span>
      </div>

      <div className="flex rounded-full py-1 px-3 gap-2 items-center bg-blueDark text-blue">
        <Milk className="w-4 h-4" />
        {item.category}
      </div>

      <button
        className="bg-none border-none text-zinc-300"
        onClick={() => onDelete(item.id)}
      >
        <Trash2 size={20} />
      </button>
    </div>
  )
}
