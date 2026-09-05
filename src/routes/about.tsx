import { createFileRoute } from "@tanstack/react-router";
import { INSTAGRAM_URL } from "@/components/reel-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Drink with me — A Place on Google Earth" },
      {
        name: "description",
        content: "Contact Alice Locatelli.",
      },
      { property: "og:title", content: "Drink with me — A Place on Google Earth" },
      {
        property: "og:description",
        content: "Contact Alice Locatelli.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen bg-background px-[max(1.5rem,env(safe-area-inset-left))] py-[max(2rem,env(safe-area-inset-top))]">
      <div className="max-w-xl space-y-6 text-sm leading-relaxed text-foreground/80">
        <p className="text-foreground">Alice Locatelli</p>
        <p>
          <a href="mailto:al.locatellialice@gmail.com" className="reel-link">
            al.locatellialice@gmail.com
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="reel-link"
          >
            ecila_locatelli
          </a>
        </p>
      </div>
    </main>
  );
}
