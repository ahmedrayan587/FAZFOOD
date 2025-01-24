import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} FazFood. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <Link to="/about" className="hover:text-emerald-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-emerald-300">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-emerald-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}