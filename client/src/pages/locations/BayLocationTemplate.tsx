import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Star, Shield, Truck, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { getLocationMapUrl } from "@/utils/easternSeaboardMaps";
import type { State } from "@/data/easternStates";
import type { Bay } from "@/data/majorBays";
import type { ShoreTown } from "@/data/shoreTowns";

interface BayLocationPageProps {
  location: State | Bay | ShoreTown;
  locationType: 'state' | 'bay' | 'shore-town';
}

export default function BayLocationTemplate({ location, locationType }: BayLocationPageProps) {
  const { name, slug, description } = location;
  
  const servicesOffered = [
    "DENAGO Electric Golf Cart Sales",
    "EVOLUTION Golf Cart Sales", 
    "Golf Cart Rentals & Leasing",
    "Professional Maintenance & Repair",
    "Battery Service & Replacement",
    "Custom Modifications & Accessories",
    "Delivery & Pickup Service",
    "Trade-In & Financing Options"
  ];

  const locationFeatures = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Local Delivery",
      description: `Complimentary delivery service throughout ${name} and surrounding coastal areas`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Comprehensive Warranty",
      description: "Full manufacturer warranties on all new DENAGO and EVOLUTION vehicles"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Service Team",
      description: "Certified technicians specializing in electric golf cart maintenance"
    }
  ];

  // Determine the appropriate context text based on location type
  const getLocationContext = () => {
    if (locationType === 'state') {
      const state = location as State;
      return {
        serviceArea: `${state.name} coastline`,
        contextDesc: `Professional golf cart sales, rentals, and service throughout ${state.name}'s coastal communities from Bay Golf Carts serving the Eastern Seaboard. DENAGO and EVOLUTION electric vehicles. Call 1-844-844-6638.`,
        heroDesc: `Premium DENAGO and EVOLUTION electric golf cart sales, rentals, and service throughout ${state.name}'s coastal communities. Your trusted eastern seaboard golf cart specialists.`,
        seoTitle: `${state.name} Golf Carts | Bay Golf Carts`,
        seoKeywords: `${state.name} golf carts, ${slug} golf cart sales, ${state.name} golf cart rentals, DENAGO ${state.name}, EVOLUTION ${state.name}, ${state.name} shore golf carts`
      };
    } else if (locationType === 'bay') {
      const bay = location as Bay;
      return {
        serviceArea: `${bay.name}, ${bay.state}`,
        contextDesc: `Professional golf cart sales, rentals, and service around ${bay.name} in ${bay.state} from Bay Golf Carts serving Eastern Seaboard coastal areas. DENAGO and EVOLUTION electric vehicles. Call 1-844-844-6638.`,
        heroDesc: `Premium DENAGO and EVOLUTION electric golf cart sales, rentals, and service around ${bay.name}, ${bay.state}. Your trusted bay area golf cart specialists.`,
        seoTitle: `${bay.name} Golf Carts | Bay Golf Carts`,
        seoKeywords: `${bay.name} golf carts, ${slug} golf cart sales, ${bay.state} golf cart rentals, DENAGO ${bay.name}, EVOLUTION ${bay.name}, ${bay.name} bay golf carts`
      };
    } else {
      const town = location as ShoreTown;
      return {
        serviceArea: `${town.name}, ${town.state}`,
        contextDesc: `Professional golf cart sales, rentals, and service in ${town.name}, ${town.state} from Bay Golf Carts serving Eastern Seaboard coastal communities. DENAGO and EVOLUTION electric vehicles. Call 1-844-844-6638.`,
        heroDesc: `Premium DENAGO and EVOLUTION electric golf cart sales, rentals, and service in ${town.name}, ${town.state}. Your trusted shore town golf cart specialists.`,
        seoTitle: `${town.name} Golf Carts | Bay Golf Carts`,
        seoKeywords: `${town.name} golf carts, ${slug} golf cart sales, ${town.state} golf cart rentals, DENAGO ${town.name}, EVOLUTION ${town.name}, ${town.name} shore golf carts`
      };
    }
  };

  const context = getLocationContext();

  return (
    <>
      <SEOHead 
        title={context.seoTitle}
        description={context.contextDesc}
        keywords={context.seoKeywords}
        canonicalUrl={`https://baygolfcarts.com${location.url}`}
        ogImage="/attached_assets/BAY GOLF CARTS (1)_1756302505497.png"
        ogType="website"
        ogImageWidth="1200"
        ogImageHeight="630"
        twitterCard="summary_large_image"
        twitterTitle={context.seoTitle}
        twitterDescription={context.contextDesc}
        twitterImage="/attached_assets/BAY GOLF CARTS (1)_1756302505497.png"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-4 text-white overflow-hidden"
          style={getHeroBackgroundStyle(`location-${slug}`)}
        >
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <Badge className="bg-theme-orange text-white px-6 py-2 text-lg font-bold mb-6">
              SERVING {name.toUpperCase()}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {name} Golf Carts
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              {context.heroDesc}
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <Link href="/inventory">
                <Button size="lg" variant="outline" className="bg-white text-gray-900 border-white hover:bg-gray-100">
                  View Available Golf Carts
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Location Services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Golf Cart Services in {name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {context.contextDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {locationFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-theme-orange/10 rounded-full flex items-center justify-center mb-4">
                      <div className="text-theme-orange">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Services We Offer in {name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {servicesOffered.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <ArrowRight className="w-5 h-5 text-theme-orange mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-theme-orange mr-3" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-600">1-844-844-6638</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-theme-orange mr-3" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600">info@baygolfcarts.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-theme-orange mr-3" />
                      <div>
                        <p className="font-semibold">Hours</p>
                        <p className="text-gray-600">Mon-Sat: 9AM-6PM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-theme-orange mr-3" />
                      <div>
                        <p className="font-semibold">Service Area</p>
                        <p className="text-gray-600">{context.serviceArea}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Information */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Serving {name}
              </h2>
              <p className="text-xl text-gray-600">
                We provide golf cart services throughout {context.serviceArea}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Service Area Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-theme-orange mr-3" />
                        <div>
                          <p className="font-semibold">Primary Service Location</p>
                          <p className="text-gray-600">{name}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Truck className="w-5 h-5 text-theme-orange mr-3" />
                        <div>
                          <p className="font-semibold">Delivery Service</p>
                          <p className="text-gray-600">Free delivery throughout the area</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-theme-orange mr-3" />
                        <div>
                          <p className="font-semibold">Coverage Area</p>
                          <p className="text-gray-600">Eastern seaboard communities</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src={getLocationMapUrl(location, locationType)}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${name} - Bay Golf Carts Service Area`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started in {name}?
            </h2>
            <p className="text-xl mb-8">
              Contact Bay Golf Carts today for expert golf cart sales, rentals, and service 
              throughout {context.serviceArea}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 1-844-844-6638
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-theme-primary border-white hover:bg-gray-100">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us Online
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}