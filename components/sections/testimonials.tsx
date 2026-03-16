import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Desde que aceptamos USDC con Xoco Suite, nuestro ticket promedio subió 15%. Los turistas prefieren pagar con crypto y no preocuparse por el tipo de cambio.",
    author: "Carlos M.",
    role: "Dueño de Taquería",
    business: "La Roma CDMX",
    avatar: "/avatars/carlos.jpg",
    badge: "Cliente desde 2025",
  },
  {
    quote:
      "El panel COFEPRIS nos salvó en la última auditoría. Exportamos 6 meses de registros en 2 clics. Además, las comisiones de crypto son ridículamente bajas comparado con las terminales bancarias.",
    author: "Ana G.",
    role: "Gerente",
    business: "Restaurante de Sushi",
    avatar: "/avatars/ana.jpg",
    badge: "Early Adopter",
  },
  {
    quote:
      "La App Cliente eliminó las apps de terceros. Ahora recibimos pedidos directos con pago crypto instantáneo y no pagamos comisiones del 30%. ROI en 2 meses.",
    author: "Luis R.",
    role: "Propietario",
    business: "Café de Especialidad",
    avatar: "/avatars/luis.jpg",
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-gray-900">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-gray-600">Restaurantes que ya están aceptando crypto con Xoco Suite</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              {testimonial.badge && (
                <div className="absolute right-4 top-4 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs font-semibold text-orange-500">
                  {testimonial.badge}
                </div>
              )}
              <Quote size={32} className="text-orange-500 opacity-50" />
              <p className="mt-4 text-lg italic leading-relaxed text-gray-700">{testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white font-bold">
                  {getInitials(testimonial.author)}
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} · {testimonial.business}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
