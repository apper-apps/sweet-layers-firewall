import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const footerSections = [
    {
      title: "Sweet Layers",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Shop",
      links: [
        { name: "Birthday Cakes", href: "#" },
        { name: "Wedding Cakes", href: "#" },
        { name: "Custom Cakes", href: "#" },
        { name: "Seasonal Specials", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Delivery Info", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Contact Us", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Newsletter", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Pinterest", href: "#" }
      ]
    }
  ];

  const socialIcons = [
    { name: "Instagram", icon: "Instagram" },
    { name: "Facebook", icon: "Facebook" },
    { name: "Twitter", icon: "Twitter" },
    { name: "Mail", icon: "Mail" }
  ];

  return (
    <footer className="bg-plum-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-bold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-body text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-display font-bold text-xl mb-2">
              Sweet Updates
            </h3>
            <p className="font-body text-white/80 mb-4">
              Get the latest cake creations and exclusive offers delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-peach-primary text-gray-900"
              />
              <button className="bg-gradient-to-r from-rose-primary to-peach-primary px-6 py-3 rounded-r-lg hover:shadow-lg transition-all duration-200 btn-hover">
                <ApperIcon name="Send" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-primary to-peach-primary rounded-full flex items-center justify-center">
              <ApperIcon name="Cake" size={20} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl">Sweet Layers</span>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
              >
                <ApperIcon name={social.icon} size={20} className="text-white" />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="font-body text-white/60 text-sm mb-1">
              © 2024 Sweet Layers. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;