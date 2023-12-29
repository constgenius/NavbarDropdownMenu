import { useEffect, useRef } from "react";

export default function useClickOutside(callbackFn) {
    let domNodeRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!domNodeRef.current?.contains(event.target)) {
                callbackFn()
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])
    return domNodeRef
}
