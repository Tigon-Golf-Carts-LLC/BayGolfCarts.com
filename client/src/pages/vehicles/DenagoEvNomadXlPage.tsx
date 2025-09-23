import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvNomadXLImage from "@assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg";

export default function DenagoEvNomadXlPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV NOMAD XL"
      brand="DENAGO"
      series="EV NOMAD"
      price="$8,495"
      image={denagoEvNomadXLImage}
      seoTitle="DENAGO EV NOMAD XL"
      seoDescription="Experience the DENAGO EV NOMAD XL electric golf cart from Bay Golf Carts serving Eastern Seaboard coastal areas. Extended range premium off-road package. Call 1-844-844-6638."
      seoKeywords="DENAGO EV NOMAD XL, extended range golf cart, premium off-road, bay golf carts, eastern seaboard, coastal adventure"
      canonicalUrl="https://baygolfcarts.com/vehicles/denago-ev-nomad-xl"
      seats="4"
      range="55 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Extended Range",
        "Premium Off-Road Package",
        "Enhanced Cargo Space",
        "All-Weather Protection",
        "Superior Suspension",
        "Heavy-Duty Construction",
        "Advanced Battery System",
        "Premium Interior"
      ]}
      description="Extended range and premium off-road capabilities for serious adventurers. The DENAGO EV NOMAD XL offers enhanced cargo space and all-weather protection for Eastern Seaboard coastal expeditions and shore adventures."
      tigoUrl="https://tigongolfcarts.com/denago-ev/nomad-xl/"
    />
  );
}