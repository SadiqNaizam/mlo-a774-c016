import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="h-16 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 flex items-center justify-between px-6 border-b">
      <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>New Lead</DropdownMenuItem>
          <DropdownMenuItem>New Proposal</DropdownMenuItem>
          <DropdownMenuItem>New Invoice</DropdownMenuItem>
          <DropdownMenuItem>New Customer</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
