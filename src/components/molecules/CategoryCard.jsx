import React from "react";
import ApperIcon from "@/components/ApperIcon";

const CategoryCard = ({ category, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(category)}
      className="bg-white rounded-xl p-6 shadow-cake category-hover transition-all duration-200 hover:shadow-cake-hover text-left w-full group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-32 object-cover transition-transform duration-200 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
          <ApperIcon name="ArrowRight" size={16} className="text-plum-primary" />
        </div>
      </div>
      
      <h3 className="font-display font-semibold text-lg text-plum-primary mb-1">
        {category.name}
      </h3>
      
      <p className="text-gray-600 font-body text-sm">
        {category.cakeCount} cakes available
      </p>
    </button>
  );
};

export default CategoryCard;