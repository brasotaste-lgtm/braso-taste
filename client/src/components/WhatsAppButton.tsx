/**
 * BRASO TASTE — WhatsApp Floating Button
 * Fixed bottom-right WhatsApp CTA
 */

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521974064098?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uma%20experiência%20Braso%20Taste."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 40,
        width: "56px",
        height: "56px",
        background: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(37,211,102,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={26} color="white" fill="white" />
    </a>
  );
}
