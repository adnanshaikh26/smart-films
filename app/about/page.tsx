import { Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wider text-center">ABOUT SMART FILMS</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/placeholder.svg?height=600&width=600" alt="Smart Films Team" className="w-full h-auto" />
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed text-gray-300">
                Smart Films is a premier photography and videography studio specializing in capturing life's most
                precious moments with artistic vision and technical excellence.
              </p>
              <p className="text-lg font-light leading-relaxed text-gray-300">
                Founded with a passion for visual storytelling, we bring a unique perspective to every project, creating
                timeless imagery that celebrates the beauty of human connection.
              </p>
              <p className="text-lg font-light leading-relaxed text-gray-300">
                Our team of skilled professionals is dedicated to providing an exceptional experience from start to
                finish, ensuring that your memories are preserved in the most beautiful way possible.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-light mb-4 tracking-wider">CONNECT WITH US</h3>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.instagram.com/smartflims"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/mudassir_shaikh_561"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="tel:+918788002710" className="hover:text-gray-300 transition-colors flex items-center gap-2">
                    <Phone className="h-6 w-6" />
                    <span>+91 8788002710</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6 tracking-wider">OUR INSTAGRAM</h2>
            <div className="w-16 h-px bg-white mx-auto mb-6"></div>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/smartflims"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg hover:text-gray-300 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                @smartflims
              </a>
              <a
                href="https://www.instagram.com/mudassir_shaikh_561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg hover:text-gray-300 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                @mudassir_shaikh_561
              </a>
            </div>
          </div>

          {/* Instagram Feed (placeholder) */}
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

      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8 tracking-wider">LET'S CREATE SOMETHING BEAUTIFUL</h2>
          <p className="text-lg font-light mb-12 leading-relaxed text-gray-300">
            We'd love to hear about your project and how we can help capture your special moments.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
            <a href="tel:+918788002710" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              CALL US: +91 8788002710
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}

