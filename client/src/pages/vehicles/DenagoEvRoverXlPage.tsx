import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvRoverXLImage from "@assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg";

export default function DenagoEvRoverXlPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV ROVER XL"
      brand="DENAGO"
      series="EV ROVER"
      price="$9,995"
      image={denagoEvRoverXLImage}
      seoTitle="DENAGO EV ROVER XL - Luxury Family Golf Cart | Bay Golf Carts"
      seoDescription="Discover the DENAGO EV ROVER XL electric golf cart from Bay Golf Carts serving Eastern Seaboard coastal communities. 6-passenger luxury with advanced safety. Call 1-844-BAY-GOLF (1-844-229-4653)."
      seoKeywords="DENAGO EV ROVER XL, luxury golf cart, 6-passenger, bay golf carts, eastern seaboard, coastal family vehicle"
      canonicalUrl="https://baygolfcarts.com/vehicles/denago-ev-rover-xl"
      seats="6"
      range="50 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "6-Passenger Seating",
        "Luxury Interior",
        "Advanced Safety Features",
        "Premium Sound System",
        "Climate Control",
        "Premium Materials",
        "Enhanced Comfort",
        "Smart Technology"
      ]}
      description="Luxury family transportation with maximum comfort and capacity. The DENAGO EV ROVER XL features 6-passenger seating with premium interior and advanced safety systems for Eastern Seaboard coastal families and shore communities."
      tigoUrl="https://tigongolfcarts.com/denago-ev/rover-xl/"
    />
  );
}