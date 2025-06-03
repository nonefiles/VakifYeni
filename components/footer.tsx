import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#ecf6fc" }}>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 float-element"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 float-element"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 float-element"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 text-gray-800 text-center">
        {/* Logo ve Slogan */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-center mb-6">
            <Image src="/images/logo.png" alt="Yol Arkadaşları Logo" width={250} height={50} />
          </div>
          <p className="text-gray-800/90 text-lg leading-relaxed mb-4">
            İnsana değer veren bir yolculukta, iyileşmenin herkesin hakkı olduğuna inanıyoruz.
          </p>
          <p className="text-gray-800/90 text-lg leading-relaxed mb-8">
            Herkes için psikolojik destek mümkün. Ruh sağlığı için dayanışma ağı.
          </p>

          {/* Social Media */}
          <div className="flex space-x-6 justify-center mb-8">
            {[
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100089335227245", label: "Facebook" },
              { icon: Instagram, href: "https://instagram.com/yilmazyolarkadaslari", label: "Instagram" },
              {
                icon: FaXTwitter,
                href: "https://x.com/yol_psikoloji?t=AsIOscmnvwC9b6tET1iXCQ&s=09",
                label: "Twitter",
              },
              {
                icon: Youtube,
                href: "https://www.youtube.com/@YolArkada%C5%9Flar%C4%B1Dan%C4%B1%C5%9Fmanl%C4%B1k",
                label: "Youtube",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/company/yol-arkada%C5%9Flar%C4%B1-psikolojik-dan%C4%B1%C5%9Fmanl%C4%B1k",
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={18} />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Hızlı Bağlantılar */}
          <div className="text-center">
            <h3 className="mb-4 text-xl font-bold font-lora italic" style={{ color: "#000000" }}>
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
                { name: "Blog/Kaynaklar", href: "/blog" },
                { name: "Gönüllü Ol/Bağış Yap", href: "/gonullu-bagis" },
                { name: "İletişim", href: "/iletisim" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-800/80 hover:text-gray-800 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="text-center">
            <h3 className="mb-4 text-xl font-bold font-lora italic" style={{ color: "#000000" }}>
              İletişim
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center">
                <Phone size={18} className="flex-shrink-0 text-primary mr-2" />
                <span className="text-gray-800/80">+90 539 889 33 75</span>
              </li>
              <li className="flex items-center justify-center">
                <Mail size={18} className="flex-shrink-0 text-primary mr-2" />
                <span className="text-gray-800/80">info@yolarkadaslari.org</span>
              </li>
              <li className="flex items-start justify-center">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-primary mr-2" />
                <span className="text-gray-800/80 text-sm leading-relaxed">
                  Aziziye Mahallesi Cinnah Caddesi 66/7 P:06630 Çankaya Ankara
                </span>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div className="text-center">
            <h3 className="mb-4 text-xl font-bold font-lora italic" style={{ color: "#000000" }}>
              Çalışma Saatleri
            </h3>
            <div className="space-y-2 text-sm text-gray-800/80">
              <div className="flex justify-center">
                <span className="mr-2">Pazartesi - Cumartesi:</span>
                <span>09:00 - 20:00</span>
              </div>
              <div className="flex justify-center">
                <span className="mr-2">Pazar:</span>
                <span>Kapalı</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-200/50 text-center">
          <p className="text-gray-800/70 text-sm">
            © {new Date().getFullYear()} Yol Arkadaşları Psikoloji Vakfı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Default export da ekleyelim
export default Footer
