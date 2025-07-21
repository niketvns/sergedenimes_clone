import React, { ReactElement } from "react";
import { IconProps } from "./types";

const CartIcon = ({
  size,
  className = "svg_icon_white",
  viewBox = "0 0 17 19",
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
        d="M3.89995 5.2001C3.89995 5.2001 4.99995 1.1001 8.59995 1.1001C12.2 1.1001 13.3 5.2001 13.3 5.2001M1.19995 5.2001H16.2V18.3001H1.19995V5.2001Z"
        strokeWidth="0.9608"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default CartIcon;
