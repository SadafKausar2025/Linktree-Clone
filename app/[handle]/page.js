import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  // If the handle is already claimed, you cannot create the bittree
  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return notFound();
  }

  const item2 = {
    _id: {
      $oid: "6733733d93c0712a068a11ce",
    },
    links: [
      {
        link: "facebook.com",
        linktext: "facebook",
      },
      {
        link: "insta.com",
        linktext: "instagram",
      },
      {
        link: "twitter.com",
        linktext: "twitter",
      },
    ],
    handle: "sadaf",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHqCdfHbbksZFYPDTOQZUyOIpJNnwfhemGA&s",
  };

  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
      {item && (
        <div className="photo flex flex-col items-center justify-center gap-4">
          <img className="h-24 w-24 rounded-full" src={item.pic} alt="" />
          <span className="font-bold text-xl">@{item.handle}</span>
          <span className="font-bold text-xl">@{item.desc}</span>
          <span className="desc w-80 text-center">
            Made to Travel. For help, please follow one of our customer support
            links below.
          </span>
          <div className="links">
            {item.links.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <div className="min-w-96 text-center py-4 px-2 shadow-lg bg-purple-100 rounded-xl my-3">
                    {item.linktext}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
