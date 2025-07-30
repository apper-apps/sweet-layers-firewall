import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { format, isAfter } from "date-fns";

const SeasonalOfferCard = ({ offer, onRedeem }) => {
  const isExpired = isAfter(new Date(), new Date(offer.validUntil));
  const formattedDate = format(new Date(offer.validUntil), "MMM dd, yyyy");

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-cake hover:shadow-cake-hover transition-all duration-200">
      <div className="relative">
        <img
          src={offer.bannerImageUrl}
          alt={offer.title}
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <ApperIcon name="Gift" size={18} className="text-rose-primary" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-plum-primary mb-2">
          {offer.title}
        </h3>
        
        <p className="text-gray-600 font-body text-sm mb-4">
          {offer.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="bg-gradient-to-r from-rose-primary/10 to-peach-primary/10 rounded-lg px-3 py-2">
            <span className="font-body font-semibold text-rose-primary text-sm">
              Code: {offer.discountCode}
            </span>
          </div>
          <div className="text-right">
            <p className="text-xs font-body text-gray-500">Valid until</p>
            <p className="text-sm font-body font-semibold text-plum-primary">
              {formattedDate}
            </p>
          </div>
        </div>

        <Button
          variant={isExpired ? "ghost" : "primary"}
          size="sm"
          className="w-full"
          onClick={() => onRedeem(offer)}
          disabled={isExpired}
        >
          <div className="flex items-center justify-center space-x-2">
            <ApperIcon name={isExpired ? "Clock" : "ShoppingBag"} size={16} />
            <span>{isExpired ? "Expired" : "Shop Now"}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SeasonalOfferCard;