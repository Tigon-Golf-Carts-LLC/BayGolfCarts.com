import BayLocationTemplate from "@/pages/locations/BayLocationTemplate";
import { MAJOR_BAYS_BY_STATE } from "@/data/majorBays";

// Maine Bay Pages
export function CascoBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.maine.find(b => b.slug === 'casco-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function PenobscotBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.maine.find(b => b.slug === 'penobscot-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function FrenchmanBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.maine.find(b => b.slug === 'frenchman-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function PassamaquoddyBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.maine.find(b => b.slug === 'passamaquoddy-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// New Hampshire Bay Pages
export function GreatBayNHPage() {
  const bay = MAJOR_BAYS_BY_STATE['new-hampshire'].find(b => b.slug === 'great-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function LittleBayPage() {
  const bay = MAJOR_BAYS_BY_STATE['new-hampshire'].find(b => b.slug === 'little-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Massachusetts Bay Pages
export function MassachusettsBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.massachusetts.find(b => b.slug === 'massachusetts-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function CapeCodBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.massachusetts.find(b => b.slug === 'cape-cod-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function BuzzardsBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.massachusetts.find(b => b.slug === 'buzzards-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function PlymouthBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.massachusetts.find(b => b.slug === 'plymouth-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Rhode Island Bay Pages
export function NarragansettBayPage() {
  const bay = MAJOR_BAYS_BY_STATE['rhode-island'].find(b => b.slug === 'narragansett-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function MountHopeBayPage() {
  const bay = MAJOR_BAYS_BY_STATE['rhode-island'].find(b => b.slug === 'mount-hope-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Connecticut Bay Pages
export function LongIslandSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE.connecticut.find(b => b.slug === 'long-island-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function FishersIslandSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE.connecticut.find(b => b.slug === 'fishers-island-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// New York Bay Pages
export function JamaicaBayPage() {
  const bay = MAJOR_BAYS_BY_STATE['new-york'].find(b => b.slug === 'jamaica-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function GreatSouthBayPage() {
  const bay = MAJOR_BAYS_BY_STATE['new-york'].find(b => b.slug === 'great-south-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function PeconicBayPage() {
  const bay = MAJOR_BAYS_BY_STATE['new-york'].find(b => b.slug === 'peconic-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// New Jersey Bay Pages
export function DelawareBayNJPage() {
  const bay = MAJOR_BAYS_BY_STATE['new-jersey'].find(b => b.slug === 'delaware-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function BarnegatBayPage() {
  const bay = MAJOR_BAYS_BY_STATE['new-jersey'].find(b => b.slug === 'barnegat-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function GreatBayNJPage() {
  const bay = MAJOR_BAYS_BY_STATE['new-jersey'].find(b => b.slug === 'great-bay-nj')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Delaware Bay Pages
export function DelawareBayDEPage() {
  const bay = MAJOR_BAYS_BY_STATE.delaware.find(b => b.slug === 'delaware-bay-de')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function RehobothBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.delaware.find(b => b.slug === 'rehoboth-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Maryland Bay Pages
export function ChesapeakeBayMDPage() {
  const bay = MAJOR_BAYS_BY_STATE.maryland.find(b => b.slug === 'chesapeake-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function TangierSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE.maryland.find(b => b.slug === 'tangier-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Virginia Bay Pages
export function ChesapeakeBayVAPage() {
  const bay = MAJOR_BAYS_BY_STATE.virginia.find(b => b.slug === 'chesapeake-bay-va')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function LynnhavenBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.virginia.find(b => b.slug === 'lynnhaven-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// North Carolina Bay Pages
export function AlbemarleSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE['north-carolina'].find(b => b.slug === 'albemarle-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function PamlicoSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE['north-carolina'].find(b => b.slug === 'pamlico-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function CoreSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE['north-carolina'].find(b => b.slug === 'core-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// South Carolina Bay Pages
export function CharlestonHarborPage() {
  const bay = MAJOR_BAYS_BY_STATE['south-carolina'].find(b => b.slug === 'charleston-harbor')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function PortRoyalSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE['south-carolina'].find(b => b.slug === 'port-royal-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function WinyahBayPage() {
  const bay = MAJOR_BAYS_BY_STATE['south-carolina'].find(b => b.slug === 'winyah-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Georgia Bay Pages
export function SavannahRiverPage() {
  const bay = MAJOR_BAYS_BY_STATE.georgia.find(b => b.slug === 'savannah-river')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function AltamahaSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE.georgia.find(b => b.slug === 'altamaha-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function StAndrewSoundPage() {
  const bay = MAJOR_BAYS_BY_STATE.georgia.find(b => b.slug === 'st-andrew-sound')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Florida Bay Pages
export function TampaBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.florida.find(b => b.slug === 'tampa-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function BiscayneBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.florida.find(b => b.slug === 'biscayne-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function CharlotteHarborPage() {
  const bay = MAJOR_BAYS_BY_STATE.florida.find(b => b.slug === 'charlotte-harbor')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

export function SarasotaBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.florida.find(b => b.slug === 'sarasota-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}