import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src={logo}
            alt="Tri-Vista Business Solutions"
            className="h-12 w-auto object-contain"
          />

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-900">Tri-Vista</h1>

            <p className="text-xs text-gray-500">Business Solutions Ltd.</p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            to="/"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/services"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            to="/team"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Team
          </Link>

          <Link
            to="/contact"
            className="rounded-lg bg-black px-5 py-2.5 font-semibold text-white transition hover:bg-gray-800"
          >
            Contact
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-2xl text-gray-900 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="border-b border-gray-100 py-3 font-medium text-gray-700"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="border-b border-gray-100 py-3 font-medium text-gray-700"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
            className="border-b border-gray-100 py-3 font-medium text-gray-700"
          >
            Services
          </Link>

          <Link
            to="/team"
            onClick={closeMenu}
            className="border-b border-gray-100 py-3 font-medium text-gray-700"
          >
            Team
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-3 rounded-lg bg-black px-5 py-3 text-center font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
