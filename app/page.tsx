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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full float-element"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full float-element"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-secondary/5 rounded-full float-element"></div>
        </div>
        
        <div className="container relative z-10">
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>

          <div className="text-center space-y-12 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium animate-pulse-gentle">
                <Star className="w-5 h-5" />
                <span>Ruh Sağlığı Herkesin Hakkıdır</span>
                <Sparkles className="w-5 h-5" />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                  Yol Arkadaşları
                </span>
                <br />
                <span className="text-foreground font-light">
                  Psikoloji Vakfı
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-aristotelica">
                Psikoloji biliminin dönüştürücü gücünü topluma sunarak,
                <br />
                ruh sağlığını herkesin erişebileceği bir hak haline getiriyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-slide-up">
              <Link href="/hizmetlerimiz">
                <Button size="lg" className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 text-lg">
                  Hizmetlerimizi Keşfedin
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/hakkimizda">
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-full hover:bg-primary/5 transition-all duration-300 text-lg">
                  Hikâyemizi Öğrenin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-background to-secondary/5 rounded-3xl p-16 relative overflow-hidden animate-scale-in">
              <div className="space-y-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Ruh Sağlığı Herkesin Hakkı
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed font-aristotelica text-center">
                  Yol Arkadaşları Psikoloji Vakfı olarak, ruh sağlığının yaşamın temel bir hakkı olduğuna inanıyor ve bu hakka herkesin erişebilmesi için çalışıyoruz. Psikoloji biliminin dönüştürücü gücünü, hem bireylerin hem de toplumun hizmetine sunmayı amaçlayan bir topluluk hareketiyiz.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed font-aristotelica text-center">
                  Bugün vakıf olarak yürüttüğümüz çalışmaların temeli, uzun süredir birlikte çalışan uzmanlarımızın danışmanlık merkezinde edindiği ortak deneyime dayanıyor. Bu zemin, bize hem mesleki bir derinlik hem de sahada karşılaştığımız ihtiyaçlara duyarlı bir yaklaşım kazandırdı.
                </p>

                <Button asChild size="lg" className="group mt-8">
                  <Link href="/hakkimizda" className="inline-flex items-center">
                    Daha Fazla Bilgi
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <Link
                    href="https://instagram.com/yolarkadaslarivakfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://twitter.com/yolarkadaslarivakfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://facebook.com/yolarkadaslarivakfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/yolarkadaslarivakfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/20 rounded-full float-element"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/20 rounded-full float-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-secondary/5 relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Misyonumuz
              </h2>
              
              <div className="space-y-8">
                <p className="text-foreground/80 leading-relaxed font-aristotelica">
                  Bu yolculukta, maddi imkânları kısıtlı olan bireyler için ücretsiz psikoterapi fırsatları sunuyor, genç uzmanların gelişimine katkı sağlayarak onların mesleki yolculuklarında bir rehber olmayı amaçlıyoruz. Ayrıca, toplumsal ruh sağlığına katkı sağlayacak eğitim ve etkinlikler düzenliyoruz.
                </p>

                <p className="text-foreground/80 leading-relaxed font-aristotelica">
                  İnanıyoruz ki, bir arada olmanın iyileştirici gücü sadece bireysel bir deneyim değil, toplumun kolektif gücüdür.
                  Ve biz, bu gücü çoğaltmak ve herkese ulaşmak için burada, her adımda yanınızdayız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Hizmetlerimiz
                </h2>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-aristotelica">
                  Ruh sağlığı alanında kapsamlı hizmetler sunarak, toplumun her kesimine ulaşmayı hedefliyoruz.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-in">
                <DynamicServiceCard
                  icon={<HeartHandshake className="w-8 h-8" />}
                  title="Ücretsiz Psikoterapi"
                  description="Maddi imkânları kısıtlı bireyler için profesyonel psikoterapi hizmeti sunuyoruz."
                  link="/hizmetlerimiz/ucretsiz-psikoterapi"
                  featured
                />
                <DynamicServiceCard
                  icon={<Users className="w-8 h-8" />}
                  title="Süpervizyon"
                  description="Genç uzmanların mesleki gelişimine katkı sağlayacak süpervizyon hizmetleri."
                  link="/hizmetlerimiz/supervizyon"
                />
                <DynamicServiceCard
                  icon={<BookOpen className="w-8 h-8" />}
                  title="Eğitim Programları"
                  description="Ruh sağlığı konularında toplumsal farkındalık yaratacak eğitim programları."
                  link="/hizmetlerimiz/egitim-programlari"
                />
                <DynamicServiceCard
                  icon={<Calendar className="w-8 h-8" />}
                  title="Etkinlikler"
                  description="Ruh sağlığı farkındalığını artıran çeşitli etkinlik ve workshop'lar."
                  link="/hizmetlerimiz/etkinlikler"
                />
                <DynamicServiceCard
                  icon={<School className="w-8 h-8" />}
                  title="Araştırma"
                  description="Psikoloji alanında bilimsel araştırma ve geliştirme çalışmaları."
                  link="/hizmetlerimiz/arastirma"
                />
                <DynamicServiceCard
                  icon={<Building className="w-8 h-8" />}
                  title="Danışmanlık"
                  description="Kurumsal ruh sağlığı danışmanlığı ve destek hizmetleri."
                  link="/hizmetlerimiz/danismanlik"
                />
              </div>

              <Button asChild size="lg" variant="outline" className="mt-12">
                <Link href="/hizmetlerimiz">
                  Tüm Hizmetlerimizi Görün
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-secondary/5 relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-16 relative overflow-hidden animate-scale-in">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="relative z-10 space-y-8 text-center">
                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-aristotelica">
                  <p>
                    Yol Arkadaşları Psikoloji Vakfı'nın temeli, uzun süredir birlikte çalışan uzmanlarımızın 
                    danışmanlık merkezinde edindiği ortak deneyime dayanıyor. Bu birliktelik, hem mesleki 
                    derinlik hem de sahada karşılaştığımız ihtiyaçlara duyarlı bir yaklaşım kazandırdı.
                  </p>
                  
                  <p>
                    Danışmanlık merkezindeki çalışmaların yanı sıra, Türkiye'nin farklı şehirlerinde görev yapan 
                    uzman psikologlarla kurulan gönüllü ağ, vakfın erişim gücünü artırıyor. Bu coğrafi yayılım ve 
                    birliği sayesinde vakıf, henüz yeni kurulmuş olsa da uzmanlığı güçlü, erişimi geniş, yoldaşlığı 
                    güven veren bir yapı olarak hizmet verebiliyor.
                  </p>
                  
                  <p>
                    Danışmanlık merkezinde de hâlâ ücretsiz ve düşük ücretli görüşmeler yapılmaya devam ediliyor vakfın tam olarak devreye girmediği noktada, bu merkez bir "köprü" görevi görüyor.
                  </p>
                </div>

                <Button asChild size="lg" className="mt-8">
                  <Link href="/hakkimizda">
                    Hikâyemizi Keşfedin
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FaqSection />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-accent/10 relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl animate-scale-in" style={{ backgroundColor: '#EBF5FC' }}>
              {/* Gradient background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
              </div>

              <div className="relative z-10 p-16 text-center text-primary">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                      Bültenimize Abone Olun
                    </h2>
                    <p className="text-lg text-primary/80 max-w-2xl mx-auto font-aristotelica">
                      Ruh sağlığı alanındaki en güncel gelişmeler, etkinliklerimiz ve hizmetlerimiz hakkında bilgi sahibi olun.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="flex-1 bg-white border-white/20 text-primary placeholder:text-primary/60"
                    />
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                      Abone Ol
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-sm text-foreground/60 text-center font-aristotelica">
              İnsana değer veren bir yolculukta, iyileşmenin herkesin hakkı olduğuna inanıyoruz.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Dynamic Service Card Component
function DynamicServiceCard({
  icon,
  title,
  description,
  link,
  featured = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  featured?: boolean;
}) {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5' : ''
      }`}
    >
      <CardHeader className="text-center">
        <div className={`mx-auto mb-4 p-3 rounded-full ${
          featured ? 'bg-gradient-to-r from-primary to-accent text-white' : 'bg-secondary text-secondary-foreground'
        }`}>
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center leading-relaxed font-aristotelica">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={link} className="w-full">
          <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
            Detayları Görün
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
