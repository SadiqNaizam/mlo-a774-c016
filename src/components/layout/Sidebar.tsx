import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The SidebarNav is a self-contained component with its own styling (width, colors, content).
  // This layout component wraps it, allowing layout-specific classes like grid positioning
  // to be applied from the parent layout without modifying the feature component.
  // SidebarNav already uses a semantic <aside> element.
  return (
    <div className={className}>
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
