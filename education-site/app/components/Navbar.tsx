"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "For Institutions", href: "/#for-institutions" },
  { label: "About Us", href: "https://www.navchetna.tech/about", external: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb",
      height: 60, display: "flex", alignItems: "center"
    }}>
      <div style={{
        maxWidth: 1280, width: "100%", margin: "0 auto",
        padding: "0 80px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "100%"
      }} className="navbar-inner">
        {/* Logo */}
        <Link href="/" aria-label="Osmium AI Home" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
          <Image src="/osmium34.svg" alt="Osmium AI" width={140} height={30} style={{ objectFit: "contain", height: 28, width: "auto" }} priority />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4, height: "100%" }} className="nav-desktop">
          {navLinks.map(({ label, href, external }) => {
            const active = !external && pathname === href;
            return external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="nav-link" style={{
                padding: "8px 14px", fontSize: 14, fontWeight: 500,
                color: "#374151", textDecoration: "none",
                borderRadius: 6, transition: "color 0.15s",
                backgroundColor: "transparent",
              }}>
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className="nav-link" style={{
                padding: "8px 14px", fontSize: 14, fontWeight: active ? 600 : 500,
                color: active ? "#000" : "#374151", textDecoration: "none",
                borderRadius: 6, transition: "color 0.15s",
                backgroundColor: active ? "#f3f4f6" : "transparent",
              }}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/#contact" className="btn-dark nav-cta" style={{
            padding: "8px 18px", fontSize: 14, fontWeight: 500,
            borderRadius: 999, backgroundColor: "#000", color: "#fff",
            textDecoration: "none", display: "flex", alignItems: "center",
            transition: "background 0.15s"
          }}>
            Get Osmium
          </Link>
          <button
            style={{ padding: 8, borderRadius: 999, border: "none", backgroundColor: "transparent", cursor: "pointer", display: "none" }}
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen
                ? <path d="M4 4l14 14M18 4L4 18" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                : <path d="M3 7h16M3 11h16M3 15h16" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
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
          padding: "24px 20px", zIndex: 50
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map(({ label, href, external }) => (
              <li key={href}>
                {external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{
                    display: "block", fontSize: 16, fontWeight: 500,
                    color: "#374151", textDecoration: "none",
                    padding: "12px 0", borderBottom: "1px solid #f3f4f6"
                  }}>
                    {label}
                  </a>
                ) : (
                  <Link href={href} onClick={() => setMobileOpen(false)} style={{
                    display: "block", fontSize: 16, fontWeight: 500,
                    color: "#374151", textDecoration: "none",
                    padding: "12px 0", borderBottom: "1px solid #f3f4f6"
                  }}>
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 20 }}>
            <Link href="/#contact" onClick={() => setMobileOpen(false)} style={{
              padding: "10px 24px", fontSize: 14, fontWeight: 500, borderRadius: 999,
              backgroundColor: "#000", color: "#fff", textDecoration: "none", display: "inline-flex"
            }}>
              Get Osmium
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) { .nav-desktop { display: none !important; } }
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          .navbar-inner { padding: 0 20px !important; }
          .nav-cta { display: none !important; }
        }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </header>
  );
}
