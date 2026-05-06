import Image from "next/image";
import BG from "@/bg.jpg";

export default function Home() {
  return (
    <div className="bg-stone-400 h-screen flex items-center justify-center">
      <div className="w-100 h-40 bg-black rounded-xl shadow-amber-900 shadow-xl relative">
        <div className="absolute top-1 left-1">
          <div className="p-0.5 bg-white/6 border border-gray-700 shadow-gray-500 h-30 w-98 flex flex-row justify-between gap-2 rounded-xl shadow-xs">
            <div className="flex flex-row gap-4">
              <Image
                src={BG}
                width={100}
                height={100}
                alt=""
                className="object-cover aspect-square z-10 rounded-xl"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-sm text-white flex flex-row items-center gap-1">
                  Henrie Ekemezie{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="text-xs text-white/50">
                  Founder & Designer Claeflo Haus
                </p>

                <div className="flex flex-row gap-2 items-center mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 text-amber-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h1 className="text-white text-sm">4 (23)</h1>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-center w-4 h-4 p-3 rounded-full border border-white/20 shadow-xl shadow-gray-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
