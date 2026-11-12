:root {
  --bg: #080d19;
  --surface: #101a2c;
  --surface2: #14223a;
  --text: #edf5ff;
  --muted: #a0aec2;
  --accent: #00d9ff;
  --accent2: #5675ff;
  --border: rgba(255,255,255,.09);
  --shadow: 0 20px 60px rgba(0,0,0,.25);
}

body.light {
  --bg: #f4f7fc;
  --surface: #ffffff;
  --surface2: #e9f0fa;
  --text: #142039;
  --muted: #58677d;
  --border: rgba(20,32,57,.12);
  --shadow: 0 20px 60px rgba(30,50,80,.10);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background .3s, color .3s;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }
button, input, textarea { font: inherit; }

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: linear-gradient(90deg,var(--accent),var(--accent2));
  z-index: 2000;
}

.navbar {
  height: 76px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
}

.logo { font-size: 25px; font-weight: 800; }
.logo span, h1 span, h2 span { color: var(--accent); }

.navbar nav { display: flex; gap: 30px; }
.navbar nav a {
  color: var(--muted);
  font-size: 14px;
  font-weight: 600;
  transition: .3s;
}
.navbar nav a:hover { color: var(--accent); }

.nav-actions { display: flex; gap: 12px; }
.nav-actions button {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  padding: 9px 12px;
  border-radius: 9px;
  cursor: pointer;
}
.menu-btn { display: none; }

.section {
  padding: 110px 10%;
  scroll-margin-top: 70px;
}

.hero {
  min-height: 660px;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  gap: 50px;
  position: relative;
  background:
    radial-gradient(ellipse at 80% 40%,rgba(0,217,255,.10),transparent 38%),
    radial-gradient(ellipse at 10% 80%,rgba(86,117,255,.08),transparent 35%);
}

.eyebrow {
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 22px;
}

.hero h1 {
  font-size: clamp(40px,5.5vw,68px);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 22px;
}

.hero h2 {
  font-size: clamp(20px,2.5vw,29px);
  margin-bottom: 20px;
}

.cursor { color: var(--accent); animation: blink .8s infinite; }
@keyframes blink { 50% { opacity: 0; } }

.hero-description {
  color: var(--muted);
  line-height: 1.9;
  max-width: 520px;
  margin-bottom: 30px;
}

.hero-buttons { display: flex; flex-wrap: wrap; gap: 14px; }

.btn {
  display: inline-block;
  padding: 15px 24px;
  border-radius: 9px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid var(--accent);
  transition: transform .3s, box-shadow .3s;
}

.btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,217,255,.2);
}

.btn.primary {
  color: #06111d;
  background: linear-gradient(110deg,var(--accent),#6d9cff);
  border: none;
}
.btn.secondary { color: var(--accent); background: transparent; }

.social-links {
  display: flex;
  gap: 13px;
  margin-top: 34px;
  color: var(--muted);
  font-size: 14px;
}
.social-links a:hover { color: var(--accent); }

.hero-visual {
  min-height: 390px;
  display: grid;
  place-items: center;
  position: relative;
}

.code-card {
  width: min(100%,390px);
  background: var(--surface);
  border: 1px solid rgba(0,217,255,.35);
  border-radius: 16px;
  box-shadow: 0 0 65px rgba(0,217,255,.12),var(--shadow);
  overflow: hidden;
  position: relative;
  z-index: 2;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-13px); }
}

.code-header {
  height: 48px;
  padding: 0 17px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface2);
  border-bottom: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
}

