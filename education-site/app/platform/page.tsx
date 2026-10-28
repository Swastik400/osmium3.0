"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  ClipboardText,
  ChartLineUp,
  Robot,
  ArrowRight,
  CheckCircle,
  PlugsConnected,
  Gear,
  Student,
  ChalkboardTeacher,
} from "@phosphor-icons/react/dist/ssr";

const font = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const tabs = [
  {
    id: "learning",
    label: "Personalised Learning",
    Icon: Brain,
    title: "Learning that adapts to every student",
    desc: "Osmium AI surfaces the most relevant content, explanations, and practice activities based on each learner's strengths, gaps, and pace. No two learning journeys are the same.",
    bullets: ["Adaptive content recommendations", "Gap identification and remediation", "Curriculum-aligned resources", "Multi-format learning materials"],
    img: "/personalised-learning.png",
    alt: "Personalised learning interface",
  },
  {
    id: "assessment",
    label: "Intelligent Assessment",
    Icon: ClipboardText,
    title: "AI-assisted tests and practice sets",
    desc: "Generate practice tests, question banks, and formative assessments aligned to your curriculum. Instant scoring and detailed breakdowns help learners understand exactly where to improve.",
    bullets: ["Auto-generated question sets", "Instant scoring and feedback", "Topic-level performance breakdown", "Curriculum-aligned difficulty levels"],
    img: "/intelligent-assessment.png",
    alt: "AI assessment interface",
  },
  {
    id: "insights",
    label: "Performance Insights",
    Icon: ChartLineUp,
    title: "Data that drives better outcomes",
    desc: "Track learner progress across topics, identify knowledge gaps early, and use actionable insights to guide more focused academic support — for individual students and entire cohorts.",
    bullets: ["Individual and cohort dashboards", "Knowledge gap detection", "Progress over time tracking", "Exportable reports for educators"],
    img: "/performance-insights.png",
    alt: "Performance insights dashboard",
  },
  {
    id: "assistance",
    label: "AI Academic Assistance",
    Icon: Robot,
    title: "A smarter way to explore concepts",
    desc: "Give learners an always-available AI companion to ask questions, explore ideas, and engage with educational material at their own pace — beyond the classroom.",
    bullets: ["24/7 concept exploration", "Step-by-step explanations", "Multi-subject support", "Safe, educationally-focused responses"],
    img: "/ai-academic-assistance.png",
    alt: "AI academic assistance interface",
  },
];

const stats = [
  { value: "6+", label: "Core AI capabilities" },
  { value: "4", label: "Institution types supported" },
  { value: "API", label: "Integration-ready" },
  { value: "99.9%", label: "Uptime SLA" },
];

