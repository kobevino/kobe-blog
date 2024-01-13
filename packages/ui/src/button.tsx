'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  appName: string
}

const TEST = 'TEST'
console.log(TEST)

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  )
}
