import type { State } from "@/data/easternStates";
import type { Bay } from "@/data/majorBays";
import type { ShoreTown } from "@/data/shoreTowns";

/**
 * Generates a Google Maps embed URL for eastern seaboard locations
 * @param locationName - Name of the location (state, bay, or town)
 * @param coordinates - Lat/lng coordinates for the location
 * @param locationType - Type of location (state, bay, shore-town)
 * @returns Google Maps embed URL
 */
export function generateEasternSeaboardMapsEmbed(
  locationName: string, 
  coordinates: { lat: number; lng: number },
  locationType: 'state' | 'bay' | 'shore-town' = 'shore-town'
): string {
  const { lat, lng } = coordinates;
  
  // Determine zoom level based on location type
  const zoomLevel = locationType === 'state' ? 8 : locationType === 'bay' ? 11 : 14;
  
  // Create the search query for Bay Golf Carts in the area
  const searchQuery = encodeURIComponent(`Bay Golf Carts near ${locationName}`);
  
  // Google Maps embed URL with Bay Golf Carts branding
  return `https://www.google.com/maps/embed/v1/search?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=${searchQuery}&center=${lat},${lng}&zoom=${zoomLevel}&maptype=roadmap`;
}

/**
 * Generates a simple location-focused Google Maps embed
 * @param locationName - Name of the location
 * @param coordinates - Lat/lng coordinates
 * @returns Simple Google Maps embed URL
 */
export function generateSimpleLocationMapsEmbed(
  locationName: string,
  coordinates: { lat: number; lng: number }
): string {
  const { lat, lng } = coordinates;
  const query = encodeURIComponent(locationName);
  
  return `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=${query}&center=${lat},${lng}&zoom=12&maptype=roadmap`;
}

/**
 * Creates a service area map showing Bay Golf Carts coverage
 * @param centerLocation - Central location name
 * @param coordinates - Center coordinates
 * @param radius - Service radius in miles (default 25)
 * @returns Service area map embed URL
 */
export function generateServiceAreaMap(
  centerLocation: string,
  coordinates: { lat: number; lng: number },
  radius: number = 25
): string {
  const { lat, lng } = coordinates;
  
  // Calculate approximate bounds for the service area
  const latDelta = radius / 69; // Approximate miles per degree latitude
  const lngDelta = radius / (69 * Math.cos(lat * Math.PI / 180)); // Adjust for longitude
  
  const bounds = `${lat - latDelta},${lng - lngDelta}|${lat + latDelta},${lng + lngDelta}`;
  
  return `https://www.google.com/maps/embed/v1/view?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&center=${lat},${lng}&zoom=10&maptype=roadmap`;
}

/**
 * Gets the appropriate map URL for any eastern seaboard location
 * @param location - State, Bay, or ShoreTown object
 * @param locationType - Type of location
 * @returns Map embed URL
 */
export function getLocationMapUrl(
  location: State | Bay | ShoreTown,
  locationType: 'state' | 'bay' | 'shore-town'
): string {
  return generateEasternSeaboardMapsEmbed(
    location.name,
    location.coordinates,
    locationType
  );
}

/**
 * Creates a regional overview map showing multiple locations
 * @param locations - Array of locations to display
 * @param centerCoordinates - Center point for the map
 * @returns Regional map embed URL
 */
export function generateRegionalOverviewMap(
  locations: Array<{ name: string; coordinates: { lat: number; lng: number } }>,
  centerCoordinates: { lat: number; lng: number }
): string {
  const { lat, lng } = centerCoordinates;
  
  // For regional overview, use a wider zoom
  return `https://www.google.com/maps/embed/v1/view?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&center=${lat},${lng}&zoom=7&maptype=roadmap`;
}