// Components
import { Categories, Hero, RecentPosts } from "@/components";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <div className="flex flex-col lg:flex-row items-center mt-12">
        <RecentPosts />
        <div>
          <div>Popular Posts</div>
          <div>Categories</div>
          <div>Editor's Pick</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
