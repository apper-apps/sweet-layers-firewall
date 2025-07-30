import React, { useEffect, useState } from "react";
import CakeCard from "@/components/molecules/CakeCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import AppIcon from "@/components/ui/AppIcon";
import * as cakeService from "@/services/api/cakeService";

const FeaturedCakes = ({ onAddToCart, onQuickView }) => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadFeaturedCakes = async () => {
    try {
      setLoading(true);
      setError("");
      const allCakes = await cakeService.getAll();
      const featuredCakes = allCakes.filter(cake => cake.isFeatured).slice(0, 8);
      setCakes(featuredCakes);
    } catch (err) {
      setError("Failed to load featured cakes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeaturedCakes();
  }, []);

  if (loading) {
    return (
      <div className="mb-12">
        <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-cake animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="flex items-center justify-between">
                  <div className="h-6 w-16 bg-gray-200 rounded"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-12">
        <Error message={error} onRetry={loadFeaturedCakes} />
      </div>
    );
  }

  if (!cakes.length) {
    return (
      <div className="mb-12">
        <Empty
          title="No Featured Cakes"
          message="We're updating our featured collection. Check back soon!"
          actionText="Browse All Cakes"
          onAction={loadFeaturedCakes}
          icon="Star"
        />
      </div>
    );
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-bold text-3xl text-plum-primary">
          Featured Cakes
        </h2>
<button className="font-body text-rose-primary hover:text-rose-dark transition-colors duration-200 flex items-center space-x-1">
<span>View All</span>
<AppIcon name="ArrowRight" size={16} />
</button>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cakes.map((cake) => (
          <CakeCard
            key={cake.Id}
            cake={cake}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCakes;