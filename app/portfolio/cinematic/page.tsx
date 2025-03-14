import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CinematicPage() {
  // Sample videos (would be replaced with actual content)
  const videos = [
    {
      id: 1,
      title: "Cinematic Wedding Highlights",
      description: "A beautiful wedding celebration captured with cinematic techniques",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      videoUrl: "#", // Would be a real video URL in production
    },
    {
      id: 2,
      title: "Aerial Drone Photography",
      description: "Breathtaking drone footage showcasing scenic landscapes",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      videoUrl: "#", // Would be a real video URL in production
    },
    {
      id: 3,
      title: "Pre-Wedding Film",
      description: "Romantic pre-wedding film shot in cinematic style",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      videoUrl: "#", // Would be a real video URL in production
    },
    {
      id: 4,
      title: "Destination Wedding",
      description: "Stunning destination wedding captured with drone and cinematic cameras",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      videoUrl: "#", // Would be a real video URL in production
    },
  ]

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

        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wider text-center">CINEMATIC VIDEOS & DRONES</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="space-y-4">
              <div className="aspect-video relative overflow-hidden group">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-black ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light">{video.title}</h3>
              <p className="text-gray-400">{video.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-light mb-8 tracking-wider">FEATURED FILM</h2>
          <div className="aspect-video max-w-4xl mx-auto">
            {/* This would be a real video embed in production */}
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-black ml-1"></div>
                </div>
                <p className="text-gray-400">Video player would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

