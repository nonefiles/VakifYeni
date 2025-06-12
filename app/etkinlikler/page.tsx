"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, MapPinIcon } from "lucide-react"
import clsx from "clsx"


interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: "online" | "offline"
  description: string
  link: string
}

const events: Event[] = [
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

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchTitle = event.title.toLowerCase().includes(search.toLowerCase())
      const matchType = filter === "all" || event.type === filter
      return matchTitle && matchType
    })
  }, [search, filter])

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="container space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
            Etkinlik Takvimi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ruh sağlığı alanındaki yolculuğunuza bir adım atın. Katılabileceğiniz etkinlikleri keşfedin.
          </p>
        </header>

        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl border shadow">
          <Input
            placeholder="Etkinlik ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs"
          />
          <div className="flex gap-2">
            {[
              { label: "Hepsi", value: "all" },
              { label: "Online", value: "online" },
              { label: "Yüz Yüze", value: "offline" },
            ].map((btn) => (
              <Button
                key={btn.value}
                variant={filter === btn.value ? "default" : "ghost"}
                onClick={() => setFilter(btn.value as any)}
                className={clsx(
                  "capitalize px-5 rounded-full",
                  filter === btn.value ? "bg-blue-600 text-white hover:bg-blue-700" : "text-muted-foreground border"
                )}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </section>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.length === 0 ? (
            <p className="text-center col-span-full text-muted-foreground">Hiç etkinlik bulunamadı.</p>
          ) : (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600">
                      {event.title}
                    </h3>
                    <span className={clsx(
                      "text-xs font-medium px-3 py-1 rounded-full",
                      event.type === "online" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    )}>
                      {event.type === "online" ? "Online" : "Yüz Yüze"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground min-h-[48px]">
                    {event.description}
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <Button asChild className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl">
                  <Link href={event.link}>Detayları Gör</Link>
                </Button>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  )
}

