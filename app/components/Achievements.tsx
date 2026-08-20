"use client"

import { Trophy, Award, ExternalLink, Star, Medal, Target, Flame, TrendingUp } from "lucide-react"

const achievementsList = [
  {
    title: "LeetCode Knight",
    category: "Competitive Programming",
    metric: "2055 Peak Rating",
    badge: "Knight Title",
    year: "2026",
    color: "from-amber-500/20 via-amber-500/5 to-transparent",
    borderColor: "border-amber-500/40 hover:border-amber-500/80",
    accentColor: "text-amber-500",
    description: "Achieved Knight status on LeetCode with top global contest ranks: Global Rank 482 (Biweekly 184) and Global Rank 928 (Weekly 507).",
    link: "https://leetcode.com/u/abhay_014_",
    linkLabel: "View Handle",
    icon: Star,
  },
  {
    title: "Codeforces Expert",
    category: "Competitive Programming",
    metric: "1604 Peak Rating",
    badge: "Expert Title",
    year: "2026",
    color: "from-blue-500/20 via-blue-500/5 to-transparent",
    borderColor: "border-blue-500/40 hover:border-blue-500/80",
    accentColor: "text-blue-500",
    description: "Reached Expert rank on Codeforces. Secured Global Rank 522 in Codeforces Round 1103 (Div. 3).",
    link: "https://codeforces.com/profile/abhay_014_",
    linkLabel: "View Handle",
    icon: Flame,
  },
  {
    title: "CodeChef 3-Star",
    category: "Competitive Programming",
    metric: "1762 Peak Rating",
    badge: "3-Star Competitor",
    year: "2026",
    color: "from-purple-500/20 via-purple-500/5 to-transparent",
    borderColor: "border-purple-500/40 hover:border-purple-500/80",
    accentColor: "text-purple-500",
    description: "3-Star rating on CodeChef with outstanding performance: Global Rank 206 (Starters 243) and Global Rank 279 (Starters 240).",
    link: "https://www.codechef.com/users/abhay_014",
    linkLabel: "View Handle",
    icon: TrendingUp,
  },
  {
    title: "Silver Medalist — IITISoC '25",
    category: "Software Hackathon & Mentorship",
    metric: "Silver Medal",
    badge: "IIT Indore Award",
    year: "2025",
    color: "from-slate-400/20 via-slate-400/5 to-transparent",
    borderColor: "border-slate-400/40 hover:border-slate-400/80",
    accentColor: "text-slate-300",
    description: "Awarded Silver Medalist in IIT Indore Summer of Code 2025 for architecting MediCall (Real-Time WebRTC & Emotion Analytics Platform).",
    link: "https://drive.google.com/file/d/1tHPimWKNVE1jhbLd9EHygRmt1IK_8zuR/view?usp=sharing",
    linkLabel: "View Certificate",
    icon: Medal,
  },
  {
    title: "Research Consultant — WorldQuant BRAIN",
    category: "Quantitative Research",
    metric: "Research Consultant",
    badge: "Quantitative Alpha",
    year: "2026",
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    borderColor: "border-emerald-500/40 hover:border-emerald-500/80",
    accentColor: "text-emerald-500",
    description: "Selected as Research Consultant at WorldQuant BRAIN, developing quantitative alpha factors and financial prediction models.",
    link: "https://drive.google.com/file/d/1-CkfbpeQm3f3nCpHkMjjW4k3WMGZGl5C/view?usp=sharing",
    linkLabel: "View Certificate",
    icon: Target,
  },
  {
    title: "JEE Mains & Advanced Excellence",
    category: "National Level Examination",
    metric: "AIR 2321 & 3159",
    badge: "Top 0.1% Percentile",
    year: "2024",
    color: "from-pink-500/20 via-pink-500/5 to-transparent",
    borderColor: "border-pink-500/40 hover:border-pink-500/80",
    accentColor: "text-pink-500",
    description: "Secured All India Rank 2321 in JEE Mains and All India Rank 3159 in JEE Advanced out of 1.2M+ candidates nationwide.",
    link: "",
    linkLabel: "",
    icon: Award,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold mb-3">
            <Trophy size={14} />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Key Achievements
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            Verified competitive programming titles, contest rankings, national entrance achievements, and research honors.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className={`group glass-card rounded-3xl p-6 bg-gradient-to-br ${item.color} border ${item.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`p-3 rounded-2xl bg-background/80 border border-border/60 ${item.accentColor} shadow-inner`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-background/80 border border-border/60 text-muted-foreground">
                        {item.year}
                      </span>
                      <span className={`text-xs font-mono font-bold mt-1 ${item.accentColor}`}>
                        {item.metric}
                      </span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-medium text-muted-foreground uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                {item.link ? (
                  <div className="pt-5 mt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">{item.badge}</span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.accentColor} hover:underline`}
                    >
                      <span>{item.linkLabel}</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                ) : (
                  <div className="pt-5 mt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">{item.badge}</span>
                    <span className="text-xs font-mono text-muted-foreground">National Record</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
