"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  { title: "Personalised Learning Experiences", desc: "Help learners discover relevant explanations, learning resources, revision materials, and practice activities suited to their learning needs.", img: "/expand-your-learning.png", alt: "Personalised learning interface." },
  { title: "Intelligent Assessment & Practice", desc: "Generate AI-assisted practice tests and question sets to help learners evaluate their understanding and identify areas for improvement.", img: "/create-interactive-teaching-materials.png", alt: "AI assessment interface." },
  { title: "Performance Insights", desc: "Use learning and assessment data, where supported, to identify knowledge gaps and guide more focused academic practice.", img: "/lead-your-institution.png", alt: "Performance insights dashboard." },
  { title: "AI-Powered Academic Assistance", desc: "Give learners an additional way to explore concepts, ask questions, and engage with educational material.", img: "/make-time-for-what-matters.png", alt: "AI academic assistance interface." },
  { title: "Institution-Centred Learning", desc: "Explore how Osmium can fit your institution's teaching workflows, learning requirements, and educational objectives.", img: "/prepare-jobs.png", alt: "Institution learning dashboard." },
  { title: "Designed to Grow With Your Institution", desc: "Discuss deployment options, integration requirements, and potential customisation based on your organisation's needs.", img: "/advance-research.png", alt: "Scalable platform interface." },
];

export default function FeatureAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ borderTop: "1px solid #e5e7eb", padding: "80px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "#000", marginBottom: 16, letterSpacing: "-0.02em" }}>
            A Smarter Way to Teach, Learn, and Assess
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
            AI becomes more valuable when it helps educators and learners turn information into meaningful progress.
          </p>
        </div>

        <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }} className="accordion-layout">
          {/* Accordion list */}
          <div style={{ width: 320, flexShrink: 0 }} className="accordion-list">
            {items.map((item, i) => (
              <div key={item.title} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <button
                  onClick={() => setActive(i)}
                  style={{
                    width: "100%", textAlign: "left", padding: "16px 0",
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12
                  }}
                >
                  <span style={{
                    fontSize: 15, fontWeight: active === i ? 600 : 400,
                    color: active === i ? "#000" : "#6b7280", transition: "color 0.15s"
                  }}>
                    {item.title}
                  </span>
                  {active === i && (
                    <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000", flexShrink: 0 }} />
                  )}
                </button>
                {active === i && (
                  <p style={{ fontSize: 13, color: "#9ca3af", paddingBottom: 16, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
            <div style={{ marginTop: 24 }}>
              <Link href="#contact" style={{
                padding: "10px 20px", borderRadius: 999, backgroundColor: "#000",
                color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none",
                display: "inline-flex", alignItems: "center"
              }}>
                Discover Osmium for Your Institution
              </Link>
            </div>
          </div>

          {/* Image panel */}
          <div style={{ flex: 1 }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden" }}>
              <Image
                src={items[active].img}
                alt={items[active].alt}
                fill
                style={{ objectFit: "cover", transition: "opacity 0.3s" }}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .accordion-layout { flex-direction: column !important; }
          .accordion-list { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
