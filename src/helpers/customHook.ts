import { useRef, useEffect } from "react"

export function useUpdateEffect(callback: React.EffectCallback, deps?: React.DependencyList | undefined) {
    const flag = useRef(false)
    useEffect(() => {
        if (flag.current) {
            return callback()
        } else flag.current = true
    }, deps)
}

export const useClickOutside = (handler: Function, ignoreIdList: Array<string> = [], width?: number) => {

    useEffect(() => {
        if (width && width < window.innerWidth) return
        const listener = (e: any) => {
            const ignoreNodeList: any = ignoreIdList.map(id => document.getElementById(id)).filter(el => !!el)
            for (let i = 0; i < ignoreNodeList.length; i++) {
                if (ignoreNodeList[i].contains(e.target)) {
                    return
                }
            }
            handler(e)
        }
        document.addEventListener('pointerdown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('pointerdown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [])
}
