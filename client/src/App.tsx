import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";
import EcoImpactPage from "@/pages/EcoImpactPage";
import FinancingPage from "@/pages/FinancingPage";

// State Pages
import {
  MainePage,
  NewHampshirePage,
  MassachusettsPage,
  RhodeIslandPage,
  ConnecticutPage,
  NewYorkPage,
  NewJerseyPage,
  DelawarePage,
  MarylandPage,
  VirginiaPage,
  NorthCarolinaPage,
  SouthCarolinaPage,
  GeorgiaPage,
  FloridaPage
} from "@/pages/states/StatePages";

// All Bay Pages
import {
  // Maine
  CascoBayPage,
  PenobscotBayPage,
  FrenchmanBayPage,
  PassamaquoddyBayPage,
  // New Hampshire
  GreatBayNHPage,
  LittleBayPage,
  // Massachusetts
  MassachusettsBayPage,
  CapeCodBayPage,
  BuzzardsBayPage,
  PlymouthBayPage,
  // Rhode Island
  NarragansettBayPage,
  MountHopeBayPage,
  // Connecticut
  LongIslandSoundPage,
  FishersIslandSoundPage,
  // New York
  JamaicaBayPage,
  GreatSouthBayPage,
  PeconicBayPage,
  // New Jersey
  DelawareBayNJPage,
  BarnegatBayPage,
  GreatBayNJPage,
  // Delaware
  DelawareBayDEPage,
  RehobothBayPage,
  // Maryland
  ChesapeakeBayMDPage,
  TangierSoundPage,
  // Virginia
  ChesapeakeBayVAPage,
  LynnhavenBayPage,
  // North Carolina
  AlbemarleSoundPage,
  PamlicoSoundPage,
  CoreSoundPage,
  // South Carolina
  CharlestonHarborPage,
  PortRoyalSoundPage,
  WinyahBayPage,
  // Georgia
  SavannahRiverPage,
  AltamahaSoundPage,
  StAndrewSoundPage,
  // Florida
  TampaBayPage,
  BiscayneBayPage,
  CharlotteHarborPage,
  SarasotaBayPage
} from "@/pages/bays/AllBayPages";

// All Shore Town Pages
import {
  // Maine
  BarHarborPage,
  CamdenPage,
  KennebunkportPage,
  OldOrchardBeachPage,
  PortlandMainePage,
  RocklandPage,
  // New Hampshire
  HamptonBeachPage,
  PortsmouthPage,
  RyePage,
  // Massachusetts
  ProvincetownPage,
  NantucketPage,
  MarthasVineyardPage,
  CapeCodPage,
  SalemPage,
  GloucesterPage,
  // Rhode Island
  NewportPage,
  BlockIslandPage,
  NarragansettPage,
  WesterlyPage,
  // Connecticut
  MysticPage,
  OldSaybrookPage,
  StoningtonPage,
  MadisonPage,
  // New York
  MontaukPage,
  TheHamptonsPage,
  FireIslandPage,
  ShelterIslandPage,
  SagHarborPage,
  // New Jersey
  CapeMayPage,
  AtlanticCityPage,
  OceanCityNJPage,
  SeasideHeightsPage,
  SpringLakePage,
  // Delaware
  RehobothBeachPage,
  BethanyBeachPage,
  DeweyBeachPage,
  LewesPage,
  // Maryland
  OceanCityMDPage,
  AnnapolisPage,
  StMichaelsPage,
  CambridgePage,
  // Virginia
  VirginiaBeachPage,
  NorfolkPage,
  WilliamsburgPage,
  NewportNewsPage,
  // North Carolina
  OuterBanksPage,
  WilmingtonNCPage,
  WrightsvilleBeachPage,
  NagsHeadPage,
  // South Carolina
  CharlestonPage,
  MyrtleBeachPage,
  HiltonHeadIslandPage,
  BeaufortPage,
  // Georgia
  SavannahPage,
  JekyllIslandPage,
  StSimonsIslandPage,
  TybeeIslandPage,
  // Florida
  StAugustinePage,
  KeyWestPage,
  MiamiBeachPage,
  NaplesPage,
  ClearwaterBeachPage,
  FortLauderdalePage
} from "@/pages/shore-towns/AllShoreTownPages";

import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";

// Policy Pages
import TermsConditionsPage from "@/pages/policies/TermsConditionsPage";
import ReturnPolicyPage from "@/pages/policies/ReturnPolicyPage";
import DeliveryPolicyPage from "@/pages/policies/DeliveryPolicyPage";
import RentalPolicyPage from "@/pages/policies/RentalPolicyPage";
import StoragePolicyPage from "@/pages/policies/StoragePolicyPage";
import PublishingPolicyPage from "@/pages/policies/PublishingPolicyPage";
import FeedbackPolicyPage from "@/pages/policies/FeedbackPolicyPage";
import CorrectionsPolicyPage from "@/pages/policies/CorrectionsPolicyPage";
import DiversityPolicyPage from "@/pages/policies/DiversityPolicyPage";
import EthicsPolicyPage from "@/pages/policies/EthicsPolicyPage";
import StaffingReportPage from "@/pages/policies/StaffingReportPage";

