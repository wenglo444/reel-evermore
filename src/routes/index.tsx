import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { photographs } from "@/data/photographs";
import { photographDelivery } from "@/data/photograph-delivery";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    const left = out[i];
    const right = out[j];
    if (left !== undefined && right !== undefined) {
      out[i] = right;
      out[j] = left;
    }
  }
  if (avoidFirst !== undefined && out.length > 1 && out[0] === avoidFirst) {
    const first = out[0];
    const second = out[1];
    if (first !== undefined && second !== undefined) {
      out[0] = second;
      out[1] = first;
    }
  }
  return out;
}

function Page() {
  return (
    <main className="reel-page fixed inset-0 overflow-hidden bg-background">
      <Reel />
    </main>
  );
}

function Reel() {
  const [sequence, setSequence] = useState(() => ({
    queue: photographs.map((_, i) => i),
    pos: 0,
  }));
  const sequenceRef = useRef(sequence);
  const imageRefs = useRef(new Map<number, HTMLImageElement>());

  // Keep SSR and hydration identical; randomize the remaining sequence after mount.
  useEffect(() => {
    const first = bwIndexes[0] ?? 0;
    const initial = {
      queue: [first, ...shuffle(photographs.map((_, i) => i).filter((i) => i !== first))],
      pos: 0,
    };
    sequenceRef.current = initial;
    setSequence(initial);

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    let stopped = false;
    let generation = 0;

    const advance = async (token: number) => {
      const tickStarted = performance.now();
      const state = sequenceRef.current;
      const nextPos = (state.pos + 1) % state.queue.length;
      const nextIndex = state.queue[nextPos];
      if (nextIndex === undefined) return;
      const image = imageRefs.current.get(nextIndex);
      if (!image) {
        if (!stopped && token === generation) timer = setTimeout(() => void advance(token), INTERVAL);
        return;
      }
      if (!image.complete || image.naturalWidth === 0) {
        try {
          await image.decode();
        } catch {
          // Retain the current photograph if a requested frame cannot load.
          if (!stopped && token === generation) timer = setTimeout(() => void advance(token), INTERVAL);
          return;
        }
      }
      if (stopped || token !== generation || document.visibilityState !== "visible" || motion.matches) return;
      const next = nextPos === 0
        ? { queue: [nextIndex, ...shuffle(state.queue.filter((i) => i !== nextIndex), nextIndex)], pos: 0 }
        : { queue: state.queue, pos: nextPos };
      sequenceRef.current = next;
      setSequence(next);
      timer = setTimeout(() => void advance(token), Math.max(0, INTERVAL - (performance.now() - tickStarted)));
    };

    const sync = () => {
      generation += 1;
      if (timer) clearTimeout(timer);
      if (document.visibilityState === "visible" && !motion.matches) {
        const token = generation;
        timer = setTimeout(() => void advance(token), INTERVAL);
      }
    };

    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    sync();
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  const current = sequence.queue[sequence.pos] ?? 0;
  const visibleIndexes = [...new Set([0, 1, 2, 3].map((offset) =>
    sequence.queue[(sequence.pos + offset) % sequence.queue.length] ?? 0,
  ))];

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {visibleIndexes.map((i) => {
        const photo = photographs[i];
        if (!photo) return null;
        const delivery = photographDelivery[photo.src];
        return (
          <picture key={photo.src}>
            {delivery && (
              <source media="(max-width: 1023px)" type="image/webp" srcSet={delivery.mobileSrcSet} sizes={delivery.mobileSizes} />
            )}
            <img
              ref={(image) => {
                if (image) imageRefs.current.set(i, image);
                else imageRefs.current.delete(i);
              }}
              src={photo.src}
              alt=""
              aria-hidden="true"
              width={delivery?.width}
              height={delivery?.height}
              decoding="async"
              loading="eager"
              fetchPriority={i === current ? "high" : "low"}
              className={`absolute inset-0 h-full w-full object-cover ${i === current ? "opacity-100" : "opacity-0"}`}
            />
          </picture>
        );
      })}

      <Caption />
      <Nav />
    </div>
  );
}
