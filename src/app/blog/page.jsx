import { RecentPosts, Sidebar } from "@/components";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <section>
      <div className="bg-blue-700 text-white text-center py-4 rounded">
        <h2 className="text-xl capitalize">{cat}</h2>
      </div>

      <RecentPosts page={page} cat={cat} />
    </section>
  );
};

export default BlogPage;
