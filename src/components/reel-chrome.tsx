import { Link } from "@tanstack/react-router";

export const INSTAGRAM_URL = "https://instagram.com/ecila_locatelli";

export function Nav() {
  return (
    <nav aria-label="Main navigation" className="reel-nav absolute right-[max(1.5rem,env(safe-area-inset-right))] top-[max(1.5rem,env(safe-area-inset-top))] z-30 flex items-center gap-5 text-reel-accent">
      <Link to="/about" className="reel-link">
        Talk soon
      </Link>
    </nav>
  );
}

export function Caption() {
  return (
    <p className="pointer-events-none absolute inset-x-0 top-1/2 z-30 -translate-y-1/2 px-6 text-center text-reel-accent reel-caption">
      <span>A PLACE</span>
      <span>ON</span>
      <span>GOOGLE EARTH</span>
    </p>
  );
}
