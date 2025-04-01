import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import "./global.css"
import Toast from "react-native-toast-message";
import { Stack } from 'expo-router';
import { Provider } from "react-redux";
import { useEffect } from 'react';
import { View } from 'react-native';
import { store } from '@/libs/store';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: '#18181b' }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: '#18181b'
              }
            }}
          >
            <Stack.Screen name="(screens)" />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
          </Stack>
          <StatusBar style='light' />
          <Toast />
        </View>
    </Provider>
  );
}


