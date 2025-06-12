"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, MapPinIcon } from "lucide-react"
import clsx from "clsx"
import { motion, AnimatePresence } from "framer-motion"

// Types

type EventType = "online" | "offline"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: EventType
  description: string
  link: string
}

// Dummy data

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

const filterTabs = [
  { label: "Hepsi", value: "all" },
  { label: "Online", value: "online" },
  { label: "Yüz Yüze", value: "offline" },
] as const

// Card Component

const EventCard = ({ event }: { event: Event }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
  >
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-600 transition">
          {event.title}
        </h3>
        <span
          className={clsx(
            "text-xs font-semibold px-3 py-1 rounded-full",
            event.type === "online"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-yellow-100 text-yellow-700"
          )}
        >
          {event.type === "online" ? "Online" : "Yüz Yüze"}
        </span>
      </div>
      <p className="text-gray-600 text-sm min-h-[48px]">{event.description}</p>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <CalendarIcon className="w-4 h-4" />
        <span>{event.date} • {event.time}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MapPinIcon className="w-4 h-4" />
        <span>{event.location}</span>
      </div>
    </div>
    <Button asChild className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl">
      <Link href={event.link}>Detayları Gör</Link>
    </Button>
  </motion.div>
)

export default function EventsPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | "online" | "offline">("all")

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = filter === "all" || event.type === filter
      return matchesSearch && matchesFilter
    })
  }, [search, filter])

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-blue-700 drop-shadow-sm">Etkinlik Takvimi</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Katılabileceğiniz yaklaşan ruh sağlığı etkinliklerini keşfedin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-6 rounded-2xl shadow border border-gray-100">
          <Input
            placeholder="Etkinlik ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs"
          />
          <div className="flex gap-2">
            {filterTabs.map(({ label, value }) => (
              <Button
                key={value}
                onClick={() => setFilter(value)}
                variant={filter === value ? "default" : "ghost"}
                className={clsx(
                  "capitalize rounded-full px-5",
                  filter === value
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                )}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.length === 0 ? (
              <motion.p
                key="no-events"
                className="text-gray-500 col-span-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Hiç etkinlik bulunamadı.
              </motion.p>
            ) : (
              filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  )
}
