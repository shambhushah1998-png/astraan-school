import '../../components/Sidebar';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-2">
        <div className="bg-gradient-to-br from-astraan-navy to-astraan-blue p-10 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Astraan</p>
          <h1 className="mt-6 text-4xl font-extrabold">School Management Portal</h1>
          <p className="mt-4 text-slate-200">
            Secure, role-based access for administrators, teachers, students, and parents.
          </p>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-bold text-slate-900">Login</h2>
          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-astraan-blue" defaultValue="admin@astraan.edu" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-astraan-blue" defaultValue="admin123" />
            </div>
            <button type="button" className="w-full rounded-xl bg-astraan-blue px-4 py-3 font-semibold text-white">
              Continue to Dashboard
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
