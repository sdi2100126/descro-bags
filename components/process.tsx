import { Eyebrow } from '@/components/eyebrow'
import { FadeIn } from '@/components/fade-in'

const steps = [
  {
    number: '01',
    title: 'Sourcing the yarn',
    description:
      'Natural cotton yarns chosen by hand for softness, strength, and warm, muted colour.',
  },
  {
    number: '02',
    title: 'Hand-stitching',
    description:
      'Twelve to twenty hours of slow, careful crochet — every loop worked by the same two hands.',
  },
  {
    number: '03',
    title: 'Quality check',
    description:
      'Each seam, strap, and stitch is inspected twice before a bag is allowed to leave the studio.',
  },
  {
    number: '04',
    title: 'Wrapped with care',
    description:
      'Folded into tissue, tied with ribbon, and sent off with a handwritten note of thanks.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-card px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center md:mb-20">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-snug md:text-5xl">
            From skein to shoulder
          </h2>
        </FadeIn>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <li className="flex h-full flex-col rounded-3xl bg-background p-8 shadow-sm">
                <span className="font-serif text-2xl text-accent" aria-hidden="true">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {step.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
