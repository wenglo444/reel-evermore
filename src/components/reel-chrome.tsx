export const INSTAGRAM_URL = "https://instagram.com/ecila_locatelli";

export function Nav() {
  return (
    <nav className="absolute right-[max(1.5rem,env(safe-area-inset-right))] top-[max(1.5rem,env(safe-area-inset-top))] z-30 flex items-center gap-5 text-reel-accent">
      <a href="/about" className="reel-link">
        Come say hi
      </a>
    </nav>
  );
}

export function Caption() {
  return (
    <p className="pointer-events-none absolute inset-x-0 top-1/2 z-30 -translate-y-1/2 px-6 text-center text-reel-accent reel-caption">
      A PLACE
      <br />
      ON
      <br />
      GOOGLE EARTH
    </p>

  );
}
