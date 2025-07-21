import React, { JSX } from "react";
import classNames from "classnames";
import styles from "./Typography.module.scss";
import { TypographyProps, TypographyTag } from "./types";

const Typography = ({
  tag = TypographyTag.span,
  variant,
  className,
  children,
}: TypographyProps) => {
  const Component = tag as keyof JSX.IntrinsicElements;

  const classes = classNames(styles[variant], className);

  return <Component className={classes}>{children}</Component>;
};

export { Typography };
