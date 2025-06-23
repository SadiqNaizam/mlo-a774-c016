import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  UserCircle,
  FileText,
  Receipt,
  ShoppingBasket,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Menu
} from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', icon: LayoutGrid, href: '#', active: true },
  { name: 'Leads', icon: Users, href: '#' },
  { name: 'Customers', icon: UserCircle, href: '#' },
  { name: 'Proposals', icon: FileText, href: '#' },
  { name: 'Invoices', icon: Receipt, href: '#' },
  { name: 'Items', icon: ShoppingBasket, href: '#' },
  { name: 'Mail', icon: Mail, href: '#' },
  { name: 'Sheebox', icon: Archive, href: '#' },
  { name: 'Calendar', icon: CalendarDays, href: '#' },
];

const supportNavItems: NavItem[] = [
  { name: 'Help', icon: HelpCircle, href: '#' },
  { name: 'Settings', icon: Settings, href: '#' },
  { name: 'Help', icon: HelpCircle, href: '#' }, // As per image, 'Help' appears twice
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border h-screen">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-full text-white flex items-center justify-center font-bold text-lg">B</div>
                <span className="sr-only">Logo</span>
            </div>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between py-4">
        <nav className="px-4 space-y-2">
          {mainNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                item.active
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'hover:bg-sidebar-accent/50'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </a>
          ))}
        </nav>
        <nav className="px-4 space-y-2">
           {supportNavItems.map((item, index) => (
            <a
              key={`${item.name}-${index}`}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-sidebar-accent/50'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarNav;
