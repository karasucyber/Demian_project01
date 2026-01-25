"use client";
import { Play } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";

export function InfrastructureSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="uppercase tracking-wider text-sm text-gray-600 mb-4">
              Nossa Estrutura
            </h2>
            <h3 className="text-3xl md:text-4xl mb-4">
              Infraestrutura Completa
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça nossas instalações modernas e equipadas com o melhor para seu treino
            </p>
          </div>

          {/* Video Card */}
          <Card className="overflow-hidden border-gray-200 shadow-xl">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-black">
              {!isPlaying ? (
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3ODg4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Infraestrutura da academia"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group flex items-center justify-center w-20 h-20 rounded-full bg-white hover:bg-gray-100 transition-all hover:scale-110"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8 text-black ml-1" fill="currentColor" />
                    </button>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h4 className="mb-2 uppercase tracking-wider">
                      Tour Virtual
                    </h4>
                    <p className="text-gray-300">
                      Veja um tour completo pelas nossas instalações
                    </p>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Tour da Academia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
