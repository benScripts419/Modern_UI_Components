"use client";
import { useState } from "react";
import Image from "next/image";
import Klak from "@/klak-logo.webp";
import Quill from "@/qill-logo.jpg";

export default function Menu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonItems = [
    {
      link: (
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
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      ),
      name: "Apps",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
          />
        </svg>
      ),
      menu: [
        {
          name: "Klak",
          desc: "satisfying key sounds",
          image: Klak,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          ),
        },
        {
          name: "Quill",
          desc: "Craft pages & docs",
          image: Quill,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          ),
        },
      ],
    },
    {
      name: "Components",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
      menu: [
        {
          name: "Action Bar",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          ),
        },
        {
          name: "Image Expand",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          ),
        },
        {
          name: "Read Time",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
              />
            </svg>
          ),
        },
      ],
      id: ["Dynamic", "Overlay", "Null"],
      date: ["06 - 26", "06 - 26", "04 - 25"],
    },
    {
      name: "Notes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
      ),
      menu: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          ),
          name: "Changelog using GitHub",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>
          ),
          name: "Feedback in stack",
        },
      ],
      date: ["Jan, 2026", "Mar, 2026"],
    },
  ];

  const isApps = openIndex === 0;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex justify-center">
        <div
          style={{ backgroundImage: "url('bg.jpg')" }}
          className="relative h-120 w-170 bg-linear-to-br bg-contain bg-no-repeat bg-center py-10 px-5 rounded-3xl shadow-xs border border-gray-300"
        >
          <div className="w-170 h-120 absolute top-0 left-0 rounded-3xl bg-linear-to-b from-blue-500 via-blue-400 to-white opacity-50 mix-blend-multiply"></div>
          <div
            className="absolute bottom-5 left-4 right-4 p-2 bg-black/5 max-w-sm mx-auto rounded-lg hover:rounded-t-none"
            onMouseLeave={() => setOpenIndex(null)}
          >
            {openIndex !== null && (
              <div className="absolute bottom-full left-0 right-0 mb-0 bg-black/5 rounded-t-lg">
                {buttonItems[openIndex].menu.map((menuItem, i) => {
                  const item =
                    typeof menuItem === "string"
                      ? { name: menuItem, desc: null, image: null, icon: null }
                      : menuItem;
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3 px-6 py-2 mb-2 mt-2 hover:translate-x-2 cursor-pointer text-sm transition-all duration-200 ease-out"
                    >
                      <div className="flex items-center gap-2">
                        {isApps ? (
                          <>
                            {"image" in item && item.image && (
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={25}
                                height={25}
                                className="rounded-sm object-cover"
                              />
                            )}
                            <div className="flex flex-col">
                              <div className="flex flex-row items-center gap-2">
                                <span>{item.name}</span>
                                {"icon" in item && item.icon && (
                                  <span className="size-3 flex items-center">
                                    {item.icon}
                                  </span>
                                )}
                              </div>
                              {"desc" in item && item.desc && (
                                <span className="text-xs text-gray-700">
                                  {item.desc}
                                </span>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            {"icon" in item && item.icon && (
                              <span className="size-4">{item.icon}</span>
                            )}
                            <span>{item.name}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-700">
                        {buttonItems[openIndex].id?.[i] && (
                          <span className="border border-gray-400 rounded-lg px-2">
                            {buttonItems[openIndex].id[i]}
                          </span>
                        )}
                        {buttonItems[openIndex].date?.[i] && (
                          <span>{buttonItems[openIndex].date[i]}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div className="max-w-xs mx-auto border-t border-gray-400"></div>
              </div>
            )}

            <div className="flex flex-row items-center justify-center gap-6">
              {buttonItems.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setOpenIndex(index)}
                  className={`flex flex-row items-center justify-center gap-2 px-2 py-1 rounded-lg cursor-pointer text-sm ${
                    openIndex === index
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
