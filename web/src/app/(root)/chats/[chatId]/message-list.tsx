'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProgressBarLink } from '@/context/progress-bar';
import { ChevronLeft, EllipsisVertical, Search, Send, Smile } from 'lucide-react';
import { useEffect, useRef } from 'react';

export const MessageInput = () => {
    return (
        <div className='flex flex-row gap-1  py-1 px-4 rounded-xl mb-5 bg-zinc-900 items-center mx-auto ' >
            <Input className='text-white' placeholder='Type a message...' />
            <Search size={24} />
        </div>
    )
}

interface Message {
    id: number;
    message: string;
    type: "image" | 'message' | 'video' | 'file';
    media_url?: string;
    message_type: "sent" | 'received';
    message_time: string;
}

const data: Message[] = [
    {
        id: 1,
        message: 'Hello',
        type: 'message',
        media_url: '',
        message_type: 'sent',
        message_time: '2/3/25 12:01 PM'
    },
    {
        id: 2,
        message: 'Hi ✋',
        type: 'message',
        media_url: '',
        message_type: 'received',
        message_time: '12:01 PM'
    },
    {
        id: 3,
        message: 'How u doing?',
        type: 'message',
        media_url: '',
        message_type: 'received',
        message_time: '12:01 PM'
    },
    {
        id: 4,
        message: 'My new Pic 😇',
        type: 'image',
        media_url: '',
        message_type: 'received',
        message_time: '12:01 PM'
    },
    {
        id: 5,
        message: 'Good 👍',
        type: 'message',
        media_url: '',
        message_type: 'sent',
        message_time: '12:01 PM'
    },
    {
        id: 6,
        message: 'How are you? Let\'s meet today',
        type: 'message',
        media_url: '',
        message_type: 'sent',
        message_time: '12:01 PM'
    },
    {
        id: 7,
        message: '',
        type: 'image',
        media_url: '',
        message_type: 'sent',
        message_time: '12:01 PM'
    },
    {
        id: 8,
        message: 'How are you? Let\'s meet today',
        type: 'message',
        media_url: '',
        message_type: 'received',
        message_time: '12:01 PM'
    },
    {
        id: 9,
        message: 'My new Video',
        type: 'video',
        media_url: '',
        message_type: 'received',
        message_time: '12:01 PM'
    },
]


export const MessageList = () => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <div>
            {data.map((item) => {
                return <MessageItem key={item.id} {...item} />
            })}
            <div ref={messagesEndRef} className='h-40'></div>
        </div>
    )
}

export const MessageItem = ({ message, type, message_time, message_type }: Message) => {
    return (
        <div className={`w-fit mt-2 px-5  ${message_type == 'sent' ? "ml-auto" : ''}`}>
            <div className={`p-2  rounded-lg  ${message_type == 'sent' ? "!bg-primary rounded-tr-none" : '!bg-secondary rounded-tl-none'}`} >
                {type == 'image' && <div className='w-[250px] h-[200px]'></div>}
                {type == 'video' && <div className='w-[250px] h-[200px]'></div>}
                {message.length > 0 && <h1>{message}</h1>}
                <h1 className='w-full text-right text-[10px] text-muted-foreground'>{message_time}</h1>
            </div>
        </div >
    )
}


export const ChatHeader = () => {
    return (
        <div className='w-full h-full px-2 flex items-center'>
            <div >
                <ProgressBarLink href={'/chats'}>
                    <ChevronLeft />
                </ProgressBarLink>
            </div>
            <div className='h-9 w-9 rounded-full bg-secondary'></div>
            <div className='ml-3 flex flex-col justify-center'>
                <h1 className='font-semibold'>John Doe</h1>
                <h1 className='text-green-600 italic text-[11px]'>online</h1>
            </div>
        </div>
    )
}


export const ChatInput = () => {
    return (
        <div className='absolute w-[80%] bottom-1 border-2 left-1/2 -translate-x-1/2 flex flex-row gap-1 rounded-md mb-5 bg-background overflow-hidden items-center ' >
            <Button size={'icon'} variant={'ghost'}><Smile size={24} /></Button>
            <Input className='text-white pl-1 !bg-transparent border-0 focus:!border-0 focus:!ring-0' placeholder='Type a message...' />
            <Button size={'icon'} variant={'ghost'}><EllipsisVertical size={24} /></Button>
            <Button size={'icon'} ><Send size={24} /></Button>
        </div>
    )
}