"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = ["Solutions", "Platform", "For Institutions", "About Us"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb",
      height: 60, display: "flex", alignItems: "center"
    }}>
      <div style={{
        maxWidth: 1280, width: "100%", margin: "0 auto",
        padding: "0 32px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "100%"
      }}>
        {/* Logo */}
        <Link href="/" aria-label="Osmium AI Home" style={{
          display: "flex", alignItems: "center", flexShrink: 0,
          fontSize: 20, fontWeight: 700, color: "#000", textDecoration: "none", letterSpacing: "-0.02em"
        }}>
          Osmium AI
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4, height: "100%" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link key={link} href="#" className="nav-link" style={{
              padding: "8px 16px", fontSize: 14, fontWeight: 500,
              color: "#374151", textDecoration: "none", borderRadius: 6,
              transition: "color 0.15s"
            }}>
              {link}
            </Link>
          ))}
        </nav>

        {/* Right button */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="#contact" className="btn-dark" style={{
            padding: "8px 18px", fontSize: 14, fontWeight: 500,
            borderRadius: 999, backgroundColor: "#000", color: "#fff",
            textDecoration: "none", display: "flex", alignItems: "center", gap: 4,
            transition: "background 0.15s"
          }}>
            Get Osmium
          </Link>

          {/* Mobile hamburger */}
          <button
            style={{
              padding: 8, borderRadius: 999, border: "none",
              backgroundColor: "transparent", cursor: "pointer", display: "none"
            }}
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen
                ? <path d="M4 4l12 12M16 4L4 16" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                : <path d="M3 6h14M3 10h14M3 14h14" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: "absolute", top: 60, left: 0, right: 0,
          backgroundColor: "#fff", borderTop: "1px solid #e5e7eb",
          padding: 24, zIndex: 50
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {navLinks.map((link) => (
              <li key={link}>
                <button style={{ fontSize: 20, fontWeight: 500, background: "none", border: "none", cursor: "pointer", textAlign: "left", width: "100%" }}>
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 24 }}>
            <Link href="#contact" style={{ padding: "8px 18px", fontSize: 14, fontWeight: 500, borderRadius: 999, backgroundColor: "#000", color: "#fff", textDecoration: "none" }}>
              Get Osmium
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) { .hidden-mobile { display: none !important; } }
        @media (max-width: 768px) { .mobile-menu-btn { display: flex !important; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </header>
  );
}
