// content.js
// Orchestrates field enhancement, modal, and side panel.
// Depends on: fields.js, lessons.js, sections.js (must be injected first), styles.css

(() => {
  if (window.__shackademyInitialised) return;
  window.__shackademyInitialised = true;

  // ---------------------------------------------------------------------------
  // Constants
  // ---------------------------------------------------------------------------
  const ENHANCED_ATTR  = "data-shackademy-enhanced";
  const MODAL_ID       = "shackademy-modal";
  const BACKDROP_ID    = "shackademy-backdrop";
  const PANEL_ID       = "shackademy-panel";
  const BADGE_CLASS    = "shackademy-badge";

  // ---------------------------------------------------------------------------
  // Data
  // ---------------------------------------------------------------------------
  const fieldMap  = new Map((window.SHACKADEMY_FIELDS  || []).map((f) => [f.key, f]));
  const lessonMap   = window.SHACKADEMY_LESSONS  || {};
  const sectionMap  = window.SHACKADEMY_SECTIONS || {};

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  let userClosedPanel  = false;
  let currentSectionKey = null; // matched section key
  let currentTabKey     = null; // current tab from URL hash
  let currentItemId     = null; // itemId - stable across tab switches
  const visibleFields  = new Map(); // key -> { field, el }

  // ---------------------------------------------------------------------------
  // Utilities
  // ---------------------------------------------------------------------------

  function getLabelKey(labelEl) {
    return labelEl.getAttribute("for") || labelEl.getAttribute("id") || null;
  }

  function toEmbedUrl(url) {
    if (!url) return null;
    try {
      const u = new URL(url);
      let id = null;
      if (u.hostname.includes("youtu.be")) {
        id = u.pathname.slice(1);
      } else if (u.pathname.startsWith("/embed/")) {
        return url;
      } else {
        id = u.searchParams.get("v");
      }
      return id ? `https://www.youtube.com/embed/${id}` : null;
    } catch { return null; }
  }

  // Extract segments from Voyant's hash URL
  // Hash format: #/userId/planId/edit/itemId/tab
  function parseHash() {
    const parts = window.location.hash.split("/");
    return {
      itemId: parts.length >= 5 ? parts[4] : null,
      tab:    parts.length >= 6 ? parts[5].toLowerCase() : null,
    };
  }

  // ---------------------------------------------------------------------------
  // Context detection
  // ---------------------------------------------------------------------------

  function detectPageContext() {
    const { itemId: newItemId, tab: newTab } = parseHash();

    // Tab changed within same item - update tab key and re-render, keep section
    if (newItemId && newItemId === currentItemId && currentSectionKey) {
      currentTabKey = newTab;
      updateContextPanel();
      return;
    }

    // ItemId changed - scan DOM for a new type indicator
    currentItemId     = newItemId;
    currentTabKey     = newTab;
    currentSectionKey = null;

    for (const [sectionKey, config] of Object.entries(sectionMap)) {
      if (config.typeIndicator) {
        const el = document.querySelector(
          `label[for="${config.typeIndicator}"], label[id="${config.typeIndicator}"]`
        );
        if (el) {
          currentSectionKey = sectionKey;
          break;
        }
      }
    }

    updateContextPanel();
  }

  // ---------------------------------------------------------------------------
  // Field enhancement
  // ---------------------------------------------------------------------------

  function findTargets() {
    return Array.from(document.querySelectorAll("label")).filter((el) => {
      const key = getLabelKey(el);
      return key && fieldMap.has(key);
    });
  }

  function enhanceTarget(labelEl) {
    if (labelEl.getAttribute(ENHANCED_ATTR) === "true") return;

    const key   = getLabelKey(labelEl);
    const field = fieldMap.get(key);
    if (!field) return;

    labelEl.setAttribute(ENHANCED_ATTR, "true");
    labelEl.classList.add("shackademy-enhanced");
    labelEl.setAttribute("role", "button");
    labelEl.setAttribute("tabindex", "0");
    labelEl.setAttribute("aria-haspopup", "dialog");
    labelEl.setAttribute("aria-label", `Open Shackademy help for ${field.label}`);

    if (!labelEl.querySelector(`.${BADGE_CLASS}`)) {
      const badge = document.createElement("span");
      badge.className = BADGE_CLASS;
      badge.textContent = "?";
      badge.setAttribute("aria-hidden", "true");
      labelEl.appendChild(badge);
    }

    labelEl.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(field);
    });

    labelEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(field);
      }
    });

    visibleFields.set(key, { field, el: labelEl });
    updateFieldsPanel();
    nudgeToggle();
  }

  function runEnhancement() {
    findTargets().forEach(enhanceTarget);
  }

  function runCleanup() {
    let changed = false;
    visibleFields.forEach(({ el }, key) => {
      if (!document.body.contains(el)) {
        visibleFields.delete(key);
        changed = true;
      }
    });
    if (changed) updateFieldsPanel();
  }

  // ---------------------------------------------------------------------------
  // Modal
  // ---------------------------------------------------------------------------

  function closeModal() {
    document.getElementById(MODAL_ID)?.remove();
    document.getElementById(BACKDROP_ID)?.remove();
    document.removeEventListener("keydown", onEscape);
  }

  function onEscape(e) {
    if (e.key === "Escape") closeModal();
  }

  function switchTab(tabName, modal) {
    modal.querySelectorAll(".shackademy-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.tab === tabName);
      tab.setAttribute("aria-selected", tab.dataset.tab === tabName);
    });
    modal.querySelectorAll(".shackademy-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === tabName);
    });
  }

  function openModal(field) {
    if (document.getElementById(MODAL_ID)) closeModal();

    const hasLesson = !!field.lessonUrl;
    const embedUrl  = toEmbedUrl(field.videoUrl);
    const hasVideo  = !!embedUrl;

    const lessonButtonHTML = hasLesson ? `
      <div class="shackademy-links">
        <a href="${field.lessonUrl}" target="_blank" rel="noopener noreferrer">
          Open full lesson on Shackademy ↗
        </a>
      </div>` : "";

    const tabsHTML = hasVideo ? `
      <div id="shackademy-tabs" role="tablist">
        <button class="shackademy-tab active" data-tab="details"
          role="tab" aria-selected="true">Details</button>
        <button class="shackademy-tab" data-tab="video"
          role="tab" aria-selected="false">Video</button>
      </div>` : "";

    const videoPanelHTML = hasVideo ? `
      <div class="shackademy-panel" data-panel="video" role="tabpanel">
        <iframe src="${embedUrl}" title="${field.label} help video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>` : "";

    const backdrop = document.createElement("div");
    backdrop.id = BACKDROP_ID;
    backdrop.addEventListener("click", closeModal);

    const modal = document.createElement("div");
    modal.id = MODAL_ID;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "shackademy-modal-title");

    modal.innerHTML = `
      <div id="shackademy-modal-header">
        <div id="shackademy-modal-eyebrow">Shackademy Help</div>
        <h2 id="shackademy-modal-title">${field.label}</h2>
        <button id="shackademy-modal-close" aria-label="Close help">&times;</button>
      </div>
      ${tabsHTML}
      <div id="shackademy-modal-body">
        <div class="shackademy-panel active" data-panel="details" role="tabpanel">
          <div class="shackademy-help-content">${field.helpText}</div>
          ${lessonButtonHTML}
        </div>
        ${videoPanelHTML}
      </div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(modal);

    modal.querySelector("#shackademy-modal-close")?.addEventListener("click", closeModal);
    modal.querySelectorAll(".shackademy-tab").forEach((tab) => {
      tab.addEventListener("click", () => switchTab(tab.dataset.tab, modal));
    });

    document.addEventListener("keydown", onEscape);
    setTimeout(() => modal.querySelector("#shackademy-modal-close")?.focus(), 50);
  }

  // ---------------------------------------------------------------------------
  // Panel shell
  // ---------------------------------------------------------------------------

  function createPanel() {
    if (document.getElementById(PANEL_ID)) return;

    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.setAttribute("role", "complementary");
    panel.setAttribute("aria-label", "Shackademy field guide");
    panel.classList.add("hidden");

    panel.innerHTML = `
      <button id="shackademy-panel-tab" aria-label="Toggle Shackademy panel">
        <span>S</span>
      </button>
      <div id="shackademy-panel-header">
        <div id="shackademy-panel-logo">
          <span id="shackademy-panel-logo-mark">S</span>
          <span>Shackademy</span>
        </div>
        <button id="shackademy-panel-close" aria-label="Close panel">&times;</button>
      </div>

      <button id="shackademy-save-btn" aria-label="Save your data" hidden>
        <span id="shackademy-save-icon">✓</span>
        <span>Save - click Done in Voyant</span>
      </button>

      <div id="shackademy-panel-nav">
        <button class="shackademy-panel-nav-btn active" data-view="guide">
          Guide
        </button>
        <button class="shackademy-panel-nav-btn" data-view="fields">
          Fields
        </button>
      </div>

      <div id="shackademy-panel-views">
        <div class="shackademy-panel-view active" data-view="guide">
          <div id="shackademy-guide-content"></div>
        </div>
        <div class="shackademy-panel-view" data-view="fields">
          <ul id="shackademy-panel-list" role="list"></ul>
        </div>
      </div>

      <div id="shackademy-panel-footer">
        <a href="https://shackademy.com" target="_blank" rel="noopener noreferrer">
          Visit Shackademy ↗
        </a>
      </div>
    `;

    document.body.appendChild(panel);

    // Tab toggle
    panel.querySelector("#shackademy-panel-tab")?.addEventListener("click", () => {
      const isHidden = panel.classList.contains("hidden");
      if (isHidden) {
        userClosedPanel = false;
        panel.classList.remove("hidden");
        updateContextPanel();
      } else {
        userClosedPanel = true;
        panel.classList.add("hidden");
      }
    });

    // Close button
    panel.querySelector("#shackademy-panel-close")?.addEventListener("click", () => {
      userClosedPanel = true;
      panel.classList.add("hidden");
    });

    // Save button - clicks Voyant's real Done button
    panel.querySelector("#shackademy-save-btn")?.addEventListener("click", () => {
      const doneBtn = document.querySelector(
        'button[data-test-model-save="true"], button[aria-label="Done"]'
      );
      if (doneBtn) {
        doneBtn.click();
        userClosedPanel = true;
        panel.classList.add("hidden");
        // Hide save button and clear context immediately - 
        // don't wait for hashchange which may fire after panel reopens
        const saveBtn = document.getElementById("shackademy-save-btn");
        if (saveBtn) saveBtn.hidden = true;
        currentSectionKey = null;
        currentItemId     = null;
        currentTabKey     = null;
      } else {
        // No Done button found - flash the button to indicate nothing to save
        const btn = panel.querySelector("#shackademy-save-btn");
        btn?.classList.add("shackademy-save-unavailable");
        setTimeout(() => btn?.classList.remove("shackademy-save-unavailable"), 1500);
      }
    });

    // Panel nav (Glossary / Fields)
    panel.querySelectorAll(".shackademy-panel-nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        panel.querySelectorAll(".shackademy-panel-nav-btn").forEach((b) =>
          b.classList.remove("active")
        );
        panel.querySelectorAll(".shackademy-panel-view").forEach((v) =>
          v.classList.remove("active")
        );
        btn.classList.add("active");
        panel.querySelector(`.shackademy-panel-view[data-view="${btn.dataset.view}"]`)
          ?.classList.add("active");
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Glossary panel
  // ---------------------------------------------------------------------------

  function updateContextPanel() {
    const container = document.getElementById("shackademy-guide-content");
    if (!container) return;

    container.innerHTML = "";

    const section = currentSectionKey ? sectionMap[currentSectionKey] : null;

    if (!section) {
      container.innerHTML = `
        <p class="shackademy-panel-empty">
          Navigate to a Voyant section to see guidance and lessons here.
        </p>`;
      return;
    }

    // Show or hide the save button depending on whether a section is detected
    const saveBtn = document.getElementById("shackademy-save-btn");
    if (saveBtn) saveBtn.hidden = !section;

    // Build tab title - use TAB_LABELS lookup, fall back to capitalised key
    const tabKey    = currentTabKey || "basics";
    const tabConfig = section.tabs?.[tabKey] || section.tabs?.["basics"];
    const labelMap  = window.TAB_LABELS || {};
    const tabLabel  = labelMap[tabKey] || (tabKey.charAt(0).toUpperCase() + tabKey.slice(1));
    const title     = `${section.name} - ${tabLabel}`;

    // Section title header
    const titleEl = document.createElement("div");
    titleEl.className = "shackademy-context-title";
    titleEl.textContent = title;
    container.appendChild(titleEl);

    // Tab description
    if (tabConfig?.description) {
      const descEl = document.createElement("div");
      descEl.className = "shackademy-context-description shackademy-help-content";
      descEl.innerHTML = tabConfig.description;
      container.appendChild(descEl);
    }

    // Lessons section
    const lessons = (section.lessons || [])
      .map((k) => lessonMap[k])
      .filter(Boolean);

    if (lessons.length > 0) {
      const lessonsSection = document.createElement("div");
      lessonsSection.className = "shackademy-guide-section";
      lessonsSection.innerHTML = `<div class="shackademy-guide-section-title shackademy-section-title--lessons">Shackademy Lessons</div>`;

      lessons.forEach((lesson) => {
        const link = document.createElement("a");
        link.className = "shackademy-lesson-link";
        link.href = lesson.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = `
          <span class="shackademy-lesson-icon">▶</span>
          <span class="shackademy-lesson-title">${lesson.title}</span>
          <span class="shackademy-lesson-arrow">↗</span>
        `;
        lessonsSection.appendChild(link);
      });

      container.appendChild(lessonsSection);
    }
  }

  // ---------------------------------------------------------------------------
  // Fields panel
  // ---------------------------------------------------------------------------

  function updateFieldsPanel() {
    const panel = document.getElementById(PANEL_ID);
    const list  = document.getElementById("shackademy-panel-list");
    if (!list || !panel) return;

    list.innerHTML = "";

    if (visibleFields.size === 0) {
      const empty = document.createElement("li");
      empty.className = "shackademy-panel-empty";
      empty.textContent = "No Shackademy fields detected on this page yet.";
      list.appendChild(empty);
      return;
    }

    visibleFields.forEach(({ field }) => {
      const li = document.createElement("li");
      li.className = "shackademy-panel-item";

      li.innerHTML = `
        <button class="shackademy-panel-field-btn"
          aria-label="Open help for ${field.label}">
          <span class="shackademy-panel-field-name">${field.label}</span>
          <span class="shackademy-panel-field-badges">
            ${field.lessonUrl ? '<span class="spf-badge spf-badge--lesson">Lesson</span>' : ""}
            ${field.videoUrl  ? '<span class="spf-badge spf-badge--video">Video</span>'   : ""}
          </span>
        </button>
      `;

      li.querySelector(".shackademy-panel-field-btn").addEventListener("click", () => {
        openModal(field);
        const entry = visibleFields.get(field.key);
        if (entry) {
          entry.el.scrollIntoView({ behavior: "smooth", block: "center" });
          entry.el.focus();
        }
      });

      list.appendChild(li);
    });
  }

  // ---------------------------------------------------------------------------
  // Nudge toggle animation
  // ---------------------------------------------------------------------------

  function nudgeToggle() {
    const tab = document.getElementById("shackademy-panel-tab");
    if (!tab || tab.classList.contains("shackademy-nudge")) return;
    tab.classList.add("shackademy-nudge");
    tab.addEventListener("animationend", () => {
      tab.classList.remove("shackademy-nudge");
    }, { once: true });
  }

  // ---------------------------------------------------------------------------
  // Teardown
  // ---------------------------------------------------------------------------

  function teardown() {
    closeModal();
    document.getElementById(PANEL_ID)?.remove();

    document.querySelectorAll(`[${ENHANCED_ATTR}="true"]`).forEach((el) => {
      el.removeAttribute(ENHANCED_ATTR);
      el.classList.remove("shackademy-enhanced");
      el.removeAttribute("role");
      el.removeAttribute("tabindex");
      el.removeAttribute("aria-haspopup");
      el.removeAttribute("aria-label");
      el.querySelector(`.${BADGE_CLASS}`)?.remove();
    });

    visibleFields.clear();
    currentSectionKey = null;
    currentTabKey     = null;
    currentItemId     = null;
    window.__shackademyInitialised = false;
  }

  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "SHACKADEMY_DISABLE") teardown();
  });

  // ---------------------------------------------------------------------------
  // MutationObserver & init
  // ---------------------------------------------------------------------------

  function startObserver() {
    let debounceTimer = null;

    const observer = new MutationObserver(() => {
      // Debounce: wait for DOM to settle before running enhancement/cleanup
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        runEnhancement();
        runCleanup();
      }, 150);
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.__shackademyObserver = observer;

    // Only re-detect page context when the URL hash actually changes
    // (i.e. user navigates to a different Voyant section)
    window.addEventListener("hashchange", () => {
      detectPageContext();
    });

    // Watch for Voyant's native Done button being clicked directly
    // so we can hide the save button and clear context just as we do
    // when the user clicks our panel save button
    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest(
        'button[data-test-model-save="true"], button[aria-label="Done"], button[data-test-model-cancel="true"], button[aria-label="Cancel"]'
      );
      if (btn) {
        const saveBtn = document.getElementById("shackademy-save-btn");
        if (saveBtn) saveBtn.hidden = true;
        currentSectionKey = null;
        currentItemId     = null;
        currentTabKey     = null;
      }
    }, true); // capture phase so we catch it before Voyant's own handlers
  }

  createPanel();
  runEnhancement();
  detectPageContext();
  startObserver();
})();