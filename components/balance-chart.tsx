"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const generateChartData = () => {
  const currentBalance = 10234.56 // Starting balance
  const apr = 0.1 // 10% APR
  const monthlyRate = apr / 12
  const months = 12 // Show 12 months of data

  const historicalData = [
    { month: "Jan", balance: 8000 },
    { month: "Feb", balance: 8500 },
    { month: "Mar", balance: 8300 },
    { month: "Apr", balance: 9000 },
    { month: "May", balance: 9500 },
    { month: "Jun", balance: 10234.56 }, // Current month
  ]

  const projectedData = Array.from({ length: 6 }, (_, index) => {
    const projectedBalance = currentBalance * Math.pow(1 + monthlyRate, index + 1)
    const monthIndex = (new Date().getMonth() + index + 1) % 12
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return {
      month: monthNames[monthIndex],
      balance: historicalData[5].balance,
      projected: projectedBalance,
    }
  })

  return [...historicalData, ...projectedData]
}

export function BalanceChart() {
  const data = generateChartData()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#13141A]/95 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-xl">
          <p className="text-white/60 text-sm mb-1">{label}</p>
          {payload[0].value && <p className="text-white font-medium">Balance: {formatCurrency(payload[0].value)}</p>}
          {payload[1]?.value && (
            <p className="text-blue-400 font-medium">Projected: {formatCurrency(payload[1].value)}</p>
          )}
        </div>
      )
    }
    return null
  }

  return (
    <div className="relative">
      {/* Legend */}
      <div className="absolute top-0 right-0 flex items-center gap-4 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="text-xs text-white/60">Actual</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-xs text-white/60">Projected</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 32, right: 16, left: 16, bottom: 0 }}>
          <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="projected"
            stroke="#60A5FA"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
            activeDot={{ r: 4, fill: "#60A5FA" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
