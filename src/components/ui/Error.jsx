import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-ivory">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-primary to-peach-primary rounded-full flex items-center justify-center mb-4">
            <ApperIcon name="AlertCircle" size={48} className="text-white" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-plum-primary mb-2">
            Oops! Something Went Wrong
          </h3>
          <p className="text-gray-600 font-body mb-6">
            {message}
          </p>
        </div>

        <div className="space-y-4">
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full bg-gradient-to-r from-rose-primary to-peach-primary text-white font-medium py-3 px-6 rounded-xl hover:shadow-cake-hover transition-all duration-200 btn-hover"
            >
              <div className="flex items-center justify-center space-x-2">
                <ApperIcon name="RotateCcw" size={20} />
                <span>Try Again</span>
              </div>
            </button>
          )}
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-white text-plum-primary font-medium py-3 px-6 rounded-xl border-2 border-plum-primary hover:bg-plum-primary hover:text-white transition-all duration-200 btn-hover"
          >
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="RefreshCw" size={20} />
              <span>Refresh Page</span>
            </div>
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>If the problem persists, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default Error;