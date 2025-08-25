import { cn } from "@/lib/utils"
import { Clock, Phone } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faInstagram, 
  faFacebookF, 
  faXTwitter, 
  faYoutube, 
  faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons"



export function InfoBanner({ className }: { className?: string }) {
  return (
    <div
      role="banner"
      className={cn(
        "fixed top-0 left-0 w-full z-40 bg-[#0F886F] text-white h-[51px] flex items-center",
        className
      )}
    >
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          {/* Sol Taraf: İletişim Bilgileri */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm">
            {/* Çalışma Saatleri */}
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-3.5 w-3.5" />
              <span>P.tesi-C.tesi: 09:00-18:30</span>
            </div>

            {/* Telefon */}
            <a
              href="tel:+905328893375"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200"
              aria-label="Bizi arayın: 0532 889 3375"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>0532 889 3375</span>
            </a>

            {/* Danışmanlık URL */}
            <a
              href="https://yolarkadaslari.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200"
              aria-label="Danışmanlık hizmetlerimizi ziyaret edin"
            >
              <span className="text-xl font-serif italic">ψ</span>
              <span>Yılmaz Yol Arkadaşları Danışmanlık</span>
            </a>
          </div>

          {/* Sağ Taraf: Sosyal Medya İkonları */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://www.instagram.com/yolarkadaslarivakfi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-200"
              aria-label="Instagram'da bizi takip edin"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089335227245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-200"
              aria-label="Facebook'ta bizi takip edin"
            >
              <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/yol_psikoloji?t=AsIOscmnvwC9b6tET1iXCQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-200"
              aria-label="X'te bizi takip edin"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@YolArkadaslariDanismanlik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-200"
              aria-label="YouTube kanalımıza abone olun"
            >
              <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/yol-arkadaslari-psikolojik-danismanlik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn'de bizi takip edin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Kullanım örneği:
<InfoBanner
  workingHours="Hafta içi 09:00-18:00"
  phone="+90 555 000 00 00"
  consultingUrl="https://danismanlik.yolpsikolog.org"
/>
*/