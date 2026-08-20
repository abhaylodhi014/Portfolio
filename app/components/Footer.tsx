"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-border/60 bg-card/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="text-lg font-bold text-foreground">
              Abhay Lodhi
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              B.Tech Computer Science Engineering • IIT Indore '28
            </span>
          </div>

          {/* Center Copyright */}
          <div className="text-xs text-muted-foreground text-center font-mono">
            © {new Date().getFullYear()} Abhay Lodhi. Built with Next.js & Tailwind CSS.
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/abhaylodhi014"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-card border border-border/60 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-lodhi-a5a21231a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-card border border-border/60 text-muted-foreground hover:text-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-indigo-500 hover:bg-indigo-600 hover:text-white transition-all ml-2"
              aria-label="Scroll to Top"
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  )
}
