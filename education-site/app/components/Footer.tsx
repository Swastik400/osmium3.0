import Link from "next/link";
import Image from "next/image";

const footerLinks: Record<string, string[]> = {
  "Platform": ["Personalised Learning", "AI Assessments", "Academic Assistance", "Enterprise Solutions"],
  "Organisation": ["About Osmium", "Contact Us", "Navchetna Technologies"],
  "Legal": ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e5e7eb", padding: "64px 0 40px" }}>
      <div className="page-container">
        {/* Brand + columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(3, auto)", gap: 40, marginBottom: 64, alignItems: "start" }} className="footer-grid">
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 8, textDecoration: "none" }}>
              <Image src="/osmium-logo.png" alt="Osmium AI" width={32} height={32} style={{ objectFit: "contain" }} />
              <span style={{ fontSize: 18, fontWeight: 700, color: "#000", letterSpacing: "-0.02em" }}>Osmium AI</span>
            </Link>
            <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, maxWidth: 240 }}>
              Intelligent learning. Personalised possibilities.<br />
              AI-powered educational experiences for institutions, educators, and learners.
            </p>
          </div>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                {section}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" style={{ fontSize: 14, color: "#4b5563", textDecoration: "none", transition: "color 0.15s" }}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          paddingTop: 24, borderTop: "1px solid #f3f4f6"
        }}>
          <p style={{ fontSize: 12, color: "#9ca3af" }}>© 2026 Osmium AI. All rights reserved. Powered by Navchetna Technologies.</p>
          <div style={{ display: "flex", gap: 16 }}>
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <Link key={l} href="#" style={{ fontSize: 12, color: "#9ca3af", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
