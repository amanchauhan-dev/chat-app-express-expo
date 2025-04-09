import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { Image, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import AvatarImage from '@/assets/images/image1.jpg';
import { MessageInput, MessageList } from '@/components/chat-components/message-list';


export default function ChatWindowScreen() {
    return (
        <>
            <CustomHeader />
            <View className='flex-1 bg-zinc-800'>
                <MessageList />
                <MessageInput />
            </View>
        </>
    );
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