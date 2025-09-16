import React from "react";
import { useParams, Link } from "react-router";
import CoursesTable from "../components/CourseTable";

export default function UniversityDetailsPage({ universities }) {
    const { universityName } = useParams();

    // Find the matching university
    const university = universities.find(
        uni =>
            uni.name.toLowerCase().replace(/\s+/g, "-") ===
            universityName.toLowerCase()
    );

    if (!university) {
        return <p className="text-red-500 p-6">University not found.</p>;
    }

    const gradients = [
        "from-blue-100 to-blue-200",
        "from-purple-100 to-purple-200",
        "from-green-100 to-green-200",
        "from-pink-100 to-pink-200",
        "from-yellow-100 to-yellow-200",
    ];

    return (
        <div className="p-6">
            {/* University Info */}
            <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2">{university.name}</h1>
                <p className="mb-2 text-gray-700">{university.info}</p>
                <p className="mb-1">📍 {university.location}</p>
                <p className="mb-4">🗓 Application Deadline: {university.applicationDeadline}</p>
                <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                    Visit Official Website
                </a>
            </div>

            {/* Courses Table */}
            <h2 className="text-2xl font-semibold mb-4">Courses Offered</h2>
            <CoursesTable
                courses={university.courses}
                universityName={university.name}
            />
        </div>
    );
}
