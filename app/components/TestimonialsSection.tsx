"use client";
import { Play } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function TestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Executivo",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1618676156034-df5979d43c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBqaXUlMjBqaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2MTc4ODg0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "CS"
    },
    {
      id: 2,
      name: "Ana Rodrigues",
      role: "Empresária",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZpdG5lc3MlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjE3ODg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "AR"
    },
    {
      id: 3,
      name: "Roberto Mendes",
      role: "Médico",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXJ0aWFsJTIwYXJ0cyUyMGRvam98ZW58MXx8fHwxNzYxNzg4ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "RM"
    },
    {
      id: 4,
      name: "Mariana Costa",
      role: "Professora",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1734668486909-4637ecd66408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYWR1bHQlMjBjbGFzc3xlbnwxfHx8fDE3NjE3ODg1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "MC"
    },
    {
      id: 5,
      name: "Pedro Santos",
      role: "Atleta",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1725813961320-151288b4c4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjI1MTQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "PS"
    },
    {
      id: 6,
      name: "Julia Almeida",
      role: "Designer",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1645081522795-231884bfcbfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIyNjEyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "JA"
    },
    {
      id: 7,
      name: "Fernando Lima",
      role: "Engenheiro",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1585511543150-dc91145bbc77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiamolMjBhdGhsZXRlfGVufDF8fHx8MTc2MjI2MTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "FL"
    },
    {
      id: 8,
      name: "Beatriz Oliveira",
      role: "Advogada",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1604480133080-602261a680df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjIzNTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "BO"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="uppercase tracking-wider text-sm text-gray-400 mb-4">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl text-white">
            O Que Dizem Nossos Alunos
          </h3>
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
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="overflow-hidden h-full">
                    {/* Video Container - Vertical aspect ratio */}
                    <div className="relative h-[500px] bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-white transition-all duration-300">
                        {playingVideo === testimonial.id ? (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
                            title={`Depoimento ${testimonial.name}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <img
                              src={testimonial.thumbnail}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button
                                onClick={() => setPlayingVideo(testimonial.id)}
                                className="group flex items-center justify-center w-16 h-16 rounded-full bg-white hover:bg-gray-100 transition-all hover:scale-110"
                                aria-label={`Play video ${testimonial.name}`}
                              >
                                <Play className="h-6 w-6 text-black ml-1" fill="currentColor" />
                              </button>
                            </div>
                          </>
                        )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-gray-700 bg-black text-white hover:bg-white hover:text-black hover:border-white" />
            <CarouselNext className="hidden md:flex -right-12 border-gray-700 bg-black text-white hover:bg-white hover:text-black hover:border-white" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-700"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}