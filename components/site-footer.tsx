import { Mail } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const footerLinks = [
  { label: 'Collection', href: '#collection' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Story', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground px-6 py-16 text-background md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-3xl tracking-wide">Descro</p>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Handmade crochet bags, crafted one stitch at a time in small, intentional
              batches.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descro on Instagram"
                className="rounded-full bg-background/10 p-3 transition-colors hover:bg-background/20"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@descro.com"
                aria-label="Email Descro"
                className="rounded-full bg-background/10 p-3 transition-colors hover:bg-background/20"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <form className="max-w-sm" action="#">
            <p className="font-serif text-lg">A letter, now and then</p>
            <p className="mt-2 text-sm leading-relaxed text-background/70">
              New collections, studio notes, and early access — never more than once a month.
            </p>
            <div className="mt-5 flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-105"
              >
                Join
              </button>
            </div>
          </form>
        </div>

        <p className="border-t border-background/15 pt-8 text-center text-xs text-background/60">
          &copy; {new Date().getFullYear()} Descro. Handmade with patience. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
