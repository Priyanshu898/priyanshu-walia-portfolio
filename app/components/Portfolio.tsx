"use client";

import { useState } from "react";

const GITHUB_URL = "https://github.com/Priyanshu898";
const LINKEDIN_URL = "https://www.linkedin.com/in/priyanshu-walia-2b312a337";
const EMAIL = "waliapriyanshu.me789@gmail.com";

const RESUME_URL = "/resume.pdf";
const PROFILE_IMAGE = "/profile.jpg";

const PROJECT_URLS = {
  roxy: "#",
  ebook: "#",
  cloud: "#",
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    number: "01",
    category: "PROGRAMMING",
    items: ["Python", "SQL", "JavaScript Basics"],
  },
  {
    number: "02",
    category: "CLOUD & INFRASTRUCTURE",
    items: [
      "Cloud Computing",
      "Linux",
      "Virtualization",
      "Proxmox",
      "Clustering",
      "RAID",
      "Networking",
    ],
  },
  {
    number: "03",
    category: "AI & DEVELOPMENT",
    items: [
      "AI / ML Basics",
      "Streamlit",
      "Flask",
      "Speech Recognition",
      "Ollama",
    ],
  },
  {
    number: "04",
    category: "TOOLS & WORKFLOW",
    items: ["Git", "GitHub", "VS Code", "Practical Labs"],
  },
];

const projects = [
  {
    number: "01",
    label: "AI / VOICE ASSISTANT",
    title: "ROXY AI",
    description:
      "An AI voice assistant built with Python and Streamlit that supports voice commands, speech-to-text, text-to-speech and intelligent responses.",
    tags: ["Python", "Streamlit", "AI", "Ollama"],
    url: PROJECT_URLS.roxy,
  },
  {
    number: "02",
    label: "WEB APPLICATION",
    title: "Responsive E-Book Website",
    description:
      "A responsive web application developed using Flask, SQLite, HTML, CSS, Bootstrap and JavaScript.",
    tags: ["Python", "Flask", "SQLite", "Bootstrap", "JavaScript"],
    url: PROJECT_URLS.ebook,
  },
  {
    number: "03",
    label: "CLOUD / INFRASTRUCTURE",
    title: "Cloud Computing Lab",
    description:
      "Hands-on cloud infrastructure learning covering servers, virtualization, clustering, RAID, storage, networking and Linux.",
    tags: [
      "Cloud",
      "Linux",
      "Proxmox",
      "Virtualization",
      "Networking",
      "RAID",
    ],
    url: PROJECT_URLS.cloud,
  },
];

