import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const comparisonData = [
  {
    feature: "Comisión promedio",
    credit: "2.5-3.5%",
    bank: "1-2%",
    crypto: "0.3-1%",
    cryptoHighlight: true,
  },
  {
    feature: "Liquidación",
    credit: "24-48 horas",
    bank: "Inmediato-24h",
    crypto: "Segundos (Lightning) - 2 min (EVM)",
    cryptoHighlight: true,
  },
  {
    feature: "Contracargos",
    credit: "Sí (riesgo)",
    bank: "No",
    crypto: "No",
    cryptoHighlight: false,
  },
  {
    feature: "Alcance",
    credit: "Limitado",
    bank: "Limitado",
    crypto: "Global sin fronteras",
    cryptoHighlight: true,
  },
  {
    feature: "Cuenta bancaria",
    credit: "Requerida",
    bank: "Requerida",
    crypto: "No requerida",
    cryptoHighlight: true,
  },
]

export default function CryptoComparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            Comparativa
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Crypto vs Métodos Tradicionales</h2>
            <p className="text-lg text-gray-600">
              Descubre por qué las stablecoins son el futuro de los pagos en restaurantes
            </p>
          </div>
        </div>

        <div className="hidden md:block border border-gray-200 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-white">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold text-gray-500">Característica</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-500">Tarjeta de Crédito</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-500">Transferencia</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-500">Crypto (Xoco Suite)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors hover:bg-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="p-4 font-medium text-gray-700">{row.feature}</td>
                    <td className="p-4 text-gray-600">{row.credit}</td>
                    <td className="p-4 text-gray-600">{row.bank}</td>
                    <td
                      className={`p-4 text-gray-600 ${
                        row.cryptoHighlight
                          ? "font-semibold bg-gradient-to-br from-orange-50 to-amber-50 text-gray-900"
                          : ""
                      }`}
                    >
                      {row.cryptoHighlight && (
                        <span className="inline-flex items-center gap-2">
                          <CheckCircle className="text-green-600" size={18} />
                          <span>{row.crypto}</span>
                        </span>
                      )}
                      {!row.cryptoHighlight && <span>{row.crypto}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div
              key={row.feature}
              className={`rounded-3xl border border-gray-200 px-5 py-6 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } shadow-sm`}
            >
              <p className="text-sm text-gray-500">Característica</p>
              <p className="text-xl font-semibold text-gray-900 mb-4">{row.feature}</p>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Tarjeta de Crédito</span>
                  <span className="font-semibold text-gray-900">{row.credit}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transferencia</span>
                  <span className="font-semibold text-gray-900">{row.bank}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Crypto (Xoco Suite)</span>
                  <span
                    className={`inline-flex items-center gap-2 ${
                      row.cryptoHighlight ? "font-semibold text-gray-900" : "text-gray-800"
                    }`}
                  >
                    {row.cryptoHighlight && <CheckCircle className="text-green-600" size={18} />}
                    <span>{row.crypto}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-xl font-semibold text-gray-800">
            Reduce tus comisiones hasta 80% aceptando stablecoins
          </p>
          <Button
            asChild
            className="mx-auto bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <a href="#precios">Calcula tu Ahorro</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
