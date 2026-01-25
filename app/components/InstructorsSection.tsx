"use client";
import { Card } from "./ui/card";
import { Instagram, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InstructorsSection() {
  const instructors = [
    {
      id: 1,
      imageUrl: "/NelsonLopes.jpg",
      name: "Nelson de Souza Lopes",
      belt: "Faixa Preta 3º Grau",
      instagram: "@nelsoneshe",
      achievements: "Campeão Brasileiro CBJJ 2025"
    },
    {
      id: 2,
      imageUrl: "/MárciaSousa.jpg",
      name: "Márcia Sousa da Silva",
      belt: "Faixa Preta 5º Grau",
      instagram: "@marciasousabjj",
      achievements: "Campeã Sul-Americana NoGi 2024"
    },
    {
      id: 3,
      imageUrl: "/LucasBarrosCosta.jpg",
      name: "Lucas Costa Barros",
      belt: "Faixa Preta 3º Grau",
      instagram: "@barroslucascosta",
      achievements: "Campeão Europeu No-Gi IBJJF"
    },
    {
      id: 4,
      imageUrl: "/JhonataMontoro.jpg",
      name: "Jhonata Montoro",
      belt: "Faixa Marrom",
      instagram: "@jhonatasouzajj",
      achievements: "Pentacampeão Mundial CBJJE"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="uppercase tracking-wider text-sm text-gray-500 mb-4">
            Equipe de Instrutores
          </h2>
          <h3 className="text-2xl md:text-4xl text-black mb-4">
            Professores de Elite
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Time completo de faixas-pretas certificados e competidores de alto nível
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card 
              key={instructor.id}
              className="group overflow-hidden border-gray-300 hover:border-black transition-all duration-500 bg-white hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
<ImageWithFallback
  src={instructor.imageUrl}
  alt={`Foto de ${instructor.name}`}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
/>


              
              <div className="p-4 md:p-6">
                <h4 className="mb-2 uppercase tracking-wider text-black">
                  {instructor.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {instructor.belt}
                </p>
                
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                  <Award className="h-4 w-4 flex-shrink-0" />
                  <span>{instructor.achievements}</span>
                </div>

                <a 
                  href={`https://instagram.com/${instructor.instagram.slice(1)}`}
                  className="inline-flex items-center gap-2 text-xs text-black hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  {instructor.instagram}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}