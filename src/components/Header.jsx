"use client";
import { useState } from "react";
import Link from "next/link";
// Next Auth
import { signOut, useSession } from "next-auth/react";
// Data
import { navData } from "@/utils/navData";
// React icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";

const Header = () => {
  const { status } = useSession();
  const [menu, setMenu] = useState(false);

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
        {status === "authenticated" ? (
          <div className="flex items-center gap-4">
            <Link href={"/create"}>
              <CiCirclePlus size={30} />
            </Link>
            <button className="btn-primary" onClick={() => signOut()}>
              Logout
            </button>
          </div>
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
              {status === "authenticated" ? (
                <div className="flex flex-col gap-4">
                  <Link href={"/create"}>
                    <CiCirclePlus size={30} />
                  </Link>
                  <button className="btn-primary" onClick={() => signOut()}>
                    Logout
                  </button>
                </div>
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
