import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Linkedin, Heart } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 float-element"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 float-element"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 float-element"></div>
      </div>

      <div className="container relative z-10 py-20 text-gray-800" style={{ backgroundColor: "#ecf6fc" }}>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 mr-3 text-primary" />
              <h3 className="text-3xl font-bold font-lora italic" style={{ color: "#000000" }}>
                Yol Arkadaşları
              </h3>
            </div>
            <p className="text-gray-800/90 text-lg leading-relaxed mb-8 max-w-md">
              İnsana değer veren bir yolculukta, iyileşmenin herkesin hakkı olduğuna inanıyoruz. 
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
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
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 glow-on-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold font-lora italic" style={{ color: "#FFFFFF" }}>
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
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
                    className="text-gray-800/80 hover:text-gray-800 transition-all duration-300 hover:translate-x-1 inline-block glow-on-hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-bold font-lora italic" style={{ color: "#FFFFFF" }}>
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-gray-800/80 text-sm leading-relaxed">
                  Aziziye Mahallesi Cinnah Caddesi 66/7 P:06630 Çankaya Ankara
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-primary" />
                <span className="text-gray-800/80">+90 539 889 33 75</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-primary" />
                <span className="text-gray-800/80">info@yolarkadaslari.org</span>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold font-lora italic" style={{ color: "#FFFFFF" }}>
                Çalışma Saatleri
              </h4>
              <div className="space-y-2 text-sm text-gray-800/80">
                <div className="flex justify-between">
                  <span>Pazartesi - Cumartesi:</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
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
