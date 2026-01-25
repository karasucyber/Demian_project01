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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('monday');
  const [currentInstructor, setCurrentInstructor] = useState(0);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    unit: ''
  });
  const [carouselApi, setCarouselApi] = useState<any>(null);

  // Schedule data for each day - horários para crianças
  const scheduleData: Record<string, { morning?: string; afternoon?: string; evening?: string }> = {
    monday: {
      afternoon: '14h - 15h (4-7 anos)',
      evening: '17h - 18h (8-12 anos)'
    },
    tuesday: {
      afternoon: '14h - 15h (4-7 anos)',
      evening: '17h - 18h (8-12 anos)'
    },
    wednesday: {
      afternoon: '14h - 15h (4-7 anos)',
      evening: '17h - 18h (8-12 anos)'
    },
    thursday: {
      afternoon: '14h - 15h (4-7 anos)',
      evening: '17h - 18h (8-12 anos)'
    },
    friday: {
      afternoon: '14h - 15h (4-7 anos)',
      evening: '17h - 18h (8-12 anos)'
    },
    saturday: {
      morning: '9h - 10h (4-7 anos)',
      afternoon: '10h - 11h (8-12 anos)'
    }
  };

// Dados dos professores reais da Escola Demian Kids
  const instructors = [
    {
      name: 'Mestra Márcia Silva',
      title: 'Coordenadora e Faixa Preta 5º Grau',
      image: '/MárciaSousa.jpg',
      description: 'Ex-professora de educação infantil, Márcia une a disciplina do Jiu-Jitsu à pedagogia, criando um ambiente de aprendizado seguro e acolhedor para os pequenos.',
      achievements: [
        { title: 'Pedagogia Infantil', subtitle: 'Especialista em Ensino' },
        { title: 'Faixa Preta 5º Grau', subtitle: 'Referência Técnica' },
        { title: 'Campeã Sul-Americana', subtitle: 'CBJJ 2024' },
        { title: 'World Masters', subtitle: '3º Lugar em Las Vegas' }
      ],
      quote: 'A luta não é contra o outro, é dentro de mim. Ensinamos a criança a dominar o corpo e a mente.'
    },
    {
      name: 'Prof. Jhonata Montoro',
      title: 'Especialista em Turmas Kids',
      image: '/JhonataMontoro.jpg',
      description: 'Pentacampeão Mundial consecutivo, Jhonata foca em transformar crianças em campeãs na vida, desenvolvendo confiança e disciplina extrema.',
      achievements: [
        { title: 'Pentacampeão Mundial', subtitle: 'CBJJE 2020 a 2024' },
        { title: 'Campeão Brasileiro', subtitle: 'CBJJ 2018' },
        { title: '7x Campeão Paulista', subtitle: 'Elite Competitiva' },
        { title: '11 Anos de Casa', subtitle: 'Aluno do Mestre Demian' }
      ],
      quote: 'Meu entusiasmo é dar condição para que os alunos se tornem campeões dentro e fora do tatame.'
    },
    {
      name: 'Prof. Ismat Attie',
      title: 'Instrutor de Base e Fundamentos',
      image: '/IsmatAttie.jpg',
      description: 'Com 28 anos de tatame e experiência em colégios como Mackenzie, Ismat foca na formação de valores como honra, lealdade e respeito.',
      achievements: [
        { title: 'Ensino em Colégios', subtitle: 'Mackenzie e Hebraica' },
        { title: 'Pioneiro do Esporte', description: 'Atuante desde 1998' },
        { title: 'Especialista em Boxe', subtitle: 'Visão Multidisciplinar' },
        { title: 'Sul-Americano', subtitle: '3º Lugar CBJJE 2021' }
      ],
      quote: 'Honra, Lealdade e Respeito. Ensinamos a arte marcial como um caminho de caráter.'
    },
    {
      name: 'Instrutor Guilherme Iglesias',
      title: 'Auxiliar Técnico Kids',
      image: '/GuilhermeIglesias.jpg',
      description: 'Especialista em calistenia e alongamentos, Guilherme foca no desenvolvimento motor e na agilidade funcional para a nova geração.',
      achievements: [
        { title: 'Monitor de Fundamentos', subtitle: 'Apoio aos Iniciantes' },
        { title: 'Calistenia Funcional', subtitle: 'Desenvolvimento Motor' },
        { title: 'Clube Alto Pinheiros', subtitle: 'Docência Regional' },
        { title: 'Acadêmico de Direito', subtitle: 'Mackenzie' }
      ],
      quote: 'A confiança nasce do que você realmente é capaz de fazer. Treinamos para ser capazes.'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!carouselApi) return;

    const intervalId = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [carouselApi]);

  // Auto-rotate instructors
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentInstructor((prev) => (prev + 1) % instructors.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado! Entraremos em contato em breve para agendar a aula experimental do seu filho(a).');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="tracking-wider text-black">DEMIAN</div>
                <div className="text-xs text-gray-600">Jiu-Jitsu Kids</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('video')} className="text-gray-700 hover:text-black transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('instructor')} className="text-gray-700 hover:text-black transition-colors">
                Professores
              </button>
              <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-black transition-colors">
                Horários
              </button>
              <button onClick={() => scrollToSection('myths')} className="text-gray-700 hover:text-black transition-colors">
                Dúvidas
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black transition-colors">
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-black hover:bg-gray-800 text-white"
              >
                Aula Grátis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('video')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('instructor')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Professores
                </button>
                <button onClick={() => scrollToSection('schedule')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Horários
                </button>
                <button onClick={() => scrollToSection('myths')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Dúvidas
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Contato
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-black hover:bg-gray-800 text-white w-full"
                >
                  Aula Grátis
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Video Section */}
      <section id="video" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl mb-6 text-black">
              Jiu-Jitsu Kids na Escola Demian
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolva disciplina, confiança e habilidades motoras em um ambiente seguro e divertido
            </p>
          </div>

          {/* Video Placeholder with Play Button */}
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHMlMjBjbGFzc3xlbnwxfHx8fDE3NjIzODg0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Treino de Jiu-Jitsu Kids"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-black ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl text-white mb-2">Como Funciona o Treino Kids</h3>
              <p className="text-white/90">Veja como é uma aula típica e conheça nossa metodologia especializada para crianças</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl text-black mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl text-black mb-2">600+</div>
              <div className="text-gray-600">Crianças Ativas</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl text-black mb-2">100%</div>
              <div className="text-gray-600">Ambiente Seguro</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl text-black mb-2">2x</div>
              <div className="text-gray-600">Unidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section - New Carousel Style */}
      <section id="instructor" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Nossos Professores Especializados
            </h2>
            <p className="text-xl text-gray-600">
              Equipe treinada em pedagogia e desenvolvimento infantil
            </p>
          </div>

          {/* New Carousel Style - Horizontal Cards */}
          <div className="relative">
            {/* Main Carousel Container */}
            <div className="flex items-center gap-8 overflow-hidden">
              {/* Carousel Track */}
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
                          {/* Image Column - 2 parts */}
                          <div className="md:col-span-2 relative h-96 md:h-auto">
                            <ImageWithFallback 
                              src={instructor.image}
                              alt={instructor.name}
                              className="w-full h-full object-cover object-center"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full text-sm">
                              {instructor.title}
                            </div>
                          </div>
                          
                          {/* Content Column - 3 parts */}
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

            {/* Navigation Dots */}
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

            {/* Manual Navigation Buttons */}
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

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Ambiente Escola Demian Kids
            </h2>
            <p className="text-xl text-gray-600">
              Estrutura completa pensada para o desenvolvimento das crianças
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tatame Seguro */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Shield className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Tatame Seguro</h3>
                <p className="text-gray-600 text-sm">
                  Tatames acolchoados e higienizados após cada turma
                </p>
              </CardContent>
            </Card>

            {/* Monitoria */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Users className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Monitoria</h3>
                <p className="text-gray-600 text-sm">
                  Turmas pequenas com atenção individual para cada criança
                </p>
              </CardContent>
            </Card>

            {/* Área dos Pais */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Smile className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Área dos Pais</h3>
                <p className="text-gray-600 text-sm">
                  Espaço confortável para os pais acompanharem as aulas
                </p>
              </CardContent>
            </Card>

            {/* Vestiários Kids */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Droplet className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Vestiários Kids</h3>
                <p className="text-gray-600 text-sm">
                  Vestiários adaptados para crianças com chuveiros
                </p>
              </CardContent>
            </Card>

            {/* Estacionamento */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Car className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Estacionamento</h3>
                <p className="text-gray-600 text-sm">
                  Estacionamento gratuito e seguro para os pais
                </p>
              </CardContent>
            </Card>

            {/* Ar Condicionado */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Wind className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Ar Condicionado</h3>
                <p className="text-gray-600 text-sm">
                  Ambiente climatizado para conforto das crianças
                </p>
              </CardContent>
            </Card>

            {/* Wi-Fi */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Wifi className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Wi-Fi Gratuito</h3>
                <p className="text-gray-600 text-sm">
                  Internet de alta velocidade para os pais
                </p>
              </CardContent>
            </Card>

            {/* Segurança */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Lock className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Segurança 24h</h3>
                <p className="text-gray-600 text-sm">
                  Sistema de câmeras e controle de acesso
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Carousel de Fotos */}
          <div className="mt-12">
            <Carousel
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
                      src="https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHMlMjBjbGFzc3xlbnwxfHx8fDE3NjIzODg0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Aulas de Jiu-Jitsu Kids"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1760544308418-51b87ffb8417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBzcG9ydHN8ZW58MXx8fHwxNzYyMzQ2NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Crianças praticando esportes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nJTIwbWF0JTIwZG9qb3xlbnwxfHx8fDE3NjIyMjA3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Tatame seguro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1544965819-473a800795fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2NrZXIlMjByb29tJTIwZml0bmVzc3xlbnwxfHx8fDE3NjIyMjA3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Vestiários modernos"
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
                      alt="Interior da academia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-black" />
              <CarouselNext className="right-2 bg-white/90 hover:bg-white border-black" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Myths Section - Convertido para Dúvidas */}
      <section id="myths" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Respondemos as principais dúvidas dos pais sobre Jiu-Jitsu para crianças
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-12 group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHMlMjBjbGFzc3xlbnwxfHx8fDE3NjIzODg0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dúvidas sobre Jiu-Jitsu Kids"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-black ml-1" />
              </div>
            </div>
          </div>

          {/* Myths Grid */}
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
                      "Meu filho é muito novo para começar"
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
                      A partir dos 4 anos as crianças já podem começar! Nosso programa Kids é adaptado 
                      para cada faixa etária, com foco em coordenação motora e disciplina.
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
                      "Jiu-Jitsu é violento para crianças"
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
                      Jiu-Jitsu é uma arte marcial que ensina disciplina, respeito e autocontrole. 
                      Nossas aulas focam em desenvolvimento pessoal, não em violência.
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
                      "Minha filha é menina, Jiu-Jitsu não é para ela"
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
                      Jiu-Jitsu é para todos! Temos muitas alunas que se destacam e desenvolvem 
                      confiança, autoestima e habilidades de defesa pessoal.
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
                      "Meu filho é tímido demais"
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
                      O Jiu-Jitsu é excelente justamente para crianças tímidas! Nosso ambiente acolhedor 
                      e as conquistas graduais ajudam a desenvolver autoconfiança.
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
                      "Preciso comprar muito equipamento"
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
                      Para começar, só precisa de um kimono! Oferecemos desconto no primeiro kimono 
                      e você pode fazer a aula experimental sem nenhum equipamento.
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
                      "Vai atrapalhar os estudos"
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
                      Pelo contrário! Estudos mostram que atividades físicas melhoram o foco e o 
                      rendimento escolar. Muitos de nossos alunos melhoraram suas notas!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefícios */}
          <div className="mt-16">
            <h3 className="text-3xl text-black mb-8 text-center">Benefícios do Jiu-Jitsu para Crianças</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-gray-200 hover:border-black transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl text-black mb-2">Desenvolvimento Cognitivo</h4>
                  <p className="text-gray-600">
                    Melhora foco, concentração e capacidade de resolver problemas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl text-black mb-2">Inteligência Emocional</h4>
                  <p className="text-gray-600">
                    Desenvolve autoconfiança, respeito e controle emocional
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl text-black mb-2">Coordenação Motora</h4>
                  <p className="text-gray-600">
                    Aprimora equilíbrio, coordenação e consciência corporal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Ambiente Familiar e Acolhedor
            </h2>
            <p className="text-xl text-gray-600">
              Veja como é o dia a dia na Escola Demian Kids
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Gallery Images */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow group">
                <ImageWithFallback 
                  src={`https://images.unsplash.com/photo-${
                    index === 1 ? '1635962005741-a9c4904d110b' :
                    index === 2 ? '1760544308418-51b87ffb8417' :
                    index === 3 ? '1617627590804-1de3424fbf04' :
                    index === 4 ? '1542937307-973ad1f0b10f' :
                    index === 5 ? '1555597673-b21d5c935865' :
                    index === 6 ? '1544965819-473a800795fe' :
                    index === 7 ? '1599901860904-17e6ed7083a0' :
                    '1594027674775-5ed49697e1da'
                  }?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHMlMjBjbGFzc3xlbnwxfHx8fDE3NjIzODg0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080`}
                  alt={`Galeria ${index}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Horários das Turmas Kids
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o melhor horário para seu filho(a)
            </p>
          </div>

          {/* Day Selection Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
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
          </div>

          {/* Schedule Display */}
          <Card className="border-2 border-gray-200 shadow-xl">
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
                    Sem aulas neste dia
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 bg-black/5 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Importante:</strong> As aulas são divididas por faixa etária para melhor aproveitamento. 
                  Turmas pequenas com máximo de 15 alunos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact/Lead Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-4xl lg:text-5xl text-black mb-6">
                Agende uma Aula Experimental Grátis
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Venha conhecer nossa metodologia e ver seu filho(a) se divertindo enquanto aprende Jiu-Jitsu!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Telefone</div>
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
                    <a href="mailto:kids@escolademian.com" className="text-xl text-black hover:underline">
                      kids@escolademian.com
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

            {/* Right Column - Form */}
            <Card className="border-2 border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="parentName">Nome do Responsável</Label>
                    <Input
                      id="parentName"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="childName">Nome da Criança</Label>
                    <Input
                      id="childName"
                      type="text"
                      placeholder="Nome do seu filho(a)"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="childAge">Idade da Criança</Label>
                    <Select 
                      value={formData.childAge} 
                      onValueChange={(value : any) => setFormData({ ...formData, childAge: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione a idade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 anos</SelectItem>
                        <SelectItem value="5">5 anos</SelectItem>
                        <SelectItem value="6">6 anos</SelectItem>
                        <SelectItem value="7">7 anos</SelectItem>
                        <SelectItem value="8">8 anos</SelectItem>
                        <SelectItem value="9">9 anos</SelectItem>
                        <SelectItem value="10">10 anos</SelectItem>
                        <SelectItem value="11">11 anos</SelectItem>
                        <SelectItem value="12">12 anos</SelectItem>
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
                    <Label htmlFor="phone">Telefone/WhatsApp</Label>
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
                    Ao enviar, você concorda em receber comunicações da Escola Demian. 
                    Seus dados estão seguros e protegidos.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="tracking-wider">DEMIAN</div>
                  <div className="text-xs text-gray-400">Jiu-Jitsu Kids</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Formando campeões dentro e fora do tatame desde 2010.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>(11) 9999-9999</p>
                <p>kids@escolademian.com</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Unidades</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Pinheiros: Rua dos Pinheiros, 1234</p>
                <p>Moema: Av. Moema, 5678</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Escola Demian. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
