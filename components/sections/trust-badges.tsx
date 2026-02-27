"use client"

import { CheckCircle, Globe, Shield, TrendingUp, Zap } from "lucide-react"

const badges = [
  { icon: Shield, text: "AES-256 Encrypted", subtext: "Bank-level security" },
  { icon: Zap, text: "Lightning Network", subtext: "Instant settlements" },
  { icon: CheckCircle, text: "COFEPRIS Ready", subtext: "Mexico compliance" },
  { icon: Globe, text: "700+ Wallets", subtext: "WalletConnect" },
  { icon: TrendingUp, text: "14 Day Trial", subtext: "No credit card" },
]

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center justify-items-center">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div key={badge.text} className="flex flex-col items-center gap-2 text-center">
                <Icon size={40} className="text-orange-600" aria-hidden="true" />
                <p className="text-sm font-semibold text-gray-900">{badge.text}</p>
                <p className="text-xs text-gray-500">{badge.subtext}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
