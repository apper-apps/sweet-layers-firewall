import React, { useState } from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import { toast } from "react-toastify";

const CakeCard = ({ cake, onAddToCart, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(cake);
    toast.success(`${cake.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price);
  };

  const discountedPrice = cake.isOnSale ? cake.price * (1 - cake.discountPercentage / 100) : cake.price;

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-cake product-card hover:shadow-cake-hover transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={cake.imageUrl}
          alt={cake.name}
          className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105"
        />
        
        {cake.isOnSale && (
          <Badge variant="sale" className="absolute top-3 left-3">
            {cake.discountPercentage}% OFF
          </Badge>
        )}
        
        {cake.isFeatured && !cake.isOnSale && (
          <Badge variant="featured" className="absolute top-3 left-3">
            Featured
          </Badge>
        )}

        <button
          onClick={() => onQuickView(cake)}
          className={`absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <ApperIcon name="Eye" size={18} className="text-plum-primary" />
        </button>

        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`} />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-semibold text-lg text-plum-primary line-clamp-1">
            {cake.name}
          </h3>
          <div className="flex items-center space-x-1 ml-2">
            <ApperIcon name="Star" size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm font-body text-gray-600">{cake.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 font-body text-sm mb-3 line-clamp-2">
          {cake.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-display font-bold text-lg text-plum-primary">
              {formatPrice(discountedPrice)}
            </span>
            {cake.isOnSale && (
              <span className="font-body text-sm text-gray-500 line-through">
                {formatPrice(cake.price)}
              </span>
            )}
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            className="px-4 py-2"
          >
            <ApperIcon name="Plus" size={16} className="mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;