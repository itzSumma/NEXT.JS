"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [data, setData] = useState({
    message: "",
    emoji: "",
    time: "",
    id: "",
  });

  useEffect(() => {
    const messages = [
      "Oops! This page ran away 🏃‍♂️",
      "We couldn’t find what you’re looking for 😕",
      "This route is lost in the void 🌌",
      "Nothing here… just silence 🕳️",
    ];

    const emojis = ["👀", "🤖", "🌿", "💚", "🚀"];

    setData({
      message: messages[Math.floor(Math.random() * messages.length)],
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      time: new Date().toLocaleTimeString(),
      id: Math.floor(1000 + Math.random() * 9000).toString(),
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">

      <div className="text-center p-10 rounded-2xl shadow-xl max-w-md w-full border border-emerald-200 bg-gradient-to-br from-emerald-200 via-green-100 to-emerald-300 transition-all">

        <h1 className="text-7xl font-bold text-emerald-800">
          404
        </h1>

        <p className="text-3xl mt-3">{data.emoji}</p>

        <p className="text-lg mt-4 text-gray-700 font-medium">
          {data.message}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Time: {data.time}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Error ID: #{data.id}
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}