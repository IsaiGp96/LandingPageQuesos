import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div className={`shadow-lg rounded-2xl ${className} bg-amber-300`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '' }) {
    return <div className={className}>{children}</div>
  }