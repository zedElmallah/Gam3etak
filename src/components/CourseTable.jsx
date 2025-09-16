// src/components/CoursesTable.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router";
import { useCertificate } from "./CertificateContext"; // adjust path if needed

export default function CoursesTable({ courses = [], universityName = "", limit }) {
  const { certificate } = useCertificate();
  const selectedCert = certificate || "Thanawiya Amma (Egypt)";

  // only name sorting is kept
  const [direction, setDirection] = useState("asc");
  const toggleSort = () => setDirection((d) => (d === "asc" ? "desc" : "asc"));

  const sorted = useMemo(() => {
    return [...courses].sort((a, b) => {
      const an = (a.name || "").toLowerCase();
      const bn = (b.name || "").toLowerCase();
      if (an < bn) return direction === "asc" ? -1 : 1;
      if (an > bn) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [courses, direction]);

  const limitedCourses = typeof limit === "number" ? sorted.slice(0, limit) : sorted;

  return (
    <div className="overflow-x-auto mt-6">
      <p className="text-sm text-gray-600 mb-2">
        📚 Showing {limitedCourses.length} of {courses.length} courses
      </p>

      <table className="w-full table-fixed border-collapse overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-100 to-blue-100">
            <th
              onClick={toggleSort}
              className="p-3 border text-left cursor-pointer text-sm md:text-base select-none"
              style={{ width: "35%" }} /* 2/7 */
            >
              Course Name{" "}
              <span className="ml-1 text-xs">
                {direction === "asc" ? "↑" : "↓"}
              </span>
            </th>

            <th
              className="p-3 border text-left text-sm md:text-base"
              style={{ width: "65%" }} /* 5/7 */
            >
              Required Score ({selectedCert})
            </th>
          </tr>
        </thead>

        <tbody>
          {limitedCourses.map((course, cIdx) => {
            // new requirement structure: course.requirement[selectedCert]
            const req = course.requirement?.[selectedCert];

            return (
              <tr
                key={cIdx}
                className="hover:bg-slate-50 transition-colors text-sm md:text-base align-top"
              >
                <td className="p-3 border font-medium" style={{ width: "28.571%" }}>
                  <Link
                    to={`/Gam3etak/uni/${universityName
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/course/${course.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block w-full text-center px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition text-sm md:text-base"
                  >
                    {course.name}
                  </Link>
                </td>

                <td className="p-3 border text-gray-700" style={{ width: "71.429%" }}>
                  {req ? (
                    <div>
                      <span className="font-medium">{req.score}</span>
                      {req.details && (
                        <p className="text-xs text-gray-500 mt-1">{req.details}</p>
                      )}
                    </div>
                  ) : (
                    <span className="text-red-500 font-medium">
                      ⚠️ No information for {selectedCert}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
