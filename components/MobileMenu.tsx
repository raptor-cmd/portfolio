'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Menu Panel */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-card border-l border-border z-50 
        transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Menú</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Cerrar menú"
            >
              <svg 
                className="w-5 h-5 text-foreground" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={onClose}
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/blog"
                onClick={onClose}
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
              >
                Blog
              </Link>
            </div>
          </nav>
          
          {/* Footer with Theme Toggle */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
