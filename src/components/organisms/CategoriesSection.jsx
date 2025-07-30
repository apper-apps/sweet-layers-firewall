import React, { useState, useEffect } from "react";
import CategoryCard from "@/components/molecules/CategoryCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import * as categoryService from "@/services/api/categoryService";

const CategoriesSection = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await categoryService.getAll();
      setCategories(data);
    } catch (err) {
      setError("Failed to load categories. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  if (loading) {
    return (
      <div className="mb-12">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-cake animate-pulse">
              <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-12">
        <Error message={error} onRetry={loadCategories} />
      </div>
    );
  }

  if (!categories.length) {
    return (
      <div className="mb-12">
        <Empty
          title="No Categories Available"
          message="We're setting up our cake categories. Please check back soon!"
          actionText="Refresh Categories"
          onAction={loadCategories}
          icon="Grid3X3"
        />
      </div>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="font-display font-bold text-3xl text-plum-primary mb-6">
        Shop by Category
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.Id}
            category={category}
            onSelect={onCategorySelect}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;