"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function MaternityPage() {
  // Sample gallery images (would be replaced with actual content)
  const galleryImages = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=${800 + i * 20}&width=${600 + i * 20}`,
    alt: `Maternity photography ${i + 1}`,
  }))

  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"))
            setVisibleImages((prev) => (prev.includes(id) ? prev : [...prev, id]))
          }
        })
      },
      { threshold: 0.3 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

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

        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wider text-center">MATERNITY SHOOTS</h1>

        {/* Vertical scrolling gallery with fade animations */}
        <div className="max-w-3xl mx-auto space-y-24">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              ref={(el) => (imageRefs.current[index] = el)}
              data-id={image.id}
              className={cn(
                "transition-opacity duration-1000 transform",
                visibleImages.includes(image.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-auto rounded-lg" />
              <p className="text-center mt-4 text-gray-400 font-light">
                {index % 2 === 0 ? "Celebrating the beauty of motherhood" : "Capturing the glow of expectant mothers"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

