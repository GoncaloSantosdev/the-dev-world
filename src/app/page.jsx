// Components
import { Categories, Hero, RecentPosts, Sidebar } from "@/components";

const HomePage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <Hero />
      <Categories />
      <RecentPosts page={page} cat={cat} />
    </div>
  );
};

export default HomePage;
