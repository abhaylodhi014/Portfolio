"use client"

import { GraduationCap, Calendar, Award, CheckCircle2 } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech. Major in Computer Science Engineering",
    institution: "Indian Institute Of Technology Indore",
    score: "8.51 CGPA (Current)",
    timeline: "2024 – Present",
    rollNo: "Roll No: 240001003",
    description: "Pursuing CS degree with focus on Advanced Algorithms, Full-Stack System Design, Database Systems, Computer Architecture, and Hardware Security.",
    badge: "Premier Tier Institution",
    highlight: true,
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "MP Board",
    score: "92.2%",
    timeline: "2024",
    rollNo: "",
    description: "Completed Class 12 with top distinction in Science & Mathematics, leading to All India Rank 2321 in JEE Mains & 3159 in JEE Advanced.",
    badge: "Senior Secondary",
    highlight: false,
  },
  {
    degree: "Secondary (Class X)",
    institution: "CBSE Board",
    score: "94.0%",
    timeline: "2022",
    rollNo: "",
    description: "Strong academic foundation with high score in Science, Mathematics, and Computer Applications.",
    badge: "Secondary Education",
    highlight: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <GraduationCap size={14} />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Education
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            Academic achievements from Indian Institute of Technology Indore and top secondary board credentials.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border ${
                item.highlight
                  ? "border-indigo-500/40 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent shadow-xl"
                  : "border-border/80"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Left Info */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-card border border-border/80 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {item.badge}
                    </span>
                    {item.rollNo && (
                      <span className="text-xs font-mono text-muted-foreground">
                        {item.rollNo}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {item.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground pt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Right Metric Pill */}
                <div className="md:w-44 shrink-0 flex flex-col items-start md:items-end justify-center p-4 rounded-2xl bg-card/80 border border-border/60 text-left md:text-right">
                  <span className="text-2xl font-black text-foreground font-mono">
                    {item.score}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground mt-1">
                    <Calendar size={13} className="text-indigo-500" />
                    <span>{item.timeline}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
