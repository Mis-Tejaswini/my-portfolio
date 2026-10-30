import './App.css'
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
function App() {

  const [sending, setSending] = useState(false);
const [formStatus, setFormStatus] = useState('');
const [quickContactOpen, setQuickContactOpen] = useState(false);


const [autoPopupDismissed, setAutoPopupDismissed] = useState(() => {
  try {
    return sessionStorage.getItem('quickContactDismissed') === 'true';
  } catch {
    return false;
  }
});

useEffect(() => {
  if (autoPopupDismissed || quickContactOpen) return;

  let timer;

  try {
    if (sessionStorage.getItem('quickContactShown') === 'true') {
      return;
    }
  } catch {
    // Continue without session storage if unavailable.
  }

  timer = window.setTimeout(() => {
    setQuickContactOpen(true);

    try {
      sessionStorage.setItem('quickContactShown', 'true');
    } catch {
      // Popup still works if storage is unavailable.
    }
  }, 8000);

  return () => window.clearTimeout(timer);
}, [autoPopupDismissed, quickContactOpen]);


  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">MyPortfolio<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">Let's Talk</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
            <h1>
  Hi, I'm Tejaswini
  <br />
  <span>Full-Stack Developer</span>
</h1>

<p className="hero-description">
  I build modern web applications, mobile apps, and
  digital experiences that solve real-world problems.
  I enjoy turning ideas into reliable, user-friendly
  products using modern technologies.
</p>

<div className="hero-buttons">
  <a href="#projects" className="button primary">
    Explore My Work ↗
  </a>
  <a href="#contact" className="button secondary">
    Let's Connect
  </a>
</div>

<div className="hero-tags">
  <span>React</span>
  <span>Flutter</span>
  <span>Laravel</span>
  <span>REST APIs</span>
</div>
        </div>

         <div className="hero-visual">
  <div className="hero-orbit orbit-one"></div>
  <div className="hero-orbit orbit-two"></div>

  <div className="developer-art">
    <div className="art-glow"></div>

    <div className="art-window">
      <div className="art-window-bar">
        <span></span>
        <span></span>
        <span></span>
        <p>tejaswini.dev</p>
      </div>

      <div className="art-code">
        <p><span className="code-purple">const</span> developer = {'{'}</p>
        <p>&nbsp;&nbsp;name: <span className="code-green">'Tejaswini'</span>,</p>
        <p>&nbsp;&nbsp;role: <span className="code-green">'Full-Stack'</span>,</p>
        <p>&nbsp;&nbsp;creative: <span className="code-blue">true</span>,</p>
        <p>&nbsp;&nbsp;skills: [</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'React'</span>,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Flutter'</span></p>
        <p>&nbsp;&nbsp;]</p>
        <p>{'}'}</p>
      </div>
    </div>

    <div className="floating-tech tech-react">
      <span>⚛</span>
      <small>React</small>
    </div>

    <div className="floating-tech tech-mobile">
      <span>▯</span>
      <small>Mobile Apps</small>
    </div>

    <div className="floating-tech tech-api">
      <span>{'{ }'}</span>
      <small>API</small>
    </div>
  </div>

  <div className="floating-badge">
    ✦ Turning ideas into reality
  </div>
</div>
      </section>

       
<section className="about about-redesign section" id="about">
  <div className="about-layout">
    {/* Left content */}
    <div className="about-content">
      <div className="about-label">
        <span className="about-label-dot"></span>
        ABOUT ME
      </div>

      <h2 className="about-heading">
        Developer by passion.
        <br />
        Problem solver <span>by nature.</span>
      </h2>

      <p className="about-description">
        I'm Tejaswini, a full-stack developer who enjoys building
        web applications and mobile experiences. I work across
        frontend interfaces, backend APIs, and database-driven
        applications to create practical digital solutions.
      </p>

      <p className="about-description">
        I'm always learning, improving my development skills, and
        exploring opportunities to collaborate with teams and
        businesses on meaningful projects.
      </p>

      <div className="about-highlights">
        <div className="about-highlight">
          <div className="about-highlight-icon">✦</div>
          <span>Problem<br />Solver</span>
        </div>

        <div className="about-highlight">
          <div className="about-highlight-icon">♧</div>
          <span>Team<br />Player</span>
        </div>

        <div className="about-highlight">
          <div className="about-highlight-icon">↗</div>
          <span>Quick<br />Learner</span>
        </div>

        <div className="about-highlight">
          <div className="about-highlight-icon">♡</div>
          <span>Passionate<br />Developer</span>
        </div>
      </div>

      <div className="about-facts">
        <div className="about-fact">
          <strong>React</strong>
          <span>Web Development</span>
        </div>

        <div className="about-fact">
          <strong>Flutter</strong>
          <span>Mobile Apps</span>
        </div>

        <div className="about-fact">
          <strong>Laravel</strong>
          <span>Backend APIs</span>
        </div>

        <div className="about-fact">
          <strong>Let's Talk</strong>
          <span>Open to Opportunities</span>
        </div>
      </div>

      <div className="about-actions">
        <a href="#projects" className="about-btn about-btn-primary">
          Explore My Work <span>↗</span>
        </a>

        <a href="#contact" className="about-btn about-btn-secondary">
          <span>▢</span> Let's Connect
        </a>
      </div>
    </div>

    {/* Right visual — illustration, not a fake portrait */}
   
<div className="about-visual about-visual-reference">
  <div className="about-glow-circle"></div>
  <div className="about-orbit about-orbit-one"></div>
  <div className="about-orbit about-orbit-two"></div>

  <img
    src="public/images/about-tejaswini.png"
    alt="Tejaswini - Full Stack Developer"
    className="about-profile-image"
  />

  <div className="about-float-card about-float-top">
    <div className="about-float-icon">♧</div>
    <div>
      <strong>Continuous Learner</strong>
      <p>Always exploring new technologies</p>
    </div>
  </div>

  <div className="about-float-card about-float-middle">
    <div className="about-float-icon">&lt;/&gt;</div>
    <div>
      <strong>Clean Code</strong>
      <p>Writing maintainable and scalable solutions</p>
    </div>
  </div>

  <div className="about-float-card about-float-bottom">
    <div className="about-float-icon">✧</div>
    <div>
      <strong>Creative Approach</strong>
      <p>Turning ideas into user-friendly products</p>
    </div>
  </div>

  <div className="about-quote about-quote-reference">
    <div className="about-quote-mark">“</div>
    <p>
      I believe in building digital solutions that are
      not only functional but also create a positive
      impact on users.
    </p>
    <span>— Tejaswini</span>
  </div>
</div>

  </div>
</section>



<section className="section skills-section" id="skills">
  <p className="eyebrow">WHAT I WORK WITH</p>
  <h2>My Tech <span>Stack</span></h2>
  <p className="skills-intro">
    Technologies and tools I use to transform ideas into functional
    digital experiences.
  </p>

  <div className="skills-grid">
    <div className="skill-card">
      <div className="skill-card-icon">⚛</div>
      <h3>Frontend Development</h3>
      <p>Building responsive and interactive web interfaces.</p>
      <div className="skill-tags">
        <span>React</span><span>JavaScript</span>
        <span>HTML5</span><span>CSS3</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-card-icon">📱</div>
      <h3>Mobile Development</h3>
      <p>Creating cross-platform mobile applications.</p>
      <div className="skill-tags">
        <span>Flutter</span><span>Dart</span>
        <span>REST API</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-card-icon">⚙</div>
      <h3>Backend Development</h3>
      <p>Developing application logic and backend services.</p>
      <div className="skill-tags">
        <span>Laravel</span><span>PHP</span>
        <span>API Integration</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-card-icon">🌐</div>
      <h3>CMS & Websites</h3>
      <p>Building and customizing business and ecommerce websites.</p>
      <div className="skill-tags">
        <span>WordPress</span><span>Elementor</span>
        <span>WooCommerce</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-card-icon">🗄</div>
      <h3>Database</h3>
      <p>Working with structured data and application storage.</p>
      <div className="skill-tags">
        <span>MySQL</span><span>Database Design</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-card-icon">🛠</div>
      <h3>Development Tools</h3>
      <p>Tools I use for coding, testing and project development.</p>
      <div className="skill-tags">
        <span>VS Code</span><span>Git</span>
        <span>GitHub</span><span>Postman</span>
      </div>
    </div>
  </div>
</section>


      <section className="section" id="services">
        <p className="eyebrow">WHAT I DO</p>
        <h2>My Services</h2>
        <div className="service-grid">
          <article className="service-card">
            <div className="service-icon">⌘</div>
            <h3>Web Development</h3>
            <p>Responsive websites built with modern technologies.</p>
          </article>
          <article className="service-card">
            <div className="service-icon">✳</div>
            <h3>Web Applications</h3>
            <p>Interactive applications designed around your needs.</p>
          </article>
          <article className="service-card">
            <div className="service-icon">◇</div>
            <h3>UI/UX Design</h3>
            <p>Simple, intuitive and attractive user experiences.</p>
          </article>
        </div>
      </section>

  <section className="section" id="projects">
  <p className="eyebrow">MY RECENT WORK</p>
  <h2>Featured <span>Projects</span></h2>
  <p>
    Selected web and mobile applications I've worked on.
  </p>

  <div className="project-grid">
    <article className="project-card">
      <img
        className="project-image"
        src="public/images/servicehub.png"
        alt="ServiceHub registration screen"
      />

      <h3>ServiceHub</h3>
      <p>
        A service platform interface designed to help users
        access professional local services.
      </p>

      <span className="project-tech">Web Application</span>
    </article>

    <article className="project-card">
      <img
        className="project-image"
        src="public/images/dashboard-stats.jpg"
        alt="E-commerce admin application dashboard"
      />

      <h3>E-commerce Admin App</h3>
      <p>
        A mobile administration app bringing dashboard
        analytics, orders, products, categories, and
        order notifications together in one place.
      </p>

      <span className="project-tech">Mobile Application</span>
    </article>
  </div>
</section>

       <section className="contact section" id="contact">
  <p className="eyebrow">LET'S CONNECT</p>
  <h2>Have a project in mind? <span>Let's talk.</span></h2>
  <p>
    Whether you're hiring or looking for a developer
    for your next project, I'd love to hear from you.
  </p>

  <div className="contact-layout">
    <div className="contact-info">
      <h3>Get in touch</h3>
      <p>
        Have an opportunity or an idea? Send me a message
        and let's discuss how we can work together.
      </p>

      <a href="mailto:bambaltejaswini@gmail.com">
        ✉️ bambaltejaswini@gmail.com
      </a>
    </div>

    <form className="contact-form" onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  setSending(true);
  setFormStatus('');

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    setFormStatus('Message sent successfully!');
    form.reset();
  } catch (error) {
    console.error('EmailJS error:', error);
    setFormStatus('Message could not be sent. Please try again.');
  } finally {
    setSending(false);
  }
}} >
      <label htmlFor="contact-name">Your name</label>
      <input id="contact-name" name="name" type="text"
        placeholder="Enter your name" required />

      <label htmlFor="contact-email">Email address</label>
      <input id="contact-email" name="email" type="email"
        placeholder="you@example.com" required />

      <label htmlFor="contact-subject">Subject</label>
      <input id="contact-subject" name="subject" type="text"
        placeholder="Job opportunity or project" required />

      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message"
        placeholder="Tell me about your opportunity..."
        rows="5" required />

      <button
  className="button primary"
  type="submit"
  disabled={sending}
