import { useEffect } from "react";
import { useLocation } from "next/link";

export const ScrollTo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTo;
