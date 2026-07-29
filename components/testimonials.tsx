import { Star } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { FadeIn } from '@/components/fade-in'

const testimonials = [
  {
    quote:
      "You can feel the hours in it. The stitching is impossibly even and it somehow gets more beautiful the more I use it.",
    name: 'Mara J.',
    detail: 'The Ivory Tote',
    tone: 'blush',
  },
  {
    quote:
      "I've bought bags three times the price that felt half as considered. The wrapping alone made it feel like a gift to myself.",
    name: 'Sofia L.',
    detail: 'The Blush Carry',
    tone: 'sage',
  },
  {
    quote:
      "It arrived with a handwritten note and smelled faintly of lavender. I get asked about it every single time I carry it.",
    name: 'Anaïs R.',
    detail: 'The Sage Bucket',
    tone: 'blush',
  },
]

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-card px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center md:mb-20">
          <Eyebrow>Kind Words</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-snug md:text-5xl">
            Carried and loved
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <figure
                className={`flex h-full flex-col gap-6 rounded-3xl p-8 shadow-sm ${
                  t.tone === 'blush' ? 'bg-primary/20' : 'bg-accent/25'
                }`}
              >
                <Stars />
                <blockquote className="leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="font-serif text-lg">{t.name}</p>
                  <p className="text-sm text-foreground/60">{t.detail}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
