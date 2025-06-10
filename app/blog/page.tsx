// pages/blog.tsx veya app/blog/page.tsx

import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Clock,
  ArrowRight,
  Calendar,
  User,
  BookOpen,
  Film,
  PenTool,
  Filter,
} from "lucide-react"

const blogPosts = [
  // ... (Yazı listesi olduğu gibi kalsın)
]

const categories = [
  "Tümü",
  "Kişisel Gelişim",
  "Çocuk Psikolojisi",
  "İlişkiler",
  "Farkındalık",
  "Travma",
  "Ruh Sağlığı",
  "Terapi",
]

const resources = [
  {
    id: 1,
    title: "Psikoloji Alanında Önerilen Kitaplar",
    description:
      "Uzmanlarımızın seçtiği, psikoloji ve kişisel gelişim alanında ufkunuzu genişletecek kitap önerileri.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    link: "/blog/kaynaklar/kitaplar",
  },
  {
    id: 2,
    title: "Terapötik Film Önerileri",
    description:
      "Psikolojik konuları derinlemesine ele alan, düşündürücü ve ilham verici film tavsiyeleri.",
    icon: <Film className="h-10 w-10 text-primary" />,
    link: "/blog/kaynaklar/filmler",
  },
  {
    id: 3,
    title: "Akademik Makaleler ve Araştırmalar",
    description:
      "Psikoloji alanındaki güncel akademik çalışmalar ve araştırma sonuçları.",
    icon: <PenTool className="h-10 w-10 text-primary" />,
    link: "/blog/kaynaklar/makaleler",
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen">
      {/* ... HERO, KATEGORİ, YAZILAR ... */}

      {/* Kaynaklar Bölümü - Bebek Mavisi Arkaplan */}
      <section className="py-20 bg-[#B3E5FC] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 float-element"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white rounded-full translate-x-48 float-element"></div>
        </div>

        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 font-lora italic text-primary text-center">
            Faydalı Kaynaklar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Kaynak Kartı Bileşeni
function ResourceCard({ resource }: { resource: any }) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm h-full p-6 flex flex-col justify-between">
      <div>
        <div className="mb-4">{resource.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-primary">
          <Link href={resource.link}>{resource.title}</Link>
        </h3>
        <p className="text-gray-700">{resource.description}</p>
      </div>
      <div className="mt-6">
        <Link
          href={resource.link}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-all duration-300 font-medium text-sm"
        >
          <span>Daha Fazla</span>
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </Card>
  )
}
