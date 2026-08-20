"use client"

import { Code2, ExternalLink, Github, Sparkles, Video, Share2, Lock, Globe, Car, BookOpen, Layers, ShieldCheck } from "lucide-react"

const featuredProjects = [
  {
    title: "TEDxIITI 2026 — Official Event Website",
    subtitle: "Official Digital Platform for TEDx IIT Indore",
    context: "Head of Web Development Team @ TEDxIITI",
    timeline: "Oct 2025 – Mar 2026",
    description: "Developed and contributed to the official TEDxIITI 2026 website, creating the digital platform for one of IIT Indore's major TEDx events. As Head of Web Development, led development efforts, architecture, and UI/UX execution.",
    points: [
      "Led the Web Development team at TEDxIITI in designing, architecting, and deploying the official flagship event platform.",
      "Engineered high-performance responsive speaker showcases, interactive event agendas, ticketing workflows, and smooth animations.",
      "Optimized load times, SEO accessibility, and cross-device responsiveness for national event traffic.",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Vercel", "Framer Motion", "UI/UX"],
    github: "https://github.com/tedx-iiti/TEDxIITI2026",
    website: "https://tedxiiti.com/",
    icon: Globe,
    color: "from-red-500/10 via-purple-500/5 to-indigo-500/10",
    badge: "Web Dev Head • TEDxIITI",
  },
  {
    title: "MediCall",
    subtitle: "Advanced Real-Time Emotion Analyzer for Video Calls",
    context: "IIT Indore (IITISoC'25 Silver Medalist Project)",
    timeline: "May 2025 – Aug 2025",
    description: "SFU-based low-latency video conferencing platform with real-time emotion recognition and live facial landmark tracking.",
    points: [
      "Built SFU architecture using WebRTC, Mediasoup, and Socket.io, supporting secure low-latency video rooms with 20+ concurrent users.",
      "Integrated real-time emotion analysis using Face-API.js, TensorFlow.js, and 468 facial landmarks from MediaPipe FaceMesh to deliver live emoji overlays.",
      "Designed meeting analytics, chat history, participant tracking modules using MongoDB and Google OAuth.",
    ],
    tech: ["WebRTC", "Mediasoup (SFU)", "Socket.io", "React.js", "Node.js", "TensorFlow.js", "MediaPipe", "MongoDB"],
    github: "https://github.com/Princekumarofficial/IITISoC-sd_012",
    website: "https://iiti-so-c-frontend.vercel.app",
    icon: Video,
    color: "from-indigo-500/10 via-purple-500/5 to-cyan-500/10",
    badge: "IITISoC Silver Medal",
  },
  {
    title: "Stream Social",
    subtitle: "Scalable Full-Stack Social Networking Web App",
    context: "Mentored by Prof. Nagendra Kumar, Asst. Professor, IIT Indore",
    timeline: "Aug 2025 – Nov 2025",
    description: "Production-ready social networking platform with 10+ core features, real-time messaging, and high-performance 3NF PostgreSQL database.",
    points: [
      "Architected scalable social network with 10+ production features including posts, stories, follower networks, notifications, and media sharing.",
      "Designed a 3NF PostgreSQL schema with 10+ relational tables, automated triggers, and strict foreign-key constraints.",
      "Integrated real-time chat and media pipeline using Socket.io, JWT authentication, and Cloudinary CDN.",
    ],
    tech: ["React.js", "Next.js", "PostgreSQL (3NF)", "Node.js", "Socket.io", "JWT", "Cloudinary", "Express.js"],
    github: "https://github.com/PratyushG434/Social_Media_Platform",
    website: "https://social-media-platform-ten-snowy.vercel.app/",
    icon: Share2,
    color: "from-cyan-500/10 via-blue-500/5 to-indigo-500/10",
    badge: "Faculty Mentored",
  },
  {
    title: "GoTogether",
    subtitle: "Campus-Focused Ride-Sharing Platform for IIT Indore",
    context: "IIT Indore Student Carpooling Network (PClub)",
    timeline: "Mar 2024 – May 2024",
    description: "GoTogether is a ride-sharing platform built specifically for IIT Indore students, making it easier to discover, offer, and manage rides within the campus community.",
    points: [
      "Combines Google/Email authentication, ride management, rider/driver roles, scheduling, and notifications into a complete carpooling solution.",
      "Built ride discovery, trip scheduling, status tracking, and in-app communication for students to reduce campus travel costs.",
      "Integrated Firebase Cloud Messaging (FCM) for real-time ride updates and status notifications.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "FCM", "Cloudinary", "Vercel"],
    github: "https://github.com/abhaylodhi014/GoTogether-Pclub",
    website: "https://go-together-zeta.vercel.app/",
    icon: Car,
    color: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
    badge: "IIT Indore Campus App",
  },
]

const otherProjects = [
  {
    title: "GoVibe — Full-Stack Blog Platform",
    subtitle: "Content Publishing & Authoring Web Application",
    description: "Full-stack blogging platform that enables users to explore, create, and manage blog content through a seamless reading and authoring experience. Integrates authentication, Cloudinary uploads, and comments.",
    points: [
      "Public blog discovery for guests; full authoring suite (create, edit, delete posts, comments) for authenticated users.",
      "Integrated Cloudinary CDN for cloud-based image processing and Firebase Authentication.",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Firebase Auth", "Cloudinary", "Vercel", "Render"],
    github: "https://github.com/abhaylodhi014/Govibe_blog-app",
    website: "https://go-vibe-frontend.vercel.app/",
    icon: BookOpen,
    badge: "Full-Stack Blog App",
  },
  {
    title: "Kredent — Identity Verification System",
    subtitle: "Decentralized Ethereum KYC & Auction Mechanism",
    description: "Ethereum-based decentralized KYC verification platform featuring AES-256 encryption, Role-Based Access Control (3 roles), and smart contract gas optimization.",
    points: [
      "Role-Based Access Control for 3 user roles with SHA-256 hashing and hybrid on/off-chain storage.",
      "Reduced smart contract gas costs by 41% using Hardhat compilation optimizations.",
    ],
    tech: ["Solidity", "Ethereum", "Hardhat", "AES-256", "React.js", "Node.js", "Web3.js"],
    github: "https://github.com/DevanshuDubey/cs218_auth_chain_Merkel_Secure",
    website: "",
    icon: Lock,
    badge: "Blockchain & Web3",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <Code2 size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            High-impact software applications engineered for event platforms, WebRTC real-time media, campus transportation, distributed databases, and blockchain security.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-10 mb-20">
          {featuredProjects.map((project, idx) => {
            const IconComp = project.icon
            return (
              <div
                key={idx}
                className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-10 border border-border/80 bg-gradient-to-br ${project.color} transition-all duration-300 shadow-xl`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left Main Content */}
                  <div className="space-y-4 flex-1">
                    
                    {/* Header Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold border border-indigo-500/20">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {project.timeline}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {project.context}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground flex items-center gap-3">
                        <IconComp className="text-indigo-500 shrink-0" size={28} />
                        <span>{project.title}</span>
                      </h3>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Paragraph overview */}
                    <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 pt-2">
                      {project.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-indigo-500 font-bold mt-0.5">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="pt-4 flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-xl bg-card border border-border/70 text-xs font-mono text-foreground font-semibold shadow-2xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right CTA Links */}
                  <div className="lg:w-48 shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-border/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-card border border-border/80 hover:border-foreground/40 text-foreground font-semibold text-xs transition-all hover:scale-[1.02]"
                    >
                      <Github size={16} />
                      <span>View GitHub</span>
                    </a>

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all hover:scale-[1.02]"
                      >
                        <ExternalLink size={16} />
                        <span>Live Website</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Other Notable Projects Sub-Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <h3 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
              <Layers size={22} className="text-indigo-500" />
              <span>More Full-Stack Projects</span>
            </h3>
            <span className="text-xs font-mono text-muted-foreground">Production Repositories</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, idx) => {
              const IconComp = project.icon
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-border/80 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-card border border-border/60 font-mono text-xs font-bold text-indigo-500">
                        {project.badge}
                      </span>
                      <IconComp size={22} className="text-muted-foreground" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-card border border-border/60 text-[11px] font-mono text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-card border border-border text-xs font-semibold text-foreground hover:border-foreground/40 transition-colors"
                    >
                      <Github size={14} />
                      <span>Codebase</span>
                    </a>

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
