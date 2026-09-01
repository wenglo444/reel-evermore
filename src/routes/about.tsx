import { createFileRoute, Link } from "@tanstack/react-router";
import { INSTAGRAM_URL } from "@/components/reel-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Place on Google Earth?" },
      {
        name: "description",
        content:
          "About the photographer behind A Place on Google Earth? — an endless reel of photographs from Bangkok and elsewhere.",
      },
      { property: "og:title", content: "About — A Place on Google Earth?" },
      {
        property: "og:description",
        content: "Photographer biography, location and contact.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen bg-background px-[max(1.5rem,env(safe-area-inset-left))] py-[max(2rem,env(safe-area-inset-top))]">
      <div className="max-w-xl">
        <h1 className="reel-caption text-reel-accent">A Place on Google Earth?</h1>

        <div className="mt-14 space-y-6 text-sm leading-relaxed text-foreground/80">
          <p className="text-foreground">Lucy Nexus</p>
          <p>
            Photographs made on film, mostly at street level, mostly while walking.
            An ongoing record of ordinary arrangements — offerings, shopfronts,
            water, animals, light — collected without hierarchy and shown without
            order.
          </p>
          <p>Bangkok, Thailand</p>
          <p>
            <a href="mailto:hello@example.com" className="reel-link">
              hello@example.com
            </a>
            <span className="px-2 text-foreground/30">/</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="reel-link"
            >
              Instagram
            </a>
          </p>
        </div>

        <div className="mt-16">
          <Link to="/" className="reel-link text-reel-accent">
            ← Back to the photographs
          </Link>
        </div>
      </div>
    </main>
  );
}
