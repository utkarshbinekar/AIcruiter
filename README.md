# AI Recruiter

AI Recruiter is an intelligent interviewing platform that helps streamline the hiring process using AI-powered features.

## Features

- **AI-Powered Interviews**: Create customized interview sessions based on job descriptions
- **Resume Analysis**: ATS scoring and resume analysis against job requirements
- **Interview Management**: Schedule and track interviews with candidates 
- **Real-time Feedback**: Get instant AI feedback on candidate performance
- **Dashboard**: Manage all interviews and candidates in one place

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Database and authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Clerk](https://clerk.com/) - User authentication
- [OpenAI](https://openai.com/) - AI interview generation
- [Google Gemini](https://cloud.google.com/gemini) - Resume analysis

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in `.env.local`:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPEN_ROUTER_KEY=
NEXT_PUBLIC_GEMINI_API_KEY=
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## Project Structure

- `/app` - Main application pages and routing
- `/components` - Reusable UI components
- `/services` - API and external service integrations
- `/lib` - Utility functions and helpers
- `/public` - Static assets

## License

This project is licensed under the MIT License - see the LICENSE file for details.