"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  image: string
  href: string
}

export default function CategoryCard({ title, image, href }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className="block group relative overflow-hidden aspect-[4/5]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700",
          isHovered ? "scale-110" : "scale-100",
        )}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-xl md:text-2xl font-light tracking-wider mb-4">{title}</h3>
          <div
            className={cn("w-12 h-px bg-white mx-auto transition-all duration-500", isHovered ? "w-20" : "w-12")}
          ></div>
        </div>
      </div>
    </Link>
  )
}

