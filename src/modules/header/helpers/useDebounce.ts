import { useRef, useCallback } from "react";

export const useDebounce = (callback: any, delay: number) => {
  const timer = useRef<number>();

  const debouncedCallback = useCallback((...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback
};
