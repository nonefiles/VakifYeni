import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartHandshake, Users, BookOpen, Calendar, School, Building, ArrowRight } from "lucide-react"
import { FaqSection } from "@/components/faq-section"
import { Input } from "@/components/ui/input"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-32 blue-gradient-bg relative">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 text-5xl font-medium leading-tight md:text-6xl lg:text-7xl">
              Herkes İçin Psikolojik Destek <span className="text-primary">Mümkün</span>
            </h1>
            <p className="mb-12 text-xl text-foreground/80 leading-relaxed font-aristotelica">
              Yol Arkadaşları Psikoloji Vakfı olarak, ruh sağlığı hizmetlerine erişimde fırsat eşitliğini savunuyor;
              ücretsiz terapi, eğitim ve toplumsal projelerle yanınızda yürüyoruz.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 justify-center">
              <Button asChild size="lg" className="shadow-lg gradient-bg-primary">
                <Link href="/gonullu-ol">Gönüllü Ol</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-lg">
                <Link href="/bagis-yap">Bağış Yap</Link>
              </Button>
            </div>
          </div>
        </div>
        <SectionDivider type="wave" color="blue" position="bottom" />
      </section>

      {/* About Section */}
      <section className="py-24 white-gradient-bg relative">
        <div className="container">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="mb-8 text-4xl font-medium md:text-5xl text-left">Biz Kimiz?</h2>
            <p className="mb-12 text-xl text-foreground/80 leading-relaxed font-aristotelica text-left">
              20 yılı aşkın deneyimle; uzman gönüllüler, psikoloji alanındaki güçlü iş birlikleri ve toplum temelli
              yaklaşımımızla fazlasıyız.
              <br />
              Ruh sağlığı için dayanışma ağıyız.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-3xl bg-card p-12 shadow-sm border border-primary/10">
            <h3 className="mb-6 text-3xl font-medium text-primary">Misyonumuz</h3>
            <p className="mb-6 text-lg text-foreground/80 leading-relaxed font-aristotelica">
              Yol Arkadaşları Psikoloji Vakfı olarak, herkesin psikolojik desteğe eşit şekilde ulaşabildiği bir dünya
              yaratmayı hedefliyoruz. Bu yolculukta, maddi imkânları kısıtlı olan bireyler için ücretsiz psikoterapi
              fırsatları sunuyor, genç uzmanların gelişimine katkı sağlayarak onların mesleki yolculuklarında bir rehber
              olmayı amaçlıyoruz.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-aristotelica">
              İnanıyoruz ki, bir arada olmanın iyileştirici gücü sadece bireysel bir deneyim değil, toplumun kolektif
              gücüdür. Ve biz, bu gücü çoğaltmak ve herkese ulaşmak için burada, her adımda yanınızdayız.
            </p>
          </div>
        </div>
        <SectionDivider type="curve" color="white" position="bottom" />
      </section>

      {/* Services Section */}
      <section className="py-24 blue-gradient-bg relative">
        <div className="container">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="mb-6 text-4xl font-medium md:text-5xl text-left">İnsana Değer Veren Bir Yolculuk</h2>
            <p className="mb-16 text-xl text-foreground/80 leading-relaxed font-aristotelica text-left">
              Maddi engellerin terapiye ve eğitime ulaşmanın önünde durmaması için bireylerle ve psikoloji
              öğrencileriyle omuz omuza çalışıyoruz.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<HeartHandshake className="h-10 w-10 text-primary" />}
              title="Ücretsiz Psikoterapi"
              description="Yetişkin, çift/aile, çocuk/ergen psikoterapisi hizmetleri sunuyoruz."
              link="/hizmetlerimiz/ucretsiz-psikoterapi"
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Grup Terapileri"
              description="Benzer deneyimlerden geçen kişilerle bir araya gelerek iyileşme fırsatı."
              link="/hizmetlerimiz/grup-terapileri"
            />
            <ServiceCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Psikoloji Sohbetleri"
              description="Ruh sağlığı alanında toplumsal farkındalık yaratmak için ücretsiz sohbetler."
              link="/hizmetlerimiz/psikoloji-sohbetleri"
            />
            <ServiceCard
              icon={<Calendar className="h-10 w-10 text-primary" />}
              title="Psikolojik Atölyeler"
              description="Deneyimleyerek öğrenme fırsatı sunan interaktif atölye çalışmaları."
              link="/hizmetlerimiz/psikolojik-atolyeler"
            />
            <ServiceCard
              icon={<Building className="h-10 w-10 text-primary" />}
              title="Kurumsal Eğitimler"
              description="İş yerlerinde psikolojik iyi oluşu destekleyen eğitim programları."
              link="/hizmetlerimiz/kurumsal-egitimler"
            />
            <ServiceCard
              icon={<School className="h-10 w-10 text-primary" />}
              title="Enstitü Hedefimiz"
              description="Psikoloji alanında eğitim, uygulama ve araştırmayı bir araya getiren bir enstitü."
              link="/hizmetlerimiz/enstitu-projesi"
            />
          </div>
        </div>
        <SectionDivider type="tilt" color="blue" position="bottom" />
      </section>

      {/* Partnership Section */}
      <section className="py-24 white-gradient-bg relative">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-left text-4xl font-medium md:text-5xl">Birlikte Büyüyen Bir Yapı</h2>
            <div className="rounded-3xl bg-card p-12 shadow-sm border border-secondary/10">
              <p className="mb-6 text-lg text-foreground/80 leading-relaxed font-aristotelica">
                Yol Arkadaşları Psikoloji Vakfı, bir hayalin meyvesi. Doğduğu yer ise uzun süredir yürütülen danışmanlık
                merkezinin deneyimi ve insanlarla kurduğu ilişki.
              </p>
              <p className="mb-6 text-lg text-foreground/80 leading-relaxed font-aristotelica">
                Danışmanlık merkezi hem uzmanlık alt yapısını hem de ekip gücünü vakfın hizmetine açtı. Bu iş birliği
                sayesinde vakıf, henüz yeni kurulmuş olsa da uzmanlığı güçlü, erişimi geniş, yoldaşlığı güven veren bir
                yapı olarak hizmet verebiliyor.
              </p>
              <p className="mb-8 text-lg text-foreground/80 leading-relaxed font-aristotelica">
                Yol Arkadaşları Danışmanlık Merkezinde de hâlâ ücretsiz ve düşük ücretli görüşmeler yapılmaya devam
                ediliyor vakfın tam olarak devreye girmediği noktada, bu merkez bir "köprü" görevi görüyor.
              </p>
              <div className="text-center">
                <Button asChild variant="soft" size="lg" className="shadow-lg">
                  <Link href="https://yolarkadaslari.com" target="_blank" rel="noopener noreferrer">
                    Danışmanlık Merkezini Ziyaret Et
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <SectionDivider type="wave" color="white" position="bottom" />
      </section>

      {/* FAQ Section */}
      <section className="py-24 blue-gradient-bg relative">
        <FaqSection />
        <SectionDivider type="curve" color="blue" position="bottom" />
      </section>

      {/* Call to Action */}
      <section className="py-24 white-gradient-bg relative">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl bg-card p-12 text-left border border-primary/20 shadow-sm">
            <h2 className="mb-8 text-4xl font-medium text-primary text-left">Birlikte Daha Güçlüyüz</h2>
            <p className="mb-10 text-xl text-foreground/80 leading-relaxed font-aristotelica text-left">
              Gönüllü uzmanlarımızla büyüyor, bağışçılarımızın desteğiyle yol alıyoruz. Bu dayanışma ağının bir parçası
              olmak ister misiniz?
            </p>
            <div className="flex flex-col justify-start space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <Button asChild size="lg" variant="outline" className="border-primary text-primary">
                <Link href="/gonullu-ol">Gönüllü Ol</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary text-white">
                <Link href="/bagis-yap">Bağış Yap</Link>
              </Button>
            </div>
          </div>
        </div>
        <SectionDivider type="tilt" color="white" position="bottom" />
      </section>

      {/* Newsletter */}
      <section className="py-24 blue-gradient-bg relative">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-medium md:text-5xl text-primary text-left">Haberdar Olun</h2>
            <p className="mb-10 text-xl text-foreground/80 leading-relaxed font-aristotelica text-left">
              Etkinliklerimizden, projelerimizden ve yeni gelişmelerden haberdar olmak için bültenimize abone olun.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input type="email" placeholder="E-posta adresiniz" className="flex-1 font-aristotelica" required />
              <Button type="submit" className="bg-primary text-white">
                Abone Ol
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent">{icon}</div>
        <CardTitle className="text-2xl text-secondary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-foreground/80 font-aristotelica">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link} className="link-with-arrow group">
          <span>Daha Fazla Bilgi</span>
          <ArrowRight size={16} className="group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}
