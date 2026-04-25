import { getCategories, getNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetails(id);

  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetails(id);

  console.log(news);
  const { title, author, image_url, details, rating, total_view, category_id } =
    news;
  return (
    <div className="max-w-5xl mx-auto">
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center bg-slate-200 p-3">
            <div className="flex gap-2 items-center">
              <Image
                src={author?.img}
                alt="Author_img"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                {" "}
                <h2 className="font-semibold">{author?.name}</h2>
                <h2 className="text-[#797979]">{author?.published_date}</h2>
              </div>
            </div>
            <div className="flex gap-2">
              <CiShare2 size={24} />
              <CiBookmark size={24} />
            </div>
          </div>
          <h2 className="card-title">{title}</h2>

          <figure>
            <Image
              src={image_url}
              alt={title}
              width={300}
              height={300}
              className="w-full"
            />
          </figure>
          <p className="text-[#797979] ">{details}</p>

          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h2 className="font-bold text-[#797979] flex gap-2 items-center ">
                <FaStar color="#ffcd03" size={24} /> {rating.number}
              </h2>
              <h2 className="font-bold text-[#797979] flex gap-2 items-center">
                <FaEye size={24} /> {total_view}
              </h2>
            </div>
            <Link href={`/category/${category_id}`}>
              <button className="btn bg-pink-500 rounded-lg text-white font-semibold">
                Category news
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
