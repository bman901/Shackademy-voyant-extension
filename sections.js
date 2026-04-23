// =============================================================================
// SHACKADEMY - SECTIONS CONFIGURATION
// =============================================================================
// Maps Voyant sections to panel descriptions and lessons.
//
// Structure:
//   name          - display name, used to auto-build tab titles
//   typeIndicator - label for/id that identifies this section in the DOM
//                   (only present on the Basics tab - context persists via URL)
//   lessons       - array of lesson keys from lessons.js (shown for whole section)
//   tabs          - one entry per tab, keyed by Voyant's URL hash segment
//                   e.g. "basics", "timing", "growth", "contribution", "steps"
//
// Tab titles are built automatically as: "{name} - {Tab}"
// You only need to write 'name' once.
//
// Reusable tab descriptions are defined at the top as TAB_DESCRIPTIONS.
// Override any of them inline for a specific section if needed.
// =============================================================================

// -----------------------------------------------------------------------------
// Reusable tab descriptions
// Used wherever a tab's description is consistent across sections.
// Override inline in a specific section's tabs entry if needed.
// -----------------------------------------------------------------------------

window.TAB_DESCRIPTIONS = {

  timing: `
    <p>The Timing tab controls <strong>when this item starts and ends</strong> in your plan. Voyant uses timeline events - milestones you define, like Retirement or a specific age - rather than fixed calendar dates, so your plan stays dynamic as assumptions change.</p>
    <p>Make sure the start and end events reflect your real expectations as accurately as possible, as they have a significant impact on your projections.</p>
  `,

  growth: `
    <p>The Growth tab sets the <strong>assumed annual rate of return</strong> for this item. Voyant uses this to project its future value over time.</p>
    <p>If left unchanged, Voyant uses the default growth assumption from Plan Settings. You can override it here for this specific item.</p>
    <p>Please note, once a plan is created this is the only place to update growth sessions - the Plan Settings will only impact <strong>new</strong> plans created.</p>
    <p>Consider using a cautious assumption as your base case, and model a more optimistic scenario using a What If scenario to understand the range of possible outcomes.</p>
    <p>Our suggestion is to leave this on the default Entered Growth Rate until you're comfortable with Voyant.</p>
  `,

  steps: `
    <p>Steps allow you to model <strong>changes to this item at a future point in time</strong></p>
    <p>Each step is triggered by a timeline event. You can add as many steps as needed to reflect how this item is expected to change throughout the plan.</p>
  `,

  fees: `
    <p>The Fees tab lets you model <strong>product fees and advice fees</strong> associated with this account.</p>
    <ul>
      <li><strong>Product fee</strong> - deducted from the gross growth rate.</li>
      <li><strong>Ongoing advice fee</strong> - modelled as a withdrawal from the account. Will generate a tax event where applicable (e.g. Capital Gains Tax for unwrapped investments).</li>
    </ul>
    <p>Ensure the entered growth rate factors in any account fees. For example, if using the default growth rate of 5% you may want to gross this up to offset the fee reduction.</p>
  `,

  transfers: `
    <p>The Transfers tab lets you model <strong>product fees and advice fees</strong> associated with this account.</p>
    <ul>
      <li><strong>Product fee</strong> - deducted from the gross growth rate.</li>
      <li><strong>Ongoing advice fee</strong> - modelled as a withdrawal from the account. Will generate a tax event where applicable (e.g. Capital Gains Tax for unwrapped investments).</li>
    </ul>
    <p>Ensure the entered growth rate factors in any account fees. For example, if using the default growth rate of 5% you may want to gross this up to offset the fee reduction.</p>
  `,

  withdrawal: `
    <p>The Withdrawal Limit tab controls <strong>how and when Voyant is allowed to access this account</strong> to meet expenses when other income falls short.</p>
    <p>The default setting is <em>As Needed</em>, meaning Voyant will draw from this account according to the liquidation order. You can restrict this - for example, to ringfence an emergency fund or prevent access until a specific life event.</p>
    <p>Note: withdrawal limits control <em>ad hoc</em> access. To model a planned, scheduled withdrawal regardless of whether it is needed, use the Planned Withdrawals screen instead.</p>
  `,

  drawdowns: `
    <p>Planned Withdrawals are <strong>scheduled withdrawals from a specific account</strong> that happen regardless of whether there is a shortfall to meet. This is different from the Withdrawal Limit tab, which only controls ad hoc access when income falls short.</p>
    <p>Use Planned Withdrawals when you want to model a deliberate strategy - for example, drawing a fixed annual income from a drawdown pension, or systematically running down an investment account over a set period.</p>
    <ul>
      <li>The 'Selected Account' will default to the plan you were in when you chose to add a planned withdrawal</li>
      <li>For pension planned withdrawals, the Pension Strategy field on the pension entry determines whether withdrawals are UFPLS or Flexible Access Drawdown</li>
      <li>Check Year View > Cash Flow to confirm the withdrawal is appearing correctly</li>
    </ul>
  `,
};

