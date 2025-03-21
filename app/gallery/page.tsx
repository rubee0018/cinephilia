"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LiquidBackground from "@/components/liquid-background"

export default function Gallery() {
  // Sample gallery images - replace with actual images
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=${400 + (i % 3) * 50}&width=${600 + (i % 4) * 50}`,
    alt: `Gallery image ${i + 1}`,
    category: i % 3 === 0 ? "event" : i % 3 === 1 ? "film" : "photography",
  }))

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <LiquidBackground />
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">Gallery</h1>
            <div className="h-1 bg-red-600 w-24 mx-auto mb-8" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore moments from previous editions of Cinephilia - capturing the essence of our film festival.
            </p>
          </motion.div>

          {/* Gallery Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              <button className="px-6 py-2 rounded-full bg-red-600 text-white">All</button>
              <button className="px-6 py-2 rounded-full bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                Events
              </button>
              <button className="px-6 py-2 rounded-full bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                Films
              </button>
              <button className="px-6 py-2 rounded-full bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                Photography
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Cinephilia 2024</h3>
                    <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

