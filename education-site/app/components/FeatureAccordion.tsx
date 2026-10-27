"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  { title: "Personalised Learning Experiences", desc: "Help learners discover relevant explanations, learning resources, revision materials, and practice activities suited to their learning needs.", img: "/personalised-learning.png", alt: "Personalised learning interface." },
  { title: "Intelligent Assessment & Practice", desc: "Generate AI-assisted practice tests and question sets to help learners evaluate their understanding and identify areas for improvement.", img: "/intelligent-assessment.png", alt: "AI assessment interface." },
  { title: "Performance Insights", desc: "Use learning and assessment data, where supported, to identify knowledge gaps and guide more focused academic practice.", img: "/performance-insights.png", alt: "Performance insights dashboard." },
  { title: "AI-Powered Academic Assistance", desc: "Give learners an additional way to explore concepts, ask questions, and engage with educational material.", img: "/ai-academic-assistance.png", alt: "AI academic assistance interface." },
  { title: "Institution-Centred Learning", desc: "Explore how Osmium can fit your institution's teaching workflows, learning requirements, and educational objectives.", img: "/institution-centred.png", alt: "Institution learning dashboard." },
  { title: "Designed to Grow With Your Institution", desc: "Discuss deployment options, integration requirements, and potential customisation based on your organisation's needs.", img: "/designed-to-grow.png", alt: "Scalable platform interface." },
];

export default function FeatureAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ borderTop: "1px solid #e5e7eb", padding: "80px 0" }}>
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title" style={{ color: "#000", marginBottom: 16 }}>
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
                  <>
                    <p style={{ fontSize: 13, color: "#9ca3af", paddingBottom: 16, lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                    {/* Mobile image — shown only on mobile below the active item */}
                    <div className="accordion-img-mobile" style={{ display: "none", position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
                      <Image src={item.img} alt={item.alt} fill style={{ objectFit: "cover" }} sizes="100vw" />
                    </div>
                  </>
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

          {/* Desktop image panel */}
          <div style={{ flex: 1 }} className="accordion-img-desktop">
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden" }}>
              <Image
                src={items[active].img}
                alt={items[active].alt}
                fill
                style={{ objectFit: "cover", transition: "opacity 0.3s" }}
                sizes="60vw"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .accordion-img-desktop { display: none !important; }
          .accordion-img-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
