import React, { useState } from "react";
import ApperIcon from "@/components/ApperIcon";
import SearchBar from "@/components/molecules/SearchBar";
import { useNavigate } from "react-router-dom";

const Header = ({ cartCount = 0, onSearch, onCategorySelect }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-rose-primary to-peach-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <ApperIcon name="Cake" size={24} className="text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-plum-primary">
                Sweet Layers
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="font-body font-medium text-gray-700 hover:text-rose-primary transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-lg mx-8">
            <SearchBar 
              onSearch={onSearch}
              onCategorySelect={onCategorySelect}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Mobile */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-rose-primary transition-colors duration-200">
              <ApperIcon name="Search" size={24} />
            </button>

            {/* Favorites */}
            <button className="p-2 text-gray-600 hover:text-rose-primary transition-colors duration-200 relative">
              <ApperIcon name="Heart" size={24} />
            </button>

            {/* Cart */}
            <button className="p-2 text-gray-600 hover:text-rose-primary transition-colors duration-200 relative">
              <ApperIcon name="ShoppingBag" size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-primary to-peach-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-rose-primary transition-colors duration-200"
            >
              <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <SearchBar 
            onSearch={onSearch}
            onCategorySelect={onCategorySelect}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 font-body font-medium text-gray-700 hover:bg-rose-primary/10 hover:text-rose-primary rounded-lg transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;