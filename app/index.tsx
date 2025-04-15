import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="mt-6 mx-2.5">
      <View className="mt-1">
        <Text className="text-3xl" style={{fontFamily: 'WorkSans-Black'}}>app</Text>
        <Text className="text-2xl font-work-black">app</Text>
        <Text className="text-xl font-work-light">app</Text>
        <Text className="text-xl font-work-medium">app</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
