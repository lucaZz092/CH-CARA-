import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export default function AvailabilityCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // Pseudo-random deterministic booked dates generator for preview
  const getBookedDates = (y: number, m: number) => {
    // Generate some booked weekends based on the month to look realistic
    const dates = [];
    const seed = (y * 12 + m) % 5;
    
    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = new Date(y, m, i).getDay();
      // Usually book Friday, Saturday, Sunday based on the seed
      if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) {
        if ((i + seed) % 2 === 0) {
          dates.push(i);
        }
      }
    }
    return dates;
  };

  const booked = getBookedDates(year, month);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2 md:p-4"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dateToCheck = new Date(year, month, i);
    const isBooked = booked.includes(i);
    const isPast = dateToCheck < today;

    days.push(
      <div
        key={i}
        className={`
          p-2 md:p-4 flex flex-col items-center justify-center rounded-xl border
          ${isPast 
            ? 'bg-stone-100 text-stone-400 border-stone-100 cursor-not-allowed opacity-60'
            : isBooked
              ? 'bg-red-50 text-red-400 border-red-100 cursor-not-allowed'
              : 'bg-white text-emerald-800 border-emerald-100 hover:bg-emerald-50 hover:border-emerald-300 font-medium cursor-pointer transition-colors shadow-sm'
          }
        `}
      >
        <span className="text-lg md:text-xl">{i}</span>
        <span className="text-[9px] md:text-[10px] uppercase tracking-wider mt-1 hidden md:block">
          {isPast ? '' : isBooked ? 'Ocupado' : 'Livre'}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h3 className="text-2xl font-serif text-stone-800 flex items-center gap-3">
          <CalendarIcon className="text-emerald-600" />
          {monthNames[month]} {year}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            className="p-3 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-600 transition-colors border border-stone-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="p-3 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-600 transition-colors border border-stone-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 md:gap-4 text-center mb-4">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
          <div key={day} className="text-xs md:text-sm font-semibold text-stone-500 uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 md:gap-4">
        {days}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-stone-600 pt-6 border-t border-stone-100">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-white border border-emerald-200 shadow-sm"></div>
          <span>Disponível</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-50 border border-red-100"></div>
          <span>Ocupado</span>
        </div>
      </div>
    </div>
  );
}
