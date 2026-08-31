"use client";

// import Navbar from "./Components/Navbar";
import "./index.css";

export default function App() {
  return (
    <>
      <main className="">
        <div className="bg-emerald-400 min-h-dvh flex flex-col items-center justify-center gap-6 text-center px-6">
          <h1
            id="Heading"
            className="uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-md"
          >
            Welcome to PIVOT
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-white/90">
            Personalized Innovation in Tech — building thoughtful products and
            experiences that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:scale-105 transform transition-all duration-200"
            >
              Let's Begin
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center px-5 py-3 border border-white/30 text-white/95 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

        <section className="min-h-dvh bg-gradient-to-b from-yellow-300 to-orange-600 flex flex-col items-center justify-center px-6 py-16">
          <div className="max-w-4xl w-full">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-lg mb-8">
                WHAT TO EXPECT FROM US
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Innovation
                </h3>
                <p className="text-white/90">
                  Cutting-edge solutions tailored to your needs
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">Quality</h3>
                <p className="text-white/90">
                  Thoughtful design and robust development
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Scalability
                </h3>
                <p className="text-white/90">
                  Solutions that grow with your business
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">Support</h3>
                <p className="text-white/90">
                  Dedicated partnership every step of the way
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
