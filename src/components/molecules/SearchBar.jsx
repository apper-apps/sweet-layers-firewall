import React, { useState, useRef, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import Input from "@/components/atoms/Input";

const SearchBar = ({ onSearch, onCategorySelect, className = "" }) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const categories = [
    { name: "Birthday Cakes", icon: "Cake" },
    { name: "Wedding Cakes", icon: "Heart" },
    { name: "Custom Cakes", icon: "Sparkles" },
    { name: "Cupcakes", icon: "Cherry" },
    { name: "Seasonal", icon: "Snowflake" }
  ];

  const suggestions = [
    "Chocolate birthday cake",
    "Vanilla wedding cake",
    "Red velvet cupcakes",
    "Custom anniversary cake",
    "Strawberry shortcake"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery) => {
    onSearch(searchQuery);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="relative">
        <ApperIcon 
          name="Search" 
          size={20} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
        />
        <Input
          type="text"
          placeholder="Search for cakes, flavors, occasions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onKeyPress={handleKeyPress}
          className="pl-12 pr-4 h-12 w-full bg-white shadow-cake"
        />
      </div>

      {showSuggestions && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-cake-hover z-50 search-suggestions border border-gray-100">
          <div className="p-4">
            <h4 className="font-display font-semibold text-plum-primary mb-3">Categories</h4>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    onCategorySelect(category.name);
                    setShowSuggestions(false);
                  }}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-rose-primary/10 transition-colors duration-200 text-left"
                >
                  <ApperIcon name={category.icon} size={16} className="text-rose-primary" />
                  <span className="text-sm font-body text-gray-700">{category.name}</span>
                </button>
              ))}
            </div>

            <h4 className="font-display font-semibold text-plum-primary mb-3">Popular Searches</h4>
            <div className="space-y-1">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setQuery(suggestion);
                    handleSearch(suggestion);
                  }}
                  className="block w-full text-left p-2 rounded-lg hover:bg-peach-primary/10 transition-colors duration-200"
                >
                  <span className="text-sm font-body text-gray-700">{suggestion}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;