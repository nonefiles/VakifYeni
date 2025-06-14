"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Film, FileText, Search } from "lucide-react";

// Resource interface
interface Resource {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  link: string;
  icon: React.ReactNode;
  category: string;
}

// Resources data
const resources: Resource[] = [
  {
    id: "1",
    title: "Akademik Makaleler",
    description: "Ruh sağlığı ve psikoloji alanında derlenmiş akademik makaleler.",
    detailedDescription: "Bu bölümde, ruh sağlığı ve psikoloji alanında uzmanlar tarafından hazırlanmış çeşitli akademik makalelere ulaşabilirsiniz. Makaleler, güncel araştırmalar ve klinik çalışmalar hakkında detaylı bilgiler içermektedir.",
    link: "https://vakifyeni.netlify.app/blog/kaynaklar/makaleler",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    category: "Makaleler",
  },
  {
    id: "2",
    title: "Önerilen Filmler",
    description: "Ruh sağlığı ve kişisel gelişim üzerine önerilen filmler.",
    detailedDescription: "Bu filmler, ruh sağlığı ve kişisel gelişim konularında ilham verici ve eğitici içerikler sunar. Her film, konuyla ilgili farklı perspektifler ve hikayeler içermektedir.",
    link: "https://vakifyeni.netlify.app/blog/kaynaklar/filmler",
    icon: <Film className="w-8 h-8 text-blue-600" />,
    category: "Filmler",
  },
  {
    id: "3",
    title: "Önerilen Kitaplar",
    description: "Psikoloji ve ruh sağlığı üzerine önerilen kitaplar.",
    detailedDescription: "Bu kitaplar, psikoloji ve ruh sağlığı alanında derinlemesine bilgi edinmek isteyenler için önerilmektedir. Her kitap, konuyla ilgili farklı yaklaşımlar ve teknikler sunmaktadır.",
    link: "https://vakifyeni.netlify.app/blog/kaynaklar/kitaplar",
    icon: <Book className="w-8 h-8 text-blue-600" />,
    category: "Kitaplar",
  },
];

// Resource card component
const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <div className="bg-white border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col group">
      <div className="flex justify-center mb-4">{resource.icon}</div>
      <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 mb-2 text-center">
        {resource.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 text-center">{resource.description}</p>
      <div className="bg-blue-50 p-4 rounded-xl mb-4">
        <p className="text-gray-700 leading-relaxed">{resource.detailedDescription}</p>
      </div>
      <Button
        onClick={() => window.open(resource.link, "_blank")}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl"
      >
        Detayları Gör
      </Button>
    </div>
  );
};

// Filter buttons component
const FilterButtons: React.FC<{
  filter: string;
  setFilter: (filter: string) => void;
}> = ({ filter, setFilter }) => {
  const buttons = [
    { label: "Hepsi", value: "all" },
    { label: "Makaleler", value: "Makaleler" },
    { label: "Filmler", value: "Filmler" },
    { label: "Kitaplar", value: "Kitaplar" },
  ];

  return (
    <div className="flex gap-2 justify-center">
      {buttons.map((btn) => (
        <Button
          key={btn.value}
          variant={filter === btn.value ? "default" : "ghost"}
          onClick={() => setFilter(btn.value)}
          className={
            filter === btn.value
              ? "capitalize px-5 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              : "capitalize px-5 rounded-full text-muted-foreground border"
          }
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
};

// Main resources page component
const ResourcesPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || resource.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="container space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
            Kaynaklar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ruh sağlığı ve kişisel gelişim üzerine çeşitli kaynaklar.
          </p>
        </header>

        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl border shadow">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Kayıt ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <FilterButtons filter={filter} setFilter={setFilter} />
        </section>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.length === 0 ? (
            <p className="text-center col-span-full text-muted-foreground">
              Hiç kaynak bulunamadı.
            </p>
          ) : (
            filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          )}
        </section>
      </div>
    </main>
  );
};

export default ResourcesPage;
