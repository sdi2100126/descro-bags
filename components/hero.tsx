import Image from 'next/image'
import Link from 'next/link'

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
