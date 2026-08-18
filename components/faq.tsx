'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Eyebrow } from '@/components/eyebrow'
import { FadeIn } from '@/components/fade-in'

const faqs = [
  {
    question: 'How long does each bag take to make?',
    answer:
      'Between twelve and twenty hours, depending on the design. Every bag is crocheted by hand in small batches, so most pieces ship within one to two weeks of ordering.',
  },
  {
    question: 'What materials do you use?',
    answer:
      'We work primarily with recycled t-shirt yarn (upcycled fabric), chosen for its texture and durability. Handles and hardware are solid wood or brass — never plastic.',
  },
  {
    question: 'How do I care for my crochet bag?',
    answer:
      'Spot-clean with lukewarm water and a mild soap, then lay flat to dry away from direct sun. With gentle care, your bag will soften beautifully over the years.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes — we ship worldwide with tracked delivery. Every order is wrapped in tissue and sent in recyclable packaging, with duties calculated at checkout where applicable.',
  },
  {
    question: 'Can I request a custom colour or design?',
    answer:
      "Absolutely. A small number of custom commissions open each season. Send us a note through the contact form below and we'll be in touch about the next available slot.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-background px-6 py-24 md:py-36">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="mb-14 text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-snug md:text-5xl">
            Frequently asked
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={faq.question}
                  className={`rounded-3xl border transition-colors ${
                    isOpen ? 'border-accent bg-accent/15' : 'border-border bg-background'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-serif text-lg"
                    >
                      {faq.question}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-accent-foreground/60 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    hidden={!isOpen}
                    className="px-6 pb-6 text-sm leading-relaxed text-foreground/80"
                  >
                    {faq.answer}
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
