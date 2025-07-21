import React, { ReactElement } from "react";
import { IconProps } from "./types";

const TiktokIcon = ({
  className = "svg_icon_black",
  viewBox = "0 0 30 30",
  size,
}: IconProps): ReactElement => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="currentColor"
      className={className}
      width={size}
      height={size}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M25.7,12.6c-0.2,0-0.4,0-0.6,0c-2.3,0-4.4-1.2-5.6-3c0,4.8,0,10.2,0,10.3c0,4.2-3.4,7.6-7.6,7.6s-7.6-3.4-7.6-7.6  s3.4-7.6,7.6-7.6c0.2,0,0.3,0,0.5,0v3.7c-0.2,0-0.3,0-0.5,0C9.8,16,8,17.8,8,19.9s1.7,3.9,3.9,3.9s4-1.7,4-3.8c0-0.1,0-17.4,0-17.4  h3.6c0.3,3.2,2.9,5.7,6.1,5.9V12.6z"
      />
    </svg>
  );
};

export default TiktokIcon;
