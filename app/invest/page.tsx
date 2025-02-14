import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"

const topMovers = {
  gainers: [
    {
      symbol: "BTC",
      name: "Bitcoin",
      change: "+12.34%",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      color: "#F7931A",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      change: "+8.91%",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      color: "#627EEA",
    },
    {
      symbol: "SOL",
      name: "Solana",
      change: "+7.45%",
      image: "https://cryptologos.cc/logos/solana-sol-logo.png",
      color: "#00FFA3",
    },
    {
      symbol: "MATIC",
      name: "Polygon",
      change: "+6.78%",
      image: "https://cryptologos.cc/logos/polygon-matic-logo.png",
      color: "#8247E5",
    },
    {
      symbol: "AVAX",
      name: "Avalanche",
      change: "+5.92%",
      image: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
      color: "#E84142",
    },
    {
      symbol: "DOT",
      name: "Polkadot",
      change: "+4.56%",
      image: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
      color: "#E6007A",
    },
  ],
  losers: [
    {
      symbol: "DOGE",
      name: "Dogecoin",
      change: "-3.21%",
      image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
      color: "#C2A633",
    },
    {
      symbol: "SHIB",
      name: "Shiba Inu",
      change: "-4.32%",
      image: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
      color: "#FFA409",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      change: "-5.67%",
      image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      color: "#0033AD",
    },
    {
      symbol: "XRP",
      name: "Ripple",
      change: "-6.78%",
      image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
      color: "#23292F",
    },
    {
      symbol: "LINK",
      name: "Chainlink",
      change: "-7.89%",
      image: "https://cryptologos.cc/logos/chainlink-link-logo.png",
      color: "#2A5ADA",
    },
    {
      symbol: "UNI",
      name: "Uniswap",
      change: "-8.90%",
      image: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
      color: "#FF007A",
    },
  ],
}

const mostTraded = [
  {
    symbol: "BTC-USD",
    name: "Bitcoin",
    price: "$43,567.89",
    change: "-0.47%",
    ratio: "91% Buys • 9% Sells",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    color: "#F7931A",
  },
  {
    symbol: "ETH-USD",
    name: "Ethereum",
    price: "$2,345.67",
    change: "-0.72%",
    ratio: "87% Buys • 13% Sells",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    color: "#627EEA",
  },
  {
    symbol: "SOL-USD",
    name: "Solana",
    price: "$89.32",
    change: "+1.23%",
    ratio: "76% Buys • 24% Sells",
    image: "https://cryptologos.cc/logos/solana-sol-logo.png",
    color: "#00FFA3",
  },
]

export default function InvestPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-slate-950/20" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at center, #1A1B1E 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.3,
        }}
      />

      <div className="p-6 space-y-6 relative z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Invest</h1>
        </div>

        <Card className="bg-[#13141A]/80 backdrop-blur-xl border-white/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium text-white flex items-center">
              Today&apos;s top movers
              <ChevronRight className="h-5 w-5 ml-1 opacity-50" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="gainers" className="w-full">
              <TabsList className="w-full bg-white/5 border-b border-white/5">
                <TabsTrigger value="gainers" className="flex-1 data-[state=active]:bg-white/10">
                  Top gainers
                </TabsTrigger>
                <TabsTrigger value="losers" className="flex-1 data-[state=active]:bg-white/10">
                  Top losers
                </TabsTrigger>
              </TabsList>
              <TabsContent value="gainers">
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {topMovers.gainers.map((coin) => (
                    <div
                      key={coin.symbol}
                      className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="relative w-16 h-16 mb-2">
                        <div
                          className="absolute inset-0 rounded-full opacity-20"
                          style={{ backgroundColor: coin.color }}
                        />
                        <Image
                          src={coin.image || "/placeholder.svg"}
                          alt={coin.name}
                          width={64}
                          height={64}
                          className="relative z-10"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">{coin.symbol}</p>
                        <p className="text-sm text-emerald-400">{coin.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="losers">
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {topMovers.losers.map((coin) => (
                    <div
                      key={coin.symbol}
                      className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="relative w-16 h-16 mb-2">
                        <div
                          className="absolute inset-0 rounded-full opacity-20"
                          style={{ backgroundColor: coin.color }}
                        />
                        <Image
                          src={coin.image || "/placeholder.svg"}
                          alt={coin.name}
                          width={64}
                          height={64}
                          className="relative z-10"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">{coin.symbol}</p>
                        <p className="text-sm text-red-400">{coin.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-[#13141A]/80 backdrop-blur-xl border-white/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium text-white flex items-center">
              Most traded this week
              <ChevronRight className="h-5 w-5 ml-1 opacity-50" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mostTraded.map((asset) => (
              <div
                key={asset.symbol}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <div
                      className="absolute inset-0 rounded-full opacity-20"
                      style={{ backgroundColor: asset.color }}
                    />
                    <Image
                      src={asset.image || "/placeholder.svg"}
                      alt={asset.name}
                      width={40}
                      height={40}
                      className="relative z-10"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">{asset.symbol}</p>
                    <p className="text-sm text-white/60">{asset.ratio}</p>
                  </div>
                </div>
                <div className="
