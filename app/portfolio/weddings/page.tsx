import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WeddingsPage() {
  // Sample gallery images (would be replaced with actual content)
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=${600 + i * 50}&width=${800 + i * 30}`,
    alt: `Wedding photography ${i + 1}`,
  }))

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

        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wider text-center">WEDDINGS & CANDIDS</h1>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className={`overflow-hidden ${image.id % 3 === 0 ? "md:col-span-2" : ""}`}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

