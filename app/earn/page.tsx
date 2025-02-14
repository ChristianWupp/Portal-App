import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronRight, Shield, Wallet } from 'lucide-react'

const strategies = {
  "Stablecoin Yield": [
    {
      name: "Aave",
      logo: "https://cryptologos.cc/logos/aave-aave-logo.png",
      color: "#B6509E",
      apr: "4.23%",
      description: "Earn yield on your stablecoins through Aave's lending protocol",
      longDescription:
        "Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers can borrow in an overcollateralized fashion.",
      features: [
        "Automated interest rates",
        "Flash loans",
        "Multiple asset support",
        "Insurance through Safety Module",
      ],
      risks: ["Smart contract risk", "Market risk", "Interest rate fluctuation"],
    },
    {
      name: "Ethena",
      logo: "https://pbs.twimg.com/profile_images/1726441665846599680/Es9hG0aA_400x400.jpg",
      color: "#627EEA",
      apr: "18.91%",
      description: "Generate high yields through Ethena's USDe stablecoin strategy",
      longDescription:
        "Ethena is a novel protocol that enables users to generate USDe, a delta-neutral stablecoin, while earning high yields through a combination of perpetual futures and staking rewards.",
      features: ["High yield generation", "Delta-neutral strategy", "Automated rebalancing", "No liquidation risk"],
      risks: ["Protocol risk", "Stablecoin de-peg risk", "Market volatility impact"],
    },
    {
      name: "MakerDAO",
      logo: "https://cryptologos.cc/logos/maker-mkr-logo.png",
      color: "#1AAB9B",
      apr: "3.89%",
      description: "Earn yield on DAI through MakerDAO's Dai Savings Rate",
      longDescription:
        "MakerDAO's Dai Savings Rate (DSR) allows users to earn yield on their DAI holdings. The DSR is a core component of the Maker Protocol, offering a stable and predictable return on DAI deposits.",
      features: ["No lock-up period", "Governed by MKR holders", "Direct DAI yield", "No minimum deposit"],
      risks: ["Governance risk", "Variable interest rate", "DAI stability risk"],
    },
  ],
}

export default function EarnPage() {
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
          <h1 className="text-2xl font-bold text-white">Earn</h1>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[#13141A]/80 backdrop-blur-xl border-white/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-white/60">Total Value Locked</span>
              </div>
              <p className="text-2xl font-bold text-white">$1.2B</p>
            </CardContent>
          </Card>
          <Card className="bg-[#13141A]/80 backdrop-blur-xl border-white/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Wallet className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-white/60">Your Earnings</span>
              </div>
              <p className="text-2xl font-bold text-white">$123.45</p>
            </CardContent>
          </Card>
        </div>

        {Object.entries(strategies).map(([category, items]) => (
          <Card key={category} className="bg-[#13141A]/80 backdrop-blur-xl border-white/5">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-white flex items-center">
                {category}
                <ChevronRight className="h-5 w-5 ml-1 opacity-50" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((strategy) => (
                <Dialog key={strategy.name}>
                  <DialogTrigger asChild>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="relative w-12 h-12">
                        <div
                          className="absolute inset-0 rounded-full opacity-20"
                          style={{ backgroundColor: strategy.color }}
                        />
                        <Image
                          src={strategy.logo || "/placeholder.svg"}
                          alt={strategy.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{strategy.name}</h3>
                        <p className="text-sm text-white/60">{strategy.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-white">{strategy.apr}</p>
                        <p className="text-sm text-white/60">APR</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-[#13141A] border-white/10 text-white">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <Image
                          src={strategy.logo || "/placeholder.svg"}
                          alt={strategy.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        {strategy.name}
                      </DialogTitle>
                      <DialogDescription className="text-white/60">{strategy.longDescription}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-white mb-2">Features</h4>
                        <ul className="space-y-2">
                          {strategy.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-white/60">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-white mb-2">Risks</h4>
                        <ul className="space-y-2">
                          {strategy.risks.map((risk, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-white/60">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                        Start Earning {strategy.apr}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
