// ---------------------------------------------------------------------------
// cities.ts – US city list, dispute categories, and slug helpers
// ---------------------------------------------------------------------------

export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  stateCode: string;
}

export interface DisputeCategory {
  id: string;
  label: string;
  opponentLabel: string;
}

// ---------------------------------------------------------------------------
// 82 Major US Cities
// ---------------------------------------------------------------------------

export const CITIES: City[] = [
  // California (12)
  { slug: "los-angeles-ca", name: "Los Angeles", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "san-francisco-ca", name: "San Francisco", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "san-diego-ca", name: "San Diego", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "san-jose-ca", name: "San Jose", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "sacramento-ca", name: "Sacramento", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "oakland-ca", name: "Oakland", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "long-beach-ca", name: "Long Beach", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "fresno-ca", name: "Fresno", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "irvine-ca", name: "Irvine", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "anaheim-ca", name: "Anaheim", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "riverside-ca", name: "Riverside", state: "California", stateAbbr: "CA", stateCode: "CA" },
  { slug: "bakersfield-ca", name: "Bakersfield", state: "California", stateAbbr: "CA", stateCode: "CA" },

  // Texas (8)
  { slug: "houston-tx", name: "Houston", state: "Texas", stateAbbr: "TX", stateCode: "TX" },
  { slug: "austin-tx", name: "Austin", state: "Texas", stateAbbr: "TX", stateCode: "TX" },
  { slug: "dallas-tx", name: "Dallas", state: "Texas", stateAbbr: "TX", stateCode: "TX" },
  { slug: "san-antonio-tx", name: "San Antonio", state: "Texas", stateAbbr: "TX", stateCode: "TX" },
  { slug: "fort-worth-tx", name: "Fort Worth", state: "Texas", stateAbbr: "TX", stateCode: "TX" },
  { slug: "el-paso-tx", name: "El Paso", state: "Texas", stateAbbr: "TX", stateCode: "TX" },
  { slug: "plano-tx", name: "Plano", state: "Texas", stateAbbr: "TX", stateCode: "TX" },
  { slug: "arlington-tx", name: "Arlington", state: "Texas", stateAbbr: "TX", stateCode: "TX" },

  // Florida (6)
  { slug: "miami-fl", name: "Miami", state: "Florida", stateAbbr: "FL", stateCode: "FL" },
  { slug: "orlando-fl", name: "Orlando", state: "Florida", stateAbbr: "FL", stateCode: "FL" },
  { slug: "tampa-fl", name: "Tampa", state: "Florida", stateAbbr: "FL", stateCode: "FL" },
  { slug: "jacksonville-fl", name: "Jacksonville", state: "Florida", stateAbbr: "FL", stateCode: "FL" },
  { slug: "fort-lauderdale-fl", name: "Fort Lauderdale", state: "Florida", stateAbbr: "FL", stateCode: "FL" },
  { slug: "st-petersburg-fl", name: "St. Petersburg", state: "Florida", stateAbbr: "FL", stateCode: "FL" },

  // New York (4)
  { slug: "new-york-city-ny", name: "New York City", state: "New York", stateAbbr: "NY", stateCode: "NY" },
  { slug: "brooklyn-ny", name: "Brooklyn", state: "New York", stateAbbr: "NY", stateCode: "NY" },
  { slug: "buffalo-ny", name: "Buffalo", state: "New York", stateAbbr: "NY", stateCode: "NY" },
  { slug: "rochester-ny", name: "Rochester", state: "New York", stateAbbr: "NY", stateCode: "NY" },

  // Arizona (4)
  { slug: "phoenix-az", name: "Phoenix", state: "Arizona", stateAbbr: "AZ", stateCode: "AZ" },
  { slug: "tucson-az", name: "Tucson", state: "Arizona", stateAbbr: "AZ", stateCode: "AZ" },
  { slug: "mesa-az", name: "Mesa", state: "Arizona", stateAbbr: "AZ", stateCode: "AZ" },
  { slug: "scottsdale-az", name: "Scottsdale", state: "Arizona", stateAbbr: "AZ", stateCode: "AZ" },

  // Washington (3)
  { slug: "seattle-wa", name: "Seattle", state: "Washington", stateAbbr: "WA", stateCode: "WA" },
  { slug: "spokane-wa", name: "Spokane", state: "Washington", stateAbbr: "WA", stateCode: "WA" },
  { slug: "tacoma-wa", name: "Tacoma", state: "Washington", stateAbbr: "WA", stateCode: "WA" },

  // Colorado (3)
  { slug: "denver-co", name: "Denver", state: "Colorado", stateAbbr: "CO", stateCode: "CO" },
  { slug: "colorado-springs-co", name: "Colorado Springs", state: "Colorado", stateAbbr: "CO", stateCode: "CO" },
  { slug: "aurora-co", name: "Aurora", state: "Colorado", stateAbbr: "CO", stateCode: "CO" },

  // Illinois (2)
  { slug: "chicago-il", name: "Chicago", state: "Illinois", stateAbbr: "IL", stateCode: "IL" },
  { slug: "naperville-il", name: "Naperville", state: "Illinois", stateAbbr: "IL", stateCode: "IL" },

  // Georgia (3)
  { slug: "atlanta-ga", name: "Atlanta", state: "Georgia", stateAbbr: "GA", stateCode: "GA" },
  { slug: "savannah-ga", name: "Savannah", state: "Georgia", stateAbbr: "GA", stateCode: "GA" },
  { slug: "augusta-ga", name: "Augusta", state: "Georgia", stateAbbr: "GA", stateCode: "GA" },

  // North Carolina (3)
  { slug: "charlotte-nc", name: "Charlotte", state: "North Carolina", stateAbbr: "NC", stateCode: "NC" },
  { slug: "raleigh-nc", name: "Raleigh", state: "North Carolina", stateAbbr: "NC", stateCode: "NC" },
  { slug: "durham-nc", name: "Durham", state: "North Carolina", stateAbbr: "NC", stateCode: "NC" },

  // Massachusetts (2)
  { slug: "boston-ma", name: "Boston", state: "Massachusetts", stateAbbr: "MA", stateCode: "MA" },
  { slug: "cambridge-ma", name: "Cambridge", state: "Massachusetts", stateAbbr: "MA", stateCode: "MA" },

  // Nevada (2)
  { slug: "las-vegas-nv", name: "Las Vegas", state: "Nevada", stateAbbr: "NV", stateCode: "NV" },
  { slug: "reno-nv", name: "Reno", state: "Nevada", stateAbbr: "NV", stateCode: "NV" },

  // Oregon (2)
  { slug: "portland-or", name: "Portland", state: "Oregon", stateAbbr: "OR", stateCode: "OR" },
  { slug: "eugene-or", name: "Eugene", state: "Oregon", stateAbbr: "OR", stateCode: "OR" },

  // Pennsylvania (3)
  { slug: "philadelphia-pa", name: "Philadelphia", state: "Pennsylvania", stateAbbr: "PA", stateCode: "PA" },
  { slug: "pittsburgh-pa", name: "Pittsburgh", state: "Pennsylvania", stateAbbr: "PA", stateCode: "PA" },
  { slug: "harrisburg-pa", name: "Harrisburg", state: "Pennsylvania", stateAbbr: "PA", stateCode: "PA" },

  // Ohio (3)
  { slug: "columbus-oh", name: "Columbus", state: "Ohio", stateAbbr: "OH", stateCode: "OH" },
  { slug: "cleveland-oh", name: "Cleveland", state: "Ohio", stateAbbr: "OH", stateCode: "OH" },
  { slug: "cincinnati-oh", name: "Cincinnati", state: "Ohio", stateAbbr: "OH", stateCode: "OH" },

  // Michigan (2)
  { slug: "detroit-mi", name: "Detroit", state: "Michigan", stateAbbr: "MI", stateCode: "MI" },
  { slug: "grand-rapids-mi", name: "Grand Rapids", state: "Michigan", stateAbbr: "MI", stateCode: "MI" },

  // Minnesota (2)
  { slug: "minneapolis-mn", name: "Minneapolis", state: "Minnesota", stateAbbr: "MN", stateCode: "MN" },
  { slug: "st-paul-mn", name: "St. Paul", state: "Minnesota", stateAbbr: "MN", stateCode: "MN" },

  // Utah (2)
  { slug: "salt-lake-city-ut", name: "Salt Lake City", state: "Utah", stateAbbr: "UT", stateCode: "UT" },
  { slug: "provo-ut", name: "Provo", state: "Utah", stateAbbr: "UT", stateCode: "UT" },

  // Missouri (2)
  { slug: "kansas-city-mo", name: "Kansas City", state: "Missouri", stateAbbr: "MO", stateCode: "MO" },
  { slug: "st-louis-mo", name: "St. Louis", state: "Missouri", stateAbbr: "MO", stateCode: "MO" },

  // Tennessee (2)
  { slug: "nashville-tn", name: "Nashville", state: "Tennessee", stateAbbr: "TN", stateCode: "TN" },
  { slug: "memphis-tn", name: "Memphis", state: "Tennessee", stateAbbr: "TN", stateCode: "TN" },

  // DC (1)
  { slug: "washington-dc", name: "Washington", state: "District of Columbia", stateAbbr: "DC", stateCode: "DC" },

  // Maryland (1)
  { slug: "baltimore-md", name: "Baltimore", state: "Maryland", stateAbbr: "MD", stateCode: "MD" },

  // Virginia (2)
  { slug: "richmond-va", name: "Richmond", state: "Virginia", stateAbbr: "VA", stateCode: "VA" },
  { slug: "virginia-beach-va", name: "Virginia Beach", state: "Virginia", stateAbbr: "VA", stateCode: "VA" },

  // Indiana (1)
  { slug: "indianapolis-in", name: "Indianapolis", state: "Indiana", stateAbbr: "IN", stateCode: "IN" },

  // Wisconsin (1)
  { slug: "milwaukee-wi", name: "Milwaukee", state: "Wisconsin", stateAbbr: "WI", stateCode: "WI" },

  // Oklahoma (1)
  { slug: "oklahoma-city-ok", name: "Oklahoma City", state: "Oklahoma", stateAbbr: "OK", stateCode: "OK" },

  // Kentucky (1)
  { slug: "louisville-ky", name: "Louisville", state: "Kentucky", stateAbbr: "KY", stateCode: "KY" },

  // Louisiana (1)
  { slug: "new-orleans-la", name: "New Orleans", state: "Louisiana", stateAbbr: "LA", stateCode: "LA" },

  // Alabama (1)
  { slug: "birmingham-al", name: "Birmingham", state: "Alabama", stateAbbr: "AL", stateCode: "AL" },

  // South Carolina (1)
  { slug: "charleston-sc", name: "Charleston", state: "South Carolina", stateAbbr: "SC", stateCode: "SC" },

  // Connecticut (1)
  { slug: "hartford-ct", name: "Hartford", state: "Connecticut", stateAbbr: "CT", stateCode: "CT" },
];

