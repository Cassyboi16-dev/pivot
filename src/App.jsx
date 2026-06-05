import Navbar from "./Components/Navbar";
import "./index.css";

export default function App() {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen gap-4 bg-slate-900 text-center">
          <Navbar/>
          <h1 className="uppercase text-9xl font-extrabold max-md:text-7xl text-white" id="Heading">
            Welcome To PIVOT
          </h1>
          <h1 className="text-blue-500 text-sm" >
            Personalized Innovation in Tech
          </h1>
        <button className="border-1 p-2 text-3xl rounded-2xl font-(family name: vernon adams) shadow-[0_0_50px_-12px_rgba(168,85,0,3)] hover:shadow-[0_0_50px_-12px_rgba(168,8,0,3)] hover:scale-95 active:scale-75 hover:bg-gray-600 text-white transition-all duration-200">Let's Begin</button>
          <section className="P-6 flex justify-center items-center text-4xl text-white">
            <h1>WHAT TO EXPECT FROM US</h1>
            <div></div>
            <div></div>
            <div></div>
          </section>
        </div>
    </>
  );
}
