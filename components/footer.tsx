import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#ecf6fc]">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 float-element" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 float-element" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 float-element" />
      </div>

      <div className="container relative z-10 py-12 px-6 md:px-12 mx-auto max-w-7xl text-gray-800">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Yol Arkadaşları Logo"
                width={200}
                height={32}
                priority
              />
            </div>
            <p className="text-gray-800/90 leading-relaxed mb-4 font-aristoteles">
              İnsana değer veren bir yolculukta, iyileşmenin herkesin hakkı olduğuna inanıyoruz.
            </p>
            <p className="text-gray-800/90 leading-relaxed mb-8 font-aristoteles">
              Herkes için psikolojik destek mümkün. Ruh sağlığı için dayanışma ağı.
            </p>

            {/* Social Media */}
            <nav aria-label="Sosyal Medya">
              <ul className="flex space-x-4">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/profile.php?id=100089335227245",
                    label: "Facebook",
                  },
                  {
                    icon: Instagram,
                    href: "https://instagram.com/yilmazyolarkadaslari",
                    label: "Instagram",
                  },
                  {
                    icon: FaXTwitter,
                    href: "https://x.com/yol_psikoloji?t=AsIOscmnvwC9b6tET1iXCQ&s=09",
                    label: "Twitter",
                  },
                  {
                    icon: Youtube,
                    href: "https://www.youtube.com/@YolArkada%C5%9Flar%C4%B1Dan%C4%B1%C5%9Fmanl%C4%B1k",
                    label: "YouTube",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/yol-arkada%C5%9Flar%C4%B1-psikolojik-dan%C4%B1%C5%9Fmanl%C4%B1k",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <li key={index}>
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 glow-on-hover text-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={20} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold font-lora italic text-black">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3" aria-label="Hızlı bağlantılar">
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
                    className="text-gray-800/80 hover:text-gray-800 transition-all duration-300 hover:translate-x-1 inline-block glow-on-hover font-aristoteles"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Working Hours */}
          <div>
            <div className="flex flex-col md:flex-row md:gap-8">
              {/* Contact */}
              <div>
                <h3 className="mb-6 text-xl font-bold font-lora italic text-black">
                  İletişim
                </h3>
                <ul className="space-y-4" aria-label="İletişim bilgileri">
                  <li className="flex items-start">
                    <MapPin size={20} className="mt-1 flex-shrink-0 text-primary mr-3" />
                    <span className="text-gray-800/80 text-sm leading-relaxed font-aristoteles">
                      Aziziye Mahallesi Cinnah Caddesi 66/7 P:06630 Çankaya Ankara
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone size={20} className="flex-shrink-0 text-primary mr-3" />
                    <span className="text-gray-800/80 font-aristoteles">+90 539 889 33 75</span>
                  </li>
                  <li className="flex items-center">
                    <Mail size={20} className="flex-shrink-0 text-primary mr-3" />
                    <span className="text-gray-800/80 font-aristoteles">info@yolarkadaslari.org</span>
                  </li>
                </ul>
              </div>

              {/* Working Hours */}
              <div className="mt-8 md:mt-0">
                <h3 className="mb-6 text-xl font-bold font-lora italic text-black">
                  Çalışma Saatleri
                </h3>
                <div className="space-y-2 text-sm text-gray-800/80 font-aristoteles" aria-label="Çalışma saatleri">
                  <div className="flex justify-between gap-4">
                    <span>Pazartesi - Cumartesi:</span>
                    <span>09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Pazar:</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200/50 text-center">
          <p className="text-gray-800/70 text-sm font-aristoteles">
            © {currentYear} Yol Arkadaşları Psikoloji Vakfı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
