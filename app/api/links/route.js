import { NextResponse } from 'next/server';

// Mock database sitting securely on the server side
const developerLinks = [
  { id: 1, title: "✒️ DevSign Badges", url: "https://github.com/Adhieeeh/devsign-generator", tech: "React" },
  { id: 2, title: "🚀 QuickRepo Blueprint", url: "https://github.com/Adhieeeh/quickrepo-builder", tech: "React + Vite" },
  { id: 3, title: "📈 DevLog Progress Tracker", url: "https://github.com/Adhieeeh/devlog-tracker", tech: "LocalState" },
  { id: 4, title: "⏱️ DevTime Freelance Ledger", url: "https://github.com/Adhieeeh/devtime-tracker", tech: "ContextAPI" }
];

// Server-Side GET Handler
export async function GET() {
  return NextResponse.json({
    developer: "ADHI",
    status: "Active",
    totalProjects: developerLinks.length,
    projects: developerLinks
  });
}