// -----------------------------------------------------------------------------
// Sections
// -----------------------------------------------------------------------------

window.SHACKADEMY_SECTIONS = {

  // ============================================================
  // People
  // ============================================================

  "people": {
    name: "People",
    typeIndicator: "personInputTypeLabel",
    lessons: ["people-timeline"],
    tabs: {
      "basics": {
        description: `
          <p>This is where you set up the <strong>people in your financial plan</strong>. Every plan needs at least one person - the plan owner - and you can add a partner or spouse as a second person.</p>
          <p>Getting the basics right here is important as Voyant uses this information - particularly date of birth and retirement age - throughout all projections. Tax allowances, State Pension timing, and pension access ages are all calculated from these details.</p>
          <p>If you are planning for yourself, you are the plan owner. Add your partner as a second person if you want to model your finances jointly.</p>
        `,
      },
    },
  },


  // ============================================================
  // Goals
  // ============================================================
 
  "goals": {
    name: "Goals",
    typeIndicator: "basicExpenseInputOwnerLabel",
    lessons: ["income-expenses", "occassional-expenditure"],
    tabs: {
      "basics": {
        description: `
          <p>Goals are how you model <strong>expenses and financial objectives</strong> in your plan - anything from school fees and holidays to home renovations or retirement spending. Each goal is an expense that Voyant will try to meet from your income and assets.</p>
          <p>Enter goals with a realistic annual amount and let Voyant show you whether your plan can afford them. If a goal creates a shortfall, you can explore alternatives using What If scenarios.</p>
          <ul>
            <li>Use a name that's meaningful to you - it will appear on the timeline and in reports</li>
            <li>Check Year View > Expenses after saving to confirm the goal is appearing correctly</li>
          </ul>
        `,
      },
      "expense-details": {
        description: `
          <p>The Details tab allows you to set a <strong>more specific expense amount or structure</strong> for this goal - including itemising the expediture or making it a % of your income.</p>
          <p>Anything entered here will override what you entered in the Basics tab, so only use this tab if you need more precise control than the Basics tab allows.</p>
        `,
      },
      "timing": {
        description: `
          <p>The Timing tab controls <strong>when this goal starts and ends</strong> in your plan, and how frequently it occurs.</p>
          <p>Goals are linked to timeline events - so if your retirement date changes, any goals tied to it will move automatically. You can also set a goal to repeat less frequently than annually - for example, every two years for a biennial expense.</p>
          <ul>
            <li>Use the Expense Frequency field to model less-than-annual goals</li>
            <li>Check the Shackademy lesson for a step-by-step walkthrough</li>
          </ul>
        `,
      },
      "payment sources": {
        description: `
          <p>The Payment Sources tab lets you specify <strong>which account or asset Voyant should use to pay for this goal</strong>. By default, Voyant will use whatever is available according to the liquidation order.</p>
          <p>Use this tab if you want a specific account to fund a specific goal - for example, using a dedicated savings account for school fees.</p>
          <p>Use the "Only Use Preferred Sources" option very sparingly as it can create artificial shortfalls if the nominated account is insufficient.</p>
        `,
      },
      "steps":  { description: window.TAB_DESCRIPTIONS.steps  },
    },
  },
 
  // ============================================================
  // Events & Stages
  // ============================================================
 
  "events": {
    name: "Events",
    typeIndicator: "eventName",
    lessons: ["people-timeline"],
    tabs: {
      "basics": {
        description: `
          <p>Events are <strong>milestones on your timeline</strong> - named points in time that Voyant uses to trigger changes in your plan. Retirement, buying a property, children leaving home, or starting a business are all examples of events.</p>
          <p>Rather than working with fixed calendar dates, Voyant links items in your plan to events. This means if you change when an event happens, everything connected to it updates automatically - making it much easier to model "what if I retire two years earlier?"</p>
          <ul>
            <li>Use descriptive names - "Jane Retires" is much clearer than "Event 1"</li>
            <li>Events can be positioned by year or by the owner's age - both update each other automatically</li>
          </ul>
        `,
      },
    },
  },
 
  "stages": {
    name: "Stages",
    typeIndicator: "stageInputName",
    lessons: ["people-timeline"],
    tabs: {
      "basics": {
        description: `
          <p>Stages are <strong>labelled bands on your timeline</strong> that visually organise your plan into distinct life phases - such as "Working Years", "Early Retirement", or "Later Life".</p>
          <p>Stages are purely visual and don't affect any calculations, but they make your plan much easier to read and discuss. They are bounded by Events on the timeline, so set up your Events first and use Stages to label the periods between them.</p>
          <ul>
            <li>Use consistent colour schemes across What If scenarios to keep plans easy to compare</li>
            <li>Common stage names: Working Years, Pre-Retirement, Early Retirement, Later Life, Children at Home</li>
          </ul>
        `,
      },
    },
  },


  // ============================================================
  // Employment Income
  // ============================================================

  "employment-income": {
    name: "Employment Income",
    typeIndicator: "employmentInputEmploymentSource",
    lessons: ["income-expenses", "retiring-part-way"],
    tabs: {
      "basics": {
        description: `
          <p>This is where you enter <strong>income from employment</strong> - salary, bonuses, commissions, and benefits in kind. All figures should be entered <strong>gross</strong> (before tax and National Insurance). Voyant calculates the tax for you.</p>
        `,
      },
      "timing": { description: window.TAB_DESCRIPTIONS.timing },
      "steps":  { description: window.TAB_DESCRIPTIONS.steps  },
    },
  },

  // ============================================================
  // Other Income
  // ============================================================

  "other-income": {
    name: "Other Income",
    typeIndicator: "otherIncomeInputTaxationType",
    lessons: ["income-expenses"],
    tabs: {
      "basics": {
        description: `
          <p>Other Income covers <strong>income that is not subject to National Insurance</strong> - including rental income, royalties, maintenance payments, or overseas income. It is also used for employment earnings not subject to standard UK income tax.</p>
          <p>Voyant assesses other income at the end of each plan year and applies tax as an expense in the following year.</p>
          <p>Use the Taxation Type field to tell Voyant how to tax this income - as income, property income, capital gains, or dividends.</p>
        `,
      },
      "timing":  { description: window.TAB_DESCRIPTIONS.timing  },
      "steps":   { description: window.TAB_DESCRIPTIONS.steps   },
    },
  },

  // ============================================================
  // Windfall
  // ============================================================
 
  "windfall": {
    name: "Windfall",
    typeIndicator: "windfallInputType",
    lessons: ["income-expenses"],
    tabs: {
      "basics": {
        description: `
          <p>A windfall is a <strong>one-off lump sum received at a specific point in the plan</strong> - such as an inheritance.</p>
          <p>Voyant treats windfalls as a cash inflow at the date you specify. Set the Taxable field and Taxation Type carefully to ensure Voyant applies the correct tax treatment - most inheritances and gifts are non-taxable in the hands of the recipient, but always check.</p>
          <ul>
            <li>Use the Timing tab to set when the windfall is received</li>
            <li>For inheritances, enter the net amount expected after any IHT has been settled from the estate</li>
          </ul>
        `,
      },
      "timing": { description: window.TAB_DESCRIPTIONS.timing },
    },
  },

  // ============================================================
  // Savings & Investments - Savings
  // ============================================================

  "savings": {
    name: "Savings",
    typeIndicator: "ukSavingInputSavingType",
    lessons: ["savings-investments", "lump-sums", "non-standard-assets", "managing-withdrawals"],
    tabs: {
      "basics": {
        description: `
          <p>This is where you enter <strong>cash savings accounts</strong> - current accounts, savings accounts, Cash ISAs, and National Savings Certificates. Enter the current balance as at the plan start date.</p>
          <p>The account type matters for tax purposes:</p>
          <ul>
            <li><strong>Current/savings accounts</strong> - interest is taxable</li>
            <li><strong>Cash ISA</strong> - tax-free; contributions limited to the annual ISA allowance (£20,000 for 2025/26)</li>
            <li><strong>National Savings Certificate</strong> - tax-free; Voyant applies no contribution limit</li>
          </ul>
          <p>When income falls short of expenses, Voyant draws on savings according to the liquidation order. Check Dashboard > Plan Settings > Liquidation Order to see and adjust this.</p>
        `,
      },
      "timing":       { description: window.TAB_DESCRIPTIONS.timing       },
      "fees":         { description: window.TAB_DESCRIPTIONS.fees         },
      "steps":        { description: window.TAB_DESCRIPTIONS.steps        },
      "withdrawal limit": { description: window.TAB_DESCRIPTIONS.withdrawal },
    },
  },

  // ============================================================
  // Savings & Investments - Investments
  // ============================================================

  "investments": {
    name: "Investments",
    typeIndicator: "investmentInputInvesmentType",
    lessons: ["savings-investments", "lump-sums", "non-standard-assets", "managing-withdrawals"],
    tabs: {
      "basics": {
        description: `
          <p>This is where you enter <strong>investment accounts and wrappers</strong> - Stocks & Shares ISAs, Lifetime ISAs, onshore and offshore bonds, unwrapped investments, trusts, EIS, SEIS, VCTs, and more. Enter the current balance as at the plan start date.</p>
          <p>The Type field is critical - it determines the tax treatment and whether Voyant will access the account automatically or only via planned withdrawals:</p>
          <ul>
            <li><strong>Stocks & Shares ISA / Lifetime ISA</strong> - tax-free growth and withdrawals</li>
            <li><strong>Unwrapped investments</strong> - subject to Capital Gains Tax on gains</li>
            <li><strong>Onshore/Offshore bonds</strong> - tax-deferred; 5% annual withdrawal allowance</li>
            <li><strong>Trusts, EIS, SEIS, VCTs</strong> - not accessed automatically; require planned withdrawals</li>
          </ul>
          <p>For investment bonds, make sure you enter the Purchase Value and Year Purchased accurately as these affect tax calculations.</p>
        `,
      },
      "growth":       { description: window.TAB_DESCRIPTIONS.growth       },
      "contribution": { description: window.TAB_DESCRIPTIONS.contribution },
      "timing":       { description: window.TAB_DESCRIPTIONS.timing       },
      "fees":         { description: window.TAB_DESCRIPTIONS.fees         },
      "steps":        { description: window.TAB_DESCRIPTIONS.steps        },
      "withdrawal limit": { description: window.TAB_DESCRIPTIONS.withdrawal },
    },
  },

  // ============================================================
  // Property
  // ============================================================

  "property": {
    name: "Property",
    typeIndicator: "propertyInputAssetType",
    lessons: ["property-basics", "what-if-downsizing"],
    tabs: {
      "basics": {
        description: `
          <p>This is where you enter <strong>property and other physical assets</strong> - your main home, buy-to-let properties, holiday homes, vehicles, collectables, or business property. Enter the current market value.</p>
          <p>The Asset Type field is important for tax:</p>
          <ul>
            <li><strong>Main Residence</strong> - exempt from Capital Gains Tax on sale (Private Residence Relief)</li>
            <li><strong>All other property</strong> - gains on sale are subject to CGT at 18% (basic rate) or 24% (higher rate)</li>
          </ul>
          <p>If the property has not yet been purchased, toggle <em>Is this a Future Purchase?</em> to Yes and use the Timing tab to set the buy and sell events.</p>
          <p>You can link associated debts (mortgages), expenses (maintenance), and income (rental) to the property so they appear and disappear in the plan alongside the property itself.</p>
        `,
      },
      "timing": {
        description: `
          <p>The Timing tab for property sets the <strong>buy and sell events</strong> - the timeline milestones at which Voyant models the property being purchased and disposed of.</p>
          <p>If you are modelling a property that is already owned and not being sold within the plan, you only need a buy event (or leave the start as the plan start date).</p>
          <p>If you are modelling a future purchase or a planned sale - such as downsizing in retirement - set both events carefully. Voyant will model the purchase cost as an expense and any sale proceeds as an inflow, with CGT applied where applicable.</p>
        `,
      },
      "growth and inflation": {
        description: `
          <p>This tab sets the <strong>assumed annual growth rate for this property's value</strong>. The default is taken from Plan Settings (Dashboard > Plan Settings > Inflation/Growth > Property Growth/Depreciation Rate).</p>
          <p>You can override the rate here for this specific property - useful if you believe a particular property will outperform or underperform the general market assumption.</p>
        `,
      },
    },
  },

  // ============================================================
  // Pensions
  // ============================================================

  "pension-money-purchase": {
    name: "Money Purchase Pension",
    typeIndicator: "ukMoneyPurchaseInputType",
    lessons: ["pension-basics", "lump-sums", "pension-withdrawals"],
    tabs: {
      "basics": {
        description: `
          <p>This is where you enter a <strong>defined contribution (money purchase) pension</strong> - including personal pensions, SIPPs, workplace pensions, and GPPs. Enter the current fund value as at the plan start date.</p>
          <p>The pension Type field is largely informational, but there is one important distinction: personal pensions (PPP/GPP/SIPP) and occupational schemes have different rules for how tax relief on contributions is applied.</p>
          <p>Key things to check:</p>
          <ul>
            <li>Enter contributions gross - Voyant applies tax relief automatically</li>
            <li>If employer contributions apply, toggle the Employer Contribution section and link to the relevant employment</li>
            <li>The minimum pension access age is currently 55, rising to 57 in April 2028</li>
            <li>Complete an expression of wishes with your pension provider to direct benefits on death - Voyant models this under Beneficiaries</li>
          </ul>
        `,
      },
      "contribution": { description: window.TAB_DESCRIPTIONS.contribution },
      "growth":       { description: window.TAB_DESCRIPTIONS.growth       },
      "timing":       { description: window.TAB_DESCRIPTIONS.timing       },
      "fees":         { description: window.TAB_DESCRIPTIONS.fees         },
      "steps":        { description: window.TAB_DESCRIPTIONS.steps        },
      "withdrawal limit": { description: window.TAB_DESCRIPTIONS.withdrawal },
      "crystallisations": {
        description: `
          <p>The Crystallisations tab allows you to model <strong>specific pension crystallisation events</strong> - the point at which pension benefits are formally accessed and tax-free cash is taken.</p>
          <p>For most straightforward plans you will not need to use this tab. Voyant handles crystallisation automatically when the pension begins drawdown according to the Timing settings.</p>
          <p>Use this tab if you need to model a specific partial crystallisation at a known future date or event.</p>
        `,
      },
      "annuitization": {
        description: `
          <p>The Annuitization tab allows you to model the <strong>conversion of some or all of this pension pot into a guaranteed annuity income</strong> at a future point.</p>
          <p>You can specify the percentage of the fund to annuitise, the timing, escalation rate, and whether it pays on a single or joint life basis.</p>
          <p>If you are not planning to purchase an annuity, you can leave this tab as default. Voyant will model the pension as remaining in drawdown.</p>
        `,
      },
    },
  },

  "pension-defined-benefit": {
    name: "Final Salary Pension",
    typeIndicator: "ukFinalSalaryInputStatus",
    lessons: ["pension-basics"],
    tabs: {
      "basics": {
        description: `
          <p>This is where you enter a <strong>defined benefit (final salary or CARE) pension</strong> - common in the public sector (NHS, teachers, civil service, armed forces) and some older workplace schemes.</p>
          <p>Unlike defined contribution pensions, the benefit is a guaranteed income based on your salary and years of service - not a pot of money. The investment risk sits with the employer, not you.</p>
          <p>The Status field is critical:</p>
          <ul>
            <li><strong>Active</strong> - you are still building up benefits; link to your employment entry</li>
            <li><strong>Deferred</strong> - you have left the scheme but not yet started taking benefits; enter the known deferred benefit amount</li>
            <li><strong>In Payment</strong> - benefits are already being received; enter the current annual amount</li>
          </ul>
          <p>Check your pension scheme statement carefully for the benefit amount, accrual rate, and normal retirement age - these vary significantly between schemes.</p>
        `,
      },
      "timing": {
        description: `
          <p>The Timing tab for a Final Salary pension sets <strong>when the pension income starts</strong> in the plan. This is typically your planned retirement date or a specific age event.</p>
          <p>If you start taking benefits before the scheme's Normal Retirement Age (entered in the Basics tab), Voyant will apply the actuarial reduction rate automatically - meaning a lower income to reflect early payment.</p>
          <p>Make sure the start event aligns with your realistic retirement plans rather than the scheme's default retirement age, unless those are the same.</p>
        `,
      },
    },
  },

};