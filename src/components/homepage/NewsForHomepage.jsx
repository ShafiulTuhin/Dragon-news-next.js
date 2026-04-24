import { getNewsByCategoryId } from "@/lib/data";
import NewsCard from "../shared/NewsCard";

const NewsForHomepage = async () => {
  const news = await getNewsByCategoryId("08");

  return (
    <div>
      <h2 className="font-bold text-lg text-[#797979] shadow-sm mb-5 p-2">
        All News
      </h2>

      <div className="space-y-3">
        {news.length > 0 ? (
          news
            .slice(0, 5)
            .map((n) => <NewsCard key={n._id} allNews={n}></NewsCard>)
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16 border rounded-lg bg-gray-50">
            {/* Emoji / Icon */}
            <div className="text-5xl mb-4">📰</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-700">
              No News Found
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 max-w-sm">
              Sorry, we couldnt find any news in this category. Try selecting a
              different category or check back later.
            </p>

            {/* Optional Button */}
            <button className="mt-5 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
              Refresh
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsForHomepage;
