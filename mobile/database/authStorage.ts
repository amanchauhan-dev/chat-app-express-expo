import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserData = async (user: any) => {
  await AsyncStorage.setItem("user_data", JSON.stringify(user));
};

export const getUserData = async () => {
  const userData = await AsyncStorage.getItem("user_data");
  return userData ? JSON.parse(userData) : null;
};

export const removeUserData = async () => {
  await AsyncStorage.removeItem("user_data");
};
