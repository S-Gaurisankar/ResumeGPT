"use client";

import { useState } from "react";

export default function ResumeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadComplete(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    // Simulate upload
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you would send the file to your API here
    console.log("Uploading file:", file.name);

    setUploading(false);
    setUploadComplete(true);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="font-medium mb-2">Upload Resume</h3>

      <div className="space-y-4">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />

        {file && (
          <div className="text-sm text-gray-500">
            Selected file: {file.name}
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md
            ${!file || uploading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {uploading ? "Uploading..." : "Upload Resume"}
        </button>

        {uploadComplete && (
          <div className="text-sm text-green-600">✓ Upload complete</div>
        )}
      </div>
    </div>
  );
}
