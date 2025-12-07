import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, description }) => {
  return (
    <div className={`bg-black border border-zinc-900 rounded-lg flex flex-col ${className}`}>
      {(title || description) && (
        <div className="p-5 border-b border-zinc-900/50">
          {title && <h3 className="text-base font-medium text-white tracking-tight">{title}</h3>}
          {description && <p className="text-sm text-zinc-500 mt-1.5">{description}</p>}
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};