// =============================================================================
// SHACKADEMY - GLOSSARY & LESSONS CONFIGURATION
// =============================================================================
// IMPORTANT - COMPLIANCE NOTICE:
// This glossary contains references to UK tax legislation, allowances, and
// financial rules that are subject to change. Each term notes the date it was
// last reviewed. Review and update this file at the start of each new tax year
// (6 April) and following any UK Budget announcements.
//
// This content is for educational guidance only. It does not constitute
// financial advice. Users should always consult a qualified financial adviser
// before making financial decisions.
//
// Last reviewed: April 2026
// =============================================================================


// -----------------------------------------------------------------------------
// TERMS LIBRARY
// Each term needs:
//   term        - display name
//   definition  - HTML string, plain English, beginner-friendly
//   lastReviewed - "Month YYYY" - update whenever you check this entry
//   legislative  - true if the entry references figures that may change
// -----------------------------------------------------------------------------

window.SHACKADEMY_TERMS = {

  // ── Income & Tax ──────────────────────────────────────────────────────────

  "gross-income": {
    term: "Gross income",
    definition: `
      <p>Your total income <strong>before</strong> any tax, National Insurance, or pension contributions are deducted. This is the figure Voyant uses as a starting point - it then calculates what you actually take home.</p>
      <p>For example, if your salary is £40,000 but you receive £33,000 in your bank account each year, your gross income is £40,000.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "net-income": {
    term: "Net income",
    definition: `
      <p>Your income <strong>after</strong> tax, National Insurance, and pension contributions have been deducted - sometimes called your "take-home pay". Voyant calculates net income automatically; you generally enter gross figures and let the software do the maths.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "personal-allowance": {
    term: "Personal allowance",
    definition: `
      <p>The amount of income you can earn each year completely free of income tax. For most people in England, Wales, and Northern Ireland, this is <strong>£12,570</strong> for the 2025/26 and 2026/27 tax years.</p>
      <p>⚠️ <strong>Note:</strong> If your total income exceeds £100,000, your personal allowance is reduced by £1 for every £2 over that threshold, reaching £0 at £125,140. The personal allowance is frozen until at least April 2028.</p>
      <p>Scottish taxpayers pay different income tax rates but benefit from the same personal allowance.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "income-tax-bands": {
    term: "Income tax bands",
    definition: `
      <p>The rates at which income tax is charged in England, Wales, and Northern Ireland for 2025/26 and 2026/27:</p>
      <ul>
        <li><strong>Personal allowance:</strong> £0–£12,570 - 0% tax</li>
        <li><strong>Basic rate:</strong> £12,571–£50,270 - 20% tax</li>
        <li><strong>Higher rate:</strong> £50,271–£125,140 - 40% tax</li>
        <li><strong>Additional rate:</strong> Over £125,140 - 45% tax</li>
      </ul>
      <p>⚠️ <strong>Note:</strong> Scotland has its own income tax rates and bands, which differ from the rest of the UK. All thresholds are frozen until at least April 2028. Voyant applies the correct tax calculations automatically based on the information you enter.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "national-insurance": {
    term: "National Insurance (NI)",
    definition: `
      <p>A tax paid by employees, employers, and the self-employed that funds the State Pension and certain benefits such as statutory sick pay. Your NI record determines your eligibility for the full State Pension - you need 35 qualifying years.</p>
      <p>For employees in 2026/27, the main rate is <strong>8%</strong> on earnings between £12,570 and £50,270, and <strong>2%</strong> above that. Voyant factors NI into its income calculations automatically.</p>
      <p>⚠️ <strong>Note:</strong> NI rates and thresholds are set by the government and can change with each Budget.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "marginal-rate": {
    term: "Marginal tax rate",
    definition: `
      <p>The rate of tax you pay on your <em>next pound of income</em> - in other words, the tax band your income currently sits in. This matters in financial planning because it determines how tax-efficient different savings or investment strategies are for you personally.</p>
      <p>For example, a basic rate taxpayer pays 20% on additional earnings, while a higher rate taxpayer pays 40%. Voyant uses your marginal rate to model the tax impact of different decisions.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  // ── Pensions ──────────────────────────────────────────────────────────────

  "defined-contribution": {
    term: "Defined contribution pension (DC)",
    definition: `
      <p>A pension where you (and usually your employer) pay contributions into a personal pot. The pot is invested, and what you receive in retirement depends on how much was paid in and how the investments performed. Also called a "money purchase" pension.</p>
      <p>This is the most common type of workplace pension today. In Voyant, these appear under the Money Purchase section.</p>
      <p>The key risk with DC pensions is investment performance - unlike defined benefit pensions, there is no guaranteed income level.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "defined-benefit": {
    term: "Defined benefit pension (DB)",
    definition: `
      <p>A pension that promises a specific income in retirement, usually based on your salary and how long you worked for an employer. Also called a "final salary" or "career average" pension. These are common in the public sector (NHS, teachers, civil service).</p>
      <p>Unlike defined contribution pensions, the investment risk sits with the employer rather than you. In Voyant, these appear under the Final Salary section.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "annual-allowance": {
    term: "Annual allowance",
    definition: `
      <p>The maximum amount that can be contributed to your pension pots in a single tax year while still receiving tax relief. For 2025/26 and 2026/27, this is <strong>£60,000</strong> (or 100% of your earnings if lower).</p>
      <p>⚠️ <strong>Important exceptions:</strong></p>
      <ul>
        <li><strong>Tapered annual allowance:</strong> If your "adjusted income" exceeds £260,000, your allowance is reduced by £1 for every £2 over that threshold, down to a minimum of £10,000.</li>
        <li><strong>Money Purchase Annual Allowance (MPAA):</strong> If you have already started flexibly drawing down your pension, your annual allowance for money purchase contributions drops to £10,000.</li>
      </ul>
      <p>⚠️ <strong>Note:</strong> These figures are set by HMRC and can change with each Budget. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "mpaa": {
    term: "Money Purchase Annual Allowance (MPAA)",
    definition: `
      <p>A reduced pension contribution limit of <strong>£10,000</strong> per year that applies once you have started flexibly accessing ("drawing down") your defined contribution pension. It replaces the standard £60,000 annual allowance for money purchase contributions.</p>
      <p>This is designed to prevent people from recycling pension funds - drawing money out and paying it back in to get extra tax relief. If you trigger the MPAA, it applies for the rest of your life and cannot be undone.</p>
      <p>⚠️ <strong>Note:</strong> The MPAA is set by HMRC and subject to change. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "lump-sum-allowance": {
    term: "Lump Sum Allowance (LSA)",
    definition: `
      <p>The maximum amount you can take as a <strong>tax-free lump sum</strong> from all your pension pots combined over your lifetime. From 6 April 2024, this replaced the old 25% tax-free lump sum rule.</p>
      <p>The LSA is currently <strong>£268,275</strong>. Any lump sum taken above this will be taxed at your marginal income tax rate.</p>
      <p>You can still take more than this from your pension - but only the first £268,275 across all your pensions is tax-free. The rest is taxable income.</p>
      <p>⚠️ <strong>Note:</strong> The LSA replaced the Lifetime Allowance (LTA), which was abolished from 6 April 2024. If you took pension benefits before that date, the amount of LTA you used affects your available LSA. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "state-pension": {
    term: "State Pension",
    definition: `
      <p>A regular government payment paid to you when you reach State Pension Age, provided you have enough qualifying National Insurance years. You need <strong>35 qualifying years</strong> for the full New State Pension.</p>
      <p>The full New State Pension for 2025/26 is <strong>£221.20 per week</strong> (approximately £11,502 per year). This increases each April under the "triple lock" - rising by whichever is highest: inflation, average earnings growth, or 2.5%.</p>
      <p>⚠️ <strong>Note:</strong> The State Pension amount changes each April. The triple lock guarantee is government policy and subject to change. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "state-pension-age": {
    term: "State Pension Age",
    definition: `
      <p>The age at which you become eligible to claim the UK State Pension. Currently <strong>66</strong> for both men and women.</p>
      <p>⚠️ <strong>Planned changes:</strong> The government has legislated to raise State Pension Age to <strong>67</strong> between 2026 and 2028, and to <strong>68</strong> between 2044 and 2046 (though this timetable is under review). Voyant uses your State Pension Age to model when State Pension income begins.</p>
      <p>⚠️ <strong>Note:</strong> State Pension Age is subject to government review and may change. Always verify your personal State Pension Age at gov.uk. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "pension-drawdown": {
    term: "Pension drawdown (flexi-access drawdown)",
    definition: `
      <p>A way of accessing your defined contribution pension flexibly in retirement. Rather than buying a guaranteed income (annuity), you keep your pension pot invested and draw income from it as and when you need it.</p>
      <p>The key advantages are flexibility and the ability to leave remaining funds to beneficiaries. The key risk is that if you draw too much, or if investments perform poorly, you could run out of money. Voyant models drawdown strategies to help you understand the sustainability of your plan.</p>
      <p>⚠️ Once you access your pension flexibly, the Money Purchase Annual Allowance (MPAA) applies, limiting future contributions to £10,000 per year.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "annuity": {
    term: "Annuity",
    definition: `
      <p>A financial product purchased from an insurance company that converts your pension pot into a guaranteed income for life (or a fixed period). Once bought, an annuity cannot be changed or reversed.</p>
      <p>Annuities offer security - you know exactly what you'll receive each year - but they lack the flexibility of drawdown and you cannot pass the remaining value to beneficiaries (unless you have a joint life or guaranteed period annuity).</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "pension-carry-forward": {
    term: "Carry forward",
    definition: `
      <p>A rule that allows you to use unused annual allowance from the previous <strong>three tax years</strong> to make a larger pension contribution in the current year without a tax charge. You must have been a member of a registered pension scheme in those years.</p>
      <p>This can be useful if you want to make a large one-off contribution - for example, following the sale of a business or receipt of a bonus. Voyant can model carry forward in its pension contribution planning.</p>
      <p>⚠️ <strong>Note:</strong> Carry forward rules are set by HMRC and subject to change. Always verify with a financial adviser before using carry forward. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "minimum-pension-age": {
    term: "Minimum pension access age",
    definition: `
      <p>The earliest age at which you can access your defined contribution pension. Currently <strong>55</strong>, rising to <strong>57 from 6 April 2028</strong>.</p>
      <p>⚠️ <strong>Note:</strong> Some older pension schemes may have a protected retirement age below 57. This change is legislated in the Finance Act 2022, but always verify your specific scheme's rules. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  // ── Savings & Investments ─────────────────────────────────────────────────

  "isa": {
    term: "ISA (Individual Savings Account)",
    definition: `
      <p>A tax-free savings or investment wrapper. Any interest, dividends, or capital gains earned inside an ISA are completely free from UK tax - both now and in the future.</p>
      <p>The annual ISA allowance for 2025/26 and 2026/27 is <strong>£20,000</strong> per person. This is a "use it or lose it" allowance - any unused amount cannot be carried forward to the next tax year.</p>
      <p>Main types of ISA:</p>
      <ul>
        <li><strong>Cash ISA</strong> - savings account with tax-free interest</li>
        <li><strong>Stocks & Shares ISA</strong> - invest in funds, shares, and bonds tax-free</li>
        <li><strong>Lifetime ISA (LISA)</strong> - for first home purchase or retirement; 25% government bonus up to £1,000/year; see the LISA entry for restrictions</li>
        <li><strong>Innovative Finance ISA</strong> - peer-to-peer lending; higher risk</li>
        <li><strong>Junior ISA (JISA)</strong> - for children under 18; separate £9,000 allowance</li>
      </ul>
      <p>⚠️ <strong>Upcoming change:</strong> From April 2027, savers under 65 will be limited to contributing £12,000 per year into a Cash ISA (the overall £20,000 limit remains). The full £20,000 can still be placed into a Stocks & Shares ISA. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "lifetime-isa": {
    term: "Lifetime ISA (LISA)",
    definition: `
      <p>A special ISA that pays a <strong>25% government bonus</strong> on contributions of up to £4,000 per year - a maximum bonus of £1,000 per year. Available to those aged <strong>18 to 39</strong> (you must open one before your 40th birthday).</p>
      <p>The money can only be withdrawn penalty-free for:</p>
      <ul>
        <li>Buying your first home (property must be £450,000 or under)</li>
        <li>After you turn 60</li>
        <li>If you are terminally ill</li>
      </ul>
      <p>⚠️ <strong>Withdrawal penalty:</strong> Any other withdrawal incurs a 25% government charge - which effectively means you lose not just the bonus but some of your own contributions too. The LISA counts towards your overall £20,000 ISA allowance.</p>
      <p>⚠️ <strong>Note:</strong> LISA rules and the eligible property price cap are subject to government review. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "capital-gains-tax": {
    term: "Capital Gains Tax (CGT)",
    definition: `
      <p>A tax on the <em>profit</em> you make when you sell (or give away) an asset that has increased in value - such as investments, a second property, or shares. You do not pay CGT on your main home or assets inside an ISA or pension.</p>
      <p>For 2025/26 and 2026/27:</p>
      <ul>
        <li><strong>Annual exempt amount:</strong> £3,000 per person - gains below this are tax-free</li>
        <li><strong>Basic rate taxpayers:</strong> 18% on most gains</li>
        <li><strong>Higher/additional rate taxpayers:</strong> 24% on most gains</li>
        <li><strong>Residential property:</strong> same rates as above (18%/24%)</li>
      </ul>
      <p>⚠️ <strong>Note:</strong> CGT rates were increased at the October 2024 Autumn Budget (from 10%/20%). The annual exempt amount has been cut significantly in recent years (from £12,300 in 2022/23). Both are subject to change. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "personal-savings-allowance": {
    term: "Personal Savings Allowance (PSA)",
    definition: `
      <p>The amount of savings interest you can earn each year free of income tax (outside of an ISA). For 2025/26 and 2026/27:</p>
      <ul>
        <li><strong>Basic rate taxpayers:</strong> £1,000 tax-free interest per year</li>
        <li><strong>Higher rate taxpayers:</strong> £500 tax-free interest per year</li>
        <li><strong>Additional rate taxpayers:</strong> £0 - no allowance</li>
      </ul>
      <p>Interest above your PSA is taxed at your marginal income tax rate. This is why ISAs remain valuable even with the PSA in place, particularly for higher earners or those with significant savings.</p>
      <p>⚠️ <strong>Note:</strong> The PSA is set by the government and subject to change. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "dividend-allowance": {
    term: "Dividend allowance",
    definition: `
      <p>The amount of dividend income you can receive each year free of income tax. For 2025/26 and 2026/27, this is <strong>£500</strong> per person.</p>
      <p>Dividend income above this is taxed depending on your income tax band:</p>
      <ul>
        <li><strong>Basic rate:</strong> 8.75%</li>
        <li><strong>Higher rate:</strong> 33.75%</li>
        <li><strong>Additional rate:</strong> 39.35%</li>
      </ul>
      <p>Dividends received inside an ISA or pension are not subject to dividend tax. The dividend allowance has been cut significantly in recent years (from £5,000 in 2017/18).</p>
      <p>⚠️ <strong>Note:</strong> Subject to change at each Budget. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  // ── Property ──────────────────────────────────────────────────────────────

  "property-asset": {
    term: "Property (as an asset)",
    definition: `
      <p>In Voyant, property refers to any real estate you own - your main home, a buy-to-let, a holiday home, or any other non-liquid property asset. Property is entered as an asset with a current value, and Voyant projects its growth over time.</p>
      <p>Your main home is generally <strong>exempt from Capital Gains Tax</strong> when you sell it (known as Private Residence Relief). Investment properties are not exempt and any gain is subject to CGT.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "rental-yield": {
    term: "Rental yield",
    definition: `
      <p>The annual rental income from a property expressed as a percentage of its value. For example, a property worth £300,000 generating £12,000 per year in rent has a gross rental yield of 4%.</p>
      <p>Voyant uses rental income as an "other income" source. Note that rental income above your Personal Allowance is taxable, and mortgage interest relief for landlords is restricted to the basic rate of tax.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "stamp-duty": {
    term: "Stamp Duty Land Tax (SDLT)",
    definition: `
      <p>A tax paid when you purchase property in England or Northern Ireland. Scotland uses Land and Buildings Transaction Tax (LBTT) and Wales uses Land Transaction Tax (LTT).</p>
      <p>From 1 April 2025, the main SDLT thresholds in England are:</p>
      <ul>
        <li><strong>Up to £125,000:</strong> 0%</li>
        <li><strong>£125,001–£250,000:</strong> 2%</li>
        <li><strong>£250,001–£925,000:</strong> 5%</li>
        <li><strong>£925,001–£1.5 million:</strong> 10%</li>
        <li><strong>Over £1.5 million:</strong> 12%</li>
      </ul>
      <p>First-time buyers pay no SDLT on the first £300,000 of a property priced up to £500,000. Additional properties (buy-to-let, second homes) attract a 5% surcharge on top of standard rates.</p>
      <p>⚠️ <strong>Note:</strong> SDLT thresholds and rates are set by the government and can change. Scotland and Wales have their own separate systems. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "mortgage": {
    term: "Mortgage",
    definition: `
      <p>A loan secured against a property, used to finance its purchase. In Voyant, mortgages are entered as liabilities alongside the property they relate to. The software models the repayments, remaining balance, and ultimate payoff date as part of your overall financial picture.</p>
      <p>The two main types are:</p>
      <ul>
        <li><strong>Repayment mortgage:</strong> You repay both the loan and interest each month. The balance reduces over time.</li>
        <li><strong>Interest-only mortgage:</strong> You only pay interest each month. The full loan must be repaid at the end of the term.</li>
      </ul>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  // ── Protection ────────────────────────────────────────────────────────────

  "life-insurance": {
    term: "Life insurance",
    definition: `
      <p>A policy that pays out a lump sum or regular income to your beneficiaries if you die during the policy term. In Voyant, life insurance policies are entered under the Protection section and the payout is modelled to support dependants or pay off debts (such as a mortgage) in the event of death.</p>
      <p>The main types are:</p>
      <ul>
        <li><strong>Term insurance:</strong> Covers you for a fixed period (e.g. 25 years). Pays out only if you die within the term.</li>
        <li><strong>Whole of life:</strong> Covers you for your entire life and is guaranteed to pay out.</li>
      </ul>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "critical-illness": {
    term: "Critical illness cover",
    definition: `
      <p>A policy that pays a tax-free lump sum if you are diagnosed with a specified serious illness - typically including cancer, heart attack, stroke, and others listed in the policy terms. The money can be used however you choose.</p>
      <p>⚠️ <strong>Important:</strong> Each policy covers a different list of conditions. Always check the policy's specific definitions carefully - not all versions of an illness will necessarily be covered.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "income-protection": {
    term: "Income protection insurance",
    definition: `
      <p>A policy that replaces a proportion of your income (typically 50–70%) if you are unable to work due to illness or injury. Unlike critical illness cover, it pays a regular income rather than a lump sum, and continues until you return to work, reach retirement age, or the policy term ends.</p>
      <p>In Voyant, income protection is modelled to fill the gap between your normal income and what you would receive if unable to work.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  // ── Estate Planning ───────────────────────────────────────────────────────

  "inheritance-tax": {
    term: "Inheritance Tax (IHT)",
    definition: `
      <p>A tax charged on the value of your estate (assets minus debts) when you die, if it exceeds certain thresholds. The standard rate is <strong>40%</strong> on the amount above the threshold.</p>
      <p>The main thresholds for 2025/26 and 2026/27:</p>
      <ul>
        <li><strong>Nil-rate band (NRB):</strong> £325,000 - no IHT on the first £325,000</li>
        <li><strong>Residence nil-rate band (RNRB):</strong> £175,000 - an additional threshold if you leave your main home to direct descendants (children, grandchildren)</li>
        <li><strong>Combined threshold:</strong> Up to £500,000 per person (or £1 million for a married couple, as unused allowances can be transferred to a surviving spouse)</li>
      </ul>
      <p>⚠️ <strong>Note:</strong> The nil-rate bands are frozen until at least April 2031. From April 2026, IHT relief on business and agricultural property is restricted - assets above £2.5 million now only receive 50% relief rather than 100%. Pension pots are expected to become subject to IHT from April 2027 (subject to legislation). Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "potentially-exempt-transfer": {
    term: "Potentially Exempt Transfer (PET)",
    definition: `
      <p>A gift made during your lifetime that becomes exempt from Inheritance Tax if you survive for <strong>seven years</strong> after making it. If you die within seven years, the gift may still be subject to IHT (with tapering relief applied between years three and seven).</p>
      <p>In Voyant, PETs are entered under the Gifting section so the software can model the IHT implications over time.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "annual-gift-exemption": {
    term: "Annual gift exemption",
    definition: `
      <p>Each person can give away up to <strong>£3,000</strong> per tax year completely free of Inheritance Tax, regardless of whether they survive seven years. Any unused allowance from the previous year can be carried forward - but only for one year.</p>
      <p>Additional smaller exemptions exist for wedding gifts and gifts from normal income. Voyant models gifting as part of estate planning.</p>
      <p>⚠️ <strong>Note:</strong> The £3,000 annual exemption has not changed since 1981 and is not adjusted for inflation. Subject to future government changes. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  // ── General Financial Planning ────────────────────────────────────────────

  "cash-flow-modelling": {
    term: "Cash flow modelling",
    definition: `
      <p>A financial planning technique that projects your income, expenditure, assets, and liabilities over time - typically to and through retirement - to show whether you are on track to meet your financial goals.</p>
      <p>Voyant is a cash flow modelling tool. It builds a picture of your financial life from today through to a future end date, helping you understand whether your money is likely to last and what changes might improve your outcome.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "inflation": {
    term: "Inflation",
    definition: `
      <p>The rate at which prices rise over time, eroding the purchasing power of money. In financial planning, inflation is critical because £1,000 today will buy less in 20 years' time.</p>
      <p>Voyant applies an inflation assumption to expenses, income, and assets over time. The default assumption can be viewed and adjusted in Voyant's Plan Settings. The UK government targets 2% annual inflation, though actual rates vary.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "growth-rate": {
    term: "Growth rate",
    definition: `
      <p>The assumed annual rate at which an investment, property, or other asset increases in value. In Voyant, you assign a growth rate to assets like pensions, ISAs, and property.</p>
      <p>Growth rates are assumptions, not guarantees. Actual investment returns will vary. It is good practice to model both optimistic and cautious growth scenarios using Voyant's What If tools to understand the range of possible outcomes.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "shortfall": {
    term: "Shortfall",
    definition: `
      <p>In Voyant, a shortfall occurs when your projected expenditure exceeds your projected income and available assets at a point in time - shown visually as the plan going into the red on the chart.</p>
      <p>A shortfall does not necessarily mean financial ruin - it is a signal to explore options, such as reducing expenditure, working longer, saving more, or adjusting investment strategies. This is exactly what Voyant's What If scenarios are designed to help you explore.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "net-worth": {
    term: "Net worth",
    definition: `
      <p>The total value of everything you own (assets) minus everything you owe (liabilities). Voyant calculates and tracks your net worth over time as part of its financial projection.</p>
      <p>Assets include pensions, ISAs, savings, investments, property, and other valuables. Liabilities include mortgages, loans, and other debts.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "what-if": {
    term: "What If scenario",
    definition: `
      <p>A copy of your base financial plan with one or more changes applied, allowing you to compare different futures side by side. For example: "What if I retire at 60 instead of 65?" or "What if I pay off my mortgage early?"</p>
      <p>What If scenarios are one of Voyant's most powerful features. They do not affect your base plan - they are separate models you can create, adjust, and delete freely.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

  "triple-lock": {
    term: "Triple lock",
    definition: `
      <p>The government guarantee that the State Pension rises each April by whichever is the highest of: <strong>inflation</strong> (CPI), <strong>average earnings growth</strong>, or <strong>2.5%</strong>. This protects the real value of the State Pension over time.</p>
      <p>⚠️ <strong>Note:</strong> The triple lock is government policy and could be changed or suspended by a future government. Voyant's default assumptions include State Pension increases - check Plan Settings to see what rate is applied. Last reviewed April 2026.</p>
    `,
    lastReviewed: "April 2026",
    legislative: true,
  },

  "expression-of-wishes": {
    term: "Expression of wishes",
    definition: `
      <p>A non-binding letter to your pension provider stating who you would like to receive your pension pot if you die. Because pensions are typically outside your estate for Inheritance Tax purposes, they are not automatically covered by your Will - an expression of wishes is how you direct where the money goes.</p>
      <p>The pension provider does not have to follow your wishes (they have discretion), but most will. It is important to keep this document up to date, particularly after major life events such as marriage, divorce, or the birth of children.</p>
    `,
    lastReviewed: "April 2026",
    legislative: false,
  },

};


// -----------------------------------------------------------------------------
// LESSONS LIBRARY
// Each lesson needs:
//   title  - display title
//   url    - Shackademy lesson URL
// -----------------------------------------------------------------------------

window.SHACKADEMY_LESSONS = {

  // ── Placeholder entries - replace URLs with real Shackademy lesson links ──

  "intro-to-voyant": {
    title: "Getting started with Voyant",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=intro",
  },

  "people-basics": {
    title: "Setting up people in Voyant",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=6773147e337de51fe604f62aUnit",
  },

  "income-basics": {
    title: "Adding employment income",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=income-basics",
  },

  "pension-basics": {
    title: "Adding a defined contribution pension",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=6773147b8f48f0512d0bc578Unit",
  },

  "db-pension-basics": {
    title: "Adding a defined benefit (final salary) pension",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=db-pension",
  },

  "property-basics": {
    title: "Adding a property to your plan",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=property-basics",
  },

  "isa-savings": {
    title: "Adding ISAs and savings accounts",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=isa-savings",
  },

  "protection-basics": {
    title: "Adding protection policies",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=protection",
  },

  "estate-planning": {
    title: "Estate planning and inheritance tax in Voyant",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=estate",
  },

  "what-if-scenarios": {
    title: "Using What If scenarios",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=what-if",
  },

  "understanding-the-chart": {
    title: "Reading the Voyant chart",
    url: "https://shackademy.com/path-player?courseid=voyant&unit=chart",
  },

};
