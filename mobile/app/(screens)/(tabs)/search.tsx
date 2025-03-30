import { ScreenView } from '@/components/ScreenView';
import { Search } from '@/components/search';
import { ThemedText } from '@/components/ThemedText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

export default function SearchScreen() {
  return (
    <ScreenView>
      <SearchList />
    </ScreenView>
  );
}




type SearchItemProps = {
  id: number;
  name: string;
  avatar: string;
  isFriend?: boolean;
}

const data: SearchItemProps[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '',
    isFriend: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: '',
    isFriend: false,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    avatar: '',
    isFriend: true,
  },
  {
    id: 4,
    name: 'Bob Brown',
    avatar: '',
    isFriend: false,
  },
]

const SearchList = () => {
  const [search, setSearch] = useState<string>('')
  return (
      <FlatList
        style={{ elevation: 0 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className='mb-5'>
            <Search search={search} setSearch={setSearch} />
          </View>
        }
        data={data}
        renderItem={({ item }) => <SearchedItem {...item} />}
      />
  );
};

const SearchedItem = ({ name, avatar }: SearchItemProps) => {
  return (
    <View className='py-3 px-0 border-b items-center border-zinc-800 flex flex-row' style={{ elevation: 0 }}>
      {/* Avatar */}
      <View className='w-16 h-16 rounded-full bg-zinc-800' />
      {/* Details */}
      <View className='flex-1 ml-3'>
        <ThemedText className='text-lg font-semibold'>{name}</ThemedText>
        <ThemedText className='!text-sm font-semibold'>hello I amusing Chit-Chat</ThemedText>
      </View>
      {/* Add Friend */}
      <View className='px-2 py-2 bg-green-700 rounded-lg justify-center items-center'>
        <Ionicons name="person-add" size={18} color="white" />
      </View>
    </View>
  );
};

