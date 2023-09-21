// React Icons
import { BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  return (
    <div className="bg-black text-white hover:bg-white hover:text-black transition-all shadow-md px-3 py-3 rounded-full cursor-pointer">
      <BsMoon size={16} />
    </div>
  );
};

export default ThemeToggle;
