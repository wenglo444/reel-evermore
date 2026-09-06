// Photograph collection.
// To add, remove or reorder images: upload the file, create an asset pointer
// and add an entry here. Titles are internal only and never displayed.
import p010 from "@/assets/010.jpeg.asset.json";
import p011 from "@/assets/011.jpeg.asset.json";
import p012_2 from "@/assets/012-2.jpeg.asset.json";
import p013 from "@/assets/013-2.jpeg.asset.json";
import p014 from "@/assets/014.jpeg.asset.json";
import p016 from "@/assets/016.jpeg.asset.json";
import p017 from "@/assets/017.jpeg.asset.json";
import p018 from "@/assets/018-2.jpeg.asset.json";
import p019 from "@/assets/019.jpeg.asset.json";
import p020 from "@/assets/020.jpg.asset.json";
import p021 from "@/assets/021.jpg.asset.json";
import p022 from "@/assets/022.jpg.asset.json";
import p023 from "@/assets/023.jpg.asset.json";
import p024 from "@/assets/024.jpg.asset.json";
import p025 from "@/assets/025.jpg.asset.json";
import p026 from "@/assets/026.jpg.asset.json";
import p027 from "@/assets/027.jpg.asset.json";
import p028 from "@/assets/028.jpg.asset.json";
import p029 from "@/assets/029.jpg.asset.json";
import p030 from "@/assets/030.jpg.asset.json";
import p031 from "@/assets/031.jpg.asset.json";
import p032 from "@/assets/032.jpg.asset.json";
import p033 from "@/assets/033.jpg.asset.json";
import p034 from "@/assets/034.jpg.asset.json";
import p035 from "@/assets/035.jpg.asset.json";
import p036 from "@/assets/036.jpg.asset.json";
import p037 from "@/assets/037.jpg.asset.json";
import p038 from "@/assets/038.jpg.asset.json";
import p039 from "@/assets/039.jpg.asset.json";
import p041 from "@/assets/041.jpg.asset.json";
import p042 from "@/assets/042.jpg.asset.json";
import p043 from "@/assets/043.jpg.asset.json";
import p044 from "@/assets/044.jpg.asset.json";
import p045 from "@/assets/045.JPG.asset.json";
import p046 from "@/assets/046.JPG.asset.json";
import p047 from "@/assets/047.JPG.asset.json";
import p048 from "@/assets/048.JPG.asset.json";
import p049 from "@/assets/049.JPG.asset.json";
import p050 from "@/assets/050.jpg.asset.json";
import p051 from "@/assets/051.JPG.asset.json";
import p052 from "@/assets/052.JPG.asset.json";
import p053 from "@/assets/053.jpg.asset.json";
import p054 from "@/assets/054.jpg.asset.json";
import p055 from "@/assets/055.jpg.asset.json";
import p009_2 from "@/assets/009-2.jpeg.asset.json";
import p008 from "@/assets/008.jpeg.asset.json";
import p007_2 from "@/assets/007-2.jpeg.asset.json";
import p006_2 from "@/assets/006-2.jpeg.asset.json";
import p005_2 from "@/assets/005-2.jpeg.asset.json";

export type Photograph = {
  /** Public image URL */
  src: string;
  /** Internal name only — never rendered */
  title?: string;
};

export const photographs: Photograph[] = [
  { src: p010.url, title: "One way signs" },
  { src: p011.url, title: "Bronx local" },
  { src: p012_2.url, title: "Temple guardians" },
  { src: p013.url, title: "Ice cream truck" },
  { src: p014.url, title: "Ganesha relief" },
  { src: p016.url, title: "Plastic chairs" },
  { src: p017.url, title: "Hot pretzels" },
  { src: p018.url, title: "City steam" },
  { src: p019.url, title: "Food cart" },
  { src: p020.url, title: "Sinks" },
  { src: p021.url, title: "Clock and shoes" },
  { src: p022.url, title: "Flowers" },
  { src: p023.url, title: "Wires 1" },
  { src: p024.url, title: "Wires 2" },
  { src: p025.url, title: "Kick" },
  { src: p026.url, title: "Blue stool" },
  { src: p027.url, title: "Pink stool" },
  { src: p028.url, title: "Juici Fruit" },
  { src: p029.url, title: "Sweets" },
  { src: p030.url, title: "Flowers boxes" },
  { src: p031.url, title: "Plum boxes" },
  { src: p032.url, title: "Crates" },
  { src: p033.url, title: "Stacked chairs" },
  { src: p034.url, title: "Tokyo alley" },
  { src: p035.url, title: "Korean stall" },
  { src: p036.url, title: "Stacked frames" },
  { src: p037.url, title: "Shrimp sign" },
  { src: p038.url, title: "Market LED" },
  { src: p039.url, title: "Dark corridor" },
  { src: p041.url, title: "Soju crates" },
  { src: p042.url, title: "Corridor LED" },
  { src: p043.url, title: "Color crates" },
  { src: p044.url, title: "Go board" },
  { src: p045.url, title: "Korean stall night" },
  { src: p046.url, title: "Korean alley night" },
  { src: p047.url, title: "Market stalls" },
  { src: p048.url, title: "Lantern" },
  { src: p049.url, title: "Fish bags" },
  { src: p050.url, title: "Ducks" },
];
