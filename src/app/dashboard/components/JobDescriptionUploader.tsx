"use client";

import { useState } from "react";

export default function JobDescriptionUploader() {
  const [jobDescription, setJobDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
    setUploadComplete(false);
  };

  const handleSubmit = async () => {
    if (!jobDescription.trim()) return;

    setUploading(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // In a real app, you would send the data to your API here
    console.log(
      "Processing job description:",
      jobDescription.substring(0, 50) + "..."
    );

    setUploading(false);
    setUploadComplete(true);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="font-medium mb-2">Upload Job Description</h3>

      <div className="space-y-4">
        <textarea
          value={jobDescription}
          onChange={handleChange}
          placeholder="Paste your job description here..."
          className="w-full h-32 p-2 border border-gray-300 rounded-md text-sm"
        />

        <button
          onClick={handleSubmit}
          disabled={!jobDescription.trim() || uploading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md
            ${
              !jobDescription.trim() || uploading
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
        >
          {uploading ? "Processing..." : "Process Job Description"}
        </button>

        {uploadComplete && (
          <div className="text-sm text-green-600">
            ✓ Job description processed
          </div>
        )}
      </div>
    </div>
  );
}
