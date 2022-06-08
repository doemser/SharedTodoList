import { useEffect } from "react";
import useStore from "../hooks/useStore";

export default function CursorTracker() {
  useEffect(() => {
    function trackMousePosition(event) {
      useStore.getState().setCursor({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("pointermove", trackMousePosition);

    return () => {
      window.removeEventListener("pointermove", trackMousePosition);
    };
  }, []);

  return null;
}
