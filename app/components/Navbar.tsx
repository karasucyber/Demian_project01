"use client";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logoImage from "figma:asset/7ef803f6ea7b59ddd1c57e793a63957dbb9592d9.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Contatos", href: "#contatos" },
    { name: "Loja", href: "#loja" },
    { name: "Blog", href: "#blog" },
    { name: "Filiados", href: "#filiados" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3">
              <img 
                // src={logoImage} 
                alt="Escola Demian Logo" 
                className="h-14 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-black tracking-tight">ESCOLA DEMIAN</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Excelência em Jiu-Jitsu</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-black hover:bg-gray-800 text-white uppercase tracking-wider">
              Agendar Aula
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-black hover:bg-gray-800 text-white uppercase tracking-wider mt-4">
                Agendar Aula
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}