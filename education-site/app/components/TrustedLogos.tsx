const logos = [
  { name: "AWS", text: "Amazon Web Services" },
  { name: "Google", text: "Google for Education" },
  { name: "Microsoft", text: "Microsoft" },
  { name: "Coursera", text: "Coursera" },
  { name: "Khan Academy", text: "Khan Academy" },
  { name: "BYJU'S", text: "BYJU'S" },
  { name: "Unacademy", text: "Unacademy" },
  { name: "Vedantu", text: "Vedantu" },
];

export default function TrustedLogos() {
  return (
    <section style={{ borderTop: "1px solid #e5e7eb", padding: "56px 0", backgroundColor: "#fff", overflow: "hidden" }}>
      <p style={{
        textAlign: "center", marginBottom: 40,
        fontFamily: "monospace", fontSize: 10, fontWeight: 500,
        textTransform: "uppercase", letterSpacing: "0.16em", color: "#8b8b8b"
      }}>
        Trusted by teams building with intent
      </p>

      <div style={{
        position: "relative", display: "flex", overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
      }}>
        {/* Two copies for seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} style={{
            display: "flex", flexShrink: 0, flexWrap: "nowrap",
            alignItems: "center", gap: 56, paddingRight: 56,
            animation: "ticker 28s linear infinite",
          }}>
            {logos.map((logo) => (
              <div key={logo.name} style={{
                flexShrink: 0, opacity: 0.3, filter: "grayscale(1)",
                transition: "opacity 0.3s",
                cursor: "default",
                whiteSpace: "nowrap",
                fontSize: 15, fontWeight: 600, color: "#0a0a0a",
                letterSpacing: "-0.02em",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.3")}
              >
                {logo.text}
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
