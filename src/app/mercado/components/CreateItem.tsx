'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Apple, Beef, Carrot, Milk, Plus, Sandwich } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'

enum CategoryEnum {
  padaria = 'padaria',
  legume = 'legume',
  fruta = 'fruta',
  bebida = 'bebida',
  carne = 'carne',
}

interface IFormInput {
  nameItem: string
  quantity: number
  category: CategoryEnum
}

export function CreateItem() {
  const { register, handleSubmit, control } = useForm()

  const onSubmit = async (data: IFormInput) => {
    await fetch('/api/shop/addItem', {
      method: 'POST',
      body: Buffer.from(
        JSON.stringify({
          name: data.nameItem,
          quantity: data.quantity,
          category: data.category,
        }),
      ),
    })
  }

  return (
    <div className="container mx-auto p-4 lg:py-4">
      <form className="flex flex-col lg:justify-center lg:items-center gap-4 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4">
        <div className="flex flex-col gap-1 lg:w-full lg:flex-1">
          <label htmlFor="item" className="text-gray2">
            Item
          </label>
          <input
            id="item"
            type="text"
            placeholder="Adicione um item"
            className="h-4 rounded-lg p-4 bg-gray4 text-gray2 focus:border focus:border-solid focus:border-purple focus:outline-none"
            {...register('nameItem', {
              required: {
                value: true,
                message: 'Texto é obrigatório.',
              },
            })}
          />
        </div>

        <div className="flex gap-4 items-end justify-evenly">
          <div className="flex w-[100px] flex-col gap-1">
            <label htmlFor="quantidade" className="text-gray2">
              Quantidade
            </label>
            <input
              id="quantidade"
              type="number"
              className="h-4 rounded-lg p-4 bg-gray4 text-gray2 focus:border focus:border-solid focus:border-purple focus:outline-none"
              {...register('quantity', {
                required: {
                  value: true,
                  message: 'Texto é obrigatório.',
                },
              })}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray2">Categoria</label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[160px] h-4 p-4 bg-gray4 text-gray2 border-transparent hover:border hover:border-solid hover:border-purple">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray4 text-gray2 border border-solid border-purple">
                    <SelectItem value="padaria">
                      <div className="flex items-center gap-2">
                        <Sandwich className="text-yellow" /> Padaria
                      </div>
                    </SelectItem>
                    <SelectItem value="legume">
                      <div className="flex items-center gap-2">
                        <Carrot className="text-green" /> Legume
                      </div>
                    </SelectItem>
                    <SelectItem value="fruta">
                      <div className="flex items-center gap-2">
                        <Apple className="text-orange" /> Fruta
                      </div>
                    </SelectItem>
                    <SelectItem value="bebida">
                      <div className="flex items-center gap-2">
                        <Milk className="text-blue" /> Bebida
                      </div>
                    </SelectItem>
                    <SelectItem value="carne">
                      <div className="flex items-center gap-2">
                        <Beef className="text-pink" /> Carne
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="flex items-center justify-center rounded-full p-2 w-8 h-8 mb-0.5 bg-purpleDark"
          >
            <Plus size={20} />
          </button>
        </div>
      </form>
    </div>
  )
}
