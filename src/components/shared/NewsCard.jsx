import React from "react";

const NewsCard = ({ allNews }) => {
  const { title } = allNews;
  return (
    <div className="p-6 rounded-md border bg-pink-100 hover:shadow-md transition">
      {title}
    </div>
  );
};

export default NewsCard;
