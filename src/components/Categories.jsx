import Link from "next/link";
// Components
import { categoriesData } from "@/utils/categoriesData";
import { Title } from ".";

const Categories = () => {
  return (
    <section className="mt-12">
      <Title title={"Top Categories"} />

      <div className="flex flex-wrap gap-4 md:justify-between mt-8">
        {categoriesData.map((category, index) => (
          <Link
            key={index}
            href={category.path}
            className="flex items-center gap-2 rounded border px-6 py-3 hover:bg-blue-700 hover:text-white transition-all"
          >
            <h4>{category.title}</h4>
            {category.icon && <category.icon size={24} />}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
