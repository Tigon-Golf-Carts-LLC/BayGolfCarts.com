export interface ShoreTown {
  name: string;
  slug: string;
  state: string;
  stateAbbrev: string;
  url: string;
  population: number;
  description: string;
  coordinates: { lat: number; lng: number };
  type: 'Beach Town' | 'Harbor Town' | 'Resort City' | 'Historic Port' | 'Island Community';
  famous_for: string[];
}

export const SHORE_TOWNS_BY_STATE: Record<string, ShoreTown[]> = {
  maine: [
    {
      name: 'Bar Harbor',
      slug: 'bar-harbor',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/bar-harbor-golf-carts',
      population: 5089,
      description: 'Gateway to Acadia National Park with stunning coastal views',
      coordinates: { lat: 44.3876, lng: -68.2039 },
      type: 'Resort City',
      famous_for: ['Acadia National Park', 'Lobster rolls', 'Cadillac Mountain']
    },
    {
      name: 'Camden',
      slug: 'camden',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/camden-golf-carts',
      population: 4850,
      description: 'Picturesque harbor town with mountains meeting the sea',
      coordinates: { lat: 44.2098, lng: -69.0648 },
      type: 'Harbor Town',
      famous_for: ['Camden Hills State Park', 'Windjammer fleet', 'Opera House']
    },
    {
      name: 'Kennebunkport',
      slug: 'kennebunkport',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/kennebunkport-golf-carts',
      population: 3629,
      description: 'Historic seaport known for presidential visits',
      coordinates: { lat: 43.3618, lng: -70.4767 },
      type: 'Historic Port',
      famous_for: ['Bush family compound', 'Dock Square', 'Walker\'s Point']
    },
    {
      name: 'Old Orchard Beach',
      slug: 'old-orchard-beach',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/old-orchard-beach-golf-carts',
      population: 8960,
      description: 'Seven-mile stretch of sandy beach with historic pier',
      coordinates: { lat: 43.5153, lng: -70.3773 },
      type: 'Beach Town',
      famous_for: ['Seven-mile beach', 'Historic pier', 'Amusement park']
    },
    {
      name: 'Portland',
      slug: 'portland',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/portland-golf-carts',
      population: 68408,
      description: 'Largest city with vibrant Old Port and lighthouse',
      coordinates: { lat: 43.6615, lng: -70.2553 },
      type: 'Historic Port',
      famous_for: ['Old Port district', 'Portland Head Light', 'Food scene']
    },
    {
      name: 'Rockland',
      slug: 'rockland',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/rockland-golf-carts',
      population: 7172,
      description: 'Lobster capital and home to the Farnsworth Art Museum',
      coordinates: { lat: 44.1037, lng: -69.1092 },
      type: 'Harbor Town',
      famous_for: ['Maine Lobster Festival', 'Farnsworth Art Museum', 'Breakwater lighthouse']
    }
  ],
  'new-hampshire': [
    {
      name: 'Hampton Beach',
      slug: 'hampton-beach',
      state: 'New Hampshire',
      stateAbbrev: 'NH',
      url: '/new-hampshire/hampton-beach-golf-carts',
      population: 2598,
      description: 'Popular beach resort with boardwalk and casino',
      coordinates: { lat: 42.9009, lng: -70.8103 },
      type: 'Beach Town',
      famous_for: ['Hampton Beach Boardwalk', 'Seashell Stage', 'Beach volleyball']
    },
    {
      name: 'Portsmouth',
      slug: 'portsmouth',
      state: 'New Hampshire',
      stateAbbrev: 'NH',
      url: '/new-hampshire/portsmouth-golf-carts',
      population: 22314,
      description: 'Historic seaport with colonial architecture',
      coordinates: { lat: 43.0718, lng: -70.7626 },
      type: 'Historic Port',
      famous_for: ['Strawbery Banke Museum', 'Market Square', 'Portsmouth Harbor']
    },
    {
      name: 'Rye',
      slug: 'rye',
      state: 'New Hampshire',
      stateAbbrev: 'NH',
      url: '/new-hampshire/rye-golf-carts',
      population: 5543,
      description: 'Coastal town with rocky shores and beaches',
      coordinates: { lat: 43.0187, lng: -70.7948 },
      type: 'Beach Town',
      famous_for: ['Wallis Sands State Beach', 'Rye Harbor', 'Granite coastline']
    }
  ],
  massachusetts: [
    {
      name: 'Provincetown',
      slug: 'provincetown',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/provincetown-golf-carts',
      population: 2602,
      description: 'Historic fishing village at the tip of Cape Cod',
      coordinates: { lat: 42.0526, lng: -70.1826 },
      type: 'Historic Port',
      famous_for: ['Pilgrim Monument', 'Art galleries', 'Whale watching']
    },
    {
      name: 'Nantucket',
      slug: 'nantucket',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/nantucket-golf-carts',
      population: 14255,
      description: 'Historic whaling island with cobblestone streets',
      coordinates: { lat: 41.2835, lng: -70.0995 },
      type: 'Island Community',
      famous_for: ['Whaling museum', 'Cobblestone streets', 'Lightship baskets']
    },
    {
      name: 'Martha\'s Vineyard',
      slug: 'marthas-vineyard',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/marthas-vineyard-golf-carts',
      population: 20530,
      description: 'Prestigious island retreat with charming towns',
      coordinates: { lat: 41.3888, lng: -70.6173 },
      type: 'Island Community',
      famous_for: ['Gingerbread cottages', 'Gay Head Cliffs', 'Presidential visits']
    },
    {
      name: 'Cape Cod',
      slug: 'cape-cod',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/cape-cod-golf-carts',
      population: 228996,
      description: 'Famous peninsula with numerous beach towns',
      coordinates: { lat: 41.6688, lng: -70.2962 },
      type: 'Beach Town',
      famous_for: ['Cape Cod National Seashore', 'Chatham seals', 'Cranberry bogs']
    },
    {
      name: 'Salem',
      slug: 'salem',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/salem-golf-carts',
      population: 44480,
      description: 'Historic port famous for witch trials',
      coordinates: { lat: 42.5195, lng: -70.8967 },
      type: 'Historic Port',
      famous_for: ['Witch trials', 'Salem Maritime', 'House of Seven Gables']
    },
    {
      name: 'Gloucester',
      slug: 'gloucester',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/gloucester-golf-carts',
      population: 30291,
      description: 'Working fishing port with rocky coast',
      coordinates: { lat: 42.6159, lng: -70.6594 },
      type: 'Harbor Town',
      famous_for: ['Fishing fleet', 'Rocky Neck Art Colony', 'Perfect Storm']
    }
  ],
  'rhode-island': [
    {
      name: 'Newport',
      slug: 'newport',
      state: 'Rhode Island',
      stateAbbrev: 'RI',
      url: '/rhode-island/newport-golf-carts',
      population: 25163,
      description: 'Gilded Age mansions and sailing capital',
      coordinates: { lat: 41.4901, lng: -71.3128 },
      type: 'Resort City',
      famous_for: ['The Breakers mansion', 'Newport Jazz Festival', 'Cliff Walk']
    },
    {
      name: 'Block Island',
      slug: 'block-island',
      state: 'Rhode Island',
      stateAbbrev: 'RI',
      url: '/rhode-island/block-island-golf-carts',
      population: 1410,
      description: 'Pristine island getaway with dramatic bluffs',
      coordinates: { lat: 41.1697, lng: -71.5811 },
      type: 'Island Community',
      famous_for: ['Mohegan Bluffs', 'Southeast Light', 'Ferry access only']
    },
    {
      name: 'Narragansett',
      slug: 'narragansett',
      state: 'Rhode Island',
      stateAbbrev: 'RI',
      url: '/rhode-island/narragansett-golf-carts',
      population: 15868,
      description: 'Beach town with historic pier and towers',
      coordinates: { lat: 41.3537, lng: -71.4774 },
      type: 'Beach Town',
      famous_for: ['Narragansett Pier', 'The Towers', 'Surfing']
    },
    {
      name: 'Westerly',
      slug: 'westerly',
      state: 'Rhode Island',
      stateAbbrev: 'RI',
      url: '/rhode-island/westerly-golf-carts',
      population: 23359,
      description: 'Victorian seaside resort with pristine beaches',
      coordinates: { lat: 41.3776, lng: -71.8270 },
      type: 'Beach Town',
      famous_for: ['Watch Hill', 'Flying Horse Carousel', 'Ocean House']
    }
  ],
  connecticut: [
    {
      name: 'Mystic',
      slug: 'mystic',
      state: 'Connecticut',
      stateAbbrev: 'CT',
      url: '/connecticut/mystic-golf-carts',
      population: 4205,
      description: 'Historic seaport with maritime museum',
      coordinates: { lat: 41.3712, lng: -71.9662 },
      type: 'Historic Port',
      famous_for: ['Mystic Seaport Museum', 'Mystic Pizza', 'Drawbridge']
    },
    {
      name: 'Old Saybrook',
      slug: 'old-saybrook',
      state: 'Connecticut',
      stateAbbrev: 'CT',
      url: '/connecticut/old-saybrook-golf-carts',
      population: 10481,
      description: 'Historic town at the mouth of Connecticut River',
      coordinates: { lat: 41.3006, lng: -72.3909 },
      type: 'Historic Port',
      famous_for: ['Connecticut River', 'Katharine Hepburn', 'Harvey\'s Beach']
    },
    {
      name: 'Stonington',
      slug: 'stonington',
      state: 'Connecticut',
      stateAbbrev: 'CT',
      url: '/connecticut/stonington-golf-carts',
      population: 18335,
      description: 'Charming fishing village with historic borough',
      coordinates: { lat: 41.3365, lng: -71.9065 },
      type: 'Harbor Town',
      famous_for: ['Stonington Borough', 'Old Lighthouse Museum', 'Fishing fleet']
    },
    {
      name: 'Madison',
      slug: 'madison',
      state: 'Connecticut',
      stateAbbrev: 'CT',
      url: '/connecticut/madison-golf-carts',
      population: 18544,
      description: 'Affluent shore town with beautiful beaches',
      coordinates: { lat: 41.2798, lng: -72.5987 },
      type: 'Beach Town',
      famous_for: ['Hammonasset Beach State Park', 'Madison Beach Hotel', 'Historic green']
    }
  ],
  'new-york': [
    {
      name: 'Montauk',
      slug: 'montauk',
      state: 'New York',
      stateAbbrev: 'NY',
      url: '/new-york/montauk-golf-carts',
      population: 4318,
      description: 'The End - easternmost point of Long Island',
      coordinates: { lat: 41.0362, lng: -71.9542 },
      type: 'Beach Town',
      famous_for: ['Montauk Point Lighthouse', 'Sport fishing', 'The Hamptons nearby']
    },
    {
      name: 'The Hamptons',
      slug: 'the-hamptons',
      state: 'New York',
      stateAbbrev: 'NY',
      url: '/new-york/the-hamptons-golf-carts',
      population: 84317,
      description: 'Exclusive summer retreat for wealthy New Yorkers',
      coordinates: { lat: 40.8843, lng: -72.3065 },
      type: 'Resort City',
      famous_for: ['Summer estates', 'Southampton', 'East Hampton']
    },
    {
      name: 'Fire Island',
      slug: 'fire-island',
      state: 'New York',
      stateAbbrev: 'NY',
      url: '/new-york/fire-island-golf-carts',
      population: 300,
      description: 'Car-free barrier island with pristine beaches',
      coordinates: { lat: 40.6501, lng: -73.1001 },
      type: 'Island Community',
      famous_for: ['No cars allowed', 'Fire Island Lighthouse', 'Cherry Grove']
    },
    {
      name: 'Shelter Island',
      slug: 'shelter-island',
      state: 'New York',
      stateAbbrev: 'NY',
      url: '/new-york/shelter-island-golf-carts',
      population: 3253,
      description: 'Peaceful island between North and South Forks',
      coordinates: { lat: 41.0718, lng: -72.3465 },
      type: 'Island Community',
      famous_for: ['Mashomack Preserve', 'Ferry access', 'Sylvester Manor']
    },
    {
      name: 'Sag Harbor',
      slug: 'sag-harbor',
      state: 'New York',
      stateAbbrev: 'NY',
      url: '/new-york/sag-harbor-golf-carts',
      population: 2772,
      description: 'Historic whaling port with maritime charm',
      coordinates: { lat: 40.9473, lng: -72.2929 },
      type: 'Historic Port',
      famous_for: ['Whaling history', 'Historic district', 'Windmill']
    }
  ],
  'new-jersey': [
    {
      name: 'Cape May',
      slug: 'cape-may',
      state: 'New Jersey',
      stateAbbrev: 'NJ',
      url: '/new-jersey/cape-may-golf-carts',
      population: 2768,
      description: 'Victorian seaside resort at southern tip',
      coordinates: { lat: 38.9351, lng: -74.9060 },
      type: 'Resort City',
      famous_for: ['Victorian architecture', 'Cape May Point Lighthouse', 'Bird watching']
    },
    {
      name: 'Atlantic City',
      slug: 'atlantic-city',
      state: 'New Jersey',
      stateAbbrev: 'NJ',
      url: '/new-jersey/atlantic-city-golf-carts',
      population: 37743,
      description: 'Resort city famous for casinos and boardwalk',
      coordinates: { lat: 39.3643, lng: -74.4229 },
      type: 'Resort City',
      famous_for: ['Boardwalk', 'Casinos', 'Steel Pier']
    },
    {
      name: 'Ocean City',
      slug: 'ocean-city',
      state: 'New Jersey',
      stateAbbrev: 'NJ',
      url: '/new-jersey/ocean-city-golf-carts',
      population: 11229,
      description: 'Family-friendly dry town with great beaches',
      coordinates: { lat: 39.2776, lng: -74.5746 },
      type: 'Beach Town',
      famous_for: ['Dry town', 'Family boardwalk', 'Music Pier']
    },
    {
      name: 'Seaside Heights',
      slug: 'seaside-heights',
      state: 'New Jersey',
      stateAbbrev: 'NJ',
      url: '/new-jersey/seaside-heights-golf-carts',
      population: 2887,
      description: 'Popular beach resort with amusement pier',
      coordinates: { lat: 39.9440, lng: -74.0727 },
      type: 'Beach Town',
      famous_for: ['Casino Pier', 'Jersey Shore TV show', 'Funtown Pier']
    },
    {
      name: 'Spring Lake',
      slug: 'spring-lake',
      state: 'New Jersey',
      stateAbbrev: 'NJ',
      url: '/new-jersey/spring-lake-golf-carts',
      population: 2993,
      description: 'Upscale Victorian resort town',
      coordinates: { lat: 40.1532, lng: -74.0279 },
      type: 'Resort City',
      famous_for: ['Victorian hotels', 'Non-commercial beach', 'The Irish Riviera']
    }
  ],
  delaware: [
    {
      name: 'Rehoboth Beach',
      slug: 'rehoboth-beach',
      state: 'Delaware',
      stateAbbrev: 'DE',
      url: '/delaware/rehoboth-beach-golf-carts',
      population: 1108,
      description: 'The Nation\'s Summer Capital with famous boardwalk',
      coordinates: { lat: 38.7198, lng: -75.0757 },
      type: 'Beach Town',
      famous_for: ['Boardwalk', 'Dolle\'s taffy', 'The Nation\'s Summer Capital']
    },
    {
      name: 'Bethany Beach',
      slug: 'bethany-beach',
      state: 'Delaware',
      stateAbbrev: 'DE',
      url: '/delaware/bethany-beach-golf-carts',
      population: 1108,
      description: 'Quiet family beach town',
      coordinates: { lat: 38.5387, lng: -75.0630 },
      type: 'Beach Town',
      famous_for: ['Family friendly', 'Quiet beaches', 'Nature preserve']
    },
    {
      name: 'Dewey Beach',
      slug: 'dewey-beach',
      state: 'Delaware',
      stateAbbrev: 'DE',
      url: '/delaware/dewey-beach-golf-carts',
      population: 341,
      description: 'Nightlife capital of Delaware beaches',
      coordinates: { lat: 38.6912, lng: -75.0715 },
      type: 'Beach Town',
      famous_for: ['Nightlife', 'Water sports', 'Young crowd']
    },
    {
      name: 'Lewes',
      slug: 'lewes',
      state: 'Delaware',
      stateAbbrev: 'DE',
      url: '/delaware/lewes-golf-carts',
      population: 3303,
      description: 'First Town in the First State with historic charm',
      coordinates: { lat: 38.7743, lng: -75.1391 },
      type: 'Historic Port',
      famous_for: ['First settlement', 'Cape May-Lewes Ferry', 'Historic district']
    }
  ],
  maryland: [
    {
      name: 'Ocean City',
      slug: 'ocean-city-md',
      state: 'Maryland',
      stateAbbrev: 'MD',
      url: '/maryland/ocean-city-golf-carts',
      population: 6844,
      description: 'Premier beach resort with famous boardwalk',
      coordinates: { lat: 38.3365, lng: -75.0849 },
      type: 'Beach Town',
      famous_for: ['10-mile beach', 'Boardwalk', 'Trimper\'s Rides']
    },
    {
      name: 'Annapolis',
      slug: 'annapolis',
      state: 'Maryland',
      stateAbbrev: 'MD',
      url: '/maryland/annapolis-golf-carts',
      population: 40812,
      description: 'Sailing capital and state capital',
      coordinates: { lat: 38.9726, lng: -76.5019 },
      type: 'Historic Port',
      famous_for: ['Naval Academy', 'State capitol', 'Sailing']
    },
    {
      name: 'St. Michaels',
      slug: 'st-michaels',
      state: 'Maryland',
      stateAbbrev: 'MD',
      url: '/maryland/st-michaels-golf-carts',
      population: 1026,
      description: 'Historic Chesapeake Bay town',
      coordinates: { lat: 38.7851, lng: -76.2241 },
      type: 'Harbor Town',
      famous_for: ['Maritime museum', 'The town that fooled the British', 'Chesapeake Bay']
    },
    {
      name: 'Cambridge',
      slug: 'cambridge',
      state: 'Maryland',
      stateAbbrev: 'MD',
      url: '/maryland/cambridge-golf-carts',
      population: 13096,
      description: 'Eastern Shore town with rich maritime heritage',
      coordinates: { lat: 38.5630, lng: -76.0783 },
      type: 'Harbor Town',
      famous_for: ['Chesapeake Bay', 'Blackwater Wildlife Refuge', 'Skipjacks']
    }
  ],
  virginia: [
    {
      name: 'Virginia Beach',
      slug: 'virginia-beach',
      state: 'Virginia',
      stateAbbrev: 'VA',
      url: '/virginia/virginia-beach-golf-carts',
      population: 459467,
      description: 'Resort city with longest pleasure beach in the world',
      coordinates: { lat: 36.8529, lng: -75.9780 },
      type: 'Resort City',
      famous_for: ['Longest pleasure beach', 'Military presence', 'Oceanfront boardwalk']
    },
    {
      name: 'Norfolk',
      slug: 'norfolk',
      state: 'Virginia',
      stateAbbrev: 'VA',
      url: '/virginia/norfolk-golf-carts',
      population: 238005,
      description: 'Major naval base and cultural center',
      coordinates: { lat: 36.8468, lng: -76.2852 },
      type: 'Historic Port',
      famous_for: ['Naval Station Norfolk', 'Botanical Garden', 'Chrysler Museum']
    },
    {
      name: 'Williamsburg',
      slug: 'williamsburg',
      state: 'Virginia',
      stateAbbrev: 'VA',
      url: '/virginia/williamsburg-golf-carts',
      population: 15425,
      description: 'Historic colonial capital',
      coordinates: { lat: 37.2707, lng: -76.7075 },
      type: 'Historic Port',
      famous_for: ['Colonial Williamsburg', 'College of William & Mary', 'Historic triangle']
    },
    {
      name: 'Newport News',
      slug: 'newport-news',
      state: 'Virginia',
      stateAbbrev: 'VA',
      url: '/virginia/newport-news-golf-carts',
      population: 186247,
      description: 'Shipbuilding center and port city',
      coordinates: { lat: 37.0871, lng: -76.4730 },
      type: 'Historic Port',
      famous_for: ['Newport News Shipbuilding', 'Mariners\' Museum', 'James River']
    }
  ],
  'north-carolina': [
    {
      name: 'Outer Banks',
      slug: 'outer-banks',
      state: 'North Carolina',
      stateAbbrev: 'NC',
      url: '/north-carolina/outer-banks-golf-carts',
      population: 36840,
      description: 'Barrier islands with wild horses and lighthouses',
      coordinates: { lat: 35.5582, lng: -75.4665 },
      type: 'Island Community',
      famous_for: ['Wright Brothers', 'Wild horses', 'Cape Hatteras Lighthouse']
    },
    {
      name: 'Wilmington',
      slug: 'wilmington',
      state: 'North Carolina',
      stateAbbrev: 'NC',
      url: '/north-carolina/wilmington-golf-carts',
      population: 123744,
      description: 'Historic port city with riverfront charm',
      coordinates: { lat: 34.2257, lng: -77.9447 },
      type: 'Historic Port',
      famous_for: ['Historic downtown', 'Cape Fear River', 'Film industry']
    },
    {
      name: 'Wrightsville Beach',
      slug: 'wrightsville-beach',
      state: 'North Carolina',
      stateAbbrev: 'NC',
      url: '/north-carolina/wrightsville-beach-golf-carts',
      population: 2477,
      description: 'Popular surfing destination near Wilmington',
      coordinates: { lat: 34.2085, lng: -77.7965 },
      type: 'Beach Town',
      famous_for: ['Surfing', 'Crystal Coast', 'Fishing pier']
    },
    {
      name: 'Nags Head',
      slug: 'nags-head',
      state: 'North Carolina',
      stateAbbrev: 'NC',
      url: '/north-carolina/nags-head-golf-carts',
      population: 3125,
      description: 'Historic Outer Banks beach town',
      coordinates: { lat: 35.9576, lng: -75.6238 },
      type: 'Beach Town',
      famous_for: ['Jockey\'s Ridge Sand Dunes', 'Wright Memorial', 'Beach driving']
    }
  ],
  'south-carolina': [
    {
      name: 'Charleston',
      slug: 'charleston',
      state: 'South Carolina',
      stateAbbrev: 'SC',
      url: '/south-carolina/charleston-golf-carts',
      population: 150227,
      description: 'Historic port city with antebellum architecture',
      coordinates: { lat: 32.7767, lng: -79.9311 },
      type: 'Historic Port',
      famous_for: ['Historic district', 'Carriage tours', 'Rainbow Row']
    },
    {
      name: 'Myrtle Beach',
      slug: 'myrtle-beach',
      state: 'South Carolina',
      stateAbbrev: 'SC',
      url: '/south-carolina/myrtle-beach-golf-carts',
      population: 35682,
      description: 'Grand Strand resort city with golf and entertainment',
      coordinates: { lat: 33.6891, lng: -78.8867 },
      type: 'Resort City',
      famous_for: ['Grand Strand', 'Golf courses', 'Broadway at the Beach']
    },
    {
      name: 'Hilton Head Island',
      slug: 'hilton-head-island',
      state: 'South Carolina',
      stateAbbrev: 'SC',
      url: '/south-carolina/hilton-head-island-golf-carts',
      population: 37661,
      description: 'Upscale resort island with golf and beaches',
      coordinates: { lat: 32.2163, lng: -80.7526 },
      type: 'Resort City',
      famous_for: ['Golf resorts', 'Luxury accommodations', 'Sea Pines']
    },
    {
      name: 'Beaufort',
      slug: 'beaufort',
      state: 'South Carolina',
      stateAbbrev: 'SC',
      url: '/south-carolina/beaufort-golf-carts',
      population: 13607,
      description: 'Historic Lowcountry town with antebellum homes',
      coordinates: { lat: 32.4315, lng: -80.6698 },
      type: 'Historic Port',
      famous_for: ['Antebellum architecture', 'Forrest Gump filming', 'Lowcountry culture']
    }
  ],
  georgia: [
    {
      name: 'Savannah',
      slug: 'savannah',
      state: 'Georgia',
      stateAbbrev: 'GA',
      url: '/georgia/savannah-golf-carts',
      population: 147780,
      description: 'Historic port city with famous squares',
      coordinates: { lat: 32.0835, lng: -81.0998 },
      type: 'Historic Port',
      famous_for: ['Historic squares', 'Forsyth Park', 'River Street']
    },
    {
      name: 'Jekyll Island',
      slug: 'jekyll-island',
      state: 'Georgia',
      stateAbbrev: 'GA',
      url: '/georgia/jekyll-island-golf-carts',
      population: 1319,
      description: 'Barrier island with historic Millionaire\'s Village',
      coordinates: { lat: 31.0746, lng: -81.4207 },
      type: 'Island Community',
      famous_for: ['Jekyll Island Club', 'Sea turtles', 'Driftwood Beach']
    },
    {
      name: 'St. Simons Island',
      slug: 'st-simons-island',
      state: 'Georgia',
      stateAbbrev: 'GA',
      url: '/georgia/st-simons-island-golf-carts',
      population: 15619,
      description: 'Golden Isles resort with lighthouse and pier',
      coordinates: { lat: 31.1499, lng: -81.3912 },
      type: 'Island Community',
      famous_for: ['St. Simons Lighthouse', 'Village pier', 'Golden Isles']
    },
    {
      name: 'Tybee Island',
      slug: 'tybee-island',
      state: 'Georgia',
      stateAbbrev: 'GA',
      url: '/georgia/tybee-island-golf-carts',
      population: 3114,
      description: 'Beach town near Savannah with historic fort',
      coordinates: { lat: 32.0002, lng: -80.8465 },
      type: 'Beach Town',
      famous_for: ['Tybee Light Station', 'Fort Pulaski', 'Laid-back atmosphere']
    }
  ],
  florida: [
    {
      name: 'St. Augustine',
      slug: 'st-augustine',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/st-augustine-golf-carts',
      population: 15065,
      description: 'Oldest city in the US with Spanish colonial architecture',
      coordinates: { lat: 29.9012, lng: -81.3124 },
      type: 'Historic Port',
      famous_for: ['Oldest city', 'Castillo de San Marcos', 'Historic district']
    },
    {
      name: 'Key West',
      slug: 'key-west',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/key-west-golf-carts',
      population: 31401,
      description: 'Southernmost point with conch republic spirit',
      coordinates: { lat: 24.5557, lng: -81.7826 },
      type: 'Island Community',
      famous_for: ['Southernmost point', 'Sunset Celebration', 'Hemingway House']
    },
    {
      name: 'Miami Beach',
      slug: 'miami-beach',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/miami-beach-golf-carts',
      population: 82890,
      description: 'Art Deco resort city with South Beach',
      coordinates: { lat: 25.7907, lng: -80.1300 },
      type: 'Resort City',
      famous_for: ['Art Deco District', 'South Beach', 'Ocean Drive']
    },
    {
      name: 'Naples',
      slug: 'naples',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/naples-golf-carts',
      population: 22088,
      description: 'Upscale Gulf Coast city with pristine beaches',
      coordinates: { lat: 26.1420, lng: -81.7948 },
      type: 'Resort City',
      famous_for: ['Upscale shopping', 'Golf courses', 'Naples Pier']
    },
    {
      name: 'Clearwater Beach',
      slug: 'clearwater-beach',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/clearwater-beach-golf-carts',
      population: 4950,
      description: 'Award-winning beach with sugar-white sand',
      coordinates: { lat: 27.9659, lng: -82.8001 },
      type: 'Beach Town',
      famous_for: ['Sugar-white sand', 'Pier 60', 'Sunset celebrations']
    },
    {
      name: 'Fort Lauderdale',
      slug: 'fort-lauderdale',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/fort-lauderdale-golf-carts',
      population: 183109,
      description: 'Venice of America with extensive canal system',
      coordinates: { lat: 26.1224, lng: -80.1373 },
      type: 'Resort City',
      famous_for: ['Venice of America', 'Las Olas Boulevard', 'Yachting capital']
    }
  ]
};