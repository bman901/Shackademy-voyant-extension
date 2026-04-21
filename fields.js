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
//   videoUrl  — YouTube link in any format (will be auto-converted to embed).
//
// If both lessonUrl and videoUrl are absent, the modal shows text only (no tabs).
// If only lessonUrl is present, a button appears in the Details panel (no tabs).
// If videoUrl is present, a Video tab appears alongside Details.
//
// EXAMPLES (remove // to activate):
//
// Field with lesson but no video:
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
//
// Text only, no lesson or video:
// {
//   key: "employmentInputStatePensionAge",
//   label: "State Pension Age",
//   helpText: `
//     <p>Voyant pre-fills this based on current UK government projections.</p>
//     <p>Only change it if the client has a specific reason to expect a different age.</p>
//   `,
// },
//
// Same visible label, different section:
// {
//   key: "spouseInputSalary",
//   label: "Salary (partner)",
//   helpText: `
//     <h3>Partner's salary</h3>
//     <p>Enter the partner's <strong>gross annual salary</strong> before deductions.</p>
//   `,
//   lessonUrl: "https://shackademy.com/...",
// },
// =============================================================================

window.SHACKADEMY_FIELDS = [

  // ============================================================
  // CATEGORY: People
  // ============================================================

  // ------------------------------------------------------------
  // SUB-CATEGORY: N/A
  // ------------------------------------------------------------

  // ── Tab: Basics ──────────────────────────────────────────────

  {
    key: "personInputTypeLabel",
    label: "Person type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select your relationship to this person. Voyant uses this to correctly apply tax allowances, pension rules, and income calculations for each person.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit",
  },
  {
    key: "personInputFirstName",
    label: "First name",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the first name of the person you're adding. Voyant uses this throughout the plan to label charts, reports, and projections.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit",
  },
  {
    key: "personInputLastName",
    label: "Last name",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the last name of the person you're adding. This only flows through to Voyant reports, so if you prefer you can just use an initial.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit",
  },
  {
    key: "alreadyRetiredDropdown",
    label: "Is this person already retired?",
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
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit",
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
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit",
  },

  // ============================================================
  // CATEGORY: People
  // ============================================================

  // ------------------------------------------------------------
  // SUB-CATEGORY: N/A
  // ------------------------------------------------------------

  // ── Tab: Basics ──────────────────────────────────────────────

  {
    key: "basicExpenseInputOwnerLabel",
    label: "Owner",
    helpText: `
      <h3>What to enter</h3>
      <p>Select who the expense belongs to whether an individual or multiple people.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
    videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },
  {
    key: "basicExpenseInputName",
    label: "Name",
    helpText: `
      <h3>What to enter</h3>
      <p>Use a name that resonates with you - this will show on multiple insights & when you view the timeline</p>
      <h3>Tips</h3>
      <ul>
        <li>If this is a goal that relates to a specific person, consider starting with their name</li>
        <li>e.g. "John - MBA fees"</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
    videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },
  {
    key: "basicExpenseInputAmountLabel",
    label: "Amount",
    helpText: `
      <h3>What to enter</h3>
      <p>"The value of the expense. For example, £10,000/ year is needed for this type of expense.</p>
      <h3>Tips</h3>
      <ul>
        <li>The default is 'Annual' but you can change this on the right of the input box</li>
        <li>Check 'Expenses' in the 'Year View' to validate this entry</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
    videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },
  {
    key: "interestTaxDeductible",
    label: "Tax Deductible",
    helpText: `
      <h3>What to enter</h3>
      <p>If this expense is tax deductible please ensure this is ticked and the owner is correct</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
    videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },
  {
    key: "basicExpenseGrowthLabel",
    label: "Inflation Rate",
    helpText: `
      <h3>What to enter</h3>
      <p>This expense will increase over time at this rate.</p>
      <h3>Tips</h3>
      <ul>
        <li>The default inflation rate is found in Dashboard view > Plan Settings > Inflation/Growth > Inflation Rate</li>
        <li>Changing the default rate will only affect new plans created, you will need to manually change the rate for any existing plans</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
    videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },
  {
    key: "basicExpensePresentFutureValue",
    label: "Goal entered as",
    helpText: `
      <h3>Tips</h3>
      <ul>
        <li><strong>Present Value:</strong> If you want the expense to increase with inflation from <strong>today</strong>, choose this</li>
        <li><strong>Future Value:</strong> If you want the expense to increase with inflation from <strong>the chosen start date (Timing tab)</strong>, choose this</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
    videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },

  // ── Tab: Details ──────────────────────────────────────────────

  {
    key: "goalExpenseContainerInputExpenseAmount",
    label: "Amount",
    helpText: `
      <h3>What to enter</h3>
      <p>If you entered an amount you're happy with in the 'Basics' tab, you don't have to enter anything here</p>
      <h3>Tips</h3>
      <ul>
        <li>Whatever you enter in this section will overwrite the 'Basics' tab</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
    videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },
  {
  key: "preRetirementExpenseGrowthLabel",
  label: "Inflation Rate",
  helpText: `
    <h3>What to enter</h3>
    <p>If you entered an inflation rate you're happy with in the 'Basics' tab, you don't have to enter anything here</p>
    <h3>Tips</h3>
    <ul>
      <li>Whatever you enter in this section will overwrite the 'Basics' tab</li>
    </ul>
  `,
  lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
  videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },
  {
  key: "goalsIncomeSlider",
  label: "Percentage of Income",
  helpText: `
    <h3>What to enter</h3>
    <p>If you entered an inflation rate you're happy with in the 'Basics' tab, you don't have to enter anything here.<br><br>
    Depending on who you select in the Owner field the relevant income/s will be shown above. You can choose to create this expenses as a percentage of these income/s.</p>
    <h3>Tips</h3>
    <ul>
      <li>Whatever you enter in this section will overwrite the 'Basics' tab</li>
    </ul>
  `,
  lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
  videoUrl: "https://www.youtube.com/watch?v=npuErPiZtWU",
  },

  // ── Tab: Timing ──────────────────────────────────────────────

  {
  key: "expenseFrequency",
  label: "Expense Frequency",
  helpText: `
    <h3>What to enter</h3>
    <p>This is where you can change the goal so it occurs on a less frequent basis</p>
    <h3>Tips</h3>
    <ul>
      <li>Check out the lesson for additional insights</li>
    </ul>
  `,
  lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=67d09a17a12fc6a3b002401aUnit",
  },
  
  // ── Tab: Payment Sources ──────────────────────────────────────────────

  {
  key: "usePreferredFundingItemOnly",
  label: "Preferred Payment Sources",
  helpText: `
    <h3>What to enter</h3>
    <p>Tip: If setting a preferred payment source, use the "Only Use Preferred Sources" to Pay the Expense very sparingly, if at all. When ticked, this setting can create artificial shortfalls if the preferred source is inadequately funded to pay the linked expense. These artificial shortfalls can prevent the software’s need analysers from returning results.
    <br><br>
    <strong>When might you tick the “Only Allow…”option? </strong>
    <br><br>
    In most cases, we recommend only using this setting in a what-if scenario.
    <br><br>
    For example, suppose you are saving for your children’s university fees and you want to run a test to determine if you are saving enough to a particular account.<br>
    Even if the account is set as a preferred payment source, income and other assets sources will be used if the account does not have the funds to meet the linked expense.<br>
    However, by selecting the “Only Use Preferred Payment Sources” option, you could, in this scenario, test the account for adequate funding.<br>
    </p>
    <h3>Tips</h3>
    <ul>
      <li><a href="https://support.planwithvoyant.com/hc/en-us/articles/15113841453083-How-to-set-up-a-Payment-Source-on-a-Expense-UK" target="_blank">Voyant's lesson on using Payment Sources</a></li>
    </ul>
  `,
  lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
  },



];