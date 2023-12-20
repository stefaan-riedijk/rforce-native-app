import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  InputAccessoryView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  const [num, setNum] = useState(0);

  return (
    <SafeAreaView className="container mx-auto items-center">
      <View className="h-20 w-full"></View>
      <View className="bg-green-500 h-20 justify-center px-3 rounded-md">
        <Text className="text-blue-800">
          Open up App.js to start woffrking on your app!
        </Text>
      </View>
      <View className=" bg-green-600 h-2/3 w-11/12 mt-4 rounded-md mx-auto items-center justify-center">
        <TouchableOpacity>
          <Button
            title="maccie"
            className="h-5 w-10 rounded bg-gray-200"
          ></Button>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
