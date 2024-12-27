# Custom Search Toggle Chrome Extension

## Overview
The **Custom Search Toggle** Chrome Extension allows you to seamlessly toggle between Google and ChatGPT searches directly from the Chrome address bar or through a popup interface. With this extension, you can perform quick searches by typing a simple keyword or using buttons in the popup.

---

## Features
- **Omnibox Search**:
  - Type `g <query>` in the address bar to perform a Google search.
  - Type `c <query>` in the address bar to perform a ChatGPT search.
- **Popup Search Options**:
  - Use the popup to quickly launch Google or ChatGPT searches with a single click.
- **Custom Icons**:
  - The extension uses high-quality icons for a polished and professional look.

---

## Files Included
### Manifest File
**`manifest.json`** ([Source](manifest.json)):
Configures the extension and its permissions. Example:
```json
{
  "manifest_version": 3,
  "name": "Custom Search Toggle",
  "version": "1.0",
  "description": "Easily toggle between Google and ChatGPT search.",
  "omnibox": {
    "keyword": "g"
  },
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["activeTab"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon16.png",
      "48": "icon48.png",
      "128": "icon128.png"
    }
  },
  "icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}
```

### Background Script
**`background.js`** ([Source](background.js)):
Handles the omnibox search functionality. Example:
```javascript
chrome.omnibox.onInputEntered.addListener((text) => {
  let query = text.trim();
  let url = "";

  if (query.startsWith("c ")) {
    query = query.slice(2);
    url = `https://chat.openai.com/search?q=${encodeURIComponent(query)}`;
  } else {
    url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }

  chrome.tabs.create({ url: url });
});
```

### Popup Interface
**`popup.html`** ([Source](popup.html)):
Provides a user-friendly interface for quick searches. Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Custom Search Toggle</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    button { margin-top: 10px; }
  </style>
</head>
<body>
  <h3>Search Options:</h3>
  <button onclick="searchGoogle()">Google Search</button><br>
  <button onclick="searchChatGPT()">ChatGPT Search</button>

  <script>
    function searchGoogle() {
      chrome.tabs.create({ url: 'https://www.google.com/' });
    }

    function searchChatGPT() {
      chrome.tabs.create({ url: 'https://chat.openai.com/' });
    }
  </script>
</body>
</html>
```

### Icons
- `icon16.png` ([Source](icon16.png))
- `icon48.png` ([Source](icon48.png))
- `icon128.png` ([Source](icon128.png))

---

## How to Install
1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" using the toggle in the top right corner.
3. Click "Load unpacked" and select the folder containing the extension files.
4. The extension will now appear in your list of installed extensions.

---

## How to Use
### Omnibox Search
- Open the Chrome address bar.
- Type `g <your-query>` and press Enter for a Google search.
- Type `c <your-query>` and press Enter for a ChatGPT search.

### Popup Search
- Click the extension icon in the toolbar.
- Use the buttons to perform Google or ChatGPT searches instantly.

---

## License
This extension is licensed under the MIT License. Feel free to modify and distribute as needed.

---
