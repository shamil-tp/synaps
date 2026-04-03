# Design System Documentation

## 1. Overview & Creative North Star: "The Digital Archivalist"
This design system is a manifestation of **Functional Brutalism**. The Creative North Star is "The Digital Archivalist"—a philosophy that rejects the decorative "fluff" of modern SaaS in favor of raw, high-contrast clarity and structural honesty. 

The system moves beyond a standard grid by utilizing extreme typographic scales and intentional asymmetry. We do not use "soft" aesthetics. Every element is a deliberate statement. The interface should feel like a premium printed technical manual: stark, authoritative, and unapologetically monochromatic. By utilizing a strictly dual-tone palette, we force the user's focus onto content and hierarchy, using physical displacement (shadows and offsets) rather than color to denote interactivity.

---

## 2. Colors
The palette is restricted to a near-binary scale. This creates a high-tension environment where every pixel must earn its place.

| Token | Value | Role |
| :--- | :--- | :--- |
| `background` | `#f5f5f3` | Primary canvas (Near-white) |
| `on-background` | `#0d0c0b` | Primary text and structural strokes |
| `surface` | `#f5f5f3` | Standard component background |
| `primary` | `#0d0c0b` | High-emphasis elements and CTAs |
| `outline` | `#0d0c0b` | 1px Essential containment |
| `inverse-surface` | `#0d0c0b` | Dark mode base |
| `inverse-on-surface`| `#f5f5f3` | Dark mode typography |

### The "Stark Layering" Rule
Unlike traditional systems that use multiple shades of grey to define depth, this system relies on **binary nesting**. A container is either the background color or the inverse. To create depth, we use the `1px` border or the **Signature Hard Shadow**. 
- **The "No-Gradient" Mandate:** Absolutely no gradients or blurs. Transitions between sections are defined by a `1px` solid line or a sudden shift from `#f5f5f3` to `#0d0c0b`.

---

## 3. Typography
We utilize **Geist** for its precision and technical "monospaced-adjacent" feel.

*   **Display & Headlines:** Use `tight` tracking (-0.02em to -0.04em) and `1.0` line-height. Headlines should feel compressed, like a lead block of type.
*   **Body Copy:** Use `generous` line-height (1.6 to 1.8) to provide "breathing room" within the brutalist structure.
*   **Labels:** Always uppercase with `0.05em` letter spacing for a technical, metadata-driven appearance.

| Level | Size | Weight | Tracking |
| :--- | :--- | :--- | :--- |
| `display-lg` | 3.5rem | 700 (Bold) | -0.04em |
| `headline-md` | 1.75rem | 600 (Semi) | -0.02em |
| `title-sm` | 1.0rem | 600 (Semi) | 0 |
| `body-md` | 0.875rem | 400 (Reg) | 0 |
| `label-sm` | 0.6875rem | 500 (Med) | 0.05em (UPPERCASE) |

---

## 4. Elevation & Depth: The Kinetic Shift
We reject "ambient" lighting. In this system, depth is physical displacement.

*   **The Signature Interaction:** Interactive cards use a hard shadow—`4px 4px 0px 0px #0d0c0b`. This is not a blur; it is a solid offset.
*   **The Hover State:** On hover, the component shifts `-2px -2px` on the XY axis, while the shadow expands to `6px 6px 0px 0px`. This creates a "lift" effect that feels mechanical and tactile.
*   **The "Ghost Border":** All containers must use a `1px` solid border (`#0d0c0b`). In Dark Mode, this inverts to `#f5f5f3`. No exceptions for "borderless" cards.

---

## 5. Components

### Navbar & Footer
*   **Structure:** Fixed height, `1px` bottom/top border respectively. 
*   **Layout:** Use extreme horizontal padding (`spacing-12`). Navigation links use `label-sm` with a `1px` underline appearing only on hover.

### DocumentCard
*   **Style:** `1px` border, `0px` border-radius.
*   **Interaction:** Employs the Signature Hard Shadow.
*   **Internal Layout:** Content is padded with `spacing-4`. Metadata (date, size) is placed in the bottom right using `label-sm`.

### SubjectChip & StatusBadge
*   **SubjectChip:** Rectangular, `1px` border, `body-sm` text. On selection, invert the colors (Black background, White text).
*   **StatusBadge:** No border. `inverse-surface` (Black) background with `inverse-on-surface` (White) text. Use `label-sm` for an industrial feel.

### EmptyState
*   **Execution:** Large `display-sm` typography centered. No "cute" illustrations. Use a single `1px` box representing the missing content to reinforce the brutalist grid.

### BottomSheet & Toast
*   **BottomSheet:** Slides up from the bottom with a `2px` top border. No rounded corners. Background is `#f5f5f3`.
*   **Toast:** Positioned bottom-right. High-contrast inversion (White text on Black background). Uses the `4px 4px` hard shadow to "float" above the UI.

### Skeleton
*   **Style:** No pulsing animations. Use a static diagonal hatch pattern (`repeating-linear-gradient`) to indicate loading states. This maintains the "raw" aesthetic even during downtime.

---

## 6. Do's and Don'ts

### Do
*   **Use 0px Radius:** Everything is a sharp corner. Rounds are prohibited.
*   **Embrace White Space:** Because the contrast is high, use generous spacing (`spacing-10` and above) between sections to prevent eye strain.
*   **Align to the Edge:** Text should often be flush with the `1px` borders of its container to emphasize the grid.

### Don't
*   **No Soft Shadows:** Never use `box-shadow` with a blur radius greater than `0px`.
*   **No Grey Tones:** Stick strictly to `#0d0c0b` and `#f5f5f3`. Adding grey mid-tones dilutes the brand's authority.
*   **No Icons without Labels:** Icons are decorative; labels are functional. Always prioritize the text.
*   **No Smooth Easing:** Use `cubic-bezier(0.2, 1, 0.3, 1)` for transitions—it should feel "snappy" and mechanical, not "fluid."

---

## 7. Responsive Breakpoints
The grid scales rigidly. As the viewport shrinks, we do not hide elements; we stack them and maintain the `1px` dividers.

*   **SM (640px):** Single column, `spacing-3` gutters.
*   **MD (768px):** Two column, `spacing-4` gutters.
*   **LG (1024px):** Twelve-column modular grid, `spacing-6` gutters.