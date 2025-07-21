interface ILink {
    href: string;
    title?: string;
    description?: string;
}

interface IImage {
    src: string
    alt: string
}

interface IProduct {
    id: number | string,
    name: string
    price: string
    href: string
    imagePrimary: string
    imageSecondary: string
    alt: string
}