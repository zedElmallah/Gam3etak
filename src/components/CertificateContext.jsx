import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context
const CertificateContext = createContext();

// Hook to use it anywhere
export function useCertificate() {
  return useContext(CertificateContext);
}

// Provider Component
export function CertificateProvider({ children }) {
  const [certificate, setCertificate] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedCertificate");
    if (saved) setCertificate(saved);
  }, []);

  // Save to localStorage when updated
  useEffect(() => {
    if (certificate) {
      localStorage.setItem("selectedCertificate", certificate);
    }
  }, [certificate]);

  return (
    <CertificateContext.Provider value={{ certificate, setCertificate }}>
      {children}
    </CertificateContext.Provider>
  );
}
