import React from "react";
import { mixStyle } from "../utils/mix-style";
import type { InputProps } from "../html-props";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={mixStyle(
          `w-full bg-(--dark-secondary) px-3 py-2.5`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
