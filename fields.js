// =============================================================================
// SHACKADEMY — VOYANT HELP FIELD CONFIGURATION
// =============================================================================
// Each entry needs:
//   key      — the value of the parent <label>'s `for` attribute, or its `id`
//              if it has no `for`. Find it by inspecting the label in DevTools.
//   label    — human-readable name, for the modal heading only (not used in logic)
//   helpText — HTML string. Use <h3>, <p>, <ul>, <li>, <strong> etc. freely.
//              This is hardcoded content so HTML is safe here.
//
// Optional:
//   lessonUrl — Shackademy lesson link. Omit if none.
//   videoUrl  — YouTube embed URL. Omit if none.
//
// If both lessonUrl and videoUrl are absent, the modal shows text only (no tabs).
// If only lessonUrl is present, a button appears in the Details panel (no tabs).
// If videoUrl is present, a Video tab appears alongside Details.
// =============================================================================

const SHACKADEMY_FIELDS = [
  {
    key: "employmentInputSalary",
    label: "Salary",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter your <strong>gross annual salary</strong> — before tax, National Insurance, and pension deductions. Voyant will handle all the tax calculations.</p>
      <h3>Tips</h3>
      <ul>
        <li>Use your contracted salary, not take-home pay</li>
        <li>Include contractual bonuses if they're guaranteed</li>
        <li>Exclude overtime unless it's a reliable, regular amount</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
    videoUrl: "https://www.youtube.com/embed/1GwBxcN9oEY",
  },

  // ── EXAMPLE — field with lesson but no video ─────────────────────────────
  // {
  //   key: "employmentInputBonuses",
  //   label: "Bonus",
  //   helpText: `
  //     <p>Enter any <strong>expected annual bonus</strong> here.</p>
  //     <ul>
  //       <li>Use an average figure if it varies year to year</li>
  //       <li>Leave blank if no bonus is expected</li>
  //     </ul>
  //   `,
  //   lessonUrl: "https://shackademy.com/...",
  // },

  // ── EXAMPLE — text only, no lesson or video ──────────────────────────────
  // {
  //   key: "employmentInputStatePensionAge",
  //   label: "State Pension Age",
  //   helpText: `
  //     <p>Voyant pre-fills this based on current UK government projections.</p>
  //     <p>Only change it if the client has a specific reason to expect a different age.</p>
  //   `,
  // },

  // ── EXAMPLE — same visible label, different section ──────────────────────
  // {
  //   key: "spouseInputSalary",
  //   label: "Salary (partner)",
  //   helpText: `
  //     <h3>Partner's salary</h3>
  //     <p>Enter the partner's <strong>gross annual salary</strong> before deductions.</p>
  //   `,
  //   lessonUrl: "https://shackademy.com/...",
  // },
];
