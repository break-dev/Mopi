import React from "react";
import { mixStyle } from "../utils/mix-style";
import type { InputProps } from "../utils/html-props";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={mixStyle(
          `w-full bg-(--dark-secondary) px-3 py-2.5 focus:outline-2 
          focus:outline-solid focus:outline-(--light-secondary) rounded-md
          truncate`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
