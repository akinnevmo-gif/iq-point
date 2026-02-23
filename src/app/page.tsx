export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-500 via-yellow-300 to-pink-400">

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
        IQ Point
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-xl text-white max-w-xl">
        The smart platform built to help students prepare, practice,
        and succeed in WASSCE exams.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mt-8">

        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
          Start Practicing
        </button>

        <a
          href="https://chat.whatsapp.com/JaTMhWxIBM0EY5out6HWLB"
          target="_blank"
          className="bg-white text-pink-500 px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Join Community
        </a>

      </div>

    </main>
  );
}
