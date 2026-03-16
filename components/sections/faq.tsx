import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Necesito conocimientos técnicos para aceptar crypto?",
    a: "No. Xoco Suite maneja toda la integración. Tu staff solo selecciona 'Pagar con Cripto' y el cliente escanea el QR. El POS confirma el pago automáticamente sin intervención técnica.",
  },
  {
    q: "¿Qué pasa si el precio del Bitcoin baja después del pago?",
    a: "Acepta stablecoins (USDC, USDT, DAI) que mantienen paridad 1:1 con el dólar. Cero volatilidad. Si aceptas Bitcoin o ETH, puedes configurar conversión automática a stablecoins o pesos en el Plan Enterprise.",
  },
  {
    q: "¿Los pagos crypto son legales en México?",
    a: "Sí. Las criptomonedas no son moneda de curso legal, pero pueden usarse como medio de pago entre privados bajo la Ley Fintech. Consulta con tu contador para tratamiento fiscal y declaración.",
  },
  {
    q: "¿Puedo convertir los crypto a pesos automáticamente?",
    a: "Sí, en el Plan Enterprise integramos conversión automática con exchanges mexicanos (Bitso) o internacionales (Binance, Coinbase) para liquidar a pesos mexicanos el mismo día.",
  },
  {
    q: "¿Qué comisiones cobra Xoco Suite por pagos crypto?",
    a: "Ninguna comisión adicional. Solo pagas la comisión de red (gas fees) que depende de la blockchain: ~$0.10-0.50 USD en Polygon, casi cero en Lightning Network. Mucho menos que el 2.5-3.5% de tarjetas.",
  },
  {
    q: "¿Qué wallets son compatibles?",
    a: "Más de 700 wallets a través de WalletConnect: MetaMask, Trust Wallet, Coinbase Wallet, Rainbow, Argent, Gnosis Safe. Para Lightning: Alby, Wallet of Satoshi, Phoenix, Blue Wallet.",
  },
  {
    q: "¿Qué pasa si el pago no se confirma?",
    a: "Las transacciones blockchain son irreversibles y se confirman en segundos/minutos. Si hay un problema (fondos insuficientes, red saturada), el POS muestra error inmediato y el cliente puede reintentar. Sin riesgo de pagos duplicados.",
  },
  {
    q: "¿Cómo funciona con delivery?",
    a: "El cliente hace el pedido desde la App Cliente Xoco, paga con crypto antes de confirmar, y recibe el ticket digital con hash de transacción como comprobante. El repartidor verifica el pedido ya pagado en el POS.",
  },
  {
    q: "¿Puedo aceptar solo stablecoins y no Bitcoin?",
    a: "Sí, totalmente configurable. Puedes habilitar solo USDC/USDT en Polygon (casi sin fees) y desactivar Bitcoin/ETH si prefieres evitar volatilidad.",
  },
  {
    q: "¿Necesito mi propia wallet o Xoco maneja los fondos?",
    a: "Tu decides. Opción 1: Non-custodial (tu wallet, tu control total). Opción 2: Custodial (Xoco maneja fondos temporalmente y deposita a tu cuenta). Recomendamos non-custodial para máxima seguridad.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Preguntas Frecuentes sobre Crypto</h2>
          <p className="text-lg text-gray-600">Todo lo que necesitas saber antes de empezar</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 border border-gray-100 rounded-3xl p-4 shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center space-y-3">
          <p className="text-xl font-semibold text-gray-800">¿Más preguntas?</p>
          <Button
            className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all"
            variant="outline"
          >
            Agenda una llamada con nuestro equipo
          </Button>
        </div>
      </div>
    </section>
  )
}
