import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acerca de nosotros",
  description:
    "Somos el equipo detrás de Xoco Suite y Criptec: seguimos las redes, unimos beacons físicos y digitales, y trabajamos para que los restaurantes crypto-ready puedan operar con confianza.",
}

const socialHighlights = [
  {
    title: "Twitter @criptecmxllc",
    description:
      "Actualizamos a la comunidad con noticias, lanzamientos y enlaces directos hacia `beacons.ai/criptecmx`, el hub que concentra cursos, recursos y consultas.",
  },
  {
    title: "Presencia multicanal",
    description:
      "Telegram, GitHub y LinkedIn complementan la comunicación en la misma página de Beacons, conectando soporte, documentación y alianzas con el resto del equipo.",
  },
  {
    title: "Link-in-bio inteligente",
    description:
      "`beacons.ai/criptecmx` agrupa cursos, eBooks y actualizaciones en un solo enlace para que los restaurantes siempre sepan dónde buscar el próximo paso.",
  },
]

const hubNotes = [
  "Personalización: el perfil se adapta al branding de cada cliente y prepara upgrades o Creator Plus para ventas prioritarias sin fricciones.",
  "Engagement: el hub orquesta auto respuestas, newsletters y analíticas en tiempo real para que los chefs y managers estén informados sin depender de un algoritmo.",
  "Monetización: cursos, eBooks y consultorías conviven en un checkout unificado que se alimenta de campañas y embudos inteligentes.",
]

export default function AcercaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-900 opacity-70" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6">
          <p className="text-xs uppercase tracking-[0.6em] text-amber-300">Acerca de nosotros</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Xoco Suite, Criptec y el ecosistema hibrido que conecta cocina y cripto</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            Somos un equipo entre Ciudad de México y Estados Unidos que construye pagos, compliance y consultoría para restaurantes que ya aceptan
            criptomonedas y buscan operar con confianza en múltiples mercados.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {socialHighlights.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Social</p>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-slate-100 shadow-[0_20px_60px_rgba(2,6,23,0.55)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Nuestro hub en Beacons</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">beacons.ai/criptecmx es el centro de operaciones</h2>
          <p className="mt-3 text-sm text-slate-300">
            Desde allí controlamos un “One supercharged creator hub”: personalizamos el link-in-bio, vendemos cursos/eBooks, automatizamos email marketing y mantenemos analytics y media kits.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            {hubNotes.map((note) => (
              <li key={note} className="rounded-2xl border border-white/5 bg-slate-900/40 px-4 py-3">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(2,6,23,0.55)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Beacons físicos</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Soporte en campo</h3>
          <p className="mt-3 text-sm text-slate-300">
            Instalamos beacons en Ciudad de México, Querétaro y Miami. Cada unidad monitorea transacciones, tiempos de confirmación y salud del POS, y dispara alertas hacia el panel de
            cumplimiento con las reglas de COFEPRIS, FDA y ANVISA para mantener tu restaurante siempre listo.
          </p>
        </div>
      </section>
    </main>
  )
}
