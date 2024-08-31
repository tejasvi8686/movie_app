import React, { useState } from "react";
import { Link, Redirect, router } from "expo-router";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import { StatusBar } from "expo-status-bar";

const App = () => {
  const [name, setName] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex-1 justify-center items-center px-8">
          <View className="mb-8">
            <Text className="text-blue-500 text-6xl text-center">🎬</Text>
          </View>

          <Text className="text-2xl font-bold text-center">
            Welcome to My Movies
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Let’s get to know you!
          </Text>

          <Text className="text-base text-gray-700 mt-8 mb-2 text-center">
            Enter your name
          </Text>

          <TextInput
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

          <TouchableOpacity
            className="w-full bg-blue-500 rounded-lg py-4 mt-6"
            onPress={() => {
              console.log("Name:", name);
              // Handle navigation or next steps here
            }}
          >
            <Link href={"./SelectGenresScreen"}>
              <Text className="text-center text-white text-lg font-semibold">
                Next
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
