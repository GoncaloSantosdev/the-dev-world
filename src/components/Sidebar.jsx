import Link from "next/link";
import Image from "next/image";
// Components
import { Title } from ".";
// Data
import { categoriesData } from "@/utils/categoriesData";

const Sidebar = () => {
  return (
    <div className="space-y-10">
      {/* MOST POPULAR */}
      <div>
        <Title title={"Most Popular"} subtitle={"What's hot"} />

        <div className="mt-6 space-y-4">
          <div>
            <span className="bg-blue-700 text-white px-2 py-1 text-sm rounded">
              Frontend
            </span>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="mt-1">
              <span className="text-sm  text-gray-600">User - 01.09.2023</span>
            </div>
          </div>
          <div>
            <span className="bg-blue-700 text-white px-2 py-1 text-sm rounded">
              Frontend
            </span>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="mt-1">
              <span className="text-sm  text-gray-600">User - 01.09.2023</span>
            </div>
          </div>
          <div>
            <span className="bg-blue-700 text-white px-2 py-1 text-sm rounded">
              Frontend
            </span>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="mt-1">
              <span className="text-sm  text-gray-600">User - 01.09.2023</span>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div>
        <Title title={"Categories"} subtitle={"Discover By Topic"} />

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {categoriesData.map((category, index) => (
            <Link
              key={index}
              href={category.path}
              className="flex items-center gap-2 text-sm rounded border px-2 py-1 hover:bg-blue-700 hover:text-white transition-all"
            >
              <h4>{category.title}</h4>
              {category.icon && <category.icon size={24} />}
            </Link>
          ))}
        </div>
      </div>

      {/* EDITOR'S CHOICE */}
      <div>
        <Title title={"Editors Pick"} subtitle={"Chosen by the editor"} />

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
              width={100}
              height={100}
              className="w-[60px] h-[60px] rounded-full"
              alt="post"
            />
            <div>
              <span className="bg-blue-700 text-white px-2 py-1 text-sm rounded">
                Frontend
              </span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="mt-1">
                <span className="text-sm  text-gray-600">
                  User - 01.09.2023
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
              width={100}
              height={100}
              className="w-[60px] h-[60px] rounded-full"
              alt="post"
            />
            <div>
              <span className="bg-blue-700 text-white px-2 py-1 text-sm rounded">
                Frontend
              </span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="mt-1">
                <span className="text-sm  text-gray-600">
                  User - 01.09.2023
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3006&q=80"
              width={100}
              height={100}
              className="w-[60px] h-[60px] rounded-full"
              alt="post"
            />
            <div>
              <span className="bg-blue-700 text-white px-2 py-1 text-sm rounded">
                Frontend
              </span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="mt-1">
                <span className="text-sm text-gray-600">User - 01.09.2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