// ---------------------------------------------------------------------------
// Local Dispute Categories
// ---------------------------------------------------------------------------

export const LOCAL_DISPUTE_CATEGORIES: DisputeCategory[] = [
  { id: "landlord", label: "Security Deposit Dispute", opponentLabel: "a landlord" },
  { id: "hoa", label: "HOA Fine Dispute", opponentLabel: "an HOA" },
  { id: "medical", label: "Medical Billing Dispute", opponentLabel: "a hospital or insurance company" },
  { id: "employer", label: "Employment Dispute", opponentLabel: "an employer" },
  { id: "collector", label: "Debt Collection Dispute", opponentLabel: "a debt collector" },
  { id: "government", label: "Government Agency Dispute", opponentLabel: "a government agency" },
  { id: "insurance", label: "Insurance Claim Dispute", opponentLabel: "an insurance company" },
  { id: "contractor", label: "Contractor Dispute", opponentLabel: "a contractor or service provider" },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/** Look up a city by its URL slug (e.g. "los-angeles-ca"). */
export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

/** Build a local-page slug like "landlord-los-angeles-ca". */
export function getLocalPageSlug(category: string, city: City): string {
  return `${category}-${city.slug}`;
}

/**
 * Parse a combined local-page slug back into its parts.
 * Returns `{ categoryId, citySlug }` or `null` if no match is found.
 */
export function parseLocalPageSlug(
  slug: string
): { categoryId: string; citySlug: string } | null {
  // Try each category prefix; longest-match-first isn't necessary because none
  // of the category ids are prefixes of each other, but we sort by length
  // descending for safety.
  const sorted = [...LOCAL_DISPUTE_CATEGORIES].sort(
    (a, b) => b.id.length - a.id.length
  );

  for (const cat of sorted) {
    const prefix = `${cat.id}-`;
    if (slug.startsWith(prefix)) {
      const citySlug = slug.slice(prefix.length);
      if (getCityBySlug(citySlug)) {
        return { categoryId: cat.id, citySlug };
      }
    }
  }

  return null;
}

/** Generate every category + city slug combination. */
export function getAllLocalPageSlugs(): string[] {
  const slugs: string[] = [];
  for (const cat of LOCAL_DISPUTE_CATEGORIES) {
    for (const city of CITIES) {
      slugs.push(getLocalPageSlug(cat.id, city));
    }
  }
  return slugs;
}
