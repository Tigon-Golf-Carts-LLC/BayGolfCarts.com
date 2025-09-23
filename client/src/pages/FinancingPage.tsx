import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CreditCard, Calculator, DollarSign, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

// Import financing option images
import yardCardImage from "@assets/generated_images/Yard_Card_financing_option_31032702.png";
import sheffieldImage from "@assets/generated_images/Sheffield_Financial_redesigned_card_483cf627.png";
import rentToOwnImage from "@assets/generated_images/Rent_to_Own_option_c87b7549.png";
import dllFinancialImage from "@assets/generated_images/DLL_Financial_option_4384747b.png";
import gllFinancialImage from "@assets/generated_images/GLL_Financial_option_9c78da4e.png";
import roadrunnerImage from "@assets/generated_images/Roadrunner_Financial_option_34eaa0a7.png";
import univestImage from "@assets/generated_images/Univest_Capital_option_629a29ac.png";
import dealerDirectImage from "@assets/generated_images/Dealer_Direct_Financing_option_c3033c7c.png";

export default function FinancingPage() {
  const financingOptions = [
    {
      title: "Get the Yard Card",
      subtitle: "Buy Now, Pay Later With The Yard Card.*",
      description: "Flexible payment options for your golf cart purchase",
      buttonText: "Quick Apply⟶",
      url: "https://finance.consumercreditapp.com/cc/landing/yard_card",
      image: yardCardImage,
      bgColor: "bg-white",
      borderColor: "border-green-200"
    },
    {
      title: "Prequalify Now!",
      subtitle: "Get prequalified with Sheffield Financial with no impact to your credit.*",
      description: "Check your Sheffield financing options without affecting your credit score",
      buttonText: "Quick Apply⟶", 
      url: "https://prequalify.sheffieldfinancial.com/Apply/Dealer/56712?source=web",
      image: sheffieldImage,
      bgColor: "bg-white",
      borderColor: "border-blue-200"
    },
    {
      title: "Rent To Own",
      subtitle: "Helping Golf Cart Customers Achieve Ownership.*",
      description: "Start with rental payments that build toward ownership",
      buttonText: "Quick Apply⟶",
      url: "https://blirentals.com/app/TIGON_GOLFCARTS_LLC",
      image: rentToOwnImage,
      bgColor: "bg-white",
      borderColor: "border-teal-200"
    },
    {
      title: "DLL Financial Solutions",
      subtitle: "Professional Equipment Financing",
      description: "Commercial and business financing solutions available",
      buttonText: "Quick Apply⟶",
      url: "https://applynow-cica-prd.dllgroup.com/?entityId=4&dealerCode=015639",
      image: dllFinancialImage,
      bgColor: "bg-white",
      borderColor: "border-purple-200"
    },
    {
      title: "GLL Financial Solutions",
      subtitle: "The lowest APR without hidden fees",
      description: "Competitive rates with transparent pricing",
      buttonText: "Quick Apply⟶",
      url: "tel:1-844-844-6638",
      image: gllFinancialImage,
      bgColor: "bg-white",
      borderColor: "border-orange-200"
    },
    {
      title: "Roadrunner Financial",
      subtitle: "Consumer Financing",
      description: "Get Ready To Ride With Consumer Financing",
      buttonText: "Quick Apply⟶",
      url: "https://octane.co/flex/034170",
      image: roadrunnerImage,
      bgColor: "bg-white",
      borderColor: "border-red-200"
    },
    {
      title: "Univest Capital",
      subtitle: "UNIVEST CAPITAL",
      description: "Comprehensive financing solutions for your needs",
      buttonText: "Quick Apply⟶",
      url: "https://form.jotform.com/UnivestCapital/credit-application-bakos?utm_source=Delaware+Golf+Carts&utm_medium=Financing&utm_campaign=Business&utm_term=Best+Golf+Cart+Financing",
      image: univestImage,
      bgColor: "bg-white",
      borderColor: "border-indigo-200"
    },
    {
      title: "Dealer Direct Financing",
      subtitle: "Buy Now, Pay with Direct Financing",
      description: "Work directly with our financing team for personalized solutions",
      buttonText: "Quick Apply⟶",
      url: "tel:1-844-844-6638",
      image: dealerDirectImage,
      bgColor: "bg-white",
      borderColor: "border-gray-200"
    }
  ];

  const benefits = [
    "Competitive interest rates starting as low as 0% APR*",
    "Flexible payment terms from 12 to 84 months",
    "Quick approval process, often within minutes",
    "No prepayment penalties",
    "Multiple financing partners for best rates",
    "Personal and commercial financing available"
  ];

  return (
    <>
      <SEOHead 
        title="Golf Cart Financing"
        description="Flexible golf cart financing options serving Eastern Seaboard coastal communities with multiple lenders for DENAGO and Evolution electric vehicles. Call 1-844-BAY-GOLF (1-844-229-4653)."
        keywords="golf cart financing eastern seaboard, coastal golf cart loans, bay golf cart financing, shore town golf cart financing, electric vehicle financing"
        canonicalUrl="https://baygolfcarts.com/financing"
        ogImage="/attached_assets/Bay Golf Carts - Golf Carts In The Bay Of The Town 6_1756238794667.jpeg"
        ogImageWidth="1200"
        ogImageHeight="630"
        ogType="website"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-4 text-white overflow-hidden"
          style={getHeroBackgroundStyle('financing')}
        >
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Apply For Street Legal LSV, NEV &<br />Golf Cart Financing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              At Delaware Golf Carts, we understand that financing your purchase is an important aspect of the buying process. 
              That's why we offer flexible financing options to suit every budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Calculator className="w-5 h-5 mr-2" />
                View Financing Options
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Flexible Financing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Whether you're looking for low monthly payments or competitive interest rates, our financing team is here to help you 
                find the perfect solution for your DENAGO or EVOLUTION golf cart purchase.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financing Options Grid */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Choose Your Financing Partner
              </h2>
              <p className="text-xl text-gray-600">
                Multiple financing options to fit your budget and credit situation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {financingOptions.map((option, index) => (
                <Card key={index} className={`${option.bgColor} ${option.borderColor} border-2 hover:shadow-xl transition-all duration-300 group overflow-hidden`}>
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3 pb-6">
                    <p className="font-semibold text-gray-700 text-sm">
                      {option.subtitle}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {option.description}
                    </p>
                    <a 
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pt-2"
                    >
                      <Button 
                        className="w-full bg-theme-primary hover:bg-theme-primary/90 text-white group-hover:scale-105 transition-transform"
                        size="sm"
                      >
                        {option.buttonText}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Why Choose Our Financing Options?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Competitive Rates</h3>
                      <p className="text-gray-600">We work with multiple lenders to secure the best possible rates for your situation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calculator className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Flexible Terms</h3>
                      <p className="text-gray-600">Choose payment terms that work with your budget, from 12 to 84 months.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Approval</h3>
                      <p className="text-gray-600">Get approved quickly with our streamlined application process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-theme-primary/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Contact our financing team today to discuss your options and find the perfect financing solution for your new golf cart.
                </p>
                <div className="space-y-3">
                  <a href="tel:1-844-844-6638">
                    <Button size="lg" className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                      Call 1-844-844-6638
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="w-full">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Contact Our Finance Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              *Subject to credit approval. Terms and conditions apply. APR varies based on creditworthiness and other factors. 
              Not all applicants will qualify for promotional rates. See financing partner for complete terms and conditions.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}