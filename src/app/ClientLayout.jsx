"use client";
import { useState, useEffect } from "react";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-500">
          <div className="loader"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
