"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Film, Clock, Filter } from "lucide-react"

const movies = [
  {
    id: 1,
    title: "Good Will Hunting",
    director: "Gus Van Sant",
    year: 1997,
    duration: 126,
    genre: "Drama",
    category: "Terapi",
    rating: 4.8,
    imdb: 8.3,
    description: "Yetenekli ama travmatik geçmişi olan genç bir adamın terapist ile kurduğu ilişki ve iyileşme süreci.",
    image: "/placeholder.svg?height=400&width=300&query=good+will+hunting+film+poster",
    themes: ["Terapi İlişkisi", "Travma", "Güven", "Kişisel Gelişim"],
    therapeuticValue: "Terapötik ilişkinin gücünü ve güven inşasının önemini gösterir.",
  },
  {
    id: 2,
    title: "A Beautiful Mind",
    director: "Ron Howard",
    year: 2001,
    duration: 135,
    genre: "Biyografi/Drama",
    category: "Ruh Sağlığı",
    rating: 4.7,
    imdb: 8.2,
    description: "Şizofreni ile mücadele eden matematikçi John Nash'in hayat hikayesi.",
    image: "/placeholder.svg?height=400&width=300&query=beautiful+mind+film+poster",
    themes: ["Şizofreni", "Aile Desteği", "Stigma", "Dayanıklılık"],
    therapeuticValue: "Ruh sağlığı sorunlarına karşı empati geliştirmeye yardımcı olur.",
  },
  {
    id: 3,
    title: "Inside Out",
    director: "Pete Docter",
    year: 2015,
    duration: 95,
    genre: "Animasyon",
    category: "Çocuk Psikolojisi",
    rating: 4.9,
    imdb: 8.1,
    description: "Bir çocuğun zihnindeki duygular ve psikolojik gelişim süreci.",
    image: "/placeholder.svg?height=400&width=300&query=inside+out+pixar+film+poster",
    themes: ["Duygusal Gelişim", "Çocuk Psikolojisi", "Aile", "Değişim"],
    therapeuticValue: "Duyguları anlama ve ifade etme konusunda çocuklara yardımcı olur.",
  },
  {
    id: 4,
    title: "The Pursuit of Happyness",
    director: "Gabriele Muccino",
    year: 2006,
    duration: 117,
    genre: "Drama",
    category: "Motivasyon",
    rating: 4.6,
    imdb: 8.0,
    description: "Zorluklarla mücadele eden bir babanın umudunu kaybetmeden hayata tutunma hikayesi.",
    image: "/placeholder.svg?height=400&width=300&query=pursuit+of+happyness+film+poster",
    themes: ["Dayanıklılık", "Baba-Çocuk İlişkisi", "Umut", "Mücadele"],
    therapeuticValue: "Zorluklarla başa çıkma stratejileri ve umudun gücünü gösterir.",
  },
  {
    id: 5,
    title: "Rain Man",
    director: "Barry Levinson",
    year: 1988,
    duration: 133,
    genre: "Drama",
    category: "Otizm",
    rating: 4.5,
    imdb: 8.0,
    description: "Otistik kardeşi ile yolculuk eden bir adamın empati ve anlayış geliştirme süreci.",
    image: "/placeholder.svg?height=400&width=300&query=rain+man+film+poster",
    themes: ["Otizm", "Kardeş İlişkisi", "Empati", "Kabul"],
    therapeuticValue: "Otizm spektrum bozukluğu hakkında farkındalık yaratır.",
  },
  {
    id: 6,
    title: "The Theory of Everything",
    director: "James Marsh",
    year: 2014,
    duration: 123,
    genre: "Biyografi/Drama",
    category: "Hastalık",
    rating: 4.4,
    imdb: 7.7,
    description: "Stephen Hawking'in ALS hastalığı ile mücadelesi ve eşiyle ilişkisi.",
    image: "/placeholder.svg?height=400&width=300&query=theory+of+everything+film+poster",
    themes: ["Kronik Hastalık", "Evlilik", "Destek", "Bilim"],
    therapeuticValue: "Kronik hastalıklarla yaşama ve aile desteğinin önemini gösterir.",
  },
]

const categories = ["Tümü", "Terapi", "Ruh Sağlığı", "Çocuk Psikolojisi", "Motivasyon", "Otizm", "Hastalık"]
const genres = ["Tümü", "Drama", "Biyografi/Drama", "Animasyon"]

export default function FilmlerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [selectedGenre, setSelectedGenre] = useState("Tümü")
  const [sortBy, setSortBy] = useState("title")

  const filteredMovies = movies
    .filter((movie) => {
      const matchesSearch =
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.themes.some((theme) => theme.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "Tümü" || movie.category === selectedCategory
      const matchesGenre = selectedGenre === "Tümü" || movie.genre === selectedGenre
      return matchesSearch && matchesCategory && matchesGenre
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "year":
          return b.year - a.year
        case "imdb":
          return b.imdb - a.imdb
        case "duration":
          return b.duration - a.duration
        default:
          return a.title.localeCompare(b.title)
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <div className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Film className="w-16 h-16 mx-auto mb-6 text-gray-600" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Lora'] text-gray-800">Önerilen Filmler</h1>
            <p className="text-xl text-gray-600 mb-8">
              Psikoloji ve ruh sağlığı konularında farkındalık yaratacak değerli sinema eserleri
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Film, yönetmen veya tema ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Tür" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Başlığa Göre</SelectItem>
                    <SelectItem value="year">Yıla Göre</SelectItem>
                    <SelectItem value="rating">Puana Göre</SelectItem>
                    <SelectItem value="imdb">IMDB'ye Göre</SelectItem>
                    <SelectItem value="duration">Süreye Göre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sm text-gray-500">{filteredMovies.length} film bulundu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMovies.map((movie) => (
            <Card key={movie.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{movie.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-white">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{movie.duration} dk</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {movie.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>IMDB {movie.imdb}</span>
                  </div>
                </div>
                <CardTitle className="text-lg font-['Lora'] line-clamp-2">{movie.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-700">
                  Yönetmen: {movie.director}
                </CardDescription>
                <Badge variant="outline" className="text-xs w-fit">
                  {movie.genre}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{movie.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Terapötik Değer:</h4>
                  <p className="text-xs text-gray-600 italic">{movie.therapeuticValue}</p>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {movie.themes.slice(0, 3).map((theme, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {theme}
                    </Badge>
                  ))}
                  {movie.themes.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{movie.themes.length - 3}
                    </Badge>
                  )}
                </div>
                <Button className="w-full" variant="outline">
                  Detayları Görüntüle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-16">
            <Film className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Film bulunamadı</h3>
            <p className="text-gray-500">Arama kriterlerinizi değiştirmeyi deneyin.</p>
          </div>
        )}
      </div>
    </div>
  )
}
