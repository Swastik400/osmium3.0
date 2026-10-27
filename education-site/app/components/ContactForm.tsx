"use client";
import { useState } from "react";

const orgTypes = [
  "K–12 School / School Group",
  "Higher Education Institution",
  "Coaching & Test Preparation",
  "Education Network / Multi-Campus",
  "Government / Public Sector",
  "EdTech Company",
  "Other",
];

const sizes = ["1–100", "101–500", "501–2,000", "2,001–10,000", "10,000+"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "", email: "", phone: "", org: "", orgType: "", size: "", message: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" style={{ borderTop: "1px solid #e5e7eb", padding: "100px 0" }}>
      <div className="page-container contact-layout" style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>

        {/* Left — copy */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 20 }}>
            Enterprise Enquiry
          </p>
          <h2 className="section-title" style={{ color: "#000", textAlign: "left", marginBottom: 24 }}>
            Let&apos;s build the future of learning together.
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 40, maxWidth: 420 }}>
            Tell us about your organisation and what you&apos;re looking to achieve. Our team will connect with you to discuss enterprise solutions, implementation, and next steps.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { label: "Personalised onboarding", desc: "Dedicated support from day one." },
              { label: "Flexible deployment", desc: "Cloud, on-premise, or hybrid — your choice." },
              { label: "Institution-grade security", desc: "Built with data privacy at the core." },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000", marginTop: 7, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#000", marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 13, color: "#9ca3af" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{ flex: 1, border: "1px solid #e5e7eb", borderRadius: 16, padding: "48px 40px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#000", marginBottom: 10, letterSpacing: "-0.02em" }}>Enquiry received</h3>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>Thank you. Our team will be in touch within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <Field label="Full Name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                <Field label="Work Email" name="email" type="email" placeholder="jane@institution.edu" value={form.email} onChange={handleChange} required />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <Field label="Phone Number" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                <Field label="Organisation Name" name="org" type="text" placeholder="Your institution" value={form.org} onChange={handleChange} required />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={labelStyle}>Organisation Type</label>
                <select name="orgType" required value={form.orgType} onChange={handleChange} style={inputStyle}>
                  <option value="">Select type</option>
                  {orgTypes.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={labelStyle}>Number of Learners</label>
                <select name="size" value={form.size} onChange={handleChange} style={inputStyle}>
                  <option value="">Select range</option>
                  {sizes.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={labelStyle}>Tell us about your requirements</label>
                <textarea
                  name="message"
                  placeholder="Describe your institution's goals, current challenges, and what you're looking to achieve with Osmium AI..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                />
              </div>

              {error && <p style={{ fontSize: 13, color: "#ef4444" }}>{error}</p>}

              <button type="submit" disabled={loading} style={{
                padding: "13px 28px", borderRadius: 999, backgroundColor: "#000",
                color: "#fff", fontSize: 14, fontWeight: 500, border: "none",
                cursor: loading ? "not-allowed" : "pointer", alignSelf: "flex-start",
                opacity: loading ? 0.6 : 1, transition: "opacity 0.15s"
              }}>
                {loading ? "Sending..." : "Submit Enterprise Enquiry"}
              </button>

              <p style={{ fontSize: 11, color: "#9ca3af", lineHeight: 1.6 }}>
                By submitting, you agree to be contacted regarding your enquiry. See our{" "}
                <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Privacy Policy</a> for details.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout { flex-direction: column !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: 12, fontWeight: 500, color: "#374151", letterSpacing: "0.01em"
};

const inputStyle: React.CSSProperties = {
  padding: "10px 14px", borderRadius: 8, border: "1px solid #e5e7eb",
  fontSize: 14, color: "#111", outline: "none", width: "100%",
  boxSizing: "border-box", backgroundColor: "#fff",
  fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
};

function Field({ label, name, type, placeholder, value, onChange, required }: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={labelStyle}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} required={required} value={value} onChange={onChange} style={inputStyle} />
    </div>
  );
}
