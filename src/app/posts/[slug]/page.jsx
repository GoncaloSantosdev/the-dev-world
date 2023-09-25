import { Sidebar, Title } from "@/components";
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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            ab. Distinctio id nisi laudantium ipsa numquam iure ratione
            voluptatibus
          </p>
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
            src={
              "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
            }
            fill
            className="absolute h-full object-cover rounded shadow"
            alt="Post"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-24 gap-6 flex-1">
        <div className="lg:w-[70%]">
          <div
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className="mt-12">
            <Title title={"Comments"} />

            <div className="mt-8 space-y-8">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
                    width={100}
                    height={100}
                    className="w-[60px] h-[60px] rounded-full"
                    alt="post"
                  />
                  <p>
                    {data?.user.name} <br /> 21.08.2023
                  </p>
                </div>

                <p className="mt-6">
                  <span className="font-semibold">Comment: </span>Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Nihil,
                  reprehenderit!
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
                    width={100}
                    height={100}
                    className="w-[60px] h-[60px] rounded-full"
                    alt="post"
                  />
                  <p>
                    User Name <br /> 21.08.2023
                  </p>
                </div>

                <p className="mt-6">
                  <span className="font-semibold">Comment: </span>Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Nihil,
                  reprehenderit!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default SinglePostPage;
