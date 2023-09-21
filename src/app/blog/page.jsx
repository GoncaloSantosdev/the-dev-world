import { RecentPosts, Sidebar, Title } from "@/components";

const BlogPage = () => {
  return (
    <section>
      <div className="bg-blue-700 text-white text-center py-4 rounded">
        <h2 className="text-xl">Category</h2>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 gap-6">
        <RecentPosts />
        <div className="w-full lg:w-[30%]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
