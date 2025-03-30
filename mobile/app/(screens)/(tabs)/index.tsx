import { ScreenView } from '@/components/ScreenView';
import { Search } from '@/components/search';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import AvatarImage from '@/assets/images/image1.jpg';
import { Image } from 'react-native';
import { Link } from 'expo-router';
export default function HomeScreen() {
  return (
    <ScreenView>
      <ChatList />
    </ScreenView>
  );
}

const Filter = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className=' mt-4 flex flex-row gap-3'>
        <TouchableOpacity><ThemedView className='px-4 py-[2px]  rounded-lg'><ThemedText className='text-sm' style={{ fontSize: 15 }}>All</ThemedText></ThemedView></TouchableOpacity>
        <TouchableOpacity><ThemedView className='px-4 py-[2px] rounded-lg'><ThemedText className='text-sm' style={{ fontSize: 15 }}>Unread</ThemedText></ThemedView></TouchableOpacity>
        <TouchableOpacity><ThemedView className='px-4 py-[2px] rounded-lg'><ThemedText className='text-sm' style={{ fontSize: 15 }}>Groups</ThemedText></ThemedView></TouchableOpacity>
      </View>
    </ScrollView>
  )
}

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

const ChatList = () => {
  const [search, setSearch] = useState<string>('')
  return (
    <FlatList
      style={{ elevation: 0 }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View className='mb-5'>
          <Search search={search} setSearch={setSearch} />
          <Filter />
        </View>
      }
      data={data}
      renderItem={({ item }) => <ChatItem {...item} />}
    />
  );
};


const ChatItem = ({ name, avatar, lastMessage, lastMessageDate, lastMessageTime, unreadCount, isGroup }: ChatItemProps) => {
  return (
    <Link href={'/chat-window'} asChild>
      <TouchableOpacity className=' py-3 px-0 border-b border-zinc-800 flex flex-row m-1' style={{ elevation: 0 }}>
        {/* Avatar */}
        <ThemedView className='w-16 h-16  rounded-full overflow-hidden' >
          <Image className='w-full h-full object-cover' source={AvatarImage} />
        </ThemedView>
        {/* Details */}
        <View className='flex-1 ml-3'>
          <ThemedText className='text-lg font-semibold'>{name}</ThemedText>
          <ThemedText className='!text-sm text-zinc-400'>{lastMessage}</ThemedText>
          <ThemedText className='!text-sm !text-zinc-500'>{lastMessageDate}</ThemedText>
        </View>
        {/* Count and Date */}
        <View className='flex flex-col justify-center items-center'>
          {unreadCount > 0 && (
            <View className='bg-green-800 w-7 h-7 rounded-full flex justify-center items-center'>
              <ThemedText className='!text-sm text-center'>{unreadCount}</ThemedText>
            </View>
          )}
          <ThemedText className='!text-sm !text-zinc-500'>{lastMessageTime}</ThemedText>
        </View>
      </TouchableOpacity>
    </Link>
  );
};