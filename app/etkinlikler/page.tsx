"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, MapPinIcon } from "lucide-react"
import clsx from "clsx"

// Sample Event Data
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
    <div className="py-20 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="container space-y-20">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4 tracking-tight drop-shadow-sm">
            Etkinlik Takvimi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Yaklaşan etkinliklerimizle ruh sağlığı alanındaki yolculuğa siz de katılın.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center bg-white p-6 rounded-xl shadow-sm">
          <Input
            placeholder="Etkinlik ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs shadow-sm border-gray-300"
          />

          <div className="flex gap-2">
            {[
              { label: "Hepsi", value: "all" },
              { label: "Online", value: "online" },
              { label: "Yüz Yüze", value: "offline" },
            ].map((btn) => (
              <Button
                key={btn.value}
                variant={filter === btn.value ? "default" : "outline"}
                onClick={() => setFilter(btn.value as any)}
                className="capitalize rounded-full px-5"
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Event Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.length === 0 ? (
            <p className="text-gray-500">Hiç etkinlik bulunamadı.</p>
          ) : (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-blue-700">
                      {event.title}
                    </h3>
                    <span
                      className={clsx(
                        "text-xs font-semibold px-3 py-1 rounded-full",
                        event.type === "online"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      )}
                    >
                      {event.type === "online" ? "Online" : "Yüz Yüze"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2 min-h-[48px]">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button asChild className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 rounded-xl">
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
