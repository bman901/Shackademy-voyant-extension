// background.js — service worker
// Persists enabled state across browser sessions using chrome.storage.local.
// Uses activeTab only — user must click the toolbar button while on Voyant.

const STORAGE_KEY = "shackademyEnabled";
const VOYANT_DOMAIN = "planwithvoyant.co.uk";

function isVoyantTab(url) {
  try {
    return new URL(url).hostname.endsWith(VOYANT_DOMAIN);
  } catch {
    return false;
  }
}

async function isEnabled() {
  const result = await chrome.storage.local.get(STORAGE_KEY);
  return result[STORAGE_KEY] === true;
}

async function setEnabled(value) {
  await chrome.storage.local.set({ [STORAGE_KEY]: value });
}

async function updateTitle(enabled) {
  await chrome.action.setTitle({
    title: enabled
      ? "Shackademy help is ON — click to disable"
      : "Shackademy help is OFF — click to enable",
  });
}

async function injectAll(tabId) {
  await chrome.scripting.insertCSS({
    target: { tabId },
    files: ["styles.css"],
  });
  await chrome.scripting.executeScript({
    target: { tabId },
    files: ["fields.js", "lessons.js", "sections.js", "content.js"],
  });
}

// Toolbar click — only activate on Voyant tabs
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !isVoyantTab(tab.url)) return;

  const enabled = await isEnabled();
  const next = !enabled;
  await setEnabled(next);
  await updateTitle(next);

  if (next) {
    await injectAll(tab.id);
  } else {
    chrome.tabs.sendMessage(tab.id, { type: "SHACKADEMY_DISABLE" }).catch(() => {});
  }
});

// Restore correct toolbar title on browser startup
chrome.runtime.onStartup.addListener(async () => {
  const enabled = await isEnabled();
  await updateTitle(enabled);
});