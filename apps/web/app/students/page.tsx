import Sidebar from '../../components/Sidebar';

const students = [
  { id: 'ST-101', name: 'Aisha Khan', className: 'Grade 8-A', attendance: '96%', status: 'Active' },
  { id: 'ST-102', name: 'Rohit Sharma', className: 'Grade 9-B', attendance: '92%', status: 'Good' },
  { id: 'ST-103', name: 'Meera Nair', className: 'Grade 10-A', attendance: '98%', status: 'Excellent' },
  { id: 'ST-104', name: 'Kabir Singh', className: 'Grade 7-C', attendance: '89%', status: 'Needs Support' },
];

export default function StudentsPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar active="students" />
      <main className="flex-1 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Students</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Student Directory</h1>
          </div>
          <button className="rounded-xl bg-astraan-blue px-4 py-2 font-semibold text-white">Add Student</button>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Student</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Class</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Attendance</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-700">{student.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{student.className}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{student.attendance}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{student.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
