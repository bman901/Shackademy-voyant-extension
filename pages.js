// =============================================================================
// SHACKADEMY — PAGE CONTEXT CONFIGURATION
// =============================================================================
// Maps Voyant sections to relevant glossary terms and lessons.
//
// Detection works by looking for a label whose for/id matches `typeIndicator`
// in the DOM. This indicator only appears on the Basics tab — the extension
// remembers the context using the itemId from the URL hash so it persists
// as the user switches between tabs within the same item.
//
// To find a typeIndicator:
//   1. Navigate to the Basics tab of a Voyant section
//   2. Run in the console: document.querySelectorAll("label").forEach(el => {
//        const key = el.getAttribute("for") || el.getAttribute("id");
//        if (key) console.log(key);
//      });
//   3. Look for the label that identifies the section type
//      e.g. "ukMoneyPurchaseInputType" for a DC pension
//
// `terms` and `lessons` reference keys from glossary.js.
// =============================================================================

window.SHACKADEMY_PAGES = {

  // ============================================================
  // People
  // ============================================================

  "people": {
    typeIndicator: "personInputTypeLabel",
    terms: [
      "gross-income",
      "net-income",
      "personal-allowance",
      "state-pension-age",
      "state-pension",
    ],
    lessons: [
      "people-basics",
      "intro-to-voyant",
    ],
  },

  // ============================================================
  // Income
  // ============================================================

  "employment-income": {
    typeIndicator: "employmentInputEmploymentSource",
    terms: [
      "gross-income",
      "net-income",
      "personal-allowance",
      "income-tax-bands",
      "national-insurance",
      "marginal-rate",
    ],
    lessons: [
      "income-basics",
      "what-if-scenarios",
    ],
  },

  // ============================================================
  // Pensions
  // ============================================================

  "pension-money-purchase": {
    typeIndicator: "ukMoneyPurchaseInputType",
    terms: [
      "defined-contribution",
      "annual-allowance",
      "mpaa",
      "lump-sum-allowance",
      "pension-drawdown",
      "annuity",
      "pension-carry-forward",
      "minimum-pension-age",
      "expression-of-wishes",
    ],
    lessons: [
      "pension-basics",
      "what-if-scenarios",
    ],
  },

  "pension-defined-benefit": {
    typeIndicator: "ukFinalSalaryInputStatus",
    terms: [
      "defined-benefit",
      "state-pension",
      "state-pension-age",
      "annual-allowance",
      "lump-sum-allowance",
    ],
    lessons: [
      "db-pension-basics",
      "pension-basics",
    ],
  },

  // ============================================================
  // Property
  // ============================================================

  "property": {
    typeIndicator: "propertyInputAssetType",
    terms: [
      "property-asset",
      "mortgage",
      "rental-yield",
      "capital-gains-tax",
      "stamp-duty",
      "inheritance-tax",
    ],
    lessons: [
      "property-basics",
      "estate-planning",
    ],
  },

  // ============================================================
  // Savings & Investments
  // ============================================================

  "savings": {
    typeIndicator: "ukSavingInputSavingType",
    terms: [
      "isa",
      "personal-savings-allowance",
      "capital-gains-tax",
      "growth-rate",
      "inflation",
    ],
    lessons: [
      "isa-savings",
      "what-if-scenarios",
    ],
  },

  "investments": {
    typeIndicator: "investmentInputInvesmentType",
    terms: [
      "isa",
      "capital-gains-tax",
      "dividend-allowance",
      "personal-savings-allowance",
      "growth-rate",
      "inflation",
    ],
    lessons: [
      "isa-savings",
      "what-if-scenarios",
    ],
  },

};