import * as SecureStore from "expo-secure-store";

export const saveToken = async (token: string) => {
  await SecureStore.setItemAsync("jwt_token", token);
};

export const getToken = async () => {
  return await SecureStore.getItemAsync("jwt_token");
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync("jwt_token");
};
