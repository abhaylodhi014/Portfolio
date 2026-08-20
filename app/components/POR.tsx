"use client"

import { ShieldCheck, Calendar, Users, Globe, Code, Sparkles, ExternalLink, Github } from "lucide-react"

const porList = [
  {
    role: "Web Development Head",
    organization: "TEDx IIT Indore",
    duration: "Oct 2025 – Mar 2026",
    description: "Developed and contributed to the official TEDxIITI 2026 website, creating the digital platform for one of IIT Indore's major TEDx events. As Head of Web Development, led architectural design, UI/UX, and engineering execution.",
    icon: Globe,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    website: "https://tedxiiti.com/",
    github: "https://github.com/tedx-iiti/TEDxIITI2026",
  },
  {
    role: "Software Development Coordinator",
    organization: "CSESA, IIT Indore",
    duration: "Mar 2025 – Present",
    description: "Coordinating technical events, software development workshops, and student mentorship programs under Computer Science Engineering Students' Association.",
    icon: Users,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    website: "",
    github: "",
  },
  {
    role: "Member, Programming Club (Software Division)",
    organization: "IIT Indore",
    duration: "Feb 2025 – Present",
    description: "Active member contributing to campus open-source projects, competitive programming sessions, and hackathons.",
    icon: Code,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    website: "",
    github: "",
  },
  {
    role: "Member, Google Developer Group (Software Division)",
    organization: "IIT Indore",
    duration: "Feb 2025 – Present",
    description: "Collaborating with fellow developers on modern web tools, AI technologies, and community developer summits.",
    icon: Sparkles,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    website: "",
    github: "",
  },
]

export default function POR() {
  return (
    <section id="leadership" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <ShieldCheck size={14} />
            <span>COMMUNITY & INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Positions of Responsibility
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            Technical leadership, event organization, and active club involvement at IIT Indore.
          </p>
        </div>

        {/* POR Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {porList.map((item, idx) => {
            const IconComp = item.icon
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-border/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`p-3 rounded-2xl ${item.bgColor} ${item.color}`}>
                      <IconComp size={24} />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-card border border-border/60 text-muted-foreground">
                      {item.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>IIT Indore Student Leadership</span>
                  
                  {item.website ? (
                    <div className="flex items-center gap-3">
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors flex items-center gap-1"
                        >
                          <Github size={13} />
                          <span>Code</span>
                        </a>
                      )}
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 font-bold hover:underline flex items-center gap-1"
                      >
                        <span>tedxiiti.com</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  ) : (
                    <span className="text-emerald-500 font-bold">● Active</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
