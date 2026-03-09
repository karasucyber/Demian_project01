'use client'

import { Trophy, Calendar, Users, Award, MapPin, ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function App() {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);

  const instructor = {
    name: "Hevanny Isaac (Zacky)",
    belt: "Faixa Preta 3º Grau",
    image: "HevannyIsaac.jpg",
    yearsExperience: 25,
    championships: 1,
    students: 200,
    specialties: ["Defesa Pessoal", "Quedas (Takedowns)", "Passagem de Guarda", "Jiu-Jitsu No-Gi"],
    location: "São Paulo, Brasil",
    quote: "Jiu-Jítsu é mais que uma Arte Marcial, é uma forma de Viver.",
    trajectory: [
      { year: "Início", title: "Busca pela Eficiência", description: "Com background em Capoeira e Karatê, iniciou no Jiu-Jitsu buscando uma defesa pessoal eficiente e verdadeira." },
      { year: "25 Anos", title: "Estilo de Vida", description: "O que começou como defesa pessoal transformou-se em uma filosofia e estilo de vida ao longo de duas décadas e meia." },
      { year: "2019", title: "Pódio Mundial", description: "Conquistou o 3º lugar no Campeonato Mundial (CBJJE), consolidando seu nível técnico no cenário competitivo." },
      { year: "Hoje", title: "Gestão e Ensino", description: "Professor de Jiu-Jitsu e responsável pelo Relacionamento com Filiais e Filiados da Metodologia Demian Maia." }
    ],
    achievements: [
      { title: "Medalhista Mundial", year: "2019", category: "CBJJE (3º Lugar)" },
      { title: "Faixa Preta 3º Grau", year: "Atual", category: "Formado por Demian Maia" },
      { title: "Gestão de Filiais", year: "Atual", category: "Expansão da Metodologia DM" },
      { title: "Especialista Técnico", year: "25 Anos", category: "Quedas e Passagem de Guarda" }
    ],
    bio: "Com 25 anos de vivência nos tatames, Hevanny Isaac começou buscando defesa pessoal após praticar Capoeira e Karatê, encontrando no Jiu-Jitsu a eficiência e a verdade que procurava. Faixa Preta 3º Grau formado pelo próprio Mestre Demian Maia, ele atua como professor de Gi e No-Gi. Além do tatame, Zacky desempenha um papel estratégico fundamental como Responsável pelo Relacionamento com as Filiais e Filiados à Metodologia Demian Maia de Jiu-Jitsu Brasileiro."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative min-h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-white"></div>
                <span className="text-gray-400 tracking-wider">PROFESSOR E COORDENADOR DE FILIAIS</span>
              </div>
              
              <h1 className="text-white mb-6">
                {instructor.name}
              </h1>
              
              <div className="bg-white text-black px-6 py-3 inline-block mb-8">
                <span className="tracking-wide">{instructor.belt}</span>
              </div>

              <p className="text-gray-300 max-w-xl mb-12 leading-relaxed">
                {instructor.bio}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                  <div className="text-white mb-2">{instructor.yearsExperience}</div>
                  <div className="text-gray-400">Anos de Vivência</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                  <div className="text-white mb-2">100%</div>
                  <div className="text-gray-400">Foco Metodológico</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all flex items-center gap-2 group" onClick={() => window.open("https://wa.me/5511981814750", "_blank")}>
                  <span>Falar com Zacky</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{instructor.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 border border-white/20"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5"></div>
                
                <div className="aspect-[3/4] relative overflow-hidden">
                  <ImageWithFallback 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 left-8 bg-white p-6 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-black" />
                    <div>
                      <div className="text-black">Expansão e Qualidade</div>
                      <div className="text-gray-500">Metodologia Demian Maia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2">
          <span className="text-sm tracking-wider">ROLE PARA BAIXO</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      <section className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-8xl text-white/10 mb-6">"</div>
          <blockquote className="text-white/90 text-2xl md:text-3xl italic mb-8 leading-relaxed">
            {instructor.quote}
          </blockquote>
          <div className="h-px w-24 bg-white/30 mx-auto"></div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-black"></div>
                <span className="text-gray-500 tracking-wider">ESPECIALIDADES</span>
              </div>
              <h2 className="text-black mb-6">Áreas de Domínio</h2>
              <p className="text-gray-600 leading-relaxed">
                Mestre em transições eficientes, com foco total na aplicação prática da defesa pessoal e do jogo de quedas e controle por cima.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {instructor.specialties.map((specialty, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-gray-50 p-8 border border-gray-200 hover:border-black transition-all duration-500">
                  <div className="absolute top-4 right-4 text-6xl text-gray-200 group-hover:text-black/10 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-px bg-black mb-6 group-hover:w-full transition-all duration-500"></div>
                    <h3 className="text-black">{specialty}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-black"></div>
              <span className="text-gray-500 tracking-wider">TRAJETÓRIA</span>
              <div className="h-px w-12 bg-black"></div>
            </div>
            <h2 className="text-black">Jornada de Evolução</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructor.trajectory.map((milestone, idx) => (
              <div key={idx} className="group">
                <div className="bg-white p-8 border border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-300 relative h-full">
                  <div className="absolute -top-4 left-8 bg-black text-white px-4 py-1">
                    <span>{milestone.year}</span>
                  </div>
                  
                  <div className="text-gray-200 group-hover:text-gray-300 text-6xl mb-4 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-black mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{milestone.description}</p>

                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-white"></div>
              <span className="text-gray-400 tracking-wider">MARCOS HISTÓRICOS</span>
              <div className="h-px w-12 bg-white"></div>
            </div>
            <h2 className="text-white mb-4">Destaques e Conquistas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Uma trajetória de 25 anos dedicada ao aperfeiçoamento constante e à propagação do Jiu-Jitsu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instructor.achievements.map((achievement, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredAchievement(idx)}
                onMouseLeave={() => setHoveredAchievement(null)}
                className="group relative bg-gray-800 p-8 border-2 border-gray-700 hover:border-white transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/10 px-4 py-2">
                    <span className="text-white">{achievement.year}</span>
                  </div>
                  <Trophy className={`w-6 h-6 transition-all duration-300 ${hoveredAchievement === idx ? 'text-white scale-110' : 'text-gray-600'}`} />
                </div>
                
                <h3 className="text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">{achievement.category}</p>

                <div className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ${hoveredAchievement === idx ? 'w-full' : 'w-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-8 text-white" />
          <h2 className="text-white mb-6">Metodologia e Tradição</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Venha aprender com quem vivencia e respira o Jiu-Jitsu há mais de duas décadas. 
            Descubra a eficiência e a verdade por trás da arte marcial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-10 py-4 hover:bg-gray-100 transition-all flex items-center gap-3 group" onClick={() => window.open("https://wa.me/5511945809260", "_blank")}>
              <span>Agendar Aula Experimental</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-black transition-all" onClick={() => window.open("https://wa.me/5511981814750", "_blank")}>
              Falar sobre Filiais
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}