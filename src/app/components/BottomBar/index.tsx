import { BarChart, Home, Settings, ShoppingBag, Wallet } from 'lucide-react'
import { NavItem } from './components/NavItem'

export function Sidebar() {
  return (
    <div className="fixed z-50 w-full h-20 max-w-lg bg-gray-800 bottom-0 dark:bg-gray-700 dark:border-gray-600">
      <nav className="flex justify-evenly h-full max-w-lg">
        <NavItem title="Nova Transação" icon={BarChart} />
        <NavItem title="My Wallets" icon={Wallet} />
        <NavItem title="Dashboard" icon={Home} />
        <NavItem title="Mercado" icon={ShoppingBag} />
        <NavItem title="Settings" icon={Settings} />
      </nav>
    </div>
  )
}
