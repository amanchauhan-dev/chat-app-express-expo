import { useEffect, useState } from "react";

/**
 * A hook to avoid hydration mismatches by ensuring rendering only on the client side.
 * @returns `true` if mounted on the client, `false` during SSR.
 */
export function useClientOnly() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}
