"use client";

import { Button } from "./ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">
            Comece Sua Jornada Hoje
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Agende uma aula experimental gratuita e descubra como o Jiu-Jitsu pode transformar sua vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 uppercase tracking-wider"
            >
              Agendar Aula Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black uppercase tracking-wider"
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}