import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  BarChart,
  Home,
  LifeBuoy,
  Menu,
  Settings,
  ShoppingBag,
  Wallet,
} from 'lucide-react'
import { Logo } from './components/Logo'
import { NavItem } from './components/NavItem'

export function Sidebar() {
  return (
    <Collapsible className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 bg-gray6 border-gray3 p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-56 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />

        <CollapsibleTrigger asChild className="lg:hidden">
          <button>
            <Menu className="w-6 h-6 text-white" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <nav className="space-y-0.5">
          <NavItem title="Dashboard" icon={Home} />
          <NavItem title="Nova Transação" icon={BarChart} />
          <NavItem title="Mercado" icon={ShoppingBag} />
          <NavItem title="My Wallets" icon={Wallet} />
          <NavItem title="Settings" icon={Settings} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <NavItem title="Support" icon={LifeBuoy} />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
