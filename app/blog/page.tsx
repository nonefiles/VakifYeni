"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, ArrowRight, Calendar, User, BookOpen, Film, PenTool, Filter } from "lucide-react";

// Blog yazıları
const blogPosts = [
  {
    id: 1,
    title: "Ebeveynlik Stresi ve Başa Çıkma Yolları",
    excerpt: "Ebeveynlik stresi ve bu stresle başa çıkma yolları hakkında bilgi.",
    readTime: "6 dakika",
    slug: "ebeveynlik-stresi",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop&crop=faces",
    category: "Ebeveynlik",
    featured: false,
  },
  {
    id: 2,
    title: "Her Başarısızlık, Yeni Bir Deneyim ve Öğrenme Fırsatıdır",
    excerpt: "Başarısızlıkların yeni deneyimler ve öğrenme fırsatları olarak nasıl görülebileceği.",
    readTime: "5 dakika",
    slug: "basarisizlik-deneyim",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    category: "Kişisel Gelişim",
    featured: false,
  },
  {
    id: 3,
    title: "2 Yaş Sendromu: Ebeveynler İçin Bir Rehber",
    excerpt: "2 yaş sendromu ve ebeveynler için bir rehber.",
    readTime: "7 dakika",
    slug: "2-yas-sendromu",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=faces",
    category: "Çocuk Psikolojisi",
    featured: false,
  },
  {
    id: 4,
    title: "Narsisizm Nedir?",
    excerpt: "Narsizm hakkında detaylı bilgi.",
    readTime: "8 dakika",
    slug: "narsizm-nedir",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
    category: "Kişilik Bozuklukları",
    featured: true,
  },
  {
    id: 5,
    title: "Psikolojik Hastalıklar",
    excerpt: "Psikolojik hastalıklar ve tedavi yöntemleri.",
    readTime: "10 dakika",
    slug: "psikolojik-hastaliklar",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    category: "Ruh Sağlığı",
    featured: false,
  },
  {
    id: 6,
    title: "Stres Hayatımızı Nasıl Etkiler?",
    excerpt: "Stresin günlük yaşam üzerindeki etkileri.",
    readTime: "6 dakika",
    slug: "stres-hayatimiz",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=600&h=400&fit=crop&crop=center",
    category: "Stres Yönetimi",
    featured: false,
  },
  {
    id: 7,
    title: "Pazartesi Günleri Bizi Psikolojik Olarak Neden Zorlar?",
    excerpt: "Pazartesi günlerinin psikolojik etkileri.",
    readTime: "5 dakika",
    slug: "pazartesi-gunleri",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    category: "Günlük Yaşam",
    featured: false,
  },
  {
    id: 8,
    title: "Gelişim Psikolojisi Nedir?",
    excerpt: "Gelişim psikolojisinin temel kavramları.",
    readTime: "7 dakika",
    slug: "gelisim-psikolojisi",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center",
    category: "Psikoloji",
    featured: false,
  },
  {
    id: 9,
    title: "Bir İlişkiyi Sağlıklı Yapan Nedir",
    excerpt: "Sağlıklı ilişkilerin temel özellikleri.",
    readTime: "8 dakika",
    slug: "saglikli-iliski",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&crop=center",
    category: "İlişkiler",
    featured: false,
  },
  {
    id: 10,
    title: "İlişki Terapisti Kimdir?",
    excerpt: "İlişki terapistlerinin rolleri ve önemi.",
    readTime: "6 dakika",
    slug: "iliski-terapisti",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center",
    category: "Terapi",
    featured: false,
  },
  {
    id: 22,
    title: "Psikoz Nedir?",
    excerpt: "Psikoz ve tedavi yöntemleri.",
    readTime: "7 dakika",
    slug: "psikoz",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    category: "Ruh Sağlığı",
    featured: true,
  },
  {
    id: 11,
    title: "Bütüncül Psikoterapi: Zihin, Beden ve Ruhun Bütünlüğüne Doğru",
    excerpt: "Bütüncül psikoterapinin temel ilkeleri.",
    readTime: "9 dakika",
    slug: "butuncul-psikoterapi",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    category: "Terapi",
    featured: false,
  },
  {
    id: 12,
    title: "Nefes Terapisi",
    excerpt: "Nefes terapisi ve faydaları.",
    readTime: "5 dakika",
    slug: "nefes-terapisi",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    category: "Terapi",
    featured: false,
  },
  {
    id: 13,
    title: "Dikkat Eksikliği: Belirtileri, Tanı Süreci ve Tedavi Yöntemleri",
    excerpt: "Dikkat eksikliği hakkında detaylı bilgi.",
    readTime: "10 dakika",
    slug: "dikkat-eksikligi",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center",
    category: "Ruh Sağlığı",
    featured: false,
  },
  {
    id: 14,
    title: "Bağımlılık Türleri ve Anlama Rehberi",
    excerpt: "Bağımlılık türleri ve başa çıkma yolları.",
    readTime: "8 dakika",
    slug: "bagimlilik-turleri",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    category: "Bağımlılık",
    featured: false,
  },
  {
    id: 15,
    title: "Çocuk ve Ergenlerde Dikkat Eksikliği",
    excerpt: "Çocuk ve ergenlerde dikkat eksikliği.",
    readTime: "7 dakika",
    slug: "cocuk-ergende-dikkat-eksikligi",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=faces",
    category: "Çocuk Psikolojisi",
    featured: false,
  },
  {
    id: 16,
    title: "Anoreksiya Nedir",
    excerpt: "Anoreksiya ve belirtileri.",
    readTime: "6 dakika",
    slug: "anoreksiya",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    category: "Yeme Bozuklukları",
    featured: false,
  },
  {
    id: 17,
    title: "Fomo: Kaybetme Korkusu",
    excerpt: "Fomo ve etkileri.",
    readTime: "5 dakika",
    slug: "fomo",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=center",
    category: "Anksiyete",
    featured: false,
  },
  {
    id: 18,
    title: "Çocuk Gelişiminde Kitap Okumanın Önemi",
    excerpt: "Kitap okumanın çocuk gelişimine etkisi.",
    readTime: "7 dakika",
    slug: "cocuk-gelisiminde-kitap",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center",
    category: "Çocuk Gelişimi",
    featured: false,
  },
  {
    id: 19,
    title: "EMDR Nedir?",
    excerpt: "EMDR terapisi hakkında bilgi.",
    readTime: "8 dakika",
    slug: "emdr",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center",
    category: "Terapi",
    featured: false,
  },
  {
    id: 20,
    title: "Şema Terapi Nedir",
    excerpt: "Şema terapisi ve uygulama alanları.",
    readTime: "9 dakika",
    slug: "sema-terapisi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center",
    category: "Terapi",
    featured: false,
  },
  {
    id: 21,
    title: "Anksiyete Nedir?",
    excerpt: "Anksiyete bozukluğu ve belirtileri.",
    readTime: "6 dakika",
    slug: "anksiyete",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=600&h=400&fit=crop&crop=center",
    category: "Anksiyete",
    featured: false,
  },
  {
    id: 23,
    title: "Agorafobi Nedir?",
    excerpt: "Agorafobi ve başa çıkma yolları.",
    readTime: "5 dakika",
    slug: "agorafobi",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=center",
    category: "Fobiler",
    featured: false,
  },
  {
    id: 24,
    title: "Psikolojik El Titremesi",
    excerpt: "Psikolojik el titremesi ve nedenleri.",
    readTime: "6 dakika",
    slug: "psikolojik-el-titremesi",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=600&h=400&fit=crop&crop=center",
    category: "Ruh Sağlığı",
    featured: false,
  },
  {
    id: 25,
    title: "Monofobi Nedir?",
    excerpt: "Monofobi ve belirtileri.",
    readTime: "7 dakika",
    slug: "monofobi",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=center",
    category: "Fobiler",
    featured: false,
  },
  {
    id: 26,
    title: "Çocuk Gelişiminde Duyguların Önemi",
    excerpt: "Duyguların çocuk gelişimindeki rolü.",
    readTime: "8 dakika",
    slug: "cocuk-gelisiminde-duygular",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=faces",
    category: "Çocuk Psikolojisi",
    featured: false,
  },
  {
    id: 27,
    title: "Depresyon Nedir?",
    excerpt: "Depresyon ve tedavi yöntemleri.",
    readTime: "9 dakika",
    slug: "depresyon",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    category: "Ruh Sağlığı",
    featured: false,
  },
  {
    id: 28,
    title: "Kişilik Bozukluğu Nedir?",
    excerpt: "Kişilik bozuklukları ve belirtileri.",
    readTime: "10 dakika",
    slug: "kisilik-bozuklugu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
    category: "Kişilik Bozuklukları",
    featured: false,
  },
  {
    id: 29,
    title: "Sosyal Anksiyete Nedir? Hakkında Doğru Bilinen Yanlışlar",
    excerpt: "Sosyal anksiyete ve yanlış bilinenler.",
    readTime: "7 dakika",
    slug: "sosyal-anksiyete",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=center",
    category: "Anksiyete",
    featured: false,
  },
  {
    id: 30,
    title: "Etkili Zaman Yönetimi Nedir?",
    excerpt: "Etkili zaman yönetimi teknikleri.",
    readTime: "8 dakika",
    slug: "zaman-yonetimi",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    category: "Kişisel Gelişim",
    featured: false,
  },
  {
    id: 31,
    title: "Narsisizm",
    excerpt: "Narsisizm ve belirtileri hakkında detaylı bilgi.",
    readTime: "10 dakika",
    slug: "narsisizm",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
    category: "Kişilik Bozuklukları",
    featured: false,
  },
  {
    id: 32,
    title: "Sınav Kaygısı: Kazanmadan Kaybetmek",
    excerpt: "Sınav kaygısı ve başa çıkma yöntemleri.",
    readTime: "6 dakika",
    slug: "sinav-kaygisi",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center",
    category: "Eğitim Psikolojisi",
    featured: false,
  },
  {
    id: 33,
    title: "Çocuklarda Alt Islatma",
    excerpt: "Çocuklarda alt ıslatma ve çözüm yolları.",
    readTime: "5 dakika",
    slug: "cocuklarda-alt-islatma",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=faces",
    category: "Çocuk Psikolojisi",
    featured: false,
  },
  {
    id: 34,
    title: "Kadınlarda Orgazm Sorununun (Anorgazmi) Psikolojik Nedenleri",
    excerpt: "Kadınlarda orgazm sorununun psikolojik nedenleri.",
    readTime: "7 dakika",
    slug: "anorgazmi",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&crop=center",
    category: "Cinsel Sağlık",
    featured: false,
  },
  {
    id: 35,
    title: "Çocuklarda Bağlanma-Bağlanma Teorisi Nedir?",
    excerpt: "Bağlanma teorisi ve çocuk gelişimine etkisi.",
    readTime: "8 dakika",
    slug: "baglanma-teorisi",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop&crop=faces",
    category: "Çocuk Psikolojisi",
    featured: false,
  },
  {
    id: 36,
    title: "Cinsel Obsesif Bozukluk Nedir?",
    excerpt: "Cinsel obsesif bozukluk ve belirtileri.",
    readTime: "6 dakika",
    slug: "cinsel-obsesif-bozukluk",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    category: "Ruh Sağlığı",
    featured: false,
  },
  {
    id: 37,
    title: "Eş Bağımlılığın Tanımı Nedir?",
    excerpt: "Eş bağımlılık ve belirtileri.",
    readTime: "7 dakika",
    slug: "es-bagimlilik",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&crop=center",
    category: "İlişkiler",
    featured: false,
  },
  {
    id: 38,
    title: "Duygusal Banka Hesabı Nedir?",
    excerpt: "Duygusal banka hesabı ve ilişkilerdeki önemi.",
    readTime: "5 dakika",
    slug: "duygusal-banka",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&crop=center",
    category: "İlişkiler",
    featured: false,
  },
  {
    id: 39,
    title: "Söz Dinlemeyen Çocuğa Nasıl Davranılmalıdır?",
    excerpt: "Söz dinlemeyen çocuklara yaklaşım yöntemleri.",
    readTime: "8 dakika",
    slug: "soz-dinlemeyen-cocuk",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop&crop=faces",
    category: "Ebeveynlik",
    featured: false,
  },
  {
    id: 40,
    title: "Terapötik İlişkinin Önemi Nedir?",
    excerpt: "Terapötik ilişkinin önemi ve etkileri.",
    readTime: "9 dakika",
    slug: "terapotik-iliski",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center",
    category: "Terapi",
    featured: false,
  },
  {
    id: 41,
    title: "Dissosiyatif Kişilik Bozukluğu Nedir?",
    excerpt: "Dissosiyatif kişilik bozukluğu ve belirtileri.",
    readTime: "10 dakika",
    slug: "dissosiyatif-kisilik",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
    category: "Kişilik Bozuklukları",
    featured: false,
  },
  {
    id: 42,
    title: "Hipomani Nedir?",
    excerpt: "Hipomani ve belirtileri.",
    readTime: "6 dakika",
    slug: "hipomani",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    category: "Ruh Sağlığı",
    featured: false,
  },
  {
    id: 43,
    title: "Uyku Felci Nedir?",
    excerpt: "Uyku felci ve nedenleri.",
    readTime: "5 dakika",
    slug: "uyku-felci",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    category: "Uyku Bozuklukları",
    featured: false,
  },
  {
    id: 44,
    title: "Odaklanma Sorunu Nasıl Çözülür?",
    excerpt: "Odaklanma sorunları ve çözüm yolları.",
    readTime: "7 dakika",
    slug: "odaklanma-sorunu",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center",
    category: "Kişisel Gelişim",
    featured: false,
  },
  {
    id: 45,
    title: "İlişkide Güven Sorunu Belirtileri ve Çözümü",
    excerpt: "İlişkilerde güven sorunları ve çözüm yolları.",
    readTime: "8 dakika",
    slug: "guven-sorunu",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&crop=center",
    category: "İlişkiler",
    featured: false,
  },
  {
    id: 46,
    title: "Sosyal Medya Bağımlılığı Nedir?",
    excerpt: "Sosyal medya bağımlılığı ve etkileri hakkında bilgi.",
    readTime: "8 dakika",
    slug: "sosyal-medya-bagimliligi",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=center",
    category: "Teknoloji ve Psikoloji",
    featured: false,
  },
];

