"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ExternalLink, Sparkles, Send } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("abhaylodhi128135@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Accent Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container */}
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-border/80 relative overflow-hidden shadow-2xl">
          
          <div className="max-w-3xl mx-auto text-center space-y-8">
            
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
              <Sparkles size={14} />
              <span>LET'S BUILD SOMETHING EXTRAORDINARY</span>
            </div>

            {/* Title & Pitch */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                Have an exciting idea, opportunity, or research collaboration?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                I am actively seeking <strong className="text-foreground">software engineering internships, research projects, and high-impact development roles</strong>. Feel free to reach out anytime!
              </p>
            </div>

            {/* Fast Email Copy Box */}
            <div className="p-2 sm:p-3 rounded-2xl bg-card border border-border/80 flex items-center justify-between gap-3 shadow-inner max-w-xl mx-auto">
              <div className="flex items-center gap-3 px-3 overflow-hidden text-left">
                <Mail className="text-indigo-500 shrink-0" size={20} />
                <span className="font-mono text-xs sm:text-sm text-foreground truncate">
                  abhaylodhi128135@gmail.com
                </span>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md transition-all active:scale-95 shrink-0"
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
              
              {/* Personal Email */}
              <a
                href="mailto:abhaylodhi128135@gmail.com"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-border/70 flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-muted-foreground">Personal Email</div>
                  <div className="text-xs font-bold text-foreground truncate">abhaylodhi128135@gmail.com</div>
                </div>
              </a>

              {/* Institute Email */}
              <a
                href="mailto:cse240001003@iiti.ac.in"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-border/70 flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                  <Send size={18} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-muted-foreground">IIT Indore Email</div>
                  <div className="text-xs font-bold text-foreground truncate">cse240001003@iiti.ac.in</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917067452517"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-border/70 flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Phone size={18} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-muted-foreground">Phone (India)</div>
                  <div className="text-xs font-bold text-foreground">+91-7067452517</div>
                </div>
              </a>

            </div>

            {/* Social & Coding Handles */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/abhaylodhi014"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-card border border-border/80 text-xs font-mono font-semibold text-foreground hover:border-indigo-500/50 transition-colors flex items-center gap-2"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/abhay-lodhi-a5a21231a"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-card border border-border/80 text-xs font-mono font-semibold text-blue-500 hover:border-blue-500/50 transition-colors flex items-center gap-2"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/abhay_014_"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-card border border-border/80 text-xs font-mono font-semibold text-amber-500 hover:border-amber-500/50 transition-colors flex items-center gap-2"
              >
                <span>LeetCode (2055)</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://codeforces.com/profile/abhay_014_"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-card border border-border/80 text-xs font-mono font-semibold text-cyan-500 hover:border-cyan-500/50 transition-colors flex items-center gap-2"
              >
                <span>Codeforces (1604)</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://www.codechef.com/users/abhay_014"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-card border border-border/80 text-xs font-mono font-semibold text-purple-500 hover:border-purple-500/50 transition-colors flex items-center gap-2"
              >
                <span>CodeChef (1762)</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
