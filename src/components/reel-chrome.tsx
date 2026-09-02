import { Link } from "@tanstack/react-router";

/** Replace with the photographer's real Instagram profile URL. */
export const INSTAGRAM_URL = "https://instagram.com/placeholder";

export function Nav() {
  return (
    <nav className="fixed right-[max(1.5rem,env(safe-area-inset-right))] top-[max(1.5rem,env(safe-area-inset-top))] z-30 flex items-center gap-5 text-reel-accent">
      <Link to="/about" className="reel-link">
        About
      </Link>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Instagram"
        className="reel-link"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </nav>
  );
}

export function Caption() {
  return (
    <p className="pointer-events-none fixed inset-x-0 top-1/2 z-30 -translate-y-1/2 px-6 text-center text-reel-accent reel-caption">
      A PLACE
      <br />
      ON
      <br />
      GOOGLE EARTH
    </p>
  );
}
