"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function VideoHero() {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // In a real implementation, you would use an actual video file
    // This is just a placeholder for demonstration
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.svg?height=1080&width=1920"
      >
        {/* In a real implementation, you would include actual video sources */}
        <source src="#" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-1000",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6">SMART FILMS</h1>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12 tracking-wide">
          Capturing life's most precious moments with artistic vision
        </p>
        <div className="w-16 h-px bg-white mb-8"></div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-1000 hover:opacity-70",
          isVisible ? "opacity-100" : "opacity-0",
        )}
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2 tracking-wider">EXPLORE</span>
        <ArrowDown className="animate-bounce" />
      </button>
    </div>
  )
}

