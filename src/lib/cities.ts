// ============================================================================
// cities.ts — Location data and dispute type mappings for local SEO pages
// ============================================================================

export interface Location {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  type: "city" | "county";
}

// ---------------------------------------------------------------------------
// Dispute types for local pages
// ---------------------------------------------------------------------------

export const LOCAL_DISPUTE_TYPES: Array<{ slug: string; name: string }> = [
  { slug: "security-deposit", name: "Security Deposit Dispute" },
  { slug: "credit-report", name: "Credit Report Error" },
  { slug: "dmca-takedown", name: "DMCA Takedown" },
  { slug: "medical-denial", name: "Medical Claim Denial" },
  { slug: "parking-ticket", name: "Parking Ticket Dispute" },
  { slug: "debt-validation", name: "Debt Validation" },
  { slug: "subscription-refund", name: "Subscription Refund" },
  { slug: "lease-break", name: "Lease Break" },
  { slug: "hoa-fine", name: "HOA Fine Dispute" },
  { slug: "wage-theft", name: "Wage Theft Claim" },
  { slug: "chargeback-dispute", name: "Chargeback Dispute" },
  { slug: "foia-request", name: "FOIA Request" },
  { slug: "general-demand-letter", name: "Demand Letter" },
  { slug: "irs-abatement", name: "IRS Penalty Abatement" },
  { slug: "property-tax-appeal", name: "Property Tax Appeal" },
  { slug: "data-broker-takedown", name: "Data Broker Removal" },
  { slug: "ada-accommodation", name: "ADA Accommodation" },
  { slug: "denied-warranty", name: "Warranty Claim" },
  { slug: "small-claims-demand", name: "Small Claims Demand" },
  { slug: "airbnb-host-dispute", name: "Airbnb Dispute" },
  { slug: "lemon-law", name: "Lemon Law Claim" },
  { slug: "insurance-denial", name: "Insurance Denial Appeal" },
  { slug: "car-accident-demand", name: "Car Accident Demand" },
  { slug: "wrongful-termination", name: "Wrongful Termination" },
  { slug: "unemployment-appeal", name: "Unemployment Appeal" },
  { slug: "workers-comp-denial", name: "Workers' Comp Appeal" },
  { slug: "eeoc-complaint", name: "EEOC Complaint" },
  { slug: "fdcpa-harassment", name: "Debt Harassment (FDCPA)" },
  { slug: "landlord-repair", name: "Landlord Repair Demand" },
  { slug: "auto-repair-dispute", name: "Auto Repair Dispute" },
  { slug: "moving-damage-claim", name: "Moving Damage Claim" },
  { slug: "gym-cancellation", name: "Gym Cancellation" },
  { slug: "utility-billing-dispute", name: "Utility Billing Dispute" },
  { slug: "towing-dispute", name: "Towing Dispute" },
  { slug: "pet-deposit-dispute", name: "Pet Deposit Dispute" },
  { slug: "telecom-billing-dispute", name: "Telecom Billing Dispute" },
  { slug: "timeshare-cancellation", name: "Timeshare Cancellation" },
  { slug: "wedding-vendor-dispute", name: "Wedding Vendor Dispute" },
];

// ---------------------------------------------------------------------------
// City data — state abbr => [full state name, city1, city2, ...]
// ---------------------------------------------------------------------------

