import { FontAwesome } from "@expo/vector-icons";
import { Dimensions, FlatList, Image, TextInput, View } from "react-native";
import { ThemedView } from "../ThemedView";
import VideoPlayer from '@/components/VideoPlayer';
import { ThemedText } from "../ThemedText";
import AvatarImage from '@/assets/images/image1.jpg';
import { useEffect, useRef, useState } from "react";

export const MessageInput = () => {
    return (
        <View className='flex flex-row gap-1  py-1 px-4 rounded-xl mb-5 bg-zinc-900 items-center mx-auto ' >
            <TextInput className='text-white' placeholderTextColor={'white'} style={{ width: Dimensions.get('window').width - 100 }} placeholder='Type a message...' />
            <FontAwesome name='send' size={24} color={'white'} />
        </View>
    )
}

interface Message {
    id: number;
    message: string;
    type: "image" | 'message' | 'video' | 'file';
    media_url?: string;
    message_type: "sent" | 'received'
}

const data: Message[] = [
    {
        id: 1,
        message: 'Hello',
        type: 'message',
        media_url: '',
        message_type: 'sent'
    },
    {
        id: 2,
        message: 'Hi ✋',
        type: 'message',
        media_url: '',
        message_type: 'received'
    },
    {
        id: 3,
        message: 'How u doing?',
        type: 'message',
        media_url: '',
        message_type: 'received'
    },
    {
        id: 4,
        message: 'My new Pic 😇',
        type: 'image',
        media_url: '',
        message_type: 'received'
    },
    {
        id: 5,
        message: 'Good 👍',
        type: 'message',
        media_url: '',
        message_type: 'sent'
    },
    {
        id: 6,
        message: 'How are you? Let\'s meet today',
        type: 'message',
        media_url: '',
        message_type: 'sent'
    },
    {
        id: 7,
        message: '',
        type: 'image',
        media_url: '',
        message_type: 'sent'
    },
    {
        id: 8,
        message: 'How are you? Let\'s meet today',
        type: 'message',
        media_url: '',
        message_type: 'received'
    },
    {
        id: 9,
        message: 'My new Video',
        type: 'video',
        media_url: '',
        message_type: 'received'
    },
]


export const MessageList = () => {
    const flatListRef = useRef<FlatList>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);
    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToOffset({ offset: contentHeight, animated: true });
        }
    }, [])
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <MessageItem {...item} />
            }
            ListFooterComponent={<View className='h-16'  />}
            onContentSizeChange={(contentWidth, contentHeight) => {
                setContentHeight(contentHeight);
            }}
            
        />
    )
}

export const MessageItem = ({ message, type, message_type, media_url, id }: Message) => {
    return (
        <View className={`flex mt-2 px-5  ${message_type == 'sent' ? "items-end" : 'items-start'}`}>
            <ThemedView className={`p-2  rounded-lg  ${message_type == 'sent' ? "!bg-green-600 rounded-tr-none" : '!bg-zinc-900 rounded-tl-none'}`} >
                {type == 'image' && <Image className='w-[250px] h-[200px]' source={AvatarImage} />}
                {type == 'video' && <VideoPlayer />}
                {message.length > 0 && <ThemedText>
                    {message}
                </ThemedText>}
            </ThemedView>
        </View >
    )
}
