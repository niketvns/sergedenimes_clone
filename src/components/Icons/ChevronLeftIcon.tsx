import React, { ReactElement } from "react";
import { IconProps } from "./types";

const ChevronLeftIcon = ({
  size,
  className = "svg_icon_white",
  viewBox = "0 0 24 24",
}: IconProps): ReactElement => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      className={className}
      width={size}
      stroke="currentColor"
      height={size}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};

export default ChevronLeftIcon;
