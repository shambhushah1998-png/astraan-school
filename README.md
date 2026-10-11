# Astraan School Management Software

Astraan is a full-featured school management system inspired by Fedena, designed for modern schools, academies, and institutions. It provides role-based dashboards for admin, teachers, staff, students, and parents.

## Stack

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Express + TypeScript
- Database: PostgreSQL-ready schema structure
- Role-based access control
- Dashboard analytics
- Attendance, exam, fee, and notice management

## Features

- Multi-role access: super admin, admin, teacher, student, parent, accountant
- Student profiles and admission tracking
- Staff and employee management
- Attendance capture and summary reports
- Exam and marks management
- Fee management and payment tracking
- Notice board and communication logs
- Dashboard insights and performance metrics
- Modular architecture ready for expansion

## Project Structure

- `apps/web` – Next.js frontend
- `apps/api` – Express API
- `packages/shared` – shared types and constants

## Quick start

```bash
npm install
npm run dev
```

This will start:
- Frontend at http://localhost:3000
- API at http://localhost:4000

## Environment

Copy `.env.example` and set your environment values.

## Roadmap

- Student admissions and KYC documents
- timetables and class scheduling
- library and transport modules
- HR and payroll integration
- parent/student portal improvements
- exports (PDF, Excel, CSV)
- chat and notifications
- multi-campus support

## Brand

The platform is branded as Astraan and is intended for schools looking for a clean SaaS-style school ERP.

## License

MIT
