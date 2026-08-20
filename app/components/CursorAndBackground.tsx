"use client"

import { useEffect, useRef, useState } from "react"

const TRAIL_COUNT = 5 // 5 smooth trail segments for lightweight tail

export default function CursorAndBackground() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<Array<HTMLDivElement | null>>([])
  const ambientBlob1Ref = useRef<HTMLDivElement>(null)
  const ambientBlob2Ref = useRef<HTMLDivElement>(null)

  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Disable on touch devices / coarse pointers / reduced motion / small screens
    const mediaTouch = window.matchMedia("(pointer: coarse)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (mediaTouch.matches || reducedMotion.matches || window.innerWidth < 768) {
      setIsMobile(true)
      return
    }
    setIsMobile(false)

    let mouseX = -100
    let mouseY = -100
    let isMouseInside = false

    // Initialize trail node positions
    const trailPositions = Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
    let animFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isMouseInside) {
        isMouseInside = true
        setIsVisible(true)
      }

      // Check hover on interactive elements
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest(".glass-card-hover") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => {
      isMouseInside = false
      setIsVisible(false)
    }
    const handleMouseEnter = () => {
      isMouseInside = true
      setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    // Ultra-fast Lerp Trail Render Loop (GPU Translate3D Transforms)
    const render = () => {
      if (document.hidden) {
        animFrameId = requestAnimationFrame(render)
        return
      }

      // Head node follows mouse directly with fast Lerp
      trailPositions[0].x += (mouseX - trailPositions[0].x) * 0.45
      trailPositions[0].y += (mouseY - trailPositions[0].y) * 0.45

      // Trail nodes follow preceding node
      for (let i = 1; i < TRAIL_COUNT; i++) {
        const prev = trailPositions[i - 1]
        const curr = trailPositions[i]
        curr.x += (prev.x - curr.x) * 0.38
        curr.y += (prev.y - curr.y) * 0.38
      }

      // Update inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${trailPositions[0].x}px, ${trailPositions[0].y}px, 0)`
      }

      // Update outer ring
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailPositions[1].x}px, ${trailPositions[1].y}px, 0)`
      }

      // Update trail tail segments
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const el = trailRefs.current[i]
        if (el) {
          el.style.transform = `translate3d(${trailPositions[i].x}px, ${trailPositions[i].y}px, 0)`
        }
      }

      // Slow mouse parallax movement for ambient gradient blobs
      const parallaxX = (mouseX - window.innerWidth / 2) * 0.025
      const parallaxY = (mouseY - window.innerHeight / 2) * 0.025

      if (ambientBlob1Ref.current) {
        ambientBlob1Ref.current.style.transform = `translate3d(${parallaxX}px, ${parallaxY}px, 0)`
      }
      if (ambientBlob2Ref.current) {
        ambientBlob2Ref.current.style.transform = `translate3d(${-parallaxX * 0.7}px, ${-parallaxY * 0.7}px, 0)`
      }

      animFrameId = requestAnimationFrame(render)
    }

    animFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Lightweight Parallax Ambient Gradient Blobs */}
      <div
        ref={ambientBlob1Ref}
        className="fixed top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-400/15 rounded-full blur-[120px] pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ambientBlob2Ref}
        className="fixed bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-purple-500/10 rounded-full blur-[110px] pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ willChange: "transform" }}
      />

      {/* Smooth Cursor Trail & Outer Ring Container */}
      <div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {/* Glowing Cursor Trail Segments */}
        {Array.from({ length: TRAIL_COUNT }).map((_, i) => {
          const scale = 1 - i * 0.16
          const opacity = (1 - i * 0.18) * 0.65
          return (
            <div
              key={i}
              ref={(el) => {
                trailRefs.current[i] = el
              }}
              className="absolute top-0 left-0 -mt-1.5 -ml-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 blur-[1px] pointer-events-none transition-opacity"
              style={{
                width: `${12 * scale}px`,
                height: `${12 * scale}px`,
                opacity: isHovered ? opacity * 1.5 : opacity,
                willChange: "transform",
              }}
            />
          )
        })}

        {/* Outer Reactive Ring */}
        <div
          ref={ringRef}
          className={`absolute top-0 left-0 -mt-4 -ml-4 rounded-full border transition-all duration-200 ease-out pointer-events-none ${
            isHovered
              ? "w-12 h-12 -mt-6 -ml-6 border-cyan-400 bg-cyan-400/15 scale-110 shadow-md shadow-cyan-400/20"
              : isClicking
              ? "w-6 h-6 -mt-3 -ml-3 border-purple-500 bg-purple-500/30 scale-90"
              : "w-8 h-8 border-indigo-400/50 bg-indigo-500/5 backdrop-blur-[1px]"
          }`}
          style={{ willChange: "transform" }}
        />

        {/* Inner Core Dot */}
        <div
          ref={dotRef}
          className={`absolute top-0 left-0 -mt-1 -ml-1 rounded-full transition-transform duration-100 pointer-events-none ${
            isHovered ? "w-2.5 h-2.5 -mt-1.25 -ml-1.25 bg-cyan-400 scale-125 shadow-sm shadow-cyan-400" : "w-2 h-2 bg-indigo-500"
          }`}
          style={{ willChange: "transform" }}
        />
      </div>
    </>
  )
}