// Kategoriler
const categories = [
  "Tümü",
  "Kişisel Gelişim",
  "Çocuk Psikolojisi",
  "İlişkiler",
  "Farkındalık",
  "Travma",
  "Ruh Sağlığı",
  "Terapi",
];

export default function BlogPage() {
  const [showAllFeatured, setShowAllFeatured] = useState(false);

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
  const displayedFeaturedPosts = showAllFeatured ? featuredPosts : featuredPosts.slice(0, 10);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48 float-element"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 translate-y-32 float-element"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-lora italic text-white text-center">Blog ve Kaynaklar</h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed text-center">
              Ruh sağlığı, psikoloji ve kişisel gelişim konularında uzmanlarımızın hazırladığı içerikler, öneriler ve kaynaklar.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <Input
                placeholder="Blog yazılarında ara..."
                className="pl-16 pr-6 py-8 rounded-full bg-white/95 backdrop-blur-sm border-0 shadow-lg text-lg placeholder:text-gray-500"
              />
              <Button className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-all duration-300">
                Ara
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori Filtreleme */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-20 z-20 border-b border-primary/10">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`rounded-full whitespace-nowrap transition-all duration-300 ${
                    index === 0
                      ? "bg-primary text-white shadow-lg"
                      : "border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              className="rounded-full border-primary/30 flex items-center gap-2 hover:bg-primary/10"
            >
              <Filter className="h-4 w-4" />
              <span>Filtrele</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Yazılar */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-lora italic text-primary text-center">
            Öne Çıkan Yazılar
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {displayedFeaturedPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>

          {!showAllFeatured && featuredPosts.length > 10 && (
            <div className="mt-16 flex justify-center">
              <Button
                onClick={() => setShowAllFeatured(true)}
                variant="outline"
                className="rounded-full border-primary/30 px-10 py-3 hover:bg-primary/10 transition-all duration-300"
              >
                Daha Fazla Göster
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Tüm Blog Yazıları */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-lora italic text-primary text-center">Son Yazılar</h2>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Sırala:</span>
              <select className="text-sm border border-primary/20 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-primary cursor-pointer">
                <option>En Yeni</option>
                <option>En Popüler</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full border-primary/30 px-10 py-3 hover:bg-primary/10 transition-all duration-300"
            >
              Daha Fazla Göster
            </Button>
          </div>
        </div>
      </section>

      {/* Bülten Aboneliği */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 md:p-16 shadow-lg border border-primary/10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-lora italic text-primary text-center">Bültene Abone Olun</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                Yeni blog yazıları, kaynaklar ve etkinliklerden haberdar olmak için e-posta listemize kaydolun.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 bg-white border-primary/20 rounded-full py-6 px-6 text-lg placeholder:text-gray-500"
              />
              <Button className="bg-primary text-white rounded-full px-10 py-6 text-lg hover:bg-primary/90 transition-all duration-300">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Kart bileşenleri (değiştirilmedi)
function FeaturedPostCard({ post }) {
  return (
    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full">
      <div className="grid md:grid-cols-2 h-full">
        <div className="relative h-64 md:h-full overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
          <Badge className="absolute top-6 left-6 bg-primary text-white px-4 py-2 text-sm font-medium">
            {post.category}
          </Badge>
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-lora italic text-primary line-clamp-2 leading-tight text-center">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary/80 transition-colors">
                {post.title}
              </Link>
            </h3>

            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-center">{post.excerpt}</p>
          </div>

          <div className="flex items-center justify-center flex-col gap-4">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 group/link font-medium"
            >
              <span>Devamını Oku</span>
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

function BlogPostCard({ post }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <Badge className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 text-sm">{post.category}</Badge>
      </div>

      <CardHeader className="text-center pb-3">
        <div className="flex items-center justify-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <CardTitle className="text-xl font-lora italic text-primary line-clamp-2 leading-tight text-center">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary/80 transition-colors">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center flex-grow">
        <p className="text-gray-600 line-clamp-3 leading-relaxed text-center">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="text-center pt-0 flex items-center justify-center flex-col gap-3">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-all duration-300 group/link text-sm font-medium"
        >
          <span>Oku</span>
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
}
