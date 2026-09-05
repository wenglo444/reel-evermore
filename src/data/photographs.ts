// Photograph collection.
// To add, remove or reorder images: upload the file, create an asset pointer
// and add an entry here. Titles are internal only and never displayed.
import p002 from "@/assets/002.jpeg.asset.json";
import p003 from "@/assets/003.jpeg.asset.json";
import p004 from "@/assets/004.jpeg.asset.json";
import p005 from "@/assets/005.jpeg.asset.json";
import p006 from "@/assets/006.jpeg.asset.json";
import p007 from "@/assets/007.jpeg.asset.json";
import p009 from "@/assets/009.jpeg.asset.json";
import p012 from "@/assets/012.jpeg.asset.json";
import p013 from "@/assets/013.jpeg.asset.json";
import p018 from "@/assets/018.jpeg.asset.json";
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
import pSinks from "@/assets/000003250017.jpg.asset.json";
import pCrate from "@/assets/d8d536d9-00de-450c-b7ca-052ae7d7ff79.jpg.asset.json";
import pBlueStool from "@/assets/5b93bf96-a9d5-4b30-9c8c-e83314ededd5.jpg.asset.json";
import pStreet from "@/assets/561ac9cc-22a1-40b3-8d48-549b000fe5ef.jpg.asset.json";
import pStools from "@/assets/38adbfbd-bc8f-4dd8-b46b-38962e846d5c.jpg.asset.json";
import pPrintShop from "@/assets/97f10a6c-045c-4efe-b8df-4b888223dccf.jpg.asset.json";
import pPrintShop2 from "@/assets/97f10a6c-045c-4efe-b8df-4b888223dccf-2.jpg.asset.json";
import pBoxes from "@/assets/ea9c39d5-052a-454c-88bb-28b5a39bbce3.jpg.asset.json";
import pCorridor from "@/assets/0f72940d-9f94-4ab7-be35-8d6659423ebf.jpg.asset.json";
import pFlowers from "@/assets/b6b268a7-e7ef-4d82-8b30-6b823b98b9c5.jpg.asset.json";
import pSojuCrates from "@/assets/4cad14f7-8188-4c06-8b03-58ea44152b36.jpg.asset.json";
import pMarketBack from "@/assets/16e752a9-ad5b-4dfb-9e25-956dee24a180.jpg.asset.json";
import pLilyPad from "@/assets/65548db7-be2c-42fd-978d-dcfb0f662804.jpg.asset.json";
import pNightAlley from "@/assets/IMG_2275.JPG.asset.json";

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
  { src: p005.url, title: "House on stilts" },
  { src: p006.url, title: "Cat" },
  { src: p007.url, title: "Temple guardian" },
  { src: p009.url, title: "Branches" },
  { src: p012.url, title: "Temple door" },
  { src: p013.url, title: "Buddha and naga" },
  { src: p018.url, title: "Street scene" },
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
  { src: pSinks.url, title: "Sinks" },
  { src: pCrate.url, title: "Crate" },
  { src: pBlueStool.url, title: "Blue stool" },
  { src: pStreet.url, title: "Street" },
  { src: pStools.url, title: "Stools" },
  { src: pPrintShop.url, title: "Print shop" },
  { src: pPrintShop2.url, title: "Print shop 2" },
  { src: pBoxes.url, title: "Boxes" },
  { src: pCorridor.url, title: "Corridor" },
  { src: pFlowers.url, title: "Flowers" },
  { src: pSojuCrates.url, title: "Soju crates" },
  { src: pMarketBack.url, title: "Market back" },
  { src: pLilyPad.url, title: "Lily pad" },
  { src: pNightAlley.url, title: "Night alley" },
];
