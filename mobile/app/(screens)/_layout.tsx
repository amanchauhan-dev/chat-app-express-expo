import { Stack, useNavigation, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/useRedux';

export default function ScreenLayout() {
  const auth = useAppSelector(state => state.auth);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Ensures component is mounted before redirection
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent navigation before mount
  useEffect(() => {
    if (!isMounted) return;
    // Redirect to login if not authenticated
    if (auth.isAuthenticated === false) {
      router.replace("/login");
    }
  }, [auth.isAuthenticated, isMounted]);

  // loading state
  if (!isMounted || auth.isAuthenticated === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!auth.isAuthenticated) return null
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