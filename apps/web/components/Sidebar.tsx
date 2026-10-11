import Link from 'next/link';

const menu = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/students', label: 'Students' },
  { href: '/attendance', label: 'Attendance' },
  { href: '/exams', label: 'Exams' },
  { href: '/fees', label: 'Fees' },
  { href: '/notices', label: 'Notices' },
  { href: '/reports', label: 'Reports' },
];

export default function Sidebar({ active }: { active: string }) {
  return (
    <aside className="w-72 bg-astraan-navy p-6 text-white">
      <div className="mb-8">
        <p className="text-2xl font-bold">Astraan</p>
        <p className="mt-1 text-sm text-slate-300">School Management</p>
      </div>

      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
              active === item.href.replace('/', '') || active === item.label.toLowerCase() ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-10 rounded-2xl bg-white/10 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Admin</p>
        <p className="mt-2 text-lg font-semibold">School Office</p>
      </div>
    </aside>
  );
}
