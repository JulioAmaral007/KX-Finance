import { Header } from '../components/Header'
import { CreateItem } from './components/CreateItem'
import { ListItems } from './components/ListItems'

// export interface IProps {
//   id: string
//   title: string
//   isCompleted: boolean
// }

export default function Mercado() {
  // const [tasks, setTasks] = useState<IProps[]>([])

  // function addTask(taskTitle: string) {
  //   setTasks([
  //     ...tasks,
  //     {
  //       id: crypto.randomUUID(),
  //       title: taskTitle,
  //       isCompleted: false,
  //     },
  //   ])
  // }

  // function deleteTaskById(taskId: string) {
  //   const newTasks = tasks.filter((task) => task.id !== taskId)
  //   setTasks(newTasks)
  // }

  // function toggleTaskCompletedById(taskId: string) {
  //   const newTasks = tasks.map((task) => {
  //     if (task.id === taskId) {
  //       return {
  //         ...task,
  //         isCompleted: !task.isCompleted,
  //       }
  //     }
  //     return task
  //   })
  //   setTasks(newTasks)
  // }

  // const [title, setTitle] = useState('')

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault()

  //   onAddTask(title)
  //   setTitle('')
  // }

  // function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
  //   event.target.setCustomValidity('Esse campo é obrigatório')
  // }

  // function onChangeTitle(event: ChangeEvent<HTMLTextAreaElement>) {
  //   event.target.setCustomValidity('')
  //   setTitle(event.target.value)
  // }

  return (
    <div>
      <Header title="Mercado" />
      <CreateItem />
      <ListItems />
    </div>
  )
}
