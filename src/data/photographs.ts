// Photograph collection.
// To add, remove or reorder images: drop the file into public/images and add an
// entry here. Titles are internal only and never displayed.

export type Photograph = {
  /** Public image URL */
  src: string;
  /** Internal name only — never rendered */
  title?: string;
  /** Black-and-white photograph — the reel always opens on one of these */
  bw?: boolean;
};

export const photographs: Photograph[] = [
  { src: "/images/010.jpeg", title: "One way signs", bw: true },
  { src: "/images/011.jpeg", title: "Bronx local", bw: true },
  { src: "/images/012-2.jpeg", title: "Temple guardians", bw: true },
  { src: "/images/013-2.jpeg", title: "Ice cream truck", bw: true },
  { src: "/images/014.jpeg", title: "Ganesha relief", bw: true },
  { src: "/images/016.jpeg", title: "Plastic chairs", bw: true },
  { src: "/images/017.jpeg", title: "Hot pretzels", bw: true },
  { src: "/images/018-2.jpeg", title: "City steam", bw: true },
  { src: "/images/019.jpeg", title: "Food cart", bw: true },
  { src: "/images/020.jpg", title: "Sinks", bw: true },
  { src: "/images/021.jpg", title: "Clock and shoes", bw: true },
  { src: "/images/022.jpg", title: "Flowers", bw: true },
  { src: "/images/023.jpg", title: "Wires 1", bw: true },
  { src: "/images/024.jpg", title: "Wires 2", bw: true },
  { src: "/images/025.jpg", title: "Kick", bw: true },
  { src: "/images/026.jpg", title: "Blue stool" },
  { src: "/images/027.jpg", title: "Pink stool" },
  { src: "/images/028.jpg", title: "Juici Fruit" },
  { src: "/images/029.jpg", title: "Sweets" },
  { src: "/images/030.jpg", title: "Flowers boxes" },
  { src: "/images/031.jpg", title: "Plum boxes" },
  { src: "/images/032.jpg", title: "Crates" },
  { src: "/images/033.jpg", title: "Stacked chairs" },
  
  { src: "/images/035.jpg", title: "Korean stall" },
  { src: "/images/036.jpg", title: "Stacked frames" },
  { src: "/images/037.jpg", title: "Shrimp sign" },
  { src: "/images/038.jpg", title: "Market LED" },
  { src: "/images/039.jpg", title: "Dark corridor" },
  { src: "/images/041.jpg", title: "Soju crates", bw: true },
  { src: "/images/042.jpg", title: "Corridor LED", bw: true },
  { src: "/images/043.jpg", title: "Color crates" },
  { src: "/images/044.jpg", title: "Go board" },
  { src: "/images/045.JPG", title: "Korean stall night", bw: true },
  { src: "/images/046.JPG", title: "Korean alley night", bw: true },
  { src: "/images/047.JPG", title: "Market stalls", bw: true },
  { src: "/images/048.JPG", title: "Lantern", bw: true },
  { src: "/images/049.JPG", title: "Fish bags", bw: true },
  { src: "/images/050.jpg", title: "Ducks" },
  { src: "/images/051.JPG", title: "Fish bags 2" },
  { src: "/images/052.JPG", title: "Table C20" },
  { src: "/images/053.jpg", title: "Street cart" },
  { src: "/images/054.jpg", title: "Stools" },
  { src: "/images/055.jpg", title: "Door handle" },
  { src: "/images/009-2.jpeg", title: "Branches", bw: true },
  
  { src: "/images/007-2.jpeg", title: "Rahu", bw: true },
  { src: "/images/006-2.jpeg", title: "Shrine cat", bw: true },
  { src: "/images/005-2.jpeg", title: "River shrine", bw: true },
  { src: "/images/007-3.jpeg", title: "Rahu close", bw: true },
  { src: "/images/006-3.jpeg", title: "Shrine cat 2", bw: true },
  { src: "/images/005-3.jpeg", title: "River shrine 2", bw: true },
  { src: "/images/004-2.jpeg", title: "River boat", bw: true },
  { src: "/images/003-2.jpeg", title: "Buddha numbers", bw: true },
  { src: "/images/002-2.jpeg", title: "Fanta bottles", bw: true },
  { src: "/images/001-2.jpeg", title: "Ganesha workshop 2", bw: true },
  { src: "/images/056.jpg", title: "Walking", bw: true },
];
