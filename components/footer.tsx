import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f7fafc] border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 py-16 max-w-7xl text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Yol Arkadaşları Logo"
              width={180}
              height={32}
              priority
              className="mb-6"
            />
            <p className="mb-3 text-sm leading-relaxed text-gray-700">
              İnsana değer veren bir yolculukta, iyileşmenin herkesin hakkı olduğuna inanıyoruz.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              Herkes için psikolojik destek mümkün. Ruh sağlığı için dayanışma ağı.
            </p>

            <div className="flex space-x-3">
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
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} className="text-gray-700" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-gray-900">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
                { name: "Blog/Kaynaklar", href: "/blog" },
                { name: "Gönüllü Ol/Bağış Yap", href: "/gonullu-bagis" },
                { name: "İletişim", href: "/iletisim" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Working Hours Combined */}
          <div className="col-span-2 lg:col-span-1 space-y-8">
            <div>
              <h4 className="mb-4 text-base font-semibold text-gray-900">İletişim</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <MapPin size={18} className="text-primary mr-3 mt-0.5" />
                  <span>Aziziye Mah. Cinnah Cad. 66/7, 06630 Çankaya / Ankara</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-primary mr-3" />
                  <span>+90 539 889 33 75</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-primary mr-3" />
                  <span>info@yolarkadaslari.org</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-base font-semibold text-gray-900">Çalışma Saatleri</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Pzt - Cmt</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          © {currentYear} Yol Arkadaşları Psikoloji Vakfı. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}

export default Footer
