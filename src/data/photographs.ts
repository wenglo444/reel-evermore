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
import pUmbrellas from "@/assets/882aec09-385b-4b2e-b19e-6f5cd7df890c.jpg.asset.json";
import pAlley from "@/assets/150e0fba-e625-4890-bf0d-effd56bbf987.jpg.asset.json";
import pStool from "@/assets/bc4268e4-19d4-4797-a914-60631ae50ca5.jpg.asset.json";
import pLantern from "@/assets/IMG_2283.JPG.asset.json";
import pShrine from "@/assets/001.jpeg.asset.json";
import pArcade from "@/assets/8beec733-1e44-4b9c-b296-ed0fc0cfc7fd.jpg.asset.json";
import pStall from "@/assets/IMG_2270.JPG.asset.json";
import pCart from "@/assets/15e22118-e6c4-43ac-bd3f-782ac0937d5d.jpg.asset.json";
import pTable from "@/assets/IMG_2284.JPG.asset.json";

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
  { src: pUmbrellas.url, title: "Umbrellas" },
  { src: pAlley.url, title: "Alley" },
  { src: pStool.url, title: "Pink stool" },
  { src: pLantern.url, title: "Lantern" },
  { src: pShrine.url, title: "Shrine" },
  { src: pArcade.url, title: "Arcade" },
  { src: pStall.url, title: "Stall" },
  { src: pCart.url, title: "Cart" },
  { src: pTable.url, title: "Table" },
];
