import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left md:py-52 items-center justify-center my-14 gap-2 py-16">
        <div className="w-1/2 mt-2 mb-6">
          <Image
            className="rounded-full shadow-2xl"
            src="/Luay.jpg"
            alt="personal photo"
            width="350"
            height="350"
          ></Image>
        </div>
        <div className="flex flex-col items-center md:items-baseline justify-center md:w-3/5">
          <h1 className="text-3xl md:text-7xl font-bold">Hi, I&apos;m Luay</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-center md:text-justify">
            I&apos;m a{" "}
            <span className="font-bold text-cyan-600">Computer programmer</span>{" "}
            with a passion for building web applications. I love working with
            React and Next.js to create dynamic and responsive user interfaces.
          </p>
          <Link
            href={"projects"}
            className="text-neutral-100 font-semibold px-6 py-3 bg-cyan-600 rounded-2xl block w-fit hover:bg-cyan-900"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href={""}>
          <HiArrowDown className="animate-bounce" size={40} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
