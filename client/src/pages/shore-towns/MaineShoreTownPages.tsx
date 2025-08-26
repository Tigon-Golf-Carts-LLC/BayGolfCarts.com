import BayLocationTemplate from "@/pages/locations/BayLocationTemplate";
import { SHORE_TOWNS_BY_STATE } from "@/data/shoreTowns";

// Bar Harbor Page
export function BarHarborPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'bar-harbor')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Camden Page
export function CamdenPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'camden')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Kennebunkport Page
export function KennebunkportPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'kennebunkport')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Old Orchard Beach Page
export function OldOrchardBeachPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'old-orchard-beach')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Portland Page
export function PortlandMainePage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'portland')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}

// Rockland Page
export function RocklandPage() {
  const town = SHORE_TOWNS_BY_STATE.maine.find(t => t.slug === 'rockland')!;
  return <BayLocationTemplate location={town} locationType="shore-town" />;
}