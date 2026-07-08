/**
 * BRASO TASTE — Header Component
 * Design: Luxury Hospitality Editorial
 * Colors: #2A4069 (blue) | #E1BD7E (gold) | #FAF6F1 (offwhite)
 * Fixed header that shrinks on scroll
 */

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Chef", href: "#chef" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(15, 25, 35, 0.97)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(226,189,124,0.15)" : "none",
          padding: scrolled ? "0.75rem 0" : "1.5rem 0",
        }}
      >
        <div className="container flex items-center justify-between flex-wrap lg:flex-nowrap">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#inicio")}
            className="flex items-center gap-3 group"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <img
              src="/images/braso-logo.svg"
              alt="Braso Taste"
              style={{
                height: scrolled ? "80px" : "150px",
                width: "auto",
                transition: "height 0.4s ease",
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(250,246,241,0.85)",
                  transition: "color 0.25s ease",
                  padding: "0.25rem 0",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#E1BD7E";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(250,246,241,0.85)";
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end lg:justify-start">
            <a
              href="https://wa.me/5521974064098?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uma%20experiência%20Braso%20Taste."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden sm:inline-flex"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.68rem" }}
            >
              <MessageCircle size={14} />
              Solicitar
            </a>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#FAF6F1",
                padding: "0.25rem",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{
            background: "rgba(10, 18, 28, 0.98)",
            backdropFilter: "blur(16px)",
            paddingTop: scrolled ? "120px" : "200px",
          }}
        >
          <nav className="flex flex-col items-center gap-8 py-8">
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "rgba(250,246,241,0.9)",
                  transition: "color 0.25s ease",
                  animationDelay: `${i * 60}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#E1BD7E";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(250,246,241,0.9)";
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 mt-4">
            <a
              href="https://wa.me/5521974064098?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle size={16} />
              Solicitar Orçamento
            </a>
          </div>

          <div
            className="mt-auto pb-12 text-center"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "rgba(250,246,241,0.3)",
              textTransform: "uppercase",
            }}
          >
            @brasotaste
          </div>
        </div>
      )}
    </>
  );
}
