# NAVA CREATIVE — Brand Guidelines

## Logo

**Wordmark** (Poppins 700, uppercase):

```
NAVA
CREATIVE
```

- Stacked NAVA over CREATIVE, tight tracking (8/14).
- Primary: ink `#0d0c0b` on bone `#f6f5f2`.
- Accent variant: CREATIVE line in crimson `#c91512`.
- Favicon: N monogram, crimson on ink square.

## Palette

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0d0c0b` | Text, dark surfaces (off-black, never `#000`) |
| `--bone` | `#f6f5f2` | Page background (off-white, never `#fff`) |
| `--crimson` | `#c91512` | Accent, tuned from Canva `#ff0000` |
| `--muted` | `#6f6d68` | Secondary text |

## Typography

- **Poppins** (500/600/700) — display, headings, wordmark. `font-display: swap`.
- **Plus Jakarta Sans** (400/500/600) — body, UI.
- Display scale clamp: `--step-4` = `clamp(3rem, 1.85rem + 7vw, 8.875rem)` (142px desktop peak, per Canva token).

## Grid

- 12-column asymmetric grid. Sections break rhythm: home = hero + 4-col service grid + 4×3col work; team = 6/5/7/4 stagger; contact = 7/5 split.
- Collapse to single column below 768px.

## Motion

- Ease: `cubic-bezier(0.32, 0.72, 0, 1)` (out), `cubic-bezier(0.83, 0, 0.17, 1)` (inout). Durations 0.35–0.7s.
- Scroll reveal: IntersectionObserver → `.is-revealed` (opacity + translateY, GPU-safe).
- Parallax hero: CSS scroll-driven `view()` timeline.
- Image hover lift: `translateY(-0.4rem)`.
- **All motion respects `prefers-reduced-motion: reduce`** → statics.

## Do / Don't

- Do: sparse type, monochrome + one accent, editorial whitespace.
- Don't: gradients, glassmorphism on cards, 3D effects, em-dashes in copy, AI-purple, beige+brass.
