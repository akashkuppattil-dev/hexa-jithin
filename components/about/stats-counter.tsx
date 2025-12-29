"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Package, ThumbsUp } from "lucide-react"

interface StatProps {
  stat: {
    label: string
    value: string
    suffix: string
    iconName: "Award" | "Users" | "Package" | "ThumbsUp"
  }
}

const iconMap = {
  Award,
  Users,
  Package,
  ThumbsUp,
}

export function StatsCounter({ stat }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const numericValue = Number.parseFloat(stat.value.replace(/[^0-9.]/g, ""))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, numericValue])

  const Icon = iconMap[stat.iconName]

  return (
    <div ref={ref} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#09757a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      <div className="relative bg-[#111] backdrop-blur-sm border border-white/5 p-5 rounded-xl text-center hover:-translate-y-1 transition-all duration-300 shadow-lg group-hover:border-[#09757a]/30">
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
          <Icon className="h-8 w-8 text-[#09757a] rotate-12" />
        </div>

        <div className="relative">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#09757a]/10 mb-2 group-hover:bg-[#09757a]/20 transition-colors">
            <Icon className="h-5 w-5 text-[#09757a]" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-white mb-0.5 tracking-tighter tabular-nums whitespace-nowrap">
            {stat.value.includes("-")
              ? <span className="text-white">{stat.value}</span>
              : <span>{Math.floor(count).toLocaleString()}</span>
            }
            <span className="text-[#09757a] text-xl md:text-2xl ml-0.5">{stat.suffix}</span>
          </div>
          <div className="h-0.5 w-6 bg-[#09757a]/30 mx-auto mb-2 group-hover:w-12 transition-all duration-500" />
          <p className="text-zinc-500 font-black text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">{stat.label}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsCounter
