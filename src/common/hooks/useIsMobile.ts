import { useState, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

export default function useIsMobile() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(width < 769);

  useEffect(() => {
    setIsMobile(width < 821);
  }, [width]);

  return isMobile;
}
