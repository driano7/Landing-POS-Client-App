import { NextResponse, type NextRequest } from "next/server"

import { isLocale } from "@/agency/lib/site-content"

function detectLocale(acceptLanguage: string | null | undefined) {
  const header = acceptLanguage ?? ""
  const preferredLocales = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean)

  for (const preferred of preferredLocales) {
    const base = preferred.split("-")[0]
    if (isLocale(base)) {
      return base
    }
  }

  return "es"
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (!request.cookies.get("NEXT_LOCALE")) {
    response.cookies.set("NEXT_LOCALE", detectLocale(request.headers.get("accept-language")), {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    })
  }

  return response
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
