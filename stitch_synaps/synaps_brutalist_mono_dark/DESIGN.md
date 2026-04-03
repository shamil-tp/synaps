```markdown
# Design System Specification: Dark Brutalist Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "The Terminal Curator"**

This design system is not a standard "Dark Mode" adaptation; it is a high-contrast, editorial manifesto. By stripping away the affordances of modern "soft" UI—gradients, blurs, and rounded corners—we lean into a stark, uncompromising brutalism. The goal is to move away from the "app" feel and toward a "digital broadsheet" aesthetic.

We break the "template" look through **intentional asymmetry** and **aggressive monochromaticity**. Layouts should feel like a redacted document or a high-end fashion lookbook—authoritative, raw, and meticulously precise. The system thrives on the tension between massive display typography and dense, mono-spaced data.

---

## 2. Colors & Surface Logic

### The Palette
We utilize a near-black foundation with a near-white ink to prevent the visual "vibration" that pure #000000 vs #FFFFFF causes on OLED screens.

*   **Background (`surface`):** `#141312` (The canvas)
*   **Primary Ink (`primary`):** `#ffffff` (Headers, high-contrast borders)
*   **Secondary Ink (`secondary`):** `#c6c7c5` (Subheaders, secondary actions)
*   **Muted Foreground (`on_surface_variant`):** `#c6c6c6` (De-emphasized metadata)

### The "No-Line" Rule
Traditional sectioning with 1px borders is strictly prohibited for layout division. Boundaries must be defined through:
1.  **Background Shifts:** Use `surface_container_low` (`#1d1b1a`) against `surface` (`#141312`) to define regions.
2.  **Hard Shadows:** Use the signature 4px offset to "lift" a container without a border.
3.  **Negative Space:** Rely on the Spacing Scale (specifically `spacing.12` and `spacing.16`) to create structural separation.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of industrial metal. 
*   **Base:** `surface` (`#141312`)
*   **Sectioning:** `surface_container` (`#211f1e`)
*   **Elevated Card:** `surface_container_high` (`#2b2a28`)
*   **Active/Floating Element:** `surface_bright` (`#3b3937`)

---

## 3. Typography: The Geist Monospace Aesthetic

The typography scale is designed to mimic technical documentation elevated to a luxury editorial level. 

*   **Display (Space Grotesk):** Use for hero moments. The large scale (`display-lg`: 3.5rem) should feel "too big" for the container, creating a sense of brutalist scale.
*   **Headlines (Space Grotesk):** Sharp and utilitarian.
*   **Body (Inter):** While the UI feels mono, we use Inter for body text to ensure high-performance readability. 
*   **Labels (Space Grotesk):** Always uppercase for metadata to lean into the "archival" look.

**Hierarchy Note:** Use `on_surface` for standard text and `primary` only for the most critical headers.

---

## 4. Elevation & Depth

### The Hard-Offset Shadow
In this system, depth is not "natural." It is mechanical. 
*   **The Signature Shadow:** Instead of blurs, use a hard-offset.
    *   **Value:** `4px 4px 0px 0px`
    *   **Color:** `primary` (`#ffffff`) 
    *   **Application:** Use on `surface_container_highest` cards to create a "punched-out" effect against the dark background.

### Tonal Layering
For lower-priority depth, stack surfaces:
*   Place a `surface_container_lowest` (`#0f0e0d`) element inside a `surface_container` (`#211f1e`) to create an "inset" or "carved" look.

### The "Ghost Border" Fallback
If a container requires a border for accessibility (e.g., input fields), use the `outline_variant` (`#474747`). Never use a 100% white border unless it is a primary CTA.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary` (`#ffffff`), Text `on_primary` (`#1a1c1b`). Radius `0px`. 4px Hard Shadow in `primary` on hover.
*   **Secondary:** Background `transparent`, Border 2px `primary`, Text `primary`.
*   **Tertiary:** Background `transparent`, Text `primary`, Underline on hover.

### Input Fields
*   **Default:** Background `surface_container_low`, bottom-border only (2px `outline`).
*   **Focus:** Background `surface_container_high`, 4px Hard Shadow (`#ffffff`).
*   **Error:** Border 2px `error` (`#ffb4ab`), no shadow.

### Cards & Lists
*   **No Dividers:** Lists should never use horizontal lines. Use a `1.1rem` (`spacing.5`) gap between items.
*   **Hover State:** Change the background color to `surface_container_highest` and apply the signature 4px white shadow.

### Additional Signature Component: "The Data Badge"
A specialized chip for this system:
*   **Style:** `0px` radius, `1px` border using `outline`, typography `label-sm`.
*   **Use:** For tagging status or technical metadata (e.g., [SYSTEM_OK]).

---

## 6. Do’s and Don'ts

### Do
*   **DO** use strict `0px` border-radius on everything. No exceptions.
*   **DO** use whitespace as a structural element. If a section feels crowded, double the spacing.
*   **DO** align text to a strict vertical grid. Elements should feel "locked" in place.
*   **DO** use `primary` (#ffffff) for shadows to create a high-contrast glow effect in the dark theme.

### Don't
*   **DON'T** use `backdrop-blur` or "Glassmorphism." This system is opaque, heavy, and physical.
*   **DON'T** use 1px dividers to separate content; it dilutes the brutalist impact.
*   **DON'T** use transitions longer than 150ms. Interactions should feel "clicky" and instantaneous, like a mechanical switch.
*   **DON'T** use any color outside the specified monochromatic range except for `error` states.```