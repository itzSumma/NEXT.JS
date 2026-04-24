"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 py-20 px-6 text-center">

        <h1 className="text-5xl font-bold text-emerald-800">
          Book & Food Dashboard
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Manage your books and food items in one place with a clean,
          fast and modern dashboard experience built with Next.js.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/dashboard/book"
            className="px-6 py-3 border border-emerald-700 text-emerald-700 rounded-xl hover:bg-emerald-100 transition"
          >
            Explore Books
          </Link>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-emerald-700">9+</h2>
          <p className="text-gray-600 mt-1">Books Available</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-teal-700">10+</h2>
          <p className="text-gray-600 mt-1">Food Items</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-sky-700">100%</h2>
          <p className="text-gray-600 mt-1">Fast UI Performance</p>
        </div>

      </div>

      {/* QUICK ACCESS */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 bg-emerald-50 border rounded-xl hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold">📚 Books Section</h3>
          <p className="text-gray-600 mt-2">
            Browse fiction, fantasy, classics and more with ratings.
          </p>
          <Link
            href="/dashboard/book"
            className="inline-block mt-4 text-emerald-700 font-medium"
          >
            View Books →
          </Link>
        </div>

        <div className="p-6 bg-teal-50 border rounded-xl hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold">🍔 Food Section</h3>
          <p className="text-gray-600 mt-2">
            Explore food items with ratings, images and details.
          </p>
          <Link
            href="/dashboard/food"
            className="inline-block mt-4 text-teal-700 font-medium"
          >
            View Foods →
          </Link>
        </div>

      </div>

      {/* FOOTER */}
      <div className="text-center py-10 text-gray-500 text-sm">
        Built with Next.js • Clean Dashboard UI ✨
      </div>

    </div>
  );
}