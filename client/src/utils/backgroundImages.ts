// Bay Golf Carts - Professional Bay-Themed Background Images
// 7 new professional Bay Golf Carts bay-themed images for dynamic backgrounds

import image1 from "@assets/Bay Golf Carts - Golf Carts In The Bay Of The Town_1756238794665.jpeg";
import image2 from "@assets/Bay Golf Carts - Golf Carts In The Bay Of The Town 2_1756238794666.jpeg";
import image3 from "@assets/Bay Golf Carts - Golf Carts In The Bay Of The Town 3_1756238794666.jpeg";
import image4 from "@assets/Bay Golf Carts - Golf Carts In The Bay Of The Town 4_1756238794666.jpeg";
import image5 from "@assets/Bay Golf Carts - Golf Carts In The Bay Of The Town 5_1756238794666.jpeg";
import image6 from "@assets/Bay Golf Carts - Golf Carts In The Bay Of The Town 6_1756238794667.jpeg";
import image7 from "@assets/Bay Golf Carts - Golf Carts In The Bay Of The Town 7_1756238794667.jpeg";

export const backgroundImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

// Page-specific background image assignments for consistency
export const pageBackgrounds = {
  home: image1,           // Bay Golf Carts main bay scene for homepage
  inventory: image2,      // Bay Golf Carts bay showroom display
  rentals: image3,        // Bay Golf Carts bay service-focused view
  services: image4,       // Bay Golf Carts professional bay service area
  about: image5,          // Bay Golf Carts welcoming bay interior
  contact: image6,        // Bay Golf Carts bay customer service area
  showroom: image7,       // Bay Golf Carts premium bay showroom
  denago: image4,         // Bay Golf Carts bay service area for Denago vehicles
  evolution: image5,      // Bay Golf Carts bay interior for Evolution vehicles
  vehicle: image3,        // Bay Golf Carts individual vehicle bay display
  vehicleDetail: image7,  // Bay Golf Carts premium vehicle bay showcase
  counties: image2,       // Bay Golf Carts for county pages
  locations: image6,      // Bay Golf Carts for location pages
  states: image1,         // Bay Golf Carts for state pages
  bays: image4,           // Bay Golf Carts for bay pages
  shoretons: image5,      // Bay Golf Carts for shore town pages
  default: image1,        // Bay Golf Carts main bay scene as fallback
};

// Function to get background image for a specific page
export const getPageBackground = (pageName: string): string => {
  return pageBackgrounds[pageName as keyof typeof pageBackgrounds] || pageBackgrounds.default;
};

// Function to get a random background image
export const getRandomBackground = (): string => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

// Function to get hero background style with overlay for readability
export const getHeroBackgroundStyle = (pageName: string) => {
  const backgroundImage = getPageBackground(pageName);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.75), rgba(14, 46, 85, 0.75)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};

// Function to get lighter background style for content sections
export const getLightBackgroundStyle = (pageName: string) => {
  const backgroundImage = getPageBackground(pageName);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};

// Function to get random vehicle background for vehicle pages
export const getRandomVehicleBackground = (): string => {
  // Use different random logic for vehicle pages to ensure variety
  const timestamp = Date.now();
  const randomIndex = timestamp % backgroundImages.length;
  return backgroundImages[randomIndex];
};

// Function to get hero background style with random image
export const getRandomHeroBackgroundStyle = () => {
  const backgroundImage = getRandomBackground();
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.75), rgba(14, 46, 85, 0.75)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};