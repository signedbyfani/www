"use client";

import React, { RefObject } from "react";

interface MousePosition {
  x: number | null;
  y: number | null;
}

export default function useMousePosition(ref?: RefObject<HTMLElement> | null): MousePosition {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
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