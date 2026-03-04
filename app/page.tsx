import CryptoComparison from "@/components/sections/crypto-comparison"
import FAQ from "@/components/sections/faq"
import HowCryptoWorks from "@/components/sections/how-crypto-works"
import { Hero } from "@/components/sections/hero"
import Pricing from "@/components/sections/pricing"
import { ProductModules } from "@/components/sections/product-modules"
import { Security } from "@/components/sections/security"
import { Cofepris } from "@/components/sections/cofepris"
import { QRFlows } from "@/components/sections/qr-flows"
import { WhyComplete } from "@/components/sections/why-complete"
import Testimonials from "@/components/sections/testimonials"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
import { Navigation } from "@/components/sections/navigation"
import TrustBadges from "@/components/sections/trust-badges"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(2,6,23,0.55)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.6em] text-amber-300">Educación Cripto Certificada</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Componentes formativos ahora detrás del botón cursos</h2>
            <p className="mt-3 text-sm text-slate-300">
              Modos, talleres y certificaciones que antes vivían en esta página ahora se alojan dentro del botón Cursos del header, para que el contenido permanezca ordenado y fácil de ubicar.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-400">
              <span>Componentes: Fundamentos, Talleres y Certificaciones en vivo</span>
            </div>
            <div className="mt-8">
              <a
                href="/cursos"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                Ir a cursos
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(2,6,23,0.55)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.6em] text-amber-300">Lo que pasa en el Ecosistema</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Toda la actualidad en el botón de Noticias</h2>
            <p className="mt-3 text-sm text-slate-300">
              Las actualizaciones del ecosistema, alianzas y lanzamientos ya no ocupan este scroll: están dentro del botón Noticias del header, para mantener la home limpia pero con información a un clic.
            </p>
            <div className="mt-8">
              <a
                href="/noticias"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400 transition hover:border-emerald-300 hover:text-emerald-300"
              >
                Ver noticias
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        </div>
      </section>
      <TrustBadges />
      <WhyComplete />
      <HowCryptoWorks />
      <CryptoComparison />
      <ProductModules />
      <Pricing />
      <Testimonials />
      <Cofepris />
      <Security />
      <QRFlows />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
