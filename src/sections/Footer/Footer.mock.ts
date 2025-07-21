import {IconsNameList} from "@/components/Icons";
import {IFooterColumn, ISocialLink} from "./types";

export const footerColumns: IFooterColumn[] = [
    {
        id: "footermenu-0",
        title: "About Us",
        links: [
            {title: "About Us", href: "/pages/about-us"},
            {title: "Hallmarking", href: "/pages/hallmarking"},
        ],
    },
    {
        id: "footermenu-1",
        title: "Legal",
        links: [
            {title: "Terms & Conditions", href: "/pages/terms-conditions"},
            {title: "Privacy Policy", href: "/pages/privacy-policy"},
        ],
    },
    {
        id: "footermenu-2",
        title: "Information",
        links: [
            {title: "Delivery", href: "/pages/delivery"},
            {title: "Returns", href: "/pages/returns"},
            {title: "Product Search", href: "/search"},
        ],
    },
    {
        id: "footermenu-3",
        title: "Customer Services",
        links: [
            {title: "Care Guide", href: "/pages/care-guide"},
            {title: "Size Guide", href: "/pages/size-guides"},
            {
                title: "Student Discount",
                href: "https://sergedenimes.myshopify.com/pages/student-discount",
            },
            {
                title: "Help Centre",
                href: "https://faqsergedenimes.gorgias.help/en-US",
            },
            {
                title: "Track Your Order",
                href: "https://swaptrack.co/p/sergedenimes",
            },
        ],
    },
    {
        id: "footermenu-4",
        title: "Stockists",
        links: [{title: "View Stockists", href: "/pages/stockists"}],
    },
];

export const socialLinks: ISocialLink[] = [
    {
        platform: "Facebook",
        href: "https://www.facebook.com/SDNIMES/",
        icon: IconsNameList.FacebookIcon,
        alt: "Serge DeNimes Facebook",
    },
    {
        platform: "Instagram",
        href: "https://www.instagram.com/sergedenimes/",
        icon: IconsNameList.InstagramIcon,
        alt: "Serge DeNimes Instagram",
    },
    {
        platform: "Twitter",
        href: "https://twitter.com/SergeDeNimes/",
        icon: IconsNameList.TwitterIcon,
        alt: "Serge DeNimes Twitter",
    },
    {
        platform: "TikTok",
        href: "https://www.tiktok.com/@sergedenimes",
        icon: IconsNameList.TiktokIcon,
        alt: "Serge DeNimes TikTok",
    },
];