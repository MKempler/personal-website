import { useState, useEffect, RefObject, useRef } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean; // Option to only trigger the animation once
}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true }: IntersectionObserverOptions = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null); // To keep track of the observer instance for cleanup

  useEffect(() => {
    const node = elementRef?.current; // DOM node
    if (!node) return;

    // Disconnect previous observer if it exists and we are re-observing or triggerOnce is active
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && observerRef.current) {
            observerRef.current.unobserve(node);
          }
        } else {
          // Optionally, set to false if you want to re-trigger animation on scroll out and in
          // if (!triggerOnce) { setIsIntersecting(false); }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    observerRef.current = observer; // Store the observer instance

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    }; // Cleanup on unmount
  }, [elementRef, threshold, root, rootMargin, triggerOnce]); // Re-run effect if dependencies change

  return isIntersecting;
};

export default useIntersectionObserver; 