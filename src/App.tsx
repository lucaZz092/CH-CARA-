import React from 'react';
import Logo from './components/Logo';
import HeroCarousel from './components/HeroCarousel';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';
import { MapPin, Phone, Mail, Instagram, Home, Waves, Leaf } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen relative font-sans text-stone-800 bg-stone-50 overflow-x-hidden">
      {/* Header */}
      <header className="absolute top-0 w-full z-10 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex gap-8 font-medium text-stone-600">
            <a href="#sobre" className="hover:text-emerald-700 transition-colors">A Chácara</a>
            <a href="#reservas" className="hover:text-emerald-700 transition-colors">Disponibilidade</a>
            <a href="#depoimentos" className="hover:text-emerald-700 transition-colors">Depoimentos</a>
          </nav>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-colors text-sm font-semibold"
          >
            Falar com Anfitrião
          </a>
        </div>
      </header>

      <main>
        <HeroCarousel />

        {/* About Section */}
        <section id="sobre" className="py-24 px-4 max-w-6xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-6">Seu Refúgio de Paz e Natureza</h2>
             <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
               A Chácara Santa Clara oferece o ambiente perfeito para você se desconectar da cidade e se reconectar com quem você ama.
               Com amplos espaços verdes, área de lazer completa e uma casa rústica super aconchegante, garantimos dias de descanso e muita alegria.
             </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-stone-100 transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mb-6">
                  <Home className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-semibold text-2xl mb-4 text-stone-800">Acomodações</h3>
                <p className="text-stone-600">Casa rústica com 4 quartos, sala ampla com lareira e cozinha caipira completa para até 15 pessoas.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-stone-100 transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-sky-50 text-sky-700 rounded-full flex items-center justify-center mb-6">
                  <Waves className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-semibold text-2xl mb-4 text-stone-800">Lazer Completo</h3>
                <p className="text-stone-600">Piscina adulto e infantil com aquecimento solar, churrasqueira, forno a lenha e campo de futebol gramado.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-stone-100 transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-semibold text-2xl mb-4 text-stone-800">Pura Natureza</h3>
                <p className="text-stone-600">Muito verde, pomar com árvores frutíferas, redário e um clima de paz que só o campo oferece.</p>
              </div>
           </div>
        </section>

        {/* Calendar Section */}
        <section id="reservas" className="py-24 bg-stone-200/50 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-6">Disponibilidade</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">Confira nossos dias livres no calendário abaixo. Para confirmar sua reserva e tirar dúvidas, clique no botão do WhatsApp e fale direto conosco.</p>
            </div>
            <AvailabilityCalendar />
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-6">O que dizem nossos hóspedes</h2>
            <p className="text-lg text-stone-600">Histórias de quem já viveu momentos especiais na Santa Clara.</p>
          </div>
          <Testimonials />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 border-b border-stone-800 pb-12 mb-12">
           <div>
             <div className="bg-stone-800 inline-block p-4 rounded-xl mb-6">
               <Logo inverted />
             </div>
             <p className="text-stone-400 leading-relaxed mb-6 pr-4">
               Um refúgio familiar criado com muito amor para receber quem busca tranquilidade, segurança e contato com a natureza.
             </p>
           </div>
           <div>
             <h4 className="text-white font-serif text-xl mb-6">Contato</h4>
             <ul className="space-y-4">
               <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-500" /> (11) 99999-9999</li>
               <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-500" /> contato@chacarasantaclara.com</li>
               <li className="flex items-center gap-3"><Instagram className="w-5 h-5 text-emerald-500" /> @chacarasantaclara</li>
             </ul>
           </div>
           <div>
             <h4 className="text-white font-serif text-xl mb-6">Localização</h4>
             <p className="flex items-start gap-3">
               <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
               <span>Estrada da Natureza, Km 12<br/>Bairro das Colinas<br/>Interior de SP - CEP 12345-000</span>
             </p>
           </div>
        </div>
        <div className="max-w-6xl mx-auto text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Chácara Santa Clara. Todos os direitos reservados.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
