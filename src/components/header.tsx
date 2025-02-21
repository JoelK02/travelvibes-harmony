
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/ui/nav-link";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            Travelvibes
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/airport-transfers"
              active={location.pathname === "/airport-transfers"}
            >
              Airport Transfers
            </NavLink>
            <NavLink
              to="/daily-tours"
              active={location.pathname === "/daily-tours"}
            >
              Daily Tours
            </NavLink>
            <NavLink
              to="/private-tours"
              active={location.pathname === "/private-tours"}
            >
              Private Tours
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button>Book Now</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
