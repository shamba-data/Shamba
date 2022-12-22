//use-client

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const activeRoute = "text-gold font-medium border-b-[2px] border-b-gold";
  const normalRoute = "";

  return (
    <nav className="absolute top-0 z-[9999] w-full font-montserrat">
      <div
        onClick={() => setShowNav(!showNav)}
        className="absolute right-5 top-5 z-10 cursor-pointer md:hidden"
      >
        {showNav ? (
          <FaTimes size={30} color="#fff" />
        ) : (
          <RiMenu3Line size={30} color="#46783E" />
        )}
      </div>
      <ul
        className={
          !showNav
            ? "hidden"
            : "absolute top-0 left-0  flex h-[400px] w-full flex-col items-center justify-center gap-5 bg-green text-lg font-medium text-white"
        }
      >
        <li>
          <Link
            href="/"
            className={router.pathname === "/" ? activeRoute : normalRoute}
          >
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className={
              router.pathname === "/#about" ? activeRoute : normalRoute
            }
          >
            What we do
          </Link>
        </li>
        <li>
          <Link
            href="/zambia"
            className={
              router.pathname === "/zambia" ? activeRoute : normalRoute
            }
          >
            Market Information
          </Link>
        </li>
        <li>
          <Link href="/careers">Careers</Link>
        </li>
      </ul>

      {/* for freaking wide screens */}
      <ul className=" hidden text-xl text-white md:flex md:h-[100px] md:items-center md:justify-center md:space-x-5 md:bg-green md:text-lg">
        <li>
          <Link
            href="/"
            className={router.pathname === "/" ? activeRoute : normalRoute}
          >
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className={
              router.pathname === "/#about" ? activeRoute : normalRoute
            }
          >
            What we do
          </Link>
        </li>
        <li>
          <Link
            href="/zambia"
            className={
              router.pathname === "/zambia" ? activeRoute : normalRoute
            }
          >
            Market Information
          </Link>
        </li>
        <li>
          <Link
            href="/careers"
            className={
              router.pathname === "/careers" ? activeRoute : normalRoute
            }
          >
            Careers
          </Link>
        </li>
        <li>
          <button className="font-semi-bold rounded-md bg-white px-4 py-2 text-black">
            Book an Enteprise Demo
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
