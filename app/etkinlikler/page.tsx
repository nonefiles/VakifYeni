"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, MapPinIcon, SearchIcon } from "lucide-react"

type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: "online" | "offline"
  description: string
  link: string
}

const eventsData: Event[] = [
  {
    id: "1",
    title: "Ruh Sağlığına Giriş Semineri",
    date: "2025-06-28",
    time: "19:00",
    location: "Zoom",
    type: "online",
    description: "Temel psikolojik kavramların ele alınacağı seminer.",
    link: "/etkinlikler/ruhsagligi-semineri",
  },
  {
    id: "2",
    title: "Gönüllü Buluşması",
    date: "2025-07-06",
    time: "14:00",
    location: "İstanbul Ofisi",
    type: "offline",
    description: "Mevcut ve yeni gönüllülerle yüz yüze tanışma etkinliği.",
    link: "/etkinlikler/gonullu-bulusmasi",
  },
  {
    id: "3",
    title: "Şema Terapi Atölyesi",
    date: "2025-07-20",
    time: "10:00",
    location: "Ankara",
    type: "offline",
    description: "Uygulamalı Şema Terapi atölyesi.",
    link: "/etkinlikler/sema-terapi-atolyesi",
  },
]

export default function EventsPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | "online" | "offline">("all")

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || event.type === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="py-16">
      <div className="container space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Etkinlik Takvimi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yol Arkadaşları Psikoloji Vakfı'nın yaklaşan seminer, atölye ve gönüllü etkinliklerini takip edin.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Input
            placeholder="Etkinlik ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs"
          />

          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              Hepsi
            </Button>
            <Button
              variant={filter === "online" ? "default" : "outline"}
              onClick={() => setFilter("online")}
            >
              Online
            </Button>
            <Button
              variant={filter === "offline" ? "default" : "outline"}
              onClick={() => setFilter("offline")}
            >
              Yüz Yüze
            </Button>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredEvents.length === 0 ? (
            <p className="text-gray-500">Hiç etkinlik bulunamadı.</p>
          ) : (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl font-semibold text-green-700 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button asChild className="bg-green-600 text-white hover:bg-green-700">
                  <Link href={event.link}>Detayları Gör</Link>
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
