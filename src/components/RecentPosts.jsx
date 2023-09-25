// Components
import { Pagination, PostCard, SearchBar, Title } from ".";

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
    <section className="w-full mt-12">
      <Title title={"Recent Posts"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts?.map((item) => (
          <div key={item._id}>
            <PostCard item={item} />
          </div>
        ))}
      </div>

      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </section>
  );
};

export default RecentPosts;
