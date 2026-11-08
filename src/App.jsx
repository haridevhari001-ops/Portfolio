import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu,
  X, Code2, Layers3, MonitorSmartphone, Server, Database, Wrench,
  ExternalLink, Download, Sparkles, MapPin
} from "lucide-react";

const profile = {
  name: "Haridev C",
  role: "Full Stack Developer",
  location: "Calicut, Kerala, India",
  email: "haridevhari001@gmail.com",
  github: "https://github.com/haridevhari001-ops",
  linkedin: "https://www.linkedin.com/in/haridevc/",
  resume: "/Haridev_Resume_One_Page (1) (1).pdf",
};

const projects = [
  {
    number: "01",
    name: "E-cart Application",
    type: "E-commerce · Frontend",
    description:
      "A responsive e-commerce application where users can explore products, manage a shopping cart, and maintain a wishlist. Product data is fetched through REST APIs, with Redux Toolkit handling shared application state.",
    stack: ["React.js", "JavaScript", "Redux Toolkit", "REST APIs", "Bootstrap"],
    accent: "from-lime-300/20 via-emerald-400/5 to-transparent",
    mark: "EC",
    github: "https://github.com/haridevhari001-ops/Redux-cart",
    demo: "https://redux-cart-p0iss3lnc-haridev.vercel.app/",
  },
  {
    number: "02",
    name: "Calculator Web App",
    type: "Frontend · Utility",
    description:
      "A responsive calculator with a clean interface for performing basic arithmetic operations, built to practise JavaScript logic and interactive UI development.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    accent: "from-sky-300/20 via-blue-400/5 to-transparent",
    mark: "＋",
    github: "#", // Add repository URL
    demo: "#",   // Add live URL
  },
  {
    number: "03",
    name: "Airbnb Clone Web App",
    type: "Frontend · UI recreation",
    description:
      "An Airbnb-inspired responsive webpage focused on recreating a familiar travel interface with structured layouts and a user-friendly visual experience.",
    stack: ["HTML", "CSS", "Bootstrap"],
    accent: "from-rose-300/20 via-pink-400/5 to-transparent",
    mark: "A",
    github: "#", // Add repository URL
    demo: "#",   // Add live URL
  },
  {
    number: "04",
    name: "Netflix Clone Web App",
    type: "Frontend · UI recreation",
    description:
      "A Netflix-inspired responsive interface created to practise page structure, visual hierarchy, and responsive frontend styling.",
    stack: ["HTML", "CSS", "Bootstrap"],
    accent: "from-red-400/20 via-orange-400/5 to-transparent",
    mark: "N",
    github: "#", // Add repository URL
    demo: "#",   // Add live URL
  },
];

