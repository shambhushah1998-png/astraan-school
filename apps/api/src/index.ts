import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

const dashboard = {
  totalStudents: 2420,
  presentToday: 2112,
  feeCollection: '₹14.8L',
  pendingTasks: 42,
  enrollmentTrend: [35, 42, 60, 58, 75, 68, 90],
  recentActivity: [
    'New admission enrollment for Class 9-A finalized.',
    'Teacher training attendance completed for 98%.',
    'Exam timetable published for Grade 12 board exams.',
    'Fee reminder sent to 24 overdue accounts.',
  ],
};

const students = [
  { id: 'ST-101', name: 'Aisha Khan', className: 'Grade 8-A', attendance: '96%', status: 'Active' },
  { id: 'ST-102', name: 'Rohit Sharma', className: 'Grade 9-B', attendance: '92%', status: 'Good' },
  { id: 'ST-103', name: 'Meera Nair', className: 'Grade 10-A', attendance: '98%', status: 'Excellent' },
  { id: 'ST-104', name: 'Kabir Singh', className: 'Grade 7-C', attendance: '89%', status: 'Needs Support' },
];

const attendance = [
  { day: 'Mon', present: 96, absent: 4 },
  { day: 'Tue', present: 94, absent: 6 },
  { day: 'Wed', present: 98, absent: 2 },
  { day: 'Thu', present: 95, absent: 5 },
  { day: 'Fri', present: 97, absent: 3 },
];

const exams = [
  { name: 'Unit Test 1', className: 'Grade 8', date: '12 Aug 2026', status: 'Scheduled' },
  { name: 'Mid-Term', className: 'Grade 10', date: '18 Sep 2026', status: 'Open' },
  { name: 'Final Exam', className: 'Grade 12', date: '30 Nov 2026', status: 'Published' },
];

const fees = [
  { title: 'Tuition Fees', total: '₹36,000', collected: '₹31,200', pending: '₹4,800' },
  { title: 'Exam Fees', total: '₹8,000', collected: '₹7,400', pending: '₹600' },
  { title: 'Transport', total: '₹12,000', collected: '₹10,800', pending: '₹1,200' },
];

const notices = [
  { title: 'School Reopens on 1st July', date: '18 Jun 2026', tag: 'Academic' },
  { title: 'PTM Registration Open', date: '16 Jun 2026', tag: 'Parent' },
  { title: 'Holiday Schedule Updated', date: '12 Jun 2026', tag: 'Admin' },
];

const reports = [
  { name: 'Attendance Summary', value: '96.8%' },
  { name: 'Fee Collection Rate', value: '84.2%' },
  { name: 'Course Completion', value: '91.5%' },
  { name: 'Student Satisfaction', value: '4.8/5' },
];

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ ok: true, app: 'astraan-api', timestamp: new Date().toISOString() });
});

app.get('/api/dashboard', (_req: Request, res: Response) => {
  res.json(dashboard);
});

app.get('/api/students', (_req: Request, res: Response) => {
  res.json(students);
});

app.get('/api/attendance', (_req: Request, res: Response) => {
  res.json(attendance);
});

app.get('/api/exams', (_req: Request, res: Response) => {
  res.json(exams);
});

app.get('/api/fees', (_req: Request, res: Response) => {
  res.json(fees);
});

app.get('/api/notices', (_req: Request, res: Response) => {
  res.json(notices);
});

app.get('/api/reports', (_req: Request, res: Response) => {
  res.json(reports);
});

app.listen(port, () => {
  console.log(`Astraan API listening on http://localhost:${port}`);
});
