"use client"

import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function BabyBirthdaysPage() {
  // Sample gallery images (would be replaced with actual content)
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=${500 + i * 20}&width=${500 + i * 20}`,
    alt: `Baby birthday photography ${i + 1}`,
  }))

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
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

        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wider text-center">BABY BIRTHDAYS</h1>

        {/* Playful gallery with animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "overflow-hidden rounded-lg transform transition-all duration-700",
                loaded ? "opacity-100" : "opacity-0",
                loaded
                  ? ["scale-100", "scale-100 rotate-2", "scale-100 rotate-1", "scale-100 -rotate-1"][index % 4]
                  : "scale-95",
                "hover:z-10 hover:shadow-xl hover:scale-105",
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-light mb-6 tracking-wider">CAPTURING JOYFUL MOMENTS</h2>
          <p className="text-gray-300 font-light">
            We specialize in creating fun, playful photography that captures the pure joy and wonder of your little
            one's special day. Our approach focuses on natural expressions and candid moments that you'll treasure for
            years to come.
          </p>
        </div>
      </div>
    </main>
  )
}

