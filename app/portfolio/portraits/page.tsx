"use client"

import { useRef } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function PortraitsPage() {
  // Sample gallery images (would be replaced with actual content)
  const galleryImages = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=800&width=600`,
    alt: `Portrait photography ${i + 1}`,
  }))

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wider text-center">PORTRAITS</h1>

        {/* Horizontal scroll gallery */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((image) => (
              <div key={image.id} className="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-light mb-6 tracking-wider">THE ART OF PORTRAITURE</h2>
          <p className="text-gray-300 font-light">
            Our portrait photography focuses on capturing the essence and personality of each individual. Through
            careful composition, lighting, and direction, we create timeless portraits that reveal authentic emotion and
            character.
          </p>
        </div>
      </div>
    </main>
  )
}

