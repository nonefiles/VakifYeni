"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, Tag, Search, Filter, ExternalLink, Bookmark, Share2 } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: "online" | "offline"
  description: string
  link: string
  category: string
  capacity: number
  registered: number
  price: number
  difficulty: "beginner" | "intermediate" | "advanced"
  tags: string[]
  instructor: string
  duration: string
  featured: boolean
}

const events: Event[] = [
  {
    id: "1",
    title: "Ruh Sağlığına Giriş Semineri",
    date: "2025-06-28",
    time: "19:00",
    location: "Zoom",
    type: "online",
    description: "Temel psikolojik kavramların ele alınacağı kapsamlı seminer. Ruh sağlığı konusunda farkındalık oluşturmayı hedefleyen bu etkinlik, günlük yaşamda karşılaştığımız psikolojik durumları anlamamızı sağlayacak.",
    link: "/etkinlikler/ruhsagligi-semineri",
    category: "Seminer",
    capacity: 100,
    registered: 67,
    price: 0,
    difficulty: "beginner",
    tags: ["Ruh Sağlığı", "Temel Bilgiler", "Farkındalık"],
    instructor: "Dr. Ayşe Demir",
    duration: "2 saat",
    featured: true
  },
  {
    id: "2",
    title: "Gönüllü Buluşması",
    date: "2025-07-06",
    time: "14:00",
    location: "İstanbul Ofisi",
    type: "offline",
    description: "Mevcut ve yeni gönüllülerle yüz yüze tanışma etkinliği. Sosyal projelerimizi tanıtacağımız ve birlikte çalışma fırsatları yaratacağımız keyifli bir buluşma.",
    link: "/etkinlikler/gonullu-bulusmasi",
    category: "Buluşma",
    capacity: 50,
    registered: 23,
    price: 0,
    difficulty: "beginner",
    tags: ["Gönüllülük", "Sosyal Sorumluluk", "Networking"],
    instructor: "Gönüllü Koordinatörleri",
    duration: "3 saat",
    featured: false
  },
  {
    id: "3",
    title: "Şema Terapi Atölyesi",
    date: "2025-07-20",
    time: "10:00",
    location: "Ankara",
    type: "offline",
    description: "Uygulamalı Şema Terapi atölyesi. Şema terapi teknikleri ve uygulamaları üzerine detaylı bir eğitim. Kişilik bozuklukları ve kronik sorunların tedavisinde kullanılan modern yaklaşımlar.",
    link: "/etkinlikler/sema-terapi-atolyesi",
    category: "Atölye",
    capacity: 25,
    registered: 18,
    price: 150,
    difficulty: "advanced",
    tags: ["Şema Terapi", "Kişilik Bozuklukları", "Tedavi"],
    instructor: "Prof. Dr. Mehmet Kaya",
    duration: "1 gün",
    featured: true
  },
  {
    id: "4",
    title: "Stres Yönetimi Webinarı",
    date: "2025-07-15",
    time: "18:30",
    location: "Microsoft Teams",
    type: "online",
    description: "Günlük hayatta stresle başa çıkma teknikleri. İş, okul ve kişisel yaşamda stres faktörleri ve bunlarla sağlıklı şekilde mücadele etme yöntemleri.",
    link: "/etkinlikler/stres-yonetimi",
    category: "Webinar",
    capacity: 200,
    registered: 145,
    price: 0,
    difficulty: "beginner",
    tags: ["Stres", "Yaşam Kalitesi", "Pratik Teknikler"],
    instructor: "Psikolog Zeynep Özkan",
    duration: "1.5 saat",
    featured: false
  },
  {
    id: "5",
    title: "Çocuk Psikolojisi Uzmanlık Kursu",
    date: "2025-08-10",
    time: "09:00",
    location: "İzmir Eğitim Merkezi",
    type: "offline",
    description: "Çocuk psikolojisi alanında uzmanlaşmak isteyenler için kapsamlı kurs. Gelişim psikolojisi, oyun terapisi ve aile danışmanlığı konularını kapsayan yoğun eğitim programı.",
    link: "/etkinlikler/cocuk-psikolojisi-kursu",
    category: "Kurs",
    capacity: 30,
    registered: 12,
    price: 500,
    difficulty: "intermediate",
    tags: ["Çocuk Psikolojisi", "Gelişim", "Oyun Terapisi"],
    instructor: "Doç. Dr. Fatma Arslan",
    duration: "3 gün",
    featured: true
  },
  {
    id: "6",
    title: "Mindfulness ve Meditasyon",
    date: "2025-07-25",
    time: "20:00",
    location: "Zoom",
    type: "online",
    description: "Mindfulness pratiği ve meditasyon teknikleri. Zihinsel sağlık için farkındalık tabanlı yaklaşımlar ve günlük yaşama entegrasyon yöntemleri.",
    link: "/etkinlikler/mindfulness-meditasyon",
    category: "Pratik",
    capacity: 80,
    registered: 56,
    price: 75,
    difficulty: "beginner",
    tags: ["Mindfulness", "Meditasyon", "Zihinsel Sağlık"],
    instructor: "Meditasyon Uzmanı Can Yılmaz",
    duration: "2 saat",
    featured: false
  }
]

