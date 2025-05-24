"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileText, Calendar, User, ExternalLink, Filter, Download } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Travma Sonrası Stres Bozukluğunda Bilişsel Davranışçı Terapi Yaklaşımları",
    authors: ["Dr. Ayşe Kaya", "Prof. Dr. Mehmet Özkan"],
    journal: "Türk Psikoloji Dergisi",
    year: 2023,
    volume: "38",
    issue: "2",
    pages: "145-162",
    category: "Travma",
    type: "Araştırma Makalesi",
    language: "Türkçe",
    abstract:
      "Bu çalışma, PTSD tedavisinde bilişsel davranışçı terapi tekniklerinin etkinliğini incelemektedir. 120 katılımcı ile yapılan randomize kontrollü çalışmada, BDT'nin geleneksel yöntemlere göre %40 daha etkili olduğu bulunmuştur.",
    keywords: ["PTSD", "Bilişsel Davranışçı Terapi", "Travma", "Tedavi"],
    doi: "10.1234/tpd.2023.38.2.145",
    url: "#",
    downloadUrl: "#",
    citationCount: 15,
    readingTime: 12,
  },
  {
    id: 2,
    title: "Çocuklarda Anksiyete Bozukluklarının Erken Tanı ve Müdahale Stratejileri",
    authors: ["Dr. Zeynep Demir", "Dr. Can Yılmaz"],
    journal: "Çocuk ve Ergen Ruh Sağlığı Dergisi",
    year: 2023,
    volume: "15",
    issue: "1",
    pages: "23-41",
    category: "Çocuk Psikolojisi",
    type: "Derleme Makalesi",
    language: "Türkçe",
    abstract:
      "Çocukluk döneminde görülen anksiyete bozukluklarının erken tanınması ve uygun müdahale stratejilerinin geliştirilmesi konusunda güncel literatürün kapsamlı bir değerlendirmesi.",
    keywords: ["Çocuk Anksiyetesi", "Erken Müdahale", "Tanı", "Tedavi"],
    doi: "10.1234/cers.2023.15.1.23",
    url: "#",
    downloadUrl: "#",
    citationCount: 8,
    readingTime: 15,
  },
  {
    id: 3,
    title: "Mindfulness-Based Stress Reduction in Healthcare Workers: A Meta-Analysis",
    authors: ["Dr. Sarah Johnson", "Prof. Dr. Michael Brown"],
    journal: "Journal of Occupational Health Psychology",
    year: 2023,
    volume: "28",
    issue: "3",
    pages: "234-251",
    category: "Mindfulness",
    type: "Meta-Analiz",
    language: "İngilizce",
    abstract:
      "This meta-analysis examines the effectiveness of mindfulness-based stress reduction programs for healthcare workers across 25 studies with 3,200 participants.",
    keywords: ["Mindfulness", "Stress Reduction", "Healthcare Workers", "Meta-Analysis"],
    doi: "10.1037/ocp0000234",
    url: "#",
    downloadUrl: "#",
    citationCount: 42,
    readingTime: 18,
  },
  {
    id: 4,
    title: "Aile Terapisinde Sistemik Yaklaşımların Etkinliği: Türkiye'den Bulgular",
    authors: ["Prof. Dr. Fatma Şen", "Dr. Ali Kara", "Dr. Elif Yıldız"],
    journal: "Aile Danışmanlığı Dergisi",
    year: 2022,
    volume: "12",
    issue: "4",
    pages: "78-95",
    category: "Aile Terapisi",
    type: "Araştırma Makalesi",
    language: "Türkçe",
    abstract:
      "Türkiye'de aile terapisi uygulamalarında sistemik yaklaşımların kullanımı ve etkinliği üzerine yapılan çok merkezli araştırmanın sonuçları.",
    keywords: ["Aile Terapisi", "Sistemik Yaklaşım", "Türkiye", "Etkinlik"],
    doi: "10.1234/ad.2022.12.4.78",
    url: "#",
    downloadUrl: "#",
    citationCount: 12,
    readingTime: 14,
  },
  {
    id: 5,
    title: "Digital Mental Health Interventions: Efficacy and Implementation Challenges",
    authors: ["Dr. Emma Wilson", "Prof. Dr. James Taylor"],
    journal: "Clinical Psychology Review",
    year: 2023,
    volume: "89",
    issue: "1",
    pages: "102-118",
    category: "Dijital Sağlık",
    type: "Derleme Makalesi",
    language: "İngilizce",
    abstract:
      "A comprehensive review of digital mental health interventions, examining their efficacy, accessibility, and implementation challenges in clinical practice.",
    keywords: ["Digital Health", "Mental Health", "Technology", "Implementation"],
    doi: "10.1016/j.cpr.2023.102118",
    url: "#",
    downloadUrl: "#",
    citationCount: 28,
    readingTime: 20,
  },
  {
    id: 6,
    title: "Yaşlılarda Depresyon ve Bilişsel İşlevler Arasındaki İlişki",
    authors: ["Dr. Hasan Özdemir", "Prof. Dr. Ayşe Tuncer"],
    journal: "Geriatri ve Gerontoloji Dergisi",
    year: 2023,
    volume: "7",
    issue: "2",
    pages: "56-72",
    category: "Geriatri",
    type: "Araştırma Makalesi",
    language: "Türkçe",
    abstract:
      "65 yaş üstü bireylerde depresyon semptomları ile bilişsel işlevler arasındaki ilişkinin longitudinal olarak incelendiği çalışma.",
    keywords: ["Yaşlılık", "Depresyon", "Bilişsel İşlevler", "Longitudinal"],
    doi: "10.1234/gg.2023.7.2.56",
    url: "#",
    downloadUrl: "#",
    citationCount: 6,
    readingTime: 16,
  },
]

