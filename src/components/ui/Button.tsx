import React from 'react';

export function Button({ children, className = '', variant, ...props }) {
  const base = 'px-6 py-2 rounded-lg font-medium';
  const styles =
    variant === 'outline'
      ? 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
      : variant === 'secondary'
        ? 'bg-secondary text-white hover:bg-secondary/90'
        : 'bg-accent1 text-white hover:bg-accent1/90';

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
