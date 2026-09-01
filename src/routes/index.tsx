import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { photographs } from "@/data/photographs";
import { Caption, Nav } from "@/components/reel-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Place on Google Earth?" },
      {
        name: "description",
        content:
          "An endless reel of photographs. One image at a time, full screen, forever.",
      },
      { property: "og:title", content: "A Place on Google Earth?" },
      {
        property: "og:description",
        content: "An endless reel of photographs, one image at a time.",
      },
    ],
  }),
  component: Reel,
});

const INTERVAL = 2500;

function shuffle<T>(items: T[], avoidFirst?: T): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  if (avoidFirst !== undefined && out.length > 1 && out[0] === avoidFirst) {
    [out[0], out[1]] = [out[1], out[0]];
  }
  return out;
}

function Reel() {
  const [queue, setQueue] = useState<number[]>(() =>
    photographs.map((_, i) => i),
  );
  const [pos, setPos] = useState(0);
  const queueRef = useRef(queue);
  queueRef.current = queue;

  // Randomize only after mount to keep SSR/hydration stable.
  useEffect(() => {
    setQueue(shuffle(photographs.map((_, i) => i)));
  }, []);

  const advance = useCallback(() => {
    setPos((p) => {
      const next = p + 1;
      if (next < queueRef.current.length) return next;
      const last = queueRef.current[queueRef.current.length - 1];
      setQueue(shuffle(photographs.map((_, i) => i), last));
      return 0;
    });
  }, []);

  // Auto-advance, paused while the tab is hidden.
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      stop();
      timer = setInterval(advance, INTERVAL);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
    };
    const onVisibility = () =>
      document.visibilityState === "visible" ? start() : stop();

    if (document.visibilityState === "visible") start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [advance, pos]);

  // Manual forward navigation: wheel, swipe, arrow keys — one step per gesture.
  useEffect(() => {
    let locked = false;
    const step = () => {
      if (locked) return;
      locked = true;
      advance();
      setTimeout(() => (locked = false), 350);
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 6) return;
      step();
    };
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - startY) > 40) {
        startY = e.touches[0].clientY;
        step();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", " "].includes(e.key))
        step();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [advance]);

  const current = queue[pos] ?? 0;
  const upcoming = [1, 2, 3].map((o) => queue[(pos + o) % queue.length]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-background">
      {photographs.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt=""
          aria-hidden={i !== current}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ease-linear"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Warm the next frames so nothing ever flashes */}
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
