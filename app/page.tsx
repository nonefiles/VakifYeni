import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Users, BookOpen, Calendar, School, Building, ArrowRight, Sparkles, Star, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { FaqSection } from "@/components/faq-section";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section - Dynamic */}
      <section className="min-h-screen flex items-center relative hero-section">
        {/* Floating background elements */}
        <div className="inset-0 overflow-hidden">
          <div className="top-20 left-10 w-32 h-32 bg-primary/10 rounded-full float-element"></div>
          <div className="top-40 right-20 w-24 h-24 bg-accent/10 rounded-full float-element"></div>
          <div className="bottom-40 left-1/4 w-40 h-40 bg-secondary/5 rounded-full float-element"></div>
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-secondary border border-primary/20 mb-8 animate-fade-in glow-on-hover">
              <Star className="w-4 h-4 mr-2 text-primary" />
              Herkes için psikolojik destek
            </div>

            {/* Main heading */}
            <h1 className="mb-8 text-responsive-xl font-medium leading-tight animate-fade-in text-center">
              <span className="block text-foreground font-lora italic">Ruh sağlığı bir ayrıcalık </span>
              <span className="block gradient-text font-lora italic">değil haktır.</span>
            </h1>

            {/* Description */}
            <p className="mb-12 text-responsive-md text-foreground/80 leading-relaxed font-aristotelica max-w-4xl mx-auto animate-slide-in-up text-center">
              Bu vakıf, bir ihtiyaçtan doğdu. Psikolojik desteğe erişemeyen bireyler için dayanışmayı büyütmek istedik.
              İyilik hâlini sadece terapiyle değil; sohbetlerle, öğrenme alanlarıyla, birlikte güçlenerek destekliyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 justify-center animate-scale-in">
              <Button asChild size="lg" className="shadow-glow">
                <Link href="/gonullu-ol">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Gönüllü Ol
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-glow">
                <Link href="/bagis-yap">Bağış Yap</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="py-32 white-gradient-bg relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-slide-in-left text-center lg:text-left">
              <div className="space-y-4 text-center">
                <h2 className="text-responsive-lg font-medium font-lora italic">Biz Kimiz?</h2>
                <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto lg:mx-0"></div>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed font-aristotelica text-center">
                Yol Arkadaşları Psikoloji Vakfı olarak, ruh sağlığının yaşamın temel bir hakkı olduğuna inanıyor ve bu hakka herkesin erişebilmesi için çalışıyoruz. Psikoloji biliminin dönüştürücü gücünü, hem bireylerin hem de toplumun hizmetine sunmayı amaçlayan bir topluluk hareketiyiz.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed font-aristotelica text-center">
                Bugün vakıf olarak yürüttüğümüz çalışmaların temeli, uzun süredir birlikte çalışan uzmanlarımızın danışmanlık merkezinde edindiği ortak deneyime dayanıyor. Bu zemin, bize hem mesleki bir derinlik hem de sahada karşılaştığımız ihtiyaçlara duyarlı bir yaklaşım kazandırdı.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild variant="outline" size="lg" className="group">
                  <Link href="/hakkimizda">
                    Daha Fazla Bilgi
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                  <Link
                    href="https://instagram.com/yolarkadaslarivakfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://twitter.com/yolarkadaslarivakfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://facebook.com/yolarkadaslarivakfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/yolarkadaslarivakfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="relative animate-slide-in-right">
              <div className="interactive-card p-12 rounded-4xl text-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <HeartHandshake className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-secondary font-lora italic">Misyonumuz</h3>

                  <p className="text-foreground/80 leading-relaxed font-aristotelica">
                    Yol Arkadaşları Psikoloji Vakfı olarak, herkesin psikolojik desteğe eşit şekilde ulaşabildiği bir dünya yaratmayı hedefliyoruz.
                  </p>

                  <p className="text-foreground/80 leading-relaxed font-aristotelica">
                    Bu yolculukta, maddi imkânları kısıtlı olan bireyler için ücretsiz psikoterapi fırsatları sunuyor, genç uzmanların gelişimine katkı sağlayarak onların mesleki yolculuklarında bir rehber olmayı amaçlıyoruz. Ayrıca, toplumsal ruh sağlığına katkı sağlayacak eğitim ve etkinlikler düzenliyoruz.
                  </p>

                  <p className="text-foreground/80 leading-relaxed font-aristotelica">
                    İnanıyoruz ki, bir arada olmanın iyileştirici gücü sadece bireysel bir deneyim değil, toplumun kolektif gücüdür.
                    Ve biz, bu gücü çoğaltmak ve herkese ulaşmak için burada, her adımda yanınızdayız.
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="-top-6 -right-6 w-12 h-12 bg-accent/20 rounded-full float-element"></div>
              <div className="-bottom-6 -left-6 w-8 h-8 bg-primary/20 rounded-full float-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dynamic Grid */}
      <section className="py-32 blue-gradient-bg relative">
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-responsive-lg font-medium mb-6 font-lora italic">İnsana Değer Veren Bir Yolculuk</h2>
            <div className="w-32 h-1 bg-gradient-primary rounded-full mx-auto mb-8"></div>
            <p className="text-responsive-md text-foreground/70 max-w-4xl mx-auto leading-relaxed font-aristotelica">
              Maddi engellerin terapiye ve eğitime ulaşmanın önünde durmaması için bireylerle ve psikoloji
              öğrencileriyle omuz omuza çalışıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HeartHandshake className="h-8 w-8" />,
                title: "Ücretsiz Psikoterapi",
                description: "Yetişkin, çift/aile, çocuk/ergen psikoterapisi hizmetleri sunuyoruz.",
                link: "/hizmetlerimiz/hizmetlerimiz",
                delay: "stagger-1",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Grup Terapileri",
                description: "Benzer deneyimlerden geçen kişilerle bir araya gelerek iyileşme fırsatı.",
                link: "/hizmetlerimiz/hizmetlerimiz",
                delay: "stagger-2",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Psikoloji Sohbetleri",
                description: "Ruh sağlığı alanında toplumsal farkındalık yaratmak için ücretsiz sohbetler.",
                link: "/hizmetlerimiz/hizmetlerimiz",
                delay: "stagger-3",
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Psikolojik Atölyeler",
                description: "Deneyimleyerek öğrenme fırsatı sunan interaktif atölye çalışmaları.",
                link: "/hizmetlerimiz/hizmetlerimiz",
                delay: "stagger-4",
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Kurumsal Eğitimler",
                description: "İş yerlerinde psikolojik iyi oluşu destekleyen eğitim programları.",
                link: "/hizmetlerimiz/hizmetlerimiz",
                delay: "stagger-5",
              },
              {
                icon: <School className="h-8 w-8" />,
                title: "Enstitü Hedefimiz",
                description: "Psikoloji alanında eğitim, uygulama ve araştırmayı bir araya getiren bir enstitü.",
                link: "/hizmetlerimiz/hizmetlerimiz",
                delay: "stagger-6",
              },
            ].map((service, index) => (
              <div key={index} className={`animate-slide-in-up ${service.delay}`}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-lora italic">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed font-aristotelica">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button asChild className="w-full group" variant="outline">
                      <Link href={service.link}>
                        Detayları Gör
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section - Enhanced */}
      <section className="py-32 white-gradient-bg relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-responsive-lg font-medium mb-6 font-lora italic">Birlikte Büyüyen Bir Yapı</h2>
              <div className="w-32 h-1 bg-gradient-primary rounded-full mx-auto"></div>
            </div>

            <div className="interactive-card p-12 rounded-4xl relative overflow-hidden animate-scale-in">
              {/* Background pattern */}
              <div className="top-0 right-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="bottom-0 left-0 w-48 h-48 bg-gradient-secondary opacity-5 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="relative z-10 space-y-8 text-center">
                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-aristotelica">
                  <p>
                    Yol Arkadaşları Psikoloji Vakfı, bir hayalin meyvesi. Doğduğu yer ise uzun süredir yürütülen
                    danışmanlık merkezinin deneyimi ve insanlarla kurduğu ilişki.
                  </p>

                  <p>
                    Danışmanlık merkezi hem uzmanlık alt yapısını hem de ekip gücünü vakfın hizmetine açtı. Bu iş
                    birliği sayesinde vakıf, henüz yeni kurulmuş olsa da uzmanlığı güçlü, erişimi geniş, yoldaşlığı
                    güven veren bir yapı olarak hizmet verebiliyor.
                  </p>

                  <p>
                    Danışmanlık merkezinde de hâlâ ücretsiz ve düşük ücretli görüşmeler yapılmaya devam ediliyor vakfın tam olarak devreye girmediği noktada, bu merkez bir "köprü" görevi görüyor.
                  </p>
                </div>

                <div className="text-center pt-8">
                  <Button asChild size="lg" variant="accent" className="group">
                    <Link href="https://yolarkadaslari.com" target="_blank" rel="noopener noreferrer">
                      Danışmanlık Merkezini Ziyaret Et
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 blue-gradient-bg relative">
        <div className="animate-fade-in">
          <FaqSection />
        </div>
      </section>

      {/* CTA Section - Dynamic */}
      <section className="py-32 white-gradient-bg relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-4xl animate-scale-in" style={{ backgroundColor: '#EBF5FC' }}>
              {/* Gradient background */}
              <div className="inset-0 bg-gradient-primary opacity-90"></div>

              {/* Pattern overlay */}
              <div className="inset-0 opacity-10">
                <div className="top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
              </div>

              <div className="relative z-10 p-16 text-center text-white">
                <h2 className="text-responsive-lg font-medium mb-8 text-white font-lora italic">Birlikte Daha Güçlüyüz</h2>

                <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-12 font-aristotelica">
                  Vakıf faaliyetlerimiz bağışlar ve gönüllü emeklerle devam ediyor. Sizde daha çok kişinin desteğe ulaşmasına katkı sağlayabilirsiniz.
                  Bu vakıf bir kişinin değil, birlikte iyileşmenin hayaliyle yola çıkanların vakfı.
                  Her destek, daha fazla insana ulaşmamızı sağlıyor.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" variant="white" className="group">
                    <Link href="/gonullu-ol">
                      Gönüllü Ol
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary group"
                  >
                    <Link href="/bagis-yap">
                      Bağış Yap
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Modern */}
      <section className="py-32 blue-gradient-bg relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-responsive-lg font-medium mb-8 font-lora italic">Haberdar Olun</h2>

            <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto font-aristotelica">
              Etkinliklerimizden, projelerimizden ve yeni gelişmelerden haberdar olmak için bültenimize abone olun.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4 p-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20">
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 border-0 bg-transparent focus:ring-0 focus:outline-none font-aristotelica"
                />
                <Button className="rounded-full px-8">Abone Ol</Button>
              </div>
            </div>

            <div className="mt-12 text-sm text-foreground/60 font-aristotelica">
              İnsana değer veren bir yolculukta, iyileşmenin herkesin hakkı olduğuna inanıyoruz.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
