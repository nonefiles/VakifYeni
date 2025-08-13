import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartHandshake, Users, BookOpen, Calendar, Building, School, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-accent py-16 md:py-24 relative blue-gradient-bg">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary md:text-5xl font-lora italic">Hizmetlerimiz</h1>
            <div className="max-w-3xl mx-auto">
              <p className="mt-8 text-center text-lg text-foreground/80">
                Yol Arkadaşları Psikoloji Vakfı olarak, psikolojik destek, eğitim ve toplumsal gelişim alanlarında çeşitli
                hizmetler sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Psychological Support Section */}
      <section className="py-16 white-gradient-bg relative">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary font-lora italic">
            Psikolojik Destek Programları
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border border-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent mx-auto">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary font-lora italic text-center">
                  Ücretsiz Psikoterapi Hizmeti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-foreground/80 text-center">
                  <p className="mt-8 text-center">
                    Psikolojik destek bir ayrıcalık değil, bir hak. Biz de Yol Arkadaşları Psikoloji Vakfı olarak bu
                    hakka erişimde herkesin eşit koşullara sahip olmasını önemsiyoruz.
                  </p>
                  <p className="mt-8 text-center">
                    Maddi koşullar nedeniyle terapiye ulaşamayan bireyler için ücretsiz psikoterapi hizmeti
                    sunuyoruz. Bu hizmetten faydalanmak isteyen herkes, başvuru formumuzu doldurarak değerlendirme
                    sürecine katılabilir.
                  </p>
                  <p className="mt-8 text-center">Sunduğumuz psikoterapi hizmetleri, her bireyin ihtiyaçlarına göre şekillenir.</p>
                  <ul className="text-center inline-block">
                    <li>
                      <b><strong>Bireysel Psikoterapi:</strong></b> Yetişkin bireylerin duygu, düşünce ve davranışlarını
                      anlamalarına, zorlayıcı yaşam olaylarıyla başa çıkmalarına destek olur.
                    </li>
                    <li>
                      <strong>Çocuk ve Ergen Psikoterapisi:</strong> Çocukların ve ergenlerin gelişimsel, duygusal ve
                      sosyal zorluklarıyla sağlıklı şekilde baş edebilmeleri için aileyle iş birliği içinde yürütülür.
                    </li>
                    <li>
                      <strong>Çift ve Aile Psikoterapisi:</strong> Evlilik, ebeveynlik ve aile içi ilişkilerde yaşanan
                      çatışmaları anlamak ve çözümlemek amacıyla sunulur.
                    </li>
                  </ul>
                  <p className="mt-8 text-center">
                    Tüm görüşmeler, alanında eğitimli uzmanlar tarafından yürütülür; etik kurallar çerçevesinde ve
                    gizlilik ilkesiyle gerçekleştirilir.
                  </p>
                  <p className="mt-8 text-center">Yalnız değilsiniz. Biz, her adımda yanınızda olmaya hazırız.</p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild className="bg-primary text-white">
                  <Link href="/basvuru/psikoterapi">Başvuru Yap</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary font-lora italic text-center">Grup Terapileri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-foreground/80 text-center">
                  <p className="mt-8 text-center">
                    Yalnız hissettiğinizde, duygularınızı paylaşmak için bir alan aradığınızda, benzer yaşantılardan
                    geçen kişilerle bir araya gelmenin iyileştirici gücü bambaşkadır.
                  </p>
                  <p className="mt-8 text-center">
                    Yol Arkadaşları Psikoloji Vakfı olarak, farklı yaşantılara ve ihtiyaçlara yönelik tematik grup
                    terapileri sunuyoruz. Bu çalışmalarda, bir terapist eşliğinde güvenli bir alanda buluşur, kendinizi
                    ifade etme, başkalarını duyma ve birlikte iyileşme fırsatı bulursunuz.
                  </p>
                  <p className="mt-8 text-center">
                    Grup terapilerimiz, özellikle sosyal destek ihtiyacı duyan, zorlayıcı duygularla baş etmekte
                    zorlanan ya da kendini daha yakından tanımak isteyen bireyler için uygundur. Katılımcılar, benzer
                    deneyimlerden gelen diğer bireylerle bir araya gelerek yalnız olmadıklarını fark eder; karşılıklı
                    paylaşım sayesinde hem kendi yollarını hem de başkalarının yolculuklarını anlamlandırma imkânı
                    bulur.
                  </p>
                  <p className="mt-8 text-center">
                    Tüm gruplar, alanında uzman terapistler eşliğinde yürütülür ve gizlilik ilkesi temel alınarak
                    oluşturulmuş güvenli bir ortamda gerçekleştirilir.
                  </p>
                  <p className="mt-8 text-center">
                    Her adımda yanınızda olmak için buradayız. Grup terapilerimizle ilgili güncel içerikler, başvuru
                    süreci ve tematik programlarımız için bizi takip etmeye devam edin.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild className="bg-primary text-white">
                  <Link href="/basvuru/grup-terapileri">Başvuru Yap</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-accent py-16 blue-gradient-bg relative">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary font-lora italic">Eğitim ve Seminerler</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white border border-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent mx-auto">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary font-lora italic text-center">Psikoloji Sohbetleri</CardTitle>
                <CardDescription className="text-base text-center">
                  Bilgiyle besleniyor, söyleşilerle derinleşiyoruz...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-8 flex text-center flex-wrap gap-3 text-foreground/80">
                  Her hafta, Yol Arkadaşları Danışmanlık Merkezi'nin uzman desteğiyle gerçekleştirdiğimiz psikoloji
                  sohbetlerinde, birlikte düşünüyor, birlikte öğreniyoruz. Bu sohbetler; psikolojiye ilgi duyan, zihnini
                  açmak ve iç dünyasını tanımak isteyen herkes için...
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="outline" className="border-primary text-primary">
                  <Link href="/basvuru/psikoloji-sohbetleri" className="link-with-arrow group">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border border-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent mx-auto">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary font-lora italic text-center">Psikoloji Atölyeleri</CardTitle>
                <CardDescription className="text-base text-center">Deneyimleyerek öğreniyoruz...</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-8 flex text-center flex-wrap gap-3 text-foreground/80">
                  Bilgiye yalnızca ulaşmanın değil, onu birlikte deneyimlemenin de dönüştürücü gücüne inanıyoruz. Atölye
                  çalışmalarımız, katılımcıların hem kendilerini tanımalarına hem de psikoloji bilgilerini pratikle
                  derinleştirmelerine alan açıyor.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="outline" className="border-primary text-primary">
                  <Link href="/hizmetlerimiz/psikoloji-atolyeleri" className="link-with-arrow group">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border border-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent mx-auto">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary font-lora italic text-center">Kurumsal Eğitimler</CardTitle>
                <CardDescription className="text-base text-center">
                  İyi oluş, sadece bireylerin değil kurumların da gücüdür.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mt-8 flex text-center flex-wrap gap-3 text-foreground/80">
                  İş yerlerinde psikolojik iyi oluşun sürdürülebilir başarıyla doğrudan ilişkili olduğuna inanıyoruz.
                  Kurumsal eğitim ve seminer programlarımız, çalışanların ruh sağlığını desteklemeyi, iletişim
                  becerilerini geliştirmeyi ve kurumsal iklimi güçlendirmeyi hedefliyor.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="outline" className="border-primary text-primary">
                  <Link href="/hizmetlerimiz/kurumsal-egitimler" className="link-with-arrow group">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Institute Project */}
      <section className="py-16 white-gradient-bg relative">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary font-lora italic">Enstitü Projesi</h2>
          
          <div className="grid gap-8 md:grid-cols-1 max-w-4xl mx-auto">
            <Card className="border border-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent mx-auto">
                  <School className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary font-lora italic text-center">
                  Psikoloji Enstitüsü
                </CardTitle>
                <CardDescription className="text-base text-center">
                  Geleceğe Doğru Adım Atıyoruz…
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-foreground/80 text-center">
                  <p className="mt-8 text-center">
                    Yol Arkadaşları Psikoloji Vakfı olarak uzun vadeli vizyonumuz; psikoloji alanında eğitim, uygulama ve
                    araştırmayı bir araya getiren bir <strong>Psikoloji Enstitüsü</strong> kurmak. Bu yapı sayesinde,
                    nitelikli uzmanların yetişmesi, toplum temelli psikolojik hizmetlerin güçlenmesi ve bilimsel bilginin
                    daha fazla insana ulaşması için kalıcı bir zemin oluşturmayı hedefliyoruz.
                  </p>
                  <p className="mt-8 text-center">
                    Enstitü; genç uzmanların gelişimini destekleyecek uygulama alanları sunmayı, meslek içi eğitimlerle
                    profesyonel standartları yükseltmeyi ve toplumun psikolojik iyi oluşuna yönelik daha kapsayıcı projeleri
                    mümkün kılmayı amaçlıyor.
                  </p>
                  <p className="mt-8 text-center">Bu proje, sadece bugünü değil geleceği de dönüştürme arzumuzun bir yansıması.</p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="outline" className="border-primary text-primary">
                  <Link href="/gonullu-ol" className="link-with-arrow group">
                    <span>Gönüllü Ol</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
