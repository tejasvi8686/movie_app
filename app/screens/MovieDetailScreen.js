

import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/slices/favoritesSlice';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Image
        source={{ uri: `https://ww4.yts.nz${movie.image}` }}
        className="h-60 w-full rounded-lg mb-4"
      />
      <Text className="text-2xl font-bold">{movie.title}</Text>
      <Text className="text-gray-600 my-2">{movie.description}</Text>
      <Text className="font-semibold">Release Date: <Text className="text-gray-500">{movie.release_date}</Text></Text>
      <Text className="font-semibold">Genre: <Text className="text-gray-500">{movie.genre}</Text></Text>
      <Button title="Mark as Favorite" onPress={handleAddFavorite} />
    </View>
  );
};

export default MovieDetailScreen;
