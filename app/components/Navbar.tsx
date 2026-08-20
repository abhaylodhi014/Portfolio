"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Github, Linkedin, Menu, X, FileText, Sparkles } from "lucide-react"

interface NavbarProps {
  isDark: boolean
  toggleDarkMode: () => void
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Leadership", href: "#leadership" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar({ isDark, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3 shadow-lg shadow-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          className="group flex items-center gap-2 text-xl font-extrabold tracking-tight"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <span className="font-mono text-lg font-black">AL</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground group-hover:text-indigo-500 transition-colors">
              Abhay Lodhi
            </span>
            <span className="text-[10px] text-muted-foreground font-mono">IIT Indore '28</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-card/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50 shadow-inner">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl bg-card border border-border/60 hover:bg-muted/80 text-foreground transition-all duration-200 hover:scale-105"
            aria-label="Toggle Theme"
            title="Toggle theme"
          >
            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>

          <a
            href="https://github.com/abhaylodhi014"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-card border border-border/60 hover:bg-muted/80 text-foreground transition-all duration-200 hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/abhay-lodhi-a5a21231a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-card border border-border/60 hover:bg-muted/80 text-blue-600 dark:text-blue-400 transition-all duration-200 hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles size={14} />
            Connect
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl bg-card border border-border/60 text-foreground"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-card border border-border/60 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border/80 px-6 py-6 space-y-3 animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors flex items-center justify-between"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/abhaylodhi014"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-card border border-border/60 text-foreground"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhay-lodhi-a5a21231a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-card border border-border/60 text-blue-500"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
