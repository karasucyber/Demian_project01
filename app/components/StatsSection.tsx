"use client";
import { Award, Users, Calendar, Trophy, Dumbbell } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: "2.500+",
      label: "Alunos Ativos"
    },
    {
      id: 2,
      icon: Award,
      value: "15+",
      label: "Anos de Excelência"
    },
    {
      id: 3,
      isGoogleLogo: true,
      value: "98%",
      label: "Satisfação"
    },
    {
      id: 4,
      icon: Calendar,
      value: "200+",
      label: "Aulas por Semana"
    },
    {
      id: 5,
      icon: Trophy,
      value: "500+",
      label: "Títulos Conquistados"
    },
    {
      id: 6,
      icon: Dumbbell,
      value: "1200m²",
      label: "Área de Treino"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            // Criamos uma referência em PascalCase para o ícone
            const IconComponent = stat.icon;

            return (
              <div 
                key={stat.id} 
                className="text-center group hover:scale-110 transition-transform duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  {stat.isGoogleLogo ? (
                    <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  ) : (
                    // Renderizamos o componente usando a constante e tratamos o caso de ser undefined
                    IconComponent && <IconComponent className="h-8 w-8 text-black" />
                  )}
                </div>
                <div className="mb-2 text-white text-3xl font-bold">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}