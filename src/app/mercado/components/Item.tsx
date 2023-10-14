import { CheckCircle, Milk, Trash2 } from 'lucide-react'

import { IProps } from '../page'

interface Props {
  task: IProps
  onComplete: (taskId: string) => void
  onDelete: (taskId: string) => void
}

// export function Item({ task, onComplete, onDelete }: Props) {
export function Item() {
  return (
    <div className="w-full bg-gray4 border-none px-4 flex rounded-lg items-center h-20 justify-between gap-3">
      <button
        className="w-5 h-5 bg-none border-none"
        // onClick={() => onComplete(task.id)}
      >
        {/* {task.isCompleted ? <CheckCircle /> : <div />} */}
        <CheckCircle className="text-purple" />
      </button>

      {/* <p>{task.title}</p> */}
      <div className="flex flex-col flex-1 ml-2">
        <p className="text-base text-gray1">Maça</p>
        <span className="text-xs text-gray1">1 unidade</span>
      </div>

      <div className="flex rounded-full py-1 px-3 gap-2 items-center bg-blueDark text-blue">
        <Milk className="h-4 w-4 " />
      </div>

      <button
        className="bg-none border-none text-zinc-300"
        // onClick={() => onDelete(task.id)}
      >
        <Trash2 size={20} />
      </button>
    </div>
  )
}
