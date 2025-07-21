import {ReactNode} from 'react'

export interface SidebarProps {
    isOpen: boolean
    children: ReactNode
    handleClose: () => void
}