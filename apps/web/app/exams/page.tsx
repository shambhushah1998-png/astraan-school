import Sidebar from '../../components/Sidebar';

const exams = [
  { name: 'Unit Test 1', className: 'Grade 8', date: '12 Aug 2026', status: 'Scheduled' },
  { name: 'Mid-Term', className: 'Grade 10', date: '18 Sep 2026', status: 'Open' },
  { name: 'Final Exam', className: 'Grade 12', date: '30 Nov 2026', status: 'Published' },
];

export default function ExamsPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar active="exams" />
      <main className="flex-1 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Academics</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Exams & Results</h1>
          </div>
          <button className="rounded-xl bg-astraan-blue px-4 py-2 font-semibold text-white">Create Exam</button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {exams.map((exam) => (
            <div key={exam.name} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <div className="inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">{exam.className}</div>
              <h2 className="mt-4 text-xl font-bold text-slate-900">{exam.name}</h2>
              <p className="mt-3 text-sm text-slate-500">{exam.date}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Status</span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{exam.status}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
