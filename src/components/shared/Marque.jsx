import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="flex justify-between items-center bg-slate-200 gap-4 py-2">
      <button className="btn bg-pink-600 text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ad?
        Quidem eum voluptatum dolor atque?
      </Marquee>
    </div>
  );
};

export default Marque;
