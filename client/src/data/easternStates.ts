export interface State {
  name: string;
  slug: string;
  abbreviation: string;
  url: string;
  population: number;
  description: string;
  coordinates: { lat: number; lng: number };
  coastalLength: number; // miles of coastline
}

export const EASTERN_COASTLINE_STATES: State[] = [
  {
    name: 'Maine',
    slug: 'maine',
    abbreviation: 'ME',
    url: '/maine-golf-carts',
    population: 1396000,
    description: 'Rugged coastline with countless bays, islands, and charming coastal communities',
    coordinates: { lat: 45.2538, lng: -69.4455 },
    coastalLength: 3500
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    abbreviation: 'NH',
    url: '/new-hampshire-golf-carts',
    population: 1395000,
    description: 'Short but beautiful coastline with historic seaport towns',
    coordinates: { lat: 43.1939, lng: -71.5724 },
    coastalLength: 18
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    abbreviation: 'MA',
    url: '/massachusetts-golf-carts',
    population: 7001000,
    description: 'Historic coastline from Cape Cod to the North Shore with iconic beach communities',
    coordinates: { lat: 42.2081, lng: -71.0275 },
    coastalLength: 1519
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    abbreviation: 'RI',
    url: '/rhode-island-golf-carts',
    population: 1098000,
    description: 'Ocean State with pristine beaches and historic coastal estates',
    coordinates: { lat: 41.6809, lng: -71.5118 },
    coastalLength: 400
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    abbreviation: 'CT',
    url: '/connecticut-golf-carts',
    population: 3626000,
    description: 'Long Island Sound coastline with charming New England shore towns',
    coordinates: { lat: 41.5978, lng: -72.7554 },
    coastalLength: 618
  },
  {
    name: 'New York',
    slug: 'new-york',
    abbreviation: 'NY',
    url: '/new-york-golf-carts',
    population: 19850000,
    description: 'Diverse coastline from Long Island beaches to Hudson River waterfront',
    coordinates: { lat: 42.1657, lng: -74.9481 },
    coastalLength: 2625
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    abbreviation: 'NJ',
    url: '/new-jersey-golf-carts',
    population: 9290000,
    description: 'Jersey Shore with famous beach resorts and barrier islands',
    coordinates: { lat: 40.2989, lng: -74.5210 },
    coastalLength: 130
  },
  {
    name: 'Delaware',
    slug: 'delaware',
    abbreviation: 'DE',
    url: '/delaware-golf-carts',
    population: 1018000,
    description: 'First State with pristine beaches and Delaware Bay coastline',
    coordinates: { lat: 39.3185, lng: -75.5071 },
    coastalLength: 28
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    abbreviation: 'MD',
    url: '/maryland-golf-carts',
    population: 6164000,
    description: 'Chesapeake Bay and Atlantic Ocean coastline with historic towns',
    coordinates: { lat: 39.0639, lng: -76.8021 },
    coastalLength: 4431
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    abbreviation: 'VA',
    url: '/virginia-golf-carts',
    population: 8715000,
    description: 'Chesapeake Bay and Atlantic coastline with Virginia Beach and historic ports',
    coordinates: { lat: 37.7693, lng: -78.2057 },
    coastalLength: 3315
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    abbreviation: 'NC',
    url: '/north-carolina-golf-carts',
    population: 10698000,
    description: 'Outer Banks barrier islands and pristine Atlantic coastline',
    coordinates: { lat: 35.5175, lng: -79.0193 },
    coastalLength: 3375
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    abbreviation: 'SC',
    url: '/south-carolina-golf-carts',
    population: 5282000,
    description: 'Lowcountry coast with Sea Islands and historic Charleston',
    coordinates: { lat: 33.8569, lng: -80.9450 },
    coastalLength: 2876
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    abbreviation: 'GA',
    url: '/georgia-golf-carts',
    population: 10912000,
    description: 'Golden Isles and coastal plains with historic Savannah',
    coordinates: { lat: 33.0406, lng: -83.6431 },
    coastalLength: 2344
  },
  {
    name: 'Florida',
    slug: 'florida',
    abbreviation: 'FL',
    url: '/florida-golf-carts',
    population: 22610000,
    description: 'Atlantic and Gulf coastlines with world-famous beaches and bays',
    coordinates: { lat: 27.7663, lng: -81.6868 },
    coastalLength: 8436
  }
];