import Image from "next/image";
import Link from "next/link";
import SignIn from "./sign-in";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-gray shadow-sm font-work-sans border-b border-gray-200">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="logo"
            width={144}
            height={30}
            className="cursor-pointer object-contain "
          ></Image>
        </Link>
        <div className="flex items-center gap-5">
          <SignIn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
