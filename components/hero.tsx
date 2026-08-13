import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Collection', href: '#collection' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Story', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Hero() {
  return (
    <header className="relative min-h-svh w-full overflow-hidden">
      <Image
        src="/images/hero.webp"
        alt="Warm-toned lifestyle photo of a woman carrying a handmade cream crochet tote in golden morning light"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Soft warm scrim for legibility */}
      <div className="absolute inset-0 bg-foreground/25" aria-hidden="true" />

      <nav
        className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-12"
        aria-label="Main navigation"
      >
        <Link href="#" className="font-serif text-2xl tracking-wide text-background">
          Descro
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-background/90 transition-colors hover:text-background"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#collection"
          className="rounded-2xl bg-background/90 px-4 py-2 text-sm text-foreground transition-colors hover:bg-background md:hidden"
        >
          Shop
        </a>
      </nav>

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-background/90">
          Handmade, one stitch at a time
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl leading-tight text-background md:text-7xl md:leading-tight">
          Bags made slowly, carried for a lifetime
        </h1>
        <a
          href="#collection"
          className="mt-10 inline-block rounded-2xl bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105"
        >
          Shop the Collection
        </a>
      </div>
    </header>
  )
}
