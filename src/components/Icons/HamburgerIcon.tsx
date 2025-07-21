import React, { ReactElement } from "react";
import { IconProps } from "./types";

const HamburgerIcon = ({
  size,
  className = "svg_icon_black",
  viewBox = "0 0 21 15",
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
      <path
        d="M0.800049 14.2H20.6M0.800049 7.69995H20.6M0.800049 1.19995H20.6"
        strokeWidth="0.9608"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default HamburgerIcon;
