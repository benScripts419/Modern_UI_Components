"use client";

import Image from "next/image";
import BG1 from "@/images/bg1.jpg";
import Pro from "@/images/profile.jpg";

export default function Home() {
  const cardItems = [
    {
      bgImg: BG1,
      name: "Theresa Asomaning",
      profilePic: Pro,
      userName: "@McDon419",
      time: "2mins ago",
    },
  ];
  return (
    <div className="h-screen bg-linear-to-tr from-[#f06f41] via-[#f8612a] to-[#fb5215] relative flex items-center justify-center">
      {cardItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-10 max-w-7xl mx-auto relative"
        >
          <div className="flex justify-center items-center h-90 w-80 shadow-black shadow-2xl z-10">
            <Image
              src={item.bgImg}
              width={150}
              height={150}
              alt=""
              className="border-2 border-gray-700 rounded-xl object-cover aspect-auto w-80"
            />
            <h1 className="absolute -top-20 left-18 text-md text-[#a09791] text-shadow-black shadow-2xl font-mono">
              {item.name}
            </h1>
            <div className="absolute -bottom-25.5 left-0 right-0 rounded-lg bg-linear-to-b from-black/1 via-black/30 to-black/90">
              <div className="flex flex-row justify-between items-center gap-6 px-4 py-6 z-10">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={item.profilePic}
                    alt=""
                    width={50}
                    height={50}
                    className="object-cover aspect-square rounded-full"
                  />
                  <div className="flex flex-col">
                    {" "}
                    <div className="text-sm text-[#aa827c] flex flex-row gap-2">
                      {item.userName}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-green-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="text-xs text-[#aa826a]">{item.time}</div>
                  </div>
                </div>
                <button className="rounded-lg bg-white/60 px-2 py-2 text-[#403a36] text-xs">
                  + Add Member
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
