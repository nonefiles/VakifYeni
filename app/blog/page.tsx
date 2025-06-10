[⚠️ Suspicious Content] import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, ArrowRight, Calendar, User, BookOpen, Film, PenTool, Filter } from "lucide-react"

// Örnek blog yazıları
const blogPosts = [
  {
    id: 1,
    title: "Psikolojik Sağlamlık: Zorluklarla Başa Çıkma Becerisi",
    excerpt:
      "Psikolojik sağlamlık, hayatın zorluklarıyla başa çıkabilme ve bu zorluklar karşısında uyum sağlayabilme becerisidir. Bu yazıda, psikolojik sağlamlığı artırmanın yollarını ele alıyoruz.",
    date: "15 Mayıs 2023",
    author: "Dr. Ayşe Yılmaz",
    category: "Kişisel Gelişim",
    readTime: "5 dakika",
    slug: "psikolojik-saglamlik",
    image: "/placeholder.svg?height=400&width=600&query=Psikolojik+Sağlamlık",
    featured: true,
  },
  {
    id: 2,
    title: "Çocuklarda Kaygı: Ebeveynler İçin Rehber",
    excerpt:
      "Çocuklarda kaygı bozuklukları giderek yaygınlaşıyor. Ebeveynler olarak çocuklarımızın kaygılarını nasıl anlayabilir ve onlara nasıl destek olabiliriz?",
    date: "28 Nisan 2023",
    author: "Uzm. Psk. Mehmet Kaya",
    category: "Çocuk Psikolojisi",
    readTime: "7 dakika",
    slug: "cocuklarda-kaygi",
    image: "/placeholder.svg?height=400&width=600&query=Çocuklarda+Kaygı",
    featured: false,
  },
  {
    id: 3,
    title: "İlişkilerde Sağlıklı İletişim Kurmanın Yolları",
    excerpt:
      "İlişkilerimizde yaşadığımız sorunların çoğu, iletişim eksikliğinden kaynaklanır. Peki, partnerimizle, ailemizle veya arkadaşlarımızla nasıl daha sağlıklı iletişim kurabiliriz?",
    date: "10 Nisan 2023",
    author: "Uzm. Psk. Dan. Zeynep Demir",
    category: "İlişkiler",
    readTime: "6 dakika",
    slug: "iliskilerde-saglikli-iletisim",
    image: "/placeholder.svg?height=400&width=600&query=Sağlıklı+İletişim",
    featured: true,
  },
  {
    id: 4,
    title: "Mindfulness: Şimdiki Ana Odaklanma Pratiği",
    excerpt:
      "Mindfulness, zihnimizi şimdiki ana getirme ve yargılamadan farkındalık geliştirme pratiğidir. Bu yazıda, günlük hayatımıza mindfulness'ı nasıl entegre edebileceğimizi anlatıyoruz.",
    date: "2 Mart 2023",
    author: "Dr. Ali Yıldız",
    category: "Farkındalık",
    readTime: "8 dakika",
    slug: "mindfulness-simdiki-ana-odaklanma",
    image: "/placeholder.svg?height=400&width=600&query=Mindfulness",
    featured: false,
  },
  {
    id: 5,
    title: "Travma Sonrası Büyüme: Zorlukların Ötesinde Gelişim",
    excerpt:
      "Travmatik deneyimler sonrasında insanlar sadece iyileşmekle kalmaz, aynı zamanda kişisel olarak büyüme ve gelişme potansiyeline de sahiptir. Bu fenomene 'travma sonrası büyüme' denir.",
    date: "15 Şubat 2023",
    author: "Uzm. Psk. Deniz Yalçın",
    category: "Travma",
    readTime: "10 dakika",
    slug: "travma-sonrasi-buyume",
    image: "/placeholder.svg?height=400&width=600&query=Travma+Sonrası+Büyüme",
    featured: false,
  },
  {
    id: 6,
    title: "Depresyonla Başa Çıkma Stratejileri",
    excerpt:
      "Depresyon, günümüzde en yaygın ruhsal sorunlardan biridir. Bu yazıda, depresyonla başa çıkmak için kullanabileceğiniz etkili stratejileri ve tedavi yöntemlerini ele alıyoruz.",
    date: "5 Ocak 2023",
    author: "Prof. Dr. Ahmet Kara",
    category: "Ruh Sağlığı",
    readTime: "9 dakika",
    slug: "depresyonla-basa-cikma",
    image: "/placeholder.svg?height=400&width=600&query=Depresyon+Tedavi",
    featured: false,
  },
]

// Kategoriler
const categories = [
  "Tümü",
  "Kişisel Gelişim",
  "Çocuk Psikolojisi",
  "İlişkiler",
  "Farkındalık",
  "Travma",
  "Ruh Sağlığı",
  "Terapi",
]

