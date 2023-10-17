import { CraftPreviewI } from "@/app/types/CraftPreviewI";
import Image from "next/image";
import Link from "next/link";

import { BsArrowRightShort } from "react-icons/bs";

const CraftPreview = (props: CraftPreviewI, id: number) => {
  return (
    <Link
      href={props.href}
      className="w-[460px] h-fit flex flex-col items-center gap-y-2 group mx-auto bg-white  border border-gray-200 rounded-lg p-1 hover:-translate-y-0.5 duration-200 ease-out cursor-pointer"
    >
      <Image
        src={props.img}
        alt="pic"
        width="600"
        height="600"
        // sizes="(min-width: 940px) 35rem, 20rem"
        // className="absolute inset-0 h-full w-full object-cover"
        // className="absolute inset-0 h-full w-full object-cover"
        className="rounded-lg h-90"
      />

      <div className="flex py-2 gap-x-1 items-center bg-gray-100 w-full justify-center">
        <p className="text-sm font-medium">View Prototype</p>
        {/* <BsArrowRightShort className="text-xl font-semibold" /> */}
        <BsArrowRightShort className="text-xl group-hover:translate-x-1 duration-200 ease-out " />
      </div>
    </Link>
  );
};

export default CraftPreview;
