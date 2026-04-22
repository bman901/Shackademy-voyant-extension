// =============================================================================
// SHACKADEMY - VOYANT HELP FIELD CONFIGURATION
// =============================================================================
// Each entry needs:
//   key      - the value of the parent <label>'s `for` attribute, or its `id`
//              if it has no `for`. Find it by inspecting the label in DevTools.
//   label    - human-readable name, for the modal heading only (not used in logic)
//   helpText - HTML string. Use <h3>, <p>, <ul>, <li>, <strong> etc. freely.
//              This is hardcoded content so HTML is safe here.
//
// Optional:
//   lessonUrl - Shackademy lesson link. Omit if none.
//   videoUrl  - YouTube link in any format (will be auto-converted to embed).
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
        <li>If you have any issues with this, please ask in the community or get in touch</li>
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
        <li>Use a realistic target age rather than an aspirational one - you can always model alternatives later using Voyant's 'What if' tools</li>
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
      <p>Enter the value of this goal. For example, if you need £10,000 per year for school fees, enter £10,000 here.</p>
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
    <p>Depending on who you select in the Owner field the relevant income/s will be shown above. You can choose to create this expenses as a percentage of these income/s.</p>
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
      <li>For example, enter '2' for a biennial expense. The amount you entered will apply for each occurrence.</li>
      <li>Check out the lesson below for additional details.</li>
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
    <p>If setting a preferred payment source, use the "Only Use Preferred Sources" to Pay the Expense very sparingly, if at all.
    <br><br>
    When ticked, this setting can create artificial shortfalls if the preferred source is inadequately funded to pay the linked expense. These artificial shortfalls can prevent the software’s need analysers from returning results.
    <br><br>
    <strong>When might you tick the “Only Use…”option? </strong>
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
        <li>Ownership defaults to the principal person. Check correct ownership for each product.</li>
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
        <li>It may make it easier later to include the owner's name in the name</li>
        <li>e.g. "Jane ABC current account"</li>
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
      <h3>Where can I see these contributions after I've set them up?</h3>
      <ul>
        <li>Contributions are included in the black line of the Let's See chart, so setting up contributions when you didn't have them previously will push the black line up higher</li>
        <li>You will also see contributions in the Year View > Expenses tab to see the contribution as an Expense</li>
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
        <li><strong>Do Not Allow</strong> - Selecting 'Do Not Allow' will not allow any withdrawals from this account. The whole value of the growing account will be ringfenced from any spending. This is useful for setting up an Emergency Fund.</li>
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

  // ------------------------------------------------------------
  // SUB-CATEGORY: Investments
  // ------------------------------------------------------------

  // ── Tab: Basics ──────────────────────────────────────────────

  {
    key: "investmentInputOwnerLabel",
    label: "Owner",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the owner/s of the Investment account by expanding the menu and selecting / deselecting individuals by clicking on their names. You will see your selection/s in the owner window.</p>
      <h3>Tips</h3>
      <ul>
        <li>Ownership defaults to the principal person. Check correct ownership for each product.</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit",
  },
  {
    key: "investmentInputName",
    label: "Investment Account Name",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter a distinguishable name for the account</p>
      <h3>Tips</h3>
      <ul>
        <li>It may make it easier later to include the owner's name in the name</li>
        <li>e.g. "Jane ABC ISA"</li>
        <li>Ensure you don't include any identifiable information like account numbers</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit"
  },
  {
    key: "investmentInputInvesmentType",
    label: "Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the type of Investment accounts you wish to enter. This is for tax and contribution rules purposes. The account type also determines when these assets will be accessed if needed in the plan.</p>
      <h3>Types of Account</h3>
      <ul>
        <li><strong>Bypass Trust & Loan Trusts</strong> - Trusts do not form part of the liquidation order. Voyant will not take adhoc/as needed withdrawals to fulfil expenses.</li>
        <li><strong>Discounted Gift Trusts (DGT)</strong> - A DGT does not form part of the liquidation order however the software will make automatic planned withdrawals from the investment.<sup>1</sup></li>
        <li><strong>Enterprise Investment Schemes (EIS)</strong> - EIS investments do not form part of the liquidation order. Adhoc withdrawals will not be taken from these investments. If withdrawals are needed these will need to be set up as Planned Withdrawals.<sup>2</sup></li>
        <li><strong>Lifetime ISA</strong> - Treated as a Tax Free asset. Voyant will not access until the owner is over the required age.</li>
        <li><strong>Onshore bond</strong> - Treated as a Tax Deferred asset. Voyant will treat withdrawals as tax deferred up to the allowance.</li>
        <li><strong>Offshore bond</strong> - Treated as a Tax Deferred asset. Voyant will treat withdrawals as tax deferred up to the allowance.</li>
        <li><strong>Offshore Taxable</strong> - Treated as a Tax Deferred asset. With this investment you can set the level of taxation as you choose.<sup>3</sup></li>
        <li><strong>Stocks Market ISA/ Junior ISA</strong> - Treated by Voyant as a Tax Free asset. Voyant will use the appropriate ISA allowance depending on whether an adult or child is selected as the owner.</li>
        <li><strong>Unwrapped investments</strong> - Treated as a Taxable asset. Voyant use unwrapped investments as the catch-all category for all manner of Taxable investments that are not subject to the special tax treatments. OEICs, unit trusts, equity holdings, stocks and shares, individual equities, businesses and even properties can all be modelled under the guise of unwrapped investments.</li>
        <li><strong>Venture Capital Trusts (VCT)</strong> - VCT's do not form part of the liquidation order. Adhoc withdrawals will not be taken from these investments. If withdrawals are needed these will need to be set up as Planned Withdrawals.<sup>4</sup></li>
      </ul>
      <p><sup>1</sup><a href="https://support.planwithvoyant.com/hc/en-us/articles/4409206089499-Adding-Trusts-Loan-Trusts-DGTs-and-Other-Trusts" target="_blank">This article</a> will help explain how to enter Loan Trusts, DGT's and Other Trusts in more detail
      <br>
      <sup>2</sup><a href="https://support.planwithvoyant.com/hc/en-us/articles/200870009-EISs-How-to-enter-and-tax-treatment-of-Enterprise-Investment-Schemes-UK" target="_blank">This article</a> will explain how to enter an EIS and the tax treatment applicable;
      <br>
      <sup>3</sup><a href="https://support.planwithvoyant.com/hc/en-us/articles/38738632029723-Offshore-taxable-Investment-UK" target="_blank">This article</a> will explain how to model offshore taxable investments;
      <br>
      <sup>4</sup><a href="https://support.planwithvoyant.com/hc/en-us/articles/4406520094107-VCTs-How-to-enter-and-tax-treatment-of-Venture-Capital-Trusts-UK" target="_blank">This article</a> will explain how to enter an VCT and the tax treatment applicable;
      </p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit",
  },
  {
    key: "investmentInputBalanceLabel",
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
      <br>
      <h3>Additional Notes</h3>
      <ul>
        <li><strong>VCT/EIS</strong> - Enter the balance as at the start of the plan if the investment is an existing investment. For new purchases leave the balance at £0</li>
        <li><strong>Bypass Trusts</strong> - Balance would usually be £0 as this is a Trust set up to receive pension benefits on death. The Loan amount will be the original amount inherited in the Bypass Trust.</li>
        <li><strong>Loan Trusts</strong> - Enter the current balance of the trust itself under Balance and the Balance of the Loan under Loan Balance.</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit",
  },
  {
    key: "investmentInputPurchaseYear",
    label: "Year Purchased",
    helpText: `
      <h3>What to enter</h3>  
      <p>Enter the year the bond was originally purchased. This is needed for tax calculations.</p>
    `,
  },
  {
    key: "investmentInputPurchaseValue",
    label: "Purchase Value",
    helpText: `
      <h3>What to enter</h3>  
      <p>Enter the original purchase value. This is needed for tax calculations.</p>
      <h3>Additional notes</h3>
      <ul>
        <li><strong>Investment Bond</strong> - Enter the original investment amount.</li>
        <li><strong>Unwrapped Investments</strong> - This field determines the Capital Gains Tax (CGT) applicable to any gains within the investment. If this box is left blank the software will assume that the whole amount is liable to CGT.</li>
        <li><strong>Loan Balance (applicable to Loans Trusts only)</strong> - Input the balance of the loan as at the start date of the plan under 'Loan Balance'.</li>
        <li><strong>Loan Amount (applicable to Bypass Trusts only)</strong> - Input the amount that was originally inherited into the Bypass Trust.</li>
        <li><strong>Discounted Gift Trust</strong> - Input the original investment amount</li>
      </ul>
    `,
  },
  {
    key: "investmentInputDeathPayoutType",
    label: "Insurance Payout",
    helpText: `
      <h3>What to enter</h3>  
      <p>Select how the bond value is treated on death. For single-life bonds, the full value is paid out on death and will appear in the Legacy screen. For jointly-owned bonds with 'Last to Die' selected, the payout will not appear in the cash flow - check the Legacy screen to see this.</p>
    `,
  },
  {
    key: "investmentIhtExemptYear",
    label: "Year qualifying for IHT exemption",
    helpText: `
      <h3>What to enter</h3>  
      <p><strong>Existing Investments</strong>
      <br><br>
      The date in the 'Qualifies for IHT Relief' only applies to existing investments. This field is not relevant to Transfers and New/Regular contributions into a BPR/APR investment.
      <br><br>
      'Year Qualifying for IHT Exemption' this is the date that the relief will be given i.e. after the 2 year qualifying period.
      <br><br>
      <strong>New Investments</strong>
      <br><br>
      For new investments, IHT relief occurs 2 years after the transfer or contribution made into the investment. The 'Year Qualifying for IHT Exemption' field will be left blank in this instance and the software will determine the correct year in which IHT relief will apply.
      <br><br>
      If you are entering multiple transfers into a new investment, these would be best entered as separate investments to allow the software to start the 2 year clock after each investment.
      <br><br>
      Please bear in mind that in the software, mortality is assumed to occur at the start of the year, whereas transfers occur at the end of the year.
      <br><br>
      This means that for an investment set up by a transfer in 2024, IHT relief will apply from the end of 2026 (2 years) i.e. showing on the software at the start of 2027. We would expect to see the BPR relief from 2027 onwards."</p>
    `,
  },
  {
    key: "investmentIhtExemptionApplies",
    label: "Qualifies for IHT Relief (BPR/APR)",
    helpText: `
      <h3>What to enter</h3>
      <p>Toggle this on if this investment qualifies for Business Property Relief (BPR) or Agricultural Property Relief (APR), which can reduce or eliminate the IHT liability on this asset.</p>
      <h3>Tips</h3>
      <ul>
        <li>Business Property Relief reduces the value for IHT of the asset transferred. The asset must have been owned throughout the two years period prior to transfer. BPR is given at different rates depending on the asset.</li>
        <li>Agricultural Property Relief is available for transfers of relevant property made either during life or on death.</li>
      </ul>
    `,
  },
  {
    key: "investmentInputCurrentSegments",
    label: "Current Segments",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the number of segments currently in force or, if it is a new purchase, to be purchased.</p>
      <h3>Tips</h3>
      <ul>
        <li>The system will always default to 1 segment. If you are unsure of the number of segments within the Bond we would suggest that you enter 100 segments and follow up with your provider.</li>
      </ul>
    `,
  },
  {
    key: "investmentInputRemainingCostBasis",
    label: "Remaining Principal/Cost Basis",
    helpText: `
      <h3>What to enter</h3>
      <p>This is the total remaining value of all invested principal, i.e. original investment, plus any top-ups, less tax-deferred withdrawals.
      <br><br>
      This value should reflect the 'cost basis' of the asset as at the plan start date.
      <br><br>
      For example:
      <br>
      If there have been no previous withdrawals or top ups then this field will be the same as the Purchase Value.
      <br><br>
      If there has been 5% withdrawals prior to the start of the plan, this value should show the lower remaining principle/cost basis, so Voyant knows how many further 5% tax deferred withdrawals are allowed within the plan.
      <br><br>
      You may find this article useful when you are entering an existing Investment Bond: <a href="https://support.planwithvoyant.com/hc/en-us/articles/15359426508443-Enter-an-existing-Investment-Bond-Life-Fund-Segments-Previous-Withdrawals-Top-Ups" target="_blank">Entering an Existing Investment Bond</a></p>
      `,
  },
  {
    key: "investmentInputMostRecentExcessWithdrawalYear",
    label: "Most recent excess withdrawal (year)",
    helpText: `
      <h3>What to enter</h3>
      <p>In the event that the owner(s) have taken a taxable withdrawal, at some point, the year of this withdrawal needs to be entered (as this impacts on any 'top-slicing' calculations).</p>
    `,
  },
  
  // ── Tab: Growth ──────────────────────────────────────────────

  {
    key: "rateInterestInputRateType",
    label: "Grow this account by",
    helpText: `
      <h3>What to enter</h3>
      <p>Grow the account by either entered values below or by Portfolio/Holdings which you can complete via the Tabs above.</p>
      <h3>Tips</h3>
      <ul>
        <li>Our suggestion is to use <strong>Entered Growth Rate</strong> for all accounts until you're familiar with the impact of changing to Portfolio/Holdings.</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773215dff7e551718002c16Unit",
  },
  {
    key: "rateInterestInputRate",
    label: "Growth rate",
    helpText: `
      <h3>What to enter</h3>
      <p>This is the amount the account will be assumed to grow by each year compounded. It is a percentage of the account balance.</p>
    `,
  },
  {
    key: "yearlyPercentGainsTaxed",
    label: "Capital Gains Realized Annually",
    helpText: `
      <h3>What to enter</h3>
      <p>Specify a percentage of the capital gains which will be sold and reinvested within the investment each year. Gains realised within any available capital gains allowance will not be taxed by Voyant.</p>
    `,
  },
  {
    key: "dividendYieldRate",
    label: "Dividends",
    helpText: `
      <h3>What to enter</h3>
      <p>The dividends received as a percentage of the investment balance. I.e. If the investment balance is £100,000 and 2% is entered here then dividends of £2,000 will be paid annually.</p>
    `,
  },
  {
    key: "interestYieldRate",
    label: "Interest",
    helpText: `
      <h3>What to enter</h3>
      <p>Interest received as a percentage of the investment balance. I.e. is the investment balance is £100,000 and the number entered is 3% then £3,000 will be paid out in interest.</p>
    `,
  },
  {
    key: "growthReinvestYield",
    label: "Reinvest Yield?",
    helpText: `
      <h3>What to enter</h3>
      <p>If you would like Voyant to reinvest yields back into the investment then select Yes.
      <br><br>
      By selecting No the yields will be paid out as an annual income.
      <br><br>
      You will see these in Dashboard or Let's See > Year View > Cash Flow tab</p>
    `,
  },

