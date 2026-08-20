"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Achievements from "./components/Achievements"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import POR from "./components/POR"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CursorAndBackground from "./components/CursorAndBackground"

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial user preference or default to dark theme
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      const dark = savedTheme === "dark"
      setIsDark(dark)
      updateTheme(dark)
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDark(prefersDark)
      updateTheme(prefersDark)
    }
  }, [])

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  const toggleDarkMode = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    localStorage.setItem("theme", nextDark ? "dark" : "light")
    updateTheme(nextDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white">
      {/* Interactive Cursor Spotlight & Canvas Particles */}
      <CursorAndBackground />

      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

      {/* Navigation */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Experience />
        <Skills />
        <POR />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
