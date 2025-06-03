import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div className={`w-full max-w-xs sm:max-w-sm md:max-w-sm rounded-2xl ${className} bg-amber-200`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }) {
    return <div className={className}>{children}</div>
  }