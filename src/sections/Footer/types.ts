export interface IFooterColumn {
    id: string;
    title: string;
    links: ILink[];
}

export interface ISocialLink {
    platform: string;
    href: string;
    icon: string;
    alt: string;
}