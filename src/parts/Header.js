import React from "react";
import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import logo from "../../public/images/logo.png";

export default function Header({ onLight }) {
  const memberpageUrl = process.env.NEXT_PUBLIC_MEMBERPAGE_URL;

  const linkColor = onLight ? "text-gray-900" : "text-white";
  
  const router = useRouter();
  const linkCTA = router.pathname.indexOf("/login") > -1 ? `${memberpageUrl}/register` : `${memberpageUrl}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
  
  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Image src={logo} alt="logo" />
      </div>
      <ul className="flex items-center">
        <li>
          <Link
            href="/"
            className={[
              linkColor,
              "text-white text-lg hover:text-teal-500 px-6 py-3",
            ].join(" ")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={[
              linkColor,
              "text-white text-lg hover:text-teal-500 px-6 py-3",
            ].join(" ")}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={[
              linkColor,
              "text-white text-lg hover:text-teal-500 px-6 py-3",
            ].join(" ")}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={[
              linkColor,
              "text-white text-lg hover:text-teal-500 px-6 py-3",
            ].join(" ")}
          >
            Story
          </Link>
        </li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={linkCTA}
          className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 ml-6"
        >
          {textCTA}
        </a>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
}
