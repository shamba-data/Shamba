//use-client

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
const ClientOnlyPortal = dynamic(() => import("../BookDemo/Portal"), {
  ssr: false,
});
const BookDemo = dynamic(() => import("../BookDemo"));
// import ClientOnlyPortal from "../BookDemo/Portal";
// import BookDemo from "../BookDemo";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [portal, setPortal] = useState(false);
  const router = useRouter();
  const activeRoute = "text-gold font-medium border-b-[2px] border-b-gold";
  const normalRoute = "";

  return (
    <nav className="absolute top-0 z-[9999] w-full font-montserrat">
      <div
        onClick={() => setShowNav(!showNav)}
        className="absolute right-5 top-5 z-10 cursor-pointer lg:hidden"
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
          <Link href="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link href="/careers">Careers</Link>
        </li>
      </ul>

      {/* for freaking wide screens */}
      <ul className=" hidden text-xl text-white md:h-[100px] md:items-center md:justify-between md:space-x-5 md:bg-green md:px-7 md:text-lg lg:flex">
        <div>
          <li>
            <Link href="/">
              <div className="relative hidden h-[65px] w-[148px] lg:block">
                <Image
                  src="/new_logo.png"
                  style={{
                    borderRadius: "12px"
                  }}
                alt="logo" 
                  layout="fill" />
              </div>
            </Link>
          </li>
        </div>
        <div className="flex items-center space-x-7">
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
            <button
              className="font-semi-bold rounded-md bg-white px-4 py-2 text-black"
              onClick={() => setPortal(!portal)}
            >
              Book an Enteprise Demo
            </button>
          </li>
        </div>
      </ul>
      {portal && (
        <ClientOnlyPortal selector="#modal">
          <section className="fixed  top-0 right-0 left-0 bottom-0 block bg-[rgba(0,0,0,0.8)] font-montserrat">
            <div className="absolute top-[10%] right-[10%] bottom-[10%] left-[10%] z-[99999] w-full lg:top-[20%]">
              <div className="relative h-[500px] w-[80vw] rounded-md bg-white shadow-md">
                <button
                  onClick={() => setPortal(!portal)}
                  className="absolute right-2 top-5 cursor-pointer"
                >
                  <FaTimes size={30} fill="#46783E" />
                </button>
                <BookDemo />
              </div>
            </div>
          </section>
        </ClientOnlyPortal>
      )}
    </nav>
  );
};

export default Nav;
