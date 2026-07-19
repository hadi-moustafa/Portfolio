import { contact } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line px-6 pt-12 pb-24">
      <div className="max-w-[1000px] mx-auto flex justify-between flex-wrap gap-5">
        <div>
          <a href={`mailto:${contact.email}`} className="mr-4.5 text-sm hover:text-amber">
            {contact.email}
          </a>
          <a href={contact.github} className="mr-4.5 text-sm hover:text-amber">
            GitHub
          </a>
          <a href={contact.linkedin} className="mr-4.5 text-sm hover:text-amber">
            LinkedIn
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-sm hover:text-amber">
            {contact.phone}
          </a>
        </div>
        <div className="font-mono text-xs text-ink-dim">// built by hand, not a template</div>
      </div>
    </footer>
  );
}
