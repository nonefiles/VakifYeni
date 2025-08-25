import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface TeamMember {
  name: string
  title: string
  image: string
  description?: string
  isFounder?: boolean
  pageUrl?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "M. Abdullah Yılmaz",
    title: "Kurucu",
    image: "/images/team/abdullah-yilmaz.jpg",
    description: "İnsana dair her alan, anlamaya ve birlikte yürümeye davet eder.",
    isFounder: true,
  },
  {
    name: "Bahar Tokmak",
    title: "Psikolog",
    image: "https://yolarkadaslari.com/wp-content/uploads/2025/08/WhatsApp-Gorsel-2025-08-22-saat-12.44.35_f7b02a53-420x420.jpg",
    pageUrl: "/hakkimizda/kurucular-ve-ekip/bahar-tokmak"
  },
  {
    name: "Betül Çavumirza",
    title: "Psikolog",
    image: "/images/team/betul-cavumirza.jpeg",
    pageUrl: "/hakkimizda/kurucular-ve-ekip/betul-cavumirza"
  },
  {
    name: "Öykü Yıldız",
    title: "Uzman Psikolog & Aile Danışmanı",
    image: "/images/team/oyku-yildiz.jpg",
    pageUrl: "/hakkimizda/kurucular-ve-ekip/oyku-yildiz"
  },
  {
    name: "Busenaz Otlu",
    title: "Klinik Psikolog",
    image: "https://yolarkadaslari.com/wp-content/uploads/2025/07/BuseNaz-420x420.jpg",
    pageUrl: "/hakkimizda/kurucular-ve-ekip/busenaz-otlu"
  },
  {
    name: "Eralp Akgül",
    title: "Klinik Psikolog",
    image: "https://yolarkadaslari.com/wp-content/uploads/2025/07/Ea1-420x420.jpg",
    pageUrl: "/hakkimizda/kurucular-ve-ekip/eralp-akgul"
  },
]

export default function KurucularVeEkipPage() {
  const founder = teamMembers.find((member) => member.isFounder)
  const otherMembers = teamMembers.filter((member) => !member.isFounder)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <div className="container py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading">Kurucular ve Ekip</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Yol Arkadaşları Psikoloji Vakfı'nın arkasında, ruh sağlığı alanında uzmanlaşmış, vizyoner ve tutkulu bir ekip
          bulunmaktadır.
        </p>
      </div>

      {/* Founder Section */}
      {founder && (
        <section className="py-16 relative">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">Kurucumuz</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-700">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-7 gap-0">
                    {/* Image Section */}
                    <div className="lg:col-span-2 relative overflow-hidden">
                      <div className="aspect-[9/16] lg:h-[500px] relative">
                        <Image
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-light text-slate-800 mb-2 leading-tight">
                          {founder.name}
                        </h3>
                        <p className="text-lg text-primary font-medium mb-4">{founder.title}</p>
                        
                        {founder.description && (
                          <blockquote className="relative mb-6">
                            <div className="absolute -left-3 -top-1 text-4xl text-primary/20 font-serif">"</div>
                            <p className="text-base italic text-slate-600 pl-6 border-l-2 border-primary/30 font-light leading-relaxed">
                              {founder.description}
                            </p>
                          </blockquote>
                        )}
                      </div>

                      <div className="prose prose-base max-w-none text-slate-700 leading-relaxed space-y-4">
                        <p className="text-justify text-sm">
                          1967 yılında Adana'da doğan M. Abdullah Yılmaz, meslek yaşamını insanı anlamaya, eğitmeye ve iyileştirmeye adadı. Selçuk Üniversitesi'nde Edebiyat, Anadolu Üniversitesi'nde Sosyoloji ve Sosyal Hizmet Uzmanlığı eğitimi aldı.
                        </p>
                        
                        <p className="text-justify text-sm">
                          Uzmanlık alanında derinleşirken hem bireysel hem de toplumsal gelişime katkı sunmayı öncelik haline getirdi. Hasan Kalyoncu Üniversitesi'nden Aile Danışmanlığı eğitimi aldı. Bilişsel Davranışçı Terapi ve Şema Terapi eğitimlerini BDTD çatısı altında tamamladı.
                        </p>

                        <p className="text-justify text-sm">
                          Gazetecilikten yazarlığa, öğretmenlikten akademisyenliğe uzanan çok yönlü bir kariyer inşa etti. Eğitmen kimliğiyle, iletişimden hızlı okuma tekniklerine, algı yönetiminden adalet psikolojisine kadar geniş bir alanda binlerce kişiye dokundu.
                        </p>

                        <p className="text-justify text-sm">
                          Üyelikleri arasında Amerikan Psikologlar Derneği (APA) ve Bilişsel Davranışçı Psikoterapiler Derneği (BDTD) yer almakta. Gönüllü Psikologlar ve Eğitmenler Derneği Yönetim Kurulu Üyesi ve Ankara Temsilcisi olarak da aktif görev almaktadır.
                        </p>

                        <p className="text-justify text-sm">
                          Yıllar içinde biriken bu deneyim ve sorumluluk duygusu, Yol Arkadaşları Psikoloji Vakfı'nın kuruluşuna ilham verdi. Bu vakıf aracılığıyla bireylerin psikolojik destek, eğitim ve toplumsal gelişim alanlarında erişilebilir hizmetlere ulaşabilmesini hedefliyor.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">Ekibimiz</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Farklı uzmanlık alanlarından gelen profesyonellerin gönüllü birlikteliği
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherMembers.map((member, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/90 hover:bg-white/100 shadow-md hover:shadow-xl transition-all duration-500"
              >
                <CardContent className="p-6">
                  {/* Image Section */}
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-primary/10 ring-offset-4 ring-offset-white/90">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Main Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-medium text-slate-800 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    <p className="text-primary/80 font-medium text-sm tracking-wide uppercase text-center">
                      Gönüllü {member.title}
                    </p>
                    
                    <Link 
                      href={member.pageUrl || "#"} 
                      className="mt-6 inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-primary hover:text-white border border-primary/20 hover:bg-primary rounded-lg transition-all duration-300 group-hover:shadow-lg"
                    >
                      Detaylı Bilgi
                      <svg 
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent -translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}