const learningTopics = [
  "Cloud Infrastructure",
  "Servers",
  "Virtualization",
  "Clustering",
  "Storage",
  "Networking",
  "Linux",
  "Artificial Intelligence",
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">PW</span>
          <span>Priyanshu Walia</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}

          <a
            href={`mailto:${EMAIL}`}
            className="nav-contact"
            onClick={closeMenu}
          >
            Let&apos;s Talk
            <span>↗</span>
          </a>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-grid">
          <div className="hero-content reveal">
            <p className="eyebrow">
              <span className="status-dot" />
              HELLO, I&apos;M
            </p>

            <h1 className="hero-title">
              PRIYANSHU
              <span>WALIA</span>
            </h1>

            <div className="hero-role">
              <span>Cloud Computing</span>
              <strong>&amp;</strong>
              <span>Data Science Enthusiast</span>
            </div>

            <p className="hero-description">
              BCA graduate and technology enthusiast focused on cloud
              computing, infrastructure, Linux, virtualization, networking
              and practical AI applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Projects
                <span>↗</span>
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Download Resume
                <span>↓</span>
              </a>
            </div>

            <div className="social-row">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a href={`mailto:${EMAIL}`} className="social-link">
                Email
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="profile-glow" />

            <div className="profile-card">
              <div className="profile-top-line">
                <span>PORTFOLIO / 2026</span>
                <span>01</span>
              </div>

              <div className="profile-image-wrapper">
                <div className="image-gradient-border">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Priyanshu Walia"
                    className="profile-image"
                  />
                </div>
              </div>

              <div className="profile-bottom-line">
                <span>PRIYANSHU WALIA</span>
                <span>INDIA</span>
              </div>
            </div>

            <div className="floating-badge badge-cloud">
              <span className="badge-icon">☁</span>
              <div>
                <small>FOCUS</small>
                <strong>Cloud</strong>
              </div>
            </div>

            <div className="floating-badge badge-python">
              <span className="badge-icon">Py</span>
              <div>
                <small>CORE</small>
                <strong>Python</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 — 06</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading reveal">
          <p className="section-number">01 / ABOUT</p>
          <h2>
            Building my path
            <br />
            <em>in technology.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-intro reveal">
            <p className="large-copy">
              I&apos;m a BCA graduate building practical knowledge across
              <strong> cloud infrastructure, AI and modern technology.</strong>
            </p>

            <p className="body-copy">
              My current learning journey is focused on understanding how
              servers, Linux, virtualization, networking, storage and cloud
              technologies work together. Alongside infrastructure, I enjoy
              building practical Python and AI-based projects.
            </p>

            <p className="body-copy">
              I&apos;m currently developing these skills through training,
              hands-on labs and personal projects rather than claiming
              professional cloud engineering experience.
            </p>
          </div>

          <div className="about-cards">
            <div className="info-card reveal">
              <span className="info-icon">01</span>
              <strong>BCA</strong>
              <small>Education</small>
            </div>

            <div className="info-card reveal reveal-delay">
              <span className="info-icon">02</span>
              <strong>Cloud</strong>
              <small>Current Focus</small>
            </div>

            <div className="info-card reveal">
              <span className="info-icon">03</span>
              <strong>AI</strong>
              <small>Project Interest</small>
            </div>

            <div className="info-card reveal reveal-delay">
              <span className="info-icon">04</span>
              <strong>Python</strong>
              <small>Core Language</small>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading reveal">
          <p className="section-number">02 / SKILLS</p>
          <h2>
            Tools I&apos;m
            <br />
            <em>building with.</em>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className={`skill-card reveal ${
                index % 2 === 1 ? "reveal-delay" : ""
              }`}
              key={skill.number}
            >
              <div className="skill-card-header">
                <span>{skill.number}</span>
                <span>↗</span>
              </div>

              <h3>{skill.category}</h3>

              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-heading project-heading reveal">
          <div>
            <p className="section-number">03 / PROJECTS</p>
            <h2>
              Things I&apos;ve
              <br />
              <em>built &amp; explored.</em>
            </h2>
          </div>

          <p className="heading-side-text">
            A collection of academic projects and practical technology
            experiments from my learning journey.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal ${
                index % 2 === 1 ? "reveal-delay" : ""
              }`}
              key={project.number}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <p className="project-label">{project.label}</p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-action">
                <a
                  href={project.url}
                  target={project.url === "#" ? undefined : "_blank"}
                  rel={project.url === "#" ? undefined : "noopener noreferrer"}
                  className="circle-button"
                  aria-label={`Open ${project.title} project`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEARNING */}
      <section id="learning" className="section learning-section">
        <div className="learning-layout">
          <div className="section-heading reveal">
            <p className="section-number">04 / LEARNING</p>
            <h2>
              Always
              <br />
              <em>learning.</em>
            </h2>
          </div>

          <div className="learning-content reveal reveal-delay">
            <p className="learning-intro">
              Currently building practical knowledge through training and
              hands-on labs.
            </p>

            <div className="learning-grid">
              {learningTopics.map((topic, index) => (
                <div className="learning-item" key={topic}>
                  <span>0{index + 1}</span>
                  <strong>{topic}</strong>
                  <span>↗</span>
                </div>
              ))}
            </div>

            <div className="learning-note">
              <span className="status-dot" />
              <p>
                My current training is helping me understand cloud computing
                from the infrastructure level — from servers and Linux to
                virtualization, networking, storage and clustering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-glow" />

        <div className="contact-content reveal">
          <p className="section-number">05 / CONTACT</p>

          <h2>
            Let&apos;s build
            <br />
            <em>something interesting.</em>
          </h2>

          <p className="contact-text">
            Interested in cloud infrastructure, AI and technology? Feel free
            to get in touch.
          </p>

          <a href={`mailto:${EMAIL}`} className="email-display">
            {EMAIL}
            <span>↗</span>
          </a>

          <div className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="button button-light">
              Email Me
              <span>↗</span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-outline-button"
            >
              GitHub
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-outline-button"
            >
              LinkedIn
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-outline-button"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>PRIYANSHU WALIA</strong>
          <span>Cloud Computing &amp; Data Science Enthusiast</span>
        </div>

        <div className="footer-center">
          © 2026 Priyanshu Walia
        </div>

        <div className="footer-right">
          <span>Built with</span>
          <strong>Next.js &amp; TypeScript</strong>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}