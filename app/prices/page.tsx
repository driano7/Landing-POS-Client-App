"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Coins,
  CreditCard,
  Globe,
  Landmark,
  MessageCircle,
  QrCode,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Store,
  Wrench,
  XCircle,
} from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/sections/navigation"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"
import { useLocale } from "@/components/locale-provider"

type PlanFeature = {
  icon: LucideIcon
  text: string
  underline?: boolean
  underlinePart?: string
}

type BlokkoStatus = "none" | "addon" | "included"

type Plan = {
  name: string
  price: string
  subtitle: string
  support: string
  featured?: boolean
  blokkoStatus: BlokkoStatus
  blokkoBadge?: string
  features: PlanFeature[]
}

type ComparisonRow = {
  icon: LucideIcon
  title: string
  separated: string
  xoco: string
}

type PricesCopy = {
  heroTitle: string
  heroDescription: string
  badge: string
  modulesTitle: string
  contractNote: string
  blokkoBadge: string
  blokkoTitle: string
  blokkoDescription: string
  blokkoBenefits: string[]
  blokkoFooter: string
  operationalCostsTitle: string
  operationalCosts: {
    updatesLabel: string
    updatesText: string
    trainingOnsiteLabel: string
    trainingOnsiteText: string
    trainingVirtualLabel: string
    trainingVirtualText: string
    paymentNote: string
  }
  compareTitle: string
  compareDescription: string
  compareHeaders: {
    category: string
    others: string
    xoco: string
    mobileOthers: string
    mobileXoco: string
  }
  closingTitle: string
  closingDescription: string
  cta: string
  whatsapp: string
  planDetailButton: string
  plans: Plan[]
  blokkoChips: Array<{ icon: LucideIcon; emoji: string; label: string }>
  xocoSuiteModules: PlanFeature[]
  comparisonRows: ComparisonRow[]
}

