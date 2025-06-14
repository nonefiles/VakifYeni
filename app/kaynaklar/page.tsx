"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Book, Film, FileText } from "lucide-react";

// Resource interface
interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

// Resources data
const resources: Resource[] = [
  {
    id: "1",
    title: "Akademik Makaleler",
    description: "Ruh sağlığı ve psikoloji alanında derlenmiş akademik makaleler.",
    link: "https://vakifyeni.netlify.app/blog/kaynaklar/makaleler",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
  },
  {
    id: "2",
    title: "Önerilen Filmler",
    description: "Ruh sağlığı ve kişisel gelişim üzerine önerilen filmler.",
    link: "https://vakifyeni.netlify.app/blog/kaynaklar/filmler",
    icon: <Film className="w-8 h-8 text-blue-600" />,
  },
  {
    id: "3",
    title: "Önerilen Kitaplar",
    description: "Psikoloji ve ruh sağlığı üzerine önerilen kitaplar.",
    link: "https://vakifyeni.netlify.app/blog/kaynaklar/kitaplar",
    icon: <Book className="w-8 h-8 text-blue-600" />,
  },
];

// Resource card component
const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <div className="bg-white border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center group">
      <div className="mb-4">{resource.icon}</div>
      <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 mb-2">
        {resource.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
      <Button
        onClick={() => window.open(resource.link, "_blank")}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl"
      >
        Detayları Gör
      </Button>
    </div>
  );
};

// Main resources page component
const ResourcesPage: React.FC = () => {
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

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default ResourcesPage;
