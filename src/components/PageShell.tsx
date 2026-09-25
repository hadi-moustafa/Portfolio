import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import SiteFooter from "./SiteFooter";

/** Layout for every page other than the home page: breadcrumbs, content, footer. */
export default function PageShell({ crumbs, children }: { crumbs: Crumb[]; children: ReactNode }) {
  return (
    <>
      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:py-16">
        <Breadcrumbs items={crumbs} />
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
