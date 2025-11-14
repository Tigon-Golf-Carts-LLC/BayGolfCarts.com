import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/inventory", label: "Inventory" },
    { path: "/rentals", label: "Rentals" },
    { path: "/services", label: "Services" },
    { path: "/showroom", label: "Showroom" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg">
              <img 
                src="/attached_assets/BAY GOLF CARTS_1756302242088.png" 
                alt="Bay Golf Carts Logo" 
                className="h-20 w-20 object-contain"
              />
            </div>
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-lg font-bold text-theme-primary" style={{lineHeight: '1.1'}}>
                  BAY<br />
                  GOLF CARTS
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-gray-900 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* States Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  States
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="max-h-96 overflow-y-auto">
                  <DropdownMenuItem asChild>
                    <Link href="/maine-golf-carts" className="w-full">
                      Maine
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/new-hampshire-golf-carts" className="w-full">
                      New Hampshire
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/massachusetts-golf-carts" className="w-full">
                      Massachusetts
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/rhode-island-golf-carts" className="w-full">
                      Rhode Island
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/connecticut-golf-carts" className="w-full">
                      Connecticut
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/new-york-golf-carts" className="w-full">
                      New York
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/new-jersey-golf-carts" className="w-full">
                      New Jersey
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/delaware-golf-carts" className="w-full">
                      Delaware
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/maryland-golf-carts" className="w-full">
                      Maryland
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/virginia-golf-carts" className="w-full">
                      Virginia
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/north-carolina-golf-carts" className="w-full">
                      North Carolina
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/south-carolina-golf-carts" className="w-full">
                      South Carolina
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/georgia-golf-carts" className="w-full">
                      Georgia
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/florida-golf-carts" className="w-full">
                      Florida
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* About Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="w-full">
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/financing" className="w-full">
                      Financing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/eco-impact" className="w-full">
                      Eco-Impact Calculator
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center space-x-4">
              <a href="tel:1-844-844-6638">
                <Button className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
                  Call 1-844-844-6638
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`px-3 py-2 text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-gray-900 font-semibold"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Mobile States Section */}
                  <div className="border-t pt-4">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      States
                    </div>
                    <Link
                      href="/maine-golf-carts"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Maine
                    </Link>
                    <Link
                      href="/massachusetts-golf-carts"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Massachusetts
                    </Link>
                    <Link
                      href="/florida-golf-carts"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Florida
                    </Link>
                  </div>
                  
                  {/* Mobile About Section */}
                  <div className="border-t pt-4">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      About
                    </div>
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/financing"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Financing
                    </Link>
                    <Link
                      href="/eco-impact"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Eco-Impact Calculator
                    </Link>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <a href="tel:1-844-844-6638">
                      <Button className="bg-theme-orange hover:bg-orange-600 text-white w-full">
                        Call 1-844-844-6638
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}