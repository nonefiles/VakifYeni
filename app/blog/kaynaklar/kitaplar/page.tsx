"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, BookOpen, Filter } from "lucide-react"

const books = [
  {
    id: 1,
    title: "Travma ve İyileşme",
    author: "Judith Herman",
    category: "Travma",
    rating: 4.8,
    pages: 352,
    description:
      "Travma alanında çığır açan bu eser, travmatik deneyimlerin psikolojik etkilerini ve iyileşme süreçlerini derinlemesine inceliyor.",
    image: "/placeholder.svg?height=300&width=200&query=travma+ve+iyileşme+kitap+kapağı",
    publishYear: 2015,
    isbn: "978-0465061716",
    tags: ["Travma", "PTSD", "İyileşme", "Psikoloji"],
  },
  {
    id: 2,
    title: "Beden Travmayı Hatırlar",
    author: "Bessel van der Kolk",
    category: "Travma",
    rating: 4.9,
    pages: 464,
    description: "Travmanın beyin ve beden üzerindeki etkilerini bilimsel verilerle açıklayan kapsamlı bir rehber.",
    image: "/placeholder.svg?height=300&width=200&query=beden+travmayı+hatırlar+kitap+kapağı",
    publishYear: 2014,
    isbn: "978-0670785933",
    tags: ["Travma", "Nöroloji", "Terapi", "Beden-Zihin"],
  },
  {
    id: 3,
    title: "Duygusal Zeka",
    author: "Daniel Goleman",
    category: "Psikoloji",
    rating: 4.6,
    pages: 384,
    description: "Duygusal zekanın önemi ve geliştirilmesi üzerine temel bir kaynak.",
    image: "/placeholder.svg?height=300&width=200&query=duygusal+zeka+daniel+goleman+kitap",
    publishYear: 1995,
    isbn: "978-0553375060",
    tags: ["Duygusal Zeka", "Kişisel Gelişim", "İletişim"],
  },
  {
    id: 4,
    title: "Mindfulness Temelli Bilişsel Terapi",
    author: "Mark Williams, John Teasdale",
    category: "Terapi",
    rating: 4.7,
    pages: 288,
    description: "Depresyon ve anksiyete tedavisinde mindfulness yaklaşımının kullanımı.",
    image: "/placeholder.svg?height=300&width=200&query=mindfulness+bilişsel+terapi+kitap",
    publishYear: 2007,
    isbn: "978-1593851286",
    tags: ["Mindfulness", "Bilişsel Terapi", "Depresyon", "Anksiyete"],
  },
  {
    id: 5,
    title: "Aile Terapisi Teknikleri",
    author: "Salvador Minuchin",
    category: "Aile Terapisi",
    rating: 4.5,
    pages: 320,
    description: "Aile sistemleri yaklaşımı ve yapısal aile terapisi teknikleri.",
    image: "/placeholder.svg?height=300&width=200&query=aile+terapisi+teknikleri+minuchin",
    publishYear: 1974,
    isbn: "978-0674323308",
    tags: ["Aile Terapisi", "Sistem Yaklaşımı", "Terapi Teknikleri"],
  },
  {
    id: 6,
    title: "Çocuk Gelişimi ve Psikolojisi",
    author: "Jean Piaget",
    category: "Çocuk Psikolojisi",
    rating: 4.8,
    pages: 416,
    description: "Çocuk gelişiminin bilişsel aşamaları ve gelişim psikolojisinin temelleri.",
    image: "/placeholder.svg?height=300&width=200&query=çocuk+gelişimi+piaget+kitap",
    publishYear: 1952,
    isbn: "978-0415211864",
    tags: ["Çocuk Gelişimi", "Bilişsel Gelişim", "Eğitim Psikolojisi"],
  },
]

const categories = ["Tümü", "Travma", "Psikoloji", "Terapi", "Aile Terapisi", "Çocuk Psikolojisi"]

export default function KitaplarPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [sortBy, setSortBy] = useState("title")

  const filteredBooks = books
    .filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "Tümü" || book.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "year":
          return b.publishYear - a.publishYear
        case "author":
          return a.author.localeCompare(b.author)
        default:
          return a.title.localeCompare(b.title)
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-[#f5f5f5] text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Lora']">Önerilen Kitaplar</h1>
            <p className="text-xl text-gray-600 mb-8">
              Psikoloji, terapi ve kişisel gelişim alanında uzmanlarımızın önerdiği değerli kaynaklar
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Kitap, yazar veya konu ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-white border-gray-200 focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Başlığa Göre</SelectItem>
                    <SelectItem value="author">Yazara Göre</SelectItem>
                    <SelectItem value="rating">Puana Göre</SelectItem>
                    <SelectItem value="year">Yıla Göre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sm text-gray-500">{filteredBooks.length} kitap bulundu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{book.rating}</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {book.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{book.publishYear}</span>
                </div>
                <CardTitle className="text-lg font-['Lora'] line-clamp-2">{book.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-700">{book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{book.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{book.pages} sayfa</span>
                  <span>ISBN: {book.isbn}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {book.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {book.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{book.tags.length - 3}
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

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Kitap bulunamadı</h3>
            <p className="text-gray-500">Arama kriterlerinizi değiştirmeyi deneyin.</p>
          </div>
        )}
      </div>
    </div>
  )
}
