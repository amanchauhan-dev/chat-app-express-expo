import { Stack, useNavigation, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getUserData } from '@/database/authStorage';
import { getToken } from '@/database/secureStorage';
import { login, UserType } from '@/libs/store/authSlice';

export default function ScreenLayout() {
  const router = useRouter();
  const [auth, setAuth] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useAppDispatch()
  // Ensures component is mounted before redirection
  useEffect(() => {
    checkLoginStatus()
    setIsMounted(true);
  }, []);

  // Prevent navigation before mount
  const checkLoginStatus = async () => {
    try {
      console.log('Getting data');
      const userData = await getUserData();
      const token = await getToken();
      if (userData && token) {
        dispatch(login({ user: userData, token, isAuthenticated: true }));
        console.log(userData);
        setAuth(true)
        setIsMounted(true)
        return
      } else {
        setAuth(false)
      }
    } catch (error) {
      setAuth(false)
    }
  }
  useEffect(() => {
    if (isMounted == false) {
      return
    }
    if (auth == false) {
      console.log('redirected');
      router.navigate('/login')
    }
  }, [isMounted, auth]);

  if (!isMounted==false ) return null
  //  authenticated
  return (
    <Stack
      screenOptions={{
        header(props) {
          return <CustomHeader title={props.route.name} />
        },
        contentStyle: {
          backgroundColor: '#18181b'
        }
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="edit-profile" />
      <Stack.Screen name="chat-window" options={{ headerShown: false }} />
    </Stack>
  );
}



export function CustomHeader({ title }: { title: string }) {
  const navigation = useNavigation();
  if (title == 'edit-profile') {
    title = 'Edit Profile'
  }
  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.goBack();
  };

  return (
    <View className='flex flex-row items-center bg-transparent p-4 pl-2 gap-2  mx-2 mt-[36px] rounded-[25px]' >
      <TouchableOpacity onPress={handleBackPress}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text className='text-green-500 text-2xl font-bold'>{title}</Text>
    </View>
  );
}