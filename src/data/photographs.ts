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
import p001_1 from "@/assets/001_1.jpeg.asset.json";
import p001_2v from "@/assets/001_2.jpeg.asset.json";
import p007_3 from "@/assets/007-3.jpeg.asset.json";
import p006_3 from "@/assets/006-3.jpeg.asset.json";
import p005_3 from "@/assets/005-3.jpeg.asset.json";
import p004_2 from "@/assets/004-2.jpeg.asset.json";
import p003_2 from "@/assets/003-2.jpeg.asset.json";
import p002_2 from "@/assets/002-2.jpeg.asset.json";
import p001_2b from "@/assets/001-2.jpeg.asset.json";
import p056 from "@/assets/056.jpg.asset.json";

export type Photograph = {
  /** Public image URL */
  src: string;
  /** Internal name only — never rendered */
  title?: string;
  /** Black-and-white photograph — the reel always opens on one of these */
  bw?: boolean;
};

export const photographs: Photograph[] = [
  { src: p010.url, title: "One way signs", bw: true },
  { src: p011.url, title: "Bronx local", bw: true },
  { src: p012_2.url, title: "Temple guardians", bw: true },
  { src: p013.url, title: "Ice cream truck", bw: true },
  { src: p014.url, title: "Ganesha relief", bw: true },
  { src: p016.url, title: "Plastic chairs", bw: true },
  { src: p017.url, title: "Hot pretzels", bw: true },
  { src: p018.url, title: "City steam", bw: true },
  { src: p019.url, title: "Food cart", bw: true },
  { src: p020.url, title: "Sinks", bw: true },
  { src: p021.url, title: "Clock and shoes", bw: true },
  { src: p022.url, title: "Flowers", bw: true },
  { src: p023.url, title: "Wires 1", bw: true },
  { src: p024.url, title: "Wires 2", bw: true },
  { src: p025.url, title: "Kick", bw: true },
  { src: p026.url, title: "Blue stool" },
  { src: p027.url, title: "Pink stool" },
  { src: p028.url, title: "Juici Fruit" },
  { src: p029.url, title: "Sweets" },
  { src: p030.url, title: "Flowers boxes" },
  { src: p031.url, title: "Plum boxes" },
  { src: p032.url, title: "Crates" },
  { src: p033.url, title: "Stacked chairs" },
  { src: p034.url, title: "Tokyo alley", bw: true },
  { src: p035.url, title: "Korean stall" },
  { src: p036.url, title: "Stacked frames" },
  { src: p037.url, title: "Shrimp sign" },
  { src: p038.url, title: "Market LED" },
  { src: p039.url, title: "Dark corridor" },
  { src: p041.url, title: "Soju crates", bw: true },
  { src: p042.url, title: "Corridor LED", bw: true },
  { src: p043.url, title: "Color crates" },
  { src: p044.url, title: "Go board" },
  { src: p045.url, title: "Korean stall night", bw: true },
  { src: p046.url, title: "Korean alley night", bw: true },
  { src: p047.url, title: "Market stalls", bw: true },
  { src: p048.url, title: "Lantern", bw: true },
  { src: p049.url, title: "Fish bags", bw: true },
  { src: p050.url, title: "Ducks" },
  { src: p051.url, title: "Fish bags 2" },
  { src: p052.url, title: "Table C20" },
  { src: p053.url, title: "Street cart" },
  { src: p054.url, title: "Stools" },
  { src: p055.url, title: "Door handle" },
  { src: p009_2.url, title: "Branches", bw: true },
  { src: p008.url, title: "Rooster", bw: true },
  { src: p007_2.url, title: "Rahu", bw: true },
  { src: p006_2.url, title: "Shrine cat", bw: true },
  { src: p005_2.url, title: "River shrine", bw: true },
  { src: p001_1.url, title: "Ganesha workshop", bw: true },
  { src: p001_2v.url, title: "Naga head", bw: true },
  { src: p007_3.url, title: "Rahu close", bw: true },
  { src: p006_3.url, title: "Shrine cat 2", bw: true },
  { src: p005_3.url, title: "River shrine 2", bw: true },
  { src: p004_2.url, title: "River boat", bw: true },
  { src: p003_2.url, title: "Buddha numbers", bw: true },
  { src: p002_2.url, title: "Fanta bottles", bw: true },
  { src: p001_2b.url, title: "Ganesha workshop 2", bw: true },
  { src: p056.url, title: "Walking", bw: true },
];
