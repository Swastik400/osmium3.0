"use client";
import Image from "next/image";

const logos = [
  { name: "AWS", src: "/aws.svg" },
  { name: "HomeGuru", src: "/homeguru.svg" },
  { name: "AWS", src: "/aws.svg" },
  { name: "HomeGuru", src: "/homeguru.svg" },
  { name: "AWS", src: "/aws.svg" },
  { name: "HomeGuru", src: "/homeguru.svg" },
];

export default function TrustedLogos() {
  return (
    <section style={{ borderTop: "1px solid #e5e7eb", padding: "56px 0", backgroundColor: "#fff", overflow: "hidden" }}>
      <p style={{
        textAlign: "center", marginBottom: 40,
        fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        fontSize: 10, fontWeight: 500,
        textTransform: "uppercase", letterSpacing: "0.16em", color: "#8b8b8b"
      }}>
        Trusted by teams building with intent
      </p>

      <div style={{
        position: "relative", display: "flex", overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
      }}>
        {[0, 1].map((copy) => (
          <div key={copy} style={{
            display: "flex", flexShrink: 0, flexWrap: "nowrap",
            alignItems: "center", gap: 64, paddingRight: 64,
            animation: "ticker 28s linear infinite",
          }}>
            {logos.map((logo, i) => (
              <div key={`${logo.name}-${copy}-${i}`} style={{
                flexShrink: 0, opacity: 0.35, filter: "grayscale(1)",
                transition: "opacity 0.3s", cursor: "default",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.35")}
              >
                <Image src={logo.src} alt={logo.name} width={120} height={40} style={{ objectFit: "contain", height: 36, width: "auto" }} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
