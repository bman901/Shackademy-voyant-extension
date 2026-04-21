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
  // CATEGORY: Goals
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
      <p>Select the owner/s of the goal by expanding the menu and selecting / deselecting individuals by clicking on their names. You will see your selection/s in the owner window.</p>
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
    <p>Tip: If setting a preferred payment source, use the "Only Use Preferred Sources" to Pay the Expense very sparingly, if at all.
    <br><br>
    When ticked, this setting can create artificial shortfalls if the preferred source is inadequately funded to pay the linked expense. These artificial shortfalls can prevent the software’s need analysers from returning results.
    <br><br>
    <strong>When might you tick the “Only Allow…”option? </strong>
    <br>
    In most cases, we recommend only using this setting in a what-if scenario.
    <br><br>
    For example, suppose you are saving for your children’s university fees and you want to run a test to determine if you are saving enough to a particular account.
    <br><br>
    Even if the account is set as a preferred payment source, income and other assets sources will be used if the account does not have the funds to meet the linked expense.
    <br><br>
    However, by selecting the “Only Use Preferred Payment Sources” option, you could, in this scenario, test the account for adequate funding.
    </p>
    <h3>Tips</h3>
    <ul>
      <li><a href="https://support.planwithvoyant.com/hc/en-us/articles/15113841453083-How-to-set-up-a-Payment-Source-on-a-Expense-UK" target="_blank">Voyant's lesson on using Payment Sources</a></li>
    </ul>
  `,
  lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
  },

//TODO: Event

//TODO: Stage

//TODO: Income

  // ============================================================
  // CATEGORY: Savings & Investments
  // ============================================================

  // ------------------------------------------------------------
  // SUB-CATEGORY: Savings
  // ------------------------------------------------------------

  // ── Tab: Basics ──────────────────────────────────────────────

  {
    key: "ukSavingInputOwnerLabel",
    label: "Owner",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the owner/s of the Savings account by expanding the menu and selecting / deselecting individuals by clicking on their names. You will see your selection/s in the owner window.</p>
      <h3>Tips</h3>
      <ul>
        <li>Ownership defaults to the principle person. Check correct ownership for each product.</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "ukSavingInputName",
    label: "Savings Account Name",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter a distinguishable name for the account</p>
      <h3>Tips</h3>
      <ul>
        <li>Ensure you don't include any identifiable information like account numbers</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "ukSavingInputSavingType",
    label: "Account Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the type of savings account you wish to enter. This is for tax and contribution rules purposes.
      <br><br>
      The account type also determines when these assets will be accessed if needed in the plan.
      <br><br>
      <a href="https://shackademy.com/path-player?courseid=voyant&unit=67734dec1c6b5ca11b094f0cUnit" target="_blank">Learn more about the default selldown order here</a>
      </p>
      <h3>Account types</h3>
      <ul>
        <li><strong>Current accounts</strong> - A Cash Account - Interest is taxable.</li>
        <li><strong>Savings accounts</strong> - A Cash Account - Interest is taxable.</li>
        <li><strong>Cash ISAs</strong> - Treated as a Tax Free asset. Contributions will be limited to the ISA allowance</li>
        <li><strong>National Savings Certificate</strong> - Treated as a Tax Free asset. Voyant sets no contribution limits on this type of account.</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "ukSavingsInputBalance",
    label: "Balance",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the balance of the account as at today</p>
      <h3>Tips</h3>
      <ul>
        <li>The plan start date is 6th April each year</li>  
        <li>This is updated to following tax year in October each year</li>
        <li>This means there is only ever at maximum a 6 month differential in account balances</li>
        <li>You will spend 6 months of the year working in arrears, and 6 months working in advance</li>
        <li>The easiest way to approach this is to update your account balances in October and April each year</li>
        <li><a href="https://shackademy.com/path-player?courseid=voyant&unit=68e5b24f932f5484590240fdUnit" target="_blank">Our lesson on how plan years are updated is here</a></li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "growthInputGrowthType",
    label: "Grow this account by",
    helpText: `
      <h3>What to enter</h3>
      <p>Grow the account by Entered Interest Rate which you enter in the next field or by Portfolio/Holdings which will assume 100% cash growth rates on accounts in this 'Savings' section.</p>
      <h3>Tips</h3>
      <ul>
        <li>Our suggestion is to use <strong>Entered Interest Rate</strong> for all accounts until you're familiar with the impact of changing to Portfolio/Holdings.</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "toggleGrowthRateInputRate",
    label: "Interest Rate",
    helpText: `
      <h3>What to enter</h3>
      <p>This is the amount the account will be assumed to grow by each year compounded if there are no withdrawals i.e. the Interest rate of the savings account.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "contributionType",
    label: "Contribution Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select how you wish to calculate regular contributions, either as a fixed amount (with or without inflation) or as a percentage of income.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "contributionAmount",
    label: "Contribution Amount",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter here the value of any regular contributions into this account.</p>
      <h3>Tips</h3>
      <ul>
        <li>Default is set to 'Annually' but you can change this on the right hand side of the input box</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "formContributionPresentFutureValue",
    label: "Contribution Entered As",
    helpText: `
      <h3>Tips</h3>
      <ul>
        <li><strong>Present Value:</strong> If you want the expense to increase with inflation from <strong>today</strong>, choose this</li>
        <li><strong>Future Value:</strong> If you want the expense to increase with inflation from <strong>the chosen start date (Timing tab)</strong>, choose this</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "contributionPercent",
    label: "Percent of Salary",
    helpText: `
      <h3>What to enter</h3>
      <p>This will be relative to the <strong>gross</strong> salary of the owner chosen at the top of the page</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit",
  },

  // ── Tab: Withdrawal Limit ──────────────────────────────────────────────

  {
    key: "drawdownType",
    label: "Withdrawal Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Withdrawal types allow you to specify the limit up to which withdrawals may be made.
      <br><br>
      If you would like a set amount to be withdrawn from the account each year, regardless of whether Voyant classes it 'As Needed', set this up in the Planned Withdrawals screen.</p>
      <h3>Options</h3>
      <ul>
        <li><strong>Do Not Allow</strong>- Selecting 'Do Not Allow' will not allow any withdrawals from this account. The whole value of the growing account will be ringfenced from any spending. This is useful for setting up an Emergency Fund.</li>
        <li><strong>Scheduled only</strong> - This option is relevant in conjunction with a Planned Withdrawal which has selected this account. This will prevent the account being used in any other way except for the Planned withdrawal.</li>
        <li><strong>Minimum Balance</strong> - Will withdraw from the account, but not let the account go lower than the minimum balance. The Minimum Balance option is a fixed amount which does not inflate. Depending on your growth settings this account will also grow and anything above the minimum balance can be used. Also useful for setting up an Emergency Fund.</li>
        <li><strong>As Needed</strong> - This is the default option and means this account will be accessed when required and as according to the liquidation order (after the Event specified on the Timeline).*</li>
        <li><strong>Percentage</strong> - Limits the withdrawals to a maximum of this percentage out of this account annually if needed.*</li>
        <li><strong>Fixed with Inflation</strong> - Limits the withdrawals to a maximum of this fixed value if needed in the plan and also inflates the value over time.*</li>
        <li><strong>Fixed without inflation</strong> - Limits the withdrawals to a maximum of this fixed value if needed in the plan and does not inflate the value over time.*</li>
        <li><strong>Max without penalty</strong> - For bonds there is an additional option of Maximum withdrawals without penalty. This means it will limits the withdrawals to the 5%/ year for 20 years where available and if needed in the plan. *</li>
      </ul>
      <p>*Note: These payments are the maximum amount Voyant is allowed to take from the account. The withdrawals will not be used if, for example, there isn't a shortfall to be met by using savings.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit",
  },

];