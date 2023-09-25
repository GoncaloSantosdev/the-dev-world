import Image from "next/image";
import Link from "next/link";

const PostCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center mt-8 gap-2 md:gap-6">
      <Image
        src={item?.img}
        width={500}
        height={500}
        className="rounded shadow w-full h-[40vh] md:h-[40vh] object-cover"
        alt="Post"
        priority
      />
      <div className="space-y-4 mt-6 md:mt-0 w-full">
        <p>
          {item.createdAt.substring(0, 10)}-{" "}
          <span className="text-blue-700 font-semibold">{item.catSlug}</span>
        </p>

        <h2 className="font-semibold text-lg">{item.title}</h2>

        <div
          className="text-gray-500 text-sm overflow-hidden line-clamp-2"
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 100) }}
        />

        <div className="mt-4">
          <Link href={`/posts/${item.slug}`} className="underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
