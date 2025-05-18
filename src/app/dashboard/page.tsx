"use client";

import ResumeUploader from "./components/ResumeUploader";
import JobDescriptionUploader from "./components/JobDescriptionUploader";
import { useState } from "react";

export default function Dashboard() {
  const [hasUploaded, setHasUploaded] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Welcome to ResumeGPT Dashboard
        </h2>
        <p className="text-gray-600 mb-4">
          Upload your resume and job description to get tailored
          recommendations.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResumeUploader />
          <JobDescriptionUploader />
        </div>

        {hasUploaded && (
          <div className="mt-8 p-4 border border-blue-200 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Analysis Ready</h3>
            <p className="text-blue-700 mb-4">
              We've analyzed your resume against the job description.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              View Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