const categories = ["Tümü", "Travma", "Çocuk Psikolojisi", "Mindfulness", "Aile Terapisi", "Dijital Sağlık", "Geriatri"]
const types = ["Tümü", "Araştırma Makalesi", "Derleme Makalesi", "Meta-Analiz"]
const languages = ["Tümü", "Türkçe", "İngilizce"]

export default function MakalelerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [selectedType, setSelectedType] = useState("Tümü")
  const [selectedLanguage, setSelectedLanguage] = useState("Tümü")
  const [sortBy, setSortBy] = useState("year")

  const filteredArticles = articles
    .filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        article.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm.toLowerCase())) ||
        article.journal.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "Tümü" || article.category === selectedCategory
      const matchesType = selectedType === "Tümü" || article.type === selectedType
      const matchesLanguage = selectedLanguage === "Tümü" || article.language === selectedLanguage
      return matchesSearch && matchesCategory && matchesType && matchesLanguage
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "citations":
          return b.citationCount - a.citationCount
        case "title":
          return a.title.localeCompare(b.title)
        case "journal":
          return a.journal.localeCompare(b.journal)
        case "readingTime":
          return a.readingTime - b.readingTime
        default:
          return b.year - a.year
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Hero Section */}
      <div className="text-gray-800 py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-gray-600" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Lora']">Akademik Makaleler</h1>
            <p className="text-xl text-gray-600 mb-8">
              Psikoloji ve ruh sağlığı alanında güncel araştırmalar ve bilimsel yayınlar
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Makale, yazar, dergi veya anahtar kelime ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
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
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Makale Türü" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Dil" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language}
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
                    <SelectItem value="year">Yıla Göre</SelectItem>
                    <SelectItem value="citations">Atıf Sayısına Göre</SelectItem>
                    <SelectItem value="title">Başlığa Göre</SelectItem>
                    <SelectItem value="journal">Dergiye Göre</SelectItem>
                    <SelectItem value="readingTime">Okuma Süresine Göre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sm text-gray-500">{filteredArticles.length} makale bulundu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {article.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {article.language}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{article.year}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-['Lora'] mb-2 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <User className="w-4 h-4" />
                      <span>{article.authors.join(", ")}</span>
                    </div>
                    <CardDescription className="text-sm font-medium text-gray-700">
                      {article.journal} • Cilt {article.volume}, Sayı {article.issue} • Sayfa {article.pages}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>{article.citationCount} atıf</span>
                      <span>{article.readingTime} dk okuma</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{article.abstract}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Anahtar Kelimeler:</h4>
                  <div className="flex flex-wrap gap-1">
                    {article.keywords.map((keyword, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                  <div className="text-xs text-gray-500">DOI: {article.doi}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Makaleyi Görüntüle
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      PDF İndir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Makale bulunamadı</h3>
            <p className="text-gray-500">Arama kriterlerinizi değiştirmeyi deneyin.</p>
          </div>
        )}
      </div>
    </div>
  )
}
