import React from "react";
import { Link } from "react-router";
import { useCertificate } from "./CertificateContext";

export default function Header() {
  const { certificate, setCertificate } = useCertificate();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3 gap-3">
        <Link
          to="/Gam3etak"
          className="text-xl font-bold hover:text-gray-200 transition"
        >
          Gam3etak
        </Link>

        <nav className="flex flex-col md:flex-row gap-2 items-start md:items-center">
          <div className="flex gap-2">
            <Link to="/Gam3etak/uni" className="px-3 py-2 rounded-md hover:bg-blue-700 transition">
              Universities
            </Link>
            <Link to="/Gam3etak/location" className="px-3 py-2 rounded-md hover:bg-blue-700 transition">
              Location
            </Link>
          </div>

          <select
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
            className="px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-white text-sm w-full md:w-auto"
          >
            <option value="">🎓 Select Certificate</option>
            <option>American High School Diploma</option>
            <option>British Certificate</option>
            <option>Canadian Certificate</option>
            <option>French Baccalaureate</option>
            <option>German Abitur</option>
            <option>International Baccalaureate</option>
            <option>Thanawiya Amma (Egypt)</option>
            <option>Thanawiya Amma (Arab Countries)</option>
          </select>
        </nav>

      </div>
    </header>
  );
}
