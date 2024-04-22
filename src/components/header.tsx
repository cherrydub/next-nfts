import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

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
      <h1 className="font-mono">Next NFTs 👾</h1>
      <nav className="  flex-1  ">
        <ul className="flex justify-center items-center  font-mono text-sm space-x-2 ">
          {routes.map((route) => (
            <li
              className="bg-accent hover:bg-accent/50 p-2 cursor-pointer "
              key={route.path}
            >
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
}
