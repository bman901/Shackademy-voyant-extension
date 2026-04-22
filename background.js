// background.js — service worker

const SESSION_KEY = "shackademyEnabled";

async function isEnabled() {
  const result = await chrome.storage.session.get(SESSION_KEY);
  return result[SESSION_KEY] === true;
}

async function setEnabled(value) {
  await chrome.storage.session.set({ [SESSION_KEY]: value });
}

async function updateIcon(enabled) {
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

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !tab.url?.startsWith("http")) return;

  const enabled = await isEnabled();
  const next = !enabled;
  await setEnabled(next);
  await updateIcon(next);

  if (next) {
    await injectAll(tab.id);
  } else {
    chrome.tabs.sendMessage(tab.id, { type: "SHACKADEMY_DISABLE" }).catch(() => {});
  }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;
  if (!tab.url?.startsWith("http")) return;

  const enabled = await isEnabled();
  if (!enabled) return;

  await injectAll(tabId).catch(() => {});
});