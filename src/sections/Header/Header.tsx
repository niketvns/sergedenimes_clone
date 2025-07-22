"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, FC, ReactElement } from "react";
import mobileLogo from "../../../public/assets/mobile-logo.svg";
import desktopLogo from "../../../public/assets/desktop-logo.svg";
import { footerLinks, menuItems } from "./Header.mock";
import { IconContainer, IconsNameList } from "@/components/Icons";
import { Sidebar } from "@/components/Sidebar";
import classNames from "classnames";
import { VisuallyHidden } from "@/components/VisuallyHidden";

const Header: FC = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDesktopLinks, setShowDesktopLinks] = useState(true);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const toggleSubmenu = (index: number) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);

      // Show/hide desktop links based on scroll direction
      if (currentScrollY > lastScrollY) {
        setShowDesktopLinks(false);
      } else {
        setShowDesktopLinks(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Determine header styles based on scroll position
  const isScrolled = scrollY > 200;
  const headerBgClass = isScrolled ? "bg-white" : "background-blocker";

  const textColorClass = isScrolled ? "text-black" : "text-white";

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerBgClass,
        { ["shadow-lg"]: isScrolled }
      )}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
    >
      {/* Alert Bar */}
      <div className="bg-black text-white text-[10px] font-semibold uppercase text-center py-1">
        <div className="alert-text">AW25 Modern Rodeo - Now Live</div>
      </div>

      {/* Navigation */}
      <div
        className="serge-header-navigation container mx-auto px-4 py-4 flex flex-col items-center justify-between"
        style={{
          gap: showDesktopLinks || isHeaderHovered ? "24px" : "0px",
          transition: "gap 300ms ease-in-out",
        }}
      >
        <div className="navigation flex items-center w-full">
          {/* Menu Toggle */}
          <div className="menu flex items-center">
            <label htmlFor="menu-control" className="flex items-center">
              <IconContainer
                icon={IconsNameList.HamburgerIcon}
                size="20"
                className={textColorClass}
              />
              <VisuallyHidden>Menu</VisuallyHidden>
            </label>
            <input
              type="checkbox"
              id="menu-control"
              className="menu-control hidden"
              checked={isMenuOpen}
              onChange={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Logo */}
          <div className="logo flex-shrink-0 mx-auto">
            <Link href="/" title="Serge DeNimes">
              <Image
                src={desktopLogo}
                alt="Serge DeNimes Desktop Logo"
                width={188}
                height={26}
                className="desktop-logo hidden md:block"
                style={isScrolled ? {} : { filter: "invert(1)" }}
              />
              <Image
                src={mobileLogo}
                alt="Serge DeNimes Mobile Logo"
                width={18.5}
                height={37}
                className="mobile-logo block md:hidden"
                style={isScrolled ? {} : { filter: "invert(1)" }}
              />
            </Link>
          </div>

          {/* Actions (Search & Cart) */}
          <div className="actions flex items-center space-x-4">
            <Link href="/search" title="Search the site">
              <IconContainer
                icon={IconsNameList.SearchIcon}
                size="20"
                className={textColorClass}
              />
              <VisuallyHidden>Search</VisuallyHidden>
            </Link>
            <Link href="/cart" title="Cart" className="bag-icon">
              <IconContainer
                icon={IconsNameList.CartIcon}
                size="20"
                className={textColorClass}
              />
              <VisuallyHidden>Go to cart</VisuallyHidden>
            </Link>
          </div>
        </div>

        {/* Desktop Links */}
        {(showDesktopLinks || isHeaderHovered) && (
          <div
            className={`links hidden md:flex space-x-6 text-xs uppercase transition-all duration-300 font-semibold ${textColorClass}`}
          >
            <Link href="/collections/all-2025">Shop All</Link>
            <Link href="/collections/new-in">New In</Link>
            <Link href="/collections/bestsellers">Best Sellers</Link>
            <Link href="/collections/gold">Shop Gold</Link>
            <Link href="/collections/silver">Shop Silver</Link>
            <Link href="/collections/perle" className="text-gray-600">
              PERLE
            </Link>
            <Link href="/collections/modern-rodeo">Modern Rodeo</Link>
          </div>
        )}
      </div>

      <Sidebar isOpen={isMenuOpen} handleClose={() => setIsMenuOpen(false)}>
        <div className="side-menu h-full p-8">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="font-semibold text-sm cursor-pointer mb-4"
            >
              Close
            </button>
            <Link
              href="/search"
              title="Search the site"
              className="search-control flex mb-4 justify-between border-b-2 py-2"
            >
              <span className="mr-2 font-semibold text-sm">Search</span>
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3832 13.5L22.0001 20.2929M16.293 8.5C16.293 12.6421 12.9351 16 8.79297 16C4.65083 16 1.29297 12.6421 1.29297 8.5C1.29297 4.35786 4.65083 1 8.79297 1C12.9351 1 16.293 4.35786 16.293 8.5Z"
                  stroke="#121212"
                  strokeWidth="2"
                />
              </svg>
            </Link>
            <ul className="menu-main space-y-4 font-semibold text-sm">
              {menuItems?.map((item, index) => (
                <li key={index}>
                  {item.submenu ? (
                    <>
                      <input
                        type="checkbox"
                        id={`submenu-${index}`}
                        className="hidden"
                        checked={submenuOpen === index}
                        onChange={() => toggleSubmenu(index)}
                      />
                      <label
                        htmlFor={`submenu-${index}`}
                        className="submenu-label flex justify-between cursor-pointer"
                      >
                        {item.label}
                        <span>{submenuOpen === index ? "-" : "+"}</span>
                      </label>
                      {submenuOpen === index && (
                        <div className="pl-4 py-2">
                          <ul className="space-y-2">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.href}
                                  title={subItem.title}
                                  className="font-normal"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={item.className || ""}
                      style={item.label === "PERLE" ? { color: "#0d3b2b" } : {}}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="my-8 space-y-2 flex flex-col gap-2 text-xs font-semibold">
              {footerLinks?.map((link, index) => (
                <Link key={index} href={link.href} title={link.title}>
                  {link.title}
                </Link>
              ))}
            </div>
            <h6 className="my-10 text-gray-500">
              ©2025 Serge DeNimes. All Rights Reserved.
            </h6>
          </div>
        </div>
      </Sidebar>
    </header>
  );
};

export { Header };
