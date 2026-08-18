import Link from 'next/link'

const navLinks = [
  { label: 'Collection', href: '/#collection' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Our Story', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  return (
    <header className="bg-background border-b sticky top-0 z-40">
      <nav
        className="flex items-center justify-between px-6 py-6 md:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" className="font-serif text-2xl tracking-wide text-foreground">
          Descro
        </Link>
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
        <a
          href="/#collection"
          className="rounded-2xl bg-background/90 px-4 py-2 text-sm text-foreground transition-colors hover:bg-background md:hidden"
        >
          Shop
        </a>
      </nav>
    </header>
  )
}