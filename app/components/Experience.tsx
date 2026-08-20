"use client"

import { Briefcase, Calendar, MapPin, ExternalLink, Github, CheckCircle, Cpu, Zap, Layers } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <Briefcase size={14} />
            <span>INDUSTRY & INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            Hands-on software development experience building AI vision engines, document extraction pipelines, and scalable cloud APIs.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border border-border/80 relative overflow-hidden">
            
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6">
              
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                      SIDDHI 2.0
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">Software Engineering Intern</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
                    Drishti CPS Foundation
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    AI-Powered Multilingual Medical Record Digitization Platform
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-muted-foreground">
                    <Calendar size={14} className="text-indigo-500" />
                    <span>May 2025 – Jul 2025</span>
                  </div>
                  <a
                    href="https://github.com/abhaylodhi014/ocr.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border border-border text-xs font-semibold text-foreground hover:border-indigo-500/50 transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub Codebase</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">PaliGemma & Multimodal LLM Benchmark (96.11% Extraction Accuracy)</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      Developed an AI-powered OCR platform for multilingual medical record digitization using <strong>FastAPI, Next.js, and PaliGemma</strong>. Rigorously benchmarked <strong>Claude Sonnet 4, Gemini 2.5 Pro, and ChatGPT</strong> vision capabilities, achieving <strong>96.11% extraction accuracy</strong> on handwritten & tabular medical data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0 mt-0.5">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">OpenCV Table Detection Pipeline (75% Manual Entry Reduction)</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      Engineered an intelligent computer vision pipeline using <strong>OpenCV</strong> for table detection and cell segmentation, reducing manual health worker data extraction efforts by <strong>75%</strong> across community health centers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <Layers size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Containerized Full-Stack Workflows & PostgreSQL Schema</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      Streamlined authentication, patient record management, and human-in-the-loop OCR verification workflows using <strong>PostgreSQL, Docker containers, and Next.js APIs</strong>.
                    </p>
                  </div>
                </div>

              </div>

              {/* Tech Stack Badges */}
              <div className="pt-4 border-t border-border/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-muted-foreground mr-2">Tech Utilized:</span>
                {["FastAPI", "Next.js", "PaliGemma", "Claude Sonnet 4", "Gemini 2.5 Pro", "OpenCV", "PostgreSQL", "Docker", "Python"].map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-muted/60 text-xs font-mono text-foreground font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