const CITY_DATA: Record<string, [string, ...string[]]> = {
  AL: [
    "Alabama",
    "Birmingham",
    "Montgomery",
    "Huntsville",
    "Mobile",
    "Tuscaloosa",
    "Hoover",
    "Dothan",
    "Decatur",
    "Auburn",
  ],
  AK: [
    "Alaska",
    "Anchorage",
    "Fairbanks",
    "Juneau",
    "Wasilla",
  ],
  AZ: [
    "Arizona",
    "Phoenix",
    "Tucson",
    "Mesa",
    "Chandler",
    "Scottsdale",
    "Glendale",
    "Gilbert",
    "Tempe",
    "Peoria",
    "Surprise",
    "Yuma",
    "Goodyear",
  ],
  AR: [
    "Arkansas",
    "Little Rock",
    "Fort Smith",
    "Fayetteville",
    "Springdale",
    "Jonesboro",
    "Conway",
    "Rogers",
  ],
  CA: [
    "California",
    "Los Angeles",
    "San Francisco",
    "San Diego",
    "San Jose",
    "Fresno",
    "Sacramento",
    "Long Beach",
    "Oakland",
    "Bakersfield",
    "Anaheim",
    "Santa Ana",
    "Riverside",
    "Stockton",
    "Irvine",
    "Chula Vista",
    "Fremont",
    "San Bernardino",
    "Modesto",
    "Moreno Valley",
    "Fontana",
    "Glendale",
    "Huntington Beach",
    "Santa Clarita",
    "Garden Grove",
    "Oceanside",
    "Rancho Cucamonga",
    "Ontario",
    "Santa Rosa",
    "Elk Grove",
    "Corona",
    "Roseville",
    "Palmdale",
    "Salinas",
    "Pomona",
    "Hayward",
    "Escondido",
    "Sunnyvale",
    "Torrance",
    "Pasadena",
    "Fullerton",
    "Thousand Oaks",
    "Visalia",
    "Concord",
    "Simi Valley",
    "Santa Maria",
    "Berkeley",
    "El Monte",
    "Downey",
    "Costa Mesa",
    "Inglewood",
    "Carlsbad",
    "Temecula",
    "Murrieta",
    "Clovis",
    "Daly City",
    "San Mateo",
    "Victorville",
    "El Cajon",
    "Menifee",
  ],
  CO: [
    "Colorado",
    "Denver",
    "Colorado Springs",
    "Aurora",
    "Fort Collins",
    "Lakewood",
    "Thornton",
    "Arvada",
    "Westminster",
    "Pueblo",
    "Centennial",
    "Boulder",
    "Greeley",
    "Longmont",
  ],
  CT: [
    "Connecticut",
    "Bridgeport",
    "New Haven",
    "Stamford",
    "Hartford",
    "Waterbury",
    "Norwalk",
    "Danbury",
    "New Britain",
    "Bristol",
    "Meriden",
  ],
  DE: [
    "Delaware",
    "Wilmington",
    "Dover",
    "Newark",
    "Middletown",
  ],
  DC: [
    "District of Columbia",
    "Washington",
  ],
  FL: [
    "Florida",
    "Jacksonville",
    "Miami",
    "Tampa",
    "Orlando",
    "St. Petersburg",
    "Hialeah",
    "Port St. Lucie",
    "Cape Coral",
    "Tallahassee",
    "Fort Lauderdale",
    "Pembroke Pines",
    "Hollywood",
    "Gainesville",
    "Miramar",
    "Coral Springs",
    "Palm Bay",
    "Clearwater",
    "Lakeland",
    "Pompano Beach",
    "West Palm Beach",
    "Davie",
    "Miami Gardens",
    "Sunrise",
    "Plantation",
    "Boca Raton",
    "Deltona",
    "Palm Coast",
    "Melbourne",
    "Largo",
    "Deerfield Beach",
    "Boynton Beach",
    "Kissimmee",
    "Homestead",
    "Sarasota",
    "Fort Myers",
  ],
  GA: [
    "Georgia",
    "Atlanta",
    "Augusta",
    "Columbus",
    "Savannah",
    "Athens",
    "Sandy Springs",
    "Roswell",
    "Macon",
    "Johns Creek",
    "Albany",
    "Warner Robins",
    "Alpharetta",
    "Marietta",
    "Valdosta",
    "Smyrna",
    "Stonecrest",
    "Brookhaven",
  ],
  HI: [
    "Hawaii",
    "Honolulu",
    "Pearl City",
    "Hilo",
    "Kailua",
    "Kapolei",
  ],
  ID: [
    "Idaho",
    "Boise",
    "Meridian",
    "Nampa",
    "Idaho Falls",
    "Pocatello",
    "Caldwell",
    "Coeur d'Alene",
  ],
  IL: [
    "Illinois",
    "Chicago",
    "Aurora",
    "Joliet",
    "Naperville",
    "Rockford",
    "Springfield",
    "Elgin",
    "Peoria",
    "Champaign",
    "Waukegan",
    "Cicero",
    "Bloomington",
    "Arlington Heights",
    "Evanston",
    "Schaumburg",
    "Bolingbrook",
    "Decatur",
  ],
  IN: [
    "Indiana",
    "Indianapolis",
    "Fort Wayne",
    "Evansville",
    "South Bend",
    "Carmel",
    "Fishers",
    "Bloomington",
    "Hammond",
    "Gary",
    "Lafayette",
    "Muncie",
    "Terre Haute",
  ],
  IA: [
    "Iowa",
    "Des Moines",
    "Cedar Rapids",
    "Davenport",
    "Sioux City",
    "Iowa City",
    "Waterloo",
    "Ames",
    "Council Bluffs",
  ],
  KS: [
    "Kansas",
    "Wichita",
    "Overland Park",
    "Kansas City",
    "Olathe",
    "Topeka",
    "Lawrence",
    "Shawnee",
    "Manhattan",
  ],
  KY: [
    "Kentucky",
    "Louisville",
    "Lexington",
    "Bowling Green",
    "Owensboro",
    "Covington",
    "Richmond",
    "Georgetown",
    "Florence",
  ],
  LA: [
    "Louisiana",
    "New Orleans",
    "Baton Rouge",
    "Shreveport",
    "Metairie",
    "Lafayette",
    "Lake Charles",
    "Kenner",
    "Bossier City",
    "Monroe",
  ],
  ME: [
    "Maine",
    "Portland",
    "Lewiston",
    "Bangor",
    "South Portland",
    "Auburn",
  ],
  MD: [
    "Maryland",
    "Baltimore",
    "Columbia",
    "Germantown",
    "Silver Spring",
    "Waldorf",
    "Frederick",
    "Ellicott City",
    "Glen Burnie",
    "Rockville",
    "Bowie",
    "Hagerstown",
  ],
  MA: [
    "Massachusetts",
    "Boston",
    "Worcester",
    "Springfield",
    "Cambridge",
    "Lowell",
    "Brockton",
    "New Bedford",
    "Quincy",
    "Lynn",
    "Fall River",
    "Newton",
    "Lawrence",
    "Somerville",
  ],
  MI: [
    "Michigan",
    "Detroit",
    "Grand Rapids",
    "Warren",
    "Sterling Heights",
    "Ann Arbor",
    "Lansing",
    "Flint",
    "Dearborn",
    "Livonia",
    "Clinton Township",
    "Troy",
    "Canton",
    "Westland",
    "Farmington Hills",
    "Kalamazoo",
  ],
  MN: [
    "Minnesota",
    "Minneapolis",
    "St. Paul",
    "Rochester",
    "Bloomington",
    "Duluth",
    "Brooklyn Park",
    "Plymouth",
    "Maple Grove",
    "Woodbury",
    "St. Cloud",
    "Eagan",
    "Eden Prairie",
  ],
  MS: [
    "Mississippi",
    "Jackson",
    "Gulfport",
    "Southaven",
    "Hattiesburg",
    "Biloxi",
    "Olive Branch",
    "Tupelo",
  ],
  MO: [
    "Missouri",
    "Kansas City",
    "St. Louis",
    "Springfield",
    "Columbia",
    "Independence",
    "Lee's Summit",
    "O'Fallon",
    "St. Joseph",
    "St. Charles",
    "Blue Springs",
    "Joplin",
  ],
  MT: [
    "Montana",
    "Billings",
    "Missoula",
    "Great Falls",
    "Bozeman",
    "Helena",
  ],
  NE: [
    "Nebraska",
    "Omaha",
    "Lincoln",
    "Bellevue",
    "Grand Island",
    "Kearney",
  ],
  NV: [
    "Nevada",
    "Las Vegas",
    "Henderson",
    "Reno",
    "North Las Vegas",
    "Sparks",
    "Carson City",
  ],
  NH: [
    "New Hampshire",
    "Manchester",
    "Nashua",
    "Concord",
    "Dover",
  ],
  NJ: [
    "New Jersey",
    "Newark",
    "Jersey City",
    "Paterson",
    "Elizabeth",
    "Lakewood",
    "Edison",
    "Woodbridge",
    "Toms River",
    "Trenton",
    "Clifton",
    "Camden",
    "Passaic",
    "Union City",
    "Bayonne",
    "East Orange",
    "Vineland",
    "New Brunswick",
    "Hoboken",
    "Perth Amboy",
  ],
  NM: [
    "New Mexico",
    "Albuquerque",
    "Las Cruces",
    "Rio Rancho",
    "Santa Fe",
    "Roswell",
    "Farmington",
  ],
  NY: [
    "New York",
    "New York City",
    "Buffalo",
    "Rochester",
    "Yonkers",
    "Syracuse",
    "Albany",
    "New Rochelle",
    "Mount Vernon",
    "Schenectady",
    "Utica",
    "White Plains",
    "Hempstead",
    "Troy",
    "Niagara Falls",
    "Binghamton",
  ],
  NC: [
    "North Carolina",
    "Charlotte",
    "Raleigh",
    "Greensboro",
    "Durham",
    "Winston-Salem",
    "Fayetteville",
    "Cary",
    "Wilmington",
    "High Point",
    "Asheville",
    "Concord",
    "Gastonia",
    "Jacksonville",
    "Chapel Hill",
    "Huntersville",
  ],
  ND: [
    "North Dakota",
    "Fargo",
    "Bismarck",
    "Grand Forks",
    "Minot",
  ],
  OH: [
    "Ohio",
    "Columbus",
    "Cleveland",
    "Cincinnati",
    "Toledo",
    "Akron",
    "Dayton",
    "Parma",
    "Canton",
    "Youngstown",
    "Lorain",
    "Hamilton",
    "Springfield",
    "Kettering",
    "Elyria",
    "Lakewood",
    "Cuyahoga Falls",
    "Middletown",
    "Newark",
    "Mansfield",
    "Mentor",
    "Dublin",
  ],
  OK: [
    "Oklahoma",
    "Oklahoma City",
    "Tulsa",
    "Norman",
    "Broken Arrow",
    "Edmond",
    "Lawton",
    "Moore",
    "Midwest City",
    "Stillwater",
    "Enid",
  ],
  OR: [
    "Oregon",
    "Portland",
    "Salem",
    "Eugene",
    "Gresham",
    "Hillsboro",
    "Beaverton",
    "Bend",
    "Medford",
    "Springfield",
    "Corvallis",
    "Albany",
  ],
  PA: [
    "Pennsylvania",
    "Philadelphia",
    "Pittsburgh",
    "Allentown",
    "Reading",
    "Scranton",
    "Bethlehem",
    "Lancaster",
    "Harrisburg",
    "Erie",
    "York",
    "Wilkes-Barre",
    "Chester",
    "State College",
    "Norristown",
  ],
  RI: [
    "Rhode Island",
    "Providence",
    "Warwick",
    "Cranston",
    "Pawtucket",
    "East Providence",
    "Woonsocket",
  ],
  SC: [
    "South Carolina",
    "Charleston",
    "Columbia",
    "North Charleston",
    "Mount Pleasant",
    "Rock Hill",
    "Greenville",
    "Summerville",
    "Spartanburg",
    "Goose Creek",
    "Hilton Head Island",
  ],
  SD: [
    "South Dakota",
    "Sioux Falls",
    "Rapid City",
    "Aberdeen",
    "Brookings",
  ],
  TN: [
    "Tennessee",
    "Nashville",
    "Memphis",
    "Knoxville",
    "Chattanooga",
    "Clarksville",
    "Murfreesboro",
    "Franklin",
    "Jackson",
    "Johnson City",
    "Bartlett",
    "Hendersonville",
    "Kingsport",
    "Collierville",
    "Smyrna",
  ],
  TX: [
    "Texas",
    "Houston",
    "San Antonio",
    "Dallas",
    "Austin",
    "Fort Worth",
    "El Paso",
    "Arlington",
    "Corpus Christi",
    "Plano",
    "Laredo",
    "Lubbock",
    "Garland",
    "Irving",
    "Amarillo",
    "Grand Prairie",
    "Brownsville",
    "McKinney",
    "Frisco",
    "Pasadena",
    "Killeen",
    "McAllen",
    "Midland",
    "Beaumont",
    "Denton",
    "Waco",
    "Round Rock",
    "Mesquite",
    "Carrollton",
    "Lewisville",
    "Abilene",
    "Richardson",
    "Odessa",
    "Allen",
    "Sugar Land",
    "Tyler",
    "League City",
    "Edinburg",
    "Pharr",
    "College Station",
    "San Marcos",
    "Flower Mound",
    "Temple",
    "New Braunfels",
    "Missouri City",
    "Conroe",
    "Cedar Park",
    "Harlingen",
    "Pearland",
    "Pflugerville",
  ],
  UT: [
    "Utah",
    "Salt Lake City",
    "West Valley City",
    "Provo",
    "West Jordan",
    "Orem",
    "Sandy",
    "Ogden",
    "St. George",
    "Layton",
    "Lehi",
  ],
  VT: [
    "Vermont",
    "Burlington",
    "South Burlington",
    "Rutland",
    "Barre",
  ],
  VA: [
    "Virginia",
    "Virginia Beach",
    "Norfolk",
    "Chesapeake",
    "Richmond",
    "Newport News",
    "Alexandria",
    "Hampton",
    "Roanoke",
    "Portsmouth",
    "Suffolk",
    "Lynchburg",
    "Charlottesville",
    "Manassas",
    "Fredericksburg",
  ],
  WA: [
    "Washington",
    "Seattle",
    "Spokane",
    "Tacoma",
    "Vancouver",
    "Bellevue",
    "Kent",
    "Everett",
    "Renton",
    "Federal Way",
    "Spokane Valley",
    "Kirkland",
    "Auburn",
    "Bellingham",
    "Redmond",
    "Lakewood",
  ],
  WV: [
    "West Virginia",
    "Charleston",
    "Huntington",
    "Morgantown",
    "Parkersburg",
    "Wheeling",
  ],
  WI: [
    "Wisconsin",
    "Milwaukee",
    "Madison",
    "Green Bay",
    "Kenosha",
    "Racine",
    "Appleton",
    "Waukesha",
    "Oshkosh",
    "Eau Claire",
    "Janesville",
    "West Allis",
    "La Crosse",
    "Sheboygan",
  ],
  WY: [
    "Wyoming",
    "Cheyenne",
    "Casper",
    "Laramie",
    "Gillette",
  ],
};

