import Link from "next/link";

export default function NewsCards() {
  return (
    <>
      {/* One Platform CTA */}
      <section style={{ borderTop: "1px solid #e5e7eb", padding: "80px 32px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "#000", marginBottom: 16, letterSpacing: "-0.02em" }}>
            One Platform. More Possibilities for Education.
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.6, marginBottom: 12 }}>
            Bring AI-powered learning into your educational ecosystem. Whether you lead a school, university, coaching institute, or education network, Osmium AI can help you explore new approaches to learning and assessment.
          </p>
          <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, marginBottom: 32 }}>
            Let&apos;s discuss how Osmium can support your institution&apos;s goals.
          </p>
          <Link href="#contact" style={{
            padding: "12px 28px", borderRadius: 999, backgroundColor: "#000",
            color: "#fff", fontSize: 15, fontWeight: 500, textDecoration: "none",
            display: "inline-flex", alignItems: "center"
          }}>
            Get Osmium for Your Institution
          </Link>
        </div>
      </section>
    </>
  );
}
