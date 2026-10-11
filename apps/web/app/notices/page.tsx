import Sidebar from '../../components/Sidebar';

const notices = [
  { title: 'School Reopens on 1st July', date: '18 Jun 2026', tag: 'Academic' },
  { title: 'PTM Registration Open', date: '16 Jun 2026', tag: 'Parent' },
  { title: 'Holiday Schedule Updated', date: '12 Jun 2026', tag: 'Admin' },
];

export default function NoticesPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar active="notices" />
      <main className="flex-1 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Communication</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Notices & Announcements</h1>
          </div>
          <button className="rounded-xl bg-astraan-blue px-4 py-2 font-semibold text-white">Create Notice</button>
        </div>

        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.title} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-slate-900">{notice.title}</h2>
                <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">{notice.tag}</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">Published on {notice.date}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
