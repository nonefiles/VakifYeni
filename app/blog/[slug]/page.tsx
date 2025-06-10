import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, Facebook, Linkedin, Mail, User } from "lucide-react"

// Örnek blog yazısı
const blogPost = {
  id: 1,
  title: "Psikolojik Sağlamlık: Zorluklarla Başa Çıkma Becerisi",
  excerpt:
    "Psikolojik sağlamlık, hayatın zorluklarıyla başa çıkabilme ve bu zorluklar karşısında uyum sağlayabilme becerisidir. Bu yazıda, psikolojik sağlamlığı artırmanın yollarını ele alıyoruz.",
  date: "15 Mayıs 2023",
  author: "Dr. Ayşe Yılmaz",
  authorTitle: "Klinik Psikolog",
  authorImage: "/placeholder.svg?height=100&width=100",
  category: "Kişisel Gelişim",
  readTime: "5 dakika",
  slug: "psikolojik-saglamlik",
  image: "/placeholder.svg?height=600&width=1200",
  content: `
    <p>Psikolojik sağlamlık, hayatın zorluklarıyla başa çıkabilme ve bu zorluklar karşısında uyum sağlayabilme becerisidir. Diğer bir deyişle, stresli durumlar, travmalar veya zorluklar karşısında kendini toparlayabilme ve hatta bu deneyimlerden güçlenerek çıkabilme kapasitesidir.</p>
    
    <h2>Psikolojik Sağlamlığın Önemi</h2>
    
    <p>Hayat, kaçınılmaz olarak zorluklar, kayıplar ve değişimlerle doludur. Psikolojik sağlamlık, bu zorluklarla karşılaştığımızda bize destek olan, ayakta kalmamızı sağlayan ve ileriye bakmamıza yardımcı olan bir özelliktir. Araştırmalar, psikolojik sağlamlığı yüksek olan bireylerin:</p>
    
    <ul>
      <li>Stresle daha etkili başa çıkabildiklerini</li>
      <li>Daha az depresyon ve kaygı yaşadıklarını</li>
      <li>Travmatik olaylardan sonra daha hızlı toparlandıklarını</li>
      <li>Daha yüksek yaşam doyumu ve mutluluk düzeylerine sahip olduklarını göstermektedir.</li>
    </ul>
    
    <h2>Psikolojik Sağlamlığı Artırmanın Yolları</h2>
    
    <p>İyi haber şu ki, psikolojik sağlamlık doğuştan gelen sabit bir özellik değil, geliştirilebilen bir beceridir. İşte psikolojik sağlamlığınızı artırmak için uygulayabileceğiniz bazı stratejiler:</p>
    
    <h3>1. Sosyal Bağlantılar Kurun</h3>
    
    <p>Güçlü ve destekleyici ilişkiler, psikolojik sağlamlığın temel taşlarından biridir. Aileniz, arkadaşlarınız veya topluluk gruplarıyla bağlantıda kalmak, zor zamanlarda size duygusal destek sağlar ve yalnız olmadığınızı hissettirir.</p>
    
    <h3>2. Olumlu Düşünmeyi Alışkanlık Haline Getirin</h3>
    
    <p>Olumlu düşünme, zorlukları aşılmaz engeller olarak görmek yerine, üstesinden gelinebilecek meydan okumalar olarak görmeyi içerir. Bu, olayları daha dengeli bir perspektiften değerlendirmenize ve çözüm odaklı düşünmenize yardımcı olur.</p>
    
    <h3>3. Değişimi Kabul Edin</h3>
    
    <p>Değişim, hayatın kaçınılmaz bir parçasıdır. Değişimi kabul etmek ve ona uyum sağlamak, psikolojik sağlamlığın önemli bir bileşenidir. Değiştiremeyeceğiniz durumları kabul etmek ve enerjinizi değiştirebileceğiniz şeylere yönlendirmek, size kontrol hissi verir.</p>
    
    <h3>4. Hedefler Belirleyin</h3>
    
    <p>Gerçekçi hedefler belirlemek ve onlara doğru ilerlemek, size amaç duygusu verir ve motivasyonunuzu artırır. Küçük adımlarla başlayın ve her başarıyı kutlayın.</p>
    
    <h3>5. Kendinize İyi Bakın</h3>
    
    <p>Fiziksel sağlığınız, zihinsel sağlığınızı doğrudan etkiler. Düzenli egzersiz yapmak, dengeli beslenmek, yeterli uyku almak ve stresi yönetmek, psikolojik sağlamlığınızı destekler.</p>
    
    <h3>6. Mindfulness Pratiği Yapın</h3>
    
    <p>Mindfulness (bilinçli farkındalık), şimdiki ana odaklanmayı ve düşüncelerinizi, duygularınızı yargılamadan gözlemlemeyi içerir. Bu pratik, stres ve kaygıyı azaltır, duygusal düzenlemeyi geliştirir ve psikolojik sağlamlığı artırır.</p>
    
    <h2>Sonuç</h2>
    
    <p>Psikolojik sağlamlık, hayatın zorluklarıyla başa çıkmamıza ve bu zorluklardan güçlenerek çıkmamıza yardımcı olan değerli bir beceridir. Bu beceriyi geliştirmek için zaman ayırmak, hem mevcut zorlukları aşmanıza hem de gelecekteki zorluklara daha hazırlıklı olmanıza yardımcı olacaktır.</p>
    
    <p>Unutmayın, psikolojik sağlamlık bir süreçtir ve herkesin bu süreci yaşama şekli farklıdır. Kendinize karşı nazik olun ve gerektiğinde profesyonel destek almaktan çekinmeyin.</p>
  `,
}

