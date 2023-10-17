import { FaGithub } from "react-icons/fa";

const Badge = () => {
  return (
    <a
      href="https://github.com/Prajnaprabhu3/craft"
      target="_blank"
      className="flex items-center text-[10.5px] font-medium bg-white border rounded-full px-2 py-[2px]"
    >
      <FaGithub className="text-[11px] mr-1" />
      <p>Star the project on github</p>
    </a>
  );
};

export default Badge;
