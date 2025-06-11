import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  name: string
  title: string
  image: string
  description?: string
  isFounder?: boolean
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
    name: "Betül Çavumirza",
    title: "Psikolog",
    image: "/images/team/betul-cavumirza.jpeg",
  },
  {
    name: "Öykü Yıldız",
    title: "Uzman Psikolog & Aile Danışmanı",
    image: "/images/team/oyku-yildiz.jpg",
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
        <section className="py-20 relative">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">Kurucumuz</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto">
              <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-sm overflow-hidden group hover:shadow-3xl transition-all duration-700">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Image Section */}
                    <div className="lg:col-span-2 relative overflow-hidden">
                      <div className="aspect-square lg:aspect-auto lg:h-full relative">
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
                    <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-8">
                        <h3 className="text-3xl md:text-4xl font-light text-slate-800 mb-3 leading-tight">
                          {founder.name}
                        </h3>
                        <p className="text-xl text-primary font-medium mb-6">{founder.title}</p>
                        
                        {founder.description && (
                          <blockquote className="relative mb-8">
                            <div className="absolute -left-4 -top-2 text-6xl text-primary/20 font-serif">"</div>
                            <p className="text-lg italic text-slate-600 pl-8 border-l-2 border-primary/30 font-light leading-relaxed">
                              {founder.description}
                            </p>
                          </blockquote>
                        )}
                      </div>

                      <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                        <p className="text-justify">
                          1967 yılında Adana'da doğan M. Abdullah Yılmaz, meslek yaşamını insanı anlamaya, eğitmeye ve iyileştirmeye adadı. Selçuk Üniversitesi'nde Edebiyat, Anadolu Üniversitesi'nde Sosyoloji ve Sosyal Hizmet Uzmanlığı eğitimi aldı. Psikoloji lisans fark derslerini Yakın Doğu Üniversitesi'nde tamamlayarak "Klinik Psikoloji" yüksek lisansı yaptı.
                        </p>
                        
                        <p className="text-justify">
                          Uzmanlık alanında derinleşirken hem bireysel hem de toplumsal gelişime katkı sunmayı öncelik haline getirdi. Hasan Kalyoncu Üniversitesi'nden Aile Danışmanlığı eğitimi aldı. Bilişsel Davranışçı Terapi ve Şema Terapi eğitimlerini BDTD çatısı altında tamamladı. Eğitim ve psikoloji alanındaki birikimini sadece akademik zeminle sınırlamayıp, farklı disiplinlerle de zenginleştirdi.
                        </p>

                        <p className="text-justify">
                          Gazetecilikten yazarlığa, öğretmenlikten akademisyenliğe uzanan çok yönlü bir kariyer inşa etti. Devlet okullarından özel kurumlara, üniversitelerden adalet akademilerine kadar birçok yapıda görev aldı. Eğitmen kimliğiyle, iletişimden hızlı okuma tekniklerine, algı yönetiminden adalet psikolojisine kadar geniş bir alanda binlerce kişiye dokundu.
                        </p>

                        <p className="text-justify">
                          Bu katkılarını yalnızca sınıf ortamlarıyla sınırlı tutmadı; çeşitli kurum ve kuruluşlarda verdiği eğitimlerle kamuya ve özel sektöre de yaydı. Üyelikleri arasında Amerikan Psikologlar Derneği (APA) ve Bilişsel Davranışçı Psikoterapiler Derneği (BDTD) yer almakta. Aynı zamanda Gönüllü Psikologlar ve Eğitmenler Derneği Yönetim Kurulu Üyesi ve Ankara Temsilcisi olarak da aktif görev almaktadır.
                        </p>

                        <p className="text-justify">
                          Yıllar içinde biriken bu deneyim ve sorumluluk duygusu, Yol Arkadaşları Psikoloji Vakfı'nın kuruluşuna ilham verdi. Bu vakıf aracılığıyla bireylerin psikolojik destek, eğitim ve toplumsal gelişim alanlarında erişilebilir hizmetlere ulaşabilmesini hedefliyor.
                        </p>
                      </div>

                      {/* Membership badges */}
                      <div className="mt-8 flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium">APA Üyesi</span>
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium">BDTD Üyesi</span>
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium">GPED Ankara Temsilcisi</span>
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
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Floating info card */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-semibold text-slate-800 mb-1">{member.name}</h3>
                      <p className="text-primary text-sm mb-2">Gönüllü {member.title}</p>
                      <div className="flex items-center text-xs text-slate-600">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Aktif Gönüllü
                      </div>
                    </div>
                  </div>

                  {/* Main Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">Gönüllü {member.title}</p>
                    
                    <button className="w-full py-2 px-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm">
                      Detaylı Bilgi
                      <svg className="inline w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-8">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-light text-primary mb-4">Birlikte Büyüyen Bir Aile</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              Yol Arkadaşları Psikoloji Vakfı ekibi, farklı uzmanlık alanlarından gelen profesyonellerin birlikteliğiyle
              güçlü bir yapı oluşturmaktadır. Her ekip üyemiz, ruh sağlığı hizmetlerine erişimi demokratikleştirme
              vizyonumuz doğrultusunda gönüllü olarak hizmet vermektedir.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-slate-600">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-slate-600">Uzman Psikolog</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-slate-600">Gönüllü Hizmet</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
