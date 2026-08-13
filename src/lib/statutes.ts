// ---------------------------------------------------------------------------
// statutes.ts – State-by-state security deposit statutes
// ---------------------------------------------------------------------------

export interface StateStatute {
  state: string;
  stateAbbr: string;
  returnDeadlineDays: number;
  maxDamagesMultiplier: string;
  smallClaimsLimit: number;
  relevantCode: string;
  notes: string;
}

// ---------------------------------------------------------------------------
// All 50 states + DC
// ---------------------------------------------------------------------------

export const STATE_STATUTES: Record<string, StateStatute> = {
  AL: {
    state: "Alabama",
    stateAbbr: "AL",
    returnDeadlineDays: 60,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 6000,
    relevantCode: "Ala. Code § 35-9A-201",
    notes:
      "Landlord must return deposit within 60 days after termination and delivery of possession. Tenant may recover up to 2x the deposit for wrongful withholding.",
  },
  AK: {
    state: "Alaska",
    stateAbbr: "AK",
    returnDeadlineDays: 14,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "Alaska Stat. § 34.03.070",
    notes:
      "Deposit must be returned within 14 days if tenant gives proper notice, 30 days otherwise. Landlord must provide itemized list of deductions.",
  },
  AZ: {
    state: "Arizona",
    stateAbbr: "AZ",
    returnDeadlineDays: 14,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 3500,
    relevantCode: "Ariz. Rev. Stat. § 33-1321",
    notes:
      "Landlord must return deposit within 14 business days. Tenant may recover up to 2x the withheld amount if landlord acts in bad faith.",
  },
  AR: {
    state: "Arkansas",
    stateAbbr: "AR",
    returnDeadlineDays: 60,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "Ark. Code § 18-16-305",
    notes:
      "Deposit must be returned within 60 days. Landlord forfeits the entire deposit if no itemized list is provided.",
  },
  CA: {
    state: "California",
    stateAbbr: "CA",
    returnDeadlineDays: 21,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "Cal. Civ. Code § 1950.5",
    notes:
      "Landlord must return the deposit within 21 days with an itemized statement. Bad-faith retention may result in up to 2x statutory damages. Small claims limit is $10,000 for individuals.",
  },
  CO: {
    state: "Colorado",
    stateAbbr: "CO",
    returnDeadlineDays: 60,
    maxDamagesMultiplier: "3x",
    smallClaimsLimit: 7500,
    relevantCode: "Colo. Rev. Stat. § 38-12-103",
    notes:
      "Deposit must be returned within 60 days (or up to 72 hours if hazardous conditions). Willful retention may result in treble damages plus attorney fees.",
  },
  CT: {
    state: "Connecticut",
    stateAbbr: "CT",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "Conn. Gen. Stat. § 47a-21",
    notes:
      "Deposit must be returned within 30 days or 15 days after receiving tenant's forwarding address, whichever is later. Deposit cannot exceed 2 months' rent.",
  },
  DE: {
    state: "Delaware",
    stateAbbr: "DE",
    returnDeadlineDays: 20,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 15000,
    relevantCode: "Del. Code tit. 25, § 5514",
    notes:
      "Deposit must be returned within 20 days. Failure to comply may result in double the amount wrongfully withheld.",
  },
  DC: {
    state: "District of Columbia",
    stateAbbr: "DC",
    returnDeadlineDays: 45,
    maxDamagesMultiplier: "3x",
    smallClaimsLimit: 10000,
    relevantCode: "D.C. Code § 42-3502.17",
    notes:
      "Landlord must return the deposit within 45 days with an itemized statement. Tenant may recover 3x the withheld amount for bad-faith retention.",
  },
  FL: {
    state: "Florida",
    stateAbbr: "FL",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 8000,
    relevantCode: "Fla. Stat. § 83.49",
    notes:
      "Landlord must return the deposit within 15 days (no deductions) or 30 days (with itemized deductions). Landlord must hold deposit in a separate account or post a surety bond.",
  },
  GA: {
    state: "Georgia",
    stateAbbr: "GA",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "3x",
    smallClaimsLimit: 15000,
    relevantCode: "Ga. Code § 44-7-34",
    notes:
      "Deposit must be returned within 30 days. Bad-faith retention may result in up to 3x the deposit amount. Landlord must provide a move-in inspection report.",
  },
  HI: {
    state: "Hawaii",
    stateAbbr: "HI",
    returnDeadlineDays: 14,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "Haw. Rev. Stat. § 521-44",
    notes:
      "Deposit must be returned within 14 days. Landlord must provide an itemized list of deductions.",
  },
  ID: {
    state: "Idaho",
    stateAbbr: "ID",
    returnDeadlineDays: 21,
    maxDamagesMultiplier: "3x",
    smallClaimsLimit: 5000,
    relevantCode: "Idaho Code § 6-321",
    notes:
      "Deposit must be returned within 21 days (or 30 days if lease specifies). Willful noncompliance may result in up to 3x damages.",
  },
  IL: {
    state: "Illinois",
    stateAbbr: "IL",
    returnDeadlineDays: 45,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "765 ILCS 710 (Security Deposit Return Act)",
    notes:
      "Deposit must be returned within 45 days (30 days for itemized statement). Chicago has stricter local ordinances requiring interest on deposits and 2x damages for violations.",
  },
  IN: {
    state: "Indiana",
    stateAbbr: "IN",
    returnDeadlineDays: 45,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 8000,
    relevantCode: "Ind. Code § 32-31-3-12",
    notes:
      "Landlord must return the deposit within 45 days with an itemized damages list. No statutory multiplier, but tenant may recover actual damages plus attorney fees.",
  },
  IA: {
    state: "Iowa",
    stateAbbr: "IA",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 6500,
    relevantCode: "Iowa Code § 562A.12",
    notes:
      "Deposit must be returned within 30 days. Wrongful withholding may result in up to 2x the amount wrongfully withheld.",
  },
  KS: {
    state: "Kansas",
    stateAbbr: "KS",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "1.5x",
    smallClaimsLimit: 4000,
    relevantCode: "Kan. Stat. § 58-2550",
    notes:
      "Deposit must be returned within 30 days. Landlord who fails to comply may be liable for 1.5x the amount wrongfully withheld.",
  },
  KY: {
    state: "Kentucky",
    stateAbbr: "KY",
    returnDeadlineDays: 60,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 2500,
    relevantCode: "Ky. Rev. Stat. § 383.580",
    notes:
      "Deposit must be returned within 60 days. Landlord must place deposit in a separate account and disclose the account location to the tenant.",
  },
  LA: {
    state: "Louisiana",
    stateAbbr: "LA",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "La. Rev. Stat. § 9:3251",
    notes:
      "Deposit must be returned within 30 days. Failure to return or provide an itemized statement may result in penalties up to 2x the deposit plus attorney fees.",
  },
  ME: {
    state: "Maine",
    stateAbbr: "ME",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 6000,
    relevantCode: "Me. Rev. Stat. tit. 14, § 6033",
    notes:
      "Deposit must be returned within 30 days (21 days if tenancy at will). Wrongful withholding may result in 2x the deposit amount.",
  },
  MD: {
    state: "Maryland",
    stateAbbr: "MD",
    returnDeadlineDays: 45,
    maxDamagesMultiplier: "3x",
    smallClaimsLimit: 5000,
    relevantCode: "Md. Code, Real Prop. § 8-203",
    notes:
      "Deposit must be returned within 45 days. Tenant may recover up to 3x the withheld amount plus attorney fees for wrongful retention. Deposit cannot exceed 2 months' rent.",
  },
  MA: {
    state: "Massachusetts",
    stateAbbr: "MA",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "3x",
    smallClaimsLimit: 7000,
    relevantCode: "Mass. Gen. Laws ch. 186, § 15B",
    notes:
      "Deposit must be returned within 30 days. Strict requirements: must hold in separate escrow, provide receipts, and pay 5% annual interest. Violations may result in 3x damages.",
  },
  MI: {
    state: "Michigan",
    stateAbbr: "MI",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 6500,
    relevantCode: "Mich. Comp. Laws § 554.609",
    notes:
      "Deposit must be returned within 30 days with an itemized list. Deposit cannot exceed 1.5 months' rent. Failure to comply may result in 2x damages.",
  },
  MN: {
    state: "Minnesota",
    stateAbbr: "MN",
    returnDeadlineDays: 21,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 15000,
    relevantCode: "Minn. Stat. § 504B.178",
    notes:
      "Deposit must be returned within 21 days. Bad-faith retention may result in up to 2x the deposit. Interest must be paid on deposits held for buildings with 6+ units.",
  },
  MS: {
    state: "Mississippi",
    stateAbbr: "MS",
    returnDeadlineDays: 45,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 3500,
    relevantCode: "Miss. Code § 89-8-21",
    notes:
      "Deposit must be returned within 45 days. Tenant may recover actual damages for wrongful withholding.",
  },
  MO: {
    state: "Missouri",
    stateAbbr: "MO",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "Mo. Rev. Stat. § 535.300",
    notes:
      "Deposit must be returned within 30 days. Wrongful withholding may result in up to 2x the amount improperly withheld.",
  },
  MT: {
    state: "Montana",
    stateAbbr: "MT",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 7000,
    relevantCode: "Mont. Code § 70-25-202",
    notes:
      "Deposit must be returned within 30 days (10 days if no deductions). Landlord must provide itemized statement.",
  },
  NE: {
    state: "Nebraska",
    stateAbbr: "NE",
    returnDeadlineDays: 14,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 3600,
    relevantCode: "Neb. Rev. Stat. § 76-1416",
    notes:
      "Deposit must be returned within 14 days. Tenant may recover actual damages for wrongful withholding.",
  },
  NV: {
    state: "Nevada",
    stateAbbr: "NV",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "Nev. Rev. Stat. § 118A.242",
    notes:
      "Deposit must be returned within 30 days. Tenant may recover the full deposit amount if landlord fails to provide an itemized accounting within the deadline.",
  },
  NH: {
    state: "New Hampshire",
    stateAbbr: "NH",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "N.H. Rev. Stat. § 540-A:7",
    notes:
      "Deposit must be returned within 30 days. Landlord who fails to return may be liable for actual damages or the deposit amount, whichever is greater.",
  },
  NJ: {
    state: "New Jersey",
    stateAbbr: "NJ",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "N.J. Stat. § 46:8-21.1",
    notes:
      "Deposit must be returned within 30 days. Landlord must pay annual interest on deposit. Wrongful withholding may result in 2x the amount withheld plus attorney fees.",
  },
  NM: {
    state: "New Mexico",
    stateAbbr: "NM",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 10000,
    relevantCode: "N.M. Stat. § 47-8-18",
    notes:
      "Deposit must be returned within 30 days. Deposit may not exceed one month's rent for leases under one year.",
  },
  NY: {
    state: "New York",
    stateAbbr: "NY",
    returnDeadlineDays: 14,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "N.Y. Gen. Oblig. Law § 7-108",
    notes:
      "Deposit must be returned within 14 days with an itemized statement. As of 2019, deposits are capped at one month's rent for most residential leases. Tenant may recover damages for violations.",
  },
  NC: {
    state: "North Carolina",
    stateAbbr: "NC",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "N.C. Gen. Stat. § 42-52",
    notes:
      "Deposit must be returned within 30 days. Landlord must hold deposit in a trust account or furnish a bond. Willful noncompliance may result in attorney fees and costs.",
  },
  ND: {
    state: "North Dakota",
    stateAbbr: "ND",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 15000,
    relevantCode: "N.D. Cent. Code § 47-16-07.1",
    notes:
      "Deposit must be returned within 30 days. Deposit may not exceed one month's rent. Landlord must provide itemized deductions.",
  },
  OH: {
    state: "Ohio",
    stateAbbr: "OH",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 6000,
    relevantCode: "Ohio Rev. Code § 5321.16",
    notes:
      "Deposit must be returned within 30 days with an itemized statement. Wrongful withholding may result in 2x the amount wrongfully withheld plus attorney fees.",
  },
  OK: {
    state: "Oklahoma",
    stateAbbr: "OK",
    returnDeadlineDays: 45,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "Okla. Stat. tit. 41, § 115",
    notes:
      "Deposit must be returned within 45 days. Landlord must provide itemized deductions. Tenant may recover the full deposit if landlord acts in bad faith.",
  },
  OR: {
    state: "Oregon",
    stateAbbr: "OR",
    returnDeadlineDays: 31,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "Or. Rev. Stat. § 90.300",
    notes:
      "Deposit must be returned within 31 days. Landlord must provide written accounting. Wrongful withholding may result in up to 2x the deposit amount.",
  },
  PA: {
    state: "Pennsylvania",
    stateAbbr: "PA",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 12000,
    relevantCode: "68 Pa. Stat. § 250.512",
    notes:
      "Deposit must be returned within 30 days. Failure to provide an itemized list entitles tenant to the full deposit. Tenant may recover 2x the amount wrongfully withheld.",
  },
  RI: {
    state: "Rhode Island",
    stateAbbr: "RI",
    returnDeadlineDays: 20,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "R.I. Gen. Laws § 34-18-19",
    notes:
      "Deposit must be returned within 20 days. Failure to comply may result in 2x damages. Deposit may not exceed one month's rent.",
  },
  SC: {
    state: "South Carolina",
    stateAbbr: "SC",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "3x",
    smallClaimsLimit: 7500,
    relevantCode: "S.C. Code § 27-40-410",
    notes:
      "Deposit must be returned within 30 days. Bad-faith retention may result in up to 3x the deposit amount plus attorney fees.",
  },
  SD: {
    state: "South Dakota",
    stateAbbr: "SD",
    returnDeadlineDays: 14,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 12000,
    relevantCode: "S.D. Codified Laws § 43-32-24",
    notes:
      "Deposit must be returned within 14 days (45 days if lease specifies). Landlord must provide itemized statement.",
  },
  TN: {
    state: "Tennessee",
    stateAbbr: "TN",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 25000,
    relevantCode: "Tenn. Code § 66-28-301",
    notes:
      "Deposit must be returned within 30 days. No statutory limit on deposit amount. Landlord must provide itemized deductions. Wrongful withholding may result in actual damages.",
  },
  TX: {
    state: "Texas",
    stateAbbr: "TX",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "3x",
    smallClaimsLimit: 20000,
    relevantCode: "Tex. Prop. Code § 92.103",
    notes:
      "Landlord must return the deposit within 30 days. Bad-faith retention may result in up to 3x the wrongfully withheld amount plus $100 in additional damages and attorney fees.",
  },
  UT: {
    state: "Utah",
    stateAbbr: "UT",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 11000,
    relevantCode: "Utah Code § 57-17-3",
    notes:
      "Deposit must be returned within 30 days. Landlord must provide itemized written notice of any deductions within 30 days. No statutory multiplier but tenant may recover actual damages.",
  },
  VT: {
    state: "Vermont",
    stateAbbr: "VT",
    returnDeadlineDays: 14,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "Vt. Stat. tit. 9, § 4461",
    notes:
      "Deposit must be returned within 14 days. Wrongful withholding may result in 2x damages. Deposit may not exceed one month's rent.",
  },
  VA: {
    state: "Virginia",
    stateAbbr: "VA",
    returnDeadlineDays: 45,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 5000,
    relevantCode: "Va. Code § 55.1-1226",
    notes:
      "Deposit must be returned within 45 days. Landlord must provide itemized deductions. Tenant may recover actual damages or the deposit amount, plus attorney fees, for bad-faith retention.",
  },
  WA: {
    state: "Washington",
    stateAbbr: "WA",
    returnDeadlineDays: 21,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "Wash. Rev. Code § 59.18.280",
    notes:
      "Deposit must be returned within 21 days with a full written statement. Failure to comply may result in up to 2x the deposit amount. Landlord must provide a checklist at move-in and move-out.",
  },
  WV: {
    state: "West Virginia",
    stateAbbr: "WV",
    returnDeadlineDays: 60,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 10000,
    relevantCode: "W. Va. Code § 37-6A-2",
    notes:
      "Deposit must be returned within 60 days. Landlord must provide itemized deductions. Tenant may recover actual damages.",
  },
  WI: {
    state: "Wisconsin",
    stateAbbr: "WI",
    returnDeadlineDays: 21,
    maxDamagesMultiplier: "2x",
    smallClaimsLimit: 10000,
    relevantCode: "Wis. Stat. § 704.28",
    notes:
      "Deposit must be returned within 21 days. Landlord must provide an itemized statement. Wrongful retention may result in 2x the deposit amount.",
  },
  WY: {
    state: "Wyoming",
    stateAbbr: "WY",
    returnDeadlineDays: 30,
    maxDamagesMultiplier: "1x",
    smallClaimsLimit: 6000,
    relevantCode: "Wyo. Stat. § 1-21-1208",
    notes:
      "Deposit must be returned within 30 days (15 days if no deductions). Landlord must provide itemized written statement of deductions.",
  },
};

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

/** Look up the security-deposit statute for a state by its abbreviation. */
export function getStatuteByState(stateAbbr: string): StateStatute | undefined {
  return STATE_STATUTES[stateAbbr.toUpperCase()];
}
