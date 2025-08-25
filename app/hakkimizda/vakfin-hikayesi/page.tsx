import Image from "next/image"

export default function VakfinHikayesiPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading">Vakfın Hikayesi</h1>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 relative flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Yol Arkadaşları Psikoloji Vakfı Logo"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
        <div className="prose max-w-none text-center">
          <p className="mb-6 text-center">
            Yol Arkadaşları Psikoloji Vakfı, uzun yıllar boyunca psikoloji alanında çalışan profesyonellerin, ruh
            sağlığı hizmetlerine erişimde yaşanan eşitsizlikleri giderme arzusuyla kurulmuştur.
          </p>
          <p className="mb-6 text-center">
            Vakfımız, maddi imkânsızlıklar nedeniyle psikolojik desteğe ulaşamayan bireylere ücretsiz hizmet sunmak,
            genç uzmanların gelişimine katkıda bulunmak ve toplumsal ruh sağlığı bilincini artırmak amacıyla
            çalışmalarını sürdürmektedir.
          </p>
          <p className="mb-6 text-center">
            Danışmanlık merkezimizin yıllara dayanan deneyimi ve birikimi, vakfımızın temelini oluşturmaktadır. Bu
            sayede, henüz yeni kurulmuş olmamıza rağmen, güçlü bir uzmanlık altyapısı ve geniş bir erişim ağıyla hizmet
            verebiliyoruz.
          </p>
        </div>
      </div>
    </div>
  )
}
