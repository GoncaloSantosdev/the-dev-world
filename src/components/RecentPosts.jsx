// Components
import { PostCard, Title } from ".";

const RecentPosts = () => {
  return (
    <section className="w-full lg:w-[70%]">
      <Title title={"Recent Posts"} />
      <PostCard />
      <PostCard />
      <PostCard />
    </section>
  );
};

export default RecentPosts;
