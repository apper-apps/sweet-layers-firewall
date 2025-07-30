import React, { useEffect, useState } from "react";
import HeroCarousel from "@/components/organisms/HeroCarousel";
import CategoriesSection from "@/components/organisms/CategoriesSection";
import FeaturedCakes from "@/components/organisms/FeaturedCakes";
import SeasonalOffers from "@/components/organisms/SeasonalOffers";
import { toast } from "react-toastify";
import ApperIcon from "@/components/atoms/ApperIcon";

const Homepage = ({ onSearch, onCategorySelect }) => {
  const [cartItems, setCartItems] = useState([]);

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "Celebrate Every Moment",
      description: "Handcrafted cakes made with love for your special occasions",
      imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=600&fit=crop",
      primaryButtonText: "Shop Cakes",
      secondaryButtonText: "Custom Orders"
    },
    {
      id: 2,
      title: "Wedding Dreams Come True",
      description: "Elegant wedding cakes designed to make your day unforgettable",
      imageUrl: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1200&h=600&fit=crop",
      primaryButtonText: "Wedding Cakes",
      secondaryButtonText: "Book Consultation"
    },
    {
      id: 3,
      title: "Birthday Magic Awaits",
      description: "Make every birthday extra special with our creative designs",
      imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&h=600&fit=crop",
      primaryButtonText: "Birthday Cakes",
      secondaryButtonText: "Custom Design"
    },
    {
      id: 4,
      title: "Seasonal Delights",
      description: "Fresh seasonal flavors and festive designs for every celebration",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1200&h=600&fit=crop",
      primaryButtonText: "Seasonal Menu",
      secondaryButtonText: "View Offers"
    }
  ];

  const handleAddToCart = (cake) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.Id === cake.Id);
      if (existingItem) {
        return prev.map(item =>
          item.Id === cake.Id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...cake, quantity: 1 }];
      }
    });
    
    // Add cart bounce animation to header cart icon
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('cart-bounce');
      setTimeout(() => cartIcon.classList.remove('cart-bounce'), 600);
    }
  };

  const handleQuickView = (cake) => {
    toast.info(`Quick view for ${cake.name} - Feature coming soon!`, {
      position: "top-right",
      autoClose: 2000
    });
  };

  const handleSlideAction = (slide, actionType) => {
    if (actionType === "primary") {
      toast.success(`Navigating to ${slide.primaryButtonText}`, {
        position: "top-right",
        autoClose: 2000
      });
    } else {
      toast.info(`Opening ${slide.secondaryButtonText}`, {
        position: "top-right",
        autoClose: 2000
      });
    }
  };

  const handleRedeemOffer = (offer) => {
    toast.success(`Discount code ${offer.discountCode} copied to clipboard!`, {
      position: "top-right",
      autoClose: 3000
    });
    navigator.clipboard.writeText(offer.discountCode);
  };

  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Carousel */}
        <HeroCarousel 
          slides={heroSlides}
          onSlideAction={handleSlideAction}
        />

        {/* Categories Section */}
        <CategoriesSection onCategorySelect={onCategorySelect} />

        {/* Featured Cakes */}
        <FeaturedCakes 
          onAddToCart={handleAddToCart}
          onQuickView={handleQuickView}
        />

        {/* Seasonal Offers */}
        <SeasonalOffers onRedeem={handleRedeemOffer} />

        {/* Call to Action Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-rose-primary to-peach-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="font-body text-xl mb-6 opacity-90">
              Let us create a custom cake that's perfect for your special occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rose-primary font-medium py-3 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 btn-hover">
                <div className="flex items-center justify-center space-x-2">
                  <ApperIcon name="Sparkles" size={20} />
                  <span>Custom Cake Design</span>
                </div>
              </button>
              <button className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-xl hover:bg-white hover:text-rose-primary transition-all duration-200 btn-hover">
                <div className="flex items-center justify-center space-x-2">
                  <ApperIcon name="Phone" size={20} />
                  <span>Call Us: (555) 123-CAKE</span>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;