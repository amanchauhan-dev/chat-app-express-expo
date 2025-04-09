import { ChatsContainer } from '@/components/shared/chats'
import React from 'react'
import { ChatHeader, ChatInput, MessageList } from './message-list'

export default function page() {
    return (
        <ChatsContainer>
            <div className='grid [grid-template-rows:44px_auto] h-full'>
                <div className='bg-secondary/40 '>
                    <ChatHeader />
                </div>
                <div className='overflow-auto'><MessageList /></div>
                <ChatInput />
            </div>
        </ChatsContainer>
    )
}
