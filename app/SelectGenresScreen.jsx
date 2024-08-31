// SelectGenresScreen.jsx

import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const genresList = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];

const SelectGenresScreen = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <View className=" shadow-md">
        <Text className="text-2xl font-bold text-center px-4 py-6">
          Select Your Favorite Genres
        </Text>
      </View>

      <View className="flex-1 px-4 mt-8">
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View className="flex-row flex-wrap justify-center items-center">
            {genresList.map((genre, index) => (
              <TouchableOpacity
                key={index}
                className={`border rounded-lg px-6 py-3 m-2 ${
                  selectedGenres.includes(genre) ? "bg-blue-500" : "bg-white"
                }`}
                onPress={() => toggleGenre(genre)}
              >
                <Text
                  className={`text-lg font-semibold ${
                    selectedGenres.includes(genre) ? "text-white" : "text-black"
                  }`}
                >
                  {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <View className="w-full px-4 mb-8">
        <TouchableOpacity
          className="w-full bg-blue-500 rounded-lg py-4"
          onPress={() => {
            console.log("Selected Genres:", selectedGenres);
            // Handle navigation or next steps here
          }}
        >
          <Link href={"/home"}>
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

export default SelectGenresScreen;
