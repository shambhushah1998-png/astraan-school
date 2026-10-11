import Sidebar from '../../components/Sidebar';

const attendance = [
  { day: 'Mon', present: 96, absent: 4 },
  { day: 'Tue', present: 94, absent: 6 },
  { day: 'Wed', present: 98, absent: 2 },
  { day: 'Thu', present: 95, absent: 5 },
  { day: 'Fri', present: 97, absent: 3 },
];

export default function AttendancePage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar active="attendance" />
      <main className="flex-1 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Attendance</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Daily Attendance</h1>
          </div>
          <button className="rounded-xl bg-astraan-blue px-4 py-2 font-semibold text-white">Mark Attendance</button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {attendance.map((day) => (
            <div key={day.day} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <h2 className="text-lg font-bold text-slate-900">{day.day}</h2>
              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Present</p>
                  <p className="text-2xl font-bold text-emerald-600">{day.present}%</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Absent</p>
                  <p className="text-2xl font-bold text-red-500">{day.absent}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
