'use client'
import { LucideIcon, MessageSquare, Users2 } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export type PathsType = {
    name: string;
    href: string;
    icon: LucideIcon,
    active: boolean;

}

export const useNavigation = () => {
    const pathname = usePathname()

    const paths: PathsType[] = useMemo(() => [
        {
            name: "Chats",
            href: "/chats",
            icon: MessageSquare,
            active: pathname.startsWith('/chats')
        },
        {
            name: "Friends",
            href: "/friends",
            icon: Users2,
            active: pathname.startsWith('/friends')
        },
    ], [pathname])
    return paths
}