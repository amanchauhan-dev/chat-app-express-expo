import { UserType } from "@/libs/store/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

// user data

export const saveUserData = async (user: UserType) => {
  await AsyncStorage.setItem("user_data", JSON.stringify(user));
};

export const getUserData = async () => {
  const userData = await AsyncStorage.getItem("user_data");
  return userData ? JSON.parse(userData) : null;
};

export const removeUserData = async () => {
  await AsyncStorage.removeItem("user_data");
};
