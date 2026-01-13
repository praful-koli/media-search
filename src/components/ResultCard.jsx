import React from "react";

function ResultCard({ item }) {
  console.log(item);

  return (
    <div className="w-full h-full relative ">
      {item.type == "photo" ? (
        <img className="object-cover w-full h-full" src={item.src} alt="" />
      ) : (
        ""
      )}
      {item.type == "video" ? (
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          src={item.src}
          alt=""
        ></video>
      ) : (
        ""
      )}
      {item.type == "GIF" ? (
        <img className="object-cover w-full h-full" src={item.src} alt="" />
      ) : (
        ""
      )}

      <button className=" absolute bottom-3 right-3 px-2 text-[12px] py-1 rounded-md bg-blue-600">
        Collection
      </button>
      <p className=" absolute bottom-3 left-3 text-white px-2 text-[16px] py-1 ">
        {item.title}
      </p>
    </div>
  );
}

export default ResultCard;
