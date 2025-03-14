import Link from "next/link"
import { Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoHero from "@/components/video-hero"
import CategoryCard from "@/components/category-card"

export default function Home() {
  const categories = [
    {
      title: "Weddings & Candids",
      image: "/placeholder.svg?height=600&width=800",
      href: "/portfolio/weddings",
    },
    {
      title: "Pre-Weddings",
      image: "/placeholder.svg?height=600&width=800",
      href: "/portfolio/pre-weddings",
    },
    {
      title: "Cinematic Videos & Drones",
      image: "/placeholder.svg?height=600&width=800",
      href: "/portfolio/cinematic",
    },
    {
      title: "Maternity Shoots",
      image: "/placeholder.svg?height=600&width=800",
      href: "/portfolio/maternity",
    },
    {
      title: "Baby Birthdays",
      image: "/placeholder.svg?height=600&width=800",
      href: "/portfolio/baby-birthdays",
    },
    {
      title: "Portraits",
      image: "/placeholder.svg?height=600&width=800",
      href: "/portfolio/portraits",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <VideoHero />

      <section className="container mx-auto px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light mb-6 tracking-wider">OUR EXPERTISE</h2>
          <div className="w-16 h-px bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} title={category.title} image={category.image} href={category.href} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8 tracking-wider">CAPTURING YOUR PRECIOUS MOMENTS</h2>
          <p className="text-lg font-light mb-12 leading-relaxed text-gray-300">
            We specialize in creating timeless visual stories that celebrate life's most meaningful moments. Our
            approach combines artistic vision with technical excellence to deliver stunning imagery that will be
            cherished for generations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Link href="/about">ABOUT US</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
              <a href="tel:+918788002710" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                CALL US
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6 tracking-wider">FOLLOW OUR JOURNEY</h2>
            <div className="w-16 h-px bg-white mx-auto mb-6"></div>
            <a
              href="https://www.instagram.com/smartflims"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg hover:text-gray-300 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @smartflims
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square overflow-hidden">
                <img
                  src={`/placeholder.svg?height=400&width=400`}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

