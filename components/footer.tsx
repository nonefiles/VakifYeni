import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
// ... diğer gerekli importlar

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-700 to-blue-500 pt-16 pb-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div>
          <div className="flex items-center mb-4">
            <Heart className="w-8 h-8 mr-3 text-primary" />
            <h3 className="text-3xl font-bold font-lora italic text-white">
              Yol Arkadaşları
            </h3>
          </div>
          <p className="text-white text-lg leading-relaxed mb-8 max-w-md">
            Herkes için psikolojik destek mümkün. Ruh sağlığı için dayanışma ağı.
          </p>

          {/* Sosyal Medya */}
          <div className="flex space-x-4">
            {[
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100089335227245", label: "Facebook" },
              { icon: Instagram, href: "https://instagram.com/yilmazyolarkadaslari", label: "Instagram" },
              // ... diğer sosyal medya ikonları
            ].map((social, idx) => (
              <Link
                href={social.href}
                key={idx}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 glow-on-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={20} className="text-white" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Hızlı Bağlantılar */}
        <div>
          <h3 className="mb-6 text-xl font-bold font-lora italic text-white">
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
                  className="text-white hover:text-white transition-all duration-300 hover:translate-x-1 inline-block glow-on-hover"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="mb-6 text-xl font-bold font-lora italic text-white">
            İletişim
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
              <span className="text-white text-sm leading-relaxed">
                Aziziye Mahallesi Cinnah Caddesi 66/7 P:06630 Çankaya Ankara
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="flex-shrink-0 text-primary" />
              <span className="text-white">+90 539 889 33 75</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="flex-shrink-0 text-primary" />
              <span className="text-white">info@yolarkadaslari.org</span>
            </li>
          </ul>
          {/* Çalışma Saatleri */}
          <div className="mt-8">
            <h4 className="mb-4 text-lg font-semibold font-lora italic text-white">
              Çalışma Saatleri
            </h4>
            <div className="space-y-2 text-sm text-white">
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

      {/* Alt Kısım */}
      <div className="mt-16 pt-8 border-t border-white/20 text-center">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} Yol Arkadaşları Psikoloji Vakfı. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
