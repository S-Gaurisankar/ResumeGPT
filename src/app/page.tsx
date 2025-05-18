"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
