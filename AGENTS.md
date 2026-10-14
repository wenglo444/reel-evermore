<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep mobile-only layout adjustments below 1024px; desktop typography and spacing are the visual baseline.
- Keep reel initialization deterministic during SSR and hydration, then shuffle after mount while retaining the initial B&W frame to prevent flicker.
- Render only the current and next three reel photographs and decode the next frame before advancing to limit mobile memory and avoid blank cuts.
- Preserve original public photographs; mobile WebP derivatives use separate URLs and a desktop-original picture fallback to keep hosting portable and desktop fidelity unchanged.
