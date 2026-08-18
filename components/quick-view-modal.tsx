'use client'

import { useProductModal } from '@/lib/product-modal-context'
import Image from 'next/image'
import Link from 'next/link'

export function QuickViewModal() {
  const { openProduct, closeModal } = useProductModal()

  if (!openProduct) {
    return null
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" onClick={closeModal}>
        <div className="relative bg-card rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-3 right-3 text-foreground/60 hover:text-foreground transition-colors" onClick={closeModal} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={openProduct.mainImage}
                alt={openProduct.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif">{openProduct.name}</h2>
              {openProduct.sizes.map((size, index) => (
                <p key={index} className="text-sm text-foreground/70">
                  {size.label} — €{size.priceEUR}
                </p>
              ))}
              {openProduct.customization && (
                <p className="text-sm text-foreground/70">
                  {openProduct.customization.note}
                </p>
              )}
              <p className="text-foreground/80">{openProduct.shortDescription}</p>

              <div className="space-y-2">
                <h3 className="font-serif text-base">Details</h3>
                <p className="text-sm"><span className="font-medium">Materials:</span> {openProduct.materials}</p>
                <p className="text-sm"><span className="font-medium">Dimensions:</span> {openProduct.dimensions}</p>
                <p className="text-sm"><span className="font-medium">Availability:</span> {openProduct.availability}</p>
                {openProduct.colors?.length && (
                  <>
                    <p className="text-sm"><span className="font-medium">Colors:</span> {openProduct.colors.join(', ')}</p>
                  </>
                )}
              </div>

              <Link href={`/shop/${openProduct.id}`} onClick={closeModal} className="mt-6 inline-block rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                View Full Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Prevent background scroll */}
      <style>{`
        body.modal-open { overflow: hidden; }
      `}</style>
    </>
  )
}