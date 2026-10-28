import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Crosshair,
  GlobeHemisphereWest,
  Brain,
  Flag,
  ChatCircleDots,
  Flame,
  LinkedinLogo,
  ArrowRight,
  Rocket,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";

const font = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const team = [
  {
    name: "Ayushmaan Soni",
    role: "Founder",
    desc: "Tech entrepreneur driving AI innovation. From childhood experiments with electronics to leading AI-driven solutions for education.",
    img: "/osmium-logo.png",
    linkedin: "https://www.linkedin.com/in/422h52219hsuya/",
  },
  {
    name: "Varun Yadav",
    role: "Co-Founder",
    desc: "Skilled backend developer passionate about building scalable systems. Lead backend developer for Osmium AI's infrastructure.",
    img: "/osmium-logo.png",
    linkedin: "https://www.linkedin.com/in/varun-yadav-navchetna/",
  },
  {
    name: "Swastik Khatua",
    role: "Co-Founder",
    desc: "Frontend developer passionate about UI/UX and AI-driven EdTech solutions. Crafting seamless user experiences with modern web technologies.",
    img: "/osmium-logo.png",
    linkedin: "https://www.linkedin.com/in/swastik-khatua-84798631b/",
  },
  {
    name: "Suman Yadav",
    role: "Co-Founder",
    desc: "Head of Design with a passion for technology and creativity. The mind behind Osmium AI's UI/UX and visual identity.",
    img: "/osmium-logo.png",
    linkedin: "https://www.linkedin.com/in/suman-yadav-bb5516322/",
  },
  {
    name: "Dhraval Narsinha",
    role: "Co-Founder",
    desc: "Frontend developer focused on building seamless user experiences. Instrumental in shaping Osmium AI's interface and frontend architecture.",
    img: "/osmium-logo.png",
    linkedin: "https://www.linkedin.com/in/dhraval-narsinha-navchetna125/",
  },
];

const milestones = [
  { date: "Sep 2024", event: "The idea sparks — five friends in a hostel room after surviving JEE" },
  { date: "Oct 2024", event: "Smart India Hackathon — first prototype built in 7 days" },
  { date: "Oct 2024", event: "Mock test engine trained on thousands of past papers" },
  { date: "Dec 2024", event: "AI Tutor v1 launched with step-by-step explanations" },
  { date: "Jan 2025", event: "First institutions onboarded across Gujarat & Maharashtra" },
  { date: "Feb 2025", event: "Career Mapping feature goes live" },
  { date: "Apr 2025", event: "Osmium AI v2 — complete platform rebuild for institutions" },
  { date: "2025+", event: "Becoming the operating system of India's education" },
];

