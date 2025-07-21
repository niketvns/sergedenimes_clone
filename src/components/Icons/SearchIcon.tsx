import React, { ReactElement } from "react";
import { IconProps } from "./types";

const SearchIcon = ({
  size,
  className = "svg_icon_white",
  viewBox = "0 0 15 19",
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
        d="M14.2 18.4L10.9 13.2M14.3 7.6C14.3 11.2451 11.3451 14.2 7.69998 14.2C4.0549 14.2 1.09998 11.2451 1.09998 7.6C1.09998 3.95492 4.0549 1 7.69998 1C11.3451 1 14.3 3.95492 14.3 7.6Z"
        strokeWidth="0.9608"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
};

export default SearchIcon;
