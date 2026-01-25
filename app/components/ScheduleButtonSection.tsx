"use client";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

export function ScheduleButtonSection() {
  return (
    <section id="horarios" className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl mb-4 tracking-tight">
          Confira Nossos Horários
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Temos aulas disponíveis em diversos horários para se adaptar à sua rotina
        </p>
        <Button 
          className="bg-black hover:bg-gray-800 text-white uppercase tracking-wider px-12 py-6"
          onClick={() => {
            // Aqui você pode adicionar um link para PDF ou abrir modal com a grade
            window.open('#', '_blank');
          }}
        >
          <Calendar className="h-5 w-5 mr-2" />
          Ver Grade de Horários
        </Button>
      </div>
    </section>
  );
}
