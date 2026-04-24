import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-200 dark:bg-black font-sans px-4">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 text-center">
        Welcome to Your Dashboard App 🚀
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-4 text-gray-600 text-lg  font-medium 0 text-center max-w-xl">
        Manage your books and food items with authentication, modern UI, and a full dashboard system.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">

        <Link
          href="/dashboard"
          className="px-6 py-3 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition"
        >
         <span className="text-lg font-semibold"> Go to Dashboard</span>
        </Link>

        <Link
          href="/signup"
          className="px-6 py-3 border border-emerald-700 text-emerald-700 rounded-xl hover:bg-emerald-700 hover:text-white transition"
        >
          <span className="text-lg font-semibold">Sign Up</span>
        </Link>

        <Link
          href="/login"
          className="px-6 py-3 border border-teal-700 text-teal-700 rounded-xl hover:bg-teal-800 hover:text-white transition"
        >
          <span  className="text-lg font-semibold">Sign In</span>
        </Link>

      </div>

      {/* FEATURE CARDS */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">

  <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <h2 className="font-semibold text-emerald-700 text-xl">Authentication</h2>
    <p className="text-md font-medium text-gray-600 mt-2">
      Better Auth with MongoDB for secure sign up & login system.
    </p>
  </div>

  <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <h2 className="font-semibold text-teal-700 text-xl">Dashboard Layout</h2>
    <p className="text-md font-medium text-gray-600 mt-2">
      Sidebar dashboard with book & food management sections.
    </p>
  </div>

  <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <h2 className="font-semibold text-xl
     text-sky-700">UI Features</h2>
    <p className="text-md font-medium text-gray-600 mt-2">
      Modals, dynamic cards, toast notifications, and smooth UI.
    </p>
  </div>

</div>

      {/* MORE FEATURES */}
      <div className="mt-10 text-center max-w-2xl">

        <p className="text-gray-600 dark:text-gray-300 text-md font-semibold">
          Includes: HeroUI Components • Gravity Icons • React Toastify • Dark/Light Theme Toggle • Book Details Modal • Food Details View
        </p>

      </div>

      {/* SMALL NOTE */}
      <p className="mt-10 text-lg font-bold text-zinc-600 text-center">
        Built with Next.js + HeroUI + Gravity Icons + React Toastify + Better Auth + MongoDB ✨
      </p>

    </div>
  );
}