const skillGroups = [
  { title: "Frontend", icon: MonitorSmartphone, skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { title: "State & UI", icon: Layers3, skills: ["Redux Toolkit", "Responsive Design", "REST API Integration"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js"] },
  { title: "Database", icon: Database, skills: ["MongoDB"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Vercel", "Render"] },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]];
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#080b12]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="display text-xl font-bold tracking-tight">hari<span className="text-lime-300">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-lime-300">{label}</a>)}
          <a href={profile.resume} className="rounded-full border border-lime-300/40 px-4 py-2 text-sm font-semibold text-lime-200 transition hover:bg-lime-300 hover:text-slate-950">Resume <ArrowUpRight className="ml-1 inline" size={15} /></a>
        </div>
        <button className="rounded-lg border border-white/10 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#0b101a] px-5 py-4 md:hidden">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm text-slate-300">{label}</a>)}
        <a href={profile.resume} className="mt-2 inline-flex items-center gap-2 text-sm text-lime-300">Download resume <Download size={15} /></a>
      </div>}
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return <div className="mb-12 max-w-2xl">
    <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-lime-300">{eyebrow}</p>
    <h2 className="display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
  </div>;
}

function Hero() {
  return (
    <section
      id="home"
      className="section-anchor relative flex min-h-[760px] items-center overflow-hidden px-5 pb-20 pt-32 md:px-8"
    >
      {/* BACKGROUND */}
      <div className="grid-bg absolute inset-0" />

      <div className="absolute -right-40 top-24 h-[500px] w-[500px] rounded-full bg-lime-300/[0.07] blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_.8fr]">

        {/* LEFT SIDE */}
        <div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-4 py-2 text-xs font-medium text-lime-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />
            Available for opportunities
          </div>

          <p className="mb-4 text-sm font-medium tracking-wide text-slate-400">
            HELLO, I'M
          </p>

          <h1 className="display text-5xl font-bold leading-[1.08] tracking-[-.05em] text-white sm:text-7xl">
            Haridev<span className="text-lime-300"> C.</span>
          </h1>

          <h2 className="display mt-5 text-2xl font-medium text-slate-300 sm:text-3xl">
            I build for the <span className="text-lime-300">web.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            Full Stack Developer focused on building responsive,
            accessible, and user-friendly web experiences.
            Currently expanding my skills with React, Next.js,
            Node.js, Express.js, and MongoDB.
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-3">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-lime-200"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-lime-300/50 hover:text-lime-200"
            >
              <Download size={16} />
              Resume
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-12 flex flex-wrap items-center gap-5 text-slate-400">

            <a
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-300"
            >
              <Github size={20} />
            </a>

            <a
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-300"
            >
              <Linkedin size={20} />
            </a>

            <a
              aria-label="Email"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-300"
            >
              <Mail size={20} />
            </a>

            <span className="h-px w-12 bg-white/15" />

            <span className="flex items-center gap-2 text-xs">
              <MapPin size={14} />
              {profile.location}
            </span>

          </div>
        </div>

        {/* RIGHT SIDE - PROFILE PHOTO CARD */}
        <div className="relative mx-auto w-full max-w-[390px]">

          {/* BACKGROUND GLOW */}
          <div className="absolute inset-8 rounded-full bg-lime-300/10 blur-3xl" />

          {/* MAIN CARD */}
          <div className="card-shine relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1c2930] via-[#111923] to-[#11131c] p-6 shadow-2xl">

            {/* CARD HEADER */}
            <div className="mb-5 flex items-center justify-between">

              <span className="text-xs tracking-[.2em] text-slate-500">
                PORTFOLIO / 2026
              </span>

              <Code2 size={20} className="text-lime-300" />

            </div>

            {/* PROFILE PHOTO */}
            <div className="group relative overflow-hidden rounded-2xl border border-lime-300/20">

              <img
                src="/hero-img.png"
                alt="Haridev - Full Stack Developer"
                className="h-[400px] w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1018] via-transparent to-transparent" />

              {/* PHOTO DETAILS */}
              <div className="absolute bottom-5 left-5">

                <p className="text-xs uppercase tracking-[.25em] text-lime-300">
                  Developer · Creator
                </p>

                <h3 className="display mt-2 text-3xl font-semibold text-white">
                  Haridev C.
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  Full Stack Developer
                </p>

              </div>

            </div>



              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />

            

          

          </div>

          {/* FLOATING FOCUS BADGE */}
      
        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-lime-300 md:block"
      >
        <ArrowDown size={20} />
      </a>

    </section>
  );
}


function About() {
  return <section id="about" className="section-anchor border-t border-white/[0.06] px-5 py-28 md:px-8">
    <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[.8fr_1.2fr]">
      <SectionHeading eyebrow="A little about me" title={<>Curious mind.<br /><span className="text-lime-300">Builder's mindset.</span></>} />
      <div className="pt-1">
        <p className="text-lg leading-9 text-slate-300"> I'm Haridev, a developer from Calicut, Kerala, with abackground in Computer Applications and a passion for building modern web applications.</p>
        <p className="mt-5 leading-8 text-slate-400">I work with HTML,CSS, JavaScript, React.js, and Next.js to build responsive and user-friendly interface. I'm also developing my backend skills with Node.js Express.js, and MongoDB to build full-stack applications.</p>
        <p className="mt-5 leading-8 text-slate-400"> I'm passionate about learning new technologies, solving problems, and turning ideas into practicals applications. I'm continuously improving my skills through hands-on projects and exploring modern web development practices..</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Problem solving</span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Continuous learning</span>
          <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Team collaboration</span>
        </div>
      </div>
    </div>
  </section>;
}

function Skills() {
  return <section id="skills" className="section-anchor bg-[#0b1018] px-5 py-28 md:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="What I work with" title="Skills & technologies" description="The tools and technologies I use to design, build, and improve web applications." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }) => <div key={title} className="card-shine rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-lime-300/25">
          <div className="mb-6 flex items-center gap-3"><div className="rounded-xl bg-lime-300/10 p-3 text-lime-300"><Icon size={20} /></div><h3 className="display text-lg font-semibold text-white">{title}</h3></div>
          <div className="flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-slate-300">{skill}</span>)}</div>
        </div>)}
      </div>
    </div>
  </section>;
}

function Projects() {
  return <section id="projects" className="section-anchor px-5 py-28 md:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Selected work" title="Things I've built" description="A selection of projects that reflect my learning journey and practical frontend development experience." />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map(project => <article key={project.number} className="card-shine group rounded-3xl border border-white/[0.08] bg-[#0d131d] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-300/30 sm:p-8">
          <div className={`mb-8 flex aspect-[16/8] items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} ring-1 ring-white/[0.06]`}>
            <span className="display text-7xl font-bold tracking-[-.08em] text-white/80 transition duration-300 group-hover:scale-110">{project.mark}<span className="text-lime-300">.</span></span>
          </div>
          <div className="flex items-center justify-between gap-3"><span className="text-xs font-bold tracking-[.18em] text-lime-300">{project.number} / PROJECT</span><span className="text-xs text-slate-500">{project.type}</span></div>
          <h3 className="display mt-3 text-2xl font-semibold text-white">{project.name}</h3>
          <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-slate-300">{item}</span>)}</div>
          <div className="mt-7 flex gap-5 border-t border-white/[0.07] pt-5 text-sm font-semibold">
            <a href={project.github} target={project.github === "#" ? undefined : "_blank"} rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-lime-300"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>
            <a href={project.demo} target={project.demo === "#" ? undefined : "_blank"} rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-lime-300"><ExternalLink size={15} /> Live demo <ArrowUpRight size={14} /></a>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}

function Contact() {
  return <section id="contact" className="section-anchor border-t border-white/[0.06] bg-[#0b1018] px-5 py-28 md:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-[2rem] border border-lime-300/20 bg-gradient-to-br from-lime-300/[0.10] to-[#111923] p-8 sm:p-14">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-lime-300">Let's connect</p>
          <h2 className="display text-4xl font-semibold leading-tight text-white sm:text-5xl">Have a project in mind?<br />Let's talk.</h2>
          <p className="mt-5 max-w-xl leading-8 text-slate-400">I'm interested in opportunities to learn, collaborate, and contribute to meaningful web projects. Feel free to reach out.</p>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime-300 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-lime-200"><Mail size={17} /> Say hello <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <footer className="flex flex-col items-center justify-between gap-5 py-9 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Haridev C. Built with React & Tailwind CSS.</p>
        <div className="flex gap-5"><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-lime-300">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime-300">LinkedIn</a><a href="#home" className="hover:text-lime-300">Back to top ↑</a></div>
      </footer>
    </div>
  </section>;
}

export default function App() {
  return <div className="min-h-screen overflow-hidden bg-[#080b12] text-slate-100">
    <Header />
    <main><Hero /><About /><Skills /><Projects /><Contact /></main>
  </div>;
}