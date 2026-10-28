"use client";
import { useState } from "react";
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
  PlugsConnected,
  Wrench,
  ArrowRight,
  CheckCircle,
  MinusCircle,
  PlusCircle,
  Buildings,
  Headset,
} from "@phosphor-icons/react/dist/ssr";

const font = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const institutionTypes = [
  {
    Icon: Chalkboard,
    title: "Schools & K–12",
    desc: "Support students and educators with AI-assisted learning resources, practice assessments, and personalised academic support across all year groups.",
    img: "/media-k12-v2.png",
    alt: "K-12 students learning",
    features: ["Curriculum-aligned content", "Student progress tracking", "Teacher dashboards", "Safe AI for younger learners"],
  },
  {
    Icon: GraduationCap,
    title: "Higher Education",
    desc: "Enhance the learning experience with intelligent academic assistance, adaptive practice, and tools that support student success and institutional innovation.",
    img: "/media-higher-v2.png",
    alt: "Higher education students",
    features: ["Department-level analytics", "Research assistance tools", "LMS integration", "Multi-campus deployment"],
  },
  {
    Icon: ClipboardText,
    title: "Coaching & Test Prep",
    desc: "Help learners prepare for competitive examinations with AI-assisted mock tests, topic-focused practice, and performance-based learning recommendations.",
    img: "/media-students-v2.png",
    alt: "Students preparing for exams",
    features: ["Exam-pattern mock tests", "Weak area identification", "Timed practice sessions", "Detailed score analytics"],
  },
  {
    Icon: Globe,
    title: "Education Networks",
    desc: "Scalable AI learning solutions for educational groups, multi-campus institutions, and organisations seeking to integrate intelligent learning at scale.",
    img: "/media-countries-v2.png",
    alt: "Education network",
    features: ["Centralised admin console", "Cross-campus reporting", "Custom branding", "Enterprise SLA"],
  },
];

const capabilities = [
  { Icon: Brain, title: "Personalised Learning", desc: "Adaptive content and recommendations tailored to each learner's pace and gaps." },
  { Icon: ClipboardText, title: "Intelligent Assessment", desc: "Auto-generated tests and question banks aligned to your curriculum." },
  { Icon: ChartBar, title: "Performance Analytics", desc: "Real-time dashboards for educators, administrators, and learners." },
  { Icon: Robot, title: "AI Academic Assistance", desc: "Always-available AI support for concept exploration and doubt resolution." },
  { Icon: PlugsConnected, title: "LMS Integration", desc: "Connect Osmium AI to your existing learning management system via API." },
  { Icon: Wrench, title: "Custom Deployment", desc: "On-premise, cloud, or hybrid deployment options to suit your infrastructure." },
] as const;

const faqs = [
  { q: "How long does implementation take?", a: "Most institutions are up and running within 2–4 weeks. Our team handles the technical setup and provides training for educators and administrators." },
  { q: "Can Osmium AI integrate with our existing LMS?", a: "Yes. Osmium AI offers API-based integration with major LMS platforms. Our team will work with your technical staff to ensure a smooth connection." },
  { q: "Is student data kept secure?", a: "Absolutely. Osmium AI is built with data privacy at its core. All student data is encrypted, access-controlled, and handled in compliance with applicable data protection regulations." },
  { q: "Do you offer a pilot programme?", a: "Yes. We offer structured pilot programmes for institutions that want to evaluate Osmium AI before full deployment. Contact our team to discuss options." },
  { q: "What support is included?", a: "All institutional plans include onboarding support, educator training, and ongoing technical assistance. Enterprise plans include a dedicated account manager." },
];

