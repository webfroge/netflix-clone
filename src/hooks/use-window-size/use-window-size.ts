import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { WindowSize } from "./use-window-size.interface";

function useWindowSize(debounceValue: number = 500): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", resizeHandlerDebounced);
    return () => {
      window.removeEventListener("resize", resizeHandlerDebounced);
    };
  }, []);

  const resizeHandler = () => {
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  const resizeHandlerDebounced = debounce(resizeHandler, debounceValue);

  return windowSize;
}

export default useWindowSize;
