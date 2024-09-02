import React, { useEffect, useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { fetchMovies } from '../services/movieApi';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies().then(data => setMovies(data));
  }, []);

  return (
    <View className="flex-1 bg-white p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ScrollView>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
