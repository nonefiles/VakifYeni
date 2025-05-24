import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, ArrowRight, Calendar, User, BookOpen, Film, PenTool, Filter } from "lucide-react"
import { SectionDivider } from "@/components/section-divider"

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
    <div>
      {/* Hero Section */}
      <section className="bg-accent py-16 md:py-24 blue-gradient-bg relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-lora italic text-primary">Blog ve Kaynaklar</h1>
            <p className="text-lg text-foreground/80 mb-8">
              Ruh sağlığı, psikoloji ve kişisel gelişim konularında uzmanlarımızın hazırladığı içerikler, öneriler ve
              kaynaklar.
            </p>

            {/* Arama Kutusu */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Blog yazılarında ara..."
                className="pl-12 pr-4 py-6 rounded-full bg-white/90 backdrop-blur-sm border-primary/20 shadow-sm text-base"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6 py-2 bg-primary text-white">
                Ara
              </Button>
            </div>
          </div>
        </div>
        <SectionDivider type="wave" color="blue" position="bottom" />
      </section>

      {/* Kategori Filtreleme */}
      <section className="py-8 white-gradient-bg sticky top-20 z-10 border-b border-primary/10 backdrop-blur-sm">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`rounded-full whitespace-nowrap ${index === 0 ? "bg-primary text-white" : "border-primary/20 hover:bg-primary/10"}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <Button variant="outline" className="rounded-full border-primary/20 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filtrele</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Yazılar */}
      <section className="py-12 white-gradient-bg">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-lora italic text-primary text-left">
            Öne Çıkan Yazılar
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Tüm Blog Yazıları */}
      <section className="py-12 white-gradient-bg">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-lora italic text-primary text-left">Son Yazılar</h2>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sırala:</span>
              <select className="text-sm border-none bg-transparent focus:outline-none text-primary cursor-pointer">
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

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="rounded-full border-primary/20 px-8 hover:bg-primary/10">
              Daha Fazla Göster
            </Button>
          </div>
        </div>
      </section>

      {/* Kaynaklar Bölümü */}
      <section className="py-16 blue-gradient-bg relative">
        <SectionDivider type="wave" color="blue" position="top" />

        <div className="container py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 font-lora italic text-primary text-center">
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
      <section className="py-16 white-gradient-bg">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 shadow-sm border border-primary/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-lora italic text-primary">Bültene Abone Olun</h2>
              <p className="text-foreground/80">
                Yeni blog yazıları, kaynaklar ve etkinliklerden haberdar olmak için e-posta listemize kaydolun.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 bg-white/90 backdrop-blur-sm border-primary/20 rounded-full py-6"
              />
              <Button className="bg-primary text-white rounded-full px-8">Abone Ol</Button>
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
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="grid md:grid-cols-2 h-full">
        <div className="relative h-64 md:h-full">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden"></div>
          <Badge className="absolute top-4 left-4 bg-primary text-white md:hidden">{post.category}</Badge>
        </div>

        <div className="p-6 flex flex-col justify-between relative">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-3 font-lora italic text-primary line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary/80 transition-colors">
                {post.title}
              </Link>
            </h3>

            <p className="text-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>

            <Link href={`/blog/${post.slug}`} className="link-with-arrow group/link">
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
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <Badge className="absolute bottom-4 left-4 bg-primary text-white">{post.category}</Badge>
      </div>

      <CardHeader className="text-left pb-2">
        <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <CardTitle className="text-xl font-lora italic text-primary line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary/80 transition-colors">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-left flex-grow">
        <p className="text-foreground/80 line-clamp-3">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="text-left pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User className="h-3 w-3 text-primary" />
          <span className="text-sm text-muted-foreground">{post.author}</span>
        </div>

        <Link href={`/blog/${post.slug}`} className="link-with-arrow group/link">
          <span>Oku</span>
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  )
}

// Kaynak Kartı
function ResourceCard({ resource }: { resource: any }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm h-full">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">{resource.icon}</div>
        <CardTitle className="text-xl font-lora italic text-primary">{resource.title}</CardTitle>
      </CardHeader>

      <CardContent className="text-center">
        <p className="text-foreground/80">{resource.description}</p>
      </CardContent>

      <CardFooter className="justify-center">
        <Button asChild variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10">
          <Link href={resource.link}>Keşfet</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
