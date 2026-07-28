# Learning Notes: The "Invalid Hook Call" Bug

A walkthrough of a real error you hit in this project, why it happened, and the
general concepts behind it — so you recognize this pattern next time instead
of just copy-pasting a fix.

## What you saw

```
Invalid hook call. Hooks can only be called inside of the body of a function component.
Uncaught TypeError: Cannot read properties of null (reading 'useRef')
An error occurred in the <BrowserRouter> component.
```

Scary-looking, but the real cause was simple: **two packages your code imported
were never installed.**

## The actual bug

In `src/main.jsx`:

```js
import { BrowserRouter } from "react-router";
import { Toaster } from 'react-hot-toast';
```

Neither `react-router` (or `react-router-dom`) nor `react-hot-toast` existed in
`package.json` or `node_modules`. The import didn't resolve to a real
component — so `BrowserRouter` was effectively broken/undefined.

React then tried to render `<BrowserRouter>` as if it were a real component,
and internally `react-router` calls hooks like `useRef` to manage navigation
state. Since the module wasn't properly loaded, that hook call happened
outside of a valid component context — hence "Invalid hook call" and
"Cannot read properties of null."

**The lesson:** a missing/broken import rarely gives you a clean "module not
found" error in a bundler like Vite. Instead it often surfaces as a confusing
runtime error deep inside a library (React's hook system, in this case).
When you see "Invalid hook call" and you *didn't* just write a hook somewhere
weird, suspect the import chain first.

## The fix

```bash
npm install react-router-dom react-hot-toast
```

This adds both packages to `package.json` and `node_modules`. Bonus:
installing `react-router-dom` automatically also installs `react-router`
underneath it (react-router-dom is built on top of react-router), which is
why the existing `import ... from "react-router"` started working too.

## A second, unrelated bug found along the way

In `src/App.jsx`:

```jsx
import { Routes } from 'react-router'   // Route was missing here!
...
<Route path="/" element={<HomePage />} />   // used but never imported
```

This is a plain JavaScript `ReferenceError` — using a name (`Route`) that was
never imported or declared. Fixed by importing it alongside `Routes`:

```js
import { Routes, Route } from 'react-router'
```

**The lesson:** always double check that everything you *use* in a file is
either imported, defined locally, or a global. Editors/linters usually catch
this (ESLint's `no-undef` rule), but it's easy to miss when copy-pasting JSX.

## Key concepts to remember

- **`package.json`** lists the packages your project depends on and their
  version ranges. It's the "shopping list."
- **`node_modules`** is where the actual downloaded package code lives — the
  "groceries" that match the shopping list. If a package is in your code's
  `import` statements but not in `node_modules`, it will fail one way or
  another.
- **`npm install <package>`** downloads a package and adds it to both
  `package.json` and `node_modules` in one step.
- **Rules of Hooks**: hooks (`useState`, `useEffect`, `useRef`, etc.) must
  only run inside a real function component or another hook, during render.
  If you ever see "Invalid hook call" and you're sure your own code follows
  that rule, the next suspects are: (1) a broken/mismatched import like this
  one, (2) two different copies/versions of React installed at once, or (3) a
  library version mismatch (e.g. React 19 vs. an old router built for React
  17).
- **Vite dev server / HMR**: Vite compiles and serves your app on the fly. It
  will happily start up even with import errors — that's why the terminal
  looked "fine" while the browser console showed errors. Always check the
  *browser* console, not just the terminal, when debugging frontend issues.

## How to debug this class of error yourself next time

1. Read the error's *last* mentioned component (here, `<BrowserRouter>`) —
   that's usually where to start looking, not necessarily where the bug is.
2. Check that every package you `import` actually appears in
   `package.json` → `dependencies` (or `devDependencies`).
3. If it's missing, `npm install` it and restart the dev server.
4. If it *is* installed, check for duplicate copies (`npm ls react`) or
   version mismatches between React and the library.
5. Re-read the file for plain typos: unimported names, mismatched
   casing, etc.
