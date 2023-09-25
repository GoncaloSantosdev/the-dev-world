import Image from "next/image";
import Link from "next/link";

const PostCard = ({ item, key }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center mt-8 gap-2 md:gap-6"
      key={key}
    >
      <Image
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
        width={500}
        height={500}
        className="rounded shadow w-full md:w-[50%] h-[40vh] md:h-[40vh] object-cover"
        alt="Post"
        priority
      />
      <div className="space-y-4 mt-6 md:mt-0">
        <p>
          11.05.2023 -{" "}
          <span className="text-blue-700 font-semibold">Category</span>
        </p>
        <h2 className="font-semibold text-lg">{item.title}</h2>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          laborum sint aspernatur.
        </p>

        <div className="mt-4">
          <Link href={"/posts/slug"} className="underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
