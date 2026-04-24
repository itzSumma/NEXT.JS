"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  console.log(session);
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isPending) return <div>Loading...</div>;

  const handleSignOut = () => {
    authClient.signOut();
  };
  const links = (
    <>
      <li className="">
        <Link
          className="no-underline text-xl border border-zinc-300 p-2 rounded-md bg-emerald-700 hover:bg-emerald-900 text-white"
          href="/">
          Home
        </Link>
      </li>

      <li>
        <Link
          className="no-underline text-xl border border-zinc-300 p-2 rounded-md bg-emerald-700 text-white hover:bg-emerald-900"
          href="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          className="no-underline text-xl border border-zinc-300 p-2 rounded-md bg-emerald-700 text-white hover:bg-emerald-900"
          href="/signup">
          Sign Up
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}>
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <p className="font-bold text-3xl">
              Start<span className="text-emerald-800 text-4xl">Kit</span>
            </p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <span className="text-blue-500 font-bold text-lg">
                {user.name}
              </span>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <Link
              className="no-underline text-xl border border-zinc-300 p-2 rounded-md bg-emerald-700 text-white hover:bg-emerald-900"
              href="/login">
              Login
            </Link>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {user ? (
                <>
                  <div className="text-blue-500 font-bold ">{user.name}</div>
                  <Button onClick={handleSignOut}>Sign Out</Button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="block py-2 no-underline text-xl border border-zinc-300 p-2 rounded-md bg-emerald-700 text-white">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
