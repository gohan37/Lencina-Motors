import { useEffect, useRef } from "react";

export const useObserverAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Pequeño delay para evitar lag al renderizar
          requestAnimationFrame(() => {
            entry.target.classList.add("animate");
          });
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return ref;
};