const pricesCopyByLocale: Record<"es" | "en" | "pt" | "fr", PricesCopy> = {
  es: {
    heroTitle: "Planes y precios claros para tu restaurante",
    heroDescription:
      "Evita pagar 3 o 4 sistemas separados. Xoco Suite integra sitio web, app cliente, POS operativo, métricas avanzadas, panel sanitario y pagos en un solo lugar.",
    badge: "Enfoque LATAM: México, Brasil, Argentina, Perú y más.",
    modulesTitle: "Todo lo que incluye Xoco Suite en un solo plan",
    contractNote: "Todos los planes se contratan por 12 meses al iniciar.",
    blokkoBadge: "Se conecta a cualquier terminal. Blokko es opcional, no obligatorio.",
    blokkoTitle: "Un solo POS, múltiples formas de cobrar, sin dolores de cabeza.",
    blokkoDescription:
      "Puedes integrar Blokko de forma opcional en todos los planes. En Escala y Cadena suele funcionar mejor por volumen operativo y frecuencia de cobros.",
    blokkoBenefits: [
      "Acepta tarjetas, transferencias (SPEI/PIX) y cripto desde un solo flujo.",
      "Recibes moneda local (MXN, BRL, etc.) sin preocuparte por volatilidad.",
      "No necesitas saber de wallets o custodia; cobras como en cualquier terminal.",
    ],
    blokkoFooter:
      "Las comisiones de procesamiento las define Blokko.io directamente. Xoco Suite integra esta solución dentro de tu operación.",
    operationalCostsTitle: "Costos operativos (iguales en todos los planes)",
    operationalCosts: {
      updatesLabel: "Actualizaciones de software",
      updatesText: "$199 MXN por actualización, cada 3 meses.",
      trainingOnsiteLabel: "Capacitación presencial",
      trainingOnsiteText: "$999 MXN por visita.",
      trainingVirtualLabel: "Capacitación virtual",
      trainingVirtualText: "$699 MXN por sesión.",
      paymentNote: "Nota de pagos: Blokko.io define comisiones y tarifas por transacción. Xoco Suite se integra con Blokko como pieza de la solución.",
    },
    compareTitle: "¿Cuánto pagarías si contratas todo por separado?",
    compareDescription: "Resumen rápido: por separado pagas varias herramientas; con Xoco lo concentras en un solo lugar.",
    compareHeaders: {
      category: "Categoría",
      others: "Otras soluciones del mercado",
      xoco: "Con Xoco Suite",
      mobileOthers: "Otras soluciones",
      mobileXoco: "Con Xoco Suite",
    },
    closingTitle: "Una sola plataforma para operar mejor",
    closingDescription:
      "Con Xoco Suite tienes una sola plataforma, un solo soporte por WhatsApp y una vista unificada de tu negocio, sin tener que andar pegando sistemas de 3 o 4 proveedores diferentes.",
    cta: "Ver detalle de planes",
    whatsapp: "Hablar por WhatsApp",
    planDetailButton: "Hablar por WhatsApp",
    blokkoChips: [
      { icon: CreditCard, emoji: "💳", label: "Tarjetas" },
      { icon: Landmark, emoji: "🏦", label: "SPEI / PIX" },
      { icon: Coins, emoji: "🪙", label: "Cripto" },
      { icon: QrCode, emoji: "📱", label: "QR / cobro digital" },
    ],
    xocoSuiteModules: [
      { icon: Globe, text: "Sitio web profesional" },
      { icon: Smartphone, text: "App cliente" },
      { icon: Store, text: "POS operativo" },
      { icon: BarChart3, text: "Métricas avanzadas" },
      { icon: ShieldCheck, text: "Panel sanitario" },
      { icon: CreditCard, text: "Integración de pagos con Blokko" },
    ],
    plans: [
      {
        name: "Starter",
        price: "$199",
        subtitle: "Solo landing básica",
        support: "WhatsApp en horario comercial",
        blokkoStatus: "addon",
        blokkoBadge: "Opcional",
        features: [
          { icon: Globe, text: "Landing básica con menú estático o PDF." },
          { icon: Store, text: "POS básico: toma de orden y tickets." },
          { icon: Smartphone, text: "Acceso desde múltiples dispositivos para ver la landing desde cualquier pantalla." },
          { icon: ShieldCheck, text: "Accesos por rol limitado (admin y caja).", underline: true },
          {
            icon: XCircle,
            text: "Sin sitio bilingüe (español/inglés), sin App Cliente, sin reservas y sin edición de ticket antes del pago.",
            underline: true,
          },
          { icon: QrCode, text: "Sin métricas avanzadas, sin COFEPRIS, sin Machine Learning.", underline: true },
          { icon: CreditCard, text: "Blokko integrado para tarjetas, SPEI/PIX y cripto (opcional, se adapta mejor para tu negocio)." },
        ],
      },
      {
        name: "Emprende",
        price: "$499",
        subtitle: "Para restaurantes pequeños (1 sucursal)",
        support: "WhatsApp con mejor seguimiento",
        blokkoStatus: "addon",
        blokkoBadge: "Opcional",
        features: [
          { icon: Globe, text: "Sitio web completo bilingüe (español/inglés) con menú dinámico y secciones clave." },
          {
            icon: Store,
            text: "POS con inventario básico, alertas de stock, edición de ticket antes del pago, división de cuentas y recuperación/recreación de tickets en POS y App Cliente.",
          },
          { icon: Smartphone, text: "Acceso desde múltiples dispositivos para tu equipo y tus estaciones de trabajo." },
          { icon: ShieldCheck, text: "Roles múltiples: admin, caja y cocina." },
          { icon: QrCode, text: "Reservas y pedidos con QR + lealtad básica con PNG compatible.", underlinePart: "lealtad básica" },
          { icon: BarChart3, text: "Reportes simples de ventas (sin modelos de Machine Learning).", underlinePart: "(sin modelos de Machine Learning)." },
          { icon: CreditCard, text: "Blokko integrado para tarjetas, SPEI/PIX y cripto (opcional, se adapta mejor para tu negocio)." },
        ],
      },
      {
        name: "Escala",
        price: "$899",
        subtitle: "Para comercios medianos y hasta tres sucursales",
        support: "WhatsApp con respuesta más prioritaria",
        featured: true,
        blokkoStatus: "included",
        blokkoBadge: "Opcional (funciona mejor aquí)",
        features: [
          { icon: Globe, text: "Landing bilingüe (español/inglés) con secciones de eventos, video y galerías." },
          { icon: Smartphone, text: "Lealtad con Apple/Google Wallet + PNG compartible." },
          { icon: Smartphone, text: "Acceso desde múltiples dispositivos para operar en más de una terminal o sucursal." },
          { icon: BarChart3, text: "Métricas de consumo: visitas, frecuencia y ticket promedio." },
          {
            icon: Building2,
            text: "Gestión de empleados y hasta 3 sucursales, con edición de ticket antes del pago, división de cuentas y recuperación/recreación de tickets en POS y App Cliente.",
          },
          { icon: Store, text: "Exportación CSV/Excel + panel COFEPRIS básico.", underlinePart: "panel COFEPRIS básico" },
          { icon: CreditCard, text: "Blokko integrado para tarjetas, SPEI/PIX y cripto (opcional, se adapta mejor para tu negocio)." },
        ],
      },
      {
        name: "Cadena",
        price: "$1,499",
        subtitle: "Para múltiples sucursales y operación por datos",
        support: "WhatsApp con prioridad alta",
        blokkoStatus: "included",
        blokkoBadge: "Opcional (funciona mejor aquí)",
        features: [
          { icon: Globe, text: "Sitio totalmente personalizado bilingüe (español/inglés) con diseño de marca." },
          {
            icon: Building2,
            text: "Multi-sucursal completa (3+) con control global, edición de ticket antes del pago, división de cuentas y recuperación/recreación de tickets en POS y App Cliente.",
          },
          { icon: Smartphone, text: "Acceso desde múltiples dispositivos para varias cajas, tablets y estaciones de cocina." },
          { icon: QrCode, text: "Operación offline robusta y sincronización automática." },
          { icon: BarChart3, text: "Machine Learning: pronóstico de ventas y proyección de inventario." },
          { icon: ShieldCheck, text: "Panel sanitario completo COFEPRIS/FDA/ANVISA." },
          { icon: CreditCard, text: "Blokko integrado para tarjetas, SPEI/PIX y cripto (opcional, se adapta mejor para tu negocio)." },
        ],
      },
    ],
    comparisonRows: [
      {
        icon: Store,
        title: "POS en la nube",
        separated: "~500 a 3,000 MXN/mes.",
        xoco: "Incluido en la misma plataforma.",
      },
      {
        icon: Smartphone,
        title: "Sistema de pedidos online / app cliente",
        separated: "1,000 a 3,000 MXN/mes o comisión por pedido.",
        xoco: "Incluido con reservas, pedidos y lealtad.",
      },
      {
        icon: Globe,
        title: "Sitio web profesional",
        separated: "Setup alto + mensualidad.",
        xoco: "Incluido y escalable por plan.",
      },
      {
        icon: BarChart3,
        title: "Herramienta de métricas / BI",
        separated: "Licencias extra mensuales.",
        xoco: "Reportes en el mismo panel.",
      },
      {
        icon: CreditCard,
        title: "Terminal o gateway de pagos",
        separated: "Integración adicional + comisiones.",
        xoco: "Conexión integrada con Blokko.",
      },
    ],
  },
  en: {
    heroTitle: "Clear plans and pricing for your restaurant",
    heroDescription:
      "Avoid paying for 3 or 4 separate systems. Xoco Suite combines your website, client app, operational POS, advanced analytics, sanitary panel, and payments in one place.",
    badge: "LATAM focus: Mexico, Brazil, Argentina, Peru, and more.",
    modulesTitle: "Everything Xoco Suite includes in a single plan",
    contractNote: "All plans are contracted for 12 months at sign-up.",
    blokkoBadge: "Connects to any terminal. Blokko is optional, not required.",
    blokkoTitle: "One POS, multiple ways to charge, without headaches.",
    blokkoDescription:
      "You can optionally integrate Blokko on every plan. In Escala and Cadena it tends to work better because of higher operational volume and payment frequency.",
    blokkoBenefits: [
      "Accept cards, transfers (SPEI/PIX), and crypto in a single flow.",
      "Receive local currency (MXN, BRL, etc.) without worrying about volatility.",
      "No need to know about wallets or custody; you charge like any standard terminal.",
    ],
    blokkoFooter:
      "Processing fees are defined directly by Blokko.io. Xoco Suite integrates this solution into your operation.",
    operationalCostsTitle: "Operating costs (the same on every plan)",
    operationalCosts: {
      updatesLabel: "Software updates",
      updatesText: "$199 MXN per update, every 3 months.",
      trainingOnsiteLabel: "On-site training",
      trainingOnsiteText: "$999 MXN per visit.",
      trainingVirtualLabel: "Virtual training",
      trainingVirtualText: "$699 MXN per session.",
      paymentNote:
        "Payments note: Blokko.io defines processing fees and transaction rates. Xoco Suite integrates Blokko as part of the solution.",
    },
    compareTitle: "How much would you pay if you bought everything separately?",
    compareDescription: "Quick summary: separately you pay for several tools; with Xoco you bring them together in one place.",
    compareHeaders: {
      category: "Category",
      others: "Other market solutions",
      xoco: "With Xoco Suite",
      mobileOthers: "Other solutions",
      mobileXoco: "With Xoco Suite",
    },
    closingTitle: "One platform to run better",
    closingDescription:
      "With Xoco Suite you get one platform, one WhatsApp support line, and a unified view of your business, without stitching together systems from 3 or 4 different vendors.",
    cta: "See plan details",
    whatsapp: "Talk on WhatsApp",
    planDetailButton: "Talk on WhatsApp",
    blokkoChips: [
      { icon: CreditCard, emoji: "💳", label: "Cards" },
      { icon: Landmark, emoji: "🏦", label: "SPEI / PIX" },
      { icon: Coins, emoji: "🪙", label: "Crypto" },
      { icon: QrCode, emoji: "📱", label: "QR / digital checkout" },
    ],
    xocoSuiteModules: [
      { icon: Globe, text: "Professional website" },
      { icon: Smartphone, text: "Client app" },
      { icon: Store, text: "Operational POS" },
      { icon: BarChart3, text: "Advanced analytics" },
      { icon: ShieldCheck, text: "Sanitary panel" },
      { icon: CreditCard, text: "Blokko payment integration" },
    ],
    plans: [
      {
        name: "Starter",
        price: "$199",
        subtitle: "Basic landing only",
        support: "WhatsApp during business hours",
        blokkoStatus: "addon",
        blokkoBadge: "Optional",
        features: [
          { icon: Globe, text: "Basic landing page with a static menu or PDF." },
          { icon: Store, text: "Basic POS: order taking and receipts." },
          { icon: Smartphone, text: "Access from multiple devices to view the landing from any screen." },
          { icon: ShieldCheck, text: "Limited role access (admin and cashier).", underline: true },
          {
            icon: XCircle,
            text: "No Client App, no reservations, and no edit-before-pay.",
            underline: true,
          },
          { icon: QrCode, text: "No advanced analytics, no COFEPRIS, no Machine Learning.", underline: true },
          { icon: CreditCard, text: "Blokko integrated for cards, SPEI/PIX, and crypto (optional, fits your business better)." },
        ],
      },
      {
        name: "Emprende",
        price: "$499",
        subtitle: "For small restaurants (1 location)",
        support: "WhatsApp with better follow-up",
        blokkoStatus: "addon",
        blokkoBadge: "Optional",
        features: [
          { icon: Globe, text: "Full bilingual website (Spanish/English) with dynamic menu and key sections." },
          {
            icon: Store,
            text: "POS with basic inventory, stock alerts, edit-before-pay, bill splitting, and ticket recovery/recreation in POS and Client App.",
          },
          { icon: Smartphone, text: "Access from multiple devices for your team and workstations." },
          { icon: ShieldCheck, text: "Multiple roles: admin, cashier, and kitchen." },
          { icon: QrCode, text: "QR reservations and orders + basic loyalty with PNG support.", underlinePart: "basic loyalty" },
          { icon: BarChart3, text: "Simple sales reports (no Machine Learning models).", underlinePart: "(no Machine Learning models)." },
          { icon: CreditCard, text: "Blokko integrated for cards, SPEI/PIX, and crypto (optional, fits your business better)." },
        ],
      },
      {
        name: "Escala",
        price: "$899",
        subtitle: "For mid-sized operations and up to three locations",
        support: "WhatsApp with more priority",
        featured: true,
        blokkoStatus: "included",
        blokkoBadge: "Optional (works better here)",
        features: [
          { icon: Globe, text: "Bilingual landing page (Spanish/English) with events, video, and galleries." },
          { icon: Smartphone, text: "Loyalty with Apple/Google Wallet + shareable PNG." },
          { icon: Smartphone, text: "Access from multiple devices to run more than one terminal or location." },
          { icon: BarChart3, text: "Consumption metrics: visits, frequency, and average ticket." },
          {
            icon: Building2,
            text: "Employee management and up to 3 locations, with edit-before-pay, bill splitting, and ticket recovery/recreation in POS and Client App.",
          },
          { icon: Store, text: "CSV/Excel export + basic COFEPRIS panel.", underlinePart: "basic COFEPRIS panel" },
          { icon: CreditCard, text: "Blokko integrated for cards, SPEI/PIX, and crypto (optional, fits your business better)." },
        ],
      },
      {
        name: "Cadena",
        price: "$1,499",
        subtitle: "For multiple locations and data-driven operations",
        support: "WhatsApp with high priority",
        blokkoStatus: "included",
        blokkoBadge: "Optional (works better here)",
        features: [
          { icon: Globe, text: "Fully custom bilingual website (Spanish/English) with brand design." },
          {
            icon: Building2,
            text: "Complete multi-location (3+) control with edit-before-pay, bill splitting, and ticket recovery/recreation in POS and Client App.",
          },
          { icon: Smartphone, text: "Access from multiple devices for several registers, tablets, and kitchen stations." },
          { icon: QrCode, text: "Robust offline operation and automatic sync." },
          { icon: BarChart3, text: "Machine Learning: sales forecasting and inventory projection." },
          { icon: ShieldCheck, text: "Full sanitary panel COFEPRIS/FDA/ANVISA." },
          { icon: CreditCard, text: "Blokko integrated for cards, SPEI/PIX, and crypto (optional, fits your business better)." },
        ],
      },
    ],
    comparisonRows: [
      {
        icon: Store,
        title: "Cloud POS",
        separated: "~500 to 3,000 MXN/month.",
        xoco: "Included in the same platform.",
      },
      {
        icon: Smartphone,
        title: "Online ordering / client app",
        separated: "1,000 to 3,000 MXN/month or per-order commission.",
        xoco: "Included with reservations, orders, and loyalty.",
      },
      {
        icon: Globe,
        title: "Professional website",
        separated: "High setup cost + monthly fee.",
        xoco: "Included and scalable by plan.",
      },
      {
        icon: BarChart3,
        title: "Analytics / BI tool",
        separated: "Extra monthly licenses.",
        xoco: "Reports in the same dashboard.",
      },
      {
        icon: CreditCard,
        title: "Payment terminal or gateway",
        separated: "Additional integration + fees.",
        xoco: "Integrated connection with Blokko.",
      },
    ],
  },
  pt: {
    heroTitle: "Planos e preços claros para o seu restaurante",
    heroDescription:
      "Evite pagar por 3 ou 4 sistemas separados. O Xoco Suite reúne site, app do cliente, PDV, métricas avançadas, painel sanitário e pagamentos em um só lugar.",
    badge: "Foco LATAM: México, Brasil, Argentina, Peru e mais.",
    modulesTitle: "Tudo o que o Xoco Suite inclui em um único plano",
    contractNote: "Todos os planos são contratados por 12 meses no início.",
    blokkoBadge: "Conecta com qualquer terminal. Blokko é opcional, não obrigatório.",
    blokkoTitle: "Um único PDV, várias formas de cobrar, sem dor de cabeça.",
    blokkoDescription:
      "Você pode integrar o Blokko de forma opcional em todos os planos. Em Escala e Cadena costuma funcionar melhor por volume operacional e frequência de cobranças.",
    blokkoBenefits: [
      "Aceite cartões, transferências (SPEI/PIX) e cripto em um único fluxo.",
      "Receba moeda local (MXN, BRL etc.) sem se preocupar com volatilidade.",
      "Você não precisa saber sobre wallets ou custódia; cobra como em qualquer terminal.",
    ],
    blokkoFooter:
      "As taxas de processamento são definidas diretamente pelo Blokko.io. O Xoco Suite integra essa solução à sua operação.",
    operationalCostsTitle: "Custos operacionais (iguais em todos os planos)",
    operationalCosts: {
      updatesLabel: "Atualizações de software",
      updatesText: "$199 MXN por atualização, a cada 3 meses.",
      trainingOnsiteLabel: "Treinamento presencial",
      trainingOnsiteText: "$999 MXN por visita.",
      trainingVirtualLabel: "Treinamento virtual",
      trainingVirtualText: "$699 MXN por sessão.",
      paymentNote:
        "Observação sobre pagamentos: o Blokko.io define taxas e tarifas por transação. O Xoco Suite integra o Blokko como parte da solução.",
    },
    compareTitle: "Quanto você pagaria se contratasse tudo separadamente?",
    compareDescription: "Resumo rápido: separadamente você paga várias ferramentas; com o Xoco você concentra tudo em um só lugar.",
    compareHeaders: {
      category: "Categoria",
      others: "Outras soluções do mercado",
      xoco: "Com o Xoco Suite",
      mobileOthers: "Outras soluções",
      mobileXoco: "Com o Xoco Suite",
    },
    closingTitle: "Uma única plataforma para operar melhor",
    closingDescription:
      "Com o Xoco Suite você tem uma única plataforma, um único suporte via WhatsApp e uma visão unificada do seu negócio, sem precisar juntar sistemas de 3 ou 4 fornecedores diferentes.",
    cta: "Ver detalhes dos planos",
    whatsapp: "Falar no WhatsApp",
    planDetailButton: "Falar no WhatsApp",
    blokkoChips: [
      { icon: CreditCard, emoji: "💳", label: "Cartões" },
      { icon: Landmark, emoji: "🏦", label: "SPEI / PIX" },
      { icon: Coins, emoji: "🪙", label: "Cripto" },
      { icon: QrCode, emoji: "📱", label: "QR / cobrança digital" },
    ],
    xocoSuiteModules: [
      { icon: Globe, text: "Site profissional" },
      { icon: Smartphone, text: "App do cliente" },
      { icon: Store, text: "PDV operacional" },
      { icon: BarChart3, text: "Métricas avançadas" },
      { icon: ShieldCheck, text: "Painel sanitário" },
      { icon: CreditCard, text: "Integração de pagamentos com Blokko" },
    ],
    plans: [
      {
        name: "Starter",
        price: "$199",
        subtitle: "Apenas landing básica",
        support: "WhatsApp em horário comercial",
        blokkoStatus: "addon",
        blokkoBadge: "Opcional",
        features: [
          { icon: Globe, text: "Landing page básica com menu estático ou PDF." },
          { icon: Store, text: "PDV básico: tomada de pedidos e tickets." },
          { icon: Smartphone, text: "Acesso por múltiplos dispositivos para visualizar a landing em qualquer tela." },
          { icon: ShieldCheck, text: "Acessos por papel limitados (admin e caixa).", underline: true },
          {
            icon: XCircle,
            text: "Sem App do cliente, sem reservas e sem edição de ticket antes do pagamento.",
            underline: true,
          },
          { icon: QrCode, text: "Sem métricas avançadas, sem COFEPRIS, sem Machine Learning.", underline: true },
          { icon: CreditCard, text: "Blokko integrado para cartões, SPEI/PIX e cripto (opcional, se adapta melhor ao seu negócio)." },
        ],
      },
      {
        name: "Emprende",
        price: "$499",
        subtitle: "Para restaurantes pequenos (1 unidade)",
        support: "WhatsApp com melhor acompanhamento",
        blokkoStatus: "addon",
        blokkoBadge: "Opcional",
        features: [
          { icon: Globe, text: "Site completo bilíngue (espanhol/inglês) com menu dinâmico e seções-chave." },
          {
            icon: Store,
            text: "PDV com inventário básico, alertas de estoque, edição de ticket antes do pagamento, divisão de contas e recuperação/recriação de tickets no PDV e no App do cliente.",
          },
          { icon: Smartphone, text: "Acesso por múltiplos dispositivos para sua equipe e estações de trabalho." },
          { icon: ShieldCheck, text: "Múltiplos papéis: admin, caixa e cozinha." },
          { icon: QrCode, text: "Reservas e pedidos com QR + fidelidade básica com suporte PNG.", underlinePart: "fidelidade básica" },
          { icon: BarChart3, text: "Relatórios simples de vendas (sem modelos de Machine Learning).", underlinePart: "(sem modelos de Machine Learning)." },
          { icon: CreditCard, text: "Blokko integrado para cartões, SPEI/PIX e cripto (opcional, se adapta melhor ao seu negócio)." },
        ],
      },
      {
        name: "Escala",
        price: "$899",
        subtitle: "Para operações médias e até três unidades",
        support: "WhatsApp com mais prioridade",
        featured: true,
        blokkoStatus: "included",
        blokkoBadge: "Opcional (funciona melhor aqui)",
        features: [
          { icon: Globe, text: "Landing bilíngue (espanhol/inglês) com seções de eventos, vídeo e galerias." },
          { icon: Smartphone, text: "Fidelidade com Apple/Google Wallet + PNG compartilhável." },
          { icon: Smartphone, text: "Acesso por múltiplos dispositivos para operar mais de um terminal ou unidade." },
          { icon: BarChart3, text: "Métricas de consumo: visitas, frequência e ticket médio." },
          {
            icon: Building2,
            text: "Gestão de funcionários e até 3 unidades, com edição de ticket antes do pagamento, divisão de contas e recuperação/recriação de tickets no PDV e no App do cliente.",
          },
          { icon: Store, text: "Exportação CSV/Excel + painel COFEPRIS básico.", underlinePart: "painel COFEPRIS básico" },
          { icon: CreditCard, text: "Blokko integrado para cartões, SPEI/PIX e cripto (opcional, se adapta melhor ao seu negócio)." },
        ],
      },
      {
        name: "Cadena",
        price: "$1,499",
        subtitle: "Para várias unidades e operação orientada por dados",
        support: "WhatsApp com prioridade alta",
        blokkoStatus: "included",
        blokkoBadge: "Opcional (funciona melhor aqui)",
        features: [
          { icon: Globe, text: "Site totalmente personalizado bilíngue (espanhol/inglês) com identidade de marca." },
          {
            icon: Building2,
            text: "Controle multiunidade completo (3+) com controle global, edição de ticket antes do pagamento, divisão de contas e recuperação/recriação de tickets no PDV e no App do cliente.",
          },
          { icon: Smartphone, text: "Acesso por múltiplos dispositivos para várias caixas, tablets e estações de cozinha." },
          { icon: QrCode, text: "Operação offline robusta e sincronização automática." },
          { icon: BarChart3, text: "Machine Learning: previsão de vendas e projeção de estoque." },
          { icon: ShieldCheck, text: "Painel sanitário completo COFEPRIS/FDA/ANVISA." },
          { icon: CreditCard, text: "Blokko integrado para cartões, SPEI/PIX e cripto (opcional, se adapta melhor ao seu negócio)." },
        ],
      },
    ],
    comparisonRows: [
      {
        icon: Store,
        title: "PDV em nuvem",
        separated: "~500 a 3.000 MXN/mês.",
        xoco: "Incluído na mesma plataforma.",
      },
      {
        icon: Smartphone,
        title: "Sistema de pedidos online / app do cliente",
        separated: "1.000 a 3.000 MXN/mês ou comissão por pedido.",
        xoco: "Incluído com reservas, pedidos e fidelidade.",
      },
      {
        icon: Globe,
        title: "Site profissional",
        separated: "Setup alto + mensalidade.",
        xoco: "Incluído e escalável por plano.",
      },
      {
        icon: BarChart3,
        title: "Ferramenta de métricas / BI",
        separated: "Licenças extras mensais.",
        xoco: "Relatórios no mesmo painel.",
      },
      {
        icon: CreditCard,
        title: "Terminal ou gateway de pagamentos",
        separated: "Integração adicional + tarifas.",
        xoco: "Conexão integrada com Blokko.",
      },
    ],
  },
  fr: {
    heroTitle: "Des offres et tarifs clairs pour votre restaurant",
    heroDescription:
      "Évitez de payer 3 ou 4 systèmes séparés. Xoco Suite regroupe le site web, l’app client, le POS opérationnel, les analyses avancées, le panneau sanitaire et les paiements au même endroit.",
    badge: "Focus LATAM: Mexique, Brésil, Argentine, Pérou et plus.",
    modulesTitle: "Tout ce que Xoco Suite inclut dans une seule offre",
    contractNote: "Toutes les offres sont souscrites pour 12 mois au départ.",
    blokkoBadge: "Se connecte à n’importe quel terminal. Blokko est optionnel, pas obligatoire.",
    blokkoTitle: "Un seul POS, plusieurs façons d'encaisser, sans prise de tête.",
    blokkoDescription:
      "Vous pouvez intégrer Blokko en option dans toutes les offres. Dans Escala et Cadena, cela fonctionne généralement mieux en raison du volume d'opérations et de la fréquence des encaissements.",
    blokkoBenefits: [
      "Acceptez les cartes, les virements (SPEI/PIX) et les cryptos dans un seul flux.",
      "Recevez la devise locale (MXN, BRL, etc.) sans vous soucier de la volatilité.",
      "Vous n'avez pas besoin de connaître les wallets ou la garde; vous encaissez comme sur n'importe quel terminal.",
    ],
    blokkoFooter:
      "Les frais de traitement sont définis directement par Blokko.io. Xoco Suite intègre cette solution dans votre opération.",
    operationalCostsTitle: "Coûts opérationnels (identiques pour toutes les offres)",
    operationalCosts: {
      updatesLabel: "Mises à jour logicielles",
      updatesText: "$199 MXN par mise à jour, tous les 3 mois.",
      trainingOnsiteLabel: "Formation sur site",
      trainingOnsiteText: "$999 MXN par visite.",
      trainingVirtualLabel: "Formation virtuelle",
      trainingVirtualText: "$699 MXN par session.",
      paymentNote:
        "Note paiements: Blokko.io définit les frais et tarifs par transaction. Xoco Suite intègre Blokko comme partie de la solution.",
    },
    compareTitle: "Combien paieriez-vous si vous preniez tout séparément ?",
    compareDescription: "Résumé rapide: séparément vous payez plusieurs outils; avec Xoco vous les centralisez au même endroit.",
    compareHeaders: {
      category: "Catégorie",
      others: "Autres solutions du marché",
      xoco: "Avec Xoco Suite",
      mobileOthers: "Autres solutions",
      mobileXoco: "Avec Xoco Suite",
    },
    closingTitle: "Une seule plateforme pour mieux opérer",
    closingDescription:
      "Avec Xoco Suite, vous avez une seule plateforme, un seul support WhatsApp et une vue unifiée de votre activité, sans assembler des systèmes provenant de 3 ou 4 fournisseurs différents.",
    cta: "Voir le détail des offres",
    whatsapp: "Parler sur WhatsApp",
    planDetailButton: "Parler sur WhatsApp",
    blokkoChips: [
      { icon: CreditCard, emoji: "💳", label: "Cartes" },
      { icon: Landmark, emoji: "🏦", label: "SPEI / PIX" },
      { icon: Coins, emoji: "🪙", label: "Crypto" },
      { icon: QrCode, emoji: "📱", label: "QR / encaissement digital" },
    ],
    xocoSuiteModules: [
      { icon: Globe, text: "Site web professionnel" },
      { icon: Smartphone, text: "App client" },
      { icon: Store, text: "POS opérationnel" },
      { icon: BarChart3, text: "Analyses avancées" },
      { icon: ShieldCheck, text: "Panneau sanitaire" },
      { icon: CreditCard, text: "Intégration des paiements avec Blokko" },
    ],
    plans: [
      {
        name: "Starter",
        price: "$199",
        subtitle: "Landing basique seulement",
        support: "WhatsApp pendant les heures ouvrables",
        blokkoStatus: "addon",
        blokkoBadge: "Optionnel",
        features: [
          { icon: Globe, text: "Page d'accueil basique avec menu statique ou PDF." },
          { icon: Store, text: "POS basique: prise de commande et tickets." },
          { icon: Smartphone, text: "Accès depuis plusieurs appareils pour afficher la landing sur n'importe quel écran." },
          { icon: ShieldCheck, text: "Accès par rôle limité (admin et caisse).", underline: true },
          {
            icon: XCircle,
            text: "Pas d'App client, pas de réservations et pas d'édition du ticket avant paiement.",
            underline: true,
          },
          { icon: QrCode, text: "Pas d'analyses avancées, pas de COFEPRIS, pas de Machine Learning.", underline: true },
          { icon: CreditCard, text: "Blokko intégré pour cartes, SPEI/PIX et crypto (optionnel, mieux adapté à votre activité)." },
        ],
      },
      {
        name: "Emprende",
        price: "$499",
        subtitle: "Pour petits restaurants (1 site)",
        support: "WhatsApp avec meilleur suivi",
        blokkoStatus: "addon",
        blokkoBadge: "Optionnel",
        features: [
          { icon: Globe, text: "Site web bilingue complet (espagnol/anglais) avec menu dynamique et sections clés." },
          {
            icon: Store,
            text: "POS avec inventaire de base, alertes de stock, édition du ticket avant paiement, division d'addition et récupération/recréation des tickets dans le POS et l'App client.",
          },
          { icon: Smartphone, text: "Accès depuis plusieurs appareils pour votre équipe et vos postes de travail." },
          { icon: ShieldCheck, text: "Rôles multiples: admin, caisse et cuisine." },
          { icon: QrCode, text: "Réservations et commandes par QR + fidélité de base avec support PNG.", underlinePart: "fidélité de base" },
          { icon: BarChart3, text: "Rapports de ventes simples (sans modèles de Machine Learning).", underlinePart: "(sans modèles de Machine Learning)." },
          { icon: CreditCard, text: "Blokko intégré pour cartes, SPEI/PIX et crypto (optionnel, mieux adapté à votre activité)." },
        ],
      },
      {
        name: "Escala",
        price: "$899",
        subtitle: "Pour opérations moyennes et jusqu'à trois sites",
        support: "WhatsApp avec plus de priorité",
        featured: true,
        blokkoStatus: "included",
        blokkoBadge: "Optionnel (fonctionne mieux ici)",
        features: [
          { icon: Globe, text: "Landing bilingue (espagnol/anglais) avec sections événements, vidéo et galeries." },
          { icon: Smartphone, text: "Fidélité avec Apple/Google Wallet + PNG partageable." },
          { icon: Smartphone, text: "Accès depuis plusieurs appareils pour opérer plusieurs terminaux ou sites." },
          { icon: BarChart3, text: "Métriques de consommation: visites, fréquence et ticket moyen." },
          {
            icon: Building2,
            text: "Gestion des employés et jusqu'à 3 sites, avec édition du ticket avant paiement, division d'addition et récupération/recréation des tickets dans le POS et l'App client.",
          },
          { icon: Store, text: "Export CSV/Excel + panneau COFEPRIS de base.", underlinePart: "panneau COFEPRIS de base" },
          { icon: CreditCard, text: "Blokko intégré pour cartes, SPEI/PIX et crypto (optionnel, mieux adapté à votre activité)." },
        ],
      },
      {
        name: "Cadena",
        price: "$1,499",
        subtitle: "Pour plusieurs sites et une opération guidée par les données",
        support: "WhatsApp avec priorité élevée",
        blokkoStatus: "included",
        blokkoBadge: "Optionnel (fonctionne mieux ici)",
        features: [
          { icon: Globe, text: "Site totalement personnalisé bilingue (espagnol/anglais) avec identité de marque." },
          {
            icon: Building2,
            text: "Contrôle multi-sites complet (3+) avec contrôle global, édition du ticket avant paiement, division d'addition et récupération/recréation des tickets dans le POS et l'App client.",
          },
          { icon: Smartphone, text: "Accès depuis plusieurs appareils pour plusieurs caisses, tablettes et postes de cuisine." },
          { icon: QrCode, text: "Fonctionnement hors ligne robuste et synchronisation automatique." },
          { icon: BarChart3, text: "Machine Learning: prévision des ventes et projection des stocks." },
          { icon: ShieldCheck, text: "Panneau sanitaire complet COFEPRIS/FDA/ANVISA." },
          { icon: CreditCard, text: "Blokko intégré pour cartes, SPEI/PIX et crypto (optionnel, mieux adapté à votre activité)." },
        ],
      },
    ],
    comparisonRows: [
      {
        icon: Store,
        title: "POS cloud",
        separated: "~500 à 3,000 MXN/mois.",
        xoco: "Inclus dans la même plateforme.",
      },
      {
        icon: Smartphone,
        title: "Système de commandes en ligne / app client",
        separated: "1,000 à 3,000 MXN/mois ou commission par commande.",
        xoco: "Inclus avec réservations, commandes et fidélité.",
      },
      {
        icon: Globe,
        title: "Site web professionnel",
        separated: "Coût de mise en place élevé + abonnement mensuel.",
        xoco: "Inclus et évolutif selon l'offre.",
      },
      {
        icon: BarChart3,
        title: "Outil d'analyses / BI",
        separated: "Licences mensuelles supplémentaires.",
        xoco: "Rapports dans le même tableau de bord.",
      },
      {
        icon: CreditCard,
        title: "Terminal ou passerelle de paiement",
        separated: "Intégration supplémentaire + frais.",
        xoco: "Connexion intégrée avec Blokko.",
      },
    ],
  },
}

