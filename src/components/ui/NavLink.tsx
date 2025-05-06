import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = '',
  onClick
}) => {
  return (
    <a
      href={href}
      className={`text-gray-500 font-medium hover:text-yellow-500 transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};