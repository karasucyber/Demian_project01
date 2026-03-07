"use client";

import React from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Youtube
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacao: [
      { name: "Home", href: "#home" },
      { name: "Professores", href: "/nossosprofessores" },
      { name: "Filiados", href: "#filiados" },
      { name: "Sobre Nós", href: "#sobre" }
    ],
    programas: [
      { name: "Adultos", href: "#adultos" },
      { name: "Crianças", href: "#criancas" },
      { name: "Mulheres", href: "#mulheres" },
      { name: "Melhor Idade", href: "#idosos" }
    ]
  };

  const socialLinks = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Youtube, href: "#", label: "Youtube" },
    { Icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-1.5 rounded-lg">
                <img 
                  src="/logo.png" 
                  alt="Escola Demian Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold tracking-tighter text-xl leading-none uppercase">
                  Escola Demian
                </div>
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">
                  Jiu-Jitsu Academy
                </div>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed max-w-sm text-zinc-400">
              Referência em técnica e filosofia. Nossa missão é fortalecer o corpo e a mente através da arte suave, promovendo disciplina e autoconfiança para todas as idades.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  aria-label={label}
                  className="group relative w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white"
                >
                  <Icon className="h-4 w-4 text-zinc-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-widest">Navegação</h3>
            <ul className="space-y-4">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-1 hover:text-white transition-colors text-sm"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-widest">Programas</h3>
            <ul className="space-y-4">
              {footerLinks.programas.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-white transition-colors border-b border-transparent hover:border-zinc-800 pb-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold mb-6 text-xs uppercase tracking-widest">Contato</h3>
            <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50 space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm leading-snug">
                  Av. Principal, 1000<br />
                  São Paulo - SP, Brasil
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-200">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zinc-800 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm truncate">contato@escolademian.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-medium uppercase tracking-wider">
          <p className="text-zinc-500">
            © {currentYear} Escola Demian Jiu-Jitsu. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}