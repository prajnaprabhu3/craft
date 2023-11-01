import { FiGithub, FiTwitter } from "react-icons/fi";
import Image from "next/image";

import { contactLinks } from "@/constants/costants";

const social = [
  {
    id: "twitter",
    logo: <FiTwitter className="text-base md:text-md font-black" />,
    href: contactLinks.twitter,
  },
  {
    id: "github",
    logo: <FiGithub className="text-base md:text-md font-black" />,
    href: contactLinks.github,
  },
];

const Header: React.FC = () => {
  return (
    // <main className="flex mx-auto h-12 items-center justify-between max-w-2xl px-4 pt-4 sticky top-0 z-10 main-header backdrop-blur-md bg-header">
    <main className="mx-auto w-full h-12 top-0 sticky z-10 main-header backdrop-blur-md bg-header">
      <main className="flex items-center justify-between mx-auto max-w-2xl px-4 pt-4">
        <div className="font-semibold text-lg">craft.</div>
        {/* <Image src="/logo.png" alt="logo" height="40" width="40" /> */}

        <div className="flex gap-3">
          {social.map((item) => (
            <a
              href={item.href}
              target="_blank"
              key={item.id}
              className="hover:text-myColor delay-75 hover:font-bold hover:scale-105 transition-transform duration-150 ease-out"
            >
              {item.logo}
            </a>
          ))}
        </div>
      </main>
    </main>
  );
};

export default Header;
