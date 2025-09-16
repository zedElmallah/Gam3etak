import React, { useState } from "react";
import { Link } from "react-router";
import CoursesTable from "../components/CourseTable";
import { useCertificate } from "../components/CertificateContext";

const numToShow = 3; // Number of courses to show initially

export default function UniversitiesPage({ universities }) {
  const { certificate } = useCertificate();
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getSortedCourses = (courses) => {
    return [...courses].sort((a, b) => {
      let valA =
        sortConfig.key === "score" ? a.requirement.score : a.name.toLowerCase();
      let valB =
        sortConfig.key === "score" ? b.requirement.score : b.name.toLowerCase();

      if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  // 🔹 Sort universities so those with certificate info come first
  const sortedUnis = [...universities].sort((a, b) => {
    const aHasCert = certificate && a.acceptedCertificates?.includes(certificate);
    const bHasCert = certificate && b.acceptedCertificates?.includes(certificate);
    if (aHasCert && !bHasCert) return -1;
    if (!aHasCert && bHasCert) return 1;
    return 0; // keep relative order otherwise
  });

  return (
    <div className="min-h-screen p-4 md:p-8 space-y-12">
      {sortedUnis.map((uni, idx) => {
        const hasCert =
          certificate && uni.acceptedCertificates?.includes(certificate);

        return (
          <div
            key={idx}
            className="rounded-2xl shadow-md p-6 bg-gradient-to-b from-slate-50 to-slate-200 border border-gray-200 hover:shadow-lg transition"
          >
            {/* University Header */}
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-transparent bg-clip-text">
              {uni.name}
            </h2>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
              <p className="text-sm text-gray-600">📍 {uni.location}</p>
              <a
                href={uni.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 font-semibold hover:underline"
              >
                🌐 Visit Official Website
              </a>
            </div>

            <p className="text-gray-700 mb-2">{uni.info}</p>
            <p className="text-sm text-gray-500 mb-4">
              🗓 Application Deadline:{" "}
              <span className="font-medium">{uni.applicationDeadline}</span>
            </p>

            {/* Alert if no info for selected certificate */}
            {certificate && !hasCert && (
              <div className="mb-4 p-3 rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm">
                ⚠️ This university has no information on <b>{certificate}</b>.
              </div>
            )}

            {/* Courses Table */}
            <CoursesTable
              courses={getSortedCourses(uni.courses)}
              universityName={uni.name}
              limit={numToShow} // show only 3 courses
            />

            {/* Show total courses + button */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <Link
                to={`/Gam3etak/uni/${uni.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="inline-block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
              >
                View All Courses →
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
