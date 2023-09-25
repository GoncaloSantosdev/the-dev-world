import { RecentPosts, Sidebar } from "@/components";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <section>
      <div className="bg-blue-700 text-white text-center py-4 rounded">
        <h2 className="text-xl capitalize">{cat}</h2>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 gap-6">
        <RecentPosts page={page} cat={cat} />
        <div className="w-full lg:w-[30%]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
