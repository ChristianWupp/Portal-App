import { Button } from "@/components/ui/button"
import { Eye, Snowflake, Settings, ArrowLeft, HelpCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const transactions = [
  {
    merchant: "YouTube",
    amount: "14.25",
    date: "7 December 2024",
    time: "00:25",
    status: "Insufficient balance",
    icon: "https://www.google.com/favicon.ico",
  },
  {
    merchant: "YouTube",
    amount: "14.22",
    date: "5 December 2024",
    time: "23:20",
    status: "Insufficient balance",
    icon: "https://www.google.com/favicon.ico",
  },
  {
    merchant: "YouTube",
    amount: "14.28",
    date: "4 December 2024",
    time: "22:26",
    status: "Insufficient balance",
    icon: "https://www.google.com/favicon.ico",
  },
]

export default function CardPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-slate-950/20" />

      {/* Header */}
      <div className="p-6 flex items-center justify-between relative z-10">
        <Link href="/" className="text-white/80 hover:text-white">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <Button size="icon" variant="ghost" className="text-white/80 hover:text-white">
          <HelpCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Virtual Card */}
      <div className="px-6 relative z-10">
        <div className="relative aspect-[1.586/1] w-full rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 p-6 overflow-hidden">
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-sm font-medium text-white">Virtual</span>
          </div>
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-medium text-white">Virtual</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-white/90 font-medium">•• 8923</p>
              <Image src="/visa-white.svg" alt="Visa" width={60} height={20} className="opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-4 px-6 mt-8 relative z-10">
        <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-4 bg-white/5 hover:bg-white/10">
          <Eye className="h-6 w-6" />
          <span className="text-sm">Show details</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-4 bg-white/5 hover:bg-white/10">
          <Snowflake className="h-6 w-6" />
          <span className="text-sm">Freeze</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-4 bg-white/5 hover:bg-white/10">
          <Settings className="h-6 w-6" />
          <span className="text-sm">Settings</span>
        </Button>
      </div>

      {/* Transactions */}
      <div className="mt-8 p-6 bg-[#13141A]/80 rounded-t-3xl relative z-10">
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                <Image src={transaction.icon || "/placeholder.svg"} alt={transaction.merchant} width={20} height={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-white">{transaction.merchant}</h3>
                    <p className="text-sm text-white/60">
                      {transaction.date}, {transaction.time}
                    </p>
                    <p className="text-sm text-white/40">{transaction.status}</p>
                  </div>
                  <p className="font-medium text-white">{transaction.amount} €</p>
                </div>
              </div>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-white/60 hover:text-white">
            See all
          </Button>
        </div>
      </div>
    </div>
  )
}
