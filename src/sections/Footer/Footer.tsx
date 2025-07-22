import Link from "next/link";
import styles from "./Footer.module.scss";
import { ReactElement } from "react";
import { IconContainer } from "@/components/Icons";
import { footerColumns, socialLinks } from "./Footer.mock";
import { VisuallyHidden } from "@/components/VisuallyHidden";

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className={`${styles.footer} border-t border-gray-300`}>
      <div className="container mx-auto pt-20 pb-16 px-16">
        <div
          className={`${styles.links} grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4`}
        >
          {footerColumns.map((column) => (
            <div key={column.id} className={`${styles.linksColumn}`}>
              <input
                type="checkbox"
                id={column.id}
                className={`${styles.footerMenuControl} hidden md:block`}
              />
              <label
                htmlFor={column.id}
                className="text-xs uppercase font-semibold cursor-pointer md:cursor-default"
              >
                {column.title}
              </label>
              <div className={`${styles.footerMenuContent}`}>
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-1 text-xs font-semibold"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className={`${styles.socials} text-center`}>
            <div className={`${styles.socialsIcons} flex justify-center gap-6`}>
              {socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.alt}
                >
                  <IconContainer icon={social.icon} size="20" />
                  <VisuallyHidden>{social.platform}</VisuallyHidden>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20 px-12 text-xs font-semibold">
        ©2025 Serge DeNimes. All Rights Reserved.
      </div>
    </footer>
  );
};

export { Footer };
