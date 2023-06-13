import { useEffect, useState } from "react";

export const useMountTransition = (isMounted: boolean, delay: number) => {
    const [isTransitioned, setIstransitioned] = useState(false);

    useEffect(() => {
        let delayTimeout: any;
        if(isMounted && !isTransitioned){
            setIstransitioned(true)
        } else {
            delayTimeout = setTimeout(() => setIstransitioned(false), delay)
        }

        return () => {
            clearTimeout(delayTimeout);
        }
    }, [isMounted, delay])


    return isTransitioned
}