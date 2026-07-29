import { Hero } from '@/components/hero'
import { FeaturedBags } from '@/components/featured-bags'
import { Gallery } from '@/components/gallery'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { InstagramGrid } from '@/components/instagram-grid'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <FeaturedBags />
        <Gallery />
        <About />
        <Process />
        <InstagramGrid />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
