import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, GraduationCap, BookOpen, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnstituProjesiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-lora italic text-primary mb-6">Enstitü Projesi</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 italic">Geleceğe Doğru Adım Atıyoruz…</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                Yol Arkadaşları Psikoloji Vakfı olarak uzun vadeli vizyonumuz; psikoloji alanında eğitim, uygulama ve
                araştırmayı bir araya getiren bir <strong>Psikoloji Enstitüsü</strong> kurmak. Bu yapı sayesinde,
                nitelikli uzmanların yetişmesi, toplum temelli psikolojik hizmetlerin güçlenmesi ve bilimsel bilginin
                daha fazla insana ulaşması için kalıcı bir zemin oluşturmayı hedefliyoruz.
              </p>

              <p className="font-medium text-lg mt-6">
                Enstitü; genç uzmanların gelişimini destekleyecek uygulama alanları sunmayı, meslek içi eğitimlerle
                profesyonel standartları yükseltmeyi ve toplumun psikolojik iyi oluşuna yönelik daha kapsayıcı projeleri
                mümkün kılmayı amaçlıyor.
              </p>

              <p>Bu proje, sadece bugünü değil geleceği de dönüştürme arzumuzun bir yansıması.</p>

              <p className="text-lg font-bold mt-8">
                Enstitü Projesine katkı sunmak ve gönüllü ekibimize katılmak isterseniz
                <Link href="/gonullu-ol" className="text-primary hover:text-accent ml-1">
                  gönüllülük formumuzu
                </Link>{" "}
                doldurabilirsiniz.
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
              <Link href="/gonullu-ol">
                <Button className="w-full md:w-auto bg-primary hover:bg-primary/80 text-white px-8 py-6 rounded-full text-lg">
                  Gönüllü Ol <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/bagis-yap">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-full text-lg"
                >
                  Bağış Yap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">Enstitü Vizyonumuz</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Psikoloji Enstitüsü"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-lora italic text-primary mb-4">Neden Bir Enstitü?</h3>
                <p className="text-gray-700 mb-4">
                  Psikoloji alanında eğitim, uygulama ve araştırmayı bir araya getiren bir enstitü, toplum ruh sağlığına
                  daha kapsamlı ve sürdürülebilir bir katkı sunmamızı sağlayacak.
                </p>
                <p className="text-gray-700">
                  Bu yapı, hem profesyonellerin gelişimine hem de toplumun psikolojik iyi oluşuna yönelik daha kapsayıcı
                  projeleri mümkün kılacak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">
              Enstitünün Temel Alanları
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <GraduationCap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Eğitim</h3>
                  <p className="text-gray-700">
                    Meslek içi eğitimler, sertifika programları ve profesyonel gelişim fırsatları.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Uygulama</h3>
                  <p className="text-gray-700">
                    Genç uzmanlar için süpervizyon ve uygulama alanları, toplum temelli hizmetler.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Araştırma</h3>
                  <p className="text-gray-700">Toplum ruh sağlığına yönelik araştırmalar ve bilimsel yayınlar.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Building2 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Toplum Hizmetleri</h3>
                  <p className="text-gray-700">
                    Dezavantajlı gruplara yönelik ücretsiz psikolojik destek ve toplum temelli projeler.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 mb-6">Enstitü projemize katkıda bulunmak ister misiniz?</p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link href="/gonullu-ol">
                  <Button className="bg-primary hover:bg-primary/80 text-white">Gönüllü Ol</Button>
                </Link>
                <Link href="/bagis-yap">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Bağış Yap
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
