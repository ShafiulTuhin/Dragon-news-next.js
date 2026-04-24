import Category from "@/components/homepage/Category";
import NewsByCategory from "@/components/category-news/NewsByCategory";
import SocialSidebar from "@/components/homepage/SocialSidebar";
import { getNewsByCategoryId } from "@/lib/data";

const CategoryNewsPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 container mx-auto px-4">
      {/* Category */}
      <div className="md:col-span-3 order-2 md:order-1">
        <Category isActive={id} />
      </div>

      {/* Main Content */}
      <div className="md:col-span-6 order-1 md:order-2">
        <NewsByCategory news={await getNewsByCategoryId(id)} />
      </div>

      {/* Sidebar */}
      <div className="md:col-span-3 order-3">
        <SocialSidebar />
      </div>
    </div>
  );
};

export default CategoryNewsPage;
