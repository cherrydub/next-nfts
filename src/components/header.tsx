import React from "react";
import { ModeToggle } from "./mode-toggle";
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
    <div
      className="flex justify-between items-center border-b  backdrop-blur-[0.5rem] px-4 py-2"
      style={{ height: "60px", zIndex: "100000" }}
    >
      <nav className="flex-shrink-0">
        <DropdownNavigation />
      </nav>
      <h1 className="flex-shrink-0">Next NFTs 👾</h1>
      <div className="flex">
        <ContextOptions />
        <ModeToggle />
      </div>
    </div>
  );
}
