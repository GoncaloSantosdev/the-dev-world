"use client";
import { useState } from "react";
import Link from "next/link";
// Components
import { ThemeToggle } from ".";
// Data
import { navData } from "@/utils/navData";
// React icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const authStatus = false;

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header className="relative flex items-center justify-between py-6 md:py-8">
      <div className="">
        <h1 className="text-xl font-semibold">The Dev World</h1>
      </div>

      <div className="md:hidden cursor-pointer" onClick={handleMenu}>
        {menu ? <AiOutlineClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
      </div>

      <nav className="hidden md:flex items-center gap-12">
        {navData.map((item, index) => (
          <Link key={index} href={item.path}>
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        {authStatus ? (
          <button className="border rounded px-4 py-2">Logout</button>
        ) : (
          <Link className="btn-primary" href={"/login"}>
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute right-0 top-16 bg-white shadow rounded md:hidden w-[200px] text-left p-6 z-50">
          <nav className="flex flex-col gap-4">
            {navData.map((item, index) => (
              <Link key={index} href={item.path}>
                {item.title}
              </Link>
            ))}

            <div>
              {authStatus ? (
                <button className="border rounded px-4 py-2">Logout</button>
              ) : (
                <Link className="btn-primary" href={"/login"}>
                  Login
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
