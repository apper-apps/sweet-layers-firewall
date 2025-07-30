import React, { useState, useEffect } from "react";
import SeasonalOfferCard from "@/components/molecules/SeasonalOfferCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import * as seasonalOfferService from "@/services/api/seasonalOfferService";

const SeasonalOffers = ({ onRedeem }) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadSeasonalOffers = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await seasonalOfferService.getAll();
      setOffers(data);
    } catch (err) {
      setError("Failed to load seasonal offers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSeasonalOffers();
  }, []);

  if (loading) {
    return (
      <div className="mb-12">
        <div className="h-8 w-44 bg-gray-200 rounded animate-pulse mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-cake animate-pulse">
              <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
              <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-12">
        <Error message={error} onRetry={loadSeasonalOffers} />
      </div>
    );
  }

  if (!offers.length) {
    return (
      <div className="mb-12">
        <Empty
          title="No Current Offers"
          message="We're working on some amazing deals for you. Stay tuned!"
          actionText="Check Back Later"
          onAction={loadSeasonalOffers}
          icon="Gift"
        />
      </div>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="font-display font-bold text-3xl text-plum-primary mb-6">
        Seasonal Offers
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <SeasonalOfferCard
            key={offer.Id}
            offer={offer}
            onRedeem={onRedeem}
          />
        ))}
      </div>
    </section>
  );
};

export default SeasonalOffers;