import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Leaf,
  Mail,
  Menu,
  MoveRight,
  Play,
  Sparkles,
  X,
} from 'lucide-react';

const image = (name: string) => `/images/${name}`;

const photos = {
  hero: image('WhatsApp_Image_2026-10-11_at_19.55.03.jpeg'),
  flow: image('WhatsApp_Image_2026-10-11_at_19.55.03_(1).jpeg'),
  wild: image('WhatsApp_Image_2026-10-11_at_19.55.00.jpeg'),
  sunrise: image('WhatsApp_Image_2026-10-11_at_19.55.00_(1).jpeg'),
  dancer: image('WhatsApp_Image_2026-10-11_at_19.54.59.jpeg'),
  garden: image('WhatsApp_Image_2026-10-11_at_19.54.58.jpeg'),
  wall: image('WhatsApp_Image_2026-10-11_at_19.54.57.jpeg'),
  duo: image('WhatsApp_Image_2026-10-11_at_19.54.12.jpeg'),
  inversion: image('WhatsApp_Image_2026-10-11_at_19.54.09.jpeg'),
  lakeside: image('WhatsApp_Image_2026-10-11_at_19.53.50.jpeg'),
};

const services = [
  { title: 'Hatha & Vinyasa', text: 'Build steadiness, strength, and breath-led flow through time-honoured practice.' },
  { title: 'Yin & relaxation', text: 'Slow down with supported shapes, stillness, meditation, and deep rest.' },
  { title: 'Strength & stability', text: 'Pilates-inspired core work, mobility, flexibility, and intelligent conditioning.' },
  { title: 'Breathwork & pranayama', text: 'Simple, educational practices for awareness, regulation, and presence.' },
  { title: 'Prenatal support', text: 'Condition-aware movement and gentle support shaped around your changing needs.' },
  { title: 'Holistic wellbeing', text: 'General nutrition, herbal wellness, Ayurveda-inspired education, and face tension release.' },
];

const schedule = [
  ['Monday / Wednesday / Friday', 'Ontario, Canada', '9:00 – 10:00 AM ET'],
  ['Monday / Wednesday / Friday', 'Ontario, Canada', '6:00 – 7:00 PM ET'],
  ['Monday / Wednesday / Friday', 'India', '5:30 – 6:30 PM IST'],
];

