"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface InfiniteMovingCardsProps {
    items: {
        icon: React.ElementType
        title: string
        description: string
    }[]
    direction?: "left" | "right"
    speed?: "fast" | "normal" | "slow"
    pauseOnHover?: boolean
    className?: string
}

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: InfiniteMovingCardsProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollerRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        addAnimation()
    }, [])

    const [start, setStart] = useState(false)

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards")
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse")
            }
        }
    }

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s")
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s")
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s")
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[240px] max-w-full relative rounded-xl border border-white/5 flex-shrink-0 bg-white/5 px-6 py-5 md:w-[280px]"
                        key={idx}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-[#09757a]/10 rounded-lg flex items-center justify-center mb-3 text-[#09757a]">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-black text-white text-[15px] uppercase tracking-tighter mb-1.5">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 text-[11px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
