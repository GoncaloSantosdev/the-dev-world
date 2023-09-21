// Components
import { Pagination, PostCard, Title } from ".";

const RecentPosts = () => {
  return (
    <section className="w-full lg:w-[70%]">
      <Title title={"Recent Posts"} />
      <PostCard />
      <PostCard />
      <PostCard />
      <Pagination />
    </section>
  );
};

export default RecentPosts;
