import dynamic from 'next/dynamic'
import {IIConList} from './types'
const ArrowRightIcon = dynamic(() => import('./ArrowRightIcon'))
const CartIcon = dynamic(() => import('./CartIcon'))
const ChevronLeftIcon = dynamic(() => import('./ChevronLeftIcon'))
const ChevronRightIcon = dynamic(() => import('./ChevronRightIcon'))
const DesktopLogo = dynamic(() => import('./DesktopLogo'))
const FacebookIcon = dynamic(() => import('./FacebookIcon'))
const HamburgerIcon = dynamic(() => import('./HamburgerIcon'))
const InstagramIcon = dynamic(() => import('./InstagramIcon'))
const LogoIcon = dynamic(() => import('./LogoIcon'))
const SearchIcon = dynamic(() => import('./SearchIcon'))
const TiktokIcon = dynamic(() => import('./TiktokIcon'))
const TwitterIcon = dynamic(() => import('./TwitterIcon'))

export const iconsList: IIConList = {
    arrowRightIcon: ArrowRightIcon,
    cartIcon: CartIcon,
    chevronLeftIcon: ChevronLeftIcon,
    chevronRightIcon: ChevronRightIcon,
    desktopLogo: DesktopLogo,
    facebookIcon: FacebookIcon,
    hamburgerIcon: HamburgerIcon,
    instagramIcon: InstagramIcon,
    logoIcon: LogoIcon,
    searchIcon: SearchIcon,
    tiktokIcon: TiktokIcon,
    twitterIcon: TwitterIcon,
}

export {IconsNameList} from './types'
export * from './IconContainer'