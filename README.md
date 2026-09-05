# Endless Frame

Build a minimal, editorial photography portfolio website. It should feel more like an endless photographic reel than a conventional portfolio.

Core experience

The homepage is a continuous, infinite sequence of photographs.

Show one photograph at a time, full screen, occupying the entire browser viewport.

Every photo appears in exactly the same position and dimensions. Do not create a masonry layout, gallery grid, cards, thumbnails, columns, or visible carousel controls.

Photos should use object-fit: cover so they fill the screen while preserving their proportions.

Automatically replace the current photograph with another photograph every 2.5 seconds.

Randomize the photograph order. Avoid showing the same image twice consecutively.

Once all photographs have appeared, reshuffle them and continue indefinitely.

The experience should feel like an endless reel of images.

Use a very subtle transition between photographs — either an extremely quick crossfade or direct cut. Do not use sliding animations.

The image itself should remain stationary. New photographs simply replace the previous photograph in the exact same frame.

Preload the next images so there is never a white flash or loading gap.

Pause automatic changing when the browser tab is inactive and resume when the user returns.

The user should also be able to scroll/swipe forward through the photographs manually, while the automatic 2–3 second progression continues when they are not interacting. Scrolling should snap cleanly from one full-screen photograph to the next and continue indefinitely.

Text overlay

Place the sentence:

“A Place on Google Earth?”

over every photograph.

The text should:

be bright yellow

remain in the exact same fixed position while photographs change

sit above the photography rather than belonging to individual images

use a clean sans-serif typeface

feel editorial, slightly enigmatic and contemporary

be clearly readable but not oversized

have no box, background panel, shadow, gradient or decorative treatment

Position it around the lower-left area of the screen with generous margins.

Navigation

Add a very minimal fixed navigation menu that remains visible above the images.

It should contain only:

About
Instagram icon

Keep the navigation small and understated.

No header bar, no logo container, no background behind the navigation.

Clicking About should open a very simple About page or overlay containing:

photographer name

short biography

location if desired

contact email

The About view should preserve the same minimal visual language and include an obvious but understated way to return to the photographs.

Clicking the Instagram icon should open the photographer’s Instagram profile in a new browser tab.

Use a placeholder Instagram URL that I can easily replace later.

Visual direction

The website should feel closer to an artist photography book, contemporary art exhibition website, or independent photographer portfolio than a commercial photography website.

Think:

raw

restrained

cinematic

editorial

slightly strange

lots of photography, almost no interface

no obvious “website template” aesthetic

Do NOT add:

portfolio categories

thumbnails

project cards

image captions

arrows

dots

progress bars

buttons over the photographs

gradients

rounded cards

shadows

testimonials

contact forms

footer sections

decorative animations

generic landing-page sections

The photographs are the interface.

Responsive behaviour

Desktop, tablet and mobile should all preserve the same concept.

On mobile:

photographs still occupy the entire visible screen

use vertical swipe gestures naturally

keep “A Place on Google Earth?” and navigation fixed above the photographs

account for mobile browser viewport changes

maintain readable margins around the text

Image management

Create a simple data structure / CMS collection for photographs so I can easily upload, remove and reorder images later without editing the page layout.

Each photograph only needs:

image

optional title/internal name

Do not display the title publicly.

Start with placeholder photographs until I upload the final images.

Overall principle

The final result should feel as though the visitor has opened a photographic transmission that simply keeps going forever.

There should be almost nothing on screen except:

the photograph

the yellow sentence “A Place on Google Earth?”

About

Instagram

Prioritize the photography and interaction over conventional website structure.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cb8287dd-ba7b-4662-a3d5-1e7132c54fb9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