export default function ForInstitutionsPage() {
  const [activeType, setActiveType] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const current = institutionTypes[activeType];
  const CurrentIcon = current.Icon;

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60, fontFamily: font }}>

        {/* Hero */}
        <section style={{ padding: "80px 0 64px", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16, fontFamily: font }}>
              For Institutions
            </p>
            <h1 className="section-title" style={{ color: "#000", textAlign: "left", marginBottom: 24, maxWidth: 720 }}>
              AI-powered learning for every kind of institution.
            </h1>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, maxWidth: 560, marginBottom: 36, fontFamily: font }}>
              Whether you lead a school, university, coaching institute, or education network — Osmium AI helps you deliver more personalised, effective, and scalable learning experiences.
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

        {/* Institution type selector */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title" style={{ color: "#000", marginBottom: 16 }}>
                Built for your institution type.
              </h2>
              <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.6, fontFamily: font }}>
                Select your institution type to see how Osmium AI can work for you.
              </p>
            </div>

            {/* Type tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 48 }}>
              {institutionTypes.map(({ Icon: TabIcon, title }, i) => (
                <button
                  key={title}
                  onClick={() => setActiveType(i)}
                  style={{
                    padding: "9px 18px", borderRadius: 999, fontSize: 14, fontWeight: 500,
                    border: "1px solid", cursor: "pointer", transition: "all 0.15s", fontFamily: font,
                    backgroundColor: activeType === i ? "#000" : "#fff",
                    color: activeType === i ? "#fff" : "#374151",
                    borderColor: activeType === i ? "#000" : "#e5e7eb",
                    display: "flex", alignItems: "center", gap: 7,
                  }}
                >
                  <TabIcon size={15} weight="duotone" />
                  {title}
                </button>
              ))}
            </div>

            {/* Active type detail */}
            <div style={{ display: "flex", gap: 56, alignItems: "center" }} className="inst-detail-layout">
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CurrentIcon size={20} weight="duotone" color="#000" />
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 600, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em", fontFamily: font, margin: 0 }}>
                    {current.title}
                  </h3>
                </div>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginBottom: 24, fontFamily: font }}>
                  {current.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {current.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151", fontFamily: font }}>
                      <CheckCircle size={16} weight="fill" color="#000" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Enquire for {current.title} <ArrowRight size={14} weight="bold" />
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

        {/* Capabilities */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 className="section-title" style={{ color: "#000", marginBottom: 16 }}>
                What&apos;s included for institutions.
              </h2>
              <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.6, fontFamily: font }}>
                Every institutional plan includes access to Osmium AI&apos;s full suite of capabilities.
              </p>
            </div>
            <div className="inst-capabilities-grid">
              {capabilities.map(({ Icon: CapIcon, title, desc }) => (
                <div key={title} style={{ padding: "28px 24px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <CapIcon size={22} weight="duotone" color="#000" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#000", marginBottom: 8, fontFamily: font }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0, fontFamily: font }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "80px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div className="page-container">
            <div style={{ display: "flex", gap: 80, alignItems: "flex-start" }} className="inst-faq-layout">
              <div style={{ flex: "0 0 320px" }} className="inst-faq-left">
                <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Headset size={22} weight="duotone" color="#000" />
                </div>
                <h2 style={{ fontSize: 28, fontWeight: 600, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: font }}>
                  Common questions from institutions.
                </h2>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 24, fontFamily: font }}>
                  Can&apos;t find what you&apos;re looking for? Our team is happy to help.
                </p>
                <Link href="/#contact" style={{ padding: "10px 22px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Contact us <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
              <div style={{ flex: 1 }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", textAlign: "left", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontFamily: font }}
                    >
                      <span style={{ fontSize: 15, fontWeight: 500, color: "#000", fontFamily: font }}>{faq.q}</span>
                      {openFaq === i
                        ? <MinusCircle size={20} weight="fill" color="#9ca3af" style={{ flexShrink: 0 }} />
                        : <PlusCircle size={20} weight="fill" color="#9ca3af" style={{ flexShrink: 0 }} />
                      }
                    </button>
                    {openFaq === i && (
                      <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, paddingBottom: 20, margin: 0, fontFamily: font }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0fdf4 100%)" }}>
          <div className="page-container" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: "#fff", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <Buildings size={26} weight="duotone" color="#000" />
              </div>
            </div>
            <h2 className="section-title" style={{ color: "#000", marginBottom: 20 }}>
              Let&apos;s build the future of learning together.
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32, fontFamily: font }}>
              Tell us about your institution and what you&apos;re looking to achieve. Our team will connect with you to discuss the right approach.
            </p>
            <Link href="/#contact" style={{ padding: "12px 28px", borderRadius: 999, backgroundColor: "#000", color: "#fff", fontSize: 15, fontWeight: 500, textDecoration: "none", fontFamily: font, display: "inline-flex", alignItems: "center", gap: 8 }}>
              Get in touch <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .inst-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .inst-detail-layout { flex-direction: row; }
        .inst-faq-layout { flex-direction: row; }
        @media (max-width: 1024px) {
          .inst-capabilities-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .inst-capabilities-grid { grid-template-columns: 1fr; }
          .inst-detail-layout { flex-direction: column !important; gap: 32px !important; }
          .inst-faq-layout { flex-direction: column !important; gap: 40px !important; }
          .inst-faq-left { flex: none !important; }
        }
      `}</style>
    </>
  );
}
