import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function UcretsizPsikoterapiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-lora italic text-primary mb-6">
              Ücretsiz Psikoterapi Hizmeti
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Psikolojik destek bir ayrıcalık değil, bir hak. Biz de Yol Arkadaşları Psikoloji Vakfı olarak bu hakka
              erişimde herkesin eşit koşullara sahip olmasını önemsiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                Maddi koşullar nedeniyle özel terapiye ulaşamayan bireyler için ücretsiz psikoterapi hizmeti sunuyoruz.
                Bu hizmetten faydalanmak isteyen herkes, başvuru formumuzu doldurarak değerlendirme sürecine
                katılabilir.
              </p>

              <p className="font-medium text-lg">
                Sunduğumuz psikoterapi hizmetleri, her bireyin ihtiyaçlarına göre şekillenir.
              </p>

              <ul className="space-y-4 my-8">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Bireysel Psikoterapi:</span> Yetişkin bireylerin duygu, düşünce ve
                    davranışlarını anlamalarına, zorlayıcı yaşam olaylarıyla başa çıkmalarına destek olur.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Çocuk ve Ergen Psikoterapisi:</span> Çocukların ve ergenlerin
                    gelişimsel, duygusal ve sosyal zorluklarıyla sağlıklı şekilde baş edebilmeleri için aileyle iş
                    birliği içinde yürütülür.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <div>
                    <span className="font-bold">Çift ve Aile Psikoterapisi:</span> Evlilik, ebeveynlik ve aile içi
                    ilişkilerde yaşanan çatışmaları anlamak ve çözümlemek amacıyla sunulur.
                  </div>
                </li>
              </ul>

              <p>
                Tüm görüşmeler, alanında eğitimli uzmanlar tarafından yürütülür; etik kurallar çerçevesinde ve gizlilik
                ilkesiyle gerçekleştirilir.
              </p>

              <p className="text-lg font-medium italic mt-8">
                Yalnız değilsiniz. Biz, her adımda yanınızda olmaya hazırız.
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
              <Link href="/basvuru/psikoterapi">
                <Button className="w-full md:w-auto bg-primary hover:bg-primary/80 text-white px-8 py-6 rounded-full text-lg">
                  Başvuru Yap <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-full text-lg"
                >
                  Bize Ulaşın
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">Psikoterapi Süreci</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Başvuru</h3>
                  <p className="text-gray-700">Başvuru formunu doldurarak değerlendirme sürecine katılabilirsiniz.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Değerlendirme</h3>
                  <p className="text-gray-700">Uzmanlarımız başvurunuzu değerlendirir ve sizinle iletişime geçer.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Terapi Süreci</h3>
                  <p className="text-gray-700">
                    İhtiyaçlarınıza uygun terapi süreci başlar ve düzenli seanslar gerçekleştirilir.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
