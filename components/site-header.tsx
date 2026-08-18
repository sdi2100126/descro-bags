'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Collection', href: '/#collection' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Our Story', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="font-serif text-2xl tracking-wide text-foreground">
          Descro
        </Link>
        <div className="flex items-center gap-4">
          {/* Desktop nav links (hidden on mobile) */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-wide text-foreground/90 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/20"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full z-20 mt-2 bg-background border-b border-box-shadow rounded-b-lg">
          <nav className="px-6 pb-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded hover:bg-accent/20 text-sm text-foreground/90 hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)} // close menu when a link is clicked
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}