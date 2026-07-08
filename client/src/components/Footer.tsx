/**
 * BRASO TASTE — Footer
 * Dark background with flame icon, contacts and copyright
 */

import { MessageCircle, Instagram, Mail, Flame } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Chef", href: "#chef" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#0A1218",
        borderTop: "1px solid rgba(226,189,124,0.1)",
        padding: "5rem 0 2.5rem",
      }}
    >
      <div className="container">
        <div
          className="grid gap-12 mb-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          }}
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <img
              src="/images/braso-logo.svg"
              alt="Braso Taste"
              style={{
                height: "60px",
                width: "auto",
                marginBottom: "1.25rem",
              }}
            />


            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 300,
                color: "rgba(250,246,241,0.55)",
                lineHeight: 1.7,
                maxWidth: "260px",
              }}
            >
              Experiências gastronômicas premium que unem técnica, fogo, hospitalidade e alta gastronomia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E1BD7E",
                marginBottom: "1.5rem",
              }}
            >
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    color: "rgba(250,246,241,0.55)",
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#E1BD7E";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "rgba(250,246,241,0.55)";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Areas Served */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E1BD7E",
                marginBottom: "1.5rem",
              }}
            >
              Áreas Atendidas
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Araruama", slug: "araruama" },
                { label: "Cabo Frio", slug: "cabo-frio" },
                { label: "Saquarema", slug: "saquarema" },
                { label: "Búzios", slug: "buzios" },
                { label: "Rio das Ostras", slug: "rio-das-ostras" },
                { label: "Macaé", slug: "macae" },
                { label: "Nova Friburgo", slug: "nova-friburgo" },
              ].map((c) => (
                <a
                  key={c.slug}
                  href={`/atendemos/${c.slug}`}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    color: "rgba(250,246,241,0.55)",
                    textDecoration: "none",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#E1BD7E";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "rgba(250,246,241,0.55)";
                  }}
                >
                  {c.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E1BD7E",
                marginBottom: "1.5rem",
              }}
            >
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5521974064098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                style={{ textDecoration: "none" }}
              >
                <MessageCircle size={15} color="#E1BD7E" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    color: "rgba(250,246,241,0.55)",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#E1BD7E"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(250,246,241,0.55)"; }}
                >
                  (21) 97406-4098
                </span>
              </a>

              <a
                href="https://www.instagram.com/brasotaste"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                style={{ textDecoration: "none" }}
              >
                <Instagram size={15} color="#E1BD7E" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    color: "rgba(250,246,241,0.55)",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#E1BD7E"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(250,246,241,0.55)"; }}
                >
                  @brasotaste
                </span>
              </a>

              <a
                href="mailto:contato@brasotaste.com.br"
                className="flex items-center gap-3"
                style={{ textDecoration: "none" }}
              >
                <Mail size={15} color="#E1BD7E" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    color: "rgba(250,246,241,0.55)",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#E1BD7E"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(250,246,241,0.55)"; }}
                >
                  contato@brasotaste.com.br
                </span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E1BD7E",
                marginBottom: "1.5rem",
              }}
            >
              Empresa
            </h4>
            <div className="flex flex-col gap-3">
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "rgba(250,246,241,0.4)",
                  lineHeight: 1.6,
                }}
              >
                CNPJ: 60.333.080/0001-29
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "rgba(250,246,241,0.4)",
                  lineHeight: 1.6,
                }}
              >
                Rio de Janeiro, RJ — Brasil
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5521974064098?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uma%20experiência%20Braso%20Taste."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 inline-flex"
              style={{ padding: "0.65rem 1.25rem", fontSize: "0.68rem" }}
            >
              <MessageCircle size={13} />
              Solicitar no WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(226,189,124,0.08)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
            textAlign: "center",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              style={{
                width: "20px",
                height: "1px",
                background: "rgba(226,189,124,0.3)",
                display: "block",
              }}
            />
            <Flame size={14} color="rgba(226,189,124,0.5)" />
            <span
              style={{
                width: "20px",
                height: "1px",
                background: "rgba(226,189,124,0.3)",
                display: "block",
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 400,
              color: "rgba(250,246,241,0.3)",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} Braso Taste. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 300,
              color: "rgba(250,246,241,0.2)",
              letterSpacing: "0.05em",
            }}
          >
            Experiências gastronômicas premium conduzidas pelo Chef Fabio Tortelote
          </p>
        </div>
      </div>
    </footer>
  );
}
