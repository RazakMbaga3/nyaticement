// app/page.js
'use client'

import Hero from './components/sections/hero'
import ProductsSlider from './components/sections/products-slider'
import FeaturesGrid from './components/sections/features-grid'
import VideoSection from './components/sections/video-section'
import BlogHighlights from './components/sections/blog-highlights'
// CementBanner component seems to be missing, removing the import
// import CementBanner from './components/ui/CementBanner'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ProductsSlider />
      <FeaturesGrid />
      <VideoSection />
      
      {/* Blog Highlights Section */}
      <BlogHighlights />
      
      {/* Banner Section removed due to missing component */}
    </main>
  )
}