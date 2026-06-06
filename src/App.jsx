"use client";
// import Navbar from "./Components/Navbar";
import "./index.css";

export default function App() {
  return (
    <>
      <main className="">
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-cyan-500 to-emerald-400 min-h-dvh flex flex-col items-center justify-center gap-6 text-center px-6">
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

        <section className="min-h-dvh bg-amber-400 flex items-start pt-10 justify-center gap-6 text-center px-6">
          <div className="px-4 py-3 bg-white/8 rounded-lg text-2xl text-white/95 font-medium">
            <h1 className="font-black">WHAT TO EXPECT FROM US</h1>
            {/* <div className="flex-col"> */}
              <div className="min-h-45 min-w-1/2 backdrop:backdrop-blur-2xl bg-stone-700"></div>
              <div>YOOO</div>
              <div>WHATSUPP</div>
            {/* </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
