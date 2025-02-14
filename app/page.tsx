import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Search, Wallet, Globe2, ArrowUpRight, Plus, ArrowDown, Sparkles, Zap, ChevronRight } from 'lucide-react'
import { BalanceChart } from "@/components/balance-chart"
import { BackgroundGrid } from "@/components/background-grid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] relative overflow-hidden">
      <BackgroundGrid />

      {/* Top Bar */}
      <div className="p-6 flex items-center gap-4 relative z-10">
        <Avatar className="h-10 w-10 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-blue-950">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex items-center gap-2">
          <Button variant="ghost" className="text-lg font-medium text-white">
            Main Account
            <ArrowDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </div>
        <Button size="icon" variant="ghost" className="rounded-full bg-blue-500/10 text-blue-400">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Balance */}
      <div className="px-6 pt-8 relative z-10">
        <div className="space-y-1 mb-8">
          <p className="text-blue-300/80 text-sm font-medium">Total Balance</p>
          <div className="flex items-baseline gap-2">
            <h1 className="text-5xl font-bold text-white tracking-tight">$10,234.56</h1>
            <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
              <ArrowUpRight className="h-3 w-3" />
              <span className="text-sm font-medium">2.3%</span>
            </div>
          </div>
          <p className="text-emerald-400 font-medium">+$234.56 today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-4 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-300/80">Earnings</span>
            </div>
            <p className="text-2xl font-bold text-white">$1,234.56</p>
            <p className="text-sm text-blue-300/80">10.5% APY</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-4 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-2 mb-1">
              <Wallet className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-blue-300/80">Invested</span>
            </div>
            <p className="text-2xl font-bold text-white">$8,234.56</p>
            <p className="text-sm text-blue-300/80">3 active strategies</p>
          </div>
        </div>

        {/* Chart */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-3xl blur-3xl transform translate-y-8 opacity-20" />
          <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-6 backdrop-blur-sm border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-white">Growth</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-sm text-blue-300/80">
                  1D
                </Button>
                <Button variant="ghost" size="sm" className="text-sm text-white bg-white/10">
                  1W
                </Button>
                <Button variant="ghost" size="sm" className="text-sm text-blue-300/80">
                  1M
                </Button>
              </div>
            </div>
            <div className="h-[240px] -mx-6">
              <BalanceChart />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-4 px-6 mt-8 relative z-10">
          {[
            { icon: Plus, label: "Add", color: "text-blue-400" },
            { icon: ArrowDown, label: "Withdraw", color: "text-purple-400" },
            { icon: Wallet, label: "Invest", color: "text-indigo-400" },
            { icon: Globe2, label: "Send", color: "text-sky-400" },
          ].map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/5 transition-all hover:bg-white/10"
            >
              <div className={`${action.color} bg-white/10 p-3 rounded-xl`}>
                <action.icon className="h-6 w-6" />
              </div>
              <span className="text-sm text-blue-300/80">{action.label}</span>
            </button>
          ))}
        </div>

        {/* News Sections */}
        <div className="px-6 mt-8 space-y-6 relative z-10">
          {/* Sparks Newsletter */}
          <Card className="bg-[#13141A]/80 backdrop-blur-xl border-white/5">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium text-white flex items-center">
                Sparks newsletter
                <ChevronRight className="h-5 w-5 ml-1 opacity-50" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-medium text-white">DeepSeek's Sputnik Moment</h3>
                  <Zap className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-sm text-white/60">31 January</p>
              </div>
            </CardContent>
          </Card>

          {/* News Feed */}
          <Card className="bg-[#13141A]/80 backdrop-blur-xl border-white/5">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium text-white flex items-center">
                News
                <ChevronRight className="h-5 w-5 ml-1 opacity-50" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Dutch GDP Expands 0.4% In Q4",
                  time: "Today, 16:11",
                  source: "dpa AFX Com",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rb9Zma5ugUS1kfdCyCepXuvQ8PHWZn.png"
                },
                {
                  title: "Romanian GDP Expands At Slower Pace, Inflation Eases Slightly",
                  time: "Today, 16:11",
                  source: "dpa AFX Com",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rb9Zma5ugUS1kfdCyCepXuvQ8PHWZn.png"
                }
              ].map((article, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-2">{article.title}</h3>
                    <p className="text-sm text-white/60">
                      {article.time} • {article.source}
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-white/60 hover:text-white">
                See all
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