// ---------------------------------------------------------------------------
// County data — state abbr => county names (without "County" suffix)
// ---------------------------------------------------------------------------

const COUNTY_DATA: Record<string, string[]> = {
  AL: ["Jefferson", "Madison", "Mobile"],
  AR: ["Pulaski", "Benton", "Washington"],
  AZ: ["Maricopa", "Pima", "Pinal"],
  CA: ["Los Angeles", "San Diego", "Orange", "Riverside", "San Bernardino"],
  CO: ["El Paso", "Denver", "Arapahoe"],
  CT: ["Fairfield", "Hartford", "New Haven"],
  FL: ["Miami-Dade", "Broward", "Palm Beach", "Hillsborough", "Orange"],
  GA: ["Fulton", "Gwinnett", "Cobb", "DeKalb"],
  HI: ["Honolulu"],
  IL: ["Cook", "DuPage", "Lake", "Will"],
  IN: ["Marion", "Lake", "Allen"],
  IA: ["Polk", "Linn", "Scott"],
  KS: ["Johnson", "Sedgwick", "Shawnee"],
  KY: ["Jefferson", "Fayette", "Kenton"],
  LA: ["East Baton Rouge", "Jefferson", "Orleans"],
  MD: ["Montgomery", "Prince George's", "Baltimore"],
  MA: ["Middlesex", "Worcester", "Suffolk", "Essex", "Norfolk"],
  MI: ["Wayne", "Oakland", "Macomb", "Kent"],
  MN: ["Hennepin", "Ramsey", "Dakota"],
  MO: ["St. Louis", "Jackson", "St. Charles"],
  MS: ["Hinds", "Harrison", "DeSoto"],
  NE: ["Douglas", "Lancaster"],
  NV: ["Clark", "Washoe"],
  NJ: ["Bergen", "Middlesex", "Essex", "Hudson"],
  NM: ["Bernalillo", "Dona Ana"],
  NY: ["Kings", "Queens", "New York", "Suffolk", "Nassau", "Erie"],
  NC: ["Mecklenburg", "Wake", "Guilford", "Forsyth"],
  OH: ["Franklin", "Cuyahoga", "Hamilton", "Summit"],
  OK: ["Oklahoma", "Tulsa", "Cleveland"],
  OR: ["Multnomah", "Washington", "Clackamas"],
  PA: ["Philadelphia", "Allegheny", "Montgomery", "Bucks", "Delaware"],
  SC: ["Greenville", "Richland", "Charleston"],
  TN: ["Shelby", "Davidson", "Knox", "Hamilton"],
  TX: ["Harris", "Dallas", "Tarrant", "Bexar", "Travis", "El Paso"],
  UT: ["Salt Lake", "Utah", "Davis"],
  VA: ["Fairfax", "Prince William", "Loudoun"],
  WA: ["King", "Pierce", "Snohomish"],
  WI: ["Milwaukee", "Dane", "Waukesha"],
};

