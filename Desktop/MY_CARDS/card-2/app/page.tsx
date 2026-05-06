import Image from "next/image";
import CardBg from "@/assets/card-bg.jpg";
import Google from "@/assets/google-icon.png";

export default function Home() {
  return (
    <div className="flex flex-row items-center max-w-md mx-auto h-screen text-white relative">
      <Image
        src={CardBg}
        alt=""
        className="object-cover aspect-2/3 rounded-xl"
      />
      <div className="absolute top-45 left-6 w-100 h-auto">
        <div className="bg-transparent backdrop-blur-xs backdrop-brightness-2xl rounded-xl text-white/90 p-5 z-50 border-2 border-white/20 shadow-2xl">
          <div className="flex flex-row justify-between">
            <div className="w-10 h-10 rounded-full backdrop-blur-sm backdrop-brightness-3xl border border-white/30 flex justify-center items-center">
              <Image src={Google} alt="" />
            </div>
            <button className="flex items-center justify-between gap-2 backdrop-blur-sm backdrop-brightness-3xl rounded-xl px-2 border border-white/30 shadow-2xl text-sm">
              saved{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="py-10 space-y-2">
            <h2 className="text-md">
              Google <span className="text-sm text-white/40">20 days ago</span>
            </h2>
            <h1 className="text-xl">Front-End Developer</h1>
            <div className="flex flex-row gap-2 z-10">
              <button className="backdrop-blur-sm backdrop-brightness-3xl rounded-xl py-1 px-2 border border-white/30 shadow-2xl">
                Full-Time
              </button>
              <button className="backdrop-blur-sm backdrop-brightness-3xl rounded-xl py-1 px-2 border border-white/30 shadow-2xl">
                Flexible Schedule
              </button>
            </div>
          </div>

          <div className="mt-8 py-5 border-t border-white/30 flex flex-row justify-between">
            <div className="flex flex-col space-y-0.5">
              <h2 className="text-sm">$150 - $220k</h2>
              <div className="text-xs text-white/40">Mountain, View,CA</div>
            </div>
            <button className="backdrop-blur-sm backdrop-brightness-3xl rounded-xl py-1 px-2 border border-white/30 text-sm shadow-2xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
