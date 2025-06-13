"use client"

import { useState } from "react"
import { format, addDays, startOfWeek, eachDayOfInterval, isSameDay } from "date-fns"
import { tr } from "date-fns/locale"
import Link from "next/link"

interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
}

const events: Event[] = [
  {
    id: "1",
    title: "Ruh Sağlığına Giriş Semineri",
    date: "2025-06-28",
    time: "19:00",
    description: "Temel psikolojik kavramların ele alınacağı kapsamlı seminer."
  },
  {
    id: "2",
    title: "Gönüllü Buluşması",
    date: "2025-07-06",
    time: "14:00",
    description: "Mevcut ve yeni gönüllülerle yüz yüze tanışma etkinliği."
  },
  {
    id: "3",
    title: "Şema Terapi Atölyesi",
    date: "2025-07-20",
    time: "10:00",
    description: "Uygulamalı Şema Terapi atölyesi."
  },
  {
    id: "4",
    title: "Stres Yönetimi Webinarı",
    date: "2025-07-15",
    time: "18:30",
    description: "Günlük hayatta stresle başa çıkma teknikleri."
  },
  {
    id: "5",
    title: "Çocuk Psikolojisi Uzmanlık Kursu",
    date: "2025-08-10",
    time: "09:00",
    description: "Çocuk psikolojisi alanında uzmanlaşmak isteyenler için kapsamlı kurs."
  },
  {
    id: "6",
    title: "Mindfulness ve Meditasyon",
    date: "2025-07-25",
    time: "20:00",
    description: "Mindfulness pratiği ve meditasyon teknikleri."
  }
]

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const today = new Date()
  const startOfCurrentWeek = startOfWeek(today, { locale: tr })
  const daysOfWeek = eachDayOfInterval({
    start: startOfCurrentWeek,
    end: addDays(startOfCurrentWeek, 6)
  })

  const filteredEvents = events.filter(event => isSameDay(new Date(event.date), selectedDate))

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="container max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
          Etkinlik Takvimi
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Ruh sağlığı alanındaki yolculuğunuza bir adım atın. Uzman eğitmenlerle birlikte öğrenin, gelişin ve toplulukla bağlantı kurun.
        </p>
      </section>

      <section className="container max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="grid grid-cols-7 gap-4 mb-6">
            {daysOfWeek.map(day => (
              <button
                key={day.toString()}
                onClick={() => setSelectedDate(day)}
                className={`py-2 rounded-xl transition-colors ${isSameDay(day, selectedDate) ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <div className="text-sm font-medium">{format(day, "EEE", { locale: tr })}</div>
                <div className="text-lg font-bold">{format(day, "d", { locale: tr })}</div>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Seçilen tarihte etkinlik bulunamadı.</p>
              </div>
            ) : (
              filteredEvents.map(event => (
                <div key={event.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                      ÜCRETSİZ
                    </span>
                    <span className="text-gray-600">
                      {format(new Date(event.date), "d MMMM yyyy, EEEE", { locale: tr })} • {event.time}
                    </span>
                  </div>
                  <Link href={`/etkinlikler/${event.id}`} className="inline-block">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl h-12 font-semibold transition-colors">
                      Detayları Gör
                    </button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