// ---------------------------------------------------------------------------
// Utility: slugify a string
// ---------------------------------------------------------------------------

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ---------------------------------------------------------------------------
// Build location arrays (cached on first call)
// ---------------------------------------------------------------------------

let _allLocations: Location[] | null = null;
let _locationBySlug: Map<string, Location> | null = null;

function buildLocations(): Location[] {
  const locations: Location[] = [];

  // Cities
  for (const [stateAbbr, data] of Object.entries(CITY_DATA)) {
    const [stateName, ...cities] = data;
    for (const city of cities) {
      const slug = `${slugify(city)}-${stateAbbr.toLowerCase()}`;
      locations.push({
        slug,
        name: city,
        state: stateName,
        stateAbbr,
        type: "city",
      });
    }
  }

  // Counties
  for (const [stateAbbr, counties] of Object.entries(COUNTY_DATA)) {
    const stateEntry = CITY_DATA[stateAbbr];
    const stateName = stateEntry ? stateEntry[0] : stateAbbr;
    for (const county of counties) {
      const slug = `${slugify(county)}-county-${stateAbbr.toLowerCase()}`;
      locations.push({
        slug,
        name: `${county} County`,
        state: stateName,
        stateAbbr,
        type: "county",
      });
    }
  }

  return locations;
}

