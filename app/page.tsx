"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Briefcase,
  BookOpen,
  Trophy,
  ExternalLink,
  ArrowRight,
  Moon,
  Sun,
  Award,
} from "lucide-react"

interface Section {
  id: string
  title: string
}

const sections: Section[] = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "achievements", title: "Achievements" },
  { id: "education", title: "Education" },
]

const CodeforcesSVG = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 4C4.9 4 4 4.9 4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H6zm2.5 2c1.38 0 2.5 1.12 2.5 2.5S9.88 11 8.5 11 6 9.88 6 8.5 7.12 6 8.5 6zm4 0c1.38 0 2.5 1.12 2.5 2.5S13.88 11 12.5 11 10 9.88 10 8.5 11.12 14 12.5 14zm4 0c1.38 0 2.5 1.12 2.5 2.5S17.88 11 16.5 11 14 9.88 14 8.5 15.12 14 16.5 14zm-10 8c1.38 0 2.5 1.12 2.5 2.5S9.88 19 8.5 19 6 17.88 6 16.5 7.12 14 8.5 14zm4 0c1.38 0 2.5 1.12 2.5 2.5S13.88 19 12.5 19 10 17.88 10 16.5 11.12 14 12.5 14zm4 0c1.38 0 2.5 1.12 2.5 2.5S17.88 19 16.5 19 14 17.88 14 16.5 15.12 14 16.5 14z" />
  </svg>
)

const LeetCodeSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10h8a1 1 0 0 0 0-2h-8c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8a1 1 0 0 0 2 0C22 6.486 17.514 2 12 2zM11 7l5 5-5 5V7z" />
  </svg>
);




