import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'

const posts = [
  {
    image: '/images/insta-1.webp',
    alt: 'Flat lay of cream and blush cotton yarn skeins with a wooden crochet hook',
  },
  {
    image: '/images/insta-2.webp',
    alt: 'Crochet bag wrapped in tissue paper with a sage ribbon and kraft tag',
  },
  {
    image: '/images/insta-3.webp',
    alt: 'Morning coffee beside a blush pink crochet bag on a linen bedspread',
  },
  {
    image: '/images/gallery-2.webp',
    alt: 'Hands crocheting with cream cotton yarn at a linen-covered table',
  },
  {
    image: '/images/gallery-4.webp',
    alt: 'Macro detail of blush pink crochet stitches in warm light',
  },
  {
    image: '/images/bag-bucket.webp',
    alt: 'Sage green crochet bucket bag hanging against a warm cream wall',
  },
]

export function InstagramGrid() {
  return (
    <section className="bg-background px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-balance font-serif text-3xl leading-snug md:text-4xl">
            Follow along{' '}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              @descro.studio
            </a>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-5">
          {posts.map((post, i) => (
            <FadeIn key={post.image} delay={i * 75}>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
