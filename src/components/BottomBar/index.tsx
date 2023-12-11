import { BarChart, Home, Settings, ShoppingBag, Wallet } from 'lucide-react'
import { Card } from '../ui/card'
import { NavItem } from './components/NavItem'

export function Sidebar() {
  return (
    <Card className="fixed z-50 w-full h-16 max-w-lg bg-black bottom-0 rounded-bl-none rounded-br-none dark:bg-gray-700 dark:border-gray-600">
      <nav className="flex justify-evenly h-full max-w-lg">
        <NavItem title="Nova Transação" icon={BarChart} />
        <NavItem title="My Wallets" icon={Wallet} />
        <NavItem title="Dashboard" icon={Home} />
        <NavItem title="Mercado" icon={ShoppingBag} />
        <NavItem title="Settings" icon={Settings} />
      </nav>
    </Card>
  )
}
