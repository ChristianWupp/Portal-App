"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart2, SendHorizontal, Wallet, CreditCard } from 'lucide-react'

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/earn", icon: Wallet, label: "Earn" },
  { href: "/invest", icon: BarChart2, label: "Invest" },
  { href: "/payments", icon: SendHorizontal, label: "Send" },
  { href: "/card", icon: CreditCard, label: "Card" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-around items-center h-16 bg-[#13141A]/90 backdrop-blur-lg border-t border-white/5">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center justify-center w-full h-full ${
            pathname === item.href ? "text-blue-400" : "text-white/50 hover:text-white/80 transition-colors"
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span className="text-xs mt-1">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
