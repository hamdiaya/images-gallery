import Link from "next/link";
import React from "react";
import Search from "./search";

export default function navBar() {
  return (
    <header className="bg-black sticky top-0 z-10">
      <nav className=" flex flex-col gap-4  items-center p-4 font-bold max-w-6xl mx-auto  text-white sm:flex-row sm:justify-between ">
        <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
          <Link href="/">Next.js images gallery</Link>
        </h1>
    <Search/>
      </nav>
    </header>
  );
}
navBar;
