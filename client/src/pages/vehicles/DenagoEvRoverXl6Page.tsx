import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvRoverXL6Image from "@assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg";

export default function DenagoEvRoverXl6Page() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV ROVER XL6"
      brand="DENAGO"
      series="EV ROVER"
      price="$11,995"
      image={denagoEvRoverXL6Image}
      seoTitle="DENAGO EV ROVER XL6"
      seoDescription="Experience the DENAGO EV ROVER XL6 electric golf cart from Bay Golf Carts serving Eastern Seaboard coastal areas. Extended 6-seat configuration with premium materials and enhanced comfort. Call 1-844-844-6638."
      seoKeywords="DENAGO EV ROVER XL6, extended 6-seat, premium golf cart, bay golf carts, eastern seaboard, coastal"
      canonicalUrl="https://baygolfcarts.com/vehicles/denago-ev-rover-xl6"
      seats="6"
      range="50 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Extended 6-Seat Configuration",
        "Premium Materials",
        "Enhanced Comfort",
        "Smart Technology",
        "Advanced Suspension",
        "Luxury Appointments",
        "Superior Build Quality",
        "Modern Design"
      ]}
      description="Extended 6-seat configuration with premium materials and enhanced comfort features. The DENAGO EV ROVER XL6 represents the pinnacle of family electric vehicle luxury in Eastern Seaboard coastal communities."
      tigoUrl="https://tigongolfcarts.com/denago-ev/rover-xl6/"
    />
  );
}