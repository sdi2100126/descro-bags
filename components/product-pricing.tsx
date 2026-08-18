'use client'

import { useState } from 'react'
import { Product } from '@/lib/products'

interface ProductPricingProps {
  sizes: Product['sizes']
  customization?: Product['customization']
}

export function ProductPricing({ sizes, customization }: ProductPricingProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedSize = sizes[selectedIndex]

  return (
    <div>
      <label className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
          Size
        </span>
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
        >
          {sizes.map((size, index) => (
            <option key={index} value={index}>
              {size.label}
            </option>
          ))}
        </select>
      </label>

      <p className="mt-2 text-3xl font-serif text-primary">
        €{selectedSize.priceEUR}
      </p>

      {customization && (
        <p className="mt-2 text-sm text-foreground/70">
          {customization.note}
        </p>
      )}
    </div>
  )
}