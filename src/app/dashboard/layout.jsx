"use client";

import Link from "next/link";
import { House, BookOpen, SquareDot } from "@gravity-ui/icons";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-5 transition-all duration-300 hover:shadow-lg">

        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col gap-2">

          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-700"
          >
            <House className="size-5" />
            Dashboard
          </Link>

          <Link
            href="/dashboard/food"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-700"
          >
            <SquareDot className="size-5" />
            Food
          </Link>

          <Link
            href="/dashboard/book"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-700"
          >
            <BookOpen className="size-5" />
            Book
          </Link>

        </nav>

      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-zinc-100">
        {children}
      </main>

    </div>
  );
}