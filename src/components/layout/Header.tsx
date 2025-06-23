import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // The TopHeader is a self-contained component with its own styling (height, stickiness, content).
  // This layout component wraps it, allowing it to be placed correctly within a parent grid layout.
  // TopHeader already uses a semantic <header> element.
  return (
    <div className={className}>
      <TopHeader />
    </div>
  );
};

export default Header;
