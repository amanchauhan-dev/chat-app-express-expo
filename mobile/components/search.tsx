import { TextInput } from "react-native"
import { ThemedView } from "./ThemedView"
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dispatch, SetStateAction } from "react";


interface SearchProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>
}

export const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
    return (
        <ThemedView className='p-4 py-1 items-center  mt-4 rounded-2xl flex flex-row gap-1 elevation-lg'>
            <AntDesign name="search1" size={24} color="#fff" />
            <TextInput className=" w-full text-white" keyboardAppearance="dark" value={search} onChangeText={(value) => setSearch(value)} placeholder='Search here...' placeholderTextColor={'#fff'} />
        </ThemedView>
    )
}