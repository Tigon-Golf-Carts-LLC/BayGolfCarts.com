export interface Bay {
  name: string;
  slug: string;
  state: string;
  stateAbbrev: string;
  url: string;
  description: string;
  coordinates: { lat: number; lng: number };
  size: 'Large' | 'Medium' | 'Small';
  famous_for: string[];
}

export const MAJOR_BAYS_BY_STATE: Record<string, Bay[]> = {
  maine: [
    {
      name: 'Casco Bay',
      slug: 'casco-bay',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/casco-bay-golf-carts',
      description: 'Home to Portland and countless islands including Calendar Islands',
      coordinates: { lat: 43.7101, lng: -70.0340 },
      size: 'Large',
      famous_for: ['Portland Head Light', 'Ferry services', 'Island hopping']
    },
    {
      name: 'Penobscot Bay',
      slug: 'penobscot-bay',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/penobscot-bay-golf-carts',
      description: 'Large bay with numerous islands and picturesque coastal towns',
      coordinates: { lat: 44.2619, lng: -68.8628 },
      size: 'Large',
      famous_for: ['Camden Hills', 'Lobster fishing', 'Windjammer cruises']
    },
    {
      name: 'Frenchman Bay',
      slug: 'frenchman-bay',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/frenchman-bay-golf-carts',
      description: 'Gateway to Acadia National Park and Bar Harbor',
      coordinates: { lat: 44.3535, lng: -68.2041 },
      size: 'Medium',
      famous_for: ['Acadia National Park', 'Bar Harbor', 'Cadillac Mountain']
    },
    {
      name: 'Passamaquoddy Bay',
      slug: 'passamaquoddy-bay',
      state: 'Maine',
      stateAbbrev: 'ME',
      url: '/maine/passamaquoddy-bay-golf-carts',
      description: 'International bay shared with New Brunswick, Canada',
      coordinates: { lat: 44.9833, lng: -67.0667 },
      size: 'Medium',
      famous_for: ['Tidal power', 'Eastport', 'International border']
    }
  ],
  'new-hampshire': [
    {
      name: 'Great Bay',
      slug: 'great-bay',
      state: 'New Hampshire',
      stateAbbrev: 'NH',
      url: '/new-hampshire/great-bay-golf-carts',
      description: 'Tidal estuary and important ecological preserve',
      coordinates: { lat: 43.0833, lng: -70.8667 },
      size: 'Medium',
      famous_for: ['Estuarine research', 'Wildlife refuge', 'Kayaking']
    },
    {
      name: 'Little Bay',
      slug: 'little-bay',
      state: 'New Hampshire',
      stateAbbrev: 'NH',
      url: '/new-hampshire/little-bay-golf-carts',
      description: 'Small coastal bay near Portsmouth',
      coordinates: { lat: 43.1000, lng: -70.8333 },
      size: 'Small',
      famous_for: ['Portsmouth Harbor', 'Historic shipyard', 'University of New Hampshire marine lab']
    }
  ],
  massachusetts: [
    {
      name: 'Massachusetts Bay',
      slug: 'massachusetts-bay',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/massachusetts-bay-golf-carts',
      description: 'Historic bay home to Boston and numerous harbor islands',
      coordinates: { lat: 42.3601, lng: -70.6000 },
      size: 'Large',
      famous_for: ['Boston Harbor', 'Harbor Islands', 'Tea Party history']
    },
    {
      name: 'Cape Cod Bay',
      slug: 'cape-cod-bay',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/cape-cod-bay-golf-carts',
      description: 'Large bay enclosed by Cape Cod with pristine beaches',
      coordinates: { lat: 41.9000, lng: -70.3000 },
      size: 'Large',
      famous_for: ['Cape Cod', 'Provincetown', 'Whale watching']
    },
    {
      name: 'Buzzards Bay',
      slug: 'buzzards-bay',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/buzzards-bay-golf-carts',
      description: 'Bay between Cape Cod and mainland Massachusetts',
      coordinates: { lat: 41.5500, lng: -70.7500 },
      size: 'Large',
      famous_for: ['New Bedford', 'Whaling history', 'Martha\'s Vineyard ferry']
    },
    {
      name: 'Plymouth Bay',
      slug: 'plymouth-bay',
      state: 'Massachusetts',
      stateAbbrev: 'MA',
      url: '/massachusetts/plymouth-bay-golf-carts',
      description: 'Historic bay where the Pilgrims first landed',
      coordinates: { lat: 42.0000, lng: -70.6667 },
      size: 'Medium',
      famous_for: ['Plymouth Rock', 'Mayflower II', 'Pilgrim history']
    }
  ],
  'rhode-island': [
    {
      name: 'Narragansett Bay',
      slug: 'narragansett-bay',
      state: 'Rhode Island',
      stateAbbrev: 'RI',
      url: '/rhode-island/narragansett-bay-golf-carts',
      description: 'Rhode Island\'s dominant water feature with numerous islands',
      coordinates: { lat: 41.5500, lng: -71.3000 },
      size: 'Large',
      famous_for: ['Newport mansions', 'Block Island', 'Sailing']
    },
    {
      name: 'Mount Hope Bay',
      slug: 'mount-hope-bay',
      state: 'Rhode Island',
      stateAbbrev: 'RI',
      url: '/rhode-island/mount-hope-bay-golf-carts',
      description: 'Northern arm of Narragansett Bay',
      coordinates: { lat: 41.6333, lng: -71.2167 },
      size: 'Medium',
      famous_for: ['Mount Hope Bridge', 'Bristol', 'Aquidneck Island']
    }
  ],
  connecticut: [
    {
      name: 'Long Island Sound',
      slug: 'long-island-sound',
      state: 'Connecticut',
      stateAbbrev: 'CT',
      url: '/connecticut/long-island-sound-golf-carts',
      description: 'Large tidal estuary separating Connecticut from Long Island',
      coordinates: { lat: 41.2000, lng: -72.5000 },
      size: 'Large',
      famous_for: ['Mystic Seaport', 'New Haven', 'Maritime history']
    },
    {
      name: 'Fisher\'s Island Sound',
      slug: 'fishers-island-sound',
      state: 'Connecticut',
      stateAbbrev: 'CT',
      url: '/connecticut/fishers-island-sound-golf-carts',
      description: 'Eastern section of Long Island Sound',
      coordinates: { lat: 41.2667, lng: -71.9667 },
      size: 'Medium',
      famous_for: ['Fisher\'s Island', 'Groton submarine base', 'Stonington']
    }
  ],
  'new-york': [
    {
      name: 'Jamaica Bay',
      slug: 'jamaica-bay',
      state: 'New York',
      stateAbbrev: 'NY',
      url: '/new-york/jamaica-bay-golf-carts',
      description: 'Large bay in southern Brooklyn and Queens',
      coordinates: { lat: 40.6167, lng: -73.8167 },
      size: 'Large',
      famous_for: ['JFK Airport', 'Wildlife refuge', 'Gateway National Recreation Area']
    },
    {
      name: 'Great South Bay',
      slug: 'great-south-bay',
      state: 'New York',
      stateAbbrev: 'NY',
      url: '/new-york/great-south-bay-golf-carts',
      description: 'Large lagoon between Long Island\'s south shore and barrier islands',
      coordinates: { lat: 40.7000, lng: -73.2000 },
      size: 'Large',
      famous_for: ['Fire Island', 'Bay Shore', 'Boating']
    },
    {
      name: 'Peconic Bay',
      slug: 'peconic-bay',
      state: 'New York',
      stateAbbrev: 'NY',
      url: '/new-york/peconic-bay-golf-carts',
      description: 'Bay system in eastern Long Island',
      coordinates: { lat: 40.9500, lng: -72.5000 },
      size: 'Large',
      famous_for: ['Hamptons', 'North Fork wineries', 'Shelter Island']
    }
  ],
  'new-jersey': [
    {
      name: 'Delaware Bay',
      slug: 'delaware-bay',
      state: 'New Jersey',
      stateAbbrev: 'NJ',
      url: '/new-jersey/delaware-bay-golf-carts',
      description: 'Large bay shared with Delaware, estuary of Delaware River',
      coordinates: { lat: 39.2000, lng: -75.1000 },
      size: 'Large',
      famous_for: ['Cape May', 'Delaware River', 'Horseshoe crabs']
    },
    {
      name: 'Barnegat Bay',
      slug: 'barnegat-bay',
      state: 'New Jersey',
      stateAbbrev: 'NJ',
      url: '/new-jersey/barnegat-bay-golf-carts',
      description: 'Large lagoon behind barrier islands of central New Jersey',
      coordinates: { lat: 39.8167, lng: -74.1000 },
      size: 'Large',
      famous_for: ['Barnegat Lighthouse', 'Island Beach State Park', 'Toms River']
    },
    {
      name: 'Great Bay',
      slug: 'great-bay-nj',
      state: 'New Jersey',
      stateAbbrev: 'NJ',
      url: '/new-jersey/great-bay-golf-carts',
      description: 'Bay system in southern New Jersey',
      coordinates: { lat: 39.5000, lng: -74.3333 },
      size: 'Medium',
      famous_for: ['Atlantic City', 'Edwin B. Forsythe Wildlife Refuge', 'Mullica River']
    }
  ],
  delaware: [
    {
      name: 'Delaware Bay',
      slug: 'delaware-bay-de',
      state: 'Delaware',
      stateAbbrev: 'DE',
      url: '/delaware/delaware-bay-golf-carts',
      description: 'Large bay and estuary of the Delaware River',
      coordinates: { lat: 39.1167, lng: -75.2333 },
      size: 'Large',
      famous_for: ['Delaware River', 'Lewes', 'Cape Henlopen']
    },
    {
      name: 'Rehoboth Bay',
      slug: 'rehoboth-bay',
      state: 'Delaware',
      stateAbbrev: 'DE',
      url: '/delaware/rehoboth-bay-golf-carts',
      description: 'Coastal bay near popular beach resorts',
      coordinates: { lat: 38.6500, lng: -75.1167 },
      size: 'Small',
      famous_for: ['Rehoboth Beach', 'Dewey Beach', 'Indian River Inlet']
    }
  ],
  maryland: [
    {
      name: 'Chesapeake Bay',
      slug: 'chesapeake-bay',
      state: 'Maryland',
      stateAbbrev: 'MD',
      url: '/maryland/chesapeake-bay-golf-carts',
      description: 'Largest estuary in the United States',
      coordinates: { lat: 38.5000, lng: -76.5000 },
      size: 'Large',
      famous_for: ['Blue crabs', 'Baltimore', 'Bay Bridge']
    },
    {
      name: 'Tangier Sound',
      slug: 'tangier-sound',
      state: 'Maryland',
      stateAbbrev: 'MD',
      url: '/maryland/tangier-sound-golf-carts',
      description: 'Large sound in the Chesapeake Bay',
      coordinates: { lat: 37.9167, lng: -75.9167 },
      size: 'Large',
      famous_for: ['Crisfield', 'Smith Island', 'Watermen culture']
    }
  ],
  virginia: [
    {
      name: 'Chesapeake Bay',
      slug: 'chesapeake-bay-va',
      state: 'Virginia',
      stateAbbrev: 'VA',
      url: '/virginia/chesapeake-bay-golf-carts',
      description: 'Southern portion of the Chesapeake Bay',
      coordinates: { lat: 37.0000, lng: -76.3000 },
      size: 'Large',
      famous_for: ['Norfolk', 'Virginia Beach', 'Hampton Roads']
    },
    {
      name: 'Lynnhaven Bay',
      slug: 'lynnhaven-bay',
      state: 'Virginia',
      stateAbbrev: 'VA',
      url: '/virginia/lynnhaven-bay-golf-carts',
      description: 'Bay system in Virginia Beach area',
      coordinates: { lat: 36.8500, lng: -76.0333 },
      size: 'Medium',
      famous_for: ['Virginia Beach', 'Lynnhaven oysters', 'First Landing State Park']
    }
  ],
  'north-carolina': [
    {
      name: 'Albemarle Sound',
      slug: 'albemarle-sound',
      state: 'North Carolina',
      stateAbbrev: 'NC',
      url: '/north-carolina/albemarle-sound-golf-carts',
      description: 'Large sound behind the Outer Banks',
      coordinates: { lat: 36.0000, lng: -76.2000 },
      size: 'Large',
      famous_for: ['Outer Banks', 'Wright Brothers', 'Roanoke Island']
    },
    {
      name: 'Pamlico Sound',
      slug: 'pamlico-sound',
      state: 'North Carolina',
      stateAbbrev: 'NC',
      url: '/north-carolina/pamlico-sound-golf-carts',
      description: 'Largest lagoon on the East Coast',
      coordinates: { lat: 35.4000, lng: -75.8000 },
      size: 'Large',
      famous_for: ['Cape Hatteras', 'Ocracoke Island', 'Wild horses']
    },
    {
      name: 'Core Sound',
      slug: 'core-sound',
      state: 'North Carolina',
      stateAbbrev: 'NC',
      url: '/north-carolina/core-sound-golf-carts',
      description: 'Sound behind the Crystal Coast barrier islands',
      coordinates: { lat: 34.8000, lng: -76.3000 },
      size: 'Medium',
      famous_for: ['Cape Lookout', 'Shackleford Banks', 'Wild horses']
    }
  ],
  'south-carolina': [
    {
      name: 'Charleston Harbor',
      slug: 'charleston-harbor',
      state: 'South Carolina',
      stateAbbrev: 'SC',
      url: '/south-carolina/charleston-harbor-golf-carts',
      description: 'Historic harbor and major port',
      coordinates: { lat: 32.7767, lng: -79.9311 },
      size: 'Large',
      famous_for: ['Fort Sumter', 'Historic Charleston', 'Harbor tours']
    },
    {
      name: 'Port Royal Sound',
      slug: 'port-royal-sound',
      state: 'South Carolina',
      stateAbbrev: 'SC',
      url: '/south-carolina/port-royal-sound-golf-carts',
      description: 'Large sound in the Lowcountry',
      coordinates: { lat: 32.3000, lng: -80.7000 },
      size: 'Large',
      famous_for: ['Hilton Head Island', 'Beaufort', 'Parris Island']
    },
    {
      name: 'Winyah Bay',
      slug: 'winyah-bay',
      state: 'South Carolina',
      stateAbbrev: 'SC',
      url: '/south-carolina/winyah-bay-golf-carts',
      description: 'Bay formed by several rivers near Georgetown',
      coordinates: { lat: 33.3667, lng: -79.2833 },
      size: 'Medium',
      famous_for: ['Georgetown', 'Rice plantations', 'Waccamaw River']
    }
  ],
  georgia: [
    {
      name: 'Savannah River',
      slug: 'savannah-river',
      state: 'Georgia',
      stateAbbrev: 'GA',
      url: '/georgia/savannah-river-golf-carts',
      description: 'Major river forming border with South Carolina',
      coordinates: { lat: 32.0835, lng: -81.0998 },
      size: 'Large',
      famous_for: ['Historic Savannah', 'River Street', 'Port of Savannah']
    },
    {
      name: 'Altamaha Sound',
      slug: 'altamaha-sound',
      state: 'Georgia',
      stateAbbrev: 'GA',
      url: '/georgia/altamaha-sound-golf-carts',
      description: 'Sound formed by the Altamaha River',
      coordinates: { lat: 31.4000, lng: -81.4000 },
      size: 'Medium',
      famous_for: ['Golden Isles', 'Jekyll Island', 'St. Simons Island']
    },
    {
      name: 'St. Andrew Sound',
      slug: 'st-andrew-sound',
      state: 'Georgia',
      stateAbbrev: 'GA',
      url: '/georgia/st-andrew-sound-golf-carts',
      description: 'Sound between Georgia and Florida',
      coordinates: { lat: 30.7000, lng: -81.6000 },
      size: 'Medium',
      famous_for: ['Cumberland Island', 'Fernandina Beach', 'Wild horses']
    }
  ],
  florida: [
    {
      name: 'Tampa Bay',
      slug: 'tampa-bay',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/tampa-bay-golf-carts',
      description: 'Large natural harbor on Florida\'s Gulf Coast',
      coordinates: { lat: 27.7500, lng: -82.6000 },
      size: 'Large',
      famous_for: ['Tampa', 'St. Petersburg', 'Skyway Bridge']
    },
    {
      name: 'Biscayne Bay',
      slug: 'biscayne-bay',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/biscayne-bay-golf-carts',
      description: 'Large lagoon near Miami',
      coordinates: { lat: 25.5000, lng: -80.2000 },
      size: 'Large',
      famous_for: ['Miami', 'Key Biscayne', 'Star Island']
    },
    {
      name: 'Charlotte Harbor',
      slug: 'charlotte-harbor',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/charlotte-harbor-golf-carts',
      description: 'Large estuary on Florida\'s Gulf Coast',
      coordinates: { lat: 26.9167, lng: -82.1000 },
      size: 'Large',
      famous_for: ['Punta Gorda', 'Port Charlotte', 'Peace River']
    },
    {
      name: 'Sarasota Bay',
      slug: 'sarasota-bay',
      state: 'Florida',
      stateAbbrev: 'FL',
      url: '/florida/sarasota-bay-golf-carts',
      description: 'Bay system near Sarasota',
      coordinates: { lat: 27.3000, lng: -82.5500 },
      size: 'Medium',
      famous_for: ['Sarasota', 'Siesta Key', 'Ringling Museum']
    }
  ]
};