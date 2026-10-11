import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import SiteFooter from "./SiteFooter";

/** Layout for every page other than the home page: breadcrumbs, content, footer. */
export default function PageShell({ crumbs, children, wide = false }: { crumbs: Crumb[]; children: ReactNode; wide?: boolean }) {
  return (
    <>
      <main id="main" className={`mx-auto w-full flex-1 px-4 py-10 sm:px-6 lg:py-16 ${wide ? "max-w-6xl" : "max-w-3xl"}`}>
        <Breadcrumbs items={crumbs} />
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
