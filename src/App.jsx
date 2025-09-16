import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import './App.css'
import { CertificateProvider, useCertificate } from "./components/CertificateContext";
import Home from "./pages/home.jsx";
import NotFound from "./pages/not_found.jsx";
import Universitiespage from "./pages/universities_page.jsx";
import universities from './data/universities.jsx';
import UniversityDetailsPage from "./pages/UniversityDetailsPage.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
import Header from "./components/Header.jsx";
import ClosestUniversitiesPage from "./pages/AdvancedSearch.jsx"

export default function App() {
  return (
    <BrowserRouter>
    <CertificateProvider>
      <Header />

      <div className='bg-gradient-to-b from-slate-300 to-slate-100'>
        <Routes>
          <Route path="/Gam3etak" element={<Home universities={universities} />} />
          <Route path="/Gam3etak/location" element={
            <ClosestUniversitiesPage universities={universities} />}
          />
          <Route path="/Gam3etak/uni" element={
            <Universitiespage universities={universities} />}
          />
          <Route
            path="/Gam3etak/uni/:universityName"
            element={<UniversityDetailsPage universities={universities} />}
          />
          <Route
            path="/Gam3etak/uni/:universityName/course/:courseName"
            element={<CourseDetailsPage universities={universities} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/Gam3etak/*" element={<NotFound />} />
        </Routes>
      </div>
    </CertificateProvider>
    </BrowserRouter>
  );
}
