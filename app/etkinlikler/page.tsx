"use client"

import { useState } from 'react'
import { Calendar, MapPin, Clock, Grid, List } from 'lucide-react'

// Etkinlik veri tipi
interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  category: string
}

// Örnek etkinlikler
const events: Event[] = [
  {
    id: '1',
    title: 'Ruh Sağlığına Giriş Semineri',
    date: '2025-06-28',
    time: '19:00',
    location: 'Online - Zoom',
    description: 'Temel psikolojik kavramların ele alınacağı seminer.',
    category: 'Seminer'
  },
  {
    id: '2',
    title: 'Mindfulness Meditasyonu',
    date: '2025-06-25',
    time: '18:00',
    location: 'Online - Zoom',
    description: 'Farkındalık ve meditasyon teknikleri üzerine workshop.',
    category: 'Workshop'
  },
  {
    id: '3',
    title: 'Gönüllü Buluşması',
    date: '2025-07-06',
    time: '14:00',
    location: 'İstanbul Ofisi',
    description: 'Mevcut ve yeni gönüllülerle yüz yüze tanışma etkinliği.',
    category: 'Buluşma'
  },
  {
    id: '4',
    title: 'Stres Yönetimi Semineri',
    date: '2025-07-15',
    time: '16:00',
    location: 'Ankara Merkez',
    description: 'Günlük hayatta etkili stres yönetimi teknikleri.',
    category: 'Seminer'
  },
  {
    id: '5',
    title: 'Şema Terapi Atölyesi',
    date: '2025-07-20',
    time: '10:00',
    location: 'İzmir Ofisi',
    description: 'Uygulamalı Şema Terapi teknikleri atölyesi.',
    category: 'Atölye'
  }
]

// Etkinlik kartı bileşeni
const EventCard = ({ event }: { event: Event }) => {
  const handleDetailsClick = () => {
    // Gerçek uygulamada burada routing yapılabilir
    alert(`${event.title} etkinliği için detay sayfasına yönlendiriliyorsunuz...`)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-3">
          <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            Ücretsiz
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm text-center leading-relaxed">
          {event.description}
        </p>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(event.date).toLocaleDateString('tr-TR', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <button
          onClick={handleDetailsClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 mt-6"
        >
          Detayları Gör
        </button>
      </div>
    </div>
  )
}

// Takvim bileşeni
const CalendarView = ({ events }: { events: Event[] }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Ayın başından önceki boş günler
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Ayın günleri
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const getEventsForDate = (day: number) => {
    if (!day) return []
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(event => event.date === dateStr)
  }

  const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ]

  const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
      </div>
      
      {/* Gün başlıkları */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {dayNames.map(day => (
          <div key={day} className="p-3 text-center font-medium text-gray-600 text-sm">
            {day}
          </div>
        ))}
      </div>
      
      {/* Takvim günleri */}
      <div className="grid grid-cols-7 gap-1">
        {getDaysInMonth().map((day, index) => {
          const dayEvents = day ? getEventsForDate(day) : []
          return (
            <div
              key={index}
              className={`min-h-[100px] p-2 border rounded-lg text-center ${
                day ? 'bg-white hover:bg-gray-50' : 'bg-gray-50'
              } ${dayEvents.length > 0 ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}
            >
              {day && (
                <>
                  <div className="font-medium text-gray-800 mb-2">{day}</div>
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className="text-xs p-1 rounded mb-1 bg-blue-100 text-blue-700 cursor-pointer hover:bg-blue-200 transition-colors text-center"
                      title={`${event.title} - ${event.time}`}
                      onClick={() => alert(`${event.title} detayları...`)}
                    >
                      {event.title}
                    </div>
                  ))}
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Ana bileşen
export default function EventCalendar() {
  const [view, setView] = useState<'list' | 'calendar'>('list')

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Etkinlik Takvimi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ruh sağlığı alanındaki ücretsiz etkinliklerimize katılın. 
            Tüm etkinlikler ücretsizdir ve herkes için açıktır.
          </p>
        </div>

        {/* Görünüm değiştirme butonları */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setView('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                view === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <List className="w-4 h-4" />
              Liste
            </button>
            <button
              onClick={() => setView('calendar')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ml-1 ${
                view === 'calendar'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Grid className="w-4 h-4" />
              Takvim
            </button>
          </div>
        </div>

        {/* İçerik */}
        {view === 'list' ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <CalendarView events={events} />
        )}

        {/* Alt bilgi */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Tüm etkinlikler ücretsizdir • Kayıt için etkinlik detaylarını görüntüleyin</p>
        </div>
      </div>
    </div>
  )
}
