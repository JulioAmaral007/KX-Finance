import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus } from 'lucide-react'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function CreateItem() {
  return (
    <div className="container mx-auto p-4 lg:py-4">
      <form
        // onSubmit={handleSubmit}
        className="flex flex-col lg:justify-center lg:items-center gap-4 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4"
      >
        <div className="flex flex-col lg:w-full lg:flex-1">
          <label htmlFor="item" className="text-gray2">
            Item
          </label>
          <input
            id="item"
            name="item"
            type="text"
            placeholder="Adicione um item"
            className="h-4 rounded-lg p-4 bg-gray4 text-gray2 focus:border focus:border-solid focus:border-purple focus:outline-none"
            // value={title}
            // onChange={onChangeTitle}
            // onInvalid={handleNewTaskInvalid}
            required
          />
        </div>

        <div className="flex gap-4 items-end justify-evenly">
          <div className="flex w-[100px] h-14 flex-col">
            <label htmlFor="quantidade" className="text-gray2">
              Quantidade
            </label>
            <input
              id="quantidade"
              type="number"
              className="h-full rounded-lg px-4 bg-gray4 text-gray2 focus:border focus:border-solid focus:border-purple focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray2">Categoria</label>
            <Select>
              <SelectTrigger className="w-[160px] h-4 p-4 bg-gray4 text-gray2 border-transparent hover:border hover:border-solid hover:border-purple">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent className="bg-gray4 text-gray2 border border-solid border-purple">
                <SelectItem value="padaria">Padaria</SelectItem>
                <SelectItem value="legume">Legume</SelectItem>
                <SelectItem value="fruta">Fruta</SelectItem>
                <SelectItem value="bebida">Bebida</SelectItem>
                <SelectItem value="carne">Carne</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center rounded-full p-2 w-8 h-8 mb-0.5 bg-purpleDark"
          >
            <Plus size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}
