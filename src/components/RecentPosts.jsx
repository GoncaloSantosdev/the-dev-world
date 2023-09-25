// Components
import { Pagination, PostCard, Title } from ".";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const RecentPosts = async () => {
  const data = await getData();

  console.log(data);

  return (
    <section className="w-full lg:w-[70%]">
      <Title title={"Recent Posts"} />

      {data?.map((item) => (
        <PostCard item={item} key={item._id} />
      ))}

      <Pagination />
    </section>
  );
};

export default RecentPosts;
