'use client'

import { Trophy, Calendar, Users, Award, MapPin, ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function App() {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);

  const instructor = {
    name: "Márcia Sousa da Silva",
    belt: "Faixa Preta 5º Grau",
    image: "MárciaSousa.jpg",
    yearsExperience: 13,
    championships: 3,
    students: 180,
    specialties: ["Jiu-Jitsu Infantil", "Fundamentos", "Jiu-Jitsu para Mulheres", "Alto Rendimento"],
    location: "São Paulo, Brasil",
    quote: "A luta não é contra o outro, é dentro de mim. É sobre controlar a mente, dominar o corpo. 🥋",
    trajectory: [
      { year: "Anterior", title: "Raízes na Educação", description: "Antes do Jiu-Jitsu, atuou profissionalmente como professora de educação infantil." },
      { year: "2013", title: "Início no Ensino", description: "Começou sua jornada como professora de Jiu-Jitsu, unindo a disciplina da luta com a experiência pedagógica." },
      { year: "2017", title: "Glória Nacional", description: "Consagrou-se Campeã Brasileira, um marco em sua carreira competitiva." },
      { year: "Hoje", title: "Liderança", description: "Atua como coordenadora da academia, ensinando e guiando tanto crianças quanto adultos." }
    ],
    achievements: [
      { title: "Campeã Brasileira", year: "2017", category: "Nacional" },
      { title: "Campeã Sul-Americana NoGi", year: "2024", category: "Internacional" },
      { title: "3º Lugar World Masters", year: "2018-2019", category: "Peso e Absoluto" },
      { title: "Coordenadora Técnica", year: "Atual", category: "Escola Demian Maia" }
    ],
    bio: "Antes de se dedicar integralmente ao universo dos tatames, Márcia atuou profissionalmente como professora de educação infantil, uma experiência que reflete seu perfil multifacetado e sua paixão por ensinar, seja para crianças ou adultos. Sua trajetória é marcada pela dedicação em ambas as áreas, combinando a disciplina do Jiu-Jitsu com a experiência pedagógica. Ensina Jiu-Jitsu desde 2013 e atua como Coordenadora da academia."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Assimétrico */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-white"></div>
                <span className="text-gray-400 tracking-wider">COORDENADORA E PROFESSORA</span>
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

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                  <div className="text-white mb-2">{instructor.championships}</div>
                  <div className="text-gray-400">Títulos Principais</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                  <div className="text-white mb-2">{instructor.yearsExperience}</div>
                  <div className="text-gray-400">Anos de Ensino</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all flex items-center gap-2 group" onClick={() => window.open("https://wa.me/5511945809260", "_blank")}>
                  <span>Agendar Aula</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{instructor.location}</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Decorative Elements */}
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

                {/* Floating Badge */}
                <div className="absolute -bottom-6 left-8 bg-white p-6 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-black" />
                    <div>
                      <div className="text-black">Excelência Pedagógica</div>
                      <div className="text-gray-500">Adultos e Crianças</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2">
          <span className="text-sm tracking-wider">ROLE PARA BAIXO</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* Quote Section - Full Width */}
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

      {/* Specialties Section - Modern Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Title */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-black"></div>
                <span className="text-gray-500 tracking-wider">ESPECIALIDADES</span>
              </div>
              <h2 className="text-black mb-6">Áreas de Domínio</h2>
              <p className="text-gray-600 leading-relaxed">
                Experiência comprovada nas principais vertentes do Jiu-Jitsu, com uma didática única desenvolvida através da sua vivência pedagógica e competitiva.
              </p>
            </div>

            {/* Right - Specialties Grid */}
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

      {/* Trajectory - Timeline Moderna */}
      <section className="py-24 bg-gray-100 relative overflow-hidden">
        {/* Decorative Line */}
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
                  {/* Year Badge */}
                  <div className="absolute -top-4 left-8 bg-black text-white px-4 py-1">
                    <span>{milestone.year}</span>
                  </div>
                  
                  {/* Number */}
                  <div className="text-gray-200 group-hover:text-gray-300 text-6xl mb-4 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-black mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{milestone.description}</p>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Interactive Cards */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-white"></div>
              <span className="text-gray-400 tracking-wider">CONQUISTAS</span>
              <div className="h-px w-12 bg-white"></div>
            </div>
            <h2 className="text-white mb-4">Títulos Conquistados</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Uma carreira marcada por pódios nos maiores campeonatos de Jiu-Jitsu do mundo.
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

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 ${hoveredAchievement === idx ? 'w-full' : 'w-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-8 text-white" />
          <h2 className="text-white mb-6">Aprenda com a Coordenadora</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Faça parte de uma academia que forma campeões com técnica e valores. 
            Agende sua aula experimental e comece sua jornada no Jiu-Jitsu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-10 py-4 hover:bg-gray-100 transition-all flex items-center gap-3 group" onClick={() => window.open("https://wa.me/5511945809260", "_blank")}>
              <span>Agendar Aula Experimental</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-black transition-all" onClick={() => window.open("https://wa.me/5511945809260", "_blank")}>
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}