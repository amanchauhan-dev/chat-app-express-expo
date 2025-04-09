import { ProgressBarLink } from "@/context/progress-bar";
import { Dot } from "lucide-react";

type ChatItemProps = {
    id: number;
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    unreadCount: number;
    lastMessageDate: string;
    avatar: string;
    isGroup: boolean;
}

const data: ChatItemProps[] = [
    {
        id: 1,
        name: 'John Doe',
        lastMessage: 'Hello, how are you?',
        lastMessageTime: '10:30 AM',
        unreadCount: 2,
        lastMessageDate: '2023-10-01',
        avatar: '',
        isGroup: false,
    },
    {
        id: 2,
        name: 'Jane Smith',
        lastMessage: 'See you tomorrow!',
        lastMessageTime: '9:15 PM',
        unreadCount: 0,
        lastMessageDate: '2023-09-30',
        avatar: '',
        isGroup: false,
    },
    {
        id: 3,
        name: 'Group Chat',
        lastMessage: 'New message in group chat',
        lastMessageTime: 'Yesterday',
        unreadCount: 5,
        lastMessageDate: '2023-09-29',
        avatar: '',
        isGroup: true,
    },
    {
        id: 4,
        name: 'Alice Johnson',
        lastMessage: 'Can you send me the file?',
        lastMessageTime: '2 days ago',
        unreadCount: 1,
        lastMessageDate: '2023-09-28',
        avatar: '',
        isGroup: false,
    }
]



export const ChatList = () => {
    return (
        <div className="flex w-full flex-col">
            {data.map(item => {
                return <ChatItem {...item} key={item.id} />
            })}
        </div>
    )
}

export const ChatItem = ({ id, name, lastMessage, lastMessageTime, unreadCount }: ChatItemProps) => {
    return (
        <ProgressBarLink href={'/chats/' + id} className="hover:bg-secondary/20 transition-colors">
            <div className="border-b-2 h-20 w-full flex gap-2 items-center">
                <div className="h-16 w-16 rounded-full bg-secondary">
                    {/* avatar */}
                </div>
                <div className="flex-auto flex flex-col">
                    <h1 className="text-lg text-semibold">{name}</h1>
                    <div className="flex items-center">
                        <h1 className={`text-sm ${unreadCount > 0 ? "text-primary" : "text-secondary-foreground "}`}>{lastMessage} </h1>
                        <h1 className={`flex gap-0 text-[10px] items-center mt-1 ${unreadCount > 0 ? "text-primary" : "text-secondary-foreground "}`}><Dot />{lastMessageTime}</h1>
                    </div>
                </div>
                <div>
                    {unreadCount > 0 && <span className="w-5 h-5 rounded-full text-sm bg-primary text-primary-foreground flex justify-center items-center">{unreadCount}</span>}
                </div>
            </div>
        </ProgressBarLink>
    )
}