// Sussex County Municipality Pages - All 27 location pages created
// Complete coverage of every municipality in Sussex County, Delaware

// Note: Individual vehicle detail pages removed - using dynamic VehicleDetailPage instead

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

queryClient.setQueryDefaults(['get'], { queryFn: ({ queryKey }) => fetcher(queryKey[0] as string) });

export default function App() {
  useScrollToTop();

  return (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />
            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/vehicles/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/financing" component={FinancingPage} />
            <Route path="/eco-impact" component={EcoImpactPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />
            
            {/* State Pages */}
            <Route path="/maine-golf-carts" component={MainePage} />
            <Route path="/new-hampshire-golf-carts" component={NewHampshirePage} />
            <Route path="/massachusetts-golf-carts" component={MassachusettsPage} />
            <Route path="/rhode-island-golf-carts" component={RhodeIslandPage} />
            <Route path="/connecticut-golf-carts" component={ConnecticutPage} />
            <Route path="/new-york-golf-carts" component={NewYorkPage} />
            <Route path="/new-jersey-golf-carts" component={NewJerseyPage} />
            <Route path="/delaware-golf-carts" component={DelawarePage} />
            <Route path="/maryland-golf-carts" component={MarylandPage} />
            <Route path="/virginia-golf-carts" component={VirginiaPage} />
            <Route path="/north-carolina-golf-carts" component={NorthCarolinaPage} />
            <Route path="/south-carolina-golf-carts" component={SouthCarolinaPage} />
            <Route path="/georgia-golf-carts" component={GeorgiaPage} />
            <Route path="/florida-golf-carts" component={FloridaPage} />

            {/* Policy Pages */}
            <Route path="/policies/terms-conditions" component={TermsConditionsPage} />
            <Route path="/policies/return-policy" component={ReturnPolicyPage} />
            <Route path="/policies/delivery-policy" component={DeliveryPolicyPage} />
            <Route path="/policies/rental-policy" component={RentalPolicyPage} />
            <Route path="/policies/storage-policy" component={StoragePolicyPage} />
            <Route path="/policies/publishing-policy" component={PublishingPolicyPage} />
            <Route path="/policies/feedback-policy" component={FeedbackPolicyPage} />
            <Route path="/policies/corrections-policy" component={CorrectionsPolicyPage} />
            <Route path="/policies/diversity-policy" component={DiversityPolicyPage} />
            <Route path="/policies/ethics-policy" component={EthicsPolicyPage} />
            <Route path="/policies/staffing-report" component={StaffingReportPage} />

            {/* All Bay Pages */}
            {/* Maine Bays */}
            <Route path="/maine/casco-bay-golf-carts" component={CascoBayPage} />
            <Route path="/maine/penobscot-bay-golf-carts" component={PenobscotBayPage} />
            <Route path="/maine/frenchman-bay-golf-carts" component={FrenchmanBayPage} />
            <Route path="/maine/passamaquoddy-bay-golf-carts" component={PassamaquoddyBayPage} />
            
            {/* New Hampshire Bays */}
            <Route path="/new-hampshire/great-bay-golf-carts" component={GreatBayNHPage} />
            <Route path="/new-hampshire/little-bay-golf-carts" component={LittleBayPage} />
            
            {/* Massachusetts Bays */}
            <Route path="/massachusetts/massachusetts-bay-golf-carts" component={MassachusettsBayPage} />
            <Route path="/massachusetts/cape-cod-bay-golf-carts" component={CapeCodBayPage} />
            <Route path="/massachusetts/buzzards-bay-golf-carts" component={BuzzardsBayPage} />
            <Route path="/massachusetts/plymouth-bay-golf-carts" component={PlymouthBayPage} />
            
            {/* Rhode Island Bays */}
            <Route path="/rhode-island/narragansett-bay-golf-carts" component={NarragansettBayPage} />
            <Route path="/rhode-island/mount-hope-bay-golf-carts" component={MountHopeBayPage} />
            
            {/* Connecticut Bays */}
            <Route path="/connecticut/long-island-sound-golf-carts" component={LongIslandSoundPage} />
            <Route path="/connecticut/fishers-island-sound-golf-carts" component={FishersIslandSoundPage} />
            
            {/* New York Bays */}
            <Route path="/new-york/jamaica-bay-golf-carts" component={JamaicaBayPage} />
            <Route path="/new-york/great-south-bay-golf-carts" component={GreatSouthBayPage} />
            <Route path="/new-york/peconic-bay-golf-carts" component={PeconicBayPage} />
            
            {/* New Jersey Bays */}
            <Route path="/new-jersey/delaware-bay-golf-carts" component={DelawareBayNJPage} />
            <Route path="/new-jersey/barnegat-bay-golf-carts" component={BarnegatBayPage} />
            <Route path="/new-jersey/great-bay-golf-carts" component={GreatBayNJPage} />
            
            {/* Delaware Bays */}
            <Route path="/delaware/delaware-bay-golf-carts" component={DelawareBayDEPage} />
            <Route path="/delaware/rehoboth-bay-golf-carts" component={RehobothBayPage} />
            
            {/* Maryland Bays */}
            <Route path="/maryland/chesapeake-bay-golf-carts" component={ChesapeakeBayMDPage} />
            <Route path="/maryland/tangier-sound-golf-carts" component={TangierSoundPage} />
            
            {/* Virginia Bays */}
            <Route path="/virginia/chesapeake-bay-golf-carts" component={ChesapeakeBayVAPage} />
            <Route path="/virginia/lynnhaven-bay-golf-carts" component={LynnhavenBayPage} />
            
            {/* North Carolina Bays */}
            <Route path="/north-carolina/albemarle-sound-golf-carts" component={AlbemarleSoundPage} />
            <Route path="/north-carolina/pamlico-sound-golf-carts" component={PamlicoSoundPage} />
            <Route path="/north-carolina/core-sound-golf-carts" component={CoreSoundPage} />
            
            {/* South Carolina Bays */}
            <Route path="/south-carolina/charleston-harbor-golf-carts" component={CharlestonHarborPage} />
            <Route path="/south-carolina/port-royal-sound-golf-carts" component={PortRoyalSoundPage} />
            <Route path="/south-carolina/winyah-bay-golf-carts" component={WinyahBayPage} />
            
            {/* Georgia Bays */}
            <Route path="/georgia/savannah-river-golf-carts" component={SavannahRiverPage} />
            <Route path="/georgia/altamaha-sound-golf-carts" component={AltamahaSoundPage} />
            <Route path="/georgia/st-andrew-sound-golf-carts" component={StAndrewSoundPage} />
            
            {/* Florida Bays */}
            <Route path="/florida/tampa-bay-golf-carts" component={TampaBayPage} />
            <Route path="/florida/biscayne-bay-golf-carts" component={BiscayneBayPage} />
            <Route path="/florida/charlotte-harbor-golf-carts" component={CharlotteHarborPage} />
            <Route path="/florida/sarasota-bay-golf-carts" component={SarasotaBayPage} />

            {/* All Shore Town Pages */}
            {/* Maine Shore Towns */}
            <Route path="/maine/bar-harbor-golf-carts" component={BarHarborPage} />
            <Route path="/maine/camden-golf-carts" component={CamdenPage} />
            <Route path="/maine/kennebunkport-golf-carts" component={KennebunkportPage} />
            <Route path="/maine/old-orchard-beach-golf-carts" component={OldOrchardBeachPage} />
            <Route path="/maine/portland-golf-carts" component={PortlandMainePage} />
            <Route path="/maine/rockland-golf-carts" component={RocklandPage} />
            
            {/* New Hampshire Shore Towns */}
            <Route path="/new-hampshire/hampton-beach-golf-carts" component={HamptonBeachPage} />
            <Route path="/new-hampshire/portsmouth-golf-carts" component={PortsmouthPage} />
            <Route path="/new-hampshire/rye-golf-carts" component={RyePage} />
            
            {/* Massachusetts Shore Towns */}
            <Route path="/massachusetts/provincetown-golf-carts" component={ProvincetownPage} />
            <Route path="/massachusetts/nantucket-golf-carts" component={NantucketPage} />
            <Route path="/massachusetts/marthas-vineyard-golf-carts" component={MarthasVineyardPage} />
            <Route path="/massachusetts/cape-cod-golf-carts" component={CapeCodPage} />
            <Route path="/massachusetts/salem-golf-carts" component={SalemPage} />
            <Route path="/massachusetts/gloucester-golf-carts" component={GloucesterPage} />
            
            {/* Rhode Island Shore Towns */}
            <Route path="/rhode-island/newport-golf-carts" component={NewportPage} />
            <Route path="/rhode-island/block-island-golf-carts" component={BlockIslandPage} />
            <Route path="/rhode-island/narragansett-golf-carts" component={NarragansettPage} />
            <Route path="/rhode-island/westerly-golf-carts" component={WesterlyPage} />
            
            {/* Connecticut Shore Towns */}
            <Route path="/connecticut/mystic-golf-carts" component={MysticPage} />
            <Route path="/connecticut/old-saybrook-golf-carts" component={OldSaybrookPage} />
            <Route path="/connecticut/stonington-golf-carts" component={StoningtonPage} />
            <Route path="/connecticut/madison-golf-carts" component={MadisonPage} />
            
            {/* New York Shore Towns */}
            <Route path="/new-york/montauk-golf-carts" component={MontaukPage} />
            <Route path="/new-york/the-hamptons-golf-carts" component={TheHamptonsPage} />
            <Route path="/new-york/fire-island-golf-carts" component={FireIslandPage} />
            <Route path="/new-york/shelter-island-golf-carts" component={ShelterIslandPage} />
            <Route path="/new-york/sag-harbor-golf-carts" component={SagHarborPage} />
            
            {/* New Jersey Shore Towns */}
            <Route path="/new-jersey/cape-may-golf-carts" component={CapeMayPage} />
            <Route path="/new-jersey/atlantic-city-golf-carts" component={AtlanticCityPage} />
            <Route path="/new-jersey/ocean-city-golf-carts" component={OceanCityNJPage} />
            <Route path="/new-jersey/seaside-heights-golf-carts" component={SeasideHeightsPage} />
            <Route path="/new-jersey/spring-lake-golf-carts" component={SpringLakePage} />
            
            {/* Delaware Shore Towns */}
            <Route path="/delaware/rehoboth-beach-golf-carts" component={RehobothBeachPage} />
            <Route path="/delaware/bethany-beach-golf-carts" component={BethanyBeachPage} />
            <Route path="/delaware/dewey-beach-golf-carts" component={DeweyBeachPage} />
            <Route path="/delaware/lewes-golf-carts" component={LewesPage} />
            
            {/* Maryland Shore Towns */}
            <Route path="/maryland/ocean-city-golf-carts" component={OceanCityMDPage} />
            <Route path="/maryland/annapolis-golf-carts" component={AnnapolisPage} />
            <Route path="/maryland/st-michaels-golf-carts" component={StMichaelsPage} />
            <Route path="/maryland/cambridge-golf-carts" component={CambridgePage} />
            
            {/* Virginia Shore Towns */}
            <Route path="/virginia/virginia-beach-golf-carts" component={VirginiaBeachPage} />
            <Route path="/virginia/norfolk-golf-carts" component={NorfolkPage} />
            <Route path="/virginia/williamsburg-golf-carts" component={WilliamsburgPage} />
            <Route path="/virginia/newport-news-golf-carts" component={NewportNewsPage} />
            
            {/* North Carolina Shore Towns */}
            <Route path="/north-carolina/outer-banks-golf-carts" component={OuterBanksPage} />
            <Route path="/north-carolina/wilmington-golf-carts" component={WilmingtonNCPage} />
            <Route path="/north-carolina/wrightsville-beach-golf-carts" component={WrightsvilleBeachPage} />
            <Route path="/north-carolina/nags-head-golf-carts" component={NagsHeadPage} />
            
            {/* South Carolina Shore Towns */}
            <Route path="/south-carolina/charleston-golf-carts" component={CharlestonPage} />
            <Route path="/south-carolina/myrtle-beach-golf-carts" component={MyrtleBeachPage} />
            <Route path="/south-carolina/hilton-head-island-golf-carts" component={HiltonHeadIslandPage} />
            <Route path="/south-carolina/beaufort-golf-carts" component={BeaufortPage} />
            
            {/* Georgia Shore Towns */}
            <Route path="/georgia/savannah-golf-carts" component={SavannahPage} />
            <Route path="/georgia/jekyll-island-golf-carts" component={JekyllIslandPage} />
            <Route path="/georgia/st-simons-island-golf-carts" component={StSimonsIslandPage} />
            <Route path="/georgia/tybee-island-golf-carts" component={TybeeIslandPage} />
            
            {/* Florida Shore Towns */}
            <Route path="/florida/st-augustine-golf-carts" component={StAugustinePage} />
            <Route path="/florida/key-west-golf-carts" component={KeyWestPage} />
            <Route path="/florida/miami-beach-golf-carts" component={MiamiBeachPage} />
            <Route path="/florida/naples-golf-carts" component={NaplesPage} />
            <Route path="/florida/clearwater-beach-golf-carts" component={ClearwaterBeachPage} />
            <Route path="/florida/fort-lauderdale-golf-carts" component={FortLauderdalePage} />

            {/* All vehicle detail pages handled by dynamic VehicleDetailPage component */}

            {/* 404 Page */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  </HelmetProvider>
  );
}