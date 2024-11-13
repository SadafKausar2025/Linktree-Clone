"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const claimTree = (params) => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      <section className="bg-[#254F1A] min-h-[100vh] grid grid-cols-2">
        <div className="flex items-center flex-col justify-center ml-[10vw] gap-3">
          <p className="text-[#d2e823] font-bold text-6xl">
            Everything you are. In one, simple link in bio.
          </p>
          <p className="text-[#d2e823]">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="mt-10 mr-56 flex gap-3">
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="p-2 focus:outline-black rounded-lg"
              type="text"
              placeholder="Enter your handle"></input>

            <button
              onClick={() => claimTree()}
              className="bg-pink-200 p-4 rounded-full font-semibold">
              Claim your linktree
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center ml-[10vw]">
          <img className="h-[65vh] mt-20" src="home.png" alt="home" />
        </div>
      </section>
      <section className="bg-[#E9C0E9] min-h-[100vh] grid grid-cols-2">
        <div className="flex items-center flex-col justify-center ml-[10vw]">
          <img className="h-[65vh] mt-20" src="sec1.png" alt="sec1" />
        </div>
        <div className="flex items-center gap-4 flex-col justify-center ml-[5vw] mr-[5vw]">
          <p className="text-6xl font-bold text-purple-900">
            Create and customize your Linktree in minutes
          </p>
          <p className="text-purple-900 font-bold px-3">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>

          <button className="bg-purple-900 mt-10 mr-96 text-white p-5 rounded-full font-semibold">
            Get started for free
          </button>
        </div>
      </section>

      <section className="bg-red-900 min-h-[100vh] grid grid-cols-2">
        <div className="flex items-center gap-4 flex-col justify-center ml-[5vw] mr-[5vw] mt-56">
          <p className="text-6xl font-bold text-[#E9C0E9]">
            Share your Linktree from your Instagram, TikTok, Twitter and other
            bios
          </p>
          <p className="text-[#E9C0E9] font-bold ">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic online.
          </p>

          <button className="bg-[#E9C0E9] mt-10 mr-96 text-purple-900 p-5 rounded-full font-semibold">
            Get started for free
          </button>
        </div>
        <div className="flex items-center flex-col justify-center ml-[10vw]">
          <img className="h-[65vh] mt-20" src="sec2.png" alt="sec2" />
        </div>
      </section>

      <section className="bg-white min-h-[100vh] grid grid-cols-2">
        <div className="flex items-center flex-col justify-center ml-[10vw]">
          <img className="h-[65vh] mt-20" src="sec3.png" alt="sec3" />
        </div>
        <div className="flex items-center gap-4 flex-col justify-center ml-[5vw] mr-[5vw]">
          <p className="text-6xl font-bold text-black">
            Analyze your audience and keep your followers engaged
          </p>
          <p className="text-black font-bold px-3">
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>

          <button className="bg-[#E9C0E9] mt-10 mr-96 text-purple-900 p-5 rounded-full font-semibold">
            Get started for free
          </button>
        </div>
      </section>
    </main>
  );
}
