import React from "react";
import { mixStyle } from "../utils/mix-style";
import type { ButtonProps } from "../utils/html-props";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={mixStyle(
          `size-full bg-white text-(--dark-primary) p-2
          focus:bg-emerald-400 active:bg-emerald-500 rounded-md 
          focus:outline-2 focus:outline-solid focus:outline-(--light-secondary)
          cursor-pointer`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
