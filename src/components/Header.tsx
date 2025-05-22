
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, Mail } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
      
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  const handleNavigation = (id: string) => {
    setIsOpen(false);

    const scrollToId = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(scrollToId, 100);
    } else {
      scrollToId();
    }
  };
  
  return (
    <header
      className={`sticky top-0 z-50 w-full 
                  backdrop-blur-lg backdrop-saturate-150 
                  sticky-header-transition
                  ${isSticky ? "bg-white/60 shadow-md py-4" : "bg-transparent py-5"}`}
    >

      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href="/" className="group flex items-center space-x-3">
            <div
              className="h-12 w-12 rounded-full overflow-hidden  
                        group-hover:shadow-xl group-hover:scale-105 
                        transition-all duration-300 flex items-center justify-center"
            >
              <img
                src="/logo.png"
                alt="Logo Mr. Clear"
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
            </div>
            <span className="hidden md:inline-block font-semibold text-xl text-brand-blue tracking-wide group-hover:text-brand-blue/80 transition-colors duration-300">
              Mr. Clear
            </span>
          </a>
        </div>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="/#services" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('services');
            }}
            className="text-gray-700 hover:text-brand-blue font-medium"
          >
            Nos Services
          </a>
          <a 
            href="/#pourquoi-nous" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('pourquoi-nous');
            }}
            className="text-gray-700 hover:text-brand-blue font-medium"
          >
            Pourquoi Nous
          </a>
          <a 
            href="/#faq" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('faq');
            }}
            className="text-gray-700 hover:text-brand-blue font-medium"
          >
            FAQ
          </a>
          <a 
            href="/#contact" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('contact');
            }}
            className="text-gray-700 hover:text-brand-blue font-medium"
          >
            Contact
          </a>
          <Button 
            onClick={() => handleNavigation('soumission')}
            className="cta-button"
          >
            Obtenir un devis
          </Button>
        </nav>

        {/* Menu mobile drawer */}
        <div className="md:hidden flex items-center">
          <a href="tel:+15142666151" className="mr-4 text-bg-brand-blue p-2 rounded-full hover:bg-brand-blue/90 transition-colors">
            <Phone size={20} />
          </a>
          
          <a href="mailto:mrclear.homeservices@gmail.com" className="mr-4 text-bg-brand-blue p-2 rounded-full hover:bg-brand-blue/90 transition-colors">
            <Mail size={20} />
          </a>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-full p-0 transition-transform duration-300 ease-in-out"
            >
              <SheetHeader className="p-4 border-b border-gray-100">
                <SheetTitle>
                  <a href="#" className="flex items-center justify-center">
                    <span className="text-brand-blue font-bold text-xl">Mr. Clear</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col py-6">
                <SheetClose asChild>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('services');
                    }}
                    className="text-gray-700 hover:text-brand-blue font-medium px-6 py-4 text-lg"
                  >
                    Nos Services
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#pourquoi-nous" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('pourquoi-nous');
                    }}
                    className="text-gray-700 hover:text-brand-blue font-medium px-6 py-4 text-lg"
                  >
                    Pourquoi Nous
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#faq" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('faq');
                    }}
                    className="text-gray-700 hover:text-brand-blue font-medium px-6 py-4 text-lg"
                  >
                    FAQ
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('contact');
                    }}
                    className="text-gray-700 hover:text-brand-blue font-medium px-6 py-4 text-lg"
                  >
                    Contact
                  </a>
                </SheetClose>
                <div className="px-6 pt-4">
                  <SheetClose asChild>
                    <Button 
                      onClick={() => handleNavigation('soumission')}
                      className="cta-button w-full"
                    >
                      Obtenir un devis →
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
