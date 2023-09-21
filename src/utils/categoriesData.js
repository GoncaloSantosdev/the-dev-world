import { FaReact } from "react-icons/fa";
import { BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";

export const categoriesData = [
  { title: "Frontend", path: "/frontend", icon: FaReact },
  { title: "Backend", path: "/backend", icon: BiLogoNodejs },
  { title: "Full-Stack", path: "/full-stack", icon: TbBrandNextjs },
  {
    title: "Web Design",
    path: "/web-design",
    icon: MdOutlineDesignServices,
  },
  { title: "Web Security", path: "/web-security", icon: AiOutlineSecurityScan },
];
