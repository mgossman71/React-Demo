import { useState } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      title: 'Managed IT Services',
      description: 'Proactive monitoring, support, and optimization of your entire IT infrastructure 24/7.'
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and migration to AWS, Azure, and Google Cloud with expert guidance and execution.'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat detection, compliance frameworks, and security strategy implementation.'
    },
    {
      title: 'Infrastructure Modernization',
      description: 'Upgrade legacy systems with containerization, automation, and modern DevOps practices.'
    },
    {
      title: 'Systems Integration',
      description: 'Seamless integration of enterprise applications and data systems across your organization.'
    },
    {
      title: 'Strategic IT Consulting',
      description: 'Long-term technology roadmaps aligned with your business objectives and growth.'
    }
  ]

  const testimonials = [
    {
      quote: 'Their team took ownership of our cloud migration from day one. The execution was flawless and they stayed within budget.',
      author: 'Sarah Chen',
      title: 'CTO, Financial Services',
      company: 'RegionalBank Inc.'
    },
    {
      quote: 'We reduced our infrastructure costs by 35% while improving performance. That level of strategic thinking is rare.',
      author: 'Michael Rodriguez',
      title: 'VP Operations',
      company: 'Manufacturing Corp'
    },
    {
      quote: 'Their proactive security monitoring caught threats we didn\'t even know existed. It\'s an investment that paid for itself immediately.',
      author: 'Jennifer Park',
      title: 'Security Director',
      company: 'Healthcare Solutions'
    }
  ]

  const certifications = ['AWS Partner', 'Microsoft Gold', 'ISO 27001', 'SOC 2 Type II', 'CISSP', 'PMP']

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current environment, business goals, and pain points to build a comprehensive baseline.'
    },
    {
      num: '02',
      title: 'Strategic Planning',
      description: 'We develop a detailed roadmap with clear milestones, resource requirements, and expected outcomes.'
    },
    {
      num: '03',
      title: 'Implementation',
      description: 'Expert execution with minimal disruption. We coordinate every detail to ensure successful deployment.'
    },
    {
      num: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring and refinement to maximize ROI and ensure your systems stay ahead of demand.'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-icon">⬢</span>
            <span className="brand-name">Nexus IT</span>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#why-us" className="nav-link">Why Us</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#testimonials" className="nav-link">Results</a>
            <a href="#contact" className="nav-link nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">
              Enterprise Technology That Drives Results
            </h1>
            <p className="hero-subheadline">
              Strategic IT solutions for businesses that demand reliability, security, and growth. We don't just maintain your infrastructure—we optimize it.
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
              <a href="#services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="gradient-box"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="services">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive IT solutions designed for mid-market enterprises and growing organizations</p>
          </div>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{String.fromCharCode(9679)}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="why-us">
        <div className="section-container">
          <div className="why-us-content">
            <div className="why-us-text">
              <h2>Why Choose Nexus IT</h2>
              <div className="differentiators">
                <div className="differentiator">
                  <h4>Proactive, Not Reactive</h4>
                  <p>We identify and prevent issues before they impact your business. Continuous monitoring and strategic optimization are built into everything we do.</p>
                </div>
                <div className="differentiator">
                  <h4>True Partnership</h4>
                  <p>We're invested in your success. You get a dedicated team that understands your business, not a transactional vendor relationship.</p>
                </div>
                <div className="differentiator">
                  <h4>Strategic Thinking</h4>
                  <p>Technology decisions aligned with your business roadmap. We help you leverage IT as a competitive advantage, not just a cost center.</p>
                </div>
                <div className="differentiator">
                  <h4>Enterprise-Grade Security</h4>
                  <p>Compliance expertise, threat intelligence, and security architecture that protects your most critical assets.</p>
                </div>
              </div>
            </div>
            <div className="why-us-visual">
              <div className="stat-box">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">250+</div>
                <div className="stat-label">Enterprises Served</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">15 yrs</div>
                <div className="stat-label">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust">
        <div className="section-container">
          <h2 className="trust-title">Industry Recognition & Certifications</h2>
          <div className="certifications">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-badge">{cert}</div>
            ))}
          </div>
          <p className="trust-description">
            Our expertise is backed by industry certifications, partnerships with leading cloud providers, and compliance with the strictest security standards.
          </p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="highlights">
        <div className="section-container">
          <h2>Deep Expertise in Key Areas</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-number">🔐</div>
              <h3>Security First</h3>
              <p>Zero-trust architecture, threat modeling, and continuous compliance ensure your data and systems stay protected.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">☁️</div>
              <h3>Cloud Native</h3>
              <p>Seamless cloud adoption with expert guidance on multi-cloud strategy, cost optimization, and serverless architecture.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">⚙️</div>
              <h3>Automation & DevOps</h3>
              <p>Pipeline automation, infrastructure-as-code, and continuous integration to accelerate delivery and reduce risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Proven Engagement Model</h2>
            <p>A structured approach that ensures clarity, accountability, and measurable results at every stage</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {idx < processSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="section-container">
          <div className="section-header">
            <h2>Client Results</h2>
            <p>What enterprise leaders say about working with Nexus IT</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="quote-mark">"</div>
                <p className="quote-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-title">{testimonial.title}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Nexus IT</h2>
              <p>
                For 15 years, we've been the trusted technology partner for mid-market enterprises across finance, healthcare, manufacturing, and professional services. We don't believe in one-size-fits-all solutions. Instead, we invest time in understanding your business, your challenges, and your vision for the future.
              </p>
              <p>
                Our team of certified engineers, architects, and strategic consultants bring deep expertise across infrastructure, cloud, security, and DevOps. We've successfully led digital transformations for organizations ranging from 500 to 5,000+ employees, delivering projects on time, on budget, and with measurable business impact.
              </p>
              <p>
                When you partner with Nexus IT, you're not just getting a vendor. You're getting a team that's invested in your long-term success.
              </p>
            </div>
            <div className="about-visual">
              <div className="mission-box">
                <h3>Our Mission</h3>
                <p>"To empower enterprises with strategic technology that reduces risk, improves efficiency, and enables growth."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="final-cta">
        <div className="section-container">
          <h2>Ready to Transform Your IT Operations?</h2>
          <p>Let's discuss how we can help you build a more secure, efficient, and scalable technology foundation.</p>
          <button className="btn btn-primary btn-large">Start Your Free Consultation</button>
          <p className="cta-subtext">No pressure, no obligation. Just a conversation with our team about your goals.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Nexus IT</h4>
            <p>Enterprise technology solutions for growing businesses.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Managed IT Services</a></li>
              <li><a href="#services">Cloud Architecture</a></li>
              <li><a href="#services">Cybersecurity</a></li>
              <li><a href="#services">Systems Integration</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>(555) 123-4567</p>
            <p>hello@nexusit.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nexus IT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
