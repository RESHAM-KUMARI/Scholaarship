import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

// Alternative social icons - using simple divs or you can use other icon libraries
// If you want social icons, you can use these or add a different icon library

const footerLinks = {
  company: [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Prizes", href: "/#prizes" },
    { name: "How It Works", href: "/#how-it-works" },
  ],
  support: [
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">MKK Ludo</h3>
            <p className="text-gray-400 mb-4">
              Asia Cup Tournament Platform - India's biggest Ludo competition experience.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons - Using simple divs with hover effect */}
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-yellow-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-yellow-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@mkkludo.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              Disclaimer: Tournament participation, rewards, and winner selection are subject to platform rules, 
              verification, and eligibility requirements. Please read all terms and conditions carefully before participating.
            </p>
            <p className="mb-4">
              Play responsibly. Participation should be lawful and in accordance with local regulations.
            </p>
            <p>© 2026 MKK Ludo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}