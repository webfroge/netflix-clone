import { cloneElement, useEffect, useRef, useState } from "react";
import { EllipsisWithTooltipProps } from "./EllipsisWithTooltip.interface";
import useWindowSize from "../../hooks/use-window-size/use-window-size";
import { Tooltip } from "../Tooltip/Tooltip";

export const EllipsisWithTooltip = ({
  children,
  tooltip,
  maxWidth = "100%",
}: EllipsisWithTooltipProps) => {
  const [isShowTip, setIsShowTip] = useState(false);

  const content = useRef<HTMLElement | null>(null);
  const { windowWidth } = useWindowSize();

  useEffect(() => {
    if (content.current) {
      setIsShowTip(content.current.offsetWidth < content.current.scrollWidth);
    }
  }, [content.current?.offsetWidth, content.current?.scrollWidth, windowWidth]);

  const childrenStyleProps = children.props.style || {};

  const clonedElement = cloneElement(children, {
    ...children.props,
    style: {
      display: "block",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      maxWidth: maxWidth,
      ...childrenStyleProps,
    },
    ref: content,
  });

  return (
    <>
      {isShowTip ? (
        <Tooltip title={tooltip}>{clonedElement}</Tooltip>
      ) : (
        clonedElement
      )}
    </>
  );
};

export default EllipsisWithTooltip;
