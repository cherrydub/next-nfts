import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import ContextOptions from "./context-options";
import { DropdownNavigation } from "./dropdown-navigation";

const routes = [
  {
    label: "Collections",
    path: "/collections",
  },
  {
    label: "Crypto",
    path: "/crypto",
  },
];

const userRoutes = [
  {
    //lets have users show their favorite collections, comments, posts and likes
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    //account information
    label: "Account",
    path: "/app/account",
  },
];

export default function Header() {
  return (
    <div className="flex justify-between items-center border-b z-[999] relative backdrop-blur-[0.5rem] px-4 py-2 ">
      <nav className=" ">
        <DropdownNavigation />
      </nav>
      <h1 className="font-mono">Next NFTs 👾</h1>
      <div className="">
        <ContextOptions />
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
}
