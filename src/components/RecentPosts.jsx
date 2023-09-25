// Components
import { Pagination, PostCard, Title } from ".";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const RecentPosts = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <section className="w-full lg:w-[70%]">
      <Title title={"Recent Posts"} />

      {posts?.map((item) => (
        <PostCard item={item} key={item._id} />
      ))}

      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </section>
  );
};

export default RecentPosts;
