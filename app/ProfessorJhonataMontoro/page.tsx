'use client'

import { Trophy, Calendar, Users, Award, MapPin, ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function App() {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);

  const instructor = {
    name: "Jhonata Montoro de Souza",
    belt: "Faixa-marrom de Jiu-Jitsu Brasileiro",
    image: "JhonataMontoro.jpg",
    yearsExperience: 11,
    championships: 22,
    students: 150,
    specialties: ["Aulas particulares", "Aulas para adultos e crianças", "Fundamentos do Jiu-Jitsu", "Jiu-Jitsu avançado", "Jiu-Jitsu para competição"],
    location: "São Paulo, Brasil",
    quote: "“O Jiu-Jitsu mudou a minha vida. Por muitos anos me dediquei às competições, onde vivi inúmeras experiências e conquistei grandes títulos. Hoje, meu maior entusiasmo é treinar campeões — campeões no Jiu-Jitsu e campeões na vida. Pois só esses me contratam, e os que ainda não foram campeões, ainda vão ser. O meu trabalho é dar condição para isso.”",
    trajectory: [
      { year: "Base", title: "Raízes Fortes", description: "Aluno de Demian Maia há 11 anos, vivendo intensamente o esporte em alto nível e construindo uma sólida formação técnica." },
      { year: "Competidor", title: "Foco Exclusivo", description: "Dedicou anos exclusivamente às competições, acumulando vasta experiência e dezenas de títulos importantes." },
      { year: "Ensino", title: "A Arte de Evoluir", description: "Com 5 anos de experiência como professor na Escola Demian Maia, utiliza a arte suave como ferramenta de desenvolvimento pessoal." },
      { year: "Hoje", title: "Formando Campeões", description: "Atua como professor particular e de turmas infantis (Kids), focado em dar condições para que seus alunos alcancem a excelência." }
    ],
    achievements: [
      { title: "Pentacampeão Mundial CBJJE", year: "2020 a 2024", category: "Mundial" },
      { title: "Campeão AJP Grand Slam Rio", year: "2023 e 2024", category: "Profissional" },
      { title: "Campeão Brasileiro", year: "CBJJ e CBJJE", category: "Nacional" },
      { title: "7x Campeão Paulista", year: "Múltiplos", category: "Estadual" }
    ],
    bio: "Jhonata Montoro de Souza iniciou sua trajetória no Jiu-Jitsu ainda jovem e é aluno de Demian Maia há 11 anos. Ao longo desse período, construiu uma sólida formação técnica e competitiva, vivendo intensamente o esporte em alto nível. Possui 5 anos de experiência como professor na Escola Demian Maia, atuando diretamente no ensino do Jiu-Jitsu para diferentes perfis de alunos. Seu trabalho vai além da técnica, utilizando o Jiu-Jitsu como ferramenta de desenvolvimento pessoal, construção de confiança, disciplina e excelência dentro e fora do tatame. Após anos dedicados exclusivamente às competições, hoje encontra no treinamento um dos seus maiores entusiasmos: dar condições para que seus alunos se vejam e se tornem campeões, dentro e fora do tatame."
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
                <span className="text-gray-400 tracking-wider">PROFESSOR PARTICULAR E KIDS</span>
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
                  <div className="text-white mb-2">{instructor.championships}</div>
                  <div className="text-gray-400">Ouros Mapeados</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                  <div className="text-white mb-2">{instructor.yearsExperience}</div>
                  <div className="text-gray-400">Anos com DM</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all flex items-center gap-2 group" onClick={() => window.open("https://wa.me/5511940007587", "_blank")}>
                  <span>Falar no WhatsApp</span>
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
                      <div className="text-black">Atleta de Elite</div>
                      <div className="text-gray-500">Múltiplos Títulos</div>
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
                Especialista em construir a base técnica em crianças e lapidar os detalhes finos do jogo para atletas e alunos focados em alta performance.
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
              <span className="text-gray-400 tracking-wider">CONQUISTAS</span>
              <div className="h-px w-12 bg-white"></div>
            </div>
            <h2 className="text-white mb-4">Títulos Conquistados</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Uma carreira lendária marcada por pódios nos maiores campeonatos de Jiu-Jitsu.
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
          <h2 className="text-white mb-6">Treine com um Campeão Mundial</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Busque o refinamento técnico de quem vive o Jiu-Jitsu em alta performance. 
            Agende sua aula particular ou traga seu filho para as turmas Kids.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-10 py-4 hover:bg-gray-100 transition-all flex items-center gap-3 group" onClick={() => window.open("https://wa.me/5511940007587", "_blank")}>
              <span>Agendar Aula Particular</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-black transition-all" onClick={() => window.open("https://www.instagram.com/jhonatasouzajj", "_blank")}>
              Acessar Instagram
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}