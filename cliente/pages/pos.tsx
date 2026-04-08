"use client"

/* Titularidad del cliente: este archivo contiene la composición y el contenido del sitio de Donovan Riaño.
 * Las bases importadas desde `agency/` y `terceros/` conservan su licencia o cesión original.
 */
import Link from "next/link"
import { motion } from "framer-motion"
import { ReceiptText, Users, Building2, FileSpreadsheet, BarChart3, ShieldCheck, WifiOff, ArrowRight } from "lucide-react"

import { Navigation } from "@/agency/components/sections/navigation"
import { Footer } from "@/agency/components/sections/footer"
import { KdsPanel } from "@/agency/components/sections/kds-panel"
import { Badge } from "@/agency/components/ui/badge"
import { Button } from "@/agency/components/ui/button"
import { Card } from "@/agency/components/ui/card"
import { WhatsAppCTAButton } from "@/terceros/components/ui/whatsapp-cta"
import { useLocale } from "@/agency/components/locale-provider"

/* Página de producto operativo: mezcla narrativa comercial del cliente con UI reusable de marketing y decisión. */
const copyByLocale = {
  es: {
    badge: "🧾 Punto de venta",
    title: "Punto de venta operativo que sí habla con tu sitio y tu app cliente",
    description: "Pedidos, empleados, sucursales, inventario, métricas e higiene, todo conectado.",
    dailyOpsTitle: "Operación diaria",
    advancedTitle: "Gestión avanzada",
    metricsTitle: "Métricas e higiene",
    mlTitle: "Machine Learning en tu punto de venta: tu copiloto de decisiones",
    mlDescription:
      "Machine Learning es una capa de inteligencia que aprende de tu historial de ventas, inventario, horarios y comportamiento de clientes. No reemplaza a tu equipo: te sugiere dónde ajustar para mejorar números en la operación diaria.",
    mlItems: [
      "Detecta patrones entre líneas: horas pico reales, productos que rotan mejor y caídas de demanda.",
      "Proyecta ventas e inventario para que compres mejor y reduzcas faltantes o mermas.",
      "Te ayuda a tomar decisiones con datos, como si tuvieras un copiloto operando contigo.",
    ],
    finalModules: ["Multi-sucursal conectada", "Exportación lista para reportes", "Cumplimiento sanitario", "Operación offline + sincronización"],
    cta: "Hablar por WhatsApp",
    secondary: "Ver planes y precios",
  },
  en: {
    badge: "🧾 Point of sale",
    title: "Operational POS that actually speaks to your website and client app",
    description: "Orders, employees, locations, inventory, metrics, and hygiene all connected.",
    dailyOpsTitle: "Daily operations",
    advancedTitle: "Advanced management",
    metricsTitle: "Metrics and hygiene",
    mlTitle: "Machine Learning in your POS: your decision co-pilot",
    mlDescription:
      "Machine Learning is an intelligence layer that learns from your sales history, inventory, schedules, and customer behavior. It does not replace your team: it suggests where to adjust to improve day-to-day results.",
    mlItems: [
      "Detects patterns across lines: true peak hours, top-rotating products, and demand drops.",
      "Projects sales and inventory so you can buy better and reduce shortages or waste.",
      "Helps you make data-driven decisions, as if you had a co-pilot working with you.",
    ],
    finalModules: ["Multi-location connected", "Export ready for reports", "Sanitary compliance", "Offline operation + sync"],
    cta: "Talk on WhatsApp",
    secondary: "See plans and pricing",
  },
  pt: {
    badge: "🧾 Ponto de venda",
    title: "Ponto de venda operacional que fala com seu site e seu app do cliente",
    description: "Pedidos, funcionários, unidades, estoque, métricas e higiene, tudo conectado.",
    dailyOpsTitle: "Operação diária",
    advancedTitle: "Gestão avançada",
    metricsTitle: "Métricas e higiene",
    mlTitle: "Machine Learning no seu PDV: seu copiloto de decisões",
    mlDescription:
      "Machine Learning é uma camada de inteligência que aprende com seu histórico de vendas, estoque, horários e comportamento dos clientes. Não substitui sua equipe: sugere onde ajustar para melhorar os números no dia a dia.",
    mlItems: [
      "Detecta padrões: horários de pico reais, produtos que giram melhor e quedas de demanda.",
      "Projeta vendas e estoque para comprar melhor e reduzir faltas ou desperdícios.",
      "Ajuda você a decidir com dados, como se tivesse um copiloto trabalhando junto.",
    ],
    finalModules: ["Múltiplas unidades conectadas", "Exportação pronta para relatórios", "Conformidade sanitária", "Operação offline + sincronização"],
    cta: "Falar no WhatsApp",
    secondary: "Ver planos e preços",
  },
  fr: {
    badge: "🧾 Point de vente",
    title: "Un POS opérationnel qui parle à votre site et à votre app client",
    description: "Commandes, employés, sites, stock, métriques et hygiène, tout est connecté.",
    dailyOpsTitle: "Opérations quotidiennes",
    advancedTitle: "Gestion avancée",
    metricsTitle: "Métriques et hygiène",
    mlTitle: "Machine Learning dans votre POS: votre copilote de décision",
    mlDescription:
      "Le Machine Learning est une couche d’intelligence qui apprend de votre historique de ventes, de stock, d’horaires et du comportement client. Il ne remplace pas votre équipe: il suggère où ajuster pour améliorer les résultats du quotidien.",
    mlItems: [
      "Détecte les tendances: vraies heures de pointe, produits qui tournent le mieux et baisses de demande.",
      "Projette les ventes et le stock pour mieux acheter et réduire les ruptures ou le gaspillage.",
      "Vous aide à décider avec les données, comme si vous aviez un copilote à vos côtés.",
    ],
    finalModules: ["Multi-sites connectés", "Export prêt pour les rapports", "Conformité sanitaire", "Fonctionnement hors ligne + synchro"],
    cta: "Parler sur WhatsApp",
    secondary: "Voir les offres",
  },
} as const

