import { BarChart, Home, Settings, ShoppingBag, Wallet } from 'lucide-react'
import { NavItem } from './components/NavItem'

export function Sidebar() {
  return (
    <div>
      <nav className="space-y-0.5">
        <NavItem title="Dashboard" icon={Home} />
        <NavItem title="Nova Transação" icon={BarChart} />
        <NavItem title="Mercado" icon={ShoppingBag} />
        <NavItem title="My Wallets" icon={Wallet} />
        <NavItem title="Settings" icon={Settings} />
      </nav>
    </div>
  )
}
