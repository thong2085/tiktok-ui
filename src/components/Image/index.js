import { useState, forwardRef } from "react";
import images from "../../assets/images";
import classNames from "classnames/bind";
import styles from "./Image.module.scss";

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