const dailyOpsIcons = [ReceiptText]
const advancedIcons = [Users]
const metricsIcons = [BarChart3]

export default function PosPage() {
  const { locale } = useLocale()
  const copy = copyByLocale[locale]

  const dailyOps = [
    locale === "es"
      ? "Toma de pedidos con roles por equipo (caja, cocina, admin)."
      : locale === "fr"
        ? "Prise de commandes avec rôles par équipe (caisse, cuisine, admin)."
        : locale === "pt"
          ? "Registro de pedidos com papéis por equipe (caixa, cozinha, admin)."
          : "Order taking with team roles (cashier, kitchen, admin).",
    locale === "es"
      ? "Inventario con alertas de stock mínimo para evitar quiebres."
      : locale === "fr"
        ? "Inventaire avec alertes de stock minimum pour éviter les ruptures."
        : locale === "pt"
          ? "Estoque com alertas de nível mínimo para evitar rupturas."
          : "Inventory with minimum stock alerts to avoid shortages.",
    locale === "es"
      ? "Flujo conectado con app cliente para reservas, IDs y pedidos."
      : locale === "fr"
        ? "Flux connecté à l’app client pour les réservations, ID et commandes."
        : locale === "pt"
          ? "Fluxo conectado com app do cliente para reservas, IDs e pedidos."
          : "Flow connected to the client app for reservations, IDs, and orders.",
    locale === "es"
      ? "Escaneo inteligente de QR (reserva, pedido o lealtad) y búsqueda rápida."
      : locale === "fr"
        ? "Scan QR intelligent (réservation, commande ou fidélité) et recherche rapide."
        : locale === "pt"
          ? "Leitura inteligente de QR (reserva, pedido ou fidelidade) e busca rápida."
          : "Smart QR scanning (reservation, order, or loyalty) and fast search.",
  ]

  const advancedManagement = [
    locale === "es"
      ? "Empleados y socios: información, pagos, vacaciones y vistas por rol."
      : locale === "fr"
        ? "Employés et associés: informations, paiements, vacances et vues par rôle."
        : locale === "pt"
          ? "Funcionários e sócios: informações, pagamentos, férias e visões por perfil."
          : "Employees and partners: info, pay, vacations, and role-based views.",
    locale === "es"
      ? "Sucursales: ventas, inventario y clientes por cada ubicación."
      : locale === "fr"
        ? "Succursales: ventes, stock et clients par emplacement."
        : locale === "pt"
          ? "Unidades: vendas, estoque e clientes por local."
          : "Locations: sales, inventory, and customers per site.",
    locale === "es"
      ? "Filtros y ordenaciones inteligentes para encontrar y extraer información más rápido."
      : locale === "fr"
        ? "Filtres et tris intelligents pour trouver et extraire l’information plus vite."
        : locale === "pt"
          ? "Filtros e ordenações inteligentes para encontrar e extrair informações mais rápido."
          : "Smart filters and sorting to find and export info faster.",
    locale === "es"
      ? "Pagos a proveedores y control operativo de nómina."
      : locale === "fr"
        ? "Paiements fournisseurs et contrôle opérationnel de la paie."
        : locale === "pt"
          ? "Pagamentos a fornecedores e controle operacional da folha."
          : "Vendor payments and payroll operations control.",
    locale === "es"
      ? "Exportación de datos a CSV/Excel para control y reportes."
      : locale === "fr"
        ? "Export des données vers CSV/Excel pour contrôle et rapports."
        : locale === "pt"
          ? "Exportação de dados para CSV/Excel para controle e relatórios."
          : "Export to CSV/Excel for control and reporting.",
  ]

  const metricsAndHygiene = [
    locale === "es"
      ? "Dashboards con machine learning: ventas, productos, horas pico y mejores clientes."
      : locale === "fr"
        ? "Tableaux de bord avec machine learning: ventes, produits, heures de pointe et meilleurs clients."
        : locale === "pt"
          ? "Dashboards com machine learning: vendas, produtos, horários de pico e melhores clientes."
          : "Machine-learning dashboards: sales, products, peak times, and best customers.",
    locale === "es"
      ? "Forecasting de inventario y análisis de tiempos de preparación/rotación."
      : locale === "fr"
        ? "Prévisions de stock et analyse des temps de préparation/rotation."
        : locale === "pt"
          ? "Previsão de estoque e análise de tempos de preparo/rotação."
          : "Inventory forecasting and prep/turnover time analysis.",
    locale === "es"
      ? "Panel sanitario: limpieza, plagas, temperaturas, caducidades e incidentes (tipo COFEPRIS/FDA/ANVISA)."
      : locale === "fr"
        ? "Panneau sanitaire: nettoyage, nuisibles, températures, dates de péremption et incidents (type COFEPRIS/FDA/ANVISA)."
        : locale === "pt"
          ? "Painel sanitário: limpeza, pragas, temperaturas, validade e incidentes (tipo COFEPRIS/FDA/ANVISA)."
          : "Sanitary panel: cleaning, pests, temperatures, expiry, and incidents (COFEPRIS/FDA/ANVISA style).",
    locale === "es"
      ? "Exportación de auditorías para inspecciones y revisiones internas."
      : locale === "fr"
        ? "Export des audits pour inspections et revues internes."
        : locale === "pt"
          ? "Exportação de auditorias para inspeções e revisões internas."
          : "Audit exports for inspections and internal reviews.",
    locale === "es"
      ? "Métricas de comportamiento sobre qué partes del sitio se consultan más."
      : locale === "fr"
        ? "Métriques de comportement sur les parties du site les plus consultées."
        : locale === "pt"
          ? "Métricas de comportamento sobre quais partes do site são mais consultadas."
          : "Behavior metrics on which parts of the site are viewed most.",
    locale === "es"
      ? "Modo offline: sigue operando sin internet y sincroniza al volver la conexión."
      : locale === "fr"
        ? "Mode hors ligne: continue de fonctionner sans internet et synchronise au retour."
        : locale === "pt"
          ? "Modo offline: continua operando sem internet e sincroniza quando a conexão volta."
          : "Offline mode: keeps working without internet and syncs when the connection returns.",
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-4xl">
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">{copy.badge}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-balance">{copy.title}</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">{copy.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35 }} whileHover={{ y: -4 }}>
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <ReceiptText className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">{copy.dailyOpsTitle}</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {dailyOps.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: 0.06 }} whileHover={{ y: -4 }}>
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <Users className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">{copy.advancedTitle}</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {advancedManagement.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: 0.12 }} whileHover={{ y: -4 }}>
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <BarChart3 className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">{copy.metricsTitle}</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {metricsAndHygiene.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      <KdsPanel />

      <section className="container mx-auto px-4 lg:px-8 pb-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.35 }}>
          <Card className="p-6 md:p-8 border-2 border-primary/30 bg-primary/10">
            <h2 className="text-xl md:text-2xl font-bold mb-3">{copy.mlTitle}</h2>
            <p className="text-sm md:text-base text-muted-foreground">{copy.mlDescription}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              {copy.mlItems.map((item) => (
                <li className="flex items-start gap-2" key={item}>
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-14">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.35 }}>
          <Card className="p-6 md:p-8 border-2 border-border bg-card/85">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                {copy.finalModules[0]}
              </span>
              <span className="inline-flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-primary" />
                {copy.finalModules[1]}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                {copy.finalModules[2]}
              </span>
              <span className="inline-flex items-center gap-2">
                <WifiOff className="h-4 w-4 text-primary" />
                {copy.finalModules[3]}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppCTAButton
                href="https://wa.me/525512291607?text=Hola%2C%20quiero%20conocer%20el%20m%C3%B3dulo%20de%20Punto%20de%20venta%20de%20Xoco%20Suite"
                label={copy.cta}
                className="font-semibold"
              />
              <Button asChild variant="outline" className="rounded-xl border-primary/35 text-primary hover:bg-primary/10 font-semibold">
                <Link href="/prices">
                  {copy.secondary} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