const categories = ["Hepsi", "Seminer", "Atölye", "Webinar", "Buluşma", "Kurs", "Pratik"]
const difficulties = ["Hepsi", "Başlangıç", "Orta", "İleri"]

export default function EventsPage() {
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState<"all" | "online" | "offline">("all")
  const [categoryFilter, setCategoryFilter] = useState("Hepsi")
  const [difficultyFilter, setDifficultyFilter] = useState("Hepsi")
  const [sortBy, setSortBy] = useState<"date" | "price" | "popularity">("date")
  const [showFilters, setShowFilters] = useState(false)

  const filteredEvents = useMemo(() => {
    let filtered = events.filter((event) => {
      const matchTitle = event.title.toLowerCase().includes(search.toLowerCase()) ||
                        event.description.toLowerCase().includes(search.toLowerCase()) ||
                        event.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      const matchType = typeFilter === "all" || event.type === typeFilter
      const matchCategory = categoryFilter === "Hepsi" || event.category === categoryFilter
      const matchDifficulty = difficultyFilter === "Hepsi" || 
                             (difficultyFilter === "Başlangıç" && event.difficulty === "beginner") ||
                             (difficultyFilter === "Orta" && event.difficulty === "intermediate") ||
                             (difficultyFilter === "İleri" && event.difficulty === "advanced")
      
      return matchTitle && matchType && matchCategory && matchDifficulty
    })

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "price":
          return a.price - b.price
        case "popularity":
          return b.registered - a.registered
        default:
          return 0
      }
    })

    return filtered
  }, [search, typeFilter, categoryFilter, difficultyFilter, sortBy])

  const featuredEvents = events.filter(event => event.featured)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-700"
      case "intermediate": return "bg-yellow-100 text-yellow-700"
      case "advanced": return "bg-red-100 text-red-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "Başlangıç"
      case "intermediate": return "Orta"
      case "advanced": return "İleri"
      default: return "Bilinmiyor"
    }
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container relative">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Etkinlik Takvimi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ruh sağlığı alanındaki yolculuğunuza bir adım atın. Uzman eğitmenlerle birlikte öğrenin, 
              gelişin ve toplulukla bağlantı kurun.
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {events.length} Etkinlik
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {events.reduce((acc, event) => acc + event.registered, 0)} Katılımcı
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="container py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Öne Çıkan Etkinlikler</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ÖNE ÇIKAN
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 pr-20">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {event.price === 0 ? "ÜCRETSİZ" : `${event.price} ₺`}
                    </span>
                    <span className="text-sm text-gray-500">
                      {event.registered}/{event.capacity} kişi
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="container space-y-8 pb-20">
        {/* Search and Filters */}
        <section className="bg-white rounded-3xl shadow-lg p-8 border">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Etkinlik, eğitmen veya konu ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-12 text-lg rounded-2xl border-2 focus:border-blue-500"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm font-medium text-gray-600">Hızlı Filtreler:</span>
              {[
                { label: "Hepsi", value: "all" },
                { label: "Online", value: "online" },
                { label: "Yüz Yüze", value: "offline" },
              ].map((btn) => (
                <Button
                  key={btn.value}
                  variant={typeFilter === btn.value ? "default" : "outline"}
                  onClick={() => setTypeFilter(btn.value as any)}
                  className="rounded-full px-4 py-2 text-sm"
                >
                  {btn.label}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-full px-4 py-2 text-sm ml-auto"
              >
                <Filter className="w-4 h-4 mr-2" />
                Gelişmiş Filtreler
              </Button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="border-t pt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <label className="block text-sm font-medium mb-2">Kategori</label>
                    <select 
                      value={categoryFilter} 
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="w-full p-2 border rounded-lg"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Seviye</label>
                    <select 
                      value={difficultyFilter} 
                      onChange={(e) => setDifficultyFilter(e.target.value)}
                      className="w-full p-2 border rounded-lg"
                    >
                      {difficulties.map(diff => (
                        <option key={diff} value={diff}>{diff}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sıralama</label>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="date">Tarihe Göre</option>
                      <option value="price">Fiyata Göre</option>
                      <option value="popularity">Popülerliğe Göre</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Events Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Tüm Etkinlikler ({filteredEvents.length})
            </h2>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl shadow-sm">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Etkinlik bulunamadı</h3>
                <p className="text-gray-600">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
              </div>-100 rounded-full flex items-center justify-center mx-auto">
                  <SearchIcon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Etkinlik bulunamadı</h3>
                <p className="text-gray-600">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                >
                  {/* Event Header */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            event.type === "online" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                          }`}>
                            {event.type === "online" ? "Online" : "Yüz Yüze"}
                          </span>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(event.difficulty)}`}>
                            {getDifficultyText(event.difficulty)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{event.category}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="p-2 rounded-full">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2 rounded-full">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{event.time} • {event.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{event.instructor}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {event.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {event.tags.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{event.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Event Footer */}
                  <div className="px-6 pb-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">
                          {event.price === 0 ? "ÜCRETSİZ" : `${event.price} ₺`}
                        </span>
                        {event.price > 0 && (
                          <span className="text-sm text-gray-500 ml-2">kişi başı</span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-800">
                          {event.registered}/{event.capacity}
                        </div>
                        <div className="text-xs text-gray-500">kişi kayıtlı</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl h-12 font-semibold group">
                      <span>Detayları Gör</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
