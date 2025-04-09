'use client'

import { useNavigation } from "@/hooks/user-navigation"
import { Button } from "../ui/button"
import { ProgressBarLink } from "@/context/progress-bar"
import { useChat } from "@/hooks/user-chat"
import { User } from "lucide-react"
import { ModeToggle } from "../theme-toggle"

export const DesktopNavBar = () => {
    const paths = useNavigation()

    return (
        <div className={`hidden lg:flex lg:flex-col 
            lg:justify-between lg:items-center 
            lg:h-full lg:w-16 lg:px-2 lg:py-4 lg:border-2`}>
            <nav className="flex flex-col gap-3">
                {paths.map((path, id) => {
                    return (
                        <ProgressBarLink href={path.href} key={id}>
                            <Button variant={path.active ? 'default' : "outline"} size={'icon'}><path.icon /></Button>
                        </ProgressBarLink>
                    )
                })}

            </nav>
        </div>
    )

}
export const MobileNavBar = () => {
    const paths = useNavigation()
    const { isActive } = useChat()

    return (
        <div className={`fixed border-2 rounded-lg bottom-4 max-w-[calc(100vw-32px)] left-1/2 -translate-x-1/2 px-4 flex items-center h-12 p-2 lg:hidden ${isActive ? 'hidden' : ""}`}>
            <nav className="flex flex-row gap-3">
                {paths.map((path, id) => {
                    return (
                        <ProgressBarLink href={path.href} key={id}>
                            <Button variant={path.active ? 'default' : "outline"} size={'icon'}><path.icon /></Button>
                        </ProgressBarLink>
                    )
                })}
                <ModeToggle />
                <ProgressBarLink href={'/profile'} >
                    <Button size={'icon'} variant={'outline'}><User /></Button>
                </ProgressBarLink>
            </nav>
        </div>
    )

}