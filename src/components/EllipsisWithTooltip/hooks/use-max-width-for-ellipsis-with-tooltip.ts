import { useEffect, useRef, useState } from 'react';

const useMaxWidthForEllipsisWithTooltip = <T extends HTMLElement = HTMLElement>() => {
  const container = useRef<T | null>(null);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    setMaxWidth(container.current?.offsetWidth || 0);
  }, []);

  return { container, maxWidth };
};

export default useMaxWidthForEllipsisWithTooltip;