function ensureBuilt(): void {
  if (_allLocations === null) {
    _allLocations = buildLocations();
    _locationBySlug = new Map(_allLocations.map((loc) => [loc.slug, loc]));
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Returns all locations (cities + counties).
 */
export function getAllLocations(): Location[] {
  ensureBuilt();
  return _allLocations!;
}

/**
 * Look up a single location by its slug.
 */
export function getLocationBySlug(slug: string): Location | undefined {
  ensureBuilt();
  return _locationBySlug!.get(slug);
}

/**
 * Returns every combination of dispute-type slug + location slug,
 * joined by a hyphen: "security-deposit-los-angeles-ca"
 */
export function getAllLocalPageSlugs(): string[] {
  ensureBuilt();
  const slugs: string[] = [];
  for (const dispute of LOCAL_DISPUTE_TYPES) {
    for (const loc of _allLocations!) {
      slugs.push(`${dispute.slug}-${loc.slug}`);
    }
  }
  return slugs;
}

/**
 * Parse a combined local-page slug back into its dispute type and location.
 *
 * Strategy: try each dispute-type slug as a prefix (longest first to avoid
 * prefix collisions like "small-claims-demand" vs "small-claims"). If the
 * remainder (after removing the dispute slug and the joining hyphen) matches
 * a known location slug, return both.
 */
export function parseLocalPageSlug(
  slug: string
): { disputeType: (typeof LOCAL_DISPUTE_TYPES)[number]; location: Location } | null {
  ensureBuilt();

  // Sort dispute types by slug length descending so longer prefixes match first
  const sorted = [...LOCAL_DISPUTE_TYPES].sort(
    (a, b) => b.slug.length - a.slug.length
  );

  for (const dispute of sorted) {
    const prefix = dispute.slug + "-";
    if (slug.startsWith(prefix)) {
      const locationSlug = slug.slice(prefix.length);
      const location = _locationBySlug!.get(locationSlug);
      if (location) {
        return { disputeType: dispute, location };
      }
    }
  }

  return null;
}
