"use client"

import { Code2, Wrench, Database, BookOpen, Cpu, Sparkles, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    skills: [
      { name: "C++", level: "Advanced (CP & DSA)" },
      { name: "Python", level: "Proficient (FastAPI/AI)" },
      { name: "JavaScript", level: "Advanced (Node/React)" },
      { name: "HTML & CSS", level: "Proficient" },
    ],
  },
  {
    title: "Frameworks & Developer Tools",
    icon: Wrench,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Elementary / Intermediate*" },
      { name: "Node.js", level: "Proficient" },
      { name: "Socket.io", level: "Real-time Chat/Video" },
      { name: "WebRTC & Mediasoup", level: "SFU Architecture" },
      { name: "TensorFlow.js", level: "Elementary*" },
      { name: "Solidity", level: "Elementary*" },
      { name: "Docker", level: "Elementary*" },
      { name: "Git & GitHub", level: "Proficient" },
    ],
  },
  {
    title: "Databases & Cloud Storage",
    icon: Database,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    skills: [
      { name: "PostgreSQL", level: "3NF Relational Schemas" },
      { name: "MongoDB", level: "NoSQL & Analytics" },
      { name: "Firebase", level: "Elementary*" },
      { name: "Cloudinary", level: "Media Storage CDN" },
    ],
  },
  {
    title: "Specialized Technologies",
    icon: Cpu,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    skills: [
      { name: "FastAPI", level: "Python Async APIs" },
      { name: "OpenCV", level: "Table & Image Segmentation" },
      { name: "PaliGemma AI OCR", level: "Multilingual Extractions" },
      { name: "MediaPipe", level: "468 Facial Landmarks" },
      { name: "Hardhat", level: "Ethereum Smart Contracts" },
      { name: "AES-256 Encryption", level: "Data Security" },
    ],
  },
]

const csCourses = [
  "Computer Programming in C++",
  "Data Structures and Algorithms",
  "Database and Information Systems",
  "Design and Analysis of Algorithms",
  "Automata Theory",
  "Computer Architecture",
  "Hardware Security",
]

const mathCourses = [
  "Linear Algebra",
  "Calculus",
  "Complex Analysis",
  "Differential Equations",
  "Numerical Methods",
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <Layers size={14} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Tech Stack & Coursework
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            Core technologies, developer tools, databases, and foundational computer science & mathematics coursework at IIT Indore.
          </p>
        </div>

        {/* Tech Stack Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-border/80 space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${cat.bgColor} ${cat.color}`}>
                    <IconComp size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
                    <p className="text-xs text-muted-foreground">Supported by verified projects & competitive programming</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-card/70 p-3 rounded-2xl border border-border/60 flex flex-col justify-between hover:border-indigo-500/30 transition-colors"
                    >
                      <span className="font-semibold text-foreground text-sm">{skill.name}</span>
                      <span className="text-[11px] font-mono text-muted-foreground mt-1">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Coursework Matrix */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-border/80 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-foreground">Key Coursework Taken</h3>
                <p className="text-xs text-muted-foreground">Rigorous Computer Science & Mathematics curriculum at IIT Indore</p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
              IIT Indore CS Curriculum
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* CS Core */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Computer Science Core
              </h4>
              <div className="flex flex-wrap gap-2">
                {csCourses.map((c, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3.5 py-2 rounded-xl bg-card border border-border/80 text-xs sm:text-sm font-medium text-foreground shadow-2xs hover:border-indigo-500/40 transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Mathematics */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Mathematics & Analytical Foundations
              </h4>
              <div className="flex flex-wrap gap-2">
                {mathCourses.map((m, mIdx) => (
                  <span
                    key={mIdx}
                    className="px-3.5 py-2 rounded-xl bg-card border border-border/80 text-xs sm:text-sm font-medium text-foreground shadow-2xs hover:border-cyan-500/40 transition-colors"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-2 text-right">
            <span className="text-[11px] font-mono text-muted-foreground">
              * Indicates elementary proficiency / active learning curve as noted in LaTeX resume
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
