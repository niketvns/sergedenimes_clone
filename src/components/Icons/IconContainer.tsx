import React from "react";
import { IconContainerProps } from "./types";
import { iconsList } from ".";

const IconContainer = ({ icon, ...rest }: IconContainerProps) => {
  const Icon = iconsList[icon];
  if (!Icon) {
    return <p>No Icon found with the name {icon}</p>;
  }
  return <Icon {...rest} />;
};

export { IconContainer };
