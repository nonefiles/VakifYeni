import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ExternalLink, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#EFF6FF] to-white py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-lora italic">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya iş birliği talepleriniz için aşağıdaki iletişim kanallarından bize
              ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col items-center text-center transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-secondary mb-2">Telefon</h3>
              <p className="text-foreground/70 mb-4 text-center">Hafta içi 09:00 - 18:00 saatleri arasında bize ulaşabilirsiniz</p>
              <a href="tel:+905398893375" className="text-primary font-medium hover:underline">
                +90 (539) 889 33 75
              </a>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col items-center text-center transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-secondary mb-2">E-posta</h3>
              <p className="text-foreground/70 mb-4 text-center">Sorularınız için e-posta gönderebilirsiniz</p>
              <a href="mailto:info@yolarkadaslari.org" className="text-primary font-medium hover:underline">
                info@yolarkadaslari.org
              </a>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col items-center text-center transition-all hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-secondary mb-2">Adres</h3>
              <p className="text-foreground/70 mb-4 text-center">Ankara, Türkiye</p>
              <p className="text-primary font-medium">Aziziye Mahallesi Cinnah Caddesi 66/7 P:06630 Çankaya Ankara</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-lora italic text-center">Bize Yazın</h2>
              <p className="text-foreground/80 mb-8 text-center">
                Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz. En kısa sürede size geri dönüş yapacağız.
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2 text-center">
                      Ad Soyad
                    </label>
                    <Input
                      id="name"
                      placeholder="Adınız ve soyadınız"
                      className="bg-white/70 backdrop-blur-sm border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2 text-center">
                      E-posta
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="bg-white/70 backdrop-blur-sm border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2 text-center">
                    Konu
                  </label>
                  <Input
                    id="subject"
                    placeholder="Mesajınızın konusu"
                    className="bg-white/70 backdrop-blur-sm border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2 text-center">
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                    rows={6}
                    className="bg-white/70 backdrop-blur-sm border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-primary border-primary/20 rounded focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-foreground/80">
                    Kişisel verilerimin işlenmesine izin veriyorum
                  </label>
                </div>

                <div className="text-center">
                  <Button className="w-full md:w-auto">
                    Mesajı Gönder
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-[#EFF6FF] rounded-2xl p-6 shadow-sm border border-primary/10 mb-8">
                <h3 className="text-xl font-medium text-secondary mb-4 text-center font-lora italic">
                  Çalışma Saatlerimiz
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80">Pazartesi - Cumartesi</span>
                    <span className="font-medium">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80">Pazar</span>
                    <span className="font-medium">Kapalı</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#EFF6FF] rounded-2xl p-6 shadow-sm border border-primary/10 mb-8">
                <h3 className="text-xl font-medium text-secondary mb-4 text-center font-lora italic">Sosyal Medya</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=100089335227245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary border-2 border-primary/20 transition-all hover:bg-primary hover:text-white"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com/yilmazyolarkadaslari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary border-2 border-primary/20 transition-all hover:bg-primary hover:text-white"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://x.com/yol_psikoloji?t=AsIOscmnvwC9b6tET1iXCQ&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary border-2 border-primary/20 transition-all hover:bg-primary hover:text-white"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/yol-arkada%C5%9Flar%C4%B1-psikolojik-dan%C4%B1%C5%9Fmanl%C4%B1k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary border-2 border-primary/20 transition-all hover:bg-primary hover:text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#EFF6FF] rounded-2xl overflow-hidden shadow-sm border border-primary/10">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.0234567890123!2d32.8527483!3d39.8909123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34de55919549b%3A0xd50f7f8bc696e2b3!2sYol%20Arkada%C5%9Flar%C4%B1%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20Hizmetleri!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  />
                </div>
                <div className="p-4 bg-white text-center">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div>
                      <h4 className="font-medium text-secondary">Ofis Konumumuz</h4>
                      <p className="text-sm text-foreground/70">Aziziye Mahallesi Cinnah Caddesi 66/7</p>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/Yol+Arkada%C5%9Flar%C4%B1+Dan%C4%B1%C5%9Fmanl%C4%B1k+Hizmetleri/@39.8909123,32.8527483,17z/data=!3m1!4b1!4m6!3m5!1s0x14d34de55919549b:0xd50f7f8bc696e2b3!8m2!3d39.8909123!4d32.8553232!16s%2Fg%2F11sgwjzhys?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline text-sm font-medium"
                    >
                      <span>Haritada Görüntüle</span>
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-[#EFF6FF] py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-lora italic">Hızlı İletişim</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Acil durumlar veya hızlı yanıt gerektiren konular için WhatsApp üzerinden de bize ulaşabilirsiniz.
            </p>
            <Button asChild className="bg-green-600 text-white hover:bg-green-700 border-2 border-green-700">
              <a
                href="https://wa.me/905398893375"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                WhatsApp ile İletişime Geç
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
