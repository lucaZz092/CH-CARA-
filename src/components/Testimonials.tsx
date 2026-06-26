import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Mariana Silva",
    date: "Fevereiro 2026",
    text: "Lugar maravilhoso! A casa é muito limpa e bem cuidada. A área da piscina é perfeita para passar o dia em família. O contato com a natureza renovou nossas energias. Com certeza voltaremos!",
  },
  {
    name: "Carlos e Família",
    date: "Dezembro 2025",
    text: "Passamos o Natal na chácara e foi inesquecível. O clima de paz, o gramado perfeito para as crianças correrem e o canto dos pássaros de manhã não tem preço. Muito acolhedor.",
  },
  {
    name: "Fernanda Costa",
    date: "Novembro 2025",
    text: "Atendimento excelente desde a reserva. A chácara é ainda mais bonita que nas fotos. As crianças amaram o campo e nós adoramos fazer uma pizza no forno a lenha à noite.",
  }
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {reviews.map((review, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col hover:shadow-md transition-shadow">
          <div className="flex gap-1 text-amber-400 mb-6">
            {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
          </div>
          <p className="text-stone-600 leading-relaxed italic mb-8 flex-grow">"{review.text}"</p>
          <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-serif text-xl font-bold">
              {review.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-stone-800">{review.name}</p>
              <p className="text-sm text-stone-500">{review.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
