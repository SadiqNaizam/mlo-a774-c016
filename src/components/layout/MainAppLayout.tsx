import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-background text-foreground">
      <div className="grid h-full grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        {/* Sidebar takes the first column and spans both rows */}
        <Sidebar className="row-span-2" />

        {/* Header takes the first row of the second column */}
        <Header />

        {/* Main content takes the second row of the second column and is scrollable */}
        <main className="overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
