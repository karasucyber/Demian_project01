"use client";
import { Shield, Brain } from "lucide-react";

export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="uppercase tracking-wider text-sm text-gray-500 mb-4">
              Nossos Pilares
            </h2>
            <h3 className="text-2xl md:text-4xl text-black mb-4">
              Mais que uma Arte Marcial
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Defesa Pessoal */}
            <div className="bg-white p-6 md:p-8 border border-gray-200 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl text-black uppercase tracking-tight">
                  Defesa Pessoal
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                O Jiu-Jitsu brasileiro é reconhecido mundialmente como uma das mais eficazes artes marciais para defesa pessoal. Nossa metodologia ensina você a se defender em situações reais, utilizando técnica e inteligência ao invés de força bruta.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Através do controle de distância, posicionamento estratégico e finalizações eficientes, nossos alunos desenvolvem confiança para proteger a si mesmos e suas famílias em qualquer situação.
              </p>
            </div>

            {/* Filosofia do Jiu-Jitsu */}
            <div className="bg-white p-6 md:p-8 border border-gray-200 hover:border-black transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl text-black uppercase tracking-tight">
                  Filosofia do Jiu-Jitsu
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                O Jiu-Jitsu transcende o tatame, ensinando lições valiosas para a vida. A filosofia da "arte suave" nos mostra que técnica, estratégia e adaptabilidade superam a força bruta, um princípio aplicável em todos os aspectos da vida.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cultivamos valores como respeito, disciplina, humildade e perseverança. Cada treino é uma oportunidade de crescimento pessoal, onde aprendemos a controlar o ego, aceitar desafios e celebrar a evolução contínua.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto">
            <blockquote className="text-lg md:text-xl text-gray-800 italic border-l-4 border-black pl-6 md:pl-8 py-4">
              "Jiu-Jitsu é para todos. Não importa sua idade, gênero ou condição física. O que importa é o desejo de aprender, evoluir e se tornar a melhor versão de si mesmo."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
