import Image from 'next/image'
import { Eyebrow } from '@/components/eyebrow'
import { FadeIn } from '@/components/fade-in'
import { getProductBySlug } from '@/lib/products'
import Link from 'next/link'

export const generateStaticParams = async () => {
  const { products } = await import('@/lib/products')
  return products.map((p) => ({ slug: p.id }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <section className="bg-background min-h-screen flex items-center justify-center p-6">
        <p className="text-center text-foreground">Product not found.</p>
      </section>
    )
  }

  return (
    <>
      <section id="product-detail" className="bg-background min-h-[calc(100vh-4rem)] py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 text-center">
            <Eyebrow>Shop</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-snug md:text-5xl">
              Product Details
            </h2>
          </FadeIn>

          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-serif">{product.name}</h1>
              <p className="text-2xl text-primary">{product.price}</p>
              <p className="text-foreground/80">{product.shortDescription}</p>

              {/* Full Description */}
              <div className="space-y-4">
                <h3 className="font-serif text-base">Description</h3>
                <p className="text-foreground/70">{product.fullDescription}</p>
              </div>

              {/* Details Section */}
              <div className="space-y-4">
                <h3 className="font-serif text-base">Details</h3>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-medium">Materials:</span> {product.materials}</p>
                  <p className="text-sm"><span className="font-medium">Dimensions:</span> {product.dimensions}</p>
                  <p className="text-sm"><span className="font-medium">Availability:</span> {product.availability}</p>
                  {product.colors?.length && (
                    <>
                      <p className="text-sm"><span className="font-medium">Colors:</span> {product.colors.join(', ')}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <a href="#" className="inline-block rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  inquire about this piece
                </a>
              </div>

              {/* Back to Shop Link */}
              <div className="mt-6">
                <Link href="/" className="text-sm text-foreground/60 hover:underline">
                  ← Back to Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Images Gallery */}
      {product.additionalImages.length > 1 && (
        <section className="bg-card py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-center text-2xl font-serif">More Views</h2>
            <div className="gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.additionalImages.map((img, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
