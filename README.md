# Visual Blocker

**Visual Blocker** is a simple yet effective Chrome extension that visually overrides websites you want to avoid. Instead of permanently blocking access, it replaces matching pages with a multilingual message and an animated blackout effect.

## Features

- Add or remove websites using a clean popup menu.
- Displays the phrase "Nothing here" in over 50 languages, rotating every few seconds.
- Replaces the blocked site visually, without altering DNS or browser security.
- Includes a curtain-like canvas animation for a more dynamic user experience.
- Lightweight and local — no external servers or connections involved.

## Installation

1. Download or clone this repository.
2. Open `chrome://extensions/` in Google Chrome.
3. Enable "Developer mode" (top right toggle).
4. Click "Load unpacked" and select this folder.

## How it Works

- The extension uses `declarativeNetRequest` rules to intercept and redirect URLs that match your blocked list.
- These requests are routed to a local HTML file (`blocked.html`) instead of their original destination.
- That HTML page displays a black background with rotating messages and a dynamic cloth animation (`curtain.js` and `canvas`).

## Usage

1. Click the extension icon.
2. Add a domain like `youtube.com` or `reddit.com`.
3. Visit the page — you'll see a blackout effect instead of the site.

## Use Cases

- Stay focused by visually overriding distracting sites.
- Soft-block websites without altering system-wide settings.
- Ideal for self-discipline during work or study sessions.

## Credits

- **Curtain animation**: Based on [Tearable-Cloth by Dissimulate](https://github.com/Dissimulate/Tearable-Cloth)
- **Idea and code assembly**: [@Aky233] (https://github.com/Aky233)

## License

This project is licensed under the [MIT License](./LICENSE). You're free to modify, reuse, and distribute it as you wish, as long as the license is preserved.