.dots { display: flex; gap: 6px; }
.dots i { width: 9px; height: 9px; border-radius: 50%; background: #ff6b6b; }
.dots i:nth-child(2) { background: #ffd166; }
.dots i:nth-child(3) { background: #06d6a0; }

.code-content {
  padding: 27px 20px;
  font-family: monospace;
  font-size: 13px;
  line-height: 2;
  color: var(--text);
}
.code-content .indent { padding-left: 18px; }
.code-content .indent2 { padding-left: 36px; }
.purple { color: #b59aff; }
.green { color: #7ee7bd; }
.code-end { color: var(--accent); }

.orbit {
  position: absolute;
  border: 1px solid rgba(0,217,255,.25);
  border-radius: 50%;
  animation: rotate 18s linear infinite;
}
.orbit-one { width: 390px; height: 390px; }
.orbit-two { width: 460px; height: 460px; border-style: dashed; }
@keyframes rotate { to { transform: rotate(360deg); } }

.floating-tag {
  position: absolute;
  z-index: 3;
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 12px 15px;
  border-radius: 10px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  box-shadow: var(--shadow);
}
.tag-top { top: 35px; right: -5px; }
.tag-bottom { bottom: 25px; left: -10px; }

.scroll-down {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--muted);
}

.section-heading { text-align: center; margin-bottom: 50px; }
.section-heading h2 { font-size: clamp(30px,4vw,42px); margin-bottom: 15px; }
.section-heading > p:last-child { color: var(--muted); line-height: 1.7; }

.about { background: var(--surface); }

.about-card {
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 30px;
  padding: 38px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}
.about-icon {
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;
  font-size: 45px;
  background: var(--surface2);
  border-radius: 20px;
}
.about-card h3 { font-size: 22px; margin-bottom: 16px; }
.about-card p { color: var(--muted); line-height: 1.9; margin-bottom: 12px; }
.about-tags, .project-tech { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 20px; }
.about-tags span, .project-tech span {
  padding: 8px 12px;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 7px;
  font-size: 11px;
  color: var(--accent);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 18px;
}
.skill-card {
  padding: 28px 15px;
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
  transition: .3s;
}
.skill-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent);
  box-shadow: 0 12px 35px rgba(0,217,255,.10);
}
.skill-card > span { font-size: 32px; }
.skill-card h3 { margin: 14px 0 7px; font-size: 16px; }
.skill-card p { color: var(--muted); font-size: 12px; }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 25px;
}
.project-card {
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: .3s;
}
.project-card:hover { transform: translateY(-7px); border-color: var(--accent); }
.project-visual {
  height: 190px;
  display: grid;
  place-items: center;
  font-size: 75px;
  color: var(--accent);
  background: linear-gradient(135deg,#102c48,#17204b);
}
.project-info { padding: 25px; }
.project-label { color: var(--accent); font-size: 10px; letter-spacing: 2px; }
.project-info h3 { font-size: 22px; margin: 13px 0; }
.project-info p { color: var(--muted); font-size: 13px; line-height: 1.8; }
.project-link {
  display: inline-block;
  margin-top: 22px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
}

.contact { background: var(--surface); }
.contact-form {
  max-width: 700px;
  margin: auto;
  padding: 30px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  outline: none;
}
.contact-form input:focus, .contact-form textarea:focus { border-color: var(--accent); }
.contact-form textarea { resize: vertical; }
.form-note { color: var(--muted); font-size: 12px; margin-top: 15px; }

footer {
  padding: 35px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  border-top: 1px solid var(--border);
}
footer p { color: var(--muted); font-size: 12px; }

#backToTop {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 43px;
  height: 43px;
  border: none;
  border-radius: 10px;
  background: var(--accent);
  color: #06111d;
  font-size: 22px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: .3s;
  z-index: 500;
}
#backToTop.show { opacity: 1; pointer-events: auto; }

.reveal {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity .7s ease, transform .7s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

@media(max-width:900px) {
  .navbar { padding: 0 5%; }
  .section { padding: 90px 6%; }
  .hero { grid-template-columns: 1fr; padding-top: 90px; }
  .hero-visual { min-height: 450px; }
  .skills-grid { grid-template-columns: repeat(2,1fr); }
}

@media(max-width:650px) {
  .navbar { height: 66px; }
  .menu-btn { display: block; }
  .navbar nav {
    display: none;
    position: absolute;
    top: 66px;
    left: 0;
    width: 100%;
    padding: 25px;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    gap: 22px;
  }
  .navbar nav.open { display: flex; }
  .hero { min-height: auto; padding-bottom: 100px; }
  .hero-visual { min-height: 380px; }
  .orbit-one { width: 300px; height: 300px; }
  .orbit-two { width: 350px; height: 350px; }
  .code-card { width: 95%; }
  .tag-top { right: -5px; }
  .tag-bottom { left: -5px; }
  .about-card { grid-template-columns: 1fr; padding: 25px; }
  .projects-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; gap: 0; }
  .scroll-down { white-space: nowrap; }
  footer { flex-direction: column; text-align: center; }
}
