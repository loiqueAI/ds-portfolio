"use client";
import { useState } from "react";
import { Bars3BottomLeftIcon, Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" relative text-white bg-black w-[100%] h-[12hv] top-0 shadow-md p-2">
      <div className=" flex justify-between  items-center mx-auto w-[80%] h-[100%]">
        <div className="cursor-poiter">
          <Link href="/">
            <Image
              className=""
              src="/images/logo1.png"
              alt="logo"
              width={59}
              height={59}
            />
          </Link>
        </div>
        <ul
          className={`hidden md:flex space-x-4 ${isMenuOpen ? "hidden" : ""}`}
        >
          <Link className="hover:text-green-500" href="/service">
            Service{" "}
          </Link>
          <Link className="hover:text-green-500" href="/project">
            Project{" "}
          </Link>
          <Link className="hover:text-green-500" href="/skills">
            Skills{" "}
          </Link>
          <Link className="hover:text-green-500" href="/about">
            About{" "}
          </Link>
          <Link className="hover:text-green-500" href="/testimonial">
            Testimonial
          </Link>
          <Link className="hover:text-green-500" href="/certification">
            Certification
          </Link>
          <Link className="hover:text-green-500" href="/contact">
            Contact{" "}
          </Link>
        </ul>
        {/* Burger menu pour les écrans de petite taille */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <Bars3BottomLeftIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          {isMenuOpen && (
            <ul className="fixed flex flex-col items-center top-24 left-0 w-screen h-screen bg-black p-4 space-y-8">
              <Link
                className="hover:text-blue-500"
                href="/service"
                onClick={toggleMenu}
              >
                Service{" "}
              </Link>
              <Link
                className="hover:text-blue-500"
                href="/project"
                onClick={toggleMenu}
              >
                Project{" "}
                <Link
                  className="hover:text-blue-500"
                  href="/skills"
                  onClick={toggleMenu}
                >
                  Skills{" "}
                </Link>
              </Link>
              <Link
                className="hover:text-blue-500"
                href="/about"
                onClick={toggleMenu}
              >
                About{" "}
              </Link>
              <Link
                className="hover:text-blue-500"
                href="/testimonial"
                onClick={toggleMenu}
              >
                Testimonial{" "}
              </Link>
              <Link
                className="hover:text-blue-500"
                href="/certification"
                onClick={toggleMenu}
              >
                Certification{" "}
              </Link>
              <Link
                className="hover:text-blue-500"
                href="/contact"
                onClick={toggleMenu}
              >
                Contact{" "}
              </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
