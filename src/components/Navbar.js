"use client";
import "./navbar.css";
import Link from "next/link";
import ThemeToggle from "./theme-togler/ThemeTogle";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [togler, setTogler] = useState(false);
  const pathName = usePathname();

  const changeTogler = () => {
    setTogler(!togler);
  };
  const closeBurgerMenu = () => {
    setTogler(false);
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link href="/" className="navbar-label">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-house-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z" />
            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018" />
          </svg>
          <h2>Sweet Home</h2>
        </Link>
        <div className="theme-burger-container">
          <ThemeToggle />
          <div
            className={`menu-btn ${togler && "dark"}`}
            onClick={changeTogler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>

          <ul className={`main-menu ${togler && "show"}`}>
            <li
              className={`list-items ${
                pathName === "/furniture" ? "active-link" : ""
              }`}
            >
              <Link href="/furniture" onClick={closeBurgerMenu}>
                Furniture
              </Link>
            </li>
            <li
              className={`list-items ${
                pathName === "/services" ? "active-link" : ""
              }`}
            >
              <Link href="/services" onClick={closeBurgerMenu}>
                Services
              </Link>
            </li>
            <li
              className={`list-items ${
                pathName === "/contact" ? "active-link" : ""
              }`}
            >
              <Link href="/contact" onClick={closeBurgerMenu}>
                Contact
              </Link>
            </li>
            <li
              className={`list-items ${
                pathName === "/iorder" ? "active-link" : ""
              }`}
            >
              <Link href="/iorder" onClick={closeBurgerMenu}>
                Individual order
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
