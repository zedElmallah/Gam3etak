// src/pages/CourseDetailsPage.jsx
import React from "react";
import { useParams } from "react-router";
import { useCertificate } from "../components/CertificateContext";

export default function CourseDetailsPage({ universities }) {
  const { universityName, courseName } = useParams();
  const { certificate } = useCertificate();

  // Default to Thanawiya Amma (Egypt) if none selected
  const selectedCert = certificate || "Thanawiya Amma (Egypt)";

  // Find university
  const university = universities.find(
    (uni) =>
      uni.name.toLowerCase().replace(/\s+/g, "-") ===
      universityName.toLowerCase()
  );

  if (!university) {
    return <p className="text-red-500">University not found.</p>;
  }

  // Find course inside the university
  const course = university.courses.find(
    (c) =>
      c.name.toLowerCase().replace(/\s+/g, "-") ===
      courseName.toLowerCase()
  );

  if (!course) {
    return (
      <p className="text-red-500">
        Course not found in {university.name}.
      </p>
    );
  }

  // Get requirement for selected certificate
  const req = course.requirement[selectedCert];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>

      <div className="mb-6 p-4 border rounded-lg shadow bg-slate-100">
        <h2 className="text-lg font-semibold mb-2">Requirements</h2>
        {req ? (
          <p className="text-gray-800">
            <strong>{selectedCert}:</strong> {req.score}
            {req.details && (
              <span className="text-sm text-gray-600 ml-2">
                ({req.details})
              </span>
            )}
          </p>
        ) : (
          <p className="text-red-500 font-medium">
            ⚠️ No information for {selectedCert}
          </p>
        )}
      </div>

      {course.modules?.map((yearData, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Year {yearData.year}
          </h2>

          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-blue-200 text-left">
                <th className="p-3 w-1/4">Type</th>
                <th className="p-3 w-3/4">Modules</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-100 align-top">
                <td className="p-3 font-semibold">Mandatory</td>
                <td className="p-3">
                  <ul className="list-disc pl-5 space-y-1">
                    {yearData.mandatory.map((mod, i) => (
                      <li key={i}>{mod}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className="bg-blue-100 align-top">
                <td className="p-3 font-semibold">Optional</td>
                <td className="p-3">
                  <ul className="list-disc pl-5 space-y-1">
                    {yearData.optional.map((mod, i) => (
                      <li key={i}>{mod}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
