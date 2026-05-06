import Image from "next/image";
import CardBg from "@/assets/card3-bg.jpg";
import Like1 from "@/assets/like1.svg";
import Like2 from "@/assets/like2.svg";

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <div className="flex flex-col items-center py-10">
        {" "}
        <h1 className="text-5xl text-white/80">Which is Better</h1>
        <div className="grid grid-cols-2 max-w-3xl mx-auto gap-8">
          <div className="flex flex-col items-center justify-center">
            <Image src={Like1} alt="" className="py-4" />
            <div className="bg-white w-80 h-auto rounded-3xl relative">
              <Image
                src={CardBg}
                alt=""
                className="object-cover aspect-2/3 rounded-3xl p-2 bg-white"
              />
              
              <div className="absolute top-4 right-4">
                <div className="flex flex-col">
                  <h3 className="text-white text-sm font-semibold">France</h3>
                  <div className="text-sm text-[#f1d2aa]">Paris, Lyon</div>
                </div>
              </div>
              <div className="absolute top-104 left-5">
                <div className="flex flex-row items-center justify-between w-70 gap-4 px-2 py-1 bg-gray-300 border border-white/50 shadow-xl rounded-lg">
                  <div className="flex flex-col">
                    {" "}
                    <h2 className="text-black text-sm font-semibold">
                      Mr. Addo
                    </h2>
                    <p className="text-gray-500 text-xs">php Developer</p>
                  </div>
                  <button className="bg-black text-white rounded-md px-4 py-1">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-4">
            <Image src={Like2} alt="" className="py-4" />
            <div className="bg-white w-80 h-auto rounded-3xl relative">
              <Image
                src={CardBg}
                alt=""
                className="object-cover aspect-2/3 rounded-3xl p-2 bg-white"
              />
              <div className="absolute bottom-7 left-5">
                <div className="bg-black h-15 rounded-lg border border-white/20">
                  <div className="flex justify-center py-0.5">
                    <h3 className="text-white text-sm">
                      France <span className="text-[#d0a87a]">Paris, Lyon</span>
                    </h3>
                  </div>{" "}
                  <div className="flex flex-row items-center justify-between w-70 gap-4 px-2 py-1 bg-gray-300 rounded-lg">
                    <div className="flex flex-col">
                      {" "}
                      <h2 className="text-black text-sm font-semibold">
                        Mr. Addo
                      </h2>
                      <p className="text-gray-500 text-xs">php Developer</p>
                    </div>
                    <button className="bg-black text-white rounded-md px-4 py-1">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
