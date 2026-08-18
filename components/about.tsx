import Image from 'next/image'
import { Eyebrow } from '@/components/eyebrow'
import { FadeIn } from '@/components/fade-in'

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-20">
        <FadeIn>
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] shadow-sm md:max-w-none">
            <Image
              src="/images/maker.webp"
              alt="Portrait of the maker in her sunlit studio, surrounded by baskets of yarn, holding a half-finished crochet bag"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Soft organic arch accent */}
            <div
              className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-accent/30"
              aria-hidden="true"
            />
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <Eyebrow>About the Maker</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-snug md:text-5xl">
            Every bag begins in my hands
          </h2>
          <div className="mt-8 flex flex-col gap-5 leading-relaxed text-foreground/80">
            <p>
              {
                "I learned to crochet at my grandmother's kitchen table, where an afternoon could disappear into a single row of stitches. Descro grew from that same patience — a belief that the things we carry should be made with care, not haste."
              }
            </p>
            <p>
              {
                "Each bag takes between twelve and twenty hours to complete. I choose every piece of recycled t-shirt yarn by hand, work in small batches, and never rush a stitch. When a Descro bag leaves my studio, it carries a little of that quiet with it."
              }
            </p>
          </div>
          <p
            className="mt-10 font-serif text-3xl italic tracking-wide text-primary"
            aria-hidden="true"
          >
            — Elena
          </p>
          <p className="sr-only">Signed, Elena, founder and maker of Descro</p>
        </FadeIn>
      </div>
    </section>
  )
}
