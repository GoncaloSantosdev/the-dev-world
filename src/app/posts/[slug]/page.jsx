import { Comments, Sidebar, Title } from "@/components";
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-semibold">{data?.title}</h2>
          <div className="flex items-center gap-4">
            <Image
              src={data?.user.image}
              width={80}
              height={80}
              className="w-[50px] h-[50px] rounded-full"
              alt="post"
            />
            <p>
              {data?.user.name} <br /> 21.08.2023
            </p>
          </div>
        </div>
        <div className="relative h-[50vh] w-full md:w-1/2">
          <Image
            src={data?.img}
            fill
            className="absolute h-full object-cover rounded shadow"
            alt="Post"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-24 gap-6 flex-1">
        <div>
          <div
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className="mt-12">
            <Title title={"Comments"} />

            <div className="mt-8 space-y-8">
              <Comments postSlug={slug} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePostPage;
