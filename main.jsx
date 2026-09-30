import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const features = [
  {
    icon: "✦",
    title: "Create",
    text: "Build quizzes, trivia games and study sets in minutes.",
    tone: "green"
  },
  {
    icon: "▶",
    title: "Host",
    text: "Run a live game and invite everyone with a simple PIN.",
    tone: "blue"
  },
  {
    icon: "◆",
    title: "Play",
    text: "Join instantly, answer questions and climb the leaderboard.",
    tone: "pink"
  },
  {
    icon: "◎",
    title: "Learn",
    text: "Turn notes and topics into interactive practice sessions.",
    tone: "yellow"
  }
];

const faqs = [
  ["Can I create a quiz for free?", "Yes. This demo includes a free quiz creator flow with local browser state."],
  ["Can students join without an account?", "The demo join flow is designed around a game PIN, so a participant can enter a nickname and join."],
  ["Does the live game work across devices?", "The front-end simulation works in the browser. A real multi-user game would require a backend or realtime service."],
  ["Can I deploy this on Vercel?", "Yes. It is a Vite + React project and is ready for Vercel deployment."]
];

function App() {
  const [modal, setModal] = useState(null);
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="QuizPlay home">
            <span className="brand-mark">Q!</span>
            <span>QuizPlay!</span>
          </button>

          <nav className={`nav-links ${menu ? "show" : ""}`}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("social")}>Social Gatherings</button>
            <button onClick={() => scrollTo("kids")}>Learning for Kids</button>
            <button onClick={() => scrollTo("study")}>Study</button>
            <button onClick={() => scrollTo("pricing")}>Plans & Pricing</button>
          </nav>

          <div className="nav-actions">
            <button className="text-btn" onClick={() => scrollTo("features")}>Explore Content</button>
            <button className="text-btn" onClick={() => setModal("join")}>Join</button>
            <button className="light-btn" onClick={() => setModal("start")}>Start for Free</button>
            <button className="light-btn login-btn" onClick={() => setModal("login")}>Log in</button>
            <button className="language" onClick={() => notify("Language selector opened")}>◎ EN</button>
          </div>

          <button className="hamburger" onClick={() => setMenu(!menu)} aria-label="Open menu">☰</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow">LEARNING • TRIVIA • FUN</div>
            <h1>Quiz games for everyone, everywhere.</h1>
            <p>
              Create quiz games, host trivia nights, and learn something new with
              QuizPlay. Make lessons, presentations or gatherings more engaging.
            </p>
            <p className="promo"><strong>QuizPlay+ from $3/mo.</strong> Save 20% with our demo offer.</p>
            <button className="primary-btn" onClick={() => setModal("start")}>Get started</button>
          </div>

          <div className="hero-visual">
            <div className="blur-square yellow"></div>
            <div className="blur-square blue"></div>
            <div className="blur-square green"></div>
            <div className="blur-square red"></div>
            <div className="qr-card">
              <img src="/qr.svg" alt="Decorative QR code" />
            </div>
            <button className="scan-pill" onClick={() => setModal("join")}>
              <span>⌗</span> Scan QR
            </button>
          </div>
        </section>

        <section id="features" className="section white">
          <div className="section-heading">
            <span className="eyebrow dark">ONE PLACE</span>
            <h2>Create. Host. Play. Learn.</h2>
            <p>Four simple ways to make learning and social gatherings more interactive.</p>
          </div>
          <div className="feature-grid">
            {features.map((item) => (
              <article className={`feature-card ${item.tone}`} key={item.title}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button onClick={() => notify(`${item.title} feature selected`)}>Try it →</button>
              </article>
            ))}
          </div>
        </section>

        <section id="social" className="split-section purple">
          <div className="split-art">
            <div className="people-card">
              <div className="avatar-row"><span>🙂</span><span>😎</span><span>🤓</span><span>🥳</span></div>
              <div className="mini-question">Which answer gets the most points?</div>
              <div className="answer-row"><b>▲</b><b>◆</b><b>●</b><b>■</b></div>
            </div>
          </div>
          <div className="split-copy">
            <span className="eyebrow">SOCIAL GATHERINGS</span>
            <h2>Turn any gathering into game night.</h2>
            <p>Host a friendly trivia session, family challenge, classroom activity or team event with a simple game flow.</p>
            <button className="outline-btn" onClick={() => setModal("host")}>Host a game</button>
          </div>
        </section>

        <section id="kids" className="split-section cream reverse">
          <div className="split-copy dark-copy">
            <span className="eyebrow dark">LEARNING FOR KIDS</span>
            <h2>Make practice feel like play.</h2>
            <p>Use colorful questions, rewards and short challenges to keep young learners engaged.</p>
            <button className="primary-btn" onClick={() => notify("Kids learning demo opened")}>Explore learning</button>
          </div>
          <div className="kids-art">
            <div className="floating-card card-a">⭐ 100 pts</div>
            <div className="floating-card card-b">🎯 Great job!</div>
            <div className="kid-board">Q<span>!</span></div>
          </div>
        </section>

        <section id="study" className="study-section">
          <div className="study-copy">
            <span className="eyebrow dark">STUDY</span>
            <h2>Turn any topic into a study session.</h2>
            <p>Practice with flashcards, quizzes and self-paced challenges. This demo stores your progress locally in the browser.</p>
            <div className="study-actions">
              <button className="primary-btn" onClick={() => setModal("study")}>Start studying</button>
              <button className="ghost-btn" onClick={() => notify("Sample library opened")}>Browse library</button>
            </div>
          </div>
          <div className="study-preview">
            <div className="preview-top"><span>Study set</span><span>•••</span></div>
            <div className="flashcard">
              <small>QUESTION</small>
              <strong>What is the capital of France?</strong>
              <div className="fake-answer">Paris</div>
              <div className="fake-answer">Rome</div>
              <div className="fake-answer">Madrid</div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="section-heading">
            <span className="eyebrow dark">PLANS</span>
            <h2>Choose a plan that fits your group.</h2>
            <p>Pricing is presented as a front-end demo; no payment is collected.</p>
          </div>
          <div className="pricing-grid">
            {[
              ["Free", "$0", "For trying the basics", ["Create quizzes", "Join games", "Basic study modes"]],
              ["Plus", "$3", "For regular learning", ["Everything in Free", "More question types", "Study progress"]],
              ["Pro", "$8", "For advanced creators", ["Everything in Plus", "Larger game sessions", "Advanced reports"]]
            ].map(([name, price, sub, list], i) => (
              <article className={`price-card ${i === 1 ? "featured" : ""}`} key={name}>
                {i === 1 && <div className="popular">POPULAR</div>}
                <h3>{name}</h3>
                <div className="price">{price}<small>/mo</small></div>
                <p>{sub}</p>
                <ul>{list.map(x => <li key={x}>✓ {x}</li>)}</ul>
                <button className={i === 1 ? "primary-btn" : "dark-btn"} onClick={() => setModal("start")}>Choose {name}</button>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <div className="section-heading">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div className="faq-item" key={q}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{q}</span><span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div>
            <div className="brand footer-brand"><span className="brand-mark">Q!</span><span>QuizPlay!</span></div>
            <p>A React front-end demonstration inspired by interactive quiz platforms.</p>
          </div>
          <div><h4>Product</h4><button onClick={() => scrollTo("features")}>Features</button><button onClick={() => scrollTo("pricing")}>Pricing</button><button onClick={() => setModal("join")}>Join a game</button></div>
          <div><h4>Learn</h4><button onClick={() => scrollTo("study")}>Study</button><button onClick={() => scrollTo("kids")}>Kids</button><button onClick={() => notify("Resource center opened")}>Resources</button></div>
          <div><h4>Company</h4><button onClick={() => notify("About page demo")}>About</button><button onClick={() => notify("Contact page demo")}>Contact</button><button onClick={() => notify("Privacy page demo")}>Privacy</button></div>
        </div>
        <div className="footer-bottom">© 2026 QuizPlay Demo · Built with React + Vite · Designed for Vercel</div>
      </footer>

      {toast && <div className="toast">{toast}</div>}
      {modal && <Modal type={modal} close={() => setModal(null)} notify={notify} />}
    </div>
  );
}

function Modal({ type, close, notify }) {
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

  const title = {
    join: "Join a game",
    start: "Create your free account",
    login: "Welcome back",
    host: "Host a live game",
    study: "Start a study session"
  }[type];

  return (
    <div className="modal-backdrop" onMouseDown={close}>
      <div className="modal" onMouseDown={e => e.stopPropagation()}>
        <button className="close" onClick={close}>×</button>
        <div className="modal-logo">Q!</div>
        <h2>{title}</h2>

        {type === "join" && (
          <>
            <p>Enter the game PIN shown by your host.</p>
            <input value={pin} onChange={e => setPin(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="Game PIN" />
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Nickname" />
            <button className="primary-btn full" onClick={() => { notify(pin ? `Joined game ${pin} as ${name || "Player"}` : "Please enter a game PIN"); if (pin) close(); }}>Join</button>
          </>
        )}

        {type === "start" && (
          <>
            <p>Create a demo account to access the creator and study features.</p>
            <input placeholder="Your name" />
            <input placeholder="Email address" type="email" />
            <button className="primary-btn full" onClick={() => { notify("Demo account created"); close(); }}>Get started</button>
          </>
        )}

        {type === "login" && (
          <>
            <input placeholder="Email address" type="email" />
            <input placeholder="Password" type="password" />
            <button className="primary-btn full" onClick={() => { notify("Demo login successful"); close(); }}>Log in</button>
            <button className="modal-link" onClick={() => notify("Password reset demo")}>Forgot password?</button>
          </>
        )}

        {type === "host" && (
          <>
            <p>Set up a sample live quiz for your group.</p>
            <input placeholder="Quiz title" />
            <select><option>Classic quiz</option><option>Team mode</option><option>Poll</option></select>
            <button className="primary-btn full" onClick={() => { notify("Live game created — PIN 482731"); close(); }}>Create live game</button>
          </>
        )}

        {type === "study" && (
          <>
            <p>Enter a topic and generate a sample study set.</p>
            <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Java OOP" />
            <button className="primary-btn full" onClick={() => { notify(`Study set created for ${topic || "your topic"}`); close(); }}>Generate study set</button>
          </>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
