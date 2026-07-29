'use client'

import { useState } from 'react'
import { Eyebrow } from '@/components/eyebrow'
import { FadeIn } from '@/components/fade-in'

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="bg-card px-6 py-24 md:py-36">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <Eyebrow>Say Hello</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-snug md:text-5xl">
            Get in touch
          </h2>
          <p className="mt-5 leading-relaxed text-foreground/75">
            {"Questions, custom commissions, or just to say hi — we'd love to hear from you."}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          {sent ? (
            <p
              className="mt-12 rounded-3xl bg-accent/25 px-6 py-10 font-serif text-xl"
              role="status"
            >
              {"Thank you — your note is on its way. We'll reply within a day or two."}
            </p>
          ) : (
            <form
              className="mt-12 flex flex-col gap-4 text-left"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="you@example.com"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="resize-none rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell us what's on your mind…"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-2xl bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105"
              >
                Send message
              </button>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-10 text-sm text-foreground/65">
            {'Or find us at '}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              @descro.studio
            </a>
            {' · '}
            <a
              href="mailto:hello@descro.com"
              className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              hello@descro.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
