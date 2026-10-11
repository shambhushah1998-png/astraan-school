import './globals.css';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <nav className="mb-12 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-soft">
          <div>
            <p className="text-2xl font-bold text-astraan-navy">Astraan</p>
            <p className="text-sm text-slate-500">School Management</p>
          </div>
          <div className="flex gap-3">
            <a href="/login" className="rounded-lg bg-astraan-blue px-4 py-2 text-sm font-semibold text-white">Login</a>
            <a href="/dashboard" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Dashboard</a>
          </div>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-gradient-to-br from-astraan-navy via-sky-950 to-astraan-blue p-10 text-white shadow-soft">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              Modern school ERP
            </p>
            <h1 className="max-w-xl text-5xl font-extrabold leading-tight">
              Manage your school with clarity and confidence.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-200">
              Astraan brings together admissions, academics, attendance, exams, fees, communication, and reporting in one connected system.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="/dashboard" className="rounded-xl bg-astraan-gold px-5 py-3 font-semibold text-slate-900">Open Dashboard</a>
              <a href="/students" className="rounded-xl border border-white/25 px-5 py-3 font-semibold text-white">View Students</a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-xl font-bold text-slate-900">School snapshot</h2>
            <div className="mt-6 space-y-4">
              <Metric label="Students" value="2,420" change="+8.2%" />
              <Metric label="Teachers" value="184" change="+1.5%" />
              <Metric label="Attendance" value="96.8%" change="+2.4%" />
              <Metric label="Fee Collection" value="₹14.8L" change="+12.1%" />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Student Management', 'Admission, profiles, records, and student lifecycle tracking.'],
            ['Academic Operations', 'Classes, subjects, schedules, exams, and mark sheets.'],
            ['Finance', 'Fee collection, receipts, dues, and financial summaries.'],
            ['Communication', 'Notices, announcements, and class updates for all stakeholders.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <div className="mb-3 h-11 w-11 rounded-xl bg-sky-100 text-lg font-bold text-astraan-blue flex items-center justify-center">A</div>
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{label}</p>
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">{change}</span>
      </div>
      <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
