import Image from 'next/image'
import { Eyebrow } from '@/components/eyebrow'
import { FadeIn } from '@/components/fade-in'

const bags = [
  {
    name: 'The Ivory Tote',
    price: '$148',
    image: '/images/bag-tote.webp',
    alt: 'Handmade cream crochet tote bag with wooden handles on warm beige linen',
  },
  {
    name: 'The Blush Carry',
    price: '$132',
    image: '/images/bag-shoulder.webp',
    alt: 'Handmade blush pink crochet shoulder bag on a cream stone pedestal',
  },
  {
    name: 'The Sage Bucket',
    price: '$156',
    image: '/images/bag-bucket.webp',
    alt: 'Handmade sage green crochet bucket bag hanging on a wooden hook',
  },
  {
    name: 'The Cocoa Mini',
    price: '$118',
    image: '/images/bag-mini.webp',
    alt: 'Small handmade warm brown crochet mini bag with a golden chain strap',
  },
]

export function FeaturedBags() {
  return (
    <section id="collection" className="bg-background px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center md:mb-20">
          <Eyebrow>The Collection</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-snug md:text-5xl">
            Featured bags
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {bags.map((bag, i) => (
            <FadeIn key={bag.name} delay={i * 100}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm">
                  <Image
                    src={bag.image}
                    alt={bag.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="block rounded-2xl bg-background/95 px-4 py-3 text-center text-sm tracking-wide text-foreground shadow-sm">
                      Quick view
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl">{bag.name}</h3>
                  <p className="text-sm text-foreground/70">{bag.price}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
