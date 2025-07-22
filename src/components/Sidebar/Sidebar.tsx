"use-client";
import React, { FC, ReactElement, useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";
import { SidebarProps } from "./types";
import { Portal } from "../Portal";
import { useScrollLock } from "@/hooks/useScrollLock";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Sidebar: FC<SidebarProps> = ({
  isOpen,
  children,
  handleClose,
}): ReactElement => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      return lockScroll();
    }
    unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  const handleCloseSidebar = () => {
    handleClose();
  };

  const sidebarVariants: Variants = {
    hidden: {
      opacity: 0,
      x: "-100%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      x: "0%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const mobileSidebarVariants: Variants = {
    hidden: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={classNames(styles.sidebar)}
              variants={isMobile ? mobileSidebarVariants : sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className={styles.sidebarContainer}>
                {/* <div className={styles.sidebarHeader}>
                  <button
                    className={classNames(
                      "lg:hidden absolute top-0 right-0",
                      styles.sidebarCloseButton
                    )}
                    onClick={handleCloseSidebar}
                  >
                    Close
                    <VisuallyHidden>Close Sidebar</VisuallyHidden>
                  </button>
                </div> */}
                <div className="h-full">{children}</div>
              </div>
            </motion.div>
            <motion.button
              className={styles.overlay}
              onClick={handleCloseSidebar}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export { Sidebar };