const steps = [
  { step: "01", Icon: PlugsConnected, title: "Connect your institution", desc: "Integrate Osmium AI with your existing LMS or deploy as a standalone platform. Our team handles the setup." },
  { step: "02", Icon: Gear, title: "Configure for your curriculum", desc: "Map your syllabus, set assessment parameters, and customise the learning experience for your learners." },
  { step: "03", Icon: Student, title: "Learners engage with AI", desc: "Students access personalised content, take AI-assisted assessments, and get academic support on demand." },
  { step: "04", Icon: ChalkboardTeacher, title: "Educators act on insights", desc: "Teachers and administrators use performance data to identify gaps, guide interventions, and improve outcomes." },
];

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];
  const CurrentIcon = current.Icon;

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60, fontFamily: font }}>

        {/* Hero */}
        <section style={{ padding: "80px 0 64px", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16, fontFamily: font }}>
              Platform
            </p>
            <h1 className="section-title" style={{ color: "#000", textAlign: "left", marginBottom: 24, maxWidth: 720 }}>
              A smarter way to teach, learn, and assess.
            </h1>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, maxWidth: 560, marginBottom: 36, fontFamily: font }}>
              The Osmium AI platform brings together personalised learning, intelligent assessment, performance analytics, and AI academic assistance — all in one place.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/#contact" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Request a demo <ArrowRight size={14} weight="bold" />
              </Link>
              <Link href="/solutions" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#fff", color: "#000", fontSize: 14, fontWeight: 500, textDecoration: "none", border: "1px solid #e5e7eb", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                See all solutions <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "56px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div className="page-container">
            <div className="platform-stats-grid">
              {stats.map((s) => (
                <div key={s.label} style={{ textAlign: "center", padding: "24px 16px" }}>
                  <p style={{ fontSize: 36, fontWeight: 700, color: "#000", letterSpacing: "-0.03em", marginBottom: 6, fontFamily: font }}>{s.value}</p>
                  <p style={{ fontSize: 13, color: "#9ca3af", fontFamily: font }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive tabs */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title" style={{ color: "#000", marginBottom: 16 }}>
                Four capabilities. One platform.
              </h2>
              <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.6, fontFamily: font }}>
                Each capability is designed to work independently or together, fitting into your institution&apos;s existing workflows.
              </p>
            </div>

            {/* Tab buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40, justifyContent: "center" }}>
              {tabs.map((t, i) => {
                const TabIcon = t.Icon;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(i)}
                    style={{
                      padding: "9px 18px", borderRadius: 999, fontSize: 14, fontWeight: 500,
                      border: "1px solid", cursor: "pointer", transition: "all 0.15s", fontFamily: font,
                      backgroundColor: activeTab === i ? "#000" : "#fff",
                      color: activeTab === i ? "#fff" : "#374151",
                      borderColor: activeTab === i ? "#000" : "#e5e7eb",
                      display: "flex", alignItems: "center", gap: 7,
                    }}
                  >
                    <TabIcon size={15} weight="duotone" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div style={{ display: "flex", gap: 56, alignItems: "center" }} className="platform-tab-layout">
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CurrentIcon size={18} weight="duotone" color="#000" />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", fontFamily: font }}>
                    {current.label}
                  </span>
                </div>
                <h3 style={{ fontSize: 28, fontWeight: 600, color: "#000", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.02em", fontFamily: font }}>
                  {current.title}
                </h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginBottom: 24, fontFamily: font }}>
                  {current.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {current.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151", fontFamily: font }}>
                      <CheckCircle size={16} weight="fill" color="#000" style={{ flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Learn more <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                  <Image src={current.img} alt={current.alt} fill style={{ objectFit: "cover" }} sizes="50vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 className="section-title" style={{ color: "#000", marginBottom: 16 }}>
                How Osmium AI works
              </h2>
            </div>
            <div className="platform-steps-grid">
              {steps.map(({ step, Icon: StepIcon, title, desc }) => (
                <div key={step} style={{ padding: "28px 24px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <StepIcon size={20} weight="duotone" color="#000" />
                    </div>
                    <span style={{ fontSize: 28, fontWeight: 700, color: "#e5e7eb", letterSpacing: "-0.03em", fontFamily: font }}>{step}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#000", marginBottom: 8, fontFamily: font }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0, fontFamily: font }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0fdf4 100%)" }}>
          <div className="page-container" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <h2 className="section-title" style={{ color: "#000", marginBottom: 20 }}>
              See the platform in action.
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32, fontFamily: font }}>
              Request a personalised demo and we&apos;ll show you how Osmium AI can work for your institution.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" style={{ padding: "12px 28px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 15, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Request a demo <ArrowRight size={15} weight="bold" />
              </Link>
              <Link href="/for-institutions" style={{ padding: "12px 28px", borderRadius: 999, backgroundColor: "#fff", color: "#000", fontSize: 15, fontWeight: 500, textDecoration: "none", border: "1px solid #e5e7eb", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                For institutions <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .platform-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
        }
        .platform-stats-grid > div { border-right: 1px solid #e5e7eb; }
        .platform-stats-grid > div:last-child { border-right: none; }
        .platform-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .platform-tab-layout { flex-direction: row; }
        @media (max-width: 1024px) {
          .platform-steps-grid { grid-template-columns: repeat(2, 1fr); }
          .platform-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .platform-stats-grid > div:nth-child(2) { border-right: none; }
          .platform-stats-grid > div:nth-child(3) { border-top: 1px solid #e5e7eb; }
        }
        @media (max-width: 768px) {
          .platform-tab-layout { flex-direction: column !important; gap: 32px !important; }
          .platform-steps-grid { grid-template-columns: 1fr; }
          .platform-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}
