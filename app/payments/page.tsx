import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Search, Calendar, Plus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Mock data for contacts with transactions
const contacts = [
  {
    id: 1,
    name: "Dhruv Sachdev",
    image: "https://v0.dev/placeholder-nft-1.svg",
    isNft: true,
    nftCollection: "Bored Ape",
    lastTransaction: {
      type: "received",
      amount: "5.50",
      emoji: "🤑",
      date: "5 Sep 2024",
    },
  },
  {
    id: 2,
    name: "Alvaro Bertran",
    initials: "AB",
    bgColor: "bg-emerald-500",
    lastTransaction: {
      type: "received",
      amount: "5",
      emoji: "🤑",
      date: "5 Sep 2024",
    },
  },
  {
    id: 3,
    name: "Gabriel Dominissi",
    image: "/placeholder.svg",
    lastTransaction: {
      type: "sent",
      amount: "15",
      emoji: "💸",
      date: "5 Sep 2024",
    },
  },
  {
    id: 4,
    name: "Albert Diaz Casellas",
    initials: "AD",
    bgColor: "bg-orange-500",
    lastTransaction: {
      type: "received",
      amount: "1,000",
      emoji: "🤑",
      date: "27 Aug 2024",
    },
  },
  {
    id: 5,
    name: "Pablo Muñoz",
    initials: "PM",
    bgColor: "bg-blue-500",
    lastTransaction: {
      type: "received",
      amount: "10",
      emoji: "🤑",
      date: "17 Feb 2024",
    },
  },
  {
    id: 6,
    name: "Mar Aguilar Lopez",
    image: "https://v0.dev/placeholder-nft-2.svg",
    isNft: true,
    nftCollection: "CryptoPunks",
    lastTransaction: {
      type: "message",
      content: "Nada!! Todo ok",
      date: "21 Dec 2023",
    },
  },
]

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-slate-950/20" />

      {/* Header */}
      <div className="p-6 flex items-center gap-4 relative z-10">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
          <Input className="w-full bg-white/10 border-0 pl-9 placeholder:text-white/40" placeholder="Search" />
        </div>
        <Button size="icon" variant="ghost" className="rounded-full bg-white/10">
          <Calendar className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" className="rounded-full bg-white/10">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      {/* Contacts List */}
      <div className="px-6 space-y-2 relative z-10">
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors border-0 cursor-pointer"
          >
            <div className="relative">
              <Avatar
