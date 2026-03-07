"use client";

import React, { useState, useEffect } from "react";
import {
  Menu, X, Award, Users, Trophy, Dumbbell,
  Shield, Brain, Instagram, ArrowRight,
  Phone, MapPin, Youtube, MessageCircle, ChevronRight
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
    { name: "Home", href: "#home" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Professores", href: "/nossosprofessores" },
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

          <div className="hidden md:flex md:items-center md:gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors relative after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300 ${scrolled ? "text-zinc-500 hover:text-black after:bg-black" : "text-zinc-300 hover:text-white after:bg-white"}`}
              >
                {item.name}
              </a>
            ))}
          </div>

      <div className="hidden md:block">
  <Button 
    onClick={() => window.open("https://wa.me/5511945809260", "_blank")}
    className={`text-[11px] font-bold uppercase tracking-widest px-8 py-6 rounded-none transition-all duration-500 ${scrolled ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-zinc-200"}`}
  >
    Agendar Aula
  </Button>
</div>

          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 py-8 px-6 shadow-2xl flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
<div className="hidden md:block">
  <Button 
    onClick={() => window.open("https://wa.me/5511945809260", "_blank")}
    className={`text-[11px] font-bold uppercase tracking-widest px-8 py-6 rounded-none transition-all duration-500 ${scrolled ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-zinc-200"}`}
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
        
        <button className="group flex items-center gap-4 bg-white text-black px-8 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300" onClick={() => window.open("https://wa.me/5511945809260", "_blank")}
    >
          Inicie sua jornada
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { id: 1, icon: Users, value: "2.5k", label: "Alunos" },
    { id: 2, icon: Award, value: "15+", label: "Anos" },
    { id: 3, icon: Trophy, value: "500", label: "Títulos" },
    { id: 4, icon: Dumbbell, value: "1.2k", label: "Metros²" }
  ];

  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-zinc-200">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="p-12 flex flex-col items-center justify-center text-center group hover:bg-zinc-50 transition-colors duration-500">
                <Icon className="h-6 w-6 text-zinc-300 mb-4 group-hover:text-black transition-colors duration-500" />
                <div className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter mb-2">
                  {stat.value}
                </div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
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
    <section id="metodologia" className="py-32 bg-zinc-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">
              Metodologia Demian Maia
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-black tracking-tighter mb-8 leading-tight">
              A ARTE DA <br />EFICIÊNCIA.
            </h3>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-2 uppercase tracking-wide">Defesa Pessoal Real</h4>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    Metodologia comprovada para situações reais. Aprenda a neutralizar a força bruta através da técnica, inteligência e controle de distância.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Brain className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-2 uppercase tracking-wide">Mindset Inabalável</h4>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    O tatame forja o caráter. Desenvolva resiliência, foco absoluto e controle emocional para aplicar em todos os aspectos da sua vida.
                  </p>
                </div>
              </div>
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

export function InstructorsSection() {
  const instructors = [
    { id: 1, imageUrl: "/NelsonLopes.jpg", name: "Nelson Lopes", belt: "Faixa Preta 3º Grau" },
    { id: 2, imageUrl: "/MárciaSousa.jpg", name: "Márcia Sousa", belt: "Faixa Preta 5º Grau" },
    { id: 3, imageUrl: "/LucasBarrosCosta.jpg", name: "Lucas Costa", belt: "Faixa Preta 3º Grau" },
    { id: 4, imageUrl: "/JhonataMontoro.jpg", name: "Jhonata Montoro", belt: "Faixa Marrom" },
  ];

  return (
    <section className="py-32 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-6">
                <ImageWithFallback
                  src={instructor.imageUrl}
                  alt={instructor.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-tight text-black uppercase mb-1">
                  {instructor.name}
                </h4>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                  {instructor.belt}
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
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
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
    <footer className="bg-zinc-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
         <div className="lg:col-span-2">
  <div className="w-50 h-50 p-4 flex items-center justify-center rounded-2xl  transition-transform duration-500 mb-6 shadow-xl">
    <img 
      src="logo Demian Maia 3 Branco.png" 
      alt="Logo DM" 
      className="w-full h-full object-contain" 
    />
  </div>
  {/* <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mb-8">
    Jiu-Jitsu Academy
  </div> */}
  <p className="text-zinc-400 font-light text-sm max-w-sm mb-8 leading-relaxed">
    Alta performance, disciplina e excelência técnica. Forjando campeões no tatame e na vida desde 2008.
  </p>
  <div className="flex gap-4">
    <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
      <Instagram className="h-4 w-4" />
    </a>
    <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
      <Youtube className="h-4 w-4" />
    </a>
  </div>
</div>

          <div>
            <h3 className="font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-8">Navegação</h3>
            <ul className="space-y-4">
              {['Home', 'Metodologia', 'Professores', 'Estrutura'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zinc-500" />
                    {item}
                  </a>
                </li>
              ))}
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
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/5511945809260"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-black flex items-center justify-center text-white border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-2xl hover:-translate-y-1"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export default function DemianLandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PhilosophySection />
      <InstructorsSection />
      <CTASection />
      <Footer />
      <FloatingSocialButtons />
    </main>
  );
}