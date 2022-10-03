import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    console.log('useEffect');
    console.log(isActive)
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        console.log(el.current);
        console.log(e.target)
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      console.log('onclick')
      window.addEventListener("click", onClick);
    }

    return () => {
      console.log('remove')
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
