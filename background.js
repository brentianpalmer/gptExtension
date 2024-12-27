chrome.omnibox.onInputEntered.addListener((text) => {
  // Trim the input text
  let query = text.trim();
  let url = "";

  // Check if the query starts with "c " to use ChatGPT search
  if (query.startsWith("c ")) {
    query = query.slice(2); // Remove the "c " prefix
    url = `https://chat.openai.com/search?q=${encodeURIComponent(query)}`;
  } else {
    // Default to Google search
    url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }

  // Open the new tab with the constructed URL
  chrome.tabs.create({ url: url });
});
