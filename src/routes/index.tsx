import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { photographs } from "@/data/photographs";
import { Caption, Nav, INSTAGRAM_URL } from "@/components/reel-chrome";

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

const INTERVAL = 800;

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
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  // Preload every photograph before the reel begins.
  useEffect(() => {
    let done = 0;
    let cancelled = false;
    const total = photographs.length;
    const tick = () => {
      if (cancelled) return;
      done += 1;
      setProgress(Math.round((done / total) * 100));
      if (done >= total) setTimeout(() => !cancelled && setReady(true), 250);
    };
    photographs.forEach((p) => {
      const img = new Image();
      img.onload = tick;
      img.onerror = tick;
      img.src = p.src;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return <Loader progress={progress} />;
  return <Scroller />;
}

function Loader({ progress }: { progress: number }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-start bg-background p-[max(1.5rem,env(safe-area-inset-left))]">
      <p className="reel-caption text-reel-accent tabular-nums">{progress}%</p>
    </div>
  );
}

function Scroller() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll bg-background">
      <section className="relative h-screen w-full snap-start">
        <Reel />
      </section>

      <section className="relative flex h-screen w-full snap-start items-start bg-reel-accent px-[max(1.5rem,env(safe-area-inset-left))] py-[max(2rem,env(safe-area-inset-top))]">
        <div className="max-w-xl space-y-6 text-sm leading-relaxed text-background">
          <p className="font-semibold">Alice Locatelli</p>
          <p>
            <a
              href="mailto:al.locatellialice@gmail.com"
              className="underline underline-offset-4"
            >
              al.locatellialice@gmail.com
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4"
            >
              ecila_locatelli
            </a>
          </p>
          <p>
            <Link to="/" className="underline underline-offset-4">
              Back to the photographs
            </Link>
          </p>
        </div>
      </section>

      <section className="min-h-screen w-full snap-start bg-background p-[max(0.5rem,env(safe-area-inset-left))]">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {photographs.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
      </section>
    </div>
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

  // Auto-advance, paused while the tab is hidden or the reel is scrolled away.
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    let visibleOnScreen = true;
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
    };
    const sync = () => {
      const active =
        visibleOnScreen && document.visibilityState === "visible";
      if (active) {
        if (!timer) timer = setInterval(advance, INTERVAL);
      } else {
        stop();
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleOnScreen = (entry?.intersectionRatio ?? 0) > 0.5;
        sync();
      },
      { threshold: [0, 0.5, 1] },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      stop();
      io.disconnect();
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
