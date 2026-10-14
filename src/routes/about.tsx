import { createFileRoute, Link } from "@tanstack/react-router";
import { INSTAGRAM_URL } from "@/components/reel-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Talk soon — A Place on Google Earth" },
      {
        name: "description",
        content: "Contact Alice Locatelli.",
      },
      { property: "og:title", content: "Talk soon — A Place on Google Earth" },
      {
        property: "og:description",
        content: "Contact Alice Locatelli.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="contact-page min-h-screen bg-reel-accent px-[max(1.5rem,env(safe-area-inset-left))] py-[max(2rem,env(safe-area-inset-top))]">
      <div className="max-w-xl space-y-6 text-sm leading-relaxed text-background">
        <p className="font-semibold">Alice Locatelli</p>
        <p>
          <a href="mailto:al.locatellialice@gmail.com" className="contact-link underline underline-offset-4">
            al.locatellialice@gmail.com
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="contact-link underline underline-offset-4"
          >
            ecila_locatelli
          </a>
        </p>
        <p>
          <Link to="/" className="contact-link underline underline-offset-4">
            Back to the photographs
          </Link>
        </p>
      </div>
    </main>
  );
}
