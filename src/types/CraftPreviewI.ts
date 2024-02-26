import { StaticImageData } from "next/image";

export interface CraftPreviewI {
  id: number;
  title: string;
  details:string;
  // img: string | StaticImageData;
  href: string;
}
