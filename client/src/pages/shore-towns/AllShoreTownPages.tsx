import BayLocationTemplate from "@/pages/locations/BayLocationTemplate";
import { SHORE_TOWNS_BY_STATE } from "@/data/shoreTowns";

// Maine Shore Town Pages
export function BarHarborPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'bar-harbor')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function CamdenPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'camden')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function KennebunkportPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'kennebunkport')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function OldOrchardBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'old-orchard-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function PortlandMainePage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'portland')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function RocklandPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'rockland')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// New Hampshire Shore Town Pages
export function HamptonBeachPage() {
  const town = SHORE_TOWNS_BY_STATE['new-hampshire'].find(t => t.slug === 'hampton-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function PortsmouthPage() {
  const town = SHORE_TOWNS_BY_STATE['new-hampshire'].find(t => t.slug === 'portsmouth')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function RyePage() {
  const town = SHORE_TOWNS_BY_STATE['new-hampshire'].find(t => t.slug === 'rye')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Massachusetts Shore Town Pages
export function ProvincetownPage() {
  const town = SHORE_TOWNS_BY_STATE.massachusetts.find(t => t.slug === 'provincetown')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function NantucketPage() {
  const town = SHORE_TOWNS_BY_STATE.massachusetts.find(t => t.slug === 'nantucket')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function MarthasVineyardPage() {
  const town = SHORE_TOWNS_BY_STATE.massachusetts.find(t => t.slug === 'marthas-vineyard')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function CapeCodPage() {
  const town = SHORE_TOWNS_BY_STATE.massachusetts.find(t => t.slug === 'cape-cod')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function SalemPage() {
  const town = SHORE_TOWNS_BY_STATE.massachusetts.find(t => t.slug === 'salem')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function GloucesterPage() {
  const town = SHORE_TOWNS_BY_STATE.massachusetts.find(t => t.slug === 'gloucester')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Rhode Island Shore Town Pages
export function NewportPage() {
  const town = SHORE_TOWNS_BY_STATE['rhode-island'].find(t => t.slug === 'newport')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function BlockIslandPage() {
  const town = SHORE_TOWNS_BY_STATE['rhode-island'].find(t => t.slug === 'block-island')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function NarragansettPage() {
  const town = SHORE_TOWNS_BY_STATE['rhode-island'].find(t => t.slug === 'narragansett')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function WesterlyPage() {
  const town = SHORE_TOWNS_BY_STATE['rhode-island'].find(t => t.slug === 'westerly')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Connecticut Shore Town Pages
export function MysticPage() {
  const town = SHORE_TOWNS_BY_STATE.connecticut.find(t => t.slug === 'mystic')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function OldSaybrookPage() {
  const town = SHORE_TOWNS_BY_STATE.connecticut.find(t => t.slug === 'old-saybrook')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function StoningtonPage() {
  const town = SHORE_TOWNS_BY_STATE.connecticut.find(t => t.slug === 'stonington')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function MadisonPage() {
  const town = SHORE_TOWNS_BY_STATE.connecticut.find(t => t.slug === 'madison')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// New York Shore Town Pages
export function MontaukPage() {
  const town = SHORE_TOWNS_BY_STATE['new-york'].find(t => t.slug === 'montauk')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function TheHamptonsPage() {
  const town = SHORE_TOWNS_BY_STATE['new-york'].find(t => t.slug === 'the-hamptons')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function FireIslandPage() {
  const town = SHORE_TOWNS_BY_STATE['new-york'].find(t => t.slug === 'fire-island')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function ShelterIslandPage() {
  const town = SHORE_TOWNS_BY_STATE['new-york'].find(t => t.slug === 'shelter-island')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function SagHarborPage() {
  const town = SHORE_TOWNS_BY_STATE['new-york'].find(t => t.slug === 'sag-harbor')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// New Jersey Shore Town Pages
export function CapeMayPage() {
  const town = SHORE_TOWNS_BY_STATE['new-jersey'].find(t => t.slug === 'cape-may')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function AtlanticCityPage() {
  const town = SHORE_TOWNS_BY_STATE['new-jersey'].find(t => t.slug === 'atlantic-city')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function OceanCityNJPage() {
  const town = SHORE_TOWNS_BY_STATE['new-jersey'].find(t => t.slug === 'ocean-city')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function SeasideHeightsPage() {
  const town = SHORE_TOWNS_BY_STATE['new-jersey'].find(t => t.slug === 'seaside-heights')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function SpringLakePage() {
  const town = SHORE_TOWNS_BY_STATE['new-jersey'].find(t => t.slug === 'spring-lake')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Delaware Shore Town Pages
export function RehobothBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.delaware.find(t => t.slug === 'rehoboth-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function BethanyBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.delaware.find(t => t.slug === 'bethany-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function DeweyBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.delaware.find(t => t.slug === 'dewey-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function LewesPage() {
  const town = SHORE_TOWNS_BY_STATE.delaware.find(t => t.slug === 'lewes')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Maryland Shore Town Pages
export function OceanCityMDPage() {
  const town = SHORE_TOWNS_BY_STATE.maryland.find(t => t.slug === 'ocean-city-md')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function AnnapolisPage() {
  const town = SHORE_TOWNS_BY_STATE.maryland.find(t => t.slug === 'annapolis')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function StMichaelsPage() {
  const town = SHORE_TOWNS_BY_STATE.maryland.find(t => t.slug === 'st-michaels')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function CambridgePage() {
  const town = SHORE_TOWNS_BY_STATE.maryland.find(t => t.slug === 'cambridge')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Virginia Shore Town Pages
export function VirginiaBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.virginia.find(t => t.slug === 'virginia-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function NorfolkPage() {
  const town = SHORE_TOWNS_BY_STATE.virginia.find(t => t.slug === 'norfolk')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function WilliamsburgPage() {
  const town = SHORE_TOWNS_BY_STATE.virginia.find(t => t.slug === 'williamsburg')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function NewportNewsPage() {
  const town = SHORE_TOWNS_BY_STATE.virginia.find(t => t.slug === 'newport-news')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// North Carolina Shore Town Pages
export function OuterBanksPage() {
  const town = SHORE_TOWNS_BY_STATE['north-carolina'].find(t => t.slug === 'outer-banks')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function WilmingtonNCPage() {
  const town = SHORE_TOWNS_BY_STATE['north-carolina'].find(t => t.slug === 'wilmington')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function WrightsvilleBeachPage() {
  const town = SHORE_TOWNS_BY_STATE['north-carolina'].find(t => t.slug === 'wrightsville-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function NagsHeadPage() {
  const town = SHORE_TOWNS_BY_STATE['north-carolina'].find(t => t.slug === 'nags-head')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// South Carolina Shore Town Pages
export function CharlestonPage() {
  const town = SHORE_TOWNS_BY_STATE['south-carolina'].find(t => t.slug === 'charleston')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function MyrtleBeachPage() {
  const town = SHORE_TOWNS_BY_STATE['south-carolina'].find(t => t.slug === 'myrtle-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function HiltonHeadIslandPage() {
  const town = SHORE_TOWNS_BY_STATE['south-carolina'].find(t => t.slug === 'hilton-head-island')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function BeaufortPage() {
  const town = SHORE_TOWNS_BY_STATE['south-carolina'].find(t => t.slug === 'beaufort')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Georgia Shore Town Pages
export function SavannahPage() {
  const town = SHORE_TOWNS_BY_STATE.georgia.find(t => t.slug === 'savannah')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function JekyllIslandPage() {
  const town = SHORE_TOWNS_BY_STATE.georgia.find(t => t.slug === 'jekyll-island')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function StSimonsIslandPage() {
  const town = SHORE_TOWNS_BY_STATE.georgia.find(t => t.slug === 'st-simons-island')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function TybeeIslandPage() {
  const town = SHORE_TOWNS_BY_STATE.georgia.find(t => t.slug === 'tybee-island')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Florida Shore Town Pages
export function StAugustinePage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'st-augustine')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function KeyWestPage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'key-west')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function MiamiBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'miami-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function NaplesPage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'naples')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function ClearwaterBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'clearwater-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

export function FortLauderdalePage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'fort-lauderdale')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}