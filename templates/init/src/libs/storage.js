import AsyncStorage from "@react-native-async-storage/async-storage";

export const get = async (args) => {
  const { key } = args;
  return JSON.parse(await AsyncStorage.getItem(key));
};
export const set = async (args) => {
  const { key, value } = args;
  return await AsyncStorage.setItem(key, JSON.stringify(value));
};
export const remove = async (args) => {
  const { key } = args;
  return await AsyncStorage.removeItem(key);
};
export const merge = async (args) => {
  const { key, value } = args;
  return await AsyncStorage.mergeItem(key, JSON.stringify(value));
};
