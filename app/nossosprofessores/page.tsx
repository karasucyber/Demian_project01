// "use client"; 

// export default function Home() {
//   return (
//     <>
//       <main className="main-container">
//         <div className="card">

//           <h1>Site em Manutenção</h1>
//           <p>Estamos trabalhando para melhorar nosso site. Voltaremos em breve!</p>
//           <p>
//             Enquanto isso, se precisar de ajuda ou tiver alguma dúvida, entre em
//             contato conosco pelo WhatsApp.
//           </p>

//           <a
//             href="https://api.whatsapp.com/send?phone=5511945809260&text=Ol%C3%A1!%20Vim%20pelo%20site."
//             className="whatsapp-button"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Falar no WhatsApp
//           </a>
//         </div>
//       </main>

//       {/* A mágica acontece aqui!
//         Usamos <style jsx> para adicionar o CSS diretamente no componente.
//         Este CSS só se aplica a esta página, evitando conflitos.
//       */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

//         /* Estilos globais para a página */
//         :global(body) {
//           font-family: 'Roboto', sans-serif;
//           background-color: #f4f4f4;
//           color: #333;
//           margin: 0;
//           overflow: hidden;
//         }

//         .main-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           text-align: center;
//         }

//         .card {
//           padding: 40px;
//           background-color: #fff;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           max-width: 90%;
//           width: 500px;
//         }

//         h1 {
//           color: #d9534f;
//           margin-bottom: 20px;
//         }

//         p {
//           font-size: 18px;
//           line-height: 1.6;
//         }

//         .maintenance-icon {
//           width: 80px;
//           height: 80px;
//           margin-bottom: 20px;
//           color: #d9534f;
//           animation: spin 3s linear infinite;
//           transform-origin: center center;
//         }

//         /* Animação de giro */
//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .whatsapp-button {
//           display: inline-block;
//           background-color: #25d366;
//           color: #fff;
//           padding: 15px 30px;
//           text-decoration: none;
//           border-radius: 5px;
//           font-weight: bold;
//           font-size: 16px;
//           margin-top: 25px;
//           transition: background-color 0.3s;
//         }

//         .whatsapp-button:hover {
//           background-color: #128c7e;
//         }
//       `}</style>
//     </>
//   );
// }

'use client'

import { useState } from "react";
import { Trophy, Instagram, Star, Award, Shield, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Import corrigido para caminho relativo
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function MeusProfessores() {
  const router = useRouter();

  const professors = [
    {
      id: "NelsonLopes",
      name: "Nelson de Souza Lopes",
      belt: "Faixa Preta 3º Grau",
      image: "/NelsonLopes.jpg",
      mainTitle: "Campeão Brasileiro CBJJ 2025",
      specialty: "DEFESA PESSOAL E COMPETIÇÃO",
      instagram: "@nelsoneshe"
    },
    {
      id: "MarciaSousa",
      name: "Márcia Sousa da Silva",
      belt: "Faixa Preta 5º Grau",
      image: "/MárciaSousa.jpg",
      mainTitle: "Campeã Sul-Americana NoGi 2024",
      specialty: "FEMININO E INFANTIL",
      instagram: "@marciasousabjj"
    },
    {
      id: "LucasBarros",
      name: "Lucas Costa Barros",
      belt: "Faixa Preta 3º Grau",
      image: "/LucasBarrosCosta.jpg",
      mainTitle: "Campeão Europeu No-Gi IBJJF",
      specialty: "ESPECIALISTA NO-GI",
      instagram: "@barroslucascosta"
    },
    {
      id: "JhonataMontoro",
      name: "Jhonata Montoro de Souza",
      belt: "Faixa Marrom - Elite Team",
      image: "/JhonataMontoro.jpg",
      mainTitle: "Pentacampeão Mundial CBJJE",
      specialty: "ALTA PERFORMANCE",
      instagram: "@jhonatasouzajj"
    },
    {
      id: "HevannyIsaac",
      name: "Hevanny Isaac (Zacky)",
      belt: "Faixa Preta 3º Grau",
      image: "/HevannyIsaac.jpg",
      mainTitle: "Gestor de Filiais Demian Maia",
      specialty: "QUEDAS E PASSAGENS",
      instagram: "@isaac_bjj"
    },
    {
      id: "IsmatAttie",
      name: "Ismat Attie",
      belt: "Faixa Marrom",
      image: "/IsmatAttie.jpg",
      mainTitle: "Especialista em Base e Boxe",
      specialty: "FORMAÇÃO KIDS",
      instagram: "@ismatattie"
    },
    {
      id: "AlanMonteiro",
      name: "Alan Monteiro (Shock)",
      belt: "Faixa Roxa",
      image: "AlanShock.jpg",
      mainTitle: "Lutador Profissional de MMA",
      specialty: "GRAPPLING E STRIKING",
      instagram: "@shockmonteiro"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Botão Voltar Fixo */}
      <button 
        onClick={() => router.back()}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white/50 hover:text-white transition-all group bg-black/20 backdrop-blur-md px-4 py-2 border border-white/10 hover:border-white/40"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold tracking-widest uppercase">Voltar</span>
      </button>

      {/* Hero Section - Estética Black & Grid */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-white"></div>
            <span className="text-gray-400 tracking-[0.3em] text-sm font-light uppercase">Elite Squad</span>
          </div>
          
          <h1 className="text-white text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase">
            Mestres da <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Arte Suave</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl text-xl leading-relaxed font-light">
            Treine sob a tutela de multicampeões mundiais e especialistas formados 
            diretamente na linhagem de Demian Maia. Excelência técnica levada ao limite.
          </p>
        </div>
      </section>

      {/* Grid de Professores */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {professors.map((prof) => (
              <Link 
                href={`/Professor${prof.id}`} 
                key={prof.id} 
                className="group relative flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 border-[1px] border-white/20 z-10 transition-all group-hover:inset-4"></div>
                  
                  <ImageWithFallback
                    src={prof.image}
                    alt={prof.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase z-20">
                    {prof.belt}
                  </div>
                </div>

                <div className="pt-8 pb-4 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-[1px] w-6 bg-black transition-all group-hover:w-12"></div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-black">
                      {prof.specialty}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-black mb-2 tracking-tighter uppercase">
                    {prof.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-500 group-hover:text-black transition-colors">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm font-medium">{prof.mainTitle}</span>
                  </div>

                  <div className="absolute right-0 bottom-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-10 text-white" />
          <h2 className="text-white text-5xl font-black mb-8 tracking-tighter uppercase">
            Junte-se ao Time de Elite
          </h2>
          <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
            Seja para defesa pessoal, competição ou qualidade de vida, nossa equipe 
            está pronta para guiar sua evolução no tatame.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-12 py-5 font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-3 group">
              <span>AGENDAR AULA EXPERIMENTAL</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-12 py-5 font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest">
              Nossas Unidades
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}