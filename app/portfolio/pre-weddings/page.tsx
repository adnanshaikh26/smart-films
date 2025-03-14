"use client"

import { useState } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function PreWeddingsPage() {
  // Sample carousel images (would be replaced with actual content)
  const carouselImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=1080&width=1920`,
    alt: `Pre-wedding photography ${i + 1}`,
  }))

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselImages.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
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

        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wider text-center">PRE-WEDDINGS</h1>

        {/* Carousel */}
        <div className="relative h-[50vh] md:h-[70vh] mb-6">
          {carouselImages.map((slide, slideIndex) => (
            <div
              key={slide.id}
              className={cn(
                "h-full w-full transition-opacity duration-1000 absolute",
                slideIndex === currentIndex ? "opacity-100" : "opacity-0",
              )}
            >
              <img src={slide.src || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {carouselImages.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                slideIndex === currentIndex ? "bg-white" : "bg-gray-600",
              )}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

