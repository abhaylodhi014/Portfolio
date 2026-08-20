"use client"

import { User, Cpu, Code2, Award, Terminal, CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <User size={14} />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl text-sm sm:text-base">
            Computer Science student at IIT Indore with a passion for software architecture, algorithmic optimization, and building real-world products.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card (7 Cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 space-y-6 flex flex-col justify-between border border-border/80">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                I am a second-year <strong className="text-foreground">Computer Science Engineering student at the Indian Institute of Technology Indore</strong>. My journey centers around understanding how complex systems operate under the hood—from distributed consensus algorithms to low-latency WebRTC streams.
              </p>
              <p>
                Whether engineering an AI-powered multilingual OCR platform at <strong className="text-foreground">Drishti CPS Foundation</strong> (achieving 96.11% accuracy with vision transformers), building an SFU-based video conferencing tool with MediaPipe landmark tracking (<strong className="text-foreground">MediCall</strong>), or optimizing Ethereum smart contract gas costs (<strong className="text-foreground">Kredent</strong>), I focus on clean code, solid data structures, and measurable impact.
              </p>
              <p>
                Beyond product development, I am active in competitive programming. Holding titles as a <strong className="text-amber-500 font-semibold">LeetCode Knight (Max 2055)</strong> and <strong className="text-cyan-500 font-semibold">Codeforces Expert (Max 1604)</strong>, I regularly compete in global contests, refining my ability to solve tough algorithmic problems under pressure.
              </p>
            </div>

            <div className="pt-4 border-t border-border/60 grid sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span className="text-foreground font-semibold">Full-Stack Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                <span className="text-foreground font-semibold">System Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-500 shrink-0" />
                <span className="text-foreground font-semibold">CP Competitor</span>
              </div>
            </div>
          </div>

          {/* Quick Pillar Cards (5 Cols) */}
          <div className="lg:col-span-5 grid gap-4">
            
            {/* Pillar 1: Academic Excellence */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                <Cpu size={22} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base">IIT Indore CS Major</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Maintaining an <strong>8.51 CGPA</strong> while taking core CS subjects including Data Structures & Algorithms, DBMS, Computer Architecture, and Hardware Security.
                </p>
              </div>
            </div>

            {/* Pillar 2: Competitive Programming */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                <Code2 size={22} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base">Competitive Problem Solving</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Solved <strong>650+ algorithmic problems</strong> across platforms. Top ranks in LeetCode Biweekly (Global #482), Codeforces Round (Global #522), and CodeChef Starters (Global #206).
                </p>
              </div>
            </div>

            {/* Pillar 3: Leadership & Impact */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base">Leadership & Mentorship</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Web Development Head for <strong>TEDx IIT Indore</strong> and Software Development Coordinator for <strong>CSESA</strong>, leading technical teams and campus initiatives.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
