"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthContainerProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export default function AuthContainer({
  children,
  fallback,
}: AuthContainerProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for authentication token
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  // Return children if authenticated, fallback if not
  return isAuthenticated ? children : fallback;
}