//TODO: Property

  // ============================================================
  // CATEGORY: Pensions
  // ============================================================

  // ------------------------------------------------------------
  // SUB-CATEGORY: Money Purchase
  // ------------------------------------------------------------

  // ── Tab: Basics ──────────────────────────────────────────────

  {
    key: "ukMoneyPurchaseInputOwnerLabel",
    label: "Owner",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the owner of the pension by expanding the menu and selecting / deselecting individuals by clicking on their names. You will see your selection in the owner window.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "ukMoneyPurchaseInputName",
    label: "Name",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter a distinguishable name for the account</p>
      <h3>Tips</h3>
      <ul>
        <li>It may make it easier later to include the owner's name in the name</li>
        <li>e.g. "Jane ABC pension"</li>
        <li>Ensure you don't include any identifiable information like account numbers</li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "ukMoneyPurchaseInputType",
    label: "Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the type of Money Purchase pension.</p>
      <h3>Tips</h3>
      <ul>
        <li>The type is used largely for informational purposes only.</li>
        <li>The type of money purchase does not appear in reports or on the Let's See charts or general overviews.</li>
        <li>There is a difference, however, between personal pensions (PPP/GPP/SIPP) and occupational schemes (COMP/CIMP schemes, grouped together under the moniker 'Occupational Pension', and Small Self-Administered Schemes), in terms of how tax relief is granted.</li>
        <li>See <a href="https://support.planwithvoyant.com/hc/en-us/articles/360054226432-Contributions-Tax-relief-on-contributions-to-Money-Purchase-Pensions-UK" target="_blank">this article on tax relief on contributions to money purchase pensions</a> for further information.</li>
        <li>James explains the difference between 'net pay' and 'relief at source' pensions in <a href="https://shackademy.com/path-player?courseid=module-2&unit=6822ca51fae53e450e01914dUnit" target="_blank">this lesson.</a></li>
      </ul>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "ukMoneyPurchaseInputBalanceLabel",
    label: "Balance",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the balance of the pension as at today's date.</p>
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
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "ieMoneyPurchaseEmployerContribution",
    label: "Employer Contribution",
    helpText: `
      <h3>What to enter</h3>
      <p>Whenever employer contributions are being made these should always be entered as a gross amount and they will be identified by the software as an 'unscheduled' contribution.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "employerContributionType",
    label: "Employer Contribution Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Our suggestion is to use 'Fixed' and enter the gross amount rather than 'Matching'</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "matchingPercentContribution",
    label: "Matching Contribution",
    helpText: `
      <h3>What to enter</h3>
      <p>Specify the percentage of your contribution that your employer is willing to match. For example, enter 100% to indicate that one hundred per cent of your contributions are matched by your company.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "matchingPercentIncome",
    label: "Matching Income",
    helpText: `
      <h3>What to enter</h3>
      <p>As a percentage of income, what is the maximum amount the employer is willing to match. For example, enter 10% to indicate that your employer would match up to a maximum of 10% your salary.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "fixedContributionType",
    label: "Contribution Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select how you wish to calculate regular contributions, either as a fixed amount (with or without inflation) or as a percentage of income.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "ukMoneyPurchaseInputEmployerRebatePercent",
    label: "Employer NI rebate (% of NI reduction)",
    helpText: `
      <h3>What to enter</h3>
      <p>Specify the percentage of the employer's NI savings that will be rebated to you. Any rebated NI savings will be paid by the employer into the pension.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },
  {
    key: "ukMoneyPurchaseInputEmployerNicRateCode",
    label: "Employee Code",
    helpText: `
      <h3>What to enter</h3>
      <p>Select your NI rate code. This code will be used to calculate the employer's NI savings that may then be rebated to you as an additional pension contribution, based on the percentage entered above.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=6773214bcbc96cfe9f04a018Unit",
  },

    // ── Tab: Crystallisations ──────────────────────────────────────────────

  {
    key: "crystallisationApplies",
    label: "Apply Crystallisation Instructions",
    helpText: `
      <h3>What to enter</h3>
      <p>Crystallising a pension means moving it (or part of it) from uncrystallised to drawdown, which triggers access to your tax-free cash. This section is used primarily to model a one-off withdrawal or to take tax-free cash - refer to the lesson for a step-by-step walkthrough.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=67ca5669ebbfa089ff0ceec9Unit",
  },

    // ── Tab: Planned Withdrawals ──────────────────────────────────────────────

  {
    key: "drawdownUspWithdrawStrategy",
    label: "Pension Strategy",
    helpText: `
      <h3>What to enter</h3>
      <p>Two options are available to set how incomes will be taken from money purchases. These are UFPLS and Flexi (Flexible Access Drawdown) and they determine whether an element of taxable income will be included in each withdrawal or if withdrawals are to be taken entirely from the pension owner’s tax-free cash allowance if available.
      <br><br>
      <strong>Flexible Access Drawdown</strong> = Allows scheduled withdrawals from money purchase pensions to be taken from the owner's tax-free cash allowance first. The total withdrawal amount specified will be tax free. With each amount withdrawn tax free, an additional 75% is crystallised and moved into a linked drawdown account, which the software creates automatically.
      <br><br>
      <strong>Please Note</strong> - The Flexible Access Drawdown option can only work if the amount you are withdrawing is less than the pension’s overall tax-free cash allowance, which is normally 25% of the pension’s balance. For example, if you were to schedule a withdrawal of 50% or 100% of a pension’s total balance, the software will withdraw this amount. It will not limit withdrawals to only the tax-free allowance since the amount scheduled clearly exceeds it. You will receive a combination of taxable and tax-free cash, effectively an UFPLS withdrawal, even if you have the Flexible Access Withdrawal selected as the withdrawal strategy.
      <br><br>
      With the Flexi option, when the tax free cash runs out there is still likely to be pension money available in the drawdown pot. You will need to set up another planned withdrawal from the Drawdown - MP pension to liquidate these funds.
      <br><br>
      <strong>UFPLS</strong> = Withdrawals the Amount as 25% tax free and 75% potentially taxable. This is also the software’s default for 'as needed' withdrawals taken from money purchase pensions.
      <br><br>
      <strong>Note:</strong> The Pension Strategy window will not appear if only drawdown accounts are selected as there is no tax free element to them so all of the withdrawal is potentially taxable.</p>
    `,
    lessonUrl: "https://shackademy.com/path-player?courseid=voyant&unit=67ca5669ebbfa089ff0ceec9Unit",
  },

  // ── Tab: Beneficiaries ──────────────────────────────────────────────

  {
    key: "pensionSurvivorshipOptions",
    label: "Survivorship Option",
    helpText: `
      <h3>What to enter</h3>
      <p>Choose between 'Lump Sum' and 'Move to Beneficiary Drawdown Pension'
      <br><br>
      <strong>Lump Sum</strong> - the remaining pension fund is paid as a cash lump sum to the nominated beneficiary on death.
      <br>
      <strong>Move to Beneficiary Drawdown Pension</strong> - the fund is moved into a drawdown pension in the beneficiary's name, where it can be drawn down over time, potentially more tax-efficiently.</p>
      <h3>Tips</h3>
      <ul>
        <li>James covers the difference between the two in <a href="https://shackademy.com/path-player?courseid=module-2&unit=6823c15306c62685ba04c70dUnit" target="_blank">this lesson.</a></li>
      </ul>
    `,
  },

  // ── Tab: Annuitization ──────────────────────────────────────────────

  {
    key: "annuitizationApplies",
    label: "Annuitization Applies",
    helpText: `
      <h3>What to enter</h3>
      <p>Are you intending to use any of this pension's funds to purchase an annuity? If so, toggle 'yes'</p>
    `,
  },
  {
    key: "ukAnnuityAnnuitizationAge",
    label: "Age",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the age at which you will convert pension funds into an annuity</p>
    `,
  },
  {
    key: "ukAnnuityAnnuitizationEvent",
    label: "Purchase Event",
    helpText: `
      <h3>What to enter</h3>
      <p>Link the purchase of an annuity to a timeline event which you can then move around</p>
    `,
  },
  {
    key: "annuityPercentAnnuitized",
    label: "Percent Annuitized",
    helpText: `
      <h3>What to enter</h3>
      <p>What percentage of the pension will be converted into an annuity?</p>
    `,
  },
  {
    key: "annuityAnnuitizationYearsCertain",
    label: "Years Certain",
    helpText: `
      <h3>What to enter</h3>
      <p>Is the annuity guaranteed to pay out for X years, even on death? If so, input the number of years. If not, leave as 0</p>
    `,
  },
  {
    key: "annuityLumpSumPercent",
    label: "Lump Sum",
    helpText: `
      <h3>What to enter</h3>
      <p>When converting the pension to an annuity, what percentage is to be paid out as TFC before the annuity starts</p>
      <h3>Tips</h3>
      <ul>
        <li>This is typically 25% but you should confirm</li>
      </ul>
    `,
  },
  {
    key: "annuityAnnuitizationEscalation",
    label: "Escalation",
    helpText: `
      <h3>What to enter</h3>
      <p>Choose how the annuity will escalate over time. If this will be a level annuity, select 'None'</p>
    `,
  },
  {
    key: "annuityAnnuitizationPayoutJoint",
    label: "Payout",
    helpText: `
      <h3>What to enter</h3>
      <p>Will this be a single or joint life annuity?</p>
    `,
  },
  {
    key: "annuityBeneficiaryLabel",
    label: "Beneficiary",
    helpText: `
      <h3>What to enter</h3>
      <p>Who will receive the benefits in the event of the death of the current pension owner?</p>
    `,
  },
  {
    key: "annuityAnnuitizationSurvivorshipPercent",
    label: "Survivorship",
    helpText: `
      <h3>What to enter</h3>
      <p>What percentage of the annuity will the beneficiary receive upon the death of the current pension owner?</p>
    `,
  },
  {
    key: "annuityAnnuitizationCalcMethod",
    label: "Annuity Rate Calculation",
    helpText: `
      <h3>What to enter</h3>
      <p>Set an Assumed Interest Rate or Specified Annuity Rate
      <br><br>
      <strong>Assumed Interest Rate</strong>
      <br>
      The software's default option allows the software to 'derive' an annuity rate by using an Assumed Interest Rate.
      <br><br>
      The Assumed Interest Rate on an annuity is the underlying interest rate assumption on which the annuity calculation is based (or would be based, by an actuary). It would ordinarily reflect an assumed yield on mid-dated UK Sovereign debt (Gilt Yield).
      <br><br>
      <a href="https://support.planwithvoyant.com/hc/en-us/articles/20098166624923-Annuity-Rates-Options-for-calculating-future-annuity-payments-UK" target="_blank">Explained further here</a>
      <br><br>
      <strong>Specified Annuity Rate</strong>
      <br>
      Where you have a reasonable idea of the applicable market (annuity) rate, taking account of the expected age and circumstances, etc, you can change the Annuity Rate Calculation option to Specified Annuity Rate.
      <br><br>
      If chosen, the % entered is the straightforward 'Conversion Rate, i.e. the rate at which a lump sum converts into an annuity
      <br>
      e.g. a fund of £100,000 (after tax free cash) with a specified annuity rate of 5% will produce an annuity income of £5,000.</p>
    `,
  },
  {
    key: "annuityAssumedInterestRate",
    label: "Assumed Interest Rate",
    helpText: `
      <h3>What to enter</h3>
      <p>The software's default option allows the software to 'derive' an annuity rate by using an Assumed Interest Rate.
      <br><br>
      The Assumed Interest Rate on an annuity is the underlying interest rate assumption on which the annuity calculation is based (or would be based, by an actuary). It would ordinarily reflect an assumed yield on mid-dated UK Sovereign debt (Gilt Yield).
      <br><br>
      It may be preferable to use Specified Annuity Rate if you wish to have more control over the level of income being received.</p>
    `,
  },
  {
    key: "annuityAnnuitizationRate",
    label: "Specified Annuity Rate",
    helpText: `
      <h3>What to enter</h3>
      <p>Where you have a reasonable idea of the applicable market (annuity) rate, taking account of the expected age and circumstances, etc, you can change the Annuity Rate Calculation option to Specified Annuity Rate.
      <br><br>
      If chosen, the % entered is the straightforward 'Conversion Rate, i.e. the rate at which a lump sum converts into an annuity
      <br>
      e.g. a fund of £100,000 (after tax free cash) with a specified annuity rate of 5% will produce an annuity income of £5,000.</p>
    `,
  },  

  // ------------------------------------------------------------
  // SUB-CATEGORY: Final Salary / CARE Pension
  // ------------------------------------------------------------

  // ── Tab: Basics ──────────────────────────────────────────────

  {
    key: "ukFinalSalaryInputOwnerLabel",
    label: "Owner",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the owner of this pension. Ownership defaults to the principal person - make sure you check this is correct before saving.</p>
    `,
  },
  {
    key: "ukFinalSalaryInputName",
    label: "Name",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter a clear, recognisable name for this pension.</p>
      <h3>Tips</h3>
      <ul>
        <li>Including the owner's name and provider can help you identify it easily later</li>
        <li>e.g. "Jane - NHS Pension"</li>
        <li>Avoid including account numbers or other sensitive identifiers</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputStatus",
    label: "Status",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the status that best describes where this pension currently stands.</p>
      <h3>Options</h3>
      <ul>
        <li><strong>Active</strong> - you are currently accruing benefits in the scheme. You should link this to an employment so Voyant can calculate how benefits build up over time.</li>
        <li><strong>Deferred</strong> - you have left the scheme but have not yet started taking benefits. The pension is preserved and will be revalued until it comes into payment.</li>
        <li><strong>In Payment</strong> - you are already receiving pension income from this scheme. Enter the current annual amount in the Amount field.</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputEmploymentId",
    label: "Linked Employment",
    helpText: `
      <h3>What to enter</h3>
      <p>If this pension is <strong>Active</strong>, link it to the relevant employment entry. Voyant will use the salary from that employment - along with your accrual rate, salary scheme type, and years of service - to calculate your projected benefits at retirement.</p>
      <h3>Tips</h3>
      <ul>
        <li>The employment's Timing tab controls when you are treated as an active member of the scheme</li>
        <li>Any years the scheme is active within the plan are automatically added to your Years of Service to Date</li>
        <li>If no employment is linked, you can instead enter a Pensionable Salary manually below - but this overrides the linked salary</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputUseBaseSalaryOnly",
    label: "Use Base Salary Only",
    helpText: `
      <h3>What to enter</h3>
      <p>Select <strong>Yes</strong> if only your basic salary (excluding any bonus) should be used when calculating your pension benefits.</p>
      <p>Select <strong>No</strong> if bonuses paid through the linked employment should also be included in the pensionable earnings calculation.</p>
      <h3>Tips</h3>
      <ul>
        <li>Most final salary schemes are based on basic salary only - check your scheme rules if you're unsure</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputPensionableSalary",
    label: "Pensionable Salary",
    helpText: `
      <h3>What to enter</h3>
      <p>This field is only relevant if you have <strong>not</strong> linked an employment above. Enter your current pensionable salary here as a future value - it will not be inflated by Voyant.</p>
      <h3>Tips</h3>
      <ul>
        <li>If a linked employment is selected, it will override anything entered here</li>
        <li>Where no employment is linked, Voyant will treat all years up to the benefit start date as active</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputEscalationTypeInDeferment",
    label: "Escalation Type in Deferment",
    helpText: `
      <h3>What to enter</h3>
      <p>Select how your deferred pension benefits will increase between now and when they come into payment.</p>
      <h3>Options</h3>
      <ul>
        <li><strong>None</strong> - benefits are frozen with no revaluation</li>
        <li><strong>RPI</strong> - benefits increase in line with the Retail Prices Index, using the rate set in your Plan Settings</li>
        <li><strong>LPI</strong> - benefits increase in line with Limited Price Indexation (typically capped at 5% or 2.5%)</li>
        <li><strong>CPI</strong> - benefits increase in line with the Consumer Prices Index, using the rate set in your Plan Settings</li>
        <li><strong>Other</strong> - enter a custom rate</li>
      </ul>
      <h3>Tips</h3>
      <ul>
        <li>Check your scheme booklet or annual benefit statement for the revaluation basis that applies to your scheme</li>
        <li>Your CPI assumption can be found in Dashboard > Plan Settings > Inflation/Growth > CPI</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputEscalationType",
    label: "Escalation Type in Payment",
    helpText: `
      <h3>What to enter</h3>
      <p>Select how your pension income will increase once it is in payment.</p>
      <h3>Options</h3>
      <ul>
        <li><strong>None</strong> - the pension is level with no increases</li>
        <li><strong>RPI</strong> - increases in line with the Retail Prices Index, using the rate set in your Plan Settings</li>
        <li><strong>LPI</strong> - increases in line with Limited Price Indexation</li>
        <li><strong>CPI</strong> - increases in line with the Consumer Prices Index, using the rate set in your Plan Settings</li>
        <li><strong>Other</strong> - enter a custom escalation rate</li>
      </ul>
      <h3>Tips</h3>
      <ul>
        <li>Your scheme rules will specify the escalation basis - check your annual benefit statement or member booklet</li>
        <li>Your CPI assumption can be found in Dashboard > Plan Settings > Inflation/Growth > CPI</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputSurvivorPercent",
    label: "Survivor Percent",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the percentage of your pension that would continue to be paid to a surviving spouse or partner if you were to die first.</p>
      <h3>Tips</h3>
      <ul>
        <li>A common figure is 50%, though many public sector schemes (e.g. NHS, Teachers') pay a higher percentage - check your scheme rules</li>
        <li>In the plan, if you are the first to pass away, Voyant will show the survivor's pension being paid to your spouse at this percentage</li>
        <li>If there is no survivor's pension, enter 0%</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputAccrualRateType",
    label: "Accrual Rate",
    helpText: `
      <h3>What to enter</h3>
      <p>Select the accrual rate that applies to your scheme. This is the fraction of your salary you earn as pension for each year of service.</p>
      <h3>Tips</h3>
      <ul>
        <li>For example, a 1/60th accrual rate means you earn 1/60th of your final salary as pension for every year worked</li>
        <li>Common rates include 1/60th, 1/80th, and 1/49th (CARE)</li>
        <li>If your rate is not listed, select 'Other' and enter it manually</li>
        <li>You'll find your accrual rate in your scheme booklet or annual benefit statement</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputSalaryScheme",
    label: "Salary Scheme",
    helpText: `
      <h3>What to enter</h3>
      <p>Select how your pension benefits will be calculated at retirement. This determines which salary figure Voyant uses in its benefit calculation.</p>
      <h3>Options</h3>
      <ul>
        <li><strong>Last Year</strong> - uses your salary in the final year of employment</li>
        <li><strong>Last 5 Years Average</strong> - uses the average of your last five years' salary</li>
        <li><strong>Highest 3 Years Average</strong> - uses the average of your three highest-earning years</li>
        <li><strong>CARE</strong> - Career Average Revalued Earnings. Each year's earnings are revalued (usually by CPI or a fixed rate) and averaged across your whole career</li>
      </ul>
      <h3>Tips</h3>
      <ul>
        <li>Most modern public sector schemes (NHS 2015, Teachers' 2015, LGPS) are CARE schemes</li>
        <li>Older "final salary" sections of these schemes typically use Last Year or an average</li>
        <li>Check your annual benefit statement or scheme booklet if you are unsure</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputYearsOfService",
    label: "Years of Service to Date",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the total number of years you have been a member of this scheme <strong>before</strong> the plan start date.</p>
      <h3>Tips</h3>
      <ul>
        <li>Voyant will automatically add any future years of active membership within the plan on top of this figure</li>
        <li>You can usually find your total service to date on your annual benefit statement</li>
        <li>If you have transferred in service from a previous scheme, include that transferred service here if it counts towards your benefit</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputAccruedPensionToDate",
    label: "Accrued Pension to Date",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the value of pension benefits you have already accrued in this scheme as at the plan start date, if known.</p>
      <h3>Tips</h3>
      <ul>
        <li>This figure is typically shown on your annual benefit statement as your "pension earned to date"</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputRevaluationRate",
    label: "Revaluation Rate",
    helpText: `
      <h3>What to enter</h3>
      <p>For CARE schemes, enter the rate at which your accrued pension earnings are revalued each year. This keeps pace with inflation or a set rate as specified by your scheme rules.</p>
      <h3>Tips</h3>
      <ul>
        <li>Many public sector CARE schemes revalue by CPI - check your scheme booklet to confirm the basis</li>
        <li>This is separate from the escalation rate in payment - it applies only while you are still accruing or in deferment</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputNormalRetirementAge",
    label: "Normal Retirement Age",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the age at which your scheme's rules say you can take your full benefits without any reduction. This is <strong>not</strong> the age at which you plan to take your pension - that is set in the Timing tab.</p>
      <h3>Tips</h3>
      <ul>
        <li>If you take benefits before this age, Voyant will apply the Actuarial Reduction Rate you enter below</li>
        <li>For example: if the Normal Retirement Age is 65 but you retire at 60, an early retirement reduction will be applied</li>
        <li>Most public sector schemes have a Normal Retirement Age of 65 or 67 - check your scheme booklet</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputActuarialReductionRate",
    label: "Actuarial Reduction Rate",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the percentage reduction applied to your pension for each year you take benefits before the Normal Retirement Age.</p>
      <h3>Tips</h3>
      <ul>
        <li>For example, a 5% per year reduction taken 3 years early would reduce your pension by 15%</li>
        <li>Your scheme will publish its early retirement factors - these are usually in your scheme booklet or on the scheme's website</li>
        <li>If you plan to take benefits at or after the Normal Retirement Age, this field will have no effect</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputAmount",
    label: "Amount",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the annual pension income payable from this scheme.</p>
      <h3>Tips</h3>
      <ul>
        <li>For a <strong>Deferred</strong> or <strong>In Payment</strong> pension, the benefit amount is already a known figure - enter it here and Voyant will use it directly rather than calculating it</li>
        <li>For an <strong>Active</strong> scheme, Voyant will calculate the benefit from your salary, accrual rate, and years of service - you do not need to enter an amount here</li>
        <li>For an <strong>In Payment</strong> pension, enter the current annual income being received</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputLumpSumChoice",
    label: "Lump Sum Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select how any tax-free lump sum from this scheme should be modelled.</p>
      <h3>Options</h3>
      <ul>
        <li><strong>None</strong> - no lump sum is taken from this scheme</li>
        <li><strong>Declared</strong> - enter a specific lump sum amount that the scheme will pay</li>
        <li><strong>Commutation</strong> - a portion of the pension income is converted into a lump sum, using the scheme's commutation factor</li>
        <li><strong>Accrual</strong> - the lump sum is calculated automatically based on your accrual rate and years of service (common in 1/80th schemes where a separate 3/80ths lump sum is built up)</li>
        <li><strong>Maximum</strong> - Voyant models the maximum lump sum available under the scheme's commutation rules</li>
      </ul>
      <h3>Tips</h3>
      <ul>
        <li>Many older final salary schemes (e.g. 1/80th) include a separate automatic lump sum - check whether yours does before selecting Commutation</li>
        <li>CARE and newer public sector schemes typically do not include an automatic lump sum - commutation is the most common option for these</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputDeclaredLumpSumAmount",
    label: "Lump Sum Amount (Declared)",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the lump sum amount that the scheme has confirmed will be paid at retirement, if you have selected <strong>Declared</strong> as the Lump Sum Type.</p>
      <h3>Tips</h3>
      <ul>
        <li>This figure is usually shown on your annual benefit statement or in a retirement quote from the scheme administrator</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputFixedLumpSumAmount",
    label: "Fixed Lump Sum Amount",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the lump sum amount to be paid from this scheme at retirement.</p>
      <h3>Tips</h3>
      <ul>
        <li>This is the lump sum amount, not the amount your pension will be reduced by - Voyant will calculate that based on the commutation rate below</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputCommutationRate",
    label: "Commutation Rate",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the commutation factor your scheme uses to convert pension income into a tax-free lump sum.</p>
      <h3>Tips</h3>
      <ul>
        <li>The commutation factor represents how much lump sum you receive for every £1 of annual pension you give up</li>
        <li>For example, a factor of 12 means giving up £1,000 of annual pension produces a lump sum of £12,000</li>
        <li>Your scheme will publish its commutation factors - these are usually available from the scheme administrator or in a retirement quote</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputAccrualRateMultiplier",
    label: "Pension Multiplier",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the multiplier used to calculate the lump sum under an accrual-based lump sum arrangement.</p>
      <h3>Tips</h3>
      <ul>
        <li>For example, in a 1/80th scheme the pension accrual is 1/80th of salary per year, and the separate lump sum accrues at 3/80ths per year - the multiplier here would be 3</li>
        <li>Check your scheme booklet to confirm the lump sum accrual fraction</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputWidowsPensionApplies",
    label: "Widows / Widower's Pension Applies",
    helpText: `
      <h3>What to enter</h3>
      <p>Toggle this on if your scheme provides a pension to your surviving spouse or partner on your death.</p>
      <h3>Tips</h3>
      <ul>
        <li>Most defined benefit schemes include a spouse's or dependant's pension as a standard benefit - check your scheme booklet to confirm</li>
        <li>Once enabled, you can set the calculation basis and percentage below</li>
        <li>Note: this is separate from the Survivor Percent field in the Basics tab, which applies while the pension is in payment. The widow's/widower's pension here relates to the death-in-service or pre-retirement death benefit</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputWidowsPensionCalcScheme",
    label: "Final Salary Accrual Scheme",
    helpText: `
      <h3>What to enter</h3>
      <p>Select how the widow's or widower's pension benefit should be calculated.</p>
      <h3>Options</h3>
      <ul>
        <li><strong>Service to Date</strong> - the survivor's pension is based on the pension accrued up to the date of death</li>
        <li><strong>Normal Retirement Date</strong> - the survivor's pension is based on the projected pension you would have received at your Normal Retirement Date</li>
      </ul>
      <h3>Tips</h3>
      <ul>
        <li>Check your scheme rules to confirm which basis applies - schemes vary and it can make a significant difference to the projected benefit</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputWidowsPensionPercent",
    label: "Percent of Employee Pension",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the percentage of your pension that would be paid to your surviving spouse or partner as a widow's or widower's pension.</p>
      <h3>Tips</h3>
      <ul>
        <li>A common figure is 50%, though many public sector schemes pay higher - check your scheme rules or annual benefit statement</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputWidowsPensionEscalation",
    label: "Escalation Percent",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the annual rate at which the widow's or widower's pension will increase once in payment.</p>
      <h3>Tips</h3>
      <ul>
        <li>This will often mirror the escalation basis of your own pension - check your scheme booklet to confirm</li>
        <li>If the survivor's pension is level with no increases, enter 0%</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputSurvivorshipInDeferment",
    label: "Survivorship Applies",
    helpText: `
      <h3>What to enter</h3>
      <p>Toggle this on if a survivor's pension would be payable to your spouse or partner in the event you die while the pension is still <strong>deferred</strong> (i.e. before benefits come into payment).</p>
      <h3>Tips</h3>
      <ul>
        <li>Not all schemes provide a survivor's benefit during deferment - check your scheme rules</li>
        <li>If the pension is Active or In Payment, this setting is less relevant as other survivorship options will apply</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputLumpSumPaymentApplies",
    label: "Lump Sum Benefit Applies",
    helpText: `
      <h3>What to enter</h3>
      <p>Toggle this on if your scheme pays a lump sum death benefit - for example, a multiple of salary paid to your dependants if you die before retirement.</p>
      <h3>Tips</h3>
      <ul>
        <li>Many defined benefit schemes include a death-in-service lump sum of 2x, 3x, or 4x salary - check your scheme booklet</li>
        <li>Once enabled, enter the lump sum amount in the field below</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputLumpSumBenefitAmount",
    label: "Lump Sum Benefit Amount",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the value of the lump sum death benefit payable from this scheme.</p>
      <h3>Tips</h3>
      <ul>
        <li>This is typically a multiple of salary - for example, 3x your pensionable salary</li>
        <li>You can find this in your scheme booklet or on your annual benefit statement</li>
        <li>If the amount is expressed as a multiple of salary rather than a fixed figure, calculate it based on your current pensionable earnings and enter the result here</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputReturnIndividualContributions",
    label: "Return Individual Contributions",
    helpText: `
      <h3>What to enter</h3>
      <p>Toggle this on if, on death before retirement, your scheme would return the value of your own member contributions rather than (or in addition to) paying a lump sum death benefit.</p>
      <h3>Tips</h3>
      <ul>
        <li>Some schemes offer a return of contributions as an alternative death benefit option - check your scheme rules</li>
        <li>If toggled on, enter the value of your contributions to date in the field below</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputInitialContributionValue",
    label: "Individual Contributions at Start",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the total value of your own member contributions paid into this scheme up to the plan start date.</p>
      <h3>Tips</h3>
      <ul>
        <li>This figure is typically shown on your annual benefit statement</li>
        <li>It is used by Voyant to calculate the return of contributions death benefit if that option is selected above</li>
      </ul>
    `,
  },
  {
    key: "indContributionsApply",
    label: "Individual Employee Contribution Applies",
    helpText: `
      <h3>What to enter</h3>
      <p>Toggle this on if you are making ongoing member contributions into this scheme. This allows Voyant to model your contributions as an outgoing within the plan.</p>
      <h3>Tips</h3>
      <ul>
        <li>Most active defined benefit scheme members pay a percentage of pensionable salary as a member contribution - check your payslip or scheme booklet for the rate</li>
        <li>Once enabled, complete the Contribution Type and amount/percentage fields below</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputIndividualContributionType",
    label: "Contribution Type",
    helpText: `
      <h3>What to enter</h3>
      <p>Select whether your member contribution is expressed as a <strong>percentage of salary</strong> or as a <strong>fixed amount</strong>.</p>
      <h3>Tips</h3>
      <ul>
        <li>Defined benefit scheme contributions are almost always a percentage of pensionable salary - select Percent unless you know otherwise</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputIndividualContributionPercent",
    label: "Individual Percent",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter your member contribution rate as a percentage of your pensionable salary.</p>
      <h3>Tips</h3>
      <ul>
        <li>Your contribution rate is shown on your payslip and in your scheme booklet</li>
        <li>Some schemes have tiered contribution rates based on salary - use the rate that applies to your current earnings</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputIndividualContributionAmount",
    label: "Individual Amount",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter your annual member contribution as a fixed amount, if you have selected <strong>Amount</strong> as the contribution type.</p>
      <h3>Tips</h3>
      <ul>
        <li>You can find this on your payslip - multiply your monthly contribution by 12 to get the annual figure</li>
      </ul>
    `,
  },
  {
    key: "ukFinalSalaryInputIndividualEscalation",
    label: "Individual Escalation",
    helpText: `
      <h3>What to enter</h3>
      <p>Enter the rate at which your member contributions will increase each year within the plan.</p>
      <h3>Tips</h3>
      <ul>
        <li>If your contribution is a percentage of salary and your salary grows each year, your contributions will increase automatically in line with that growth</li>
        <li>If you have entered a fixed amount contribution, set an escalation rate here to keep pace with salary increases or inflation</li>
        <li>If contributions are unlikely to change, you can leave this at 0%</li>
      </ul>
    `,
  },

  //TODO: Annuities

  //TODO: Drawdown

  //TODO: State Pension

];