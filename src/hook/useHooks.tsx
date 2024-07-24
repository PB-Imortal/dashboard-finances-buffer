import { useEffect, useState } from "react";

export const useHooks = () => {
  const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState<{ width: number }>({
      width: window.innerWidth,
    });

    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return screenSize;
  };

  return {
    useScreenSize,
  };
};