>
  {sending ? 'Sending...' : 'Send Message ↗'}
</button>

<p role="status" aria-live="polite">
  {formStatus}
</p>

    </form>
  </div>
</section>

      <footer className="footer">
        <a href="#home" className="logo">MyPortfolio<span>.</span></a>
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {/* Floating Quick Contact Button */}
<button
  type="button"
  className="quick-contact-fab"
  onClick={() => {
  if (quickContactOpen) {
    setQuickContactOpen(false);
    setAutoPopupDismissed(true);

    try {
      sessionStorage.setItem('quickContactDismissed', 'true');
    } catch {}
  } else {
    setQuickContactOpen(true);
  }
}}
  aria-label={quickContactOpen ? "Close quick contact" : "Open quick contact"}
  aria-expanded={quickContactOpen}
>
  <span className="quick-contact-fab-icon">
    {quickContactOpen ? "×" : "✉"}
  </span>
  {!quickContactOpen && <span className="quick-contact-tooltip">Quick Contact</span>}
</button>

{/* Quick Contact Popup */}
{quickContactOpen && (
  <div className="quick-contact-panel">
    <div className="quick-contact-header">
      <div>
        <span className="quick-contact-eyebrow">LET'S CONNECT</span>
        <h3>Let's talk!</h3>
        <p>Have a project in mind? Send me a message.</p>
      </div>
      <button
        type="button"
        className="quick-contact-close"
        onClick={() => {
  setQuickContactOpen(false);
  setAutoPopupDismissed(true);

  try {
    sessionStorage.setItem('quickContactDismissed', 'true');
  } catch {}
}}
        aria-label="Close contact popup"
      >
      </button>
    </div>

    <form
      className="quick-contact-form"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSending(true);
        setFormStatus("");

        try {
          await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form,
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
          );

          setFormStatus("Message sent successfully!");
          form.reset();
        } catch (error) {
          console.error("EmailJS error:", error);
          setFormStatus("Could not send. Please try again.");
        } finally {
          setSending(false);
        }
      }}
    >
      <input name="name" type="text" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Your email" required />
      <input name="subject" type="text" placeholder="Subject" required />
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        rows="4"
        required
      />

      <button type="submit" className="button primary" disabled={sending}>
        {sending ? "Sending..." : "Send Message ↗"}
      </button>

      <p className="quick-contact-status" role="status" aria-live="polite">
        {formStatus}
      </p>
    </form>
  </div>
)}

    </div>
  )
  

}

export default App