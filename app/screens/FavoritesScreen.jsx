

import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoritesScreen = () => {
  const favoriteMovies = useSelector((state) => state.favorites.list);

  return (
    <View className="flex-1 bg-white p-4">
      {favoriteMovies.length === 0 ? (
        <Text className="text-center text-lg mt-4">No favorite movies yet.</Text>
      ) : (
        <ScrollView>
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default FavoritesScreen;