// Kaynaklar
const resources = [
  {
    id: 1,
    title: "Psikoloji Alanında Önerilen Kitaplar",
    description: "Uzmanlarımızın seçtiği, psikoloji ve kişisel gelişim alanında ufkunuzu genişletecek kitap önerileri.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    link: "/blog/kaynaklar/kitaplar",
  },
  {
    id: 2,
    title: "Terapötik Film Önerileri",
    description: "Psikolojik konuları derinlemesine ele alan, düşündürücü ve ilham verici film tavsiyeleri.",
    icon: <Film className="h-10 w-10 text-primary" />,
    link: "/blog/kaynaklar/filmler",
  },
  {
    id: 3,
    title: "Akademik Makaleler ve Araştırmalar",
    description: "Psikoloji alanındaki güncel akademik çalışmalar ve araştırma sonuçları.",
    icon: <PenTool className="h-10 w-10 text-primary" />,
    link: "/blog/kaynaklar/makaleler",
  },
]

export default function BlogPage() {
  // Öne çıkan yazıları filtrele
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48 float-element"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 translate-y-32 float-element"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-lora italic text-white">Blog ve Kaynaklar</h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Ruh sağlığı, psikoloji ve kişisel gelişim konularında uzmanlarımızın hazırladığı içerikler, öneriler ve
              kaynaklar.
            </p>

            {/* Arama Kutusu */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <Input
                placeholder="Blog yazılarında ara..."
                className="pl-16 pr-6 py-8 rounded-full bg-white/95 backdrop-blur-sm border-0 shadow-lg text-lg placeholder:text-gray-500"
              />
              <Button className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-all duration-300">
                Ara
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori Filtreleme */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-20 z-20 border-b border-primary/10">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={rounded-full whitespace-nowrap transition-all duration-300 ${
                    index === 0
                      ? "bg-primary text-white shadow-lg"
                      : "border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              className="rounded-full border-primary/30 flex items-center gap-2 hover:bg-primary/10"
            >
              <Filter className="h-4 w-4" />
              <span>Filtrele</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Yazılar */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-lora italic text-primary text-center">
            Öne Çıkan Yazılar
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Tüm Blog Yazıları */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-lora italic text-primary">Son Yazılar</h2>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Sırala:</span>
              <select className="text-sm border border-primary/20 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-primary cursor-pointer">
                <option>En Yeni</option>
                <option>En Popüler</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full border-primary/30 px-10 py-3 hover:bg-primary/10 transition-all duration-300"
            >
              Daha Fazla Göster
            </Button>
          </div>
        </div>
      </section>

      {/* Kaynaklar Bölümü - Bebek Mavisi Arkaplan */}
        <section className="py-20 bg-[#B3E5FC] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 float-element"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white rounded-full translate-x-48 float-element"></div>
          </div>
        
          <div className="container relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 font-lora italic text-primary text-center">
              Faydalı Kaynaklar
            </h2>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>


      {/* Bülten Aboneliği */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 md:p-16 shadow-lg border border-primary/10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-lora italic text-primary">Bültene Abone Olun</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Yeni blog yazıları, kaynaklar ve etkinliklerden haberdar olmak için e-posta listemize kaydolun.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 bg-white border-primary/20 rounded-full py-6 px-6 text-lg placeholder:text-gray-500"
              />
              <Button className="bg-primary text-white rounded-full px-10 py-6 text-lg hover:bg-primary/90 transition-all duration-300">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Öne Çıkan Yazı Kartı
function FeaturedPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full">
      <div className="grid md:grid-cols-2 h-full">
        <div className="relative h-64 md:h-full overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
          <Badge className="absolute top-6 left-6 bg-primary text-white px-4 py-2 text-sm font-medium">
            {post.category}
          </Badge>
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-lora italic text-primary line-clamp-2 leading-tight">
              <Link href={/blog/${post.slug}} className="hover:text-primary/80 transition-colors">
                {post.title}
              </Link>
            </h3>

            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="text-sm text-gray-600">{post.author}</span>
            </div>

            <Link
              href={/blog/${post.slug}}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 group/link font-medium"
            >
              <span>Devamını Oku</span>
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Blog Yazı Kartı
function BlogPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <Badge className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 text-sm">{post.category}</Badge>
      </div>

      <CardHeader className="text-left pb-3">
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <CardTitle className="text-xl font-lora italic text-primary line-clamp-2 leading-tight">
          <Link href={/blog/${post.slug}} className="hover:text-primary/80 transition-colors">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-left flex-grow">
        <p className="text-gray-600 line-clamp-3 leading-relaxed">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="text-left pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User className="h-3 w-3 text-primary" />
          <span className="text-sm text-gray-600">{post.author}</span>
        </div>

        <Link
          href={/blog/${post.slug}}
          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-all duration-300 group/link text-sm font-medium"
        >
          <span>Oku</span>
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  )
}

// Kaynak Kartı
function ResourceCard({ resource }: { resource: any }) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm h-full">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-6">{resource.icon}</div>
        <CardTitle className="text-xl font-lora italic text-[#8fa4d3] mb-4">{resource.title}</CardTitle>
      </CardHeader>

      <CardContent className="text-center">
        <p className="text-[#8fa4d3]/90 leading-relaxed">{resource.description}</p>
      </CardContent>

      <CardFooter className="justify-center pt-6">
        <Button
          asChild
          variant="outline"
          className="rounded-full border-[#8fa4d3]/30 text-[#8fa4d3] hover:bg-[#8fa4d3]/10 px-8 py-2"
        >
          <Link href={resource.link}>Keşfet</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
