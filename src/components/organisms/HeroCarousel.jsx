import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const HeroCarousel = ({ slides = [], onSlideAction }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides.length) return null;

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-r from-rose-primary/10 to-peach-primary/10 hero-gradient">
      {/* Slide Content */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-lg">
                  <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="font-body text-xl text-white/90 mb-6">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      onClick={() => onSlideAction(slide, "primary")}
                      className="shadow-lg"
                    >
                      <ApperIcon name="ShoppingBag" size={20} className="mr-2" />
                      {slide.primaryButtonText || "Shop Now"}
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => onSlideAction(slide, "secondary")}
                      className="bg-white/90 backdrop-blur-sm hover:bg-white"
                    >
                      <ApperIcon name="Eye" size={20} className="mr-2" />
                      {slide.secondaryButtonText || "View Details"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 group"
          >
            <ApperIcon name="ChevronLeft" size={24} className="text-plum-primary group-hover:scale-110 transition-transform duration-200" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 group"
          >
            <ApperIcon name="ChevronRight" size={24} className="text-plum-primary group-hover:scale-110 transition-transform duration-200" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 carousel-dot ${
                index === currentSlide 
                  ? "active scale-110" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;