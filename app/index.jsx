// WelcomeScreen.jsx

import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const WelcomeScreen = () => {
  const [name, setName] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-8">
        {/* Icon */}
        <View className="mb-8">
          {/* Replace with your logo or icon component */}
          <Text className="text-blue-500 text-6xl text-center">🎬</Text>
        </View>

        {/* Welcome Text */}
        <Text className="text-2xl font-bold text-center">
          Welcome to My Movies
        </Text>
        <Text className="text-gray-500 text-center mt-2">
          Let’s get to know you!
        </Text>

        {/* Label for Input Field */}
        <Text className="text-base text-gray-700 mt-8 mb-2 text-center">
          Enter your name
        </Text>

        {/* Input Field */}
        <TextInput
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        {/* Next Button */}
        <TouchableOpacity
          className="w-full bg-blue-500 rounded-lg py-4 mt-6"
          onPress={() => {
            console.log("Name:", name);
            // Handle navigation or next steps here
          }}
        >
          <Link href={"/SelectGenresScreen"}>
            <Text className="text-center text-white text-lg font-semibold">
              Next
            </Text>
          </Link>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
