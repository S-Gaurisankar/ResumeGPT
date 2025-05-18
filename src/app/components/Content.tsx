import React from "react";
import { useRouter } from "next/navigation";
import { CONTENT } from "../constants/strings.constants";

const Content = () => {
  const router = useRouter();

  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center px-4 md:px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          {CONTENT.TITLE}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {CONTENT.SUBTITLE}
        </p>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => router.push("/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            {CONTENT.GET_STARTED}
          </button>
          <a
            href="#features"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            {CONTENT.LEARN_MORE}
          </a>
        </div>
      </div>
    </main>
  );
};

export default Content;
