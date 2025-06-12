'use client'

import { useState } from "react"
import { format } from "date-fns"
import { motion } from "framer-motion"
import { CalendarDays, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const events = [
  {
    id: 1,
    title: "Ruh Sağlığı Semineri",
    date: "2025-06-28",
    time: "19:00",
    location: "Online (Zoom)",
    description: "Temel psikoloji kavramları hakkında kapsamlı seminer.",
    category: "Eğitim"
  },
  {
    id: 2,
    title: "Gönüllü Buluşması",
    date: "2025-07-06",
    time: "14:00",
    location: "İstanbul",
    description: "Gönüllülerle kaynaşma ve planlama buluşması.",
    category: "Toplantı"
  },
  {
    id: 3,
    title: "Şema Terapi Atölyesi",
    date: "2025-07-20",
    time: "10:00",
    location: "Ankara",
    description: "Uygulamalı şema terapi eğitimi ve süpervizyon.",
    category: "Atölye"
  },
]

export default function EventsPage() {
  const [filter, setFilter] = useState("")
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(filter.toLowerCase()) ||
    event.category.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="container py-12 space-y-10">
      {/* Hero */}
      <section className="text-center">
        <motion.h1
          className="text-4xl font-bold text-green-700 md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Etkinlik Takvimi
        </motion.h1>
        <p className="mt-4 text-gray-600">
          Yaklaşan seminer, atölye ve buluşmalar hakkında bilgi alın.
        </p>
      </section>

      {/* Filtre */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Input
          placeholder="Etkinlik ara..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/3"
        />
        <Select onValueChange={setFilter}>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Kategori Seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Tümü</SelectItem>
            <SelectItem value="Eğitim">Eğitim</SelectItem>
            <SelectItem value="Toplantı">Toplantı</SelectItem>
            <SelectItem value="Atölye">Atölye</SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* Etkinlik Kartları */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map(event => (
          <Card key={event.id} className="hover:shadow-md transition-all">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays className="w-4 h-4" />
                {format(new Date(event.date), "dd MMMM yyyy")} •
                <Clock className="w-4 h-4" />
                {event.time}
              </div>
              <h3 className="text-xl font-semibold text-green-700">{event.title}</h3>
              <p className="text-gray-600">{event.location}</p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="mt-2">Detayları Gör</Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <h3 className="text-xl font-bold text-green-700">{event.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{event.category} • {event.location}</p>
                  <p className="mt-4 text-gray-700">{event.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Tarih: {format(new Date(event.date), "dd MMMM yyyy")} | Saat: {event.time}
                  </p>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-12 space-y-6">
        <h2 className="text-3xl font-bold text-green-700">Sen de Katıl!</h2>
        <p className="text-gray-600">
          Etkinliklerimize katılmak için gönüllü olabilir veya bizimle iletişime geçebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-green-600 text-white hover:bg-green-700">
            <a href="/gonullu-ol">Gönüllü Ol</a>
          </Button>
          <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
            <a href="/iletisim">İletişim</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