export default function Resume() {
  const [activeSection, setActiveSection] = useState("about")
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(prefersDark)
    updateTheme(prefersDark)
  }, [])

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    updateTheme(!isDark)
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      <div className="fixed inset-0 -z-10">
        {/* Layer 1: Animated primary blob */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl drift animate-pulse"></div>

        {/* Layer 2: Secondary accent blob with drift */}
        <div
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-accent/15 to-accent/5 rounded-full blur-3xl drift-delayed"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Layer 3: Tertiary floating element */}
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl floating-light"></div>

        {/* Layer 4: Secondary blob with secondary color */}
        <div
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-secondary/5 rounded-full blur-3xl drift"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Layer 5: Subtle ambient glow */}
        <div className="absolute bottom-0 left-1/2 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

        {/* Layer 6: Accent lines and shimmer overlays */}
        <div className="absolute inset-0 opacity-20 shimmer"></div>

        {/* Layer 7: Rotating geometric rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
          <div className="absolute inset-0 border border-primary/30 rounded-full orbit-rotate"></div>
          <div
            className="absolute inset-1/4 border border-accent/20 rounded-full orbit-rotate"
            style={{ animationDirection: "reverse", animationDuration: "25s" }}
          ></div>
          <div
            className="absolute inset-1/3 border border-blue-500/15 rounded-full orbit-rotate"
            style={{ animationDuration: "30s" }}
          ></div>
        </div>

        {/* Layer 8: Radial pulse from center */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl radial-pulse"></div>
        </div>

        {/* Layer 9: Abstract flowing lines */}
        <div className="absolute top-0 left-0 w-full h-1/2 opacity-40">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(var(--primary), 0)" />
                <stop offset="50%" stopColor="rgba(var(--accent), 0.4)" />
                <stop offset="100%" stopColor="rgba(var(--primary), 0)" />
              </linearGradient>
            </defs>
            <polyline
              points="0,100 200,80 400,120 600,60 800,100 1000,80 1200,120"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              className="wave-shift"
            />
          </svg>
        </div>

        {/* Layer 10: Scattered geometric particles */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-accent/40 rounded-full geometric-shift"></div>
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full twirl"></div>
        <div
          className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-blue-500/25 rounded-full orbit-rotate"
          style={{ width: "12px", height: "12px", animationDuration: "18s" }}
        ></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-accent/50 rounded-full fade-in-out"></div>
        <div
          className="absolute top-1/4 left-1/2 w-2 h-2 bg-primary/35 rounded-full fade-in-out"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Layer 11: Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"></div>

        {/* Layer 12: Fine grained noise texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4"/></filter><rect width="100" height="100" filter="url(%23n)" fill="%23000"/></svg>\')',
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/40 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AL
          </div>
          <div className="hidden md:flex gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 text-sm rounded-lg transition-all ${
                  activeSection === section.id
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors hover:text-primary"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/abhaylodhi014"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors hover:text-primary"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-lodhi-a5a21231a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors hover:text-primary"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8 slide-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
              Abhay{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Lodhi
              </span>
            </h1>
            <p className="text-xl text-accent mb-2 font-medium">Full-Stack Developer & Competitive Programmer</p>
            <p className="text-muted-foreground max-w-2xl">
              B.Tech Computer Science @ IIT Indore | Building scalable web applications with modern tech stack
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a
              href="mailto:abhaylodhi128135@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 font-medium group"
            >
              <Mail size={18} />
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917067452517"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary rounded-lg hover:bg-primary/10 transition-all font-medium"
            >
              +91-7067452517
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/40">
            <div className="fade-in group">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6 group-hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/15 shimmer">
                <p className="text-3xl font-bold text-accent">8.53</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA (Current)</p>
              </div>
            </div>
            <div className="fade-in group" style={{ animationDelay: "0.1s" }}>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 group-hover:border-blue-500/60 transition-all hover:shadow-lg hover:shadow-blue-500/15 shimmer">
                <p className="text-3xl font-bold text-blue-400">1402</p>
                <p className="text-sm text-muted-foreground mt-1">Codeforces Rating</p>
              </div>
            </div>
            <div className="fade-in group" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/30 rounded-xl p-6 group-hover:border-yellow-500/60 transition-all hover:shadow-lg hover:shadow-yellow-500/15 shimmer">
                <p className="text-3xl font-bold text-yellow-400">1749</p>
                <p className="text-sm text-muted-foreground mt-1">LeetCode Rating</p>
              </div>
            </div>
            <div className="fade-in group" style={{ animationDelay: "0.3s" }}>
              <div className="bg-gradient-to-br from-primary/20 to-accent/5 border border-primary/30 rounded-xl p-6 group-hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/15 shimmer">
                <p className="text-3xl font-bold text-accent">650+</p>
                <p className="text-sm text-muted-foreground mt-1">Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/40">
              <Briefcase className="text-primary" size={28} />
            </div>
            Experience
          </h2>

          <div className="space-y-8">
            <div className="group">
              <div className="bg-gradient-to-br from-card to-card/50 border border-border/40 rounded-xl p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Software Development Intern</h3>
                    <p className="text-accent mt-1 font-medium">SIDDHI - IIT Indore, Charak Center</p>
                  </div>
                  <p className="text-muted-foreground text-sm px-3 py-1 bg-primary/10 rounded-lg">May - July 2024</p>
                </div>
                <p className="text-muted-foreground mb-6">
                  Developed OCR-based digitization system for manual health records in Community Health Centers
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Node.js", "PostgreSQL", "Clerk", "Docker", "Vision Transformers"].map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/40">
              <Code2 className="text-primary" size={28} />
            </div>
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Medicall",
                desc: "AI-powered real-time video calling platform with emotion recognition, live emoji overlays, and analytics",
                tech: [
                  "React.js",
                  "Tailwind CSS",
                  "Socket.io",
                  "Mediasoup",
                  "Node.js",
                  "MongoDB",
                  "TensorFlow.js",
                  "WebRTC",
                ],
                date: "Jun - Aug 2025",
                highlight: true,
              },
              {
                title: "GoTogether",
                desc: "Ride-sharing platform for IIT Indore students to find and offer rides with real-time location tracking",
                tech: ["React.js", "Node.js", "Firebase", "FCM", "MongoDB Atlas"],
                date: "Mar - May 2024",
              },
              {
                title: "GoVibe",
                desc: "Full-stack blog platform enabling users to read, write, and manage blog posts with cloud storage",
                tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "Firebase Auth"],
                date: "Jan - Mar 2024",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className={`rounded-xl border transition-all group cursor-pointer ${
                  project.highlight
                    ? "bg-gradient-to-br from-primary/15 via-accent/10 to-transparent border-primary/40 md:col-span-2 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/15"
                    : "bg-gradient-to-br from-card/50 to-card/20 border-border/40 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
                } p-8`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <ExternalLink className="text-muted-foreground group-hover:text-accent transition-colors" size={20} />
                </div>
                <p className="text-muted-foreground mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/40">
              <BookOpen className="text-primary" size={28} />
            </div>
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Languages",
                items: ["C++", "JavaScript", "TypeScript", "Python", "C", "HTML", "CSS"],
              },
              {
                category: "Frameworks & Tools",
                items: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "Git"],
              },
              {
                category: "Specialized",
                items: ["WebRTC", "Socket.io", "Firebase", "TensorFlow.js", "OpenCV", "Vision Transformers"],
              },
            ].map((skill) => (
              <div
                key={skill.category}
                className="group bg-gradient-to-br from-card/50 to-card/20 border border-border/40 rounded-xl p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all shimmer"
              >
                <h3 className="text-lg font-bold text-primary mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/40">
              <Trophy className="text-primary" size={28} />
            </div>
            Achievements & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Codeforces Achievement */}
            <div className="group bg-gradient-to-br from-blue-500/15 via-blue-500/5 to-transparent border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/60 transition-all hover:shadow-lg hover:shadow-blue-500/20 shimmer">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400">
                  <CodeforcesSVG />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-blue-400">Codeforces Specialist</p>
                  <p className="text-muted-foreground text-sm mt-1">Max Rating: 1402 (2025)</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Competitive programming expertise with consistent problem-solving at high levels
                  </p>
                </div>
              </div>
            </div>

            {/* LeetCode Achievement */}
            <div className="group bg-gradient-to-br from-yellow-500/15 via-yellow-500/5 to-transparent border border-yellow-500/30 rounded-xl p-8 hover:border-yellow-500/60 transition-all hover:shadow-lg hover:shadow-yellow-500/20 shimmer">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-yellow-500/20 border border-yellow-500/40 text-yellow-400">
                  <LeetCodeSVG />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-yellow-400">LeetCode Expert</p>
                  <p className="text-muted-foreground text-sm mt-1">World Rank #1108 - Biweekly Contest 163 (2025)</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Max Rating: 1749 - Demonstrated excellence in algorithm competitions
                  </p>
                </div>
              </div>
            </div>

            {/* Competitive Programming */}
            <div className="group bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-transparent border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20 shimmer">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                  <Code2 size={28} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-cyan-400">Competitive Programming</p>
                  <p className="text-muted-foreground text-sm mt-1">650+ Problems Solved</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Extensive practice across multiple platforms with consistent success
                  </p>
                </div>
              </div>
            </div>

            {/* JEE Mains */}
            <div className="group bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-transparent border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/20 shimmer">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-400">
                  <Award size={28} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-purple-400">JEE Mains 2024</p>
                  <p className="text-muted-foreground text-sm mt-1">All India Rank - 2321</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Scored in top 0.1% percentile among 1.2M+ candidates
                  </p>
                </div>
              </div>
            </div>

            {/* JEE Advanced */}
            <div className="group bg-gradient-to-br from-pink-500/15 via-pink-500/5 to-transparent border border-pink-500/30 rounded-xl p-8 hover:border-pink-500/60 transition-all hover:shadow-lg hover:shadow-pink-500/20 shimmer">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-pink-500/20 border border-pink-500/40 text-pink-400">
                  <Trophy size={28} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-pink-400">JEE Advanced 2024</p>
                  <p className="text-muted-foreground text-sm mt-1">All India Rank - 3159</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Qualified in top tier entrance exam with excellent performance
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Excellence */}
            <div className="group bg-gradient-to-br from-green-500/15 via-green-500/5 to-transparent border border-green-500/30 rounded-xl p-8 hover:border-green-500/60 transition-all hover:shadow-lg hover:shadow-green-500/20 shimmer">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400">
                  <BookOpen size={28} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-green-400">Academic Excellence</p>
                  <p className="text-muted-foreground text-sm mt-1">CGPA: 8.53/10 (Current)</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Consistent high performance throughout academic journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/40">
              <BookOpen className="text-primary" size={28} />
            </div>
            Education
          </h2>

          <div className="space-y-6">
            {[
              {
                degree: "B.Tech Computer Science Engineering",
                institute: "Indian Institute of Technology Indore",
                year: "2024 - Present",
                cgpa: "8.53 CGPA",
                description:
                  "Pursuing Computer Science with focus on full-stack development and competitive programming",
              },
              {
                degree: "Senior Secondary",
                institute: "MP Board",
                year: "Completed 2024",
                cgpa: "92.2%",
                description: "Strong foundation in science and mathematics with excellent academic performance",
              },
              {
                degree: "Secondary",
                institute: "CBSE Board",
                year: "Completed 2022",
                cgpa: "94.0%",
                description: "Demonstrated excellence in academics with consistent high grades",
              },
            ].map((edu, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-r from-card/50 to-card/20 border border-border/40 rounded-xl p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all shimmer"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-lg font-bold text-primary">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institute}</p>
                    <p className="text-muted-foreground text-xs mt-2">{edu.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-semibold">{edu.cgpa}</p>
                    <p className="text-muted-foreground text-sm">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40 bg-gradient-to-t from-card/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Abhay Lodhi</h3>
              <p className="text-muted-foreground">Full-Stack Developer • IIT Indore</p>
            </div>

            <div className="flex gap-6">
              <a
                href="mailto:abhaylodhi128135@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                Email
              </a>
              <a
                href="https://github.com/abhaylodhi014"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abhay-lodhi-a5a21231a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2025 Abhay Lodhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
