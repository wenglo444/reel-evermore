// Photograph collection.
// To add, remove or reorder images: upload the file, create an asset pointer
// and add an entry here. Titles are internal only and never displayed.
import p002 from "@/assets/002.jpeg.asset.json";
import p003 from "@/assets/003.jpeg.asset.json";
import p004 from "@/assets/004.jpeg.asset.json";
import p006 from "@/assets/006.jpeg.asset.json";
import p009 from "@/assets/009.jpeg.asset.json";
import pSigns from "@/assets/11d70e3d-3198-4c06-9c5f-120f331675d9.jpg.asset.json";
import pDucks from "@/assets/805bbfa0-b8f1-422e-831f-2d409f03129a.jpg.asset.json";
import pShop from "@/assets/IMG_2287.JPG.asset.json";

export type Photograph = {
  /** Public image URL */
  src: string;
  /** Internal name only — never rendered */
  title?: string;
};

export const photographs: Photograph[] = [
  { src: p002.url, title: "Offerings" },
  { src: p003.url, title: "Numbers" },
  { src: p004.url, title: "Canal" },
  { src: p006.url, title: "Cat" },
  { src: p009.url, title: "Branches" },
  { src: pSigns.url, title: "Gold signs" },
  { src: pDucks.url, title: "Ducks" },
  { src: pShop.url, title: "Shopfront" },
];
