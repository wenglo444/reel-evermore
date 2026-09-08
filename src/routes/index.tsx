import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { photographs } from "@/data/photographs";
import { Caption, Nav } from "@/components/reel-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A PLACE ON GOOGLE EARTH" },
      {
        name: "description",
        content:
          "An endless reel of photographs. One image at a time, full screen, forever.",
      },
      { property: "og:title", content: "A PLACE ON GOOGLE EARTH" },
      {
        property: "og:description",
        content: "An endless reel of photographs, one image at a time.",
      },
    ],
  }),
  component: Page,
});

const INTERVAL = 500;

const bwIndexes = photographs
  .map((p, i) => (p.bw ? i : -1))
  .filter((i) => i >= 0);

function shuffle<T>(items: T[], avoidFirst?: T): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  if (avoidFirst !== undefined && out.length > 1 && out[0] === avoidFirst) {
    [out[0], out[1]] = [out[1]!, out[0]!];
  }
  return out;
}

// Shuffled order that always opens on a black-and-white photograph.
function shuffledQueue(avoidFirst?: number): number[] {
  const out = shuffle(photographs.map((_, i) => i), avoidFirst);
  if (bwIndexes.length > 0 && !photographs[out[0]!]?.bw) {
    const pick = bwIndexes[Math.floor(Math.random() * bwIndexes.length)]!;
    const at = out.indexOf(pick);
    [out[0], out[at]] = [out[at]!, out[0]!];
  }
  return out;
}

function Page() {
  return (
    <main className="fixed inset-0 overflow-hidden bg-background">
      <Reel />
    </main>
  );
}

function Reel() {
  const [queue, setQueue] = useState<number[]>(() => shuffledQueue());
  const [pos, setPos] = useState(0);
  const queueRef = useRef(queue);
  queueRef.current = queue;
  const sectionRef = useRef<HTMLDivElement>(null);

  const advance = useCallback(() => {
    setPos((p) => {
      const next = p + 1;
      if (next < queueRef.current.length) return next;
      const last = queueRef.current[queueRef.current.length - 1];
      setQueue(shuffledQueue(last));
      return 0;
    });
  }, []);

  // Auto-advance, paused while the tab is hidden.
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      if (document.visibilityState === "visible") {
        if (!timer) timer = setInterval(advance, INTERVAL);
      } else {
        if (timer) {
          clearInterval(timer);
          timer = undefined;
        }
      }
    };

    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [advance]);

  const current = queue[pos] ?? 0;
  const upcoming = [1, 2, 3].map((o) => queue[(pos + o) % queue.length] ?? 0);

  return (
    <div ref={sectionRef} className="absolute inset-0 overflow-hidden bg-background">
      {photographs.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt=""
          aria-hidden={i !== current}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      <div className="hidden">
        {upcoming.map((i) => (
          <link key={i} rel="preload" as="image" href={photographs[i]?.src} />
        ))}
      </div>

      <Caption />
      <Nav />
    </div>
  );
}
