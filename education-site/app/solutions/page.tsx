import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Chalkboard,
  GraduationCap,
  ClipboardText,
  Globe,
  Brain,
  ChartBar,
  Robot,
  Buildings,
  ArrowRight,
  Scales,
} from "@phosphor-icons/react/dist/ssr";

const font = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const solutions = [
  {
    tag: "Personalised Learning",
    title: "Learning that adapts to every student",
    desc: "Osmium AI analyses each learner's strengths, gaps, and pace to surface the most relevant content, explanations, and practice activities — making every session more effective.",
    img: "/personalised-learning.png",
    alt: "Personalised learning interface",
    Icon: Brain,
  },
  {
    tag: "Intelligent Assessment",
    title: "AI-assisted tests and practice sets",
    desc: "Generate practice tests, question banks, and formative assessments aligned to your curriculum. Instant scoring and detailed breakdowns help learners understand exactly where to improve.",
    img: "/intelligent-assessment.png",
    alt: "AI assessment interface",
    Icon: ClipboardText,
  },
  {
    tag: "Performance Insights",
    title: "Data that drives better outcomes",
    desc: "Track learner progress across topics, identify knowledge gaps early, and use actionable insights to guide more focused academic support — for individual students and entire cohorts.",
    img: "/performance-insights.png",
    alt: "Performance insights dashboard",
    Icon: ChartBar,
  },
  {
    tag: "AI Academic Assistance",
    title: "A smarter way to explore concepts",
    desc: "Give learners an always-available AI companion to ask questions, explore ideas, and engage with educational material at their own pace — beyond the classroom.",
    img: "/ai-academic-assistance.png",
    alt: "AI academic assistance interface",
    Icon: Robot,
  },
  {
    tag: "Institution-Centred Tools",
    title: "Built around your institution's needs",
    desc: "From content management to learner analytics, Osmium AI fits into your existing teaching workflows and educational objectives without disrupting what already works.",
    img: "/institution-centred.png",
    alt: "Institution learning dashboard",
    Icon: Buildings,
  },
  {
    tag: "Scalable Infrastructure",
    title: "Designed to grow with you",
    desc: "Whether you serve 500 or 500,000 learners, Osmium AI scales with your institution. Flexible deployment, integration-ready APIs, and enterprise-grade reliability.",
    img: "/designed-to-grow.png",
    alt: "Scalable platform interface",
    Icon: Scales,
  },
];

const audiences = [
  { Icon: Chalkboard, title: "Schools & K–12", desc: "AI-assisted learning resources and assessments for students and educators." },
  { Icon: GraduationCap, title: "Higher Education", desc: "Adaptive practice and academic assistance for universities and colleges." },
  { Icon: ClipboardText, title: "Coaching & Test Prep", desc: "Mock tests and performance tracking for competitive exam preparation." },
  { Icon: Globe, title: "Education Networks", desc: "Scalable AI solutions for multi-campus institutions and education groups." },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60, fontFamily: font }}>

        {/* Hero */}
        <section style={{ padding: "80px 0 64px", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16, fontFamily: font }}>
              Solutions
            </p>
            <h1 className="section-title" style={{ color: "#000", textAlign: "left", marginBottom: 24, maxWidth: 720 }}>
              AI solutions built for every stage of education.
            </h1>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, maxWidth: 560, marginBottom: 36, fontFamily: font }}>
              From personalised learning to intelligent assessments and institutional analytics — Osmium AI gives educators and learners the tools to achieve more.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/#contact" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Talk to our team <ArrowRight size={14} weight="bold" />
              </Link>
              <Link href="/platform" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#fff", color: "#000", fontSize: 14, fontWeight: 500, textDecoration: "none", border: "1px solid #e5e7eb", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Explore the platform <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section style={{ padding: "72px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div className="page-container">
            <h2 style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 40, fontFamily: font }}>
              Who it&apos;s for
            </h2>
            <div className="solutions-audience-grid">
              {audiences.map(({ Icon, title, desc }) => (
                <div key={title} style={{ padding: "28px 24px", border: "1px solid #e5e7eb", borderRadius: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon size={22} weight="duotone" color="#000" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#000", marginBottom: 8, fontFamily: font }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0, fontFamily: font }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions list */}
        <section style={{ padding: "80px 0" }}>
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <h2 className="section-title" style={{ color: "#000", marginBottom: 16 }}>
                Everything your institution needs.
              </h2>
              <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.6, fontFamily: font }}>
                Six core capabilities, each designed to make learning more intelligent, accessible, and effective.
              </p>
            </div>

            <div className="solutions-grid">
              {solutions.map(({ tag, title, desc, img, alt, Icon }) => (
                <div key={title} style={{ border: "1px solid #e5e7eb", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#f9fafb" }}>
                    <Image src={img} alt={alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={16} weight="duotone" color="#374151" />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", fontFamily: font }}>
                        {tag}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: "#000", marginBottom: 10, lineHeight: 1.3, fontFamily: font }}>{title}</h3>
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, margin: 0, fontFamily: font }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0fdf4 100%)" }}>
          <div className="page-container" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <h2 className="section-title" style={{ color: "#000", marginBottom: 20 }}>
              Ready to bring AI into your institution?
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32, fontFamily: font }}>
              Our team will work with you to understand your goals and find the right approach for your institution.
            </p>
            <Link href="/#contact" style={{ padding: "12px 28px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 15, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Get in touch <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .solutions-audience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .solutions-grid { grid-template-columns: repeat(2, 1fr); }
          .solutions-audience-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .solutions-grid { grid-template-columns: 1fr; }
          .solutions-audience-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}
