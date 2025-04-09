
export const ChatsContainer = ({ children }: {children?:React.ReactNode}) => {
    return (
        <div className="relative w-full border-2 rounded-2xl h-[calc(100svh-32px)] lg:h-full overflow-hidden flex flex-col gap-2">
            {children}
        </div>
    )
}
export const ChatsFallback = () => {
    return (
        <div className="hidden  rounded-2xl bg-zinc-800 border-2 lg:flex h-full w-full p-2 items-center justify-center  text-secondary-foreground">
            Select/start a chat to get started!
        </div>
    )
} 