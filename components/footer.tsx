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

      <div className="container relative z-10 py-12 px-6 md:px-12 mx-auto max-w-7xl text-gray-800 text-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {/* Brand Section */}
          <div className="flex flex-col items-center mx-auto max-w-sm">
            <div className="flex justify-center mb-4">
              <Image src="/images/logo.png" alt="Yol Arkadaşları Logo" width={200} height={32} className="mr-3" />
            </div>
            <p className="text-gray-800/90 text-base leading-relaxed mb-3 max-w-sm font-aristoteles">
              İnsana değer veren bir yolculukta, iyileşmenin herkesin hakkı olduğuna inanıyoruz.
            </p>
            <p className="text-gray-800/90 text-base leading-relaxed mb-6 max-w-sm font-aristoteles">
              Herkes için psikolojik destek mümkün. Ruh sağlığı için dayanışma ağı.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 justify-center">
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
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 glow-on-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center mx-auto">
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
                    className="text-gray-800/80 hover:text-gray-800 transition-all duration-300 hover:translate-x-1 inline-block glow-on-hover text-base font-aristoteles"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Working Hours */}
          <div className="text-center mx-auto">
            <div className="flex justify-center items-start gap-6">
              {/* Contact Info */}
              <div>
                <h3 className="mb-4 text-xl font-bold font-lora italic" style={{ color: "#000000" }}>
                  İletişim
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start justify-start">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-primary mr-2" />
                    <span className="text-gray-800/80 text-base leading-relaxed text-left font-aristoteles">
                      Aziziye Mahallesi Cinnah Caddesi 66/7 P:06630 Çankaya Ankara
                    </span>
                  </li>
                  <li className="flex items-center justify-start">
                    <Phone size={18} className="flex-shrink-0 text-primary mr-2" />
                    <span className="text-gray-800/80 text-base font-aristoteles">+90 539 889 33 75</span>
                  </li>
                  <li className="flex items-center justify-start">
                    <Mail size={18} className="flex-shrink-0 text-primary mr-2" />
                    <span className="text-gray-800/80 text-base font-aristoteles">info@yolarkadaslari.org</span>
                  </li>
                </ul>
              </div>

              {/* Working Hours */}
              <div>
                <h4 className="mb-3 text-lg font-bold font-lora italic" style={{ color: "#000000" }}>
                  Çalışma Saatleri
                </h4>
                <div className="space-y-1 text-sm text-gray-800/80">
                  <div className="flex justify-start">
                    <span className="mr-2 font-aristoteles">Pazartesi - Cumartesi:</span>
                    <span className="font-aristoteles">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-start">
                    <span className="mr-2 font-aristoteles">Pazar:</span>
                    <span className="font-aristoteles">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-200/50 text-center mx-auto">
          <p className="text-gray-800/70 text-xs">
            © {new Date().getFullYear()} Yol Arkadaşları Psikoloji Vakfı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Default export da ekleyelim
export default Footer
