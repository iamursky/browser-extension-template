# Browser Extension Template

Template for building cross-browser extensions using [React](https://react.dev), [TypeScript](https://www.typescriptlang.org), and [Tailwind](https://tailwindcss.com). Powered by [CRXJS](https://crxjs.dev) and [Vite](https://vite.dev).

## Run in development mode and test in a browser

0. Install dependencies:

```bash
npm ci
```

1. Run the development server:

```bash
npm run dev
```

This builds the extension to `dist` directory and watches for changes.

2. Open [chrome://extensions](chrome://extensions)
3. Enable developer mode in the top right
4. Click "Load unpacked" and select the project's `dist` directory

After making changes, reload the extension from the extensions page if necessary.

## Build for distribution

Build a production bundle:

```bash
npm run build
```

A `dist/release.zip` file will be generated, which can be uploaded to the Chrome Web Store or other extension marketplaces.

## Resources

- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions)
