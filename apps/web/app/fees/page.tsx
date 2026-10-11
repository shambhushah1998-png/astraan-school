import Sidebar from '../../components/Sidebar';

const fees = [
  { title: 'Tuition Fees', total: '₹36,000', collected: '₹31,200', pending: '₹4,800' },
  { title: 'Exam Fees', total: '₹8,000', collected: '₹7,400', pending: '₹600' },
  { title: 'Transport', total: '₹12,000', collected: '₹10,800', pending: '₹1,200' },
];

export default function FeesPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar active="fees" />
      <main className="flex-1 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Finance</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Fee Management</h1>
          </div>
          <button className="rounded-xl bg-astraan-blue px-4 py-2 font-semibold text-white">Collect Payment</button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {fees.map((fee) => (
            <div key={fee.title} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <h2 className="text-xl font-bold text-slate-900">{fee.title}</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex justify-between"><span>Total</span><span className="font-semibold">{fee.total}</span></div>
                <div className="flex justify-between"><span>Collected</span><span className="font-semibold text-emerald-600">{fee.collected}</span></div>
                <div className="flex justify-between"><span>Pending</span><span className="font-semibold text-red-500">{fee.pending}</span></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
