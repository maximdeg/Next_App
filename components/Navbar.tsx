import Image from "next/image";
import Link from "next/link";
import SignIn from "./sign-in";
import { SignOut } from "./sign-out";
import React from "react";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session: any = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans border-b border-gray-200">
      <nav className="flex justify-between items-center text-black">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="logo"
            width={144}
            height={30}
            className="cursor-pointer object-contain bg-cover"
          ></Image>
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>
              {/* <SignOut /> ONE WAY TO DO WHAT IS BELOW */}
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button>Log Out</button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            // <SignIn /> ONE WAY TO DO IT
            // SECOND WAY TO DO THE LOGIN
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
