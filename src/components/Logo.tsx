import { Trees } from 'lucide-react';

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${inverted ? 'text-stone-100' : 'text-emerald-800'}`}>
      <Trees className="w-8 h-8" />
      <div className="flex flex-col">
        <span className="font-serif text-2xl font-semibold leading-none tracking-wide">Santa Clara</span>
        <span className={`text-[10px] tracking-widest uppercase font-sans mt-1 ${inverted ? 'text-stone-400' : 'text-stone-500'}`}>
          Chácara & Eventos
        </span>
      </div>
    </div>
  );
}
