"use client"

import { useState } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const productVideos = [
  {
    id: 1,
    title: "Car O Liner Automatic Spot Welding Machine",
    thumbnail: "/spot-welding-machine-automotive-body-repair.jpg",
    videoId: "g3jg28x2Y6Y",
  },
  {
    id: 2,
    title: "Digital Display PCL Tyre Inflator Gauge",
    thumbnail: "/digital-tyre-inflator-gauge-pcl-professional.jpg",
    videoId: "S3q04gUcK3U",
  },
  {
    id: 3,
    title: "Black Digital PCL Accura QUBE0 Tyre Inflator",
    thumbnail: "/pcl-accura-qube-tyre-inflator-black-digital.jpg",
    videoId: "g-7UG0yFF7g",
  },
  {
    id: 4,
    title: "Bosch GPO 12 CE Professional Polisher",
    thumbnail: "/bosch-gpo-12-ce-professional-polisher-car-detailin.jpg",
    videoId: "IHm6-hAqg5c",
  },
]

export function ProductVideosSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + productVideos.length) % productVideos.length)
  }

  const goToNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % productVideos.length)
  }

  return (
    <section className="py-8 sm:py-12 bg-zinc-50 dark:bg-zinc-900/10 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">Tools in Action</h2>
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl mx-auto italic">
            See how our equipment performs in real-world workshop environments.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {productVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="bg-white dark:bg-zinc-900 border-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="h-4 w-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Mobile carousel view */}
        <div className="md:hidden">
          <div className="relative">
            <a
              href={`https://www.youtube.com/watch?v=${productVideos[currentVideoIndex].videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="bg-white dark:bg-zinc-900 border-none overflow-hidden shadow-lg rounded-2xl">
                <div className="relative aspect-video bg-zinc-100">
                  <img
                    src={productVideos[currentVideoIndex].thumbnail || "/placeholder.svg"}
                    alt={productVideos[currentVideoIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 line-clamp-2">
                    {productVideos[currentVideoIndex].title}
                  </h3>
                </CardContent>
              </Card>
            </a>

            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevVideo}
                className="h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-800"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-1.5">
                {productVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${index === currentVideoIndex ? "w-6 bg-primary" : "w-1.5 bg-zinc-300 dark:bg-zinc-800"}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNextVideo}
                className="h-10 w-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-800"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
