import { useState } from "react";
import Interview from "./assets/interview.png";
import ResumeAnalyzer from "./assets/resume-analyzer.png";
import SmartManager from "./assets/smart-manager.png";
import StockAssistant from "./assets/stock-assistant.png";
import Summarizer from "./assets/summarizer.png";
import Writewise from "./assets/writewise.png";
import GhostReply from "./assets/ghost-reply-generator.png";

const projectsData = [
  {
    id: 1,
    title: "AI Smart Manager",
    image: SmartManager,
    shortDesc: "AI-powered task manager with smart subtasks.",
    fullDesc:
      "A powerful productivity system that uses AI to break tasks into actionable subtasks, track progress, and manage execution efficiently with a modern UI.",
    link: "https://ai-smart-manager.vercel.app/",
  },
  {
    id: 2,
    title: "Ghost Reply Generator",
    image: GhostReply, // 🔥 apna image import kar lena
    shortDesc: "Instant AI replies with Gen-Z vibe 😏",
    fullDesc:
      "A fun, fast AI utility that generates witty, savage, flirty, or professional replies instantly. Designed for real-time chat use with minimal effort and maximum personality — no login, no friction, just smart replies.",
    link: "https://ai-ghost-reply-generator.vercel.app/",
  },
  {
    id: 3,
    title: "AI Mock Interview",
    image: Interview,
    shortDesc: "Practice interviews with AI.",
    fullDesc:
      "Simulates real interviews with AI-generated questions, feedback, and scoring across multiple domains.",
    link: "https://ai-mock-interviewer-omega-ruddy.vercel.app/",
  },
  {
    id: 4,
    title: "Resume Analyzer",
    image: ResumeAnalyzer,
    shortDesc: "Optimize resume using AI.",
    fullDesc:
      "Analyzes resumes against job descriptions and gives actionable insights to improve ATS score.",
    link: "https://ai-resume-analyzer-indol-one.vercel.app/",
  },
  {
    id: 5,
    title: "AI WriteWise",
    image: Writewise,
    shortDesc: "AI writing assistant.",
    fullDesc:
      "Generate professional emails, posts, and content with tone and clarity optimization.",
    link: "https://ai-writewise.vercel.app/",
  },
  {
    id: 6,
    title: "AI Summarizer",
    image: Summarizer,
    shortDesc: "Summarize content instantly.",
    fullDesc:
      "Convert long content into concise summaries while preserving context and meaning.",
    link: "https://ai-summarizer-silk-nine.vercel.app/",
  },
  {
    id: 7,
    title: "AI Stock Assistant",
    image: StockAssistant,
    shortDesc: "AI stock insights.",
    fullDesc:
      "Analyze stock trends and generate insights using AI-powered data interpretation.",
    link: "https://ai-stock-assistant-sigma.vercel.app/",
  },
];

export default function App() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-purple-50 to-indigo-100">
      {/* 🔥 HERO SECTION */}
      <div className="relative text-center py-20 px-4 overflow-hidden">
        {/* background glow */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-400 opacity-20 blur-3xl rounded-full pointer-events-none" />

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            AI Products{" "}
          </span>
          that solve{" "}
          <span className="underline decoration-purple-400">real problems</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-xl mx-auto text-lg">
          I create modern AI-driven tools focused on productivity, automation,
          and real-world impact.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          🚀 6+ AI Projects • React • Automation • Real-world tools
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/abhishek-saxena-1996-sep/",
                "_blank",
              )
            }
          >
            💼 Connect on LinkedIn
          </button>

          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition cursor-pointer"
            onClick={() => window.open("https://github.com/abhi-123", "_blank")}
          >
            💻 View GitHub
          </button>
        </div>
      </div>

      {/* 🔥 PROJECT GRID */}
      <div className="grid gap-8 px-6 pb-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectsData.map((project) => {
          const isOpen = expanded[project.id];

          return (
            <div
              key={project.id}
              className="backdrop-blur-lg  border-white/40 rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-500 hover:-translate-y-3 hover:scale-[1.03]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {isOpen ? project.fullDesc : project.shortDesc}
                </p>

                {/* BUTTONS */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-sm text-purple-600 font-medium hover:underline cursor-pointer"
                  >
                    {isOpen ? "See Less" : "See More"}
                  </button>

                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition cursor-pointer"
                  >
                    Try Now →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
