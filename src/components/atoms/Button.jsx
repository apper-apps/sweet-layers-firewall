import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-rose-primary to-peach-primary text-white hover:shadow-cake-hover focus:ring-rose-primary/50",
    secondary: "bg-white text-plum-primary border-2 border-plum-primary hover:bg-plum-primary hover:text-white focus:ring-plum-primary/50",
    outline: "bg-transparent text-rose-primary border-2 border-rose-primary hover:bg-rose-primary hover:text-white focus:ring-rose-primary/50",
    ghost: "bg-transparent text-plum-primary hover:bg-plum-primary/10 focus:ring-plum-primary/50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;