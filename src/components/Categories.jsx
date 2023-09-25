import Link from "next/link";
// Components
import { Title } from ".";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Categories = async () => {
  const data = await getData();

  return (
    <section className="mt-12">
      <Title title={"Top Categories"} />

      <div className="flex flex-wrap gap-4 md:justify-between mt-8">
        {data?.map((category) => (
          <Link
            key={category.id}
            href="/blog?cat=style"
            className="flex items-center gap-2 rounded border px-6 py-3 hover:bg-blue-700 hover:text-white transition-all"
          >
            <h4>{category.title}</h4>
            {/* <category.image /> */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
