import { ItemList } from "@/components/shared/item-list"
import { ChatList } from "./chat-list"





const layout = ({ children }: {children?:React.ReactNode}) => {
    return (
        <>
            <ItemList title="Chats">
                <ChatList />
            </ItemList>
            {children}
        </>
    )
}

export default layout