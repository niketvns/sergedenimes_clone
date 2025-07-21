import React, { ReactElement } from "react";
import { IconProps } from "./types";

const ArrowRightIcon = ({
  className = "svg_icon_black",
  viewBox = "0 0 15 11",
}: IconProps): ReactElement => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      className={className}
      width={15}
      height={11}
    >
      <path d="M9.5 1L14 5.5M14 5.5L9.5 10M14 5.5H0.5" stroke="currentColor" />
    </svg>
  );
};

export default ArrowRightIcon;
