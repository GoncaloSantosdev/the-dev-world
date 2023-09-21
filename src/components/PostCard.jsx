import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-8 gap-2 md:gap-6">
      <Image
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
        width={5010}
        height={500}
        className="rounded shadow w-full md:w-[40%] h-[40vh] md:h-[50vh] object-cover"
      />
      <div className="space-y-4 mt-6 md:mt-0">
        <p>
          11.05.2023 -{" "}
          <span className="text-blue-700 font-semibold">Category</span>
        </p>
        <h2 className="text-xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequuntur, libero!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          laborum sint aspernatur, amet accusamus aut id harum qui quaerat
          distinctio nemo nihil. Nesciunt quidem, porro illo facilis nemo culpa
          aut.
        </p>

        <div className="mt-4">
          <Link href={"/blog/:id"} className="btn-primary">
            Read More
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

export default PostCard;
