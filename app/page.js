// app/page.js
'use client'

import Hero from './components/sections/hero'
import StatsStrip from './components/sections/stats-strip'
import ProductsSlider from './components/sections/products-slider'
import FeaturesGrid from './components/sections/features-grid'
import VideoSection from './components/sections/video-section'
import BlogHighlights from './components/sections/blog-highlights'
import CTABanner from './components/sections/cta-banner'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <StatsStrip />
      <ProductsSlider />
      <FeaturesGrid />
      <VideoSection />
      <BlogHighlights />
      <CTABanner />
    </main>
  )
}