import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Brain, Users, BookOpen, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HizmetlerimizPage() {
  return (
    <div className="container py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading font-lora">Hizmetlerimiz</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 font-aristotelica">
        Yol Arkadaşları Psikoloji Vakfı olarak, ruh sağlığı alanında bireylere ve topluma yönelik çeşitli hizmetler
        sunuyoruz. Amacımız, psikolojik desteğe erişimde fırsat eşitliği yaratmak ve toplumsal ruh sağlığına katkıda
        bulunmaktır.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <Card className="text-center border-0 shadow-md overflow-hidden flex flex-col">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=300&width=500&text=Ücretsiz Psikoterapi"
              alt="Ücretsiz Psikoterapi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold font-lora">Ücretsiz Psikoterapi</h3>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary mx-auto -mt-16 border-4 border-white">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-lora">Ücretsiz Psikoterapi</CardTitle>
            <CardDescription className="font-aristotelica">Herkes için erişilebilir destek</CardDescription>
          </CardHeader>
          <CardContent className="font-aristotelica flex-grow">
            <p>
            Bireysel psikoterapi hizmetimiz, kişisel gelişim ve ruhsal iyileşme süreçlerinde bilimsel yöntemler ışığında profesyonel destek sunar.
            Güvenli ve saygılı bir ortamda, bireyin kendini anlaması ve zorluklarla başa çıkma becerilerini geliştirmesi hedeflenir.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gradient-bg-primary">
              <Link href="/basvuru/psikoterapi">
                Başvuru Yap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="text-center border-0 shadow-md overflow-hidden flex flex-col">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=300&width=500&text=Grup Terapileri"
              alt="Grup Terapileri"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold font-lora">Grup Terapileri</h3>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary mx-auto -mt-16 border-4 border-white">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-lora">Grup Terapileri</CardTitle>
            <CardDescription className="font-aristotelica">Paylaşarak iyileşme</CardDescription>
          </CardHeader>
          <CardContent className="font-aristotelica flex-grow">
            <p>
            Grup terapileri, bireylerin ortak deneyimler ve destek ağı içinde farkındalık kazanmasını sağlayan, 
            etkileşimsel ve bilimsel temelli bir terapi yaklaşımıdır. Katılımcılar, 
            empati ve paylaşım yoluyla içsel kaynaklarını güçlendirir.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gradient-bg-primary">
              <Link href="/hizmetlerimiz/grup-terapileri">
                Detaylı Bilgi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="text-center border-0 shadow-md overflow-hidden flex flex-col">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=300&width=500&text=Ücretsiz Çift/Aile Psikoterapisi"
              alt="Ücretsiz Çift/Aile Psikoterapisi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold font-lora">Ücretsiz Çift/Aile Psikoterapisi</h3>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary mx-auto -mt-16 border-4 border-white">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-lora">Ücretsiz Çift/Aile Psikoterapisi</CardTitle>
            <CardDescription className="font-aristotelica"></CardDescription>
          </CardHeader>
          <CardContent className="font-aristotelica flex-grow">
            <p>
            Çift ve aile terapisi, ilişkisel dinamiklerin derinlemesine incelendiği, iletişim ve bağ kurma süreçlerinin güçlendirildiği bilimsel temelli bir müdahaledir. 
            Aile sistemleri içinde karşılaşılan sorunların çözümünde iş birliği ve anlayış ön plandadır.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gradient-bg-primary">
              <Link href="/hizmetlerimiz/psikolojik-danismanlik">
                Detaylı Bilgi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="text-center border-0 shadow-md overflow-hidden flex flex-col">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=300&width=500&text=Kurumsal Eğitimler"
              alt="Kurumsal Eğitimler"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold font-lora">Kurumsal Eğitimler</h3>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary mx-auto -mt-16 border-4 border-white">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-lora">Kurumsal Eğitimler</CardTitle>
            <CardDescription className="font-aristotelica">Bilgi ve farkındalık</CardDescription>
          </CardHeader>
          <CardContent className="font-aristotelica flex-grow">
            <p>
            Kurumsal eğitim programlarımız, iş yerindeki psikososyal sağlığı desteklemek ve çalışanların dayanıklılık, iletişim gibi becerilerini artırmak üzere bilimsel temelli içeriklerle hazırlanır.
            Sağlıklı iş ortamları için sürdürülebilir çözümler sunarız.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gradient-bg-primary">
              <Link href="/etkinlikler">
                Etkinlik Takvimi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="text-center border-0 shadow-md overflow-hidden flex flex-col">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=300&width=500&text=Atölye Çalışmaları"
              alt="Atölye Çalışmaları"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold font-lora">Atölye Çalışmaları</h3>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary mx-auto -mt-16 border-4 border-white">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-lora">Atölye Çalışmaları</CardTitle>
            <CardDescription className="font-aristotelica">Deneyimsel öğrenme</CardDescription>
          </CardHeader>
          <CardContent className="font-aristotelica flex-grow">
            <p>
            Psikoloji atölyelerimiz, katılımcıların kişisel farkındalıklarını artırmayı ve yaşam becerilerini geliştirmeyi hedefleyen, deneyimsel öğrenme yöntemlerine dayalı bilimsel temelli programlardır. 
            Etkileşimli ortamda yeni perspektifler kazanılır.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gradient-bg-primary">
              <Link href="/hizmetlerimiz/atolye-calismalari">
                Detaylı Bilgi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="text-center border-0 shadow-md overflow-hidden flex flex-col">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=300&width=500&text=Ücretsiz Çocuk/Ergen Psikoterapisi"
              alt="Ücretsiz Çocuk/Ergen Psikoterapisi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold font-lora">Ücretsiz Çocuk/Ergen Psikoterapisi</h3>
              </div>
            </div>
          </div>
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary mx-auto -mt-16 border-4 border-white">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-lora">Ücretsiz Çocuk/Ergen Psikoterapisi</CardTitle>
            <CardDescription className="font-aristotelica"></CardDescription>
          </CardHeader>
          <CardContent className="font-aristotelica flex-grow">
            <p>
            Çocuk ve ergen psikoterapisinde, bireylerin gelişim süreçlerini desteklemek ve zorluklarla başa çıkma becerilerini geliştirmek üzere bilimsel yöntemlerle çalışılır.
            Güvenli ve empatik bir ortamda, çocukların ve gençlerin kendini anlaması ve iletişim becerilerini geliştirir.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gradient-bg-primary">
              <Link href="/hizmetlerimiz/supevizyon">
                Detaylı Bilgi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-accent/20 p-8 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 gradient-heading font-lora">Hizmetlerimiz Hakkında</h2>
        <div className="text-lg font-aristotelica space-y-4">
          <p>
            Tüm hizmetlerimiz, alanında uzman psikologlar tarafından etik ilkelere uygun olarak sunulmaktadır. Gizlilik
            ve mahremiyet, en önemli değerlerimiz arasındadır.
          </p>
          <p>
            Hizmetlerimizden yararlanmak veya detaylı bilgi almak için bizimle iletişime geçebilir veya ilgili başvuru
            formlarını doldurabilirsiniz.
          </p>
          <div className="flex justify-center mt-6">
            <Button asChild className="gradient-bg-primary">
              <Link href="/iletisim">
                Bizimle İletişime Geçin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
