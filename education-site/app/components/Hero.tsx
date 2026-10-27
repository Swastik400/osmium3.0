import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ paddingTop: 60 }}>
      <div className="page-container" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 64 }} className="hero-inner">

          {/* Text */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 500, color: "#6b7280", marginBottom: 16, letterSpacing: "0.02em" }}>
              Osmium AI — Enterprise AI Solutions by Navchetna Technologies
            </p>
            <h1 className="section-title" style={{ color: "#000", marginBottom: 24, textAlign: "left" }}>
              AI-Powered Education, Built for Every Institution.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4b5563", maxWidth: 520, marginBottom: 32 }}>
              Empower your institution with personalised learning, intelligent assessments, and AI-driven academic experiences. Osmium AI helps educational organisations deliver more adaptive, engaging, and accessible learning at scale.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="#contact" style={{
                padding: "10px 20px", borderRadius: 999, backgroundColor: "#000",
                color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none",
                display: "inline-flex", alignItems: "center"
              }}>
                Partner with Osmium
              </Link>
              <Link href="#solutions" style={{
                padding: "10px 20px", borderRadius: 999, backgroundColor: "#f3f4f6",
                color: "#000", fontSize: 14, fontWeight: 500, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Image */}
          <div style={{ flex: 1 }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/2", borderRadius: 8, overflow: "hidden" }}>
              <Image
                src="/hero-learning.jpg"
                alt="Students learning with technology"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
