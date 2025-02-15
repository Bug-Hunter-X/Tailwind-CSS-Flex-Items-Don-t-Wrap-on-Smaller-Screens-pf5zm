# Tailwind CSS Flex Item Wrapping Issue

This repository demonstrates a common issue encountered when using Tailwind CSS's `flex` utility class.  On smaller screens, flex items may not wrap as expected, resulting in horizontal overflow.

## Problem
The provided `bug.jsx` file shows two divs styled with Tailwind CSS.  They are placed side-by-side using `flex`, but on smaller screens they fail to wrap to the next line, leading to content overflowing.

## Solution
The `solution.jsx` file presents a solution that uses Tailwind's `flex-wrap` utility to enable wrapping of the flex items, ensuring responsive behavior across different screen sizes.

## How to reproduce
1. Clone this repository.
2. Run `npm install` (if necessary).
3. Open `index.html` in your browser.
4. Resize the browser window to observe the layout changes and the behavior difference between `bug.jsx` and `solution.jsx`.