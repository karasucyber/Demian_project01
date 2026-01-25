"use client";
import { Card } from "./ui/card";
import { Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ScrollArea } from "./ui/scroll-area";

export function ScheduleSection() {
  const schedule = [
    {
      day: "Segunda-feira",
      classes: [
        { time: "06:00 - 07:30", name: "Jiu-Jitsu Adultos - Iniciantes", instructor: "Prof. Ricardo" },
        { time: "07:30 - 08:30", name: "Jiu-Jitsu Kids (6-9 anos)", instructor: "Prof. Felipe" },
        { time: "09:00 - 10:00", name: "Jiu-Jitsu Feminino", instructor: "Prof.ª Ana" },
        { time: "10:00 - 11:00", name: "Melhor Idade", instructor: "Prof. Felipe" },
        { time: "12:00 - 13:00", name: "Jiu-Jitsu Executivo", instructor: "Mestre Carlos" },
        { time: "16:00 - 17:00", name: "Jiu-Jitsu Kids (10-15 anos)", instructor: "Prof. Ricardo" },
        { time: "17:00 - 18:00", name: "Jiu-Jitsu Teens", instructor: "Prof. Felipe" },
        { time: "18:00 - 19:00", name: "Jiu-Jitsu Kids (6-12 anos)", instructor: "Prof. Felipe" },
        { time: "19:00 - 20:30", name: "Jiu-Jitsu Avançado", instructor: "Mestre Carlos" },
        { time: "20:30 - 22:00", name: "Competição", instructor: "Prof. Ricardo" }
      ]
    },
    {
      day: "Terça-feira",
      classes: [
        { time: "06:00 - 07:30", name: "Jiu-Jitsu No-Gi", instructor: "Prof. Ricardo" },
        { time: "07:30 - 08:30", name: "Jiu-Jitsu Kids (6-9 anos)", instructor: "Prof. Felipe" },
        { time: "09:00 - 10:00", name: "Fitness & Condicionamento", instructor: "Prof. Ana" },
        { time: "10:00 - 11:00", name: "Jiu-Jitsu Iniciantes", instructor: "Prof. Felipe" },
        { time: "12:00 - 13:00", name: "Jiu-Jitsu Executivo", instructor: "Prof. Ricardo" },
        { time: "16:00 - 17:00", name: "Jiu-Jitsu Kids (10-15 anos)", instructor: "Prof. Ricardo" },
        { time: "17:00 - 18:00", name: "Defesa Pessoal Feminina", instructor: "Prof.ª Ana" },
        { time: "18:00 - 19:00", name: "Jiu-Jitsu Feminino", instructor: "Prof.ª Ana" },
        { time: "19:00 - 20:30", name: "Jiu-Jitsu Adultos - Todos os Níveis", instructor: "Prof. Felipe" },
        { time: "20:30 - 22:00", name: "Treino Livre", instructor: "Todos os Profs." }
      ]
    },
    {
      day: "Quarta-feira",
      classes: [
        { time: "06:00 - 07:30", name: "Jiu-Jitsu Adultos - Intermediário", instructor: "Mestre Carlos" },
        { time: "07:30 - 08:30", name: "Jiu-Jitsu Kids (6-9 anos)", instructor: "Prof. Felipe" },
        { time: "09:00 - 10:00", name: "Jiu-Jitsu Feminino", instructor: "Prof.ª Ana" },
        { time: "10:00 - 11:00", name: "Melhor Idade", instructor: "Prof. Felipe" },
        { time: "12:00 - 13:00", name: "Jiu-Jitsu Executivo", instructor: "Prof. Ricardo" },
        { time: "16:00 - 17:00", name: "Jiu-Jitsu Kids (10-15 anos)", instructor: "Prof. Ricardo" },
        { time: "17:00 - 18:00", name: "Jiu-Jitsu Teens", instructor: "Prof. Felipe" },
        { time: "18:00 - 19:00", name: "Jiu-Jitsu Kids (6-12 anos)", instructor: "Prof. Felipe" },
        { time: "19:00 - 20:30", name: "Jiu-Jitsu Avançado", instructor: "Mestre Carlos" },
        { time: "20:30 - 22:00", name: "Sparring Livre", instructor: "Todos os Profs." }
      ]
    },
    {
      day: "Quinta-feira",
      classes: [
        { time: "06:00 - 07:30", name: "Jiu-Jitsu No-Gi", instructor: "Prof. Ricardo" },
        { time: "07:30 - 08:30", name: "Jiu-Jitsu Kids (6-9 anos)", instructor: "Prof. Felipe" },
        { time: "09:00 - 10:00", name: "Condicionamento Físico", instructor: "Prof. Ana" },
        { time: "10:00 - 11:00", name: "Jiu-Jitsu Iniciantes", instructor: "Prof. Felipe" },
        { time: "12:00 - 13:00", name: "Jiu-Jitsu Executivo", instructor: "Mestre Carlos" },
        { time: "16:00 - 17:00", name: "Jiu-Jitsu Kids (10-15 anos)", instructor: "Prof. Ricardo" },
        { time: "17:00 - 18:00", name: "Defesa Pessoal", instructor: "Prof.ª Ana" },
        { time: "18:00 - 19:00", name: "Jiu-Jitsu Feminino", instructor: "Prof.ª Ana" },
        { time: "19:00 - 20:30", name: "Jiu-Jitsu Adultos - Todos os Níveis", instructor: "Prof. Ricardo" },
        { time: "20:30 - 22:00", name: "Competição", instructor: "Mestre Carlos" }
      ]
    },
    {
      day: "Sexta-feira",
      classes: [
        { time: "06:00 - 07:30", name: "Jiu-Jitsu Adultos - Avançado", instructor: "Mestre Carlos" },
        { time: "07:30 - 08:30", name: "Jiu-Jitsu Kids (6-9 anos)", instructor: "Prof. Felipe" },
        { time: "09:00 - 10:00", name: "Jiu-Jitsu Feminino", instructor: "Prof.ª Ana" },
        { time: "10:00 - 11:00", name: "Melhor Idade", instructor: "Prof. Felipe" },
        { time: "12:00 - 13:00", name: "Jiu-Jitsu Executivo", instructor: "Prof. Ricardo" },
        { time: "16:00 - 17:00", name: "Jiu-Jitsu Kids (10-15 anos)", instructor: "Prof. Ricardo" },
        { time: "17:00 - 18:00", name: "Jiu-Jitsu Teens", instructor: "Prof. Felipe" },
        { time: "18:00 - 19:00", name: "Jiu-Jitsu Open Mat", instructor: "Todos" },
        { time: "19:00 - 20:30", name: "Jiu-Jitsu Adultos - Livre", instructor: "Prof. Ricardo" },
        { time: "20:30 - 22:00", name: "Treino Livre - Open Mat", instructor: "Todos os Profs." }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="uppercase tracking-wider text-sm text-gray-500 mb-4">
            Horários
          </h2>
          <h3 className="text-3xl md:text-4xl text-black mb-4">
            Grade de Aulas
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais de 50 aulas semanais em diversos horários para se adaptar à sua rotina
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {schedule.map((day, index) => (
                <CarouselItem key={day.day} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="border-gray-300 hover:border-black transition-all duration-500 bg-white hover:shadow-xl h-[600px] flex flex-col"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="p-6 border-b-2 border-black">
                      <h4 className="uppercase tracking-wider text-black">
                        {day.day}
                      </h4>
                    </div>
                    
                    <ScrollArea className="flex-1 p-6">
                      <div className="space-y-3 pr-4">
                        {day.classes.map((classItem, idx) => (
                          <div 
                            key={idx}
                            className="group p-4 rounded-lg bg-gray-50 hover:bg-black transition-all duration-300"
                          >
                            <div className="flex items-start gap-3">
                              <Clock className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors mb-1">
                                  {classItem.time}
                                </p>
                                <p className="text-sm text-black group-hover:text-white transition-colors mb-1">
                                  {classItem.name}
                                </p>
                                <p className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                                  {classItem.instructor}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-gray-400 bg-white text-black hover:bg-black hover:text-white hover:border-black" />
            <CarouselNext className="hidden md:flex -right-12 border-gray-400 bg-white text-black hover:bg-black hover:text-white hover:border-black" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {schedule.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-400"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Sábados: Aulas especiais e Open Mat das 9h às 12h
          </p>
          <button className="px-8 py-3 bg-black text-white uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300">
            Agendar Aula Experimental
          </button>
        </div>
      </div>
    </section>
  );
}
