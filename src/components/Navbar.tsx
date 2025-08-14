import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import GalaxiesLogo from "@/assets/GALAXIES GREY 2[1].png";
import { X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useIsMobile } from "@/hooks/use-mobile";
import Galaxies from "@/assets/Galaxies.png";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMobile = useIsMobile();

  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [menuOpen, isMobile]);

  const openMenu = () => {
    setIsClosing(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <header
      className={`w-full z-[9999] ${
        isHomePage ? "absolute top-0 left-0 bg-transparent" : "relative"
      }`}
    >
      <nav className="w-full flex items-center justify-between px-6 py-4">
        {/* Mobile: logo + menu icon */}
        <div className="flex items-center justify-between w-full md:hidden">
          <div className="flex justify-center flex-1">
            <Link to="/" onClick={closeMenu}>
              <img
                src={GalaxiesLogo}
                alt="Galaxies Logo"
                className="w-28 h-auto object-contain rounded-md "
              />
            </Link>
          </div>
          <button
            onClick={openMenu}
            className="text-[#36454F] w-8"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <TwoLineMenuIcon size={28} color="#36454F" />
          </button>
        </div>

        {/* Desktop Nav - New Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left side - Work link */}
          <div className="libertinus-sans-regular">
            <NavLink to="/#work" onClick={closeMenu}>
              WORK
            </NavLink>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" onClick={closeMenu}>
              <img
                src={GalaxiesLogo}
                alt="Galaxies Logo"
                className="w-29 md:w-60 h-auto object-contain rounded-md "
              />
            </Link>
          </div>

          {/* Right side - Other links */}
          <div className="libertinus-sans-regular flex items-center gap-6">
            {/* <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink> */}
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/faq" onClick={closeMenu}>
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className={`fixed inset-0 bg-background z-[9998] transition-opacity duration-500 ${
            isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
          } md:hidden flex flex-col h-full`}
        >
          {/* Mobile menu header */}
          <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-background z-[9999]">
            <div className="flex justify-center flex-1">
              <Link to="/" onClick={closeMenu}>
                <img
                  src={GalaxiesLogo}
                  alt="Galaxies Logo"
                  className="w-28 h-auto object-contain rounded-md brightness-50 contrast-150 drop-shadow-md"
                />
              </Link>
            </div>
            <button
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="text-[#36454F] w-8"
            >
              <X strokeWidth="1.5" size={32} color="#36454F" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="flex flex-col flex-1 px-8 mt-20">
            <div
              className={`flex flex-col items-start gap-1 libertinus-sans-regular pb-4 ${
                isClosing ? "animate-slideOutDown" : "animate-slideInUp"
              }`}
            >
              {/* <NavLink to="/" onClick={closeMenu} className="text-3xl text-[#36454F]">
                Home
              </NavLink> */}
              <NavLink
                to="/#work"
                onClick={closeMenu}
                className="text-3xl text-[#36454F]"
              >
                Work
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className="text-3xl text-[#36454F]">
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="text-3xl text-[#36454F]"
              >
                Contact
              </NavLink>
            </div>

            {/* Social links */}
            <div className="border-t border-[#36454F] pt-4 flex gap-6 text-[#36454F] libertinus-sans-regular">
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
                aria-label="YouTube"
              >
                Youtube
              </a>
            </div>

            {/* Get in Touch */}
            <div
              className={`mt-auto pb-8 flex items-center justify-center ${
                isClosing ? "animate-slideOutDown" : "animate-slideInUp"
              }`}
            >
              <a
                href="/contact"
                onClick={closeMenu}
                className="inline-block px-4 py-2 bg-[#36454F] text-white libertinus-sans-regular rounded-md hover:bg-[#2B3742] transition w-40 text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const TwoLineMenuIcon = ({ size = 32, color = "#36454F" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 32 24"
  >
    <line x1="1" y1="8" x2="31" y2="8" />
    <line x1="1" y1="16" x2="31" y2="16" />
  </svg>
);

const NavLink = ({ to, children, onClick, className = "" }) => {
  const isHash = to.startsWith("#") || to.includes("#");
  const Component = isHash ? HashLink : Link;

  return (
    <Component
      {...(isHash && { smooth: true })}
      to={to}
      onClick={onClick}
      className={`block px-4 py-2 text-[#36454F] libertinus-sans-regular hover:text-gray-500 transition ${className}`}
    >
      {children}
    </Component>
  );
};