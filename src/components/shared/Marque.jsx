import { getNewsByCategoryId } from "@/lib/data";
import React from "react";
import Marquee from "react-fast-marquee";

const Marque = async () => {
  const news = await getNewsByCategoryId("08");
  // const { title } = news;
  // console.log(title);

  console.log(news);
  return (
    <div className="flex justify-between items-center bg-slate-200 gap-4 py-2">
      <button className="btn bg-pink-600 text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        {news.map((n) => (
          <p key={n._id} className="me-10">
            {n.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;
