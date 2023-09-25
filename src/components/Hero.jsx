import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-4">
      <div className="relative h-[40vh] w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
          }
          fill
          objectFit="cover"
          className="rounded-md shadow"
          alt="bg-image"
          priority
        />

        {/* Apply a semi-transparent overlay */}
        <div className="absolute h-full w-full flex items-center justify-center bg-black bg-opacity-60">
          <h2 className="text-white text-xl font-semibold px-4 w-full md:w-[60%] text-center">
            Explore the latest trends, best practices, and expert insights to
            elevate your web development skills!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
