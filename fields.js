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

const SHACKADEMY_FIELDS = [

  // ============================================================
  // CATEGORY: People
  // ============================================================

  // ------------------------------------------------------------
  // SUB-CATEGORY: N/A
  // ------------------------------------------------------------

  // ── Tab: Basics ──────────────────────────────────────

  {
    key: "personInputTypeLabel",
    label: "Person type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select your relationship to this person. Voyant uses this to correctly apply tax allowances, pension rules, and income calculations for each person.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit"
  },
  {
    key: "personInputFirstName",
    label: "First name",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the first name of the person you're adding. Voyant uses this throughout the plan to label charts, reports, and projections.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit"
  },
  {
    key: "personInputLastName",
    label: "Last name",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the last name of the person you're adding. This only flows through to Voyant reports, so if you prefer you can just use an initial</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit"
  },
  {
    key: "alreadyRetiredDropdown",
    label: "Is this personal already retired?",
    helpText: `
      <h3>What to enter</h3>
      <p>Select <strong>Yes</strong> if this person has already stopped working. Select <strong>No</strong> if they are still working, even part-time.</p>
      <h3>Tips</h3>
      <ul>
        <li>If they're semi-retired but still earning any employment income, select No</li>
        <li>This affects how Voyant models their income and can be tricky to change to 'No' if you select 'Yes' accidentally</li>
        <li>You can adjust retirement timing later using the timeline</li>
        <li>If you have any issues with this, please ask in the community or contact Ben</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit"
  },
  {
    key: "retirementAge",
    label: "Retirement Age",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the age at which this person plans to fully stop working. Voyant uses this as the point at which employment income ends by default.</p>
      <h3>Tips</h3>
      <ul>
        <li>Use a realistic target age rather than an aspirational one — you can always model alternatives later using Voyant's 'What if' tools</li>
        <li>You can adjust retirement timing later using the timeline</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit"
  },

];
