import Sidebar from '../../components/Sidebar';

const stats = [
  { label: 'Total Students', value: '2,420', tone: 'bg-blue-100 text-blue-700' },
  { label: 'Present Today', value: '2,112', tone: 'bg-emerald-100 text-emerald-700' },
  { label: 'Fee Collection', value: '₹14.8L', tone: 'bg-amber-100 text-amber-700' },
  { label: 'Pending Tasks', value: '42', tone: 'bg-red-100 text-red-700' },
];

const activity = [
  'New admission enrollment for Class 9-A finalized.',
  'Teacher training attendance completed for 98%.',
  'Exam timetable published for Grade 12 board exams.',
  'Fee reminder sent to 24 overdue accounts.',
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar active="dashboard" />

      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Overview</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Astraan Dashboard</h1>
          </div>
          <button className="rounded-xl bg-astraan-blue px-4 py-2 font-semibold text-white">Generate Report</button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((card) => (
            <div key={card.label} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${card.tone}`}>{card.label}</div>
              <p className="mt-4 text-3xl font-bold text-slate-900">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Enrollment Trend</h2>
            <div className="mt-6 flex h-52 items-end gap-4">
              {[35, 42, 60, 58, 75, 68, 90].map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-2xl bg-gradient-to-t from-astraan-blue to-cyan-400" style={{ height: `${height}%` }} />
                  <span className="text-xs text-slate-500">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][index]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Recent Activity</h2>
            <ul className="mt-6 space-y-4">
              {activity.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-astraan-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
