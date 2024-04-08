import React from "react";
import { Amazon } from "../assets/images";
import { navLinks } from "../constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  return (
    <header className="flex bg-black justify-between">
      <nav className="p-4 align-middle items-center justify-center">
        <NavLink to="/">
          <img src={Amazon} alt="logo" width={100} height={100} />
        </NavLink>
      </nav>
      <div className="flex w-full items-center space-x-2 md:w-1/3 max-md:hidden">
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
      <ul className="flex text-white font-bold gap-10 p-4 max-md:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <NavLink to={item.to} className="hover:text-yellow-500 ">
              {" "}
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link className="p-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </header>
  );
};

export default Nav;
