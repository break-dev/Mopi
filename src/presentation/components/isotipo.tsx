import React, { useState } from "react";
import { mixStyle } from "../utils/mix-style";
import type { ImageProps } from "../html-props";
import isotipo from "../assets/isotipo.svg";

export const Isotipo = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, style, onLoad, ...props }, ref) => {
    const [aspectRatio, setAspectRatio] = useState<string | undefined>();

    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
      const img = event.currentTarget;
      if (img.naturalHeight > 0) {
        setAspectRatio(`${img.naturalWidth} / ${img.naturalHeight}`);
      }
      onLoad?.(event);
    };

    const combinedStyle = {
      ...style,
      aspectRatio,
    };

    return (
      <img
        ref={ref}
        src={isotipo}
        alt="Logo de MOPI"
        className={mixStyle(`size-auto object-cover object-center`, className)}
        onLoad={handleImageLoad}
        style={combinedStyle}
        {...props}
      />
    );
  }
);
