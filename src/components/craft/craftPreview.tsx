import { CraftPreviewI } from "@/types/CraftPreviewI";
import Image from "next/image";
import Link from "next/link";

import {ArrowRight } from "lucide-react";

const CraftPreview = (props: CraftPreviewI, id: number) => {
  return (
    <Link
      href={props.href}
      className="w-[480px] h-34 flex flex-col items-center gap-y-2 group mx-auto  py-2 px-4 rounded-lg p-1 hover:-translate-y-0.5 duration-200 ease-out cursor-pointer hover:bg-gray-100"
    >
      {/* <Image
        src={props.img}
        alt="pic"
        width="600"
        height="600"
        // sizes="(min-width: 940px) 35rem, 20rem"
        // className="absolute inset-0 h-full w-full object-cover"
        // className="absolute inset-0 h-full w-full object-cover"
        className="rounded-lg h-90"
      /> */}

      <div className="flex flex-col items-center w-full justify-center py-2">
       <div className="flex py-2 gap-x-1 items-center w-full justify-start">
         <p className="text-sm font-medium">{props.title}</p>
        <ArrowRight size={15} className="text-xl group-hover:translate-x-1 duration-200 ease-out " />
      </div>

      <p className="text-[13px] text-gray-600">{props.details}</p>
      </div>
    </Link>
  );
};

export default CraftPreview;

