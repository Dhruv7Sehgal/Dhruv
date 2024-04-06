import React from "react";
import { Amazon } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="flex bg-black justify-between">
      <nav className="p-4 align-middle items-center justify-center">
        <a href="#">
          <img src={Amazon} alt="logo" width={100} height={100} />
        </a>
      </nav>
      <div className="flex w-full items-center space-x-2 md:w-1/3">
        <input
          className="flex h-10 w-full rounded-md border border-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Email"
        ></input>
        <button
          type="button"
          className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Search
        </button>
      </div>
      <ul className="flex text-white font-bold gap-10 p-4">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-yellow-500 ">
              {" "}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Nav;
