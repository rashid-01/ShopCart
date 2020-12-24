/* Data Store to store data in local storage of device */
import AsyncStorage from "@react-native-community/async-storage";

class DataStore {
  //Store Function
  async store(key: string, data: string) {
    return await AsyncStorage.setItem(key, data);
  }

  //Get Function
  async get(key: string) {
    return await AsyncStorage.getItem(key);
  }

  //Remove Function
  async remove(key: string) {
    return await AsyncStorage.removeItem(key);
  }

  //Clear Function
  async delete() {
    return await AsyncStorage.clear();
  }
}

export default new DataStore();
