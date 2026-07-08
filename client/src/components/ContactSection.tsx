/**
 * BRASO TASTE — Contact Section
 * Elegant contact form on dark blue background
 * WhatsApp integration + form submission
 */

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Mail, Instagram, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const eventTypes = [
  "Seleção de Degustação Braso",
  "Celebração Braso",
  "Gosto Pessoal Braso",
  "Da Anatomia à Brasa",
  "Brunch Braso Taste",
  "Hambúrguer da Braso House",
  "Outro",
];

export default function ContactSection() {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    date: "",
    guests: "",
    eventType: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    [formRef, infoRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.eventType) {
      toast.error("Por favor, preencha os campos obrigatórios.");
      return;
    }

    setLoading(true);

    // Build WhatsApp message
    const msg = `Olá! Gostaria de solicitar um orçamento para a Braso Taste.

*Nome:* ${form.name}
*Telefone:* ${form.phone}
*E-mail:* ${form.email}
*Cidade:* ${form.city}
*Data do evento:* ${form.date}
*Número de convidados:* ${form.guests}
*Tipo de experiência:* ${form.eventType}
*Mensagem:* ${form.message}`;

    const waUrl = `https://wa.me/5521974064098?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setLoading(false);
      toast.success("Redirecionando para o WhatsApp...", {
        description: "Sua solicitação será enviada diretamente ao Chef Fabio.",
      });
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 800);
    }, 600);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(226,189,124,0.25)",
    padding: "0.75rem 0",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.88rem",
    color: "#FAF6F1",
    outline: "none",
    transition: "border-color 0.25s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "rgba(226,189,124,0.7)",
    display: "block",
    marginBottom: "0.25rem",
  };

  return (
    <section
      id="contato"
      style={{
        background: "#2A4069",
        padding: "8rem 0",
      }}
    >
      <div className="container">
        <div
          className="grid gap-16"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          }}
        >
          {/* Info column */}
          <div ref={infoRef} className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-divider" />
              <span className="section-label">Contato</span>
            </div>

            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                color: "#FAF6F1",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Vamos criar sua{" "}
              <span style={{ color: "#E1BD7E", fontWeight: 700 }}>
                experiência
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "rgba(250,246,241,0.7)",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              Preencha o formulário ao lado ou entre em contato diretamente. O Chef Fabio responderá pessoalmente para entender sua visão e criar uma experiência única.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <a
                href="https://wa.me/5521974064098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(226,189,124,0.1)",
                    border: "1px solid rgba(226,189,124,0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.25s ease",
                  }}
                >
                  <MessageCircle size={18} color="#E1BD7E" />
                </div>
                <div>
                  <p style={{ ...labelStyle, marginBottom: "0.1rem" }}>WhatsApp</p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.9rem",
                      color: "#FAF6F1",
                      fontWeight: 400,
                    }}
                  >
                    (21) 97406-4098
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/brasotaste"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(226,189,124,0.1)",
                    border: "1px solid rgba(226,189,124,0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Instagram size={18} color="#E1BD7E" />
                </div>
                <div>
                  <p style={{ ...labelStyle, marginBottom: "0.1rem" }}>Instagram</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", color: "#FAF6F1", fontWeight: 400 }}>
                    @brasotaste
                  </p>
                </div>
              </a>

              <a
                href="mailto:contato@brasotaste.com.br"
                className="flex items-center gap-4"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(226,189,124,0.1)",
                    border: "1px solid rgba(226,189,124,0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} color="#E1BD7E" />
                </div>
                <div>
                  <p style={{ ...labelStyle, marginBottom: "0.1rem" }}>E-mail</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", color: "#FAF6F1", fontWeight: 400 }}>
                    contato@brasotaste.com.br
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(226,189,124,0.1)",
                    border: "1px solid rgba(226,189,124,0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} color="#E1BD7E" />
                </div>
                <div>
                  <p style={{ ...labelStyle, marginBottom: "0.1rem" }}>Atendimento</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", color: "#FAF6F1", fontWeight: 400 }}>
                    Rio de Janeiro e região
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div ref={formRef} className="reveal-on-scroll delay-200">
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(226,189,124,0.12)",
                  padding: "2.5rem",
                  borderRadius: "2px",
                }}
              >
                <div
                  className="grid gap-6"
                  style={{ gridTemplateColumns: "1fr 1fr" }}
                >
                  {/* Name */}
                  <div className="col-span-2 sm:col-span-1">
                    <label style={labelStyle}>Nome *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      style={inputStyle}
                      required
                      onFocus={(e) => { e.target.style.borderBottomColor = "#E1BD7E"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(226,189,124,0.25)"; }}
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-span-2 sm:col-span-1">
                    <label style={labelStyle}>Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(21) 99999-9999"
                      style={inputStyle}
                      required
                      onFocus={(e) => { e.target.style.borderBottomColor = "#E1BD7E"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(226,189,124,0.25)"; }}
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-2 sm:col-span-1">
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderBottomColor = "#E1BD7E"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(226,189,124,0.25)"; }}
                    />
                  </div>

                  {/* City */}
                  <div className="col-span-2 sm:col-span-1">
                    <label style={labelStyle}>Cidade</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderBottomColor = "#E1BD7E"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(226,189,124,0.25)"; }}
                    />
                  </div>

                  {/* Date */}
                  <div className="col-span-2 sm:col-span-1">
                    <label style={labelStyle}>Data do Evento</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        colorScheme: "dark",
                      }}
                      onFocus={(e) => { e.target.style.borderBottomColor = "#E1BD7E"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(226,189,124,0.25)"; }}
                    />
                  </div>

                  {/* Guests */}
                  <div className="col-span-2 sm:col-span-1">
                    <label style={labelStyle}>Número de Convidados</label>
                    <input
                      type="number"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      placeholder="Ex: 20"
                      min="1"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderBottomColor = "#E1BD7E"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(226,189,124,0.25)"; }}
                    />
                  </div>

                  {/* Event type */}
                  <div className="col-span-2">
                    <label style={labelStyle}>Tipo de Experiência *</label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      required
                      style={{
                        ...inputStyle,
                        background: "rgba(42,64,105,0.5)",
                        padding: "0.75rem 0.5rem",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => { e.target.style.borderBottomColor = "#E1BD7E"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(226,189,124,0.25)"; }}
                    >
                      <option value="" disabled style={{ background: "#2A4069" }}>
                        Selecione uma experiência
                      </option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t} style={{ background: "#2A4069" }}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="col-span-2">
                    <label style={labelStyle}>Mensagem</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Conte-nos mais sobre seu evento, expectativas e detalhes especiais..."
                      rows={4}
                      style={{
                        ...inputStyle,
                        resize: "none",
                        borderBottom: "1px solid rgba(226,189,124,0.25)",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                      onFocus={(e) => { e.target.style.borderBottomColor = "#E1BD7E"; }}
                      onBlur={(e) => { e.target.style.borderBottomColor = "rgba(226,189,124,0.25)"; }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full justify-center"
                    style={{
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? (
                      <>
                        <div
                          style={{
                            width: "14px",
                            height: "14px",
                            border: "2px solid rgba(26,26,26,0.3)",
                            borderTop: "2px solid #1A1A1A",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Solicitar Orçamento
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.65rem",
                      color: "rgba(250,246,241,0.35)",
                      textAlign: "center",
                      marginTop: "1rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Você será redirecionado para o WhatsApp
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7) sepia(1) saturate(2) hue-rotate(5deg);
          cursor: pointer;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(250,246,241,0.3);
          font-size: 0.82rem;
        }
        select option {
          background: #2A4069;
          color: #FAF6F1;
        }
      `}</style>
    </section>
  );
}
