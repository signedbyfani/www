"use client";

import React from "react";

export default function useMousePosition(ref = null) {
  const [mousePosition, setMousePosition] = React.useState({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ev.clientX - rect.left,
          y: ev.clientY - rect.top,
        });
      } else {
        setMousePosition({
          x: ev.clientX,
          y: ev.clientY,
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [ref]);

  return mousePosition;
}
