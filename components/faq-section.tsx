"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Yol Arkadaşları Psikoloji Vakfı tam olarak ne yapıyor?",
    answer:
      "Vakfımız, psikolojik desteğe erişimi olmayan bireyler için ücretsiz psikoterapi ve grup çalışmaları sunar; psikoloji alanında yetişen genç uzmanlara gelişim desteği sağlar ve toplumsal ruh sağlığına katkı sunacak eğitim ve etkinlikler düzenler.",
  },
  {
    question: "Psikoterapi hizmetlerinden kimler faydalanabilir?",
    answer:
      "Ücretsiz psikoterapi hizmetimiz, maddi koşullar nedeniyle özel terapiye erişemeyen bireylere yöneliktir. Başvuru formunu doldurarak değerlendirme sürecine katılabilirsiniz.",
  },
  {
    question: "Başvuru süreci nasıl işliyor?",
    answer:
      "Web sitemizde yer alan başvuru formunu doldurduğunuzda, ekibimiz ön görüşme için sizinle iletişime geçer. Uygunluk durumunuza göre ücretsiz psikoterapi süreci planlanır.",
  },
  {
    question: "Psikologlarınız kimler?",
    answer:
      "Vakıf bünyesinde görev alan uzmanlar, psikoloji alanında eğitimlerini tamamlamış, etik ilkelere bağlı çalışan ruh sağlığı profesyonelleridir.",
  },
  {
    question: "Hizmetleriniz sadece bireysel psikoterapiden mi ibaret?",
    answer:
      "Hayır. Aynı zamanda grup terapileri, atölye çalışmaları, kurumsal eğitimler ve her hafta düzenlenen psikoloji sohbetleriyle bireysel ve toplumsal düzeyde destek sunuyoruz.",
  },
  {
    question: "Gönüllü olmak istiyorum. Ne yapmalıyım?",
    answer:
      "Harika! Web sitemizde yer alan Gönüllü Ol formunu doldurarak başvurabilirsiniz. Size uygun bir alan olup olmadığını değerlendirmek üzere ekibimiz sizinle iletişime geçecektir.",
  },
  {
    question: "Vakfa bağış yapabilir miyim?",
    answer:
      "Elbette. Bağışlarınız, ücretsiz terapi hizmetleri ve sosyal sorumluluk projelerimizin sürdürülebilirliğini sağlamak için çok kıymetli. Web sitemizdeki Bağış Yap butonu üzerinden kolayca bağışta bulunabilirsiniz.",
  },
  {
    question: "Danışmanlık merkeziyle ilişkiniz nedir?",
    answer:
      "Vakfımız, danışmanlık merkezinin yıllara dayanan uzmanlık birikiminden doğmuştur. Bugün, iki yapı birlikte çalışarak bireylerin ruh sağlığına bütüncül bir katkı sağlamaktadır.",
  },
  {
    question: "Herkes psikoloji sohbetlerine katılabilir mi?",
    answer:
      "Evet, psikoloji sohbetlerimiz ücretsiz ve herkese açıktır. Katılım detayları sosyal medya hesaplarımızdan ve web sitemizden duyurulmaktadır.",
  },
  {
    question: "Terapiler online mı, yüz yüze mi?",
    answer: "İhtiyaca ve uzmanın çalışma koşullarına bağlı olarak hem online hem yüz yüze görüşmeler sağlanmaktadır.",
  },
  {
    question: "Gizliliğim korunuyor mu?",
    answer: "Kesinlikle. Tüm görüşmeler, etik ilkelere ve mesleki gizliliğe uygun şekilde yürütülmektedir.",
  },
]

export function FaqSection() {
  return (
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-8 text-4xl font-medium md:text-5xl font-lora gradient-heading">Sıkça Sorulan Sorular</h2>
        <p className="mb-12 text-xl text-center text-foreground/80 leading-relaxed font-aristotelica">
          Yol Arkadaşları Psikoloji Vakfı hakkında merak edilenler
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-primary/10">
              <AccordionTrigger className="text-left text-lg font-medium text-foreground py-6 font-aristotelica">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-base leading-relaxed pb-6 font-aristotelica">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
