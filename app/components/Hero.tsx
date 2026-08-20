"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  FileText,
  Mail,
  Trophy,
  Code2,
  GraduationCap,
  Sparkles,
  Github,
  Linkedin,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react"

export default function Hero() {
  const [imageError, setImageError] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/15 to-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text & CTAs (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Computer Science Student & Software Engineer</span>
              <span className="text-muted-foreground">•</span>
              <span className="font-mono text-[11px] text-muted-foreground">IIT Indore</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Hi, I'm <br />
                <span className="gradient-text-indigo">Abhay Lodhi</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl pt-2">
                B.Tech Computer Science student at <strong className="text-foreground">IIT Indore</strong> building production-grade full-stack systems, WebRTC platforms, and high-performance algorithms.
              </p>
            </div>

            {/* Dynamic Bio Highlights */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground pt-1">
              <div className="flex items-center gap-1.5 bg-card/60 px-3 py-1.5 rounded-lg border border-border/50">
                <Trophy size={14} className="text-amber-500" />
                <span>LeetCode Knight (<strong className="text-foreground">2055 Peak</strong>)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-card/60 px-3 py-1.5 rounded-lg border border-border/50">
                <Code2 size={14} className="text-cyan-500" />
                <span>Codeforces Expert (<strong className="text-foreground">1604 Peak</strong>)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-card/60 px-3 py-1.5 rounded-lg border border-border/50">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>IITISoC Silver Medalist</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:abhaylodhi128135@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-card border border-border hover:border-indigo-500/50 text-foreground font-semibold text-sm hover:bg-muted/60 transition-all hover:scale-[1.02]"
              >
                <Mail size={16} className="text-indigo-500" />
                <span>Contact Me</span>
              </a>

              <a
                href="https://github.com/abhaylodhi014"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-card border border-border hover:border-foreground/40 text-foreground transition-all hover:scale-105"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/abhay-lodhi-a5a21231a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-card border border-border hover:border-blue-500/40 text-blue-600 dark:text-blue-400 transition-all hover:scale-105"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Presentation & Interactive Card (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Frame Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse-glow" />

              {/* Main Profile Card Container */}
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-border/80 shadow-2xl">
                
                {/* Image / Avatar Header */}
                <div className="relative flex flex-col items-center">
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-xl overflow-hidden group">
                    <div className="w-full h-full rounded-full bg-background overflow-hidden flex items-center justify-center relative">
                      {!imageError ? (
                        <img
                          src={
                            imageIndex === 0
                              ? "/passport_image.png"
                              : imageIndex === 1
                              ? "/passport_image.jpg"
                              : imageIndex === 2
                              ? "/passport_image.jpeg"
                              : "/media__1787249252920.jpg"
                          }
                          alt="Abhay Lodhi Profile"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={() => {
                            if (imageIndex < 3) {
                              setImageIndex(imageIndex + 1)
                            } else {
                              setImageError(true)
                            }
                          }}
                        />
                      ) : (
                        /* Sleek Developer Avatar Fallback */
                        <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex flex-col items-center justify-center p-4 text-center">
                          <Terminal size={36} className="text-cyan-400 mb-1" />
                          <span className="font-mono text-xs font-bold text-white tracking-wide">ABHAY LODHI</span>
                          <span className="text-[10px] text-indigo-300 font-mono">CSE @ IIT Indore</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating Badges on Avatar */}
                  <div className="absolute -bottom-2 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-500/30 text-[11px] font-mono font-bold text-indigo-500 dark:text-indigo-400 shadow-md flex items-center gap-1">
                    <Zap size={12} className="fill-indigo-500 text-indigo-500" />
                    <span>IIT INDORE '28</span>
                  </div>
                </div>

                {/* Developer Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-card/80 p-3.5 rounded-2xl border border-border/60 text-center hover:border-indigo-500/40 transition-colors">
                    <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">8.51</div>
                    <div className="text-[11px] font-medium text-muted-foreground mt-0.5">IIT Indore CGPA</div>
                  </div>

                  <div className="bg-card/80 p-3.5 rounded-2xl border border-border/60 text-center hover:border-purple-500/40 transition-colors">
                    <div className="text-2xl font-black text-amber-500 font-mono">2055</div>
                    <div className="text-[11px] font-medium text-muted-foreground mt-0.5">LeetCode (Knight)</div>
                  </div>

                  <div className="bg-card/80 p-3.5 rounded-2xl border border-border/60 text-center hover:border-cyan-500/40 transition-colors">
                    <div className="text-2xl font-black text-cyan-500 font-mono">1604</div>
                    <div className="text-[11px] font-medium text-muted-foreground mt-0.5">Codeforces (Expert)</div>
                  </div>

                  <div className="bg-card/80 p-3.5 rounded-2xl border border-border/60 text-center hover:border-emerald-500/40 transition-colors">
                    <div className="text-2xl font-black text-emerald-500 font-mono">2321</div>
                    <div className="text-[11px] font-medium text-muted-foreground mt-0.5">JEE Mains AIR</div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-1">
                  <a
                    href="https://github.com/abhaylodhi014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-muted/60 hover:bg-muted text-xs font-mono font-semibold text-foreground transition-colors"
                  >
                    <Github size={14} />
                    <span>github.com/abhaylodhi014</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
