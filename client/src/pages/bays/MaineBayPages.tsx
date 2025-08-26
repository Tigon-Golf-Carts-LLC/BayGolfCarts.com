import BayLocationTemplate from "@/pages/locations/BayLocationTemplate";
import { MAJOR_BAYS_BY_STATE } from "@/data/majorBays";

// Casco Bay Page
export function CascoBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.maine.find(b => b.slug === 'casco-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Penobscot Bay Page
export function PenobscotBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.maine.find(b => b.slug === 'penobscot-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Frenchman Bay Page
export function FrenchmanBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.maine.find(b => b.slug === 'frenchman-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}

// Passamaquoddy Bay Page
export function PassamaquoddyBayPage() {
  const bay = MAJOR_BAYS_BY_STATE.maine.find(b => b.slug === 'passamaquoddy-bay')!;
  return <BayLocationTemplate location={bay} locationType="bay" />;
}