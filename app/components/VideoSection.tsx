"use client";
import { Play } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
<section id="home" className="relative w-full bg-white pt-20 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="relative w-full max-w-6xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-center text-white px-6 py-24 md:py-32 lg:py-40">
          <div className="absolute inset-0">
            <img
              src="Demian.jpg"
              alt="Dojo Background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold tracking-tight">
              Jiu-Jitsu Demian Maia
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-6 font-light">
              A ciência de superar a força através da técnica.
            </p>
            
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Descubra a verdadeira essência da arte suave. Uma metodologia focada em eficiência, defesa pessoal e controle absoluto. Transforme disciplina no tatame em excelência para a vida.
            </p>
            
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-all hover:scale-105 text-lg">
              Agende sua aula experimental
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



      // <div className="container mx-auto px-8 md:px-12 lg:px-16">
      //   <div className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[600px] lg:h-[700px] bg-black rounded-lg overflow-hidden shadow-2xl">
      //     {/* Video Container */}
      //     {!isPlaying ? (
      //       <div className="relative w-full h-full">
      //         <img
      //           src="https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXJ0aWFsJTIwYXJ0cyUyMGRvam98ZW58MXx8fHwxNzYxNzg4ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      //           alt="Video thumbnail"
      //           className="w-full h-full object-cover"
      //         />
      //         <div className="absolute inset-0 bg-black/60" />
              
      //         {/* Content */}
      //         <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
      //           <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-center tracking-tight max-w-4xl">
      //             Muito além do Jiu-Jitsu
      //           </h1>
      //           <p className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-2xl">
      //             Excelência técnica, disciplina e transformação pessoal
      //           </p>
                
      //           <button
      //             onClick={() => setIsPlaying(true)}
      //             className="group flex items-center justify-center w-20 h-20 rounded-full bg-white hover:bg-gray-100 transition-all hover:scale-110"
      //             aria-label="Play video"
      //           >
      //             <Play className="h-8 w-8 text-black ml-1" fill="currentColor" />
      //           </button>
      //         </div>
      //       </div>
      //     ) : (
      //       <iframe
      //         className="w-full h-full"
      //         src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      //         title="Video"
      //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //         allowFullScreen
      //       />
      //     )}
      //   </div>
      // </div>