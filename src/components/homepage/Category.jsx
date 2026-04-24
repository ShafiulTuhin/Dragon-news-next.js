import { getCategories } from "@/lib/data";
import Link from "next/link";
import React from "react";

const Category = async ({ isActive }) => {
  const categories = await getCategories();

  return (
    <div className="">
      <h2 className="font-bold text-lg text-[#797979] shadow-sm mb-5 p-2">
        All Categories:
      </h2>
      <ul className="flex flex-col gap-3">
        {categories.map((cat) => (
          <li
            key={cat.category_id}
            className={`${isActive === cat.category_id ? "border-2 border-pink-500" : ""}w-full rounded-md font-semibold cursor-pointer text-md`}
          >
            <Link
              href={`/category/${cat.category_id}`}
              className="block w-full bg-slate-100 py-2 text-center"
            >
              {cat.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
