export default function StatCard({ label, value, icon: Icon, color = 'blue' }) {
  const colors = {
    blue:   'text-blue-600 bg-blue-50',
    green:  'text-green-600 bg-green-50',
    amber:  'text-amber-600 bg-amber-50',
    purple: 'text-purple-600 bg-purple-50',
    indigo: 'text-indigo-600 bg-indigo-50',
    rose:   'text-rose-600 bg-rose-50',
    teal:   'text-teal-600 bg-teal-50',
  };
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between min-h-[92px]">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="text-2xl font-black text-slate-900 mt-1">{value ?? '—'}</p>
      </div>
      {Icon && (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${colors[color] ?? colors.blue}`}>
          <Icon className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}
