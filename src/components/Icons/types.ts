import {ComponentType} from 'react'

export enum IconsNameList {
    ArrowRightIcon = 'arrowRightIcon',
    CartIcon = 'cartIcon',
    ChevronLeftIcon = 'chevronLeftIcon',
    ChevronRightIcon = 'chevronRightIcon',
    DesktopLogo = 'desktopLogo',
    FacebookIcon = 'facebookIcon',
    HamburgerIcon = 'hamburgerIcon',
    InstagramIcon = 'instagramIcon',
    LogoIcon = 'logoIcon',
    SearchIcon = 'searchIcon',
    TiktokIcon = 'tiktokIcon',
    TwitterIcon = 'twitterIcon',
}

export interface IconProps {
    size?: string
    className?: string
    viewBox?: string
}

export interface IconContainerProps extends IconProps {
    icon: IconsNameList | string
}

export interface IIConList {
    [key: string]: ComponentType<IconProps>
}