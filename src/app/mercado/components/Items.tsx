import { IProps } from '../page'
import { Item } from './Item'

interface ItemsProps {
  tasks: IProps[]
  onComplete: (taskId: string) => void
  onDelete: (taskId: string) => void
}

// export function Items({ tasks, onComplete, onDelete }: ItemsProps) {
export function Items() {
  // const tasksQuantity = tasks.length
  // const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <section className="w-full lg:max-w-2xl container mx-auto lg:mt-4 lg:px-4">
      <div className="flex flex-col gap-3">
        {/* {tasks.map((task) => (
          <Item
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))} */}

        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />

        {/* {tasks.length <= 0 && (
          <section className="mt-16 items-center justify-center flex flex-col gap-4 text-zinc-400 text-center">
            <ClipboardEdit className="w-10 h-10" />
            <div>
              <p>Você ainda não tem itens cadastradas</p>
              <span>Adicione itens a sua lista</span>
            </div>
          </section>
        )} */}
      </div>
    </section>
  )
}
