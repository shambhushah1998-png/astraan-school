import Sidebar from '../../components/Sidebar';

const reportCards = [
  { name: 'Attendance Summary', value: '96.8%' },
  { name: 'Fee Collection Rate', value: '84.2%' },
  { name: 'Course Completion', value: '91.5%' },
  { name: 'Student Satisfaction', value: '4.8/5' },
];

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar active="reports" />
      <main className="flex-1 p-8">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Reports</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Performance Insights</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reportCards.map((card) => (
            <div key={card.name} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">{card.name}</p>
              <p className="mt-4 text-3xl font-bold text-slate-900">{card.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
