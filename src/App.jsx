import { useState, useEffect } from 'react'
import './App.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
]

const services = [
  {
    title: 'Infrastructure Modernization',
    description: 'Transform legacy systems into agile, scalable infrastructure that drives business growth and operational efficiency.',
    icon: '🏗️',
  },
  {
    title: 'Cloud Migration & Management',
    description: 'Seamless cloud transitions with AWS, Azure, or hybrid environments optimized for performance and cost.',
    icon: '☁️',
  },
  {
    title: 'Managed IT Services',
    description: '24/7 proactive monitoring and support that keeps your systems running smoothly while your team focuses on growth.',
    icon: '🔧',
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Enterprise-grade security frameworks that protect your assets and ensure regulatory compliance.',
    icon: '🔒',
  },
  {
    title: 'Systems Integration',
    description: 'Connect your applications, data, and processes into unified, efficient workflows that eliminate silos.',
    icon: '🔗',
  },
  {
    title: 'Network Solutions',
    description: 'Robust, redundant network architecture designed for reliability, performance, and business continuity.',
    icon: '🌐',
  },
]

const differentiators = [
  {
    metric: '99.99%',
    label: 'Uptime Guarantee',
    description: 'Our infrastructure is built for maximum availability.',
  },
  {
    metric: '<2hr',
    label: 'Critical Response',
    description: 'Rapid response for critical incidents, 24/7/365.',
  },
  {
    metric: '500+',
    label: 'Clients Served',
    description: 'Trusted by growing businesses across industries.',
  },
  {
    metric: '15yr',
    label: 'Industry Experience',
    description: 'Deep expertise built over 15 years of delivery.',
  },
]

const testimonials = [
  {
    quote: 'They transformed our entire IT infrastructure. Our systems are faster, more reliable, and we finally have strategic IT guidance that aligns with our business goals.',
    author: 'Sarah Chen',
    role: 'CTO, Meridian Healthcare',
    results: '40% reduction in downtime | 60% faster deployment cycles',
  },
  {
    quote: 'The migration to Azure was seamless. Their team anticipated challenges we never considered and delivered ahead of schedule. Best IT partner decision we made.',
    author: 'Michael Torres',
    role: 'VP Operations, Apex Manufacturing',
    results: '35% cost savings | Zero downtime migration',
  },
  {
    quote: 'After a security breach, they implemented a comprehensive framework that gave us peace of mind and full compliance. Professional, thorough, and genuinely caring.',
    author: 'Jennifer Walsh',
    role: 'CISO, First National Financial',
    results: '100% compliance audit pass | Enhanced security posture',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We dive deep into your current state, business objectives, and challenges to build a roadmap that actually moves the needle.',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'A tailored engagement model with clear milestones, measurable outcomes, and transparent communication from day one.',
  },
  {
    number: '03',
    title: 'Execution & Delivery',
    description: 'Our certified engineers implement solutions with precision, maintaining minimal disruption to your operations.',
  },
  {
    number: '04',
    title: 'Optimization & Partnership',
    description: 'We don\'t just deliver and leave. Continuous monitoring, optimization, and strategic guidance keep you ahead.',
  },
]

