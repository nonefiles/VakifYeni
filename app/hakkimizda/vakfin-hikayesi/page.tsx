import Image from "next/image"

export default function VakfinHikayesiPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading">Vakfın Hikayesi</h1>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 relative">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Vakfın Kuruluş Hikayesi"
            width={800}
            height={400}
            className="rounded-xl w-full h-auto"
          />
        </div>
        <div className="prose max-w-none text-center">
          <p className="text-lg mb-6">
            Yol Arkadaşları Psikoloji Vakfı, uzun yıllar boyunca psikoloji alanında çalışan profesyonellerin, ruh
            sağlığı hizmetlerine erişimde yaşanan eşitsizlikleri giderme arzusuyla kurulmuştur.
          </p>
          <p className="mb-6">
            Vakfımızın temelleri, 2010 yılında bir grup psikolog ve psikiyatristin bir araya gelerek başlattığı gönüllü
            danışmanlık hizmetleriyle atıldı. Yıllar içinde büyüyen bu dayanışma ağı, 2020 yılında resmi olarak vakıf
            statüsü kazandı.
          </p>
          <p className="mb-6">
            Vakfımız, maddi imkânsızlıklar nedeniyle psikolojik desteğe ulaşamayan bireylere ücretsiz hizmet sunmak,
            genç uzmanların gelişimine katkıda bulunmak ve toplumsal ruh sağlığı bilincini artırmak amacıyla
            çalışmalarını sürdürmektedir.
          </p>
          <p className="mb-6">
            Danışmanlık merkezimizin yıllara dayanan deneyimi ve birikimi, vakfımızın temelini oluşturmaktadır. Bu
            sayede, henüz yeni kurulmuş olmamıza rağmen, güçlü bir uzmanlık altyapısı ve geniş bir erişim ağıyla hizmet
            verebiliyoruz.
          </p>
        </div>
      </div>
    </div>
  )
}
