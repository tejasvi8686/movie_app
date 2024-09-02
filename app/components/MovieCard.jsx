import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie }) => {
  return (
    <TouchableOpacity className="bg-white p-4 m-2 rounded-lg shadow-md">
      <Image source={{ uri: `https://ww4.yts.nz${movie.image}` }} className="h-40 w-full rounded-md" />
      <Text className="text-lg font-semibold mt-2">{movie.title}</Text>
      <Text className="text-gray-600">Rating: {movie.rating}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
