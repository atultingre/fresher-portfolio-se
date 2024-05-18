import React, { useRef, useEffect } from "react";

const LazyImage = ({ src, alt, width, height }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const currentImageRef = imageRef.current; // Store the current value of imageRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentImageRef.src = src; // Use the stored value in the cleanup function
          observer.unobserve(currentImageRef); // Use the stored value in the cleanup function
        }
      },
      { threshold: 0.1 } // Adjust the threshold as per your requirement
    );

    observer.observe(currentImageRef); // Use the stored value in the cleanup function

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef); // Use the stored value in the cleanup function
      }
    };
  }, [src]);

  return <img ref={imageRef} alt={alt} width={width} height={height} />;
};

export default LazyImage;
