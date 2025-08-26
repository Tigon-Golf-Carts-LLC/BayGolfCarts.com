import BayLocationTemplate from "@/pages/locations/BayLocationTemplate";
import { SHORE_TOWNS_BY_STATE } from "@/data/shoreTowns";

// St. Augustine Page
export function StAugustinePage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'st-augustine')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Key West Page
export function KeyWestPage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'key-west')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Miami Beach Page
export function MiamiBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'miami-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Naples Page
export function NaplesPage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'naples')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Clearwater Beach Page
export function ClearwaterBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'clearwater-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Fort Lauderdale Page
export function FortLauderdalePage() {
  const town = SHORE_TOWNS_BY_STATE.florida.find(t => t.slug === 'fort-lauderdale')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}