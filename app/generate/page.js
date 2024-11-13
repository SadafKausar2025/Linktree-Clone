"use client";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Generate = () => {
  // const [link, setlink] = useState("");
  // const [linktext, setlinktext] = useState("");
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLinks = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
      desc: desc,
    });

    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    // toast(result.message);
    if (result.success) {
      // toast.success(result.message);
      setLinks([]);
      setpic("");
      sethandle("");
    }
    // } else {
    //   // toast.error(result.message);
    // }
  };

  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
      {/* <ToastContainer /> */}
      <div className="col1 flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-5 my-10 ml-20">
          <h1 className="font-bold text-2xl mt-20">Create your Linktree</h1>
          <div className="item">
            <h2 className="font-semibold ">Step1: Claim your Handle</h2>
            <div className="mx-4">
              <input
                value={handle || ""}
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
                className="px-4 py-2 rounded-full focus:outline-pink-400"
                type="text"
                placeholder="Choose your handle"
              />
            </div>
          </div>
          <div className="item">
            <h2 className="font-semibold">Step2: Add Your Links</h2>
            {links &&
              links.map((item, index) => {
                return (
                  <div key={index} className="mx-4 my-2 flex gap-3">
                    <input
                      value={item.linktext || ""}
                      onChange={(e) => {
                        handleChange(index, item.link, e.target.value);
                      }}
                      className="p-5 px-4 py-2 rounded-full focus:outline-pink-400"
                      type="text"
                      placeholder="Enter link text"
                    />
                    <input
                      value={item.link || ""}
                      onChange={(e) => {
                        handleChange(index, e.target.value, item.linktext);
                      }}
                      className="px-4 py-2 rounded-full focus:outline-pink-400"
                      type="text"
                      placeholder="Enter link"
                    />
                  </div>
                );
              })}
            <button
              onClick={() => addLinks()}
              className="mt-3 p-5 py-2 mx-2 bg-slate-700 rounded-2xl font-bold text-white">
              + Add links
            </button>
          </div>
          <div className="item">
            <h2 className="font-semibold">
              Step3: Add your picture and Description
            </h2>
            <div className="mx-4 flex flex-col gap-2">
              <input
                value={pic || ""}
                onChange={(e) => {
                  setpic(e.target.value);
                }}
                className="px-4 py-2 rounded-full focus:outline-pink-400"
                type="text"
                placeholder="Enter link of your picture"
              />
              <input
                value={desc || ""}
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                className="px-4 py-2 rounded-full focus:outline-pink-400"
                type="text"
                placeholder="Enter link of your description"
              />
              <button
                disabled={pic == "" || handle == "" || links[0].linktext == ""}
                onClick={() => {
                  submitLinks();
                }}
                className="disabled:bg-slate-500 w-fit my-5 p-5 py-2 mx-2 bg-slate-700 rounded-2xl font-bold text-white">
                Create your Linktree
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen object-contain">
        <img className="h-full" src="/game.png" alt="game" />
      </div>
    </div>
  );
};

export default Generate;
