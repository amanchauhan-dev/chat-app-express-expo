import { ScreenView } from '@/components/ScreenView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AvatarImage from '@/assets/images/image1.jpg';
import { Link } from 'expo-router';
export default function ProfileScreen() {
  return (
    <ScreenView>
      <View className='p-4 mt-4 flex'>
        <View className='flex flex-row gap-3'>
          {/* Avatar */}
          <View>
            <ThemedView className='w-24 h-24  rounded-full overflow-hidden' >
              <Image className='w-full h-full object-cover ' source={AvatarImage} />
            </ThemedView>
          </View>
          {/* details */}
          <View className='flex gap-0 justify-center'>
            <ThemedText className='!text-2xl  font-bold'>John Doe</ThemedText>
            <ThemedText className='font-bold '>john.doe</ThemedText>
            <ThemedText className='!text-lg  font-bold'>john.doe@gmail.com
              <Link href="/edit-profile">
                {" "} <MaterialIcons name="mode-edit-outline" size={20} color="green" />
              </Link></ThemedText>

          </View>

        </View>
        {/* status */}
        <View className='mt-10'>
          <ThemedText>Bio</ThemedText>
          <TextInput className={` px-3 text-white !text-lg rounded-2xl`} style={[{
            borderWidth: 2,
            borderColor: '#27272a'
          }]}
            multiline
            defaultValue='Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Pariatur magni incidunt modi deleniti quia
            labore deserunt vitae neque natus officia cupiditate esse eveniet
            veritatis ullam amet, numquam, eos odit in 😇🧑‍🎓.'/>
        </View>

      </View>
    </ScreenView>
  );
}

