import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="md:flex md:items-center gap-8 md:mt-4">
      <div className="relative h-[50vh] w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
          }
          fill
          className="absolute h-full object-cover rounded shadow"
        />
      </div>

      <div className="mt-8 md:mt-0">
        <h2 className="text-xl font-semibold md:text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="mt-4 md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          repellat atque doloribus eligendi? Consectetur corporis aut quos
          libero repellat quidem.
        </p>
        <div className="mt-6 md:mt-8">
          <Link className="btn-primary" href={"/"}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
