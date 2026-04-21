import { useEffect } from "react"

export default function useHeaderScroll() {

    useEffect(() => {

        function onScroll() {

            const header = document.querySelector("header")
            if (header) {
                header.classList.toggle("scrolled", window.scrollY > 50)
            }

        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)

    }, [])

}