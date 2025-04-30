import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div className={`w-full max-w-sm sm:max-w-md md:max-w-full shadow-lg rounded-2xl ${className} bg-amber-200`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }) {
    return <div className={className}>{children}</div>
  }