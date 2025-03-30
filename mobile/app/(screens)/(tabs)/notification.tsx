import { ScreenView } from '@/components/ScreenView';
import { Search } from '@/components/search';
import { ThemedText } from '@/components/ThemedText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

export default function NotificationScreen() {
  return (
    <ScreenView>
      <NotificationList />
    </ScreenView>
  );
}




type NotificationItemProps = {
  id: number;
  type: "friend_request" | "announcement";
  requester?: {
    id: number;
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  createdAt: string;
}

const data: NotificationItemProps[] = [
  {
    id: 1,
    type: "friend_request",
    requester: {
      id: 1,
      name: "John Doe",
      avatar: "https://via.placeholder.com/150"
    },
    title: "Friend Request",
    description: "John Doe has sent you a friend request.",
    createdAt: "2023-10-01T12:00:00Z"
  },
  {
    id: 2,
    type: "announcement",
    title: "New Feature",
    description: "We have released a new feature! Check it out.",
    createdAt: "2023-10-02T12:00:00Z"
  },
  {
    id: 3,
    type: "friend_request",
    requester: {
      id: 1,
      name: "John Doe",
      avatar: "https://via.placeholder.com/150"
    },
    title: "Friend Request",
    description: "John Doe has sent you a friend request.",
    createdAt: "2023-10-01T12:00:00Z"
  },

  {
    id: 4,
    type: "friend_request",
    requester: {
      id: 1,
      name: "John Doe",
      avatar: "https://via.placeholder.com/150"
    },
    title: "Friend Request",
    description: "John Doe has sent you a friend request.",
    createdAt: "2023-10-01T12:00:00Z"
  },
  {
    id: 5,
    type: "announcement",
    title: "New Feature",
    description: "We have released a new feature! Check it out.",
    createdAt: "2023-10-02T12:00:00Z"
  },

  {
    id: 6,
    type: "announcement",
    title: "New Feature",
    description: "We have released a new feature! Check it out.",
    createdAt: "2023-10-02T12:00:00Z"
  },

  {
    id: 7,
    type: "announcement",
    title: "New Feature",
    description: "We have released a new feature! Check it out.",
    createdAt: "2023-10-02T12:00:00Z"
  },
]

const NotificationList = () => {
  const [search, setSearch] = useState<string>('')
  return (
    <FlatList
      style={{ elevation: 0 }}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <NotificationItem {...item} />}
    />
  );
};

const NotificationItem = ({ type, requester, id, title, createdAt, description }: NotificationItemProps) => {
  return (
    <View className='py-3 px-0 border-b items-center border-zinc-800 flex flex-row' style={{ elevation: 0 }}>
      {
        type === "friend_request" && requester ? (
          <View className='flex flex-row items-center justify-center w-16 h-16 rounded-full bg-zinc-800 mr-3'>
            {/* image */}
          </View>
        ) : <View className='flex flex-row items-center justify-center w-16 h-16 rounded-full mr-3'>
          <Ionicons name="notifications" size={24} color="white" />
        </View>
      }

      <View className='flex-1'>
        <ThemedText className='text-base font-bold'>{title}</ThemedText>
        <View>
          <ThemedText className='text-sm text-zinc-400'>{description}</ThemedText>
          <ThemedText className='!text-sm !text-zinc-600'>2min ago</ThemedText>
        </View>
      </View>
      {requester && type === "friend_request" && (
        <View className='flex flex-row gap-2 items-center justify-center  rounded-full ml-3'>
          <Ionicons name="trash" size={24} color="white" />
          <Ionicons name="person-add" size={24} color="white" />
        </View>
        )
      }
    </View>
  );
};

