"use client";

import React, { useState, useEffect } from "react";
import {
  Menu, X, Award, Users, Trophy, Dumbbell,
  Shield, Brain, Instagram, ArrowRight,
  Phone, MapPin, Youtube, MessageCircle, ChevronRight,
  Download, ShoppingBag,
  Calendar, LayoutGrid
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { ImageWithFallback } from "./components/ImageWithFallback";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", external: false },
    { name: "Metodologia", href: "#metodologia", external: false },
    { name: "Aulas", href: "#aulas", external: false },
    { name: "Professores", href: "/nossosprofessores", external: false },
    { name: "Loja Oficial", href: "https://montink.com/escolademianmaia", external: true },
    { name: "Kimonos", href: "https://www.vulkanfc.com/demian-maia", external: true },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-sm transform group-hover:rotate-3 transition-transform duration-500">
                <img 
                  src="images.png" 
                  alt="Logo DM" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className={`hidden sm:block transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>
                <div className="font-extrabold tracking-tight text-lg leading-none">ESCOLA DEMIAN</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] mt-1 opacity-80">Jiu-Jitsu Academy</div>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors relative after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1 ${scrolled ? "text-zinc-500 hover:text-black after:bg-black" : "text-zinc-300 hover:text-white after:bg-white"}`}
              >
                {item.external && <ShoppingBag className="h-3 w-3" />}
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button 
              onClick={() => window.open("https://wa.me/5511945809260", "_blank")}
              className={`text-[11px] font-bold uppercase tracking-widest px-8 py-6 rounded-none transition-all duration-500 ${scrolled ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-zinc-200"}`}
            >
              Agendar Aula
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 py-8 px-6 shadow-2xl flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.external && <ShoppingBag className="h-4 w-4" />}
                {item.name}
              </a>
            ))}
            <div className="block mt-4">
              <Button 
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open("https://wa.me/5511945809260", "_blank");
                }}
                className="w-full bg-black text-white hover:bg-zinc-800 text-[11px] font-bold uppercase tracking-widest py-6 rounded-none transition-all duration-500"
              >
                Agendar Aula
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="Demian.jpg"
          alt="Dojo Background"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] text-white font-bold uppercase tracking-widest">Matrículas Abertas</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter mb-6 leading-[0.9]">
          EXCELÊNCIA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">NO TATAME</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-300 font-light tracking-wide max-w-2xl mb-12">
          A essência da arte suave. Defesa pessoal, eficiência e controle absoluto para transformar seu corpo e mente.
        </p>
        
        <button className="group flex items-center gap-4 bg-white text-black px-8 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300" onClick={() => window.open("https://evo-totem.w12app.com.br/demianmaia/1/page/landing-page/agenda", "_blank")}>
          Grade de horário
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { id: 1, icon: Users, value: "+420", label: "Alunos Ativos" },
    { id: 2, icon: Award, value: "6 Anos", label: "de Excelência" },
    { id: 3, isGoogleLogo: true, value: "5.0", label: "Estrelas no Google" },
    { id: 4, icon: Calendar, value: "88", label: "Aulas Semanais" },
    { id: 5, icon: Dumbbell, value: "250m²", label: "Área de Tatame" },
    { id: 6, icon: LayoutGrid, value: "750m²", label: "Infraestrutura" }
  ];

  return (
    <section className="border-b border-zinc-200 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-zinc-200">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="p-10 flex flex-col items-center justify-center text-center group hover:bg-white transition-colors duration-500">
                {stat.isGoogleLogo ? (
                  <svg className="h-6 w-6 mb-4 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                ) : (
                  Icon && <Icon className="h-6 w-6 text-zinc-300 mb-4 group-hover:text-black transition-colors duration-500" />
                )}
                <div className="text-3xl md:text-4xl font-extrabold text-black tracking-tighter mb-2">
                  {stat.value}
                </div>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section id="metodologia" className="py-32 bg-zinc-50 border-b border-zinc-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">
              Metodologia
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter mb-10 leading-tight uppercase">
              ESCOLA DM
            </h3>
            
            <div className="space-y-8">
              <p className="text-zinc-600 font-light leading-relaxed text-lg">
                Nossa metodologia valoriza a evolução natural do aluno, respeitando seu estágio de desenvolvimento cognitivo, motor e técnico. Por isso, organizamos as turmas em três níveis — fundamentos, intermediário e avançado — garantindo que cada praticante treine em um ambiente seguro, coerente com sua experiência e com desafios adequados ao seu momento.
              </p>
              
              <p className="text-zinc-600 font-light leading-relaxed text-lg">
                A metodologia da Escola Demian Maia foi criada pelo próprio Demian, unindo sua visão única do Jiu-Jitsu como arte marcial, defesa pessoal e ferramenta de desenvolvimento humano. Com mais de 30 anos de experiência no esporte, ele estruturou um sistema de ensino sólido, eficiente e acessível, baseado em tudo o que viveu como atleta, professor e referência mundial.
              </p>
              
              <p className="text-zinc-600 font-light leading-relaxed text-lg">
                O resultado é uma jornada de aprendizado clara, progressiva e motivadora, onde o aluno se sente confiante para evoluir e vivenciar o Jiu-Jitsu de forma completa.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-zinc-200 overflow-hidden relative group">
              <img 
                src="Demian.jpg" 
                alt="Treino" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-8 border-white/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-black text-white p-10 max-w-xs hidden md:block">
              <p className="font-light italic text-lg leading-relaxed">
                "O Jiu-Jitsu não é sobre vencer os outros, é sobre vencer a si mesmo todos os dias."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function ProgramsSection() {
  return (
    <section id="aulas" className="py-24 bg-gray-50 border-y border-zinc-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">Nossos Programas</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter">TIPOS DE AULAS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-zinc-100 flex flex-col">
            <h4 className="text-2xl font-extrabold mb-6 uppercase tracking-tight text-black">Aulas para Adultos</h4>
            <p className="text-zinc-600 font-light mb-8 text-lg leading-relaxed">
              As turmas adultas são organizadas por nível técnico e também contam com uma turma exclusiva para mulheres, criando um ambiente acolhedor, seguro e motivador para todas as alunas.
            </p>
            
            <ul className="space-y-4 mb-10 font-bold text-black uppercase tracking-wide text-sm">
              <li className="flex items-center gap-3"><ChevronRight className="h-4 w-4 text-zinc-400"/> 1. Fundamentos</li>
              <li className="flex items-center gap-3"><ChevronRight className="h-4 w-4 text-zinc-400"/> 2. Intermediário</li>
              <li className="flex items-center gap-3"><ChevronRight className="h-4 w-4 text-zinc-400"/> 3. Avançado</li>
              <li className="flex items-center gap-3"><ChevronRight className="h-4 w-4 text-zinc-400"/> 4. Feminino</li>
            </ul>

            <div className="mt-auto bg-zinc-50 p-6 rounded-xl border border-zinc-100">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Observação Importante</p>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Todas as turmas adultas estão disponíveis nas modalidades: <br />
                <strong className="text-black">Com Kimono</strong> e <strong className="text-black">Sem Kimono (No-Gi)</strong>.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-zinc-100 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-extrabold mb-6 uppercase tracking-tight text-black">Aulas Infantis / Kids</h4>
              <p className="text-zinc-600 font-light mb-10 text-lg leading-relaxed">
                As turmas infantis são organizadas por faixa etária, garantindo um aprendizado seguro, lúdico e adequado a cada fase do desenvolvimento físico e cognitivo da criança.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-zinc-100">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Acompanhe a Evolução</p>
              <Button 
                onClick={() => window.open("/QUADRO GRADUAÇÃO_DM_2026_Portugues_18_02_26.pdf", "_blank")}
                className="w-full bg-black text-white hover:bg-zinc-800 text-[11px] font-bold uppercase tracking-widest py-7 rounded-none flex items-center justify-center gap-3 transition-transform hover:-translate-y-1"
              >
                <Download className="h-4 w-4" />
                Quadro de Graduação (PDF)
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function InstructorsSection() {
  const instructors = [
    { 
      id: 1, 
      imageUrl: "/MárciaSousa.jpg", 
      name: "Márcia Sousa", 
      belt: "Faixa Preta 5º Grau",
      text: "Texto de apresentação da professora Márcia Sousa. Detalhes sobre sua trajetória, experiência técnica e liderança."
    },
    { 
      id: 2, 
      imageUrl: "/NelsonLopes.jpg", 
      name: "Nelson Lopes", 
      belt: "Faixa Preta 3º Grau",
      text: "Texto de apresentação do professor Nelson Lopes. Foco metodológico e conquistas ao longo da carreira no Jiu-Jitsu."
    },
    { 
      id: 3, 
      imageUrl: "/LucasBarrosCosta.jpg", 
      name: "Lucas Costa", 
      belt: "Faixa Preta 3º Grau",
      text: "Texto de apresentação do professor Lucas Costa. Detalhamento de sua atuação e dedicação ao desenvolvimento dos alunos."
    },
    { 
      id: 4, 
      imageUrl: "/JhonataMontoro.jpg", 
      name: "Jhonata Montoro", 
      belt: "Faixa Marrom",
      text: "Texto de apresentação do professor Jhonata Montoro. Trajetória competitiva e enfoque no ensino prático no tatame."
    },
  ];

  return (
    <section className="py-32 bg-zinc-50 border-b border-zinc-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">
              Nossa Equipe
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter">
              INSTRUTORES DE ELITE
            </h3>
          </div>
          <a href="/nossosprofessores" className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black hover:text-zinc-500 transition-colors">
            Ver equipe completa
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6 p-2 rounded-lg shadow-sm border border-zinc-100">
                <ImageWithFallback
                  src={instructor.imageUrl}
                  alt={instructor.name}
                  className="w-full h-full object-cover rounded filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="flex-grow flex flex-col">
                <h4 className="text-xl font-bold tracking-tight text-black uppercase mb-1">
                  {instructor.name}
                </h4>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
                  {instructor.belt}
                </p>
                <p className="text-sm text-zinc-600 font-light leading-relaxed">
                  {instructor.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6">
          Dê o Primeiro Passo
        </h2>
        <h3 className="text-5xl md:text-7xl font-extrabold mb-12 tracking-tighter max-w-4xl mx-auto leading-none">
          TRANSFORME SUA <br/> MENTE E CORPO.
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 text-[11px] font-bold uppercase tracking-widest px-12 py-7 rounded-none transition-transform hover:-translate-y-1" onClick={() => window.open("https://wa.me/5511945809260", "_blank")}>
            Agendar Aula Experimental
          </Button>
          <Button variant="outline" className="w-full sm:w-auto border-zinc-700 text-white hover:bg-white hover:text-black text-[11px] font-bold uppercase tracking-widest px-12 py-7 rounded-none transition-all" onClick={() => window.open("https://wa.me/5511945809260", "_blank")}>
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-2">
            <div className="w-48 h-48 p-4 flex items-center justify-center rounded-2xl transition-transform duration-500 mb-6 shadow-xl bg-black border border-zinc-800 hover:border-zinc-700">
              <img 
                src="logo Demian Maia 3 Branco.png" 
                alt="Logo DM" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            <p className="text-zinc-400 font-light text-sm max-w-sm mb-8 leading-relaxed">
              Alta performance, disciplina e excelência técnica. Forjando campeões no tatame e na vida desde 2008.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <Instagram className="h-4 w-4 text-zinc-600 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <Youtube className="h-4 w-4 text-zinc-600 group-hover:text-black" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-8">Navegação & Lojas</h3>
            <ul className="space-y-4">
              {['Home', 'Metodologia', 'Aulas', 'Professores'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-zinc-300 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zinc-500" />
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t border-zinc-800">
                <a href="https://montink.com/escolademianmaia" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <ShoppingBag className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
                  Loja Oficial (Montink)
                </a>
              </li>
              <li>
                <a href="https://www.vulkanfc.com/demian-maia" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <ShoppingBag className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
                  Kimonos (Vulkan)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-8">Contato</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-sm text-zinc-300">
                <MapPin className="h-5 w-5 text-zinc-600 flex-shrink-0" />
                <span className="font-light leading-relaxed">
                  Av. Imperatriz Leopoldina, 1571<br />
                  Vila Leopoldina, São Paulo - SP<br />
                  05305-012
                </span>
              </li>
              <li className="flex items-center gap-4 text-sm text-zinc-300">
                <Phone className="h-5 w-5 text-zinc-600 flex-shrink-0" />
                <span className="font-bold tracking-wide">+55 11 94580-9260</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
          <p>© {currentYear} ESCOLA DEMIAN. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingSocialButtons() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3 hover:scale-105 transition-transform duration-300">
      <a
        href="https://wa.me/5511945809260"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 flex items-center justify-center text-white border-2 border-green-600 hover:bg-green-600 transition-all duration-300 shadow-2xl hover:-translate-y-1 rounded-full"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export default function DemianLandingPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] font-sans selection:bg-black selection:text-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PhilosophySection />
      <ProgramsSection />
      <InstructorsSection />
      <CTASection />
      <Footer />
      <FloatingSocialButtons />
    </main>
  );
}