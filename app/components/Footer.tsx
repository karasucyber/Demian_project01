"use client";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "figma:asset/7ef803f6ea7b59ddd1c57e793a63957dbb9592d9.png";

export function Footer() {
  const footerLinks = {
    navegacao: [
      { name: "Home", href: "#home" },
      { name: "Contatos", href: "#contatos" },
      { name: "Loja", href: "#loja" },
      { name: "Blog", href: "#blog" },
      { name: "Filiados", href: "#filiados" }
    ],
    programas: [
      { name: "Adultos", href: "#adultos" },
      { name: "Crianças", href: "#criancas" },
      { name: "Mulheres", href: "#mulheres" },
      { name: "Melhor Idade", href: "#idosos" }
    ]
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                  alt="Escola Demian Logo" 
                className="h-12 w-auto"
              />
              <div>
                <div className="text-black tracking-tight">ESCOLA DEMIAN</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Jiu-Jitsu</div>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Excelência em Jiu-Jitsu e defesa pessoal. Transformando vidas através da disciplina e técnica.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-gray-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-black mb-6 uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="text-black mb-6 uppercase tracking-wider text-sm">Programas</h3>
            <ul className="space-y-3">
              {footerLinks.programas.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black mb-6 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-600" />
                <span className="text-gray-600">Av. Principal, 1000<br />Bairro - Cidade - Estado</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-600" />
                <span className="text-gray-600">(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-600" />
                <span className="text-gray-600">contato@escolademian.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Escola Demian. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}