"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

interface NavbarProbs {
  label: string;
  page: string;
}

const NavbarProb: Array<NavbarProbs> = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "/about",
  },
  {
    label: "Contact",
    page: "/contact",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto  px-4 bg-white shadow fixed top-0 sm:px-20 z-50 dark:border-stone-600 dark:border-b dark:bg-stone-900 dark:text-white">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md:block">
              <h2 className="font-bold text-2xl">Luay Mohammad Al Taani</h2>
            </div>
            <div className="md:hidden">
              <button type="button" onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex justify-self-center md:item-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <nav className="md:flex md:space-x-6 md:items-center text-center">
              {NavbarProb.map((item, i) => (
                <div key={i} className="text-center p-1 m-1">
                  <Link href={item.page}>{item.label}</Link>
                </div>
              ))}
              <button
                className="bg-slate-100 p-2 rounded-xl md:ml-2 sm:mt-2"
                type="button"
                onClick={() =>
                  currentTheme === "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                {currentTheme === "dark" ? (
                  <RiMoonFill
                    size={25}
                    color="black"
                    className="text-2xl cursor-pointer"
                  />
                ) : (
                  <RiSunLine
                    size={25}
                    color="black"
                    className="text-2xl cursor-pointer"
                  />
                )}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
