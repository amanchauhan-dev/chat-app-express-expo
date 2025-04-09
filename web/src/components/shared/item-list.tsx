'use client'
import { useChat } from "@/hooks/user-chat";
import { cn } from "@/lib/utils";

type props = React.PropsWithChildren<{
    title: string;
    action?: React.ReactNode
}>

export function ItemList({ children, title, action: Action }: props) {
    const { isActive } = useChat()
    return (
        <div className={cn("hidden overflow-hidden h-full border-2 rounded-2xl w-full lg:flex-none lg:w-80 p-2 grid-rows-12",
            {
                'grid': !isActive,
                "lg:grid": isActive
            }
        )}>
            <div className="mb-4 flex items-center justify-between row-span-1">
                <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
                {Action ? Action : null}
            </div>
            <div className="w-full row-span-11 flex flex-col items-center justify-start gap-2 overflow-auto">
                {children}
            </div>
        </div>
    )
}
