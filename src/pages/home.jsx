import React from "react";
import { Link } from "react-router";

export default function HomePage({ universities }) {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text">
          🎓 Welcome to Gam3etak
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Explore universities, compare courses, and find the right path for your
          future.
        </p>

        <Link
          to="/Gam3etak/uni"
          className="mt-6 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium hover:opacity-90 transition shadow-md"
        >
          Browse All Universities →
        </Link>
      </div>

      {/* Featured Universities */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {universities.slice(0, 6).map((uni, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-md p-6 bg-gradient-to-b from-white to-slate-100 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-transparent bg-clip-text">
              {uni.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">📍 {uni.location}</p>
            <p className="text-gray-700 text-sm line-clamp-3">{uni.info}</p>

            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                to={`/Gam3etak/uni/${uni.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
              >
                More Details
              </Link>
              <a
                href={uni.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-medium hover:bg-indigo-200 transition"
              >
                Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