// İlgili yazılar
const relatedPosts = [
  {
    id: 2,
    title: "Stres Yönetimi: Günlük Hayatta Uygulayabileceğiniz Teknikler",
    excerpt:
      "Günlük hayatın koşuşturması içinde stresle başa çıkmanın yolları nelerdir? İşte size pratik stres yönetimi teknikleri.",
    date: "5 Mayıs 2023",
    author: "Uzm. Psk. Mehmet Kaya",
    category: "Kişisel Gelişim",
    readTime: "6 dakika",
    slug: "stres-yonetimi",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Öz-şefkat: Kendimize Karşı Daha Nazik Olmanın Yolları",
    excerpt:
      "Kendimize karşı sert ve eleştirel olmak yerine, öz-şefkat göstermenin psikolojik sağlığımıza katkıları nelerdir?",
    date: "20 Nisan 2023",
    author: "Dr. Zeynep Demir",
    category: "Kişisel Gelişim",
    readTime: "7 dakika",
    slug: "oz-sefkat",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Duygusal Zeka: İlişkilerimizi Güçlendirmenin Anahtarı",
    excerpt:
      "Duygusal zeka, hem kendimizi hem de başkalarını anlamak için neden bu kadar önemlidir? İlişkilerimize nasıl katkı sağlar?",
    date: "10 Nisan 2023",
    author: "Uzm. Psk. Ali Yıldız",
    category: "İlişkiler",
    readTime: "8 dakika",
    slug: "duygusal-zeka",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="outline" className="text-blue-600">
                {blogPost.category}
              </Badge>
              <span className="flex items-center text-sm text-gray-500">
                <CalendarIcon size={14} className="mr-1" />
                {blogPost.date}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <Clock size={14} className="mr-1" />
                {blogPost.readTime}
              </span>
            </div>
            <h1 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">{blogPost.title}</h1>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={blogPost.authorImage || "/placeholder.svg"}
                  alt={blogPost.author}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{blogPost.author}</p>
                <p className="text-sm text-gray-500">{blogPost.authorTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl">
            <Image
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-4">
            {/* Share Sidebar */}
            <div className="hidden md:block">
              <div className="sticky top-24 space-y-4">
                <p className="text-sm font-medium text-gray-500">Paylaş</p>
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Facebook size={18} />
                    <span className="sr-only">Facebook'ta Paylaş</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn'de Paylaş</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Mail size={18} />
                    <span className="sr-only">E-posta ile Paylaş</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <article className="prose max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-500">Etiketler:</span>
                <Badge variant="outline" className="text-blue-600">
                  Psikolojik Sağlamlık
                </Badge>
                <Badge variant="outline" className="text-blue-600">
                  Stres Yönetimi
                </Badge>
                <Badge variant="outline" className="text-blue-600">
                  Kişisel Gelişim
                </Badge>
                <Badge variant="outline" className="text-blue-600">
                  Mindfulness
                </Badge>
              </div>

              {/* Author Bio */}
              <div className="mt-12 rounded-xl bg-blue-50 p-6">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={blogPost.authorImage || "/placeholder.svg"}
                      alt={blogPost.author}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-gray-800">{blogPost.author}</h3>
                    <p className="mb-3 text-sm text-gray-500">{blogPost.authorTitle}</p>
                    <p className="text-gray-600">
                      Klinik psikoloji alanında 15 yıllık deneyime sahip olan Dr. Ayşe Yılmaz, özellikle travma,
                      psikolojik sağlamlık ve stres yönetimi konularında uzmanlaşmıştır. Yol Arkadaşları Psikoloji
                      Vakfı'nda gönüllü olarak hizmet vermektedir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Share Buttons (Mobile) */}
              <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
                <p className="text-sm font-medium text-gray-500">Paylaş:</p>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Facebook size={18} />
                  <span className="sr-only">Facebook'ta Paylaş</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn'de Paylaş</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Mail size={18} />
                  <span className="sr-only">E-posta ile Paylaş</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts - İlgili Yazılar (Faydalı Kaynaklar) */}
      <section className="bg-sky-100 py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:text-3xl">İlgili Yazılar</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline" className="text-blue-600">
                      {post.category}
                    </Badge>
                    <span className="flex items-center text-xs text-gray-500">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <span className="flex items-center text-xs text-gray-500">
                    <User size={12} className="mr-1" />
                    {post.author}
                  </span>
                  <Button asChild variant="link" className="h-auto p-0 text-blue-600">
                    <Link href={`/blog/${post.slug}`}>Devamını Oku</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-xl bg-blue-600 p-8 text-center text-white md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ücretsiz Psikoloji Sohbetlerimize Katılın</h2>
            <p className="mb-8">
              Her hafta düzenlediğimiz psikoloji sohbetlerinde uzmanlarımızla bir araya gelin, sorularınızı sorun ve
              bilgi alışverişinde bulunun.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/hizmetlerimiz/psikoloji-sohbetleri">Etkinlik Takvimini Görüntüle</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
