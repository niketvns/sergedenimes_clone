"use client";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./types";

const portalId = "portal";

const createElement = () => {
  if (document.getElementById(portalId)) {
    return document.getElementById(portalId);
  }
  const node = document?.createElement("div");
  node.setAttribute("id", portalId);
  return node;
};
const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    elementRef.current = createElement();
    if (elementRef.current) {
      document.body.appendChild(elementRef.current);
      setMounted(true);
    }
  }, []);

  if (!mounted || !elementRef.current) {
    return null;
  }

  return createPortal(children, elementRef.current);
};

export { Portal };
