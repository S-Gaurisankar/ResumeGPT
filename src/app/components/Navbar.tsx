"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import { NAVBAR } from "../constants/strings.constants";

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <nav className="flex justify-between items-center p-4 md:p-6">
      <Link href="/" className="font-bold text-xl md:text-2xl">
        {NAVBAR.TITLE}
      </Link>
      <div className="flex gap-4 items-center">
        {isAuthenticated ? (
          <>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-900"
            >
              {NAVBAR.DASHBOARD}
            </Link>
            <button
              onClick={handleLogout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              {NAVBAR.LOG_OUT}
            </button>
          </>
        ) : (
          <>
            <button className="text-gray-700 hover:text-gray-900">
              {NAVBAR.LOG_IN}
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              {NAVBAR.SIGN_UP}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
