// Contact details and nav links, kept apart from content.ts so client
// components can import them without pulling content placeholders into JS.

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Shown next to every CTA. Only promise what you can keep. */
export const responseTime = "24 hours";

/** Prefilled WhatsApp message (the [my business] part is for the visitor to fill in). */
export const whatsappPrefill = "Hi Hadi, I saw your website and I'd like to talk about [my business]";

export const contact = {
  email: "se.hadimoustafa@gmail.com",
  instagram: "https://instagram.com/se.hadimoustafa",
  instagramHandle: "@se.hadimoustafa",
  instagramDM: "https://ig.me/m/se.hadimoustafa",
  whatsapp: "https://wa.me/96181277281",
  /** Primary CTA: WhatsApp with a prefilled message. */
  whatsappChat: `https://wa.me/96181277281?text=${encodeURIComponent(whatsappPrefill)}`,
  github: "https://github.com/hadi-moustafa",
  linkedin: "https://linkedin.com/in/hadi-moustafa-3a30b3363",
  phone: "+961 81 277 281",
};
