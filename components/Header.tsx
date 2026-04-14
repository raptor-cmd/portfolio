'use client'

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-card shadow-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <Link href="/" className="text-2xl font-bold text-foreground">
                MiBlog
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </Link>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Abrir menú"
              >
                <svg 
                  className="w-6 h-6 text-foreground" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
