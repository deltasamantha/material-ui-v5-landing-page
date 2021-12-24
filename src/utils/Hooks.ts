import { useLayoutEffect, useState } from "react";

export function useWindowPosition(id: string) {
    const [animate, setAnimate] = useState<boolean>(false);

    useLayoutEffect(() => { 
        function updatePosition() { 
            const offsetHeight = window.document.getElementById(id)?.offsetHeight;
            if (window.pageYOffset > offsetHeight! * 0.7) {
                setAnimate(true);
             }
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, [id]);
    return animate;
 }