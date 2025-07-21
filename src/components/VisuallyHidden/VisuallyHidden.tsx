import React from "react";
import styles from "./VisuallyHidden.module.scss";
import { VisuallyHiddenProps } from "./types";

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <span className={styles.visuallyHidden}>{children}</span>;
};

export { VisuallyHidden };
