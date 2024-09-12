// src/hooks/useSmoothScroll.js
import { useCallback } from "react";

const useSmoothScroll = (sectionId) => {
  return useCallback(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [sectionId]);
};

export default useSmoothScroll;
