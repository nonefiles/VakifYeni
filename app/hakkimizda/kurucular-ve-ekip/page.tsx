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
    name: "Öznur Ünsal",
    title: "Klinik Psikolog",
    image: "/images/team/oznur-unsal.jpg",
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
  {
    name: "Onurcan Güler",
    title: "Psikolog",
    image: "/images/team/onurcan-guler.jpg",
  },
  {
    name: "Duygu Sarıkaya",
    title: "Klinik Psikolog",
    image: "/images/team/duygu-sarikaya.jpg",
  },
  {
    name: "Zeliha Gültekin",
    title: "Psikolog",
    image: "/images/team/zeliha-gultekin.jpg",
  },
  {
    name: "Mert Tokatlı",
    title: "Klinik Psikolog",
    image: "/images/team/mert-tokatli.jpg",
  },
  {
    name: "Tuğba Doğanay",
    title: "Sosyal Medya Uzmanı",
    image: "/placeholder.svg?height=300&width=300&query=professional female social media specialist",
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
                <div className="lg:w-1/3 p-8 flex justify-center items-center bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="relative">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-3xl font-bold mb-2 text-left font-lora italic text-primary">{founder.name}</h3>
                  <p className="text-xl text-primary mb-4 italic">{founder.title}</p>

                  {founder.description && (
                    <p className="mb-6 text-lg italic text-gray-600 border-l-4 border-primary pl-4">
                      "{founder.description}"
                    </p>
                  )}

                  <div className="space-y-4 text-left">
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

      {/* Team Members Section */}
      <div>
        <h2 className="text-3xl font-bold mb-10 text-left font-lora italic text-primary">Ekibimiz</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherMembers.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group h-full"
            >
              <CardContent className="p-4 text-center h-full flex flex-col">
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 shadow-md">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1 flex-grow">
                  <h3 className="text-base font-bold font-lora italic text-primary leading-tight">{member.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{member.title}</p>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Gönüllü Uzman</p>
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
