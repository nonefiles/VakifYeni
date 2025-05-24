import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Linkedin, Twitter, Globe } from "lucide-react"

export default function KurucularVeEkipPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left font-lora italic text-primary">Kurucular ve Ekip</h1>

      <p className="text-lg text-left max-w-3xl mb-12">
        Yol Arkadaşları Psikoloji Vakfı'nın arkasında, ruh sağlığı alanında uzmanlaşmış, vizyoner ve tutkulu bir ekip
        bulunmaktadır.
      </p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-left font-lora italic text-primary">Kurucumuz</h2>

        <div className="max-w-3xl">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/placeholder.svg?height=400&width=300&query=professional male therapist portrait"
                    alt="M. Abdullah Yılmaz"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold mb-2 text-left font-lora italic text-primary">M. Abdullah Yılmaz</h3>
                <p className="text-primary mb-4 italic text-left">Kurucu ve Yönetim Kurulu Başkanı</p>

                <p className="mb-4 text-left">"İnsana dair her alan, anlamaya ve birlikte yürümeye davet eder."</p>

                <p className="mb-4 text-left">
                  1967 yılında Adana'da doğan M. Abdullah Yılmaz, meslek yaşamını insanı anlamaya, eğitmeye ve
                  iyileştirmeye adadı. Selçuk Üniversitesi'nde Edebiyat, Anadolu Üniversitesi'nde Sosyoloji ve Sosyal
                  Hizmet Uzmanlığı eğitimi aldı. Psikoloji lisans fark derslerini Yakın Doğu Üniversitesi'nde
                  tamamlayarak "Klinik Psikoloji" yüksek lisansı yaptı.
                </p>

                <p className="mb-4 text-left">
                  Uzmanlık alanında derinleşirken hem bireysel hem de toplumsal gelişime katkı sunmayı öncelik haline
                  getirdi. Hasan Kalyoncu Üniversitesi'nden Aile Danışmanlığı eğitimi aldı. Bilişsel Davranışçı Terapi
                  ve Şema Terapi eğitimlerini BDTD çatısı altında tamamladı.
                </p>

                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-10 text-left font-lora italic text-primary">Gönüllü Terapistlerimiz</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card key={1} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=female psychologist portrait"
                alt="Dr. Ayşe Yılmaz"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Dr. Ayşe Yılmaz</h3>
              <p className="text-primary">Gönüllü Terapist - Klinik Psikolog</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Klinik psikoloji alanında 15 yıllık deneyime sahip olan Dr. Ayşe Yılmaz, özellikle travma, psikolojik
                sağlamlık ve stres yönetimi konularında uzmanlaşmıştır. İstanbul Üniversitesi'nden mezun olduktan sonra
                doktorasını yurtdışında tamamlamıştır.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card key={2} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=male therapist portrait"
                alt="Uzm. Psk. Mehmet Kaya"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Uzm. Psk. Mehmet Kaya</h3>
              <p className="text-primary">Gönüllü Terapist - Bilişsel Davranışçı Terapist</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Bilişsel Davranışçı Terapi alanında uzmanlaşmış olan Mehmet Kaya, özellikle kaygı bozuklukları ve
                depresyon tedavisinde 10 yılı aşkın deneyime sahiptir. Hacettepe Üniversitesi Psikoloji Bölümü mezunu
                olan Kaya, aynı üniversitede yüksek lisansını tamamlamıştır.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card key={3} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=female child psychologist portrait"
                alt="Uzm. Psk. Zeynep Demir"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Uzm. Psk. Zeynep Demir</h3>
              <p className="text-primary">Gönüllü Terapist - Çocuk ve Ergen Psikologu</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Çocuk ve ergen psikolojisi alanında uzmanlaşmış olan Zeynep Demir, özellikle gelişimsel bozukluklar ve
                aile terapisi konularında çalışmaktadır. Ankara Üniversitesi mezunu olan Demir, çeşitli eğitim
                kurumlarında da danışmanlık hizmeti vermektedir.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card key={4} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=male psychiatrist portrait"
                alt="Dr. Ali Yıldız"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Dr. Ali Yıldız</h3>
              <p className="text-primary">Gönüllü Terapist - Psikiyatrist</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Psikiyatri uzmanı Dr. Ali Yıldız, ruh sağlığı alanında 20 yıllık klinik deneyime sahiptir. Özellikle
                duygudurum bozuklukları ve psikotik bozukluklar konusunda uzmanlaşmıştır. Vakfımızda gönüllü olarak
                danışmanlık ve süpervizyon desteği vermektedir.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card key={5} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=female family therapist portrait"
                alt="Uzm. Psk. Dan. Deniz Yalçın"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Uzm. Psk. Dan. Deniz Yalçın</h3>
              <p className="text-primary">Gönüllü Terapist - Aile Danışmanı</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Aile ve çift terapisi alanında uzmanlaşmış olan Deniz Yalçın, ilişki dinamikleri ve ebeveynlik
                becerileri konusunda çalışmalar yürütmektedir. Boğaziçi Üniversitesi mezunu olan Yalçın, vakfımızda
                gönüllü olarak çift ve aile terapisi hizmeti vermektedir.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card key={6} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=male schema therapist portrait"
                alt="Uzm. Psk. Emre Aydın"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Uzm. Psk. Emre Aydın</h3>
              <p className="text-primary">Gönüllü Terapist - Şema Terapist</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Şema Terapi konusunda uzmanlaşmış olan Emre Aydın, kişilik bozuklukları ve kronik psikolojik sorunlar
                üzerine çalışmaktadır. ODTÜ Psikoloji Bölümü mezunu olan Aydın, vakfımızda haftada bir gün gönüllü
                terapi hizmeti vermektedir.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card key={7} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=female trauma therapist portrait"
                alt="Uzm. Psk. Selin Akgün"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Uzm. Psk. Selin Akgün</h3>
              <p className="text-primary">Gönüllü Terapist - Travma Terapisti</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Travma terapisi alanında uzmanlaşmış olan Selin Akgün, EMDR ve Somatic Experiencing yaklaşımlarını
                kullanarak travma sonrası stres bozukluğu ve kompleks travma tedavisinde çalışmaktadır. İstanbul Bilgi
                Üniversitesi Klinik Psikoloji mezunu olan Akgün, vakfımızda gönüllü olarak hizmet vermektedir.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card key={8} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=male psychologist portrait"
                alt="Uzm. Psk. Burak Özdemir"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Uzm. Psk. Burak Özdemir</h3>
              <p className="text-primary">Gönüllü Terapist - Varoluşçu Terapist</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Varoluşçu terapi yaklaşımını benimseyen Burak Özdemir, yaşam anlam ve amaç sorunları, kimlik çatışmaları
                ve varoluşsal krizler konusunda çalışmaktadır. Ege Üniversitesi Psikoloji Bölümü mezunu olan Özdemir,
                vakfımızda ayda iki hafta gönüllü terapi hizmeti sunmaktadır.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card key={9} className="overflow-hidden border-0 shadow-md">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=400&query=female psychologist portrait"
                alt="Uzm. Psk. Elif Yıldırım"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="text-left">
              <h3 className="text-xl font-bold font-lora italic text-primary">Uzm. Psk. Elif Yıldırım</h3>
              <p className="text-primary">Gönüllü Terapist - Bütüncül Terapist</p>
            </CardHeader>
            <CardContent className="text-left">
              <p className="mb-4">
                Bütüncül terapi yaklaşımını benimseyen Elif Yıldırım, zihin-beden bağlantısı, mindfulness ve
                psikodinamik yaklaşımları entegre ederek çalışmaktadır. Marmara Üniversitesi Psikoloji Bölümü mezunu
                olan Yıldırım, vakfımızda düzenli olarak gönüllü terapi hizmeti vermektedir.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-10 text-left font-lora italic text-primary">İdari Ekibimiz</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md">
              <div className="relative h-64">
                <Image
                  src={`/placeholder.svg?height=300&width=400&query=professional administrative staff portrait`}
                  alt={`İdari Ekip Üyesi ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="text-left">
                <h3 className="text-xl font-bold font-lora italic text-primary">İdari Ekip Üyesi {i}</h3>
                <p className="text-primary">Pozisyon</p>
              </CardHeader>
              <CardContent className="text-left">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel
                  ultricies lacinia.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
