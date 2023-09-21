// Components
import { PostCard, Title } from ".";

const RecentPosts = () => {
  return (
    <section className="flex-1">
      <Title title={"Recent Posts"} />

      <PostCard />
      <PostCard />
      <PostCard />
    </section>
  );
};

export default RecentPosts;
