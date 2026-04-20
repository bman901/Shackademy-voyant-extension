// content.js
// Orchestrates field enhancement, modal, and side panel.
// Depends on: fields.js (must be injected first), styles.css

(() => {
  // Guard: prevent double-initialisation
  if (window.__shackademyInitialised) return;
  window.__shackademyInitialised = true;

  // Constants
  const ENHANCED_ATTR = "data-shackademy-enhanced";
  const MODAL_ID      = "shackademy-modal";
  const BACKDROP_ID   = "shackademy-backdrop";
  const PANEL_ID      = "shackademy-panel";
  const BADGE_CLASS   = "shackademy-badge";

  // Build lookup map: for/id key -> field config
  const fieldMap = new Map(
    (window.SHACKADEMY_FIELDS || []).map((f) => [f.key, f])
  );

  // Track fields currently visible on the page: key -> { field, el }
  // Tracks whether the user has explicitly closed the panel this session
  let userClosedPanel = false;
  const visibleFields = new Map();

  // ---------------------------------------------------------------------------
  // Utilities
  // ---------------------------------------------------------------------------

  // Given a span.help-wrapper-yield, return the key from its parent <label>.
  // Prefers the `for` attribute; falls back to `id`.
  function getLabelKey(spanEl) {
    const labelEl = spanEl.closest("label");
    if (!labelEl) return null;
    return labelEl.getAttribute("for") || labelEl.getAttribute("id") || null;
  }

  // Accepts any YouTube URL format and returns the embed URL.
  //   https://www.youtube.com/watch?v=VIDEO_ID
  //   https://youtu.be/VIDEO_ID
  //   https://www.youtube.com/embed/VIDEO_ID  (passed through unchanged)
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
    } catch {
      return null;
    }
  }

  // ---------------------------------------------------------------------------
  // Find & enhance targets
  // ---------------------------------------------------------------------------

  function findTargets() {
    return Array.from(
      document.querySelectorAll("span.help-wrapper-yield")
    ).filter((el) => {
      const key = getLabelKey(el);
      return key && fieldMap.has(key);
    });
  }

  function enhanceTarget(el) {
    if (el.getAttribute(ENHANCED_ATTR) === "true") return;

    const key   = getLabelKey(el);
    const field = fieldMap.get(key);
    if (!field) return;

    el.setAttribute(ENHANCED_ATTR, "true");
    el.classList.add("shackademy-enhanced");
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-haspopup", "dialog");
    el.setAttribute("aria-label", `Open Shackademy help for ${field.label}`);

    if (!el.querySelector(`.${BADGE_CLASS}`)) {
      const badge = document.createElement("span");
      badge.className = BADGE_CLASS;
      badge.textContent = "?";
      badge.setAttribute("aria-hidden", "true");
      el.appendChild(badge);
    }

    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(field);
    });

    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(field);
      }
    });

    visibleFields.set(key, { field, el });
    updatePanel();
  }

  function runEnhancement() {
    findTargets().forEach(enhanceTarget);
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

    const hasLesson  = !!field.lessonUrl;
    const embedUrl   = toEmbedUrl(field.videoUrl);
    const hasVideo   = !!embedUrl;
    const hasTabs    = hasVideo;

    const lessonButtonHTML = hasLesson ? `
      <div class="shackademy-links">
        <a href="${field.lessonUrl}" target="_blank" rel="noopener noreferrer">
          Open full lesson on Shackademy ↗
        </a>
      </div>` : "";

    const tabsHTML = hasTabs ? `
      <div id="shackademy-tabs" role="tablist">
        <button class="shackademy-tab active" data-tab="details"
          role="tab" aria-selected="true" aria-controls="shackademy-panel-details">
          Details
        </button>
        <button class="shackademy-tab" data-tab="video"
          role="tab" aria-selected="false" aria-controls="shackademy-panel-video">
          Video
        </button>
      </div>` : "";

    const videoPanelHTML = hasVideo ? `
      <div class="shackademy-panel" data-panel="video"
        id="shackademy-panel-video" role="tabpanel">
        <iframe
          src="${embedUrl}"
          title="${field.label} help video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        ${lessonButtonHTML}
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
        <div class="shackademy-panel active" data-panel="details"
          id="shackademy-panel-details" role="tabpanel">
          <div class="shackademy-help-content">${field.helpText}</div>
          ${!hasVideo ? lessonButtonHTML : ""}
        </div>
        ${videoPanelHTML}
      </div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(modal);

    modal.querySelector("#shackademy-modal-close")
      ?.addEventListener("click", closeModal);

    modal.querySelectorAll(".shackademy-tab").forEach((tab) => {
      tab.addEventListener("click", () => switchTab(tab.dataset.tab, modal));
    });

    document.addEventListener("keydown", onEscape);
    setTimeout(() => modal.querySelector("#shackademy-modal-close")?.focus(), 50);
  }

  // ---------------------------------------------------------------------------
  // Side panel
  // ---------------------------------------------------------------------------

  function createPanel() {
    if (document.getElementById(PANEL_ID)) return;

    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.setAttribute("role", "complementary");
    panel.setAttribute("aria-label", "Shackademy field guide");
    panel.classList.add("hidden"); // start hidden; auto-opens when fields are detected

    panel.innerHTML = `
      <div id="shackademy-panel-header">
        <div id="shackademy-panel-logo">
          <span id="shackademy-panel-logo-mark">S</span>
          <span>Shackademy</span>
        </div>
        <button id="shackademy-panel-close" aria-label="Close panel">&times;</button>
      </div>
      <div id="shackademy-panel-subheader">Fields on this page</div>
      <ul id="shackademy-panel-list" role="list"></ul>
      <div id="shackademy-panel-footer">
        <a href="https://shackademy.com" target="_blank" rel="noopener noreferrer">
          Visit Shackademy ↗
        </a>
      </div>
    `;

    document.body.appendChild(panel);

    panel.querySelector("#shackademy-panel-close")
      ?.addEventListener("click", () => {
        userClosedPanel = true;
        panel.classList.add("hidden");
      });

    const toggle = document.createElement("button");
    toggle.id = "shackademy-panel-toggle";
    toggle.setAttribute("aria-label", "Open Shackademy field guide");
    toggle.innerHTML = `<span>S</span>`;
    toggle.addEventListener("click", () => {
      userClosedPanel = false;
      panel.classList.remove("hidden");
    });
    document.body.appendChild(toggle);
  }

  function updatePanel() {
    const panel = document.getElementById(PANEL_ID);
    const list  = document.getElementById("shackademy-panel-list");
    if (!list || !panel) return;

    list.innerHTML = "";

    if (visibleFields.size === 0) {
      // Auto-close when nothing is found on this page
      panel.classList.add("hidden");
      return;
    }

    // Auto-open on first detection, unless the user has manually closed it
    if (!userClosedPanel) {
      panel.classList.remove("hidden");
    }

    visibleFields.forEach(({ field, el }) => {
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

      li.querySelector("button").addEventListener("click", () => {
        openModal(field);
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      });

      list.appendChild(li);
    });
  }

  // ---------------------------------------------------------------------------
  // Teardown
  // ---------------------------------------------------------------------------

  function teardown() {
    closeModal();
    document.getElementById(PANEL_ID)?.remove();
    document.getElementById("shackademy-panel-toggle")?.remove();

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
    window.__shackademyInitialised = false;
  }

  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "SHACKADEMY_DISABLE") teardown();
  });

  // ---------------------------------------------------------------------------
  // MutationObserver & init
  // ---------------------------------------------------------------------------

  function startObserver() {
    const observer = new MutationObserver(() => runEnhancement());
    observer.observe(document.body, { childList: true, subtree: true });
    window.__shackademyObserver = observer;
  }

  createPanel();
  runEnhancement();
  startObserver();
})();