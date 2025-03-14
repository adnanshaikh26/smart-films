import Link from "next/link"
import { Instagram, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link href="/" className="text-xl font-light tracking-wider">
            SMART FILMS
          </Link>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/smartflims"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/mudassir_shaikh_561"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a href="tel:+918788002710" className="hover:text-gray-300 transition-colors flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+91 8788002710</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Smart Films. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

