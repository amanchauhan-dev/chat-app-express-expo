import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { Dimensions, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import AvatarImage from '@/assets/images/image1.jpg';
import VideoPlayer from '@/components/VideoPlayer';

export default function ChatWindowScreen() {
    return (
        <>
            <CustomHeader />
            <View className='flex-1 bg-zinc-800'>
                <ChatList />
                <ChatInput />
            </View>
        </>
    );
}


const ChatInput = () => {
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


const ChatList = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ChatItem {...item} />
            }
            ListFooterComponent={<View className='h-16' />}
        />
    )
}

const ChatItem = ({ message, type, message_type, media_url, id }: Message) => {
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

export function CustomHeader() {
    const navigation = useNavigation();
    const handleBackPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigation.goBack();
    };

    return (
        <View className='flex flex-row  bg-transparent p-4 pl-2 gap-2 items-center  mx-2 mt-[36px] rounded-[25px]' >
            <TouchableOpacity onPress={handleBackPress}>
                <Ionicons name="arrow-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <ThemedView className='w-12 h-12  rounded-full overflow-hidden' >
                <Image className='w-full h-full object-cover' source={AvatarImage} />
            </ThemedView>
            <View>
                <ThemedText className='font-bold'>John Doe</ThemedText>
                <ThemedText className='!text-green-500 !text-sm'>online</ThemedText>
            </View>
        </View>
    );
}