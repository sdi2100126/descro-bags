import Image from 'next/image'
import { Eyebrow } from '@/components/eyebrow'
import { FadeIn } from '@/components/fade-in'

export function Gallery() {
  return (
    <section id="gallery" className="bg-card px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center md:mb-20">
          <Eyebrow>The Lookbook</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-snug md:text-5xl">
            Worn slowly, everywhere
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <FadeIn className="col-span-2 row-span-2 md:col-span-2">
            <div className="relative h-full min-h-72 overflow-hidden rounded-3xl shadow-sm md:min-h-[36rem]">
              <Image
                src="/images/gallery-1.png"
                alt="Warm-toned portrait of a woman in a beige knit sweater holding a cream crochet bag"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn className="col-span-2 md:col-span-2" delay={100}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/gallery-2.png"
                alt="Close-up of hands crocheting with cream cotton yarn on a linen tablecloth"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/gallery-3.png"
                alt="Sage green crochet bag on a wooden cafe chair beside dried flowers in warm sunlight"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/gallery-5.png"
                alt="Woman carrying a warm brown crochet bag against a sunlit cream stucco wall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </FadeIn>
          <FadeIn className="col-span-2 md:col-span-4" delay={250}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-sm md:aspect-[21/7]">
              <Image
                src="/images/gallery-4.png"
                alt="Macro detail of blush pink crochet stitch texture in soft warm light"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
