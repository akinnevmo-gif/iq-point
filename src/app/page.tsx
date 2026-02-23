export default function Home() {
  return (
    <main className="bg-gradient-to-br from-green-500 via-yellow-300 to-pink-400 min-h-screen">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
          IQ Point
        </h1>

        <p className="mt-6 text-xl text-white max-w-2xl">
          The smart platform built to help students prepare, practice,
          and succeed in WASSCE exams.
        </p>

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
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-20 px-8 rounded-t-3xl">

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {[
            "Past Questions",
            "CBT Practice",
            "Performance Analytics",
            "Daily Quiz",
            "Study Notes",
            "Leaderboard",
            "Mock Exams",
            "Community Support",
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {feature}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                Improve your performance with smart tools designed for WASSCE success.
              </p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
