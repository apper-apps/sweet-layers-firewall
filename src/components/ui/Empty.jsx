import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No Results Found",
  message = "We couldn't find what you're looking for.",
  actionText = "Browse All Cakes",
  onAction,
  icon = "Search"
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-ivory py-12">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-primary/20 to-peach-primary/20 rounded-full flex items-center justify-center mb-4">
            <ApperIcon name={icon} size={48} className="text-rose-primary" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-plum-primary mb-2">
            {title}
          </h3>
          <p className="text-gray-600 font-body mb-6">
            {message}
          </p>
        </div>

        {onAction && (
          <button
            onClick={onAction}
            className="bg-gradient-to-r from-rose-primary to-peach-primary text-white font-medium py-3 px-8 rounded-xl hover:shadow-cake-hover transition-all duration-200 btn-hover"
          >
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="Cake" size={20} />
              <span>{actionText}</span>
            </div>
          </button>
        )}

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white rounded-lg shadow-cake">
            <ApperIcon name="Heart" size={24} className="mx-auto text-rose-primary mb-2" />
            <p className="text-sm text-gray-600">Favorites</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-cake">
            <ApperIcon name="Star" size={24} className="mx-auto text-peach-primary mb-2" />
            <p className="text-sm text-gray-600">Popular</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-cake">
            <ApperIcon name="Gift" size={24} className="mx-auto text-plum-primary mb-2" />
            <p className="text-sm text-gray-600">Seasonal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;