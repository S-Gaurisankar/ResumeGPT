import React from "react";
import { FOOTER } from "../constants/strings.constants";

export default function Footer() {
  return (
    <footer className="p-6 text-center text-gray-500 text-sm">
      {FOOTER.COPYRIGHT}{" "}
      <a href="#" className="hover:text-gray-700">
        {FOOTER.PRIVACY}
      </a>{" "}
      •{" "}
      <a href="#" className="hover:text-gray-700">
        {FOOTER.TERMS}
      </a>{" "}
      •{" "}
      <a href="#" className="hover:text-gray-700">
        {FOOTER.CONTACT}
      </a>
    </footer>
  );
}