const values = [
  { Icon: Crosshair, title: "Student-First", desc: "Every decision starts with what's best for the learner." },
  { Icon: GlobeHemisphereWest, title: "Accessible", desc: "Quality AI education should be available to every institution, everywhere." },
  { Icon: Brain, title: "AI-Powered", desc: "We build our own models, trained specifically for education." },
  { Icon: Flag, title: "Made in India", desc: "Built by students, for students, with India's educational context at heart." },
  { Icon: ChatCircleDots, title: "Open & Honest", desc: "We communicate clearly with our partners and take feedback seriously." },
  { Icon: Flame, title: "Relentless", desc: "We keep building until every learner has the support they deserve." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60, fontFamily: font }}>

        {/* Hero */}
        <section style={{ padding: "80px 0 64px", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16, fontFamily: font }}>
              About Us
            </p>
            <h1 className="section-title" style={{ color: "#000", textAlign: "left", marginBottom: 24, maxWidth: 760 }}>
              Learning should feel like having a mentor who truly understands you.
            </h1>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, maxWidth: 560, marginBottom: 36, fontFamily: font }}>
              We believe every student deserves an AI that knows how they think, where they struggle, and what dreams they quietly hold onto. That belief is why we built Osmium AI.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/#contact" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Partner with us <Handshake size={16} weight="bold" />
              </Link>
              <a href="https://navchetna.tech/" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#fff", color: "#000", fontSize: 14, fontWeight: 500, textDecoration: "none", border: "1px solid #e5e7eb", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Navchetna Technologies <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div className="page-container" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Rocket size={24} weight="duotone" color="#000" />
              </div>
            </div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 20, fontFamily: font }}>
              Our Mission
            </p>
            <p style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 400, color: "#000", lineHeight: 1.4, letterSpacing: "-0.02em", fontFamily: font }}>
              To become the operating system of India&apos;s education — ensuring no learner, no matter where they come from, ever feels lost or left behind.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "56px 0", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <div className="about-stats-grid">
              {[
                { value: "5+", label: "Institutions onboarded" },
                { value: "96B", label: "Model parameters" },
                { value: "7", label: "Days to first prototype" },
                { value: "5", label: "Co-founders, one mission" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center", padding: "24px 16px", borderRight: "1px solid #e5e7eb" }}>
                  <p style={{ fontSize: 40, fontWeight: 700, color: "#000", letterSpacing: "-0.04em", marginBottom: 6, fontFamily: font }}>{s.value}</p>
                  <p style={{ fontSize: 13, color: "#9ca3af", fontFamily: font }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div className="page-container">
            <div style={{ display: "flex", gap: 64, alignItems: "flex-start" }} className="about-story-layout">
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 20, fontFamily: font }}>
                  Our Story
                </p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "#000", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 24, fontFamily: font }}>
                  From a hostel room to India&apos;s education OS.
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.75, margin: 0, fontFamily: font }}>
                    We met in college, right after surviving the intensity of our JEE journey. In hostel rooms filled with late-night conversations, we often shared where we stumbled, what we wished we had, and how just a bit more guidance could have made all the difference.
                  </p>
                  <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.75, margin: 0, fontFamily: font }}>
                    When the Smart India Hackathon arrived, we decided to take a chance on that idea. Some of us didn&apos;t even own laptops. Within 7 chaotic, beautiful days — fuelled by tea, determination, and the occasional Hanuman Chalisa — our first prototype was alive.
                  </p>
                  <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.75, margin: 0, fontFamily: font }}>
                    From those hostel nights to today, one thing has stayed the same: the fire to make learning in India smarter, simpler, and deeply personal. We&apos;re still building, still dreaming, and still believing that one day, Osmium AI will be the operating system of India&apos;s education ecosystem.
                  </p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                  <Image src="/education-hero-media.png" alt="Osmium AI team" fill style={{ objectFit: "cover" }} sizes="50vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 className="section-title" style={{ color: "#000", marginBottom: 16 }}>
                What we believe in.
              </h2>
            </div>
            <div className="about-values-grid">
              {values.map(({ Icon: ValIcon, title, desc }) => (
                <div key={title} style={{ padding: "28px 24px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <ValIcon size={22} weight="duotone" color="#000" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#000", marginBottom: 8, fontFamily: font }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0, fontFamily: font }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16, fontFamily: font }}>
                Our Journey
              </p>
              <h2 className="section-title" style={{ color: "#000" }}>
                From idea to institution.
              </h2>
            </div>
            <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, backgroundColor: "#e5e7eb" }} />
              {milestones.map((m, i) => (
                <div key={i} style={{ display: "flex", gap: 24, paddingLeft: 24, paddingBottom: 32, position: "relative" }}>
                  <div style={{ position: "absolute", left: -4, top: 4, width: 8, height: 8, borderRadius: "50%", backgroundColor: "#000", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 4, fontFamily: font }}>{m.date}</p>
                    <p style={{ fontSize: 15, color: "#000", fontFamily: font, margin: 0 }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16, fontFamily: font }}>
                Our Team
              </p>
              <h2 className="section-title" style={{ color: "#000", textAlign: "left", maxWidth: 560 }}>
                The people building the future of education.
              </h2>
            </div>
            <div className="about-team-grid">
              {team.map((member) => (
                <div key={member.name} style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "28px 24px" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, overflow: "hidden", position: "relative" }}>
                    <Image src={member.img} alt={member.name} fill style={{ objectFit: "contain", padding: 8 }} sizes="48px" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#000", marginBottom: 2, fontFamily: font }}>{member.name}</h3>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 10, fontFamily: font }}>{member.role}</p>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginBottom: 16, fontFamily: font }}>{member.desc}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#000", fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <LinkedinLogo size={16} weight="fill" color="#0a66c2" />
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0fdf4 100%)" }}>
          <div className="page-container" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <h2 className="section-title" style={{ color: "#000", marginBottom: 20 }}>
              Ready to transform how your institution learns?
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32, fontFamily: font }}>
              Join the institutions already using Osmium AI to deliver smarter, more personalised learning at scale.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" style={{ padding: "12px 28px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 15, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Get in touch <ArrowRight size={15} weight="bold" />
              </Link>
              <a href="https://navchetna.tech/" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", borderRadius: 999, backgroundColor: "#fff", color: "#000", fontSize: 15, fontWeight: 500, textDecoration: "none", border: "1px solid #e5e7eb", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Navchetna Technologies <ArrowRight size={15} weight="bold" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
        }
        .about-stats-grid > div:last-child { border-right: none; }
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .about-story-layout { flex-direction: row; }
        @media (max-width: 1280px) {
          .about-team-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 1024px) {
          .about-values-grid { grid-template-columns: repeat(2, 1fr); }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .about-stats-grid > div:nth-child(2) { border-right: none; }
          .about-stats-grid > div:nth-child(3) { border-top: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; }
          .about-team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .about-story-layout { flex-direction: column !important; gap: 32px !important; }
          .about-values-grid { grid-template-columns: 1fr; }
          .about-team-grid { grid-template-columns: 1fr; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}
