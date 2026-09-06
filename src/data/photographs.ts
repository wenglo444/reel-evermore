// Photograph collection.
// To add, remove or reorder images: upload the file, create an asset pointer
// and add an entry here. Titles are internal only and never displayed.
import p010 from "@/assets/010.jpeg.asset.json";
import p011 from "@/assets/011.jpeg.asset.json";
import p013 from "@/assets/013-2.jpeg.asset.json";
import p015 from "@/assets/015.jpeg.asset.json";
import p017 from "@/assets/017.jpeg.asset.json";
import p018 from "@/assets/018-2.jpeg.asset.json";
import p019 from "@/assets/019.jpeg.asset.json";
import p020 from "@/assets/020.jpg.asset.json";
import p021 from "@/assets/021.jpg.asset.json";
import p022 from "@/assets/022.jpg.asset.json";

export type Photograph = {
  /** Public image URL */
  src: string;
  /** Internal name only — never rendered */
  title?: string;
};

export const photographs: Photograph[] = [
  { src: p010.url, title: "One way signs" },
  { src: p011.url, title: "Bronx local" },
  { src: p013.url, title: "Ice cream truck" },
  { src: p015.url, title: "One way" },
  { src: p017.url, title: "Hot pretzels" },
  { src: p018.url, title: "City steam" },
  { src: p019.url, title: "Food cart" },
  { src: p020.url, title: "Sinks" },
  { src: p021.url, title: "Clock and shoes" },
  { src: p022.url, title: "Flowers" },
];