function SectionHeader({ number, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-header ${align}`}>
      {number && <span className="section-number">{number}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

function ServiceCard({ service, index }) {
  return (
    <div 
      className="service-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <div className="service-link">
        Learn more →
      </div>
    </div>
  )
}

function StatCard({ stat, index }) {
  return (
    <div 
      className="stat-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="stat-value">{stat.metric}</div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-description">{stat.description}</div>
    </div>
  )
}

function ProcessStep({ step, index }) {
  return (
    <div 
      className="process-step"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="process-number">{step.number}</div>
      <h3 className="process-title">{step.title}</h3>
      <p className="process-description">{step.description}</p>
      <div className="process-connector"></div>
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <div 
      className="testimonial-card"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="quote-mark">"</div>
      <p className="testimonial-quote">{testimonial.quote}</p>
      <div className="testimonial-author">
        <div className="author-name">{testimonial.author}</div>
        <div className="author-role">{testimonial.role}</div>
      </div>
      <div className="testimonial-results">{testimonial.results}</div>
    </div>
  )
}

function NavLink({ link }) {
  return (
    <a 
      href={link.href}
      className="nav-link"
    >
      {link.label}
    </a>
  )
}

function CTAButton({ children, variant = 'primary', href = '#' }) {
  const buttonClass = variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary'
  return (
    <a href={href} className={buttonClass}>
      {children}
    </a>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">NEXUS</div>
          <span>IT Partners</span>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link, index) => (
            <NavLink key={index} link={link} />
          ))}
        </nav>

        <div className="header-cta">
          <CTAButton variant="primary">Get Started</CTAButton>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Trusted by 500+ businesses
          </div>
          <h1 className="hero-title">
            Technology that powers<br />
            <span className="gradient-text">business breakthrough</span>
          </h1>
          <p className="hero-subtitle">
            We deliver enterprise-grade IT services that transform infrastructure, 
            accelerate digital transformation, and provide the strategic partnership 
            your business needs to thrive.
          </p>
          <div className="hero-cta">
            <CTAButton>Schedule Consultation</CTAButton>
            <CTAButton variant="secondary">View Services</CTAButton>
          </div>
          <div className="hero-trust">
            <div className="trust-badges">
              <div className="trust-item">AWS Partner</div>
              <div className="trust-item">Microsoft Gold</div>
              <div className="trust-item">ISO 27001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionHeader 
          number="01"
          title="Comprehensive IT Solutions"
          subtitle="Everything your business needs to operate securely, efficiently, and at scale."
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const visualItems = [
    { title: 'Expert Team', icon: '👨‍💼', desc: 'Certified professionals' },
    { title: 'Proven Process', icon: '📋', desc: 'Structured methodology' },
    { title: 'Fast Delivery', icon: '⚡', desc: 'Efficient execution' },
    { title: 'Security First', icon: '🔐', desc: 'Enterprise-grade protection' },
  ]

  return (
    <section id="why-us" className="section why-us-section">
      <div className="container">
        <div className="why-us-layout">
          <div className="why-us-content">
            <SectionHeader 
              number="02"
              title="The Nexus Difference"
              align="left"
            />
            <p className="why-us-description">
              We don't just fix problems—we build partnerships that drive measurable business outcomes. 
              Our approach combines technical excellence with strategic thinking, ensuring every solution 
              aligns with your goals.
            </p>
            <div className="differentiators-list">
              {differentiators.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
          <div className="why-us-visual">
            <div className="visual-grid">
              {visualItems.map((item, index) => (
                <div 
                  key={index} 
                  className="visual-grid-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  title={item.title}
                >
                  <div className="visual-content">
                    <div className="visual-icon">{item.icon}</div>
                    <div className="visual-title">{item.title}</div>
                    <div className="visual-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <SectionHeader 
          number="03"
          title="Our Engagement Model"
          subtitle="A proven methodology that delivers results with transparency and minimal disruption."
        />
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section id="results" className="section results-section">
      <div className="container">
        <SectionHeader 
          number="04"
          title="Proven Results"
          subtitle="Real outcomes for businesses like yours."
        />
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-content">
            <SectionHeader 
              number="05"
              title="About Nexus IT Partners"
              align="left"
            />
            <p className="about-description">
              For over 15 years, we've been the trusted technology partner for mid-market businesses 
              across healthcare, manufacturing, finance, and professional services. We combine deep 
              technical expertise with strategic business acumen to deliver solutions that drive real outcomes.
            </p>
            <p className="about-description">
              Our team of certified engineers and consultants brings experience from Fortune 500 companies 
              and startups alike. We speak both technology and business, ensuring your IT investments 
              deliver maximum value and competitive advantage.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="stat-value">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="about-stat">
                <span className="stat-value">500+</span>
                <span className="stat-label">Clients Served</span>
              </div>
              <div className="about-stat">
                <span className="stat-value">100+</span>
                <span className="stat-label">Certified Engineers</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-grid">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="placeholder-cell"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to transform your IT infrastructure?</h2>
          <p className="cta-subtitle">
            Schedule a complimentary consultation with our team of experts. 
            We'll assess your current state, identify opportunities, and outline 
            a clear path forward—no pressure, just value.
          </p>
          <div className="cta-actions">
            <CTAButton>Get Started Today</CTAButton>
            <CTAButton variant="secondary">Call Us: (555) 123-4567</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const footerLinks = {
    Services: ['Infrastructure', 'Cloud Services', 'Managed IT', 'Cybersecurity', 'Integration', 'Network Solutions'],
    Company: ['About Us', 'Our Team', 'Careers', 'News & Insights', 'Partnerships'],
    Resources: ['Case Studies', 'White Papers', 'Blog', 'FAQ', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Compliance', 'Security'],
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">NEXUS</div>
              <span>IT Partners</span>
            </div>
            <p className="footer-tagline">
              Enterprise IT services that drive business growth and operational excellence.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>San Francisco, CA</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>contact@nexusit.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-links">
              <h4>{category}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${category.toLowerCase()}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            © {new Date().getFullYear()} Nexus IT Partners. All rights reserved.
          </div>
          <div className="footer-badges">
            <div className="badge">AWS Partner</div>
            <div className="badge">Microsoft Gold</div>
            <div className="badge">ISO 27001 Certified</div>
            <div className="badge">SOC 2 Type II</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Results />
        <About />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
