import {IS_SSR} from '@/utils'
import {useEffect, useLayoutEffect} from 'react'

// Because useLayoutEffect in the ssr environment will report a warning
// So when you need to use useLayoutEffect, use useIsomorphicLayoutEffect instead, it will use useEffect in the ssr environment to avoid this problem
export const useIsomorphicLayoutEffect = IS_SSR ? useEffect : useLayoutEffect