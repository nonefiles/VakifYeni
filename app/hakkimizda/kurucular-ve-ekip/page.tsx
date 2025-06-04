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
    <div className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left font-lora italic text-primary">Kurucular ve Ekip</h1>

      <p className="text-lg text-left max-w-3xl mb-12">
        Yol Arkadaşları Psikoloji Vakfı'nın arkasında, ruh sağlığı alanında uzmanlaşmış, vizyoner ve tutkulu bir ekip
        bulunmaktadır.
      </p>

      {/* Founder Section */}
      {founder && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-left font-lora italic text-primary">Kurucumuz</h2>

          <Card className="max-w-4xl border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 flex justify-center items-center">
                  <div className="w-full h-full">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="lg:w-2/3 p-8 text-center">
                  <h3 className="text-3xl font-bold mb-2 text-center font-lora italic text-white">{founder.name}</h3>
                  <p className="text-xl text-primary mb-4 italic">{founder.title}</p>

                  {founder.description && (
                    <p className="mb-6 text-lg italic text-gray-600 border-l-4 border-primary pl-4">
                      "{founder.description}"
                    </p>
                  )}

                  <div className="space-y-4 text-center">
                    <p>
                      1967 yılında Adana'da doğan M. Abdullah Yılmaz, meslek yaşamını insanı anlamaya, eğitmeye ve
                      iyileştirmeye adadı. Selçuk Üniversitesi'nde Edebiyat, Anadolu Üniversitesi'nde Sosyoloji ve
                      Sosyal Hizmet Uzmanlığı eğitimi aldı.
                    </p>
                    <p>
                      Psikoloji lisans fark derslerini Yakın Doğu Üniversitesi'nde tamamlayarak "Klinik Psikoloji"
                      yüksek lisansı yaptı. Hasan Kalyoncu Üniversitesi'nden Aile Danışmanlığı eğitimi aldı.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Team Members Section - Vertical 9:16 Layout */}
      <div>
        <h2 className="text-3xl font-bold mb-10 text-left font-lora italic text-primary">Ekibimiz</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherMembers.map((member, index) => (
            <Card
              key={index}
              className="card-dynamic group overflow-hidden hover:shadow-glow transition-all duration-500 aspect-[9/16]"
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Image Section - Takes most of the space */}
                <div className="relative overflow-hidden flex-1">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={533}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section - Bottom portion */}
                <div className="p-4 text-center bg-white">
                  <h3
                    className="text-lg font-bold mb-1 text-black leading-tight"
                    style={{ fontFamily: "Aristotelica Display Trial, sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-primary font-medium text-sm"
                    style={{ fontFamily: "Aristotelica Display Trial, sans-serif" }}
                  >
                    Gönüllü {member.title}
                  </p>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Description */}
      <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-4 text-center font-lora italic text-primary">Birlikte Büyüyen Bir Aile</h3>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Yol Arkadaşları Psikoloji Vakfı ekibi, farklı uzmanlık alanlarından gelen profesyonellerin birlikteliğiyle
          güçlü bir yapı oluşturmaktadır. Her ekip üyemiz, ruh sağlığı hizmetlerine erişimi demokratikleştirme
          vizyonumuz doğrultusunda gönüllü olarak hizmet vermektedir.
        </p>
      </div>
    </div>
  )
}
