import {IS_SSR} from '@/utils'
import {useCallback, useLayoutEffect} from 'react'

interface IUseScrollLock {
    lockScroll: () => void
    unlockScroll: () => void
}

export const useScrollLock = (): IUseScrollLock => {
    const lockScroll = useCallback(() => {
        if(!IS_SSR) {
            document.body.classList.add('hide_scroll')
        }
    }, [])

    const unlockScroll = useCallback(() => {
        if(!IS_SSR) {
            document.body.classList.remove('hide_scroll')
        }
    }, [])

    useLayoutEffect(() => {
        if(!IS_SSR) {
            const scrollBarCompensation =
                window.innerWidth - document.body.offsetWidth
            document?.styleSheets?.[0]?.insertRule(
                `body { --scroll-lock-padding-right: ${scrollBarCompensation}px; }`,
                0,
            )
        }
    }, [])

    return {
        lockScroll,
        unlockScroll,
    }
}