export default function PricesPage() {
  const { locale } = useLocale()
  const copy = pricesCopyByLocale[locale]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-3xl md:text-5xl font-bold text-balance"
          >
            {copy.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-pretty"
          >
            {copy.heroDescription}
          </motion.p>
          <Badge className="mt-6 border border-primary/30 bg-primary/10 text-primary">{copy.badge}</Badge>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-10">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
          {copy.xocoSuiteModules.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.div
                key={module.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full p-4 border-2 border-primary/35 bg-card/80 text-center shadow-[0_10px_26px_rgba(122,78,46,0.18)] transition-all hover:border-primary/70 hover:shadow-[0_20px_44px_rgba(122,78,46,0.28)] dark:shadow-lg dark:shadow-primary/10 dark:hover:shadow-xl dark:hover:shadow-primary/20">
                  <Icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">{module.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-8">
        <Card className="mb-5 border border-primary/35 bg-primary/10 p-3 md:p-4">
          <p className="text-center text-sm md:text-base font-medium text-foreground">{copy.contractNote}</p>
        </Card>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={plan.blokkoStatus === "included" ? { y: -8 } : undefined}
            >
              <Card
                className={`h-full p-6 border-2 bg-card/80 backdrop-blur-sm transition-all ${
                  plan.featured
                    ? "border-primary/60 shadow-[0_18px_42px_rgba(122,78,46,0.24)] dark:shadow-xl dark:shadow-primary/20"
                    : "border-border"
                } ${
                  plan.blokkoStatus === "included"
                    ? "hover:border-primary/70 hover:shadow-[0_22px_50px_rgba(122,78,46,0.3)] dark:hover:shadow-xl dark:hover:shadow-primary/20"
                    : plan.blokkoStatus === "addon"
                      ? "hover:border-amber-400/50 hover:shadow-lg"
                      : ""
                }`}
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {plan.featured ? (
                    <Badge className="border-primary/40 bg-primary/10 text-primary">Más elegido</Badge>
                  ) : (
                    <Badge className="border-border bg-muted text-muted-foreground">{plan.subtitle}</Badge>
                  )}
                  {plan.blokkoBadge && (
                    <Badge
                      className={
                        plan.blokkoStatus === "included"
                          ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                          : "border-amber-500/30 bg-amber-500/15 text-amber-700 dark:text-amber-300"
                      }
                    >
                      {plan.blokkoBadge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground -mt-2 mb-3">{plan.subtitle}</p>

                <div className="mb-4">
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground pb-1">MXN / mes</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => {
                    const Icon = feature.icon
                    const hasPartialUnderline = !!feature.underlinePart && feature.text.includes(feature.underlinePart)
                    const [beforeUnderline = "", afterUnderline = ""] = hasPartialUnderline
                      ? feature.text.split(feature.underlinePart as string)
                      : [feature.text, ""]
                    return (
                      <li key={feature.text} className="flex items-start gap-2">
                        <Icon className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                        <span
                          className={
                            feature.underline
                              ? "text-sm text-foreground/90 underline underline-offset-2 decoration-primary/70"
                              : "text-sm text-foreground/90"
                          }
                        >
                          {feature.underline
                            ? feature.text
                            : hasPartialUnderline
                              ? (
                                  <>
                                    {beforeUnderline}
                                    <span className="underline underline-offset-2 decoration-primary/70">{feature.underlinePart}</span>
                                    {afterUnderline}
                                  </>
                                )
                              : feature.text}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-auto space-y-4">
                  <p className="text-xs text-muted-foreground">
                    {locale === "es"
                      ? "Soporte incluido:"
                      : locale === "fr"
                        ? "Support inclus:"
                        : locale === "pt"
                          ? "Suporte incluído:"
                          : "Included support:"}{" "}
                    <span className="font-semibold text-foreground">{plan.support}</span>.
                  </p>
                  <WhatsAppCTAButton
                    href={`https://wa.me/525512291607?text=${encodeURIComponent(
                      locale === "es"
                        ? `Hola, quiero información del plan ${plan.name} de Xoco Suite`
                        : locale === "fr"
                          ? `Bonjour, je veux des informations sur l'offre ${plan.name} de Xoco Suite`
                          : locale === "pt"
                            ? `Olá, quero informações sobre o plano ${plan.name} do Xoco Suite`
                            : `Hi, I want information about the ${plan.name} plan from Xoco Suite`,
                    )}`}
                    label={copy.planDetailButton}
                    className={`w-full font-semibold ${plan.featured ? "ring-2 ring-primary/30" : ""}`}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="p-6 md:p-8 border-2 border-primary/30 bg-gradient-to-r from-primary/15 via-primary/10 to-background">
            <div className="mb-5 flex justify-center">
              <Badge className="border border-primary/40 bg-background/80 px-3 py-1.5 text-center text-xs md:text-sm text-primary">
                {copy.blokkoBadge}
              </Badge>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <Badge className="mb-3 border-primary/40 bg-primary/15 text-primary">Pagos con Blokko.io</Badge>
                <h3 className="text-2xl md:text-3xl font-bold">{copy.blokkoTitle}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{copy.blokkoDescription}</p>
                <ul className="mt-5 space-y-3">
                  {copy.blokkoBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      <span className="text-sm text-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted-foreground">{copy.blokkoFooter}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 self-start">
                {copy.blokkoChips.map((chip, index) => {
                  const Icon = chip.icon
                  return (
                    <motion.div
                      key={chip.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                    >
                      <Card className="h-full p-4 border border-border/90 bg-card/80">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-base leading-none">{chip.emoji}</span>
                        </div>
                        <p className="mt-3 text-sm font-medium">{chip.label}</p>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-8">
        <Card className="p-6 md:p-8 border border-amber-500/30 bg-amber-500/10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{copy.operationalCostsTitle}</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="text-sm font-semibold flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-primary" />
                {copy.operationalCosts.updatesLabel}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{copy.operationalCosts.updatesText}</p>
            </div>
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="text-sm font-semibold flex items-center gap-2">
                <Wrench className="w-4 h-4 text-primary" />
                {copy.operationalCosts.trainingOnsiteLabel}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{copy.operationalCosts.trainingOnsiteText}</p>
            </div>
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="text-sm font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                {copy.operationalCosts.trainingVirtualLabel}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{copy.operationalCosts.trainingVirtualText}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{copy.operationalCosts.paymentNote}</p>
        </Card>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{copy.compareTitle}</h2>
          <p className="mt-3 text-muted-foreground text-pretty">{copy.compareDescription}</p>
        </motion.div>

        <Card className="overflow-hidden border border-border/80 bg-card/85">
          <div className="hidden md:grid md:grid-cols-[220px_1fr_1fr] border-b border-border/80">
            <p className="px-4 py-3 text-sm font-semibold text-foreground bg-muted/20">{copy.compareHeaders.category}</p>
            <p className="px-4 py-3 text-sm font-semibold text-red-500 bg-muted/15">{copy.compareHeaders.others}</p>
            <p className="px-4 py-3 text-sm font-semibold text-emerald-500 bg-primary/30">{copy.compareHeaders.xoco}</p>
          </div>
          <div className="divide-y divide-border/80">
            {copy.comparisonRows.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="grid gap-3 px-4 py-4 md:grid-cols-[220px_1fr_1fr] md:gap-4"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-muted/15 p-3 md:rounded-none md:border-0 md:bg-muted/10 md:p-0 md:px-4 md:py-3">
                    <p className="text-xs uppercase tracking-wide text-red-500/90 md:hidden">{copy.compareHeaders.mobileOthers}</p>
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 mt-0.5 text-red-500 shrink-0" />
                      <p className="text-sm text-muted-foreground/90">{item.separated}</p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-primary/35 bg-primary/20 p-3 md:rounded-none md:border-0 md:bg-primary/25 md:p-0 md:px-4 md:py-3">
                    <p className="text-xs uppercase tracking-wide text-emerald-500/90 md:hidden">{copy.compareHeaders.mobileXoco}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" />
                      <p className="text-sm font-medium text-foreground">{item.xoco}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Card>

        <Card className="mt-8 p-6 md:p-8 bg-gradient-to-r from-primary/15 via-primary/10 to-background border-2 border-primary/30">
          <h3 className="text-2xl font-bold">{copy.closingTitle}</h3>
          <p className="mt-3 text-muted-foreground">{copy.closingDescription}</p>
        </Card>
      </section>

      <Footer />
    </main>
  )
}
