import { Tabs, useNavigation, } from 'expo-router';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import AntDesign from '@expo/vector-icons/AntDesign';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export default function TabLayout() {

  return (
    <View className='flex flex-1 bg-zinc-900'>
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: Colors['light'].tint,
          headerShown: true,
          header: (props) => <CustomHeader title={props.route.name} />,
          tabBarButton: HapticTab,
          sceneStyle: { backgroundColor: 'transparent' },
          headerShadowVisible: false,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Chats',
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: 'Notify',
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </View>
  );
}

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View className=' flex flex-row bg-zinc-800 m-1 mb-5 mx-8 p-1  rounded-[30px] overflow-hidden justify-between items-center' style={{ elevation: 5 }} >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            className={`${isFocused ? 'bg-green-700' : 'bg-transparent'} flex flex-col items-center rounded-full justify-center  h-16 w-16`}
          >
            <AntDesign size={28} name={getIconName(route.name)} color={isFocused ? '#d4d4d8' : '#16a10c'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


// Function to map route names to icons
const getIconName = (routeName: string): any => {
  switch (routeName) {
    case 'notification':
      return 'notification';
    case 'index':
      return 'wechat';
    case 'profile':
      return 'user';
    case 'search':
      return 'search1';
    default:
      return 'question';
  }
};


export function CustomHeader({ title }: { title: string }) {
  const navigation = useNavigation();
  if (title == 'index') {
    title = 'Chats'
  }
  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.goBack();
  };

  return (
    <View className='flex flex-row items-center bg-transparent p-4 pl-5 mx-5 mt-[36px] rounded-[25px]' >
      <TouchableOpacity onPress={handleBackPress}>
      </TouchableOpacity>
      <Text className='text-green-500 text-2xl font-bold'>{title?.substring(0, 1).toLocaleUpperCase() + title?.substring(1)}</Text>
      <TouchableOpacity >
      </TouchableOpacity>
    </View>
  );
}