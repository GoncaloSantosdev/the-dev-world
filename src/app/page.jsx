// Components
import { Categories, Hero, RecentPosts, Sidebar } from "@/components";

const HomePage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <Hero />
      <Categories />
      <div className="flex flex-col lg:flex-row mt-12 gap-6">
        <RecentPosts page={page} cat={cat} />
        <div className="w-full lg:w-[30%]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
