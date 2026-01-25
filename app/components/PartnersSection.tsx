"use client";
export function PartnersSection() {
  const partners = [
    { id: 1, name: "IBJJF" },
    { id: 2, name: "CBJJ" },
    { id: 3, name: "Gracie Barra" },
    { id: 4, name: "UAEJJF" },
    { id: 5, name: "SJJIF" },
    { id: 6, name: "ADCC" },
    { id: 7, name: "Fight Sports" },
    { id: 8, name: "Tatami" },
    { id: 9, name: "Venum" },
    { id: 10, name: "Hayabusa" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="uppercase tracking-wider text-sm text-gray-500 mb-4">
            Parceiros e Afiliações
          </h2>
          <h3 className="text-3xl md:text-4xl text-black mb-4">
            Conexões Globais
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Orgulhosamente filiados às principais organizações e marcas do Jiu-Jitsu mundial
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center h-28 bg-white border-2 border-gray-300 rounded-lg hover:border-black hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="text-gray-600 group-hover:text-black uppercase tracking-wider transition-colors duration-300">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
