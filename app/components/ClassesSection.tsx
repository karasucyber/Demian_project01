"use client";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

export function ClassesSection() {
  const classes = [
    {
      id: 1,
      title: "Aulas para Adultos",
      description: "Programa completo de Jiu-Jitsu focado em técnica, condicionamento físico e defesa pessoal.",
      image: "https://images.unsplash.com/photo-1734668486909-4637ecd66408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYWR1bHQlMjBjbGFzc3xlbnwxfHx8fDE3NjE3ODg1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#adultos"
    },
    {
      id: 2,
      title: "Aulas para Crianças",
      description: "Desenvolvimento motor, disciplina e valores através da prática do Jiu-Jitsu em ambiente seguro.",
      image: "https://images.unsplash.com/photo-1709776193007-b3bdc198f0c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzYxNzU3OTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#criancas"
    },
    {
      id: 3,
      title: "Aulas para Mulheres",
      description: "Empoderamento feminino, defesa pessoal e condicionamento físico em turmas exclusivas.",
      image: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3MlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjE3ODg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#mulheres"
    },
    {
      id: 4,
      title: "Melhor Idade",
      description: "Exercícios adaptados para promover mobilidade, equilíbrio e qualidade de vida.",
      image: "https://images.unsplash.com/photo-1658314755561-389d5660ee54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBmaXRuZXNzfGVufDF8fHx8MTc2MTc4ODU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#idosos"
    }
  ];

  return (
    <section id="programas" className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="uppercase tracking-wider text-sm text-gray-500 mb-4">
            Nossos Programas
          </h2>
          <h3 className="text-3xl md:text-4xl text-black mb-4">
            Programas Especializados
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre o programa perfeito para sua jornada no Jiu-Jitsu, independente do seu nível ou objetivo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {classes.map((classItem, index) => (
            <Card key={classItem.id} className="group overflow-hidden border-gray-300 hover:border-black transition-all duration-500 bg-white hover:shadow-2xl" style={{ animationDelay: `${index * 100}ms` }}>
              <a href={classItem.link} className="block">
                <div className="relative h-[550px] overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="transform transition-all duration-500 group-hover:-translate-y-3">
                      <h4 className="mb-3 uppercase tracking-wider text-lg">
                        {classItem.title}
                      </h4>
                      <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                        {classItem.description}
                      </p>
                      <div className="flex items-center text-sm uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2">
                        Saiba mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative line on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}