const pricing = [
  ['Trial Class', 'Free', 'in Canada and India'],
  ['Drop-In', '$18 CAD / ₹450', ''],
  ['Weekly Pass', '$40 CAD / ₹1,000', ''],
  ['Bi-Weekly Pass', '$75 CAD / ₹1,800', ''],
  ['Monthly Unlimited', '$125 CAD / ₹3,500', ''],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Holistic School of Yoga home">
          <span className="brand-mark"><Leaf size={17} strokeWidth={1.5} /></span>
          <span>Holistic <em>School</em> of Yoga</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>Our story</a>
          <a href="#practice" onClick={closeMenu}>The practice</a>
          <a href="#philosophy" onClick={closeMenu}>Our philosophy</a>
          <a href="#community" onClick={closeMenu}>Community</a>
          <a href="#contact" onClick={closeMenu} className="nav-cta">Begin here <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> A practice for real life</p>
            <h1>Come back<br /><i>to yourself.</i></h1>
            <p className="hero-intro">Yoga, strength, breath, and conscious awareness for a body that feels like home.</p>
            <a className="button button-dark" href="#practice">Explore the practice <MoveRight size={17} /></a>
          </div>
          <div className="hero-art">
            <div className="hero-image-frame"><img src={photos.hero} alt="Yoga backbend beneath a ferris wheel at dusk" fetchPriority="high" /></div>
            <div className="hero-note"><span className="line" /> Move with intention<br /><small>Since 2016</small></div>
            <div className="hero-stamp"><Sparkles size={15} /><span>Breath-led<br />living</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to soften</span><ArrowDownRight size={18} /></a>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>THE HEART OF IT</span></div>
          <div className="intro-grid">
            <div>
              <p className="eyebrow">A school for the whole human</p>
              <h2>Practice the art<br />of <i>being here.</i></h2>
            </div>
            <div className="intro-text">
              <p>Holistic School of Yoga is a welcoming space to move, breathe, learn, and listen inward. Founded by Laksh and Jon, our practice brings physical strength and conscious awareness into the same room.</p>
              <p>Whether you are stepping onto a mat for the first time or deepening a lifelong practice, you are invited to arrive exactly as you are.</p>
              <a className="text-link" href="#philosophy">Discover our philosophy <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="image-triptych">
            <img src={photos.flow} alt="Yoga practice outdoors on a wooden bridge" loading="lazy" />
            <img src={photos.sunrise} alt="Person walking beside the water at sunrise" loading="lazy" />
            <div className="triptych-card"><Leaf size={23} /><p>More presence.<br /><strong>Less performance.</strong></p></div>
          </div>
        </section>

        <section className="practice section-pad" id="practice">
          <div className="section-kicker"><span>02</span><span className="kicker-line" /><span>WAYS TO PRACTICE</span></div>
          <div className="section-heading-row">
            <div><p className="eyebrow">Find your rhythm</p><h2>Many doors.<br /><i>One practice.</i></h2></div>
            <p className="heading-aside">A thoughtful mix of movement and stillness, designed to meet you where you are and grow with you.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowUpRight className="service-arrow" size={18} />
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band">
          <div className="feature-photo"><img src={photos.dancer} alt="King dancer yoga pose beside a lake" loading="lazy" /><span className="photo-label">The body remembers</span></div>
          <div className="feature-copy"><p className="eyebrow">01 — Personal training</p><h2>Build a practice<br />that <i>belongs</i> to you.</h2><p>One-on-one sessions give you space to ask questions, refine your movement, and create a practice that supports your actual life. Strength, mobility, flexibility, and confidence — at your pace.</p><a className="button button-light" href="#contact">Ask about one-on-one <MoveRight size={17} /></a></div>
        </section>

        <section className="philosophy section-pad" id="philosophy">
          <div className="section-kicker"><span>03</span><span className="kicker-line" /><span>OUR PHILOSOPHY</span></div>
          <div className="philosophy-grid">
            <div className="philosophy-photo"><img src={photos.lakeside} alt="Quiet yoga practice beside a lake" loading="lazy" /><span>Stay close to what is true.</span></div>
            <div className="philosophy-copy"><p className="eyebrow">A quieter kind of strength</p><h2>Let the practice<br /><i>meet you.</i></h2><p>We believe yoga is less about perfect shapes and more about a more honest relationship with your body, breath, and attention.</p><p>Some days that means building strength. Some days it means softening. Every practice is an invitation to notice, adapt, and return to what supports you.</p><div className="philosophy-notes"><span><Leaf size={18} /> Move with care</span><span><Sparkles size={18} /> Stay curious</span><span><Check size={18} /> Begin again</span></div></div>
          </div>
        </section>

        <section className="schedule-section section-pad" id="classes">
          <div className="schedule-intro"><p className="eyebrow">04 — Online group classes</p><h2>Make room<br />for <i>yourself.</i></h2><p>Meet us online for a steady, welcoming rhythm three days a week. Come as you are; leave a little more connected.</p><a className="button button-dark" href="#pricing">See class passes <MoveRight size={17} /></a></div>
          <div className="schedule-photo"><img src={photos.wild} alt="Yoga backbend in an urban alley" loading="lazy" /><div className="play-pill"><Play size={13} fill="currentColor" /> Move with us</div></div>
          <div className="schedule-list">{schedule.map(([days, place, time]) => <div className="schedule-row" key={`${place}-${time}`}><div><strong>{days}</strong><span>{place}</span></div><b>{time}</b></div>)}</div>
        </section>

        <section className="pricing section-pad" id="pricing">
          <div className="section-kicker"><span>05</span><span className="kicker-line" /><span>CLASS PASSES</span></div>
          <div className="pricing-heading"><p className="eyebrow">Simple, clear, generous</p><h2>Choose what<br /><i>meets you.</i></h2></div>
          <div className="pricing-grid">{pricing.map(([name, price, detail], index) => <article className={`price-card ${index === 4 ? 'price-featured' : ''}`} key={name}><span className="price-index">0{index + 1}</span><h3>{name}</h3><strong>{price}</strong><p>{detail || 'Join from anywhere, at your own pace.'}</p><a href="#contact" aria-label={`Ask about ${name}`}><ArrowUpRight size={17} /></a></article>)}</div>
        </section>

        <section className="community section-pad" id="community">
          <div className="community-heading"><div><p className="eyebrow">06 — Our yoga community</p><h2>Growing together,<br /><i>one breath</i> at a time.</h2></div><div><p>A community connected by movement, mindfulness, and the joy of learning together.</p><a className="text-link" href="#contact">Join the circle <ArrowUpRight size={16} /></a></div></div>
          <div className="masonry">
            <div className="masonry-tall"><img src={photos.lakeside} alt="Lakeside seated yoga practice" loading="lazy" /><span>Find your ground</span></div>
            <div><img src={photos.inversion} alt="Inverted balance practice on a green mat" loading="lazy" /></div>
            <div className="masonry-low"><img src={photos.wall} alt="Yoga handstand against a warm yellow wall" loading="lazy" /></div>
            <div><img src={photos.garden} alt="Outdoor yoga practice in a garden" loading="lazy" /></div>
          </div>
        </section>

        <section className="faq-contact section-pad" id="contact">
          <div className="faq"><p className="eyebrow">A few gentle answers</p><h2>Before we<br /><i>begin.</i></h2>{['I am new to yoga. Where should I start?', 'Do I need special equipment?', 'How do I join an online class?'].map((question, index) => <div className="faq-item" key={question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)}><span>{question}</span><ChevronDown size={18} className={activeFaq === index ? 'rotate' : ''} /></button>{activeFaq === index && <p>{index === 0 ? 'Start with the class or conversation that feels most welcoming. We will meet you where you are.' : index === 1 ? 'A mat and a little space are enough. Props are welcome, never required.' : 'Send us a note and we will share the next step for joining the schedule.'}</p>}</div>)}</div>
          <div className="contact-card"><p className="eyebrow">Start a conversation</p><h2>Let’s find your<br /><i>way in.</i></h2><p>Questions about classes, private training, prenatal support, or simply where to begin? We would love to hear from you.</p><a className="email-link" href="mailto:Yogawithlaksh360@gmail.com"><Mail size={17} /> Yogawithlaksh360@gmail.com</a><a className="button button-light" href="https://forms.gle/4mQCnnqKXpdEtgEt9" target="_blank" rel="noreferrer">Open contact form <ArrowUpRight size={17} /></a></div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark"><Leaf size={17} strokeWidth={1.5} /></span><span>Holistic <em>School</em> of Yoga</span></a><p>Move gently. Live fully.</p><a href="#home" className="back-top">Back to top <ArrowUpRight size={15} /></a><div className="footer-bottom"><span>© 2026 Holistic School of Yoga</span><a href="mailto:Yogawithlaksh360@gmail.com">Email us</a><a href="#home"><Instagram size={16} /> Follow the practice</a></div></footer>
    </div>
  );
}

export default App;
