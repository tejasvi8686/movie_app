

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror', 'Romance', 'Thriller'];

const FavoriteGenresScreen = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigation = useNavigation();

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const navigateToMain = () => {
    navigation.navigate('Main');
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">Select Your Favorite Genres</Text>
      <FlatList
        data={genres}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`p-2 m-1 border rounded-lg ${
              selectedGenres.includes(item) ? 'bg-blue-500' : 'bg-gray-200'
            }`}
            onPress={() => toggleGenre(item)}
          >
            <Text className={`text-center ${selectedGenres.includes(item) ? 'text-white' : 'text-black'}`}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
      <Button title="Continue" onPress={navigateToMain} />
    </View>
  );
};

export default FavoriteGenresScreen;
