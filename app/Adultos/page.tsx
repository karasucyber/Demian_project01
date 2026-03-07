"use client"; 
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { 
  Shield, 
  Menu, 
  X as XIcon,
  Play,
  Clock,
  Award,
  Trophy,
  Target,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Car,
  Users,
  Droplet,
  Heart,
  Wind,
  Lock,
  Smile,
  Wifi,
  Star,
  Zap,
  Brain
} from 'lucide-react';

import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navbar } from '../components/Navbar';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('monday');
  const [currentInstructor, setCurrentInstructor] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    unit: ''
  });
  const [carouselApi, setCarouselApi] = useState<any>(null);

  const scheduleData: Record<string, { morning?: string; afternoon?: string; evening?: string }> = {
    monday: {
      morning: '07h - 08h (Todos os Níveis)',
      afternoon: '12h - 13h (Fundamentos)',
      evening: '19h - 20h30 (Avançado)'
    },
    tuesday: {
      morning: '07h - 08h (No-Gi)',
      afternoon: '12h - 13h (Todos os Níveis)',
      evening: '19h - 20h30 (Iniciantes)'
    },
    wednesday: {
      morning: '07h - 08h (Todos os Níveis)',
      afternoon: '12h - 13h (Fundamentos)',
      evening: '19h - 20h30 (Avançado)'
    },
    thursday: {
      morning: '07h - 08h (No-Gi)',
      afternoon: '12h - 13h (Todos os Níveis)',
      evening: '19h - 20h30 (Iniciantes)'
    },
    friday: {
      morning: '07h - 08h (Drills e Posições)',
      afternoon: '12h - 13h (Sparring)',
      evening: '18h - 19h30 (Open Mat)'
    },
    saturday: {
      morning: '10h - 12h (Treino Livre e Competição)'
    }
  };

  const instructors = [
    {
      name: 'Mestra Márcia Silva',
      title: 'Coordenadora e Faixa Preta 5º Grau',
      image: '/MárciaSousa.jpg',
      description: 'Especialista em defesa pessoal e biomecânica, Márcia foca na eficiência técnica para que qualquer pessoa consiga se defender utilizando alavancas e tempo de reação.',
      achievements: [
        { title: 'Defesa Pessoal', subtitle: 'Especialista' },
        { title: 'Faixa Preta 5º Grau', subtitle: 'Referência Técnica' },
        { title: 'Campeã Sul-Americana', subtitle: 'CBJJ 2024' },
        { title: 'World Masters', subtitle: '3º Lugar em Las Vegas' }
      ],
      quote: 'A verdadeira força no Jiu-Jitsu não vem dos músculos, mas da clareza mental e da técnica refinada.'
    },
    {
      name: 'Prof. Jhonata Montoro',
      title: 'Instrutor Chefe - Competição',
      image: '/JhonataMontoro.jpg',
      description: 'Focado em alto rendimento e estratégia de combate, Jhonata prepara alunos tanto para campeonatos de alto nível quanto para superação de limites pessoais.',
      achievements: [
        { title: 'Pentacampeão Mundial', subtitle: 'CBJJE 2020 a 2024' },
        { title: 'Campeão Brasileiro', subtitle: 'CBJJ 2018' },
        { title: '7x Campeão Paulista', subtitle: 'Elite Competitiva' },
        { title: 'Estrategista de Combate', subtitle: 'Foco em Alto Rendimento' }
      ],
      quote: 'O tatame é o espelho da vida. A resiliência que você constrói aqui reflete em todos os seus desafios diários.'
    },
    {
      name: 'Prof. Ismat Attie',
      title: 'Instrutor de Fundamentos',
      image: '/IsmatAttie.jpg',
      description: 'Com vasta experiência na construção de base sólida para adultos que estão começando do zero, garantindo um aprendizado progressivo e seguro.',
      achievements: [
        { title: 'Metodologia de Ensino', subtitle: 'Especialista em Iniciantes' },
        { title: 'Pioneiro do Esporte', description: 'Atuante desde 1998' },
        { title: 'Integração e Base', subtitle: 'Foco na Evolução Contínua' },
        { title: 'Sul-Americano', subtitle: '3º Lugar CBJJE 2021' }
      ],
      quote: 'Não importa a sua idade ou condição atual. O primeiro passo no tatame é o início da sua melhor versão.'
    },
    {
      name: 'Instrutor Guilherme Iglesias',
      title: 'Condicionamento e No-Gi',
      image: '/GuilhermeIglesias.jpg',
      description: 'Responsável pela preparação física específica para lutadores e pelas turmas de submissão sem kimono (No-Gi), focando em agilidade e explosão.',
      achievements: [
        { title: 'Especialista No-Gi', subtitle: 'Luta Livre Esportiva' },
        { title: 'Preparação Física', subtitle: 'Prevenção de Lesões' },
        { title: 'Mobilidade', subtitle: 'Treinamento Funcional' },
        { title: 'Competidor Ativo', subtitle: 'Cenário Nacional' }
      ],
      quote: 'Seu corpo é sua principal ferramenta. Treinamos para que ele seja forte, ágil e livre de limitações.'
    }
  ];

  useEffect(() => {
    if (!carouselApi) return;

    const intervalId = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [carouselApi]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentInstructor((prev) => (prev + 1) % instructors.length);
    }, 6000); 

    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado! Entraremos em contato em breve para agendar sua aula experimental.');
  };

  return (
    <div className="min-h-screen bg-white">
<Navbar></Navbar>

      <div className="h-20"></div>

   <section id="home" className="relative w-full bg-white pt-20 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="relative w-full max-w-6xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-center text-white px-6 py-24 md:py-32 lg:py-40">
          <div className="absolute inset-0">
            <img
              src="Demian.jpg"
              alt="Dojo Background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-bold tracking-tight">
              Jiu-Jitsu Demian Maia
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-6 font-light">
              A ciência de superar a força através da técnica.
            </p>
            
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Descubra a verdadeira essência da arte suave. Uma metodologia focada em eficiência, defesa pessoal e controle absoluto. Transforme disciplina no tatame em excelência para a vida.
            </p>
            
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-all hover:scale-105 text-lg">
              Agende sua aula experimental
            </button>
          </div>
        </div>
      </div>
    </section>

      <section id="instructor" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Corpo Docente Especializado
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais capacitados para guiar você do primeiro rola à maestria.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-8 overflow-hidden">
              <div className="flex gap-6 transition-transform duration-700 ease-in-out w-full"
                   style={{ transform: `translateX(-${currentInstructor * 100}%)` }}>
                {instructors.map((instructor, index) => (
                  <div 
                    key={index} 
                    className="min-w-full"
                  >
                    <Card className="overflow-hidden border-0 shadow-2xl">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-5 gap-0">
                          <div className="md:col-span-2 relative h-96 md:h-auto">
                            <ImageWithFallback 
                              src={instructor.image}
                              alt={instructor.name}
                              className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full text-sm">
                              {instructor.title}
                            </div>
                          </div>
                          
                          <div className="md:col-span-3 p-8 lg:p-12 bg-white flex flex-col justify-center">
                            <h3 className="text-4xl text-black mb-4">{instructor.name}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                              {instructor.description}
                            </p>
                            
                            <div className="space-y-4 mb-8">
                              {instructor.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                    {i === 0 ? <Award className="w-6 h-6 text-white" /> : 
                                     i === 1 ? <Trophy className="w-6 h-6 text-white" /> : 
                                     i === 2 ? <Star className="w-6 h-6 text-white" /> :
                                     <Target className="w-6 h-6 text-white" />}
                                  </div>
                                  <div>
                                    <div className="text-black text-lg">{achievement.title}</div>
                                    <div className="text-sm text-gray-600">{achievement.subtitle}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            <blockquote className="border-l-4 border-black pl-6 italic text-gray-600 text-lg">
                              "{instructor.quote}"
                            </blockquote>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {instructors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInstructor(index)}
                  className={`h-3 rounded-full transition-all ${
                    currentInstructor === index 
                      ? 'w-8 bg-black' 
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Professor ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentInstructor((prev) => (prev - 1 + instructors.length) % instructors.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg border border-black transition-all hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={() => setCurrentInstructor((prev) => (prev + 1) % instructors.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg border border-black transition-all hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Estrutura Escola Demian
            </h2>
            <p className="text-xl text-gray-600">
              Ambiente de alto padrão desenhado para o seu desempenho e conforto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Shield className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Tatame Flutuante</h3>
                <p className="text-gray-600 text-sm">
                  Absorção de impacto superior para treinar com máxima segurança e longevidade
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Users className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Turmas Niveladas</h3>
                <p className="text-gray-600 text-sm">
                  Divisão estruturada de iniciantes a avançados para otimizar sua curva de aprendizado
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Smile className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Área de Convivência</h3>
                <p className="text-gray-600 text-sm">
                  Lounge com lanchonete e espaço confortável para socialização e networking
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Droplet className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Vestiários Completos</h3>
                <p className="text-gray-600 text-sm">
                  Estrutura com armários, duchas e secadores para seguir direto para o trabalho
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Car className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Estacionamento</h3>
                <p className="text-gray-600 text-sm">
                  Serviço de valet e área privativa de estacionamento no local
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Wind className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Climatização</h3>
                <p className="text-gray-600 text-sm">
                  Renovação de ar contínua e climatização ideal para o máximo rendimento
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Wifi className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Wi-Fi Corporativo</h3>
                <p className="text-gray-600 text-sm">
                  Internet de alta velocidade disponível em todas as áreas comuns
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Lock className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Segurança Total</h3>
                <p className="text-gray-600 text-sm">
                  Monitoramento 24h e catracas de acesso biométrico
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            {/* <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setCarouselApi}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXJ0aWFsJTIwYXJ0cyUyMGRvam98ZW58MXx8fHwxNzYxNzg4ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Aulas de Jiu-Jitsu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nJTIwbWF0JTIwZG9qb3xlbnwxfHx8fDE3NjIyMjA3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Tatame moderno"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1544965819-473a800795fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2NrZXIlMjByb29tJTIwZml0bmVzc3xlbnwxfHx8fDE3NjIyMjA3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Vestiários"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1580145644348-9266b5a5b6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBwYXJraW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzYyMjIwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Estacionamento"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1761971976282-b2bb051a5474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmYWNpbGl0eSUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2MjIyMDkwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Recepção da academia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-black" />
              <CarouselNext className="right-2 bg-white/90 hover:bg-white border-black" />
            </Carousel> */}
          </div>
        </div>
      </section>

      <section id="myths" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esclarecemos os mitos mais comuns para quem quer dar o primeiro passo no tatame.
            </p>
          </div>
{/* 
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-12 group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nJTIwbWF0JTIwZG9qb3xlbnwxfHx8fDE3NjIyMjA3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dúvidas sobre o Jiu-Jitsu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-black ml-1" />
              </div>
            </div>
          </div> */}

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <XIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">MITO</div>
                    <p className="text-lg text-gray-600 line-through">
                      "Sou muito velho para começar a treinar"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-black mb-2 tracking-wider">REALIDADE</div>
                    <p className="text-lg text-gray-700">
                      O Jiu-Jitsu foi criado para que o mais fraco se defenda do mais forte. Temos alunos que iniciaram suas jornadas após os 40, 50 e 60 anos com resultados incríveis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <XIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">MITO</div>
                    <p className="text-lg text-gray-600 line-through">
                      "Preciso estar em forma antes de começar"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-black mb-2 tracking-wider">REALIDADE</div>
                    <p className="text-lg text-gray-700">
                      É o oposto: você entra no Jiu-Jitsu para entrar em forma. O ritmo da aula é adaptado ao seu condicionamento atual, e sua evolução física será natural.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <XIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">MITO</div>
                    <p className="text-lg text-gray-600 line-through">
                      "Tenho medo de me machucar, é muito violento"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-black mb-2 tracking-wider">REALIDADE</div>
                    <p className="text-lg text-gray-700">
                      Segurança é nossa prioridade. O treino flui como um jogo de xadrez humano. O contato e a intensidade são graduais, guiados de perto pelos instrutores.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <XIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">MITO</div>
                    <p className="text-lg text-gray-600 line-through">
                      "Eu não levo jeito para lutas"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-black mb-2 tracking-wider">REALIDADE</div>
                    <p className="text-lg text-gray-700">
                      O Jiu-Jitsu é uma ciência baseada em alavancas e tempo de reação. Você não precisa ter "dom", basta frequentar as aulas e aprender a técnica passo a passo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl text-black mb-8 text-center">Os Reais Benefícios da Arte Suave</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-gray-200 hover:border-black transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl text-black mb-2">Alívio do Estresse</h4>
                  <p className="text-gray-600">
                    Esvazie a mente após um dia de trabalho. No tatame, o foco absoluto no momento presente age como meditação ativa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl text-black mb-2">Defesa Pessoal e Autoconfiança</h4>
                  <p className="text-gray-600">
                    Saiba agir sob pressão. A técnica verdadeira proporciona tranquilidade e controle sobre o próprio corpo e mente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl text-black mb-2">Condicionamento Físico</h4>
                  <p className="text-gray-600">
                    Melhore mobilidade, flexibilidade, força funcional e capacidade cardiovascular de forma estimulante e coletiva.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              A Rotina no Tatame
            </h2>
            <p className="text-xl text-gray-600">
              Cultura de excelência, respeito e irmandade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow group">
                <ImageWithFallback 
                  src={`https://images.unsplash.com/photo-${
                    index === 1 ? '1564415315949-27ab5f16e001' :
                    index === 2 ? '1542937307-973ad1f0b10f' :
                    index === 3 ? '1550759807-50dc0b381a1e' :
                    index === 4 ? '1512412046876-f386342ed2e6' :
                    index === 5 ? '1560274191-ff18e6c7d3db' :
                    index === 6 ? '1517438476312-10d79c077509' :
                    index === 7 ? '1599901860904-17e6ed7083a0' :
                    '1594027674775-5ed49697e1da'
                  }?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdXxlbnwxfHx8fDE3NjIzODg0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080`}
                  alt={`Galeria de treinos ${index}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="schedule" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Horários das Turmas
            </h2>
            <p className="text-xl text-gray-600">
              Grade flexível para encaixar o treino na sua rotina profissional
            </p>
          </div> */}

          {/* <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {[
              { id: 'monday', label: 'Segunda' },
              { id: 'tuesday', label: 'Terça' },
              { id: 'wednesday', label: 'Quarta' },
              { id: 'thursday', label: 'Quinta' },
              { id: 'friday', label: 'Sexta' },
              { id: 'saturday', label: 'Sábado' }
            ].map((day) => (
              <Button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                variant={selectedDay === day.id ? 'default' : 'outline'}
                className={selectedDay === day.id ? 'bg-black hover:bg-gray-800 text-white' : 'border-gray-300 hover:border-black'}
              >
                {day.label}
              </Button>
            ))}
          </div> */}

          {/* <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-black" />
                <h3 className="text-2xl text-black">
                  {selectedDay === 'monday' ? 'Segunda-feira' :
                   selectedDay === 'tuesday' ? 'Terça-feira' :
                   selectedDay === 'wednesday' ? 'Quarta-feira' :
                   selectedDay === 'thursday' ? 'Quinta-feira' :
                   selectedDay === 'friday' ? 'Sexta-feira' :
                   'Sábado'}
                </h3>
              </div>

              <div className="space-y-4">
                {scheduleData[selectedDay].morning && (
                  <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Manhã</div>
                        <div className="text-2xl text-black">{scheduleData[selectedDay].morning}</div>
                      </div>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                )}

                {scheduleData[selectedDay].afternoon && (
                  <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Tarde</div>
                        <div className="text-2xl text-black">{scheduleData[selectedDay].afternoon}</div>
                      </div>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                )}

                {scheduleData[selectedDay].evening && (
                  <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Noite</div>
                        <div className="text-2xl text-black">{scheduleData[selectedDay].evening}</div>
                      </div>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                )}

                {!scheduleData[selectedDay].morning && 
                 !scheduleData[selectedDay].afternoon && 
                 !scheduleData[selectedDay].evening && (
                  <div className="text-center py-8 text-gray-600">
                    Sem aulas regulares neste dia. Verifique a disponibilidade para treinos particulares.
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 bg-black/5 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Importante:</strong> Chegue com 15 minutos de antecedência. Oferecemos aulas fundamentais contínuas para quem está começando do zero.
                </p>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </section>

      {/* <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl text-black mb-6">
                Dê o Primeiro Passo. Agende uma Aula Experimental.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transforme sua rotina, blinde sua mente e faça parte de uma das escolas mais tradicionais de Jiu-Jitsu.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Telefone / WhatsApp</div>
                    <a href="tel:+551199999999" className="text-xl text-black hover:underline">
                      (11) 9999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">E-mail</div>
                    <a href="mailto:contato@escolademian.com" className="text-xl text-black hover:underline">
                      contato@escolademian.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Unidades</div>
                    <div className="space-y-2">
                      <div className="text-lg text-black">
                        Unidade Pinheiros: Rua dos Pinheiros, 1234
                      </div>
                      <div className="text-lg text-black">
                        Unidade Moema: Av. Moema, 5678
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-2 border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Como gostaria de ser chamado"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Seu nível no Jiu-Jitsu</Label>
                    <Select 
                      value={formData.experience} 
                      onValueChange={(value : any) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione sua experiência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iniciante">Nunca treinei (Iniciante)</SelectItem>
                        <SelectItem value="branca">Faixa Branca (Com alguma experiência)</SelectItem>
                        <SelectItem value="azul">Faixa Azul</SelectItem>
                        <SelectItem value="roxa_acima">Faixa Roxa ou superior</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="unit">Unidade de Preferência</Label>
                    <Select 
                      value={formData.unit} 
                      onValueChange={(value : any) => setFormData({ ...formData, unit: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione a unidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pinheiros">Pinheiros</SelectItem>
                        <SelectItem value="moema">Moema</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    size="lg"
                  >
                    Agendar Aula Experimental Grátis
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    Ao enviar, você concorda em receber comunicações da Escola Demian. Seus dados estão seguros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}


      <CTASection></CTASection>
        <Footer></Footer>
     
    </div>
  );
} 