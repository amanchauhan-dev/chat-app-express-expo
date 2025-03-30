import { ThemedView } from '@/components/ThemedView';
import { ScreenView } from '@/components/ScreenView';
import { Dimensions, Image, TextInput, TextInputProps, View } from 'react-native';
import Button from '@/components/button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Input } from '@/components/Input';
import { ThemedText } from '@/components/ThemedText';

export default function EditProfileScreen() {
    const [image, setImage] = useState<string | null>(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }
    return (
        <ScreenView >
            {/* update pic */}
            <View className='flex items-center gap-3'>
                <ThemedView className='rounded-full mt-10 overflow-hidden' style={{
                    width: Dimensions.get('window').width - 100,
                    height: Dimensions.get('window').width - 100
                }}>
                    {image && <Image className='object-cover w-full h-full' source={{ uri: image }} />}
                </ThemedView>
                <View className='flex gap-5 flex-row'>
                    <Button onPress={pickImage} className='!bg-pink-500'>UPLOAD</Button>
                    <Button>SAVE</Button>
                </View>
            </View>
            {/* update data */}
            <View className='flex gap-3 mt-4'>
                <View className='flex gap-1'>
                    <ThemedText>Name</ThemedText>
                    <Input defaultValue='John Doe' placeholder='Name' />
                </View>
                <View className='flex gap-1'>
                    <ThemedText>Username</ThemedText>
                    <Input defaultValue='john.doe' placeholder='Name' />
                </View>
                <View className='flex gap-1'>
                    <ThemedText>Email</ThemedText>
                    <Input defaultValue='john.doe@gmail.com' placeholder='Name' />
                </View>
                <View className='flex flex-row gap-3' style={{ justifyContent: 'flex-end' }}>
                    <Button style={{ backgroundColor: 'red' }}>CANCEL</Button>
                    <Button>SAVE</Button>
                </View>
            </View>
        </ScreenView>
    );
}


