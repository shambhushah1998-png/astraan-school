export type SchoolDashboard = {
  totalStudents: number;
  presentToday: number;
  feeCollection: string;
  pendingTasks: number;
  enrollmentTrend: number[];
  recentActivity: string[];
};

export type Student = {
  id: string;
  name: string;
  className: string;
  attendance: string;
  status: string;
};

export type AttendanceDay = {
  day: string;
  present: number;
  absent: number;
};

export type Exam = {
  name: string;
  className: string;
  date: string;
  status: string;
};

export type FeeSummary = {
  title: string;
  total: string;
  collected: string;
  pending: string;
};

export type Notice = {
  title: string;
  date: string;
  tag: string;
};

export type ReportCard = {
  name: string;
  value: string;
};
