/** Contact form copy. Passed as props so the Arabic page can reuse the same form. */
export type FormText = {
  name: string;
  contact: string;
  contactHint: string;
  need: string;
  needPlaceholder: string;
  needs: string[];
  message: string;
  messagePlaceholder: string;
  budget: string;
  budgetOptional: string;
  budgetPlaceholder: string;
  budgets: string[];
  submit: string;
  sending: string;
  microcopy: string;
  success: string;
  errorGeneric: string;
  errorFallback: string;
  errorTooSoon: string;
  invalidName: string;
  invalidContact: string;
  invalidNeed: string;
  invalidMessage: string;
};

export const formTextEn: FormText = {
  name: "Name",
  contact: "WhatsApp or email",
  contactHint: "Whichever you'd like me to reply on.",
  need: "What do you need?",
  needPlaceholder: "Choose one…",
  needs: [
    "Billing / collections system",
    "Website or web app",
    "Marketing / ads",
    "Support & maintenance",
    "Social media growth",
    "Not sure yet",
  ],
  message: "Tell me about your business",
  messagePlaceholder: "What's going wrong, and what would “fixed” look like?",
  budget: "Budget",
  budgetOptional: "(optional)",
  budgetPlaceholder: "Prefer not to say",
  budgets: ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000+", "Not sure"],
  submit: "Send message",
  sending: "Sending…",
  microcopy: "No spam. I reply personally within 24 hours.",
  success: "Sent. Thanks! Taking you to the confirmation page…",
  errorGeneric: "Your message didn't go through.",
  errorFallback: "Please try again, or message me directly on WhatsApp or by email:",
  errorTooSoon: "You just sent a message. Please wait a minute before sending another, or message me on WhatsApp.",
  invalidName: "Please enter your name.",
  invalidContact: "Enter a WhatsApp number (with country code) or an email address.",
  invalidNeed: "Choose what you need, or “Not sure yet”.",
  invalidMessage: "Tell me a little about your business (at least 10 characters).",
};
