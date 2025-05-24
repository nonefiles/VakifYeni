import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

export function Footer() {
  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-medium font-lora gradient-heading">Yol Arkadaşları</h3>
            <p className="text-foreground/70 font-aristotelica">
              Herkes için psikolojik destek mümkün. Ruh sağlığı için dayanışma ağı.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100089335227245"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/yilmazyolarkadaslari"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://x.com/yol_psikoloji?t=AsIOscmnvwC9b6tET1iXCQ&s=09"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <FaXTwitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.youtube.com/@YolArkada%C5%9Flar%C4%B1Dan%C4%B1%C5%9Fmanl%C4%B1k"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/yol-arkada%C5%9Flar%C4%B1-psikolojik-dan%C4%B1%C5%9Fmanl%C4%B1k"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-medium font-lora gradient-heading">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-foreground/70 font-aristotelica">
              <li>
                <Link href="/hakkimizda" className="hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-primary transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog/Kaynaklar
                </Link>
              </li>
              <li>
                <Link href="/gonullu-bagis" className="hover:text-primary transition-colors">
                  Gönüllü Ol/Bağış Yap
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-medium font-lora gradient-heading">İletişim</h3>
            <ul className="space-y-4 text-foreground/70 font-aristotelica">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <span>Aziziye Mahallesi Cinnah Caddesi 66/7 P:06630 Çankaya Ankara</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-primary" />
                <span>+90 539 889 33 75</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-primary" />
                <span>info@yolarkadaslari.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-medium font-lora gradient-heading">Çalışma Saatleri</h3>
            <ul className="space-y-2 text-foreground/70 font-aristotelica">
              <li className="flex justify-between">
                <span>Pazartesi - Cumartesi:</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Pazar:</span>
                <span>Kapalı</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-foreground/60 font-aristotelica">
          <p>© {new Date().getFullYear()} Yol Arkadaşları Psikoloji Vakfı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
