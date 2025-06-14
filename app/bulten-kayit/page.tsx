"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle, User, Heart, BookOpen, Users } from "lucide-react";

// Newsletter benefits data
const benefits = [
  {
    id: "1",
    title: "Haftalık İçerik",
    description: "Her hafta ruh sağlığı ve kişisel gelişim üzerine özenle seçilmiş içerikler",
    icon: <BookOpen className="w-6 h-6 text-blue-600" />
  },
  {
    id: "2", 
    title: "Uzman Tavsiyeleri",
    description: "Alanında uzman psikologlardan pratik öneriler ve rehberlik",
    icon: <User className="w-6 h-6 text-blue-600" />
  },
  {
    id: "3",
    title: "Topluluk Desteği", 
    description: "Benzer hedeflere sahip kişilerle bağlantı kurma fırsatı",
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    id: "4",
    title: "Özel Kaynaklar",
    description: "Sadece bülten abonelerine özel kitap, film ve makale önerileri",
    icon: <Heart className="w-6 h-6 text-blue-600" />
  }
];

// Benefit card component
const BenefitCard: React.FC<{ benefit: any }> = ({ benefit }) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 group">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
          {benefit.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            {benefit.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Newsletter signup page component
const NewsletterSignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !name) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    if (!email.includes("@")) {
      setError("Geçerli bir e-posta adresi girin.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-blue-800 mb-4">
              Başarıyla Kayıt Oldunuz! 🎉
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Merhaba <span className="font-semibold text-blue-700">{name}</span>! 
              Bültenimize hoş geldiniz. İlk bültenimizi yakında {email} adresine göndereceğiz.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700">
                E-posta kutunuzu kontrol etmeyi unutmayın. Bazen e-postalarımız spam klasörüne düşebilir.
              </p>
            </div>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
                setName("");
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl px-8"
            >
              Yeni Kayıt
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="container space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <Mail className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
            Bültenimize Katılın
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ruh sağlığı ve kişisel gelişim yolculuğunuzda size eşlik etmek için haftalık bültenimize kayıt olun.
          </p>
        </header>

        {/* Benefits Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Neler Kazanacaksınız?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Bültenimizle birlikte size sunduğumuz özel içerikler ve avantajlar
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </section>

        {/* Signup Form */}
        <section className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Hemen Başlayın
              </h3>
              <p className="text-gray-600">
                Ücretsiz kayıt olun ve ilk bülteninizi alın
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Adınız
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="name"
                    type="text"  
                    placeholder="Adınızı girin"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-gray-200 focus:border-blue-500"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta Adresiniz
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-gray-200 focus:border-blue-500"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl font-semibold"
              >
                {isLoading ? "Kayıt Yapılıyor..." : "Bültene Kayıt Ol"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Kayıt olarak{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Gizlilik Politikamızı
                </a>{" "}
                kabul etmiş olursunuz. İstediğiniz zaman abonelikten çıkabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-white rounded-3xl shadow-sm p-8 border max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h3>
            <div className="grid gap-8 md:grid-cols-3 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Spam Yok</h4>
                <p className="text-sm text-gray-600">
                  Sadece değerli içerikler, hiç spam mail göndermiyoruz
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Güvenilir</h4>
                <p className="text-sm text-gray-600">
                  Bilgileriniz bizimle güvende, üçüncü taraflarla paylaşmıyoruz
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Ücretsiz</h4>
                <p className="text-sm text-gray-600">
                  Tüm içeriklerimiz tamamen ücretsiz ve herkese açık
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NewsletterSignupPage;