// background.js — service worker
// Manages the enabled/disabled toggle state using chrome.storage.session
// (session storage is cleared when the browser closes — good for security).

const SESSION_KEY = "shackademyEnabled";

async function isEnabled() {
  const result = await chrome.storage.session.get(SESSION_KEY);
  return result[SESSION_KEY] === true;
}

async function setEnabled(value) {
  await chrome.storage.session.set({ [SESSION_KEY]: value });
}

async function updateIcon(enabled) {
  // Visual feedback: slightly dimmed when disabled
  // (If you add proper icon assets, swap these paths out)
  await chrome.action.setTitle({
    title: enabled
      ? "Shackademy help is ON — click to disable"
      : "Shackademy help is OFF — click to enable",
  });
}

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !tab.url?.startsWith("http")) return;

  const enabled = await isEnabled();
  const next = !enabled;
  await setEnabled(next);
  await updateIcon(next);

  // Inject CSS and scripts fresh each activation
  if (next) {
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["styles.css"],
    });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["fields.js", "content.js"],
    });
  } else {
    // Send a message to the content script to tear everything down
    chrome.tabs.sendMessage(tab.id, { type: "SHACKADEMY_DISABLE" }).catch(() => {
      // Tab may not have content script yet — safe to ignore
    });
  }
});

// Re-inject on navigation within the same tab (e.g. Voyant's SPA routing)
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;
  if (!tab.url?.startsWith("http")) return;

  const enabled = await isEnabled();
  if (!enabled) return;

  await chrome.scripting.insertCSS({
    target: { tabId },
    files: ["styles.css"],
  }).catch(() => {});

  await chrome.scripting.executeScript({
    target: { tabId },
    files: ["fields.js", "content.js"],
  }).catch(() => {});
});
