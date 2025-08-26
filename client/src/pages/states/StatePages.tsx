import BayLocationTemplate from "@/pages/locations/BayLocationTemplate";
import { EASTERN_COASTLINE_STATES } from "@/data/easternStates";

// Maine State Page
export function MainePage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'maine')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// New Hampshire State Page
export function NewHampshirePage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'new-hampshire')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// Massachusetts State Page
export function MassachusettsPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'massachusetts')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// Rhode Island State Page
export function RhodeIslandPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'rhode-island')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// Connecticut State Page
export function ConnecticutPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'connecticut')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// New York State Page
export function NewYorkPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'new-york')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// New Jersey State Page
export function NewJerseyPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'new-jersey')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// Delaware State Page
export function DelawarePage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'delaware')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// Maryland State Page
export function MarylandPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'maryland')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// Virginia State Page
export function VirginiaPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'virginia')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// North Carolina State Page
export function NorthCarolinaPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'north-carolina')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// South Carolina State Page
export function SouthCarolinaPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'south-carolina')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// Georgia State Page
export function GeorgiaPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'georgia')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}

// Florida State Page
export function FloridaPage() {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === 'florida')!;
  return <BayLocationTemplate location={state} locationType="state" />;
}