import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const navigateToGenres = () => {
    navigation.navigate('FavoriteGenres');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Welcome to My Movies!</Text>
      <Text className="text-lg text-center mb-6">
        Discover and manage your favorite movies. Let’s get started by choosing your favorite genres.
      </Text>
      <Button title="Get Started" onPress={navigateToGenres} />
    </View>
  );
};

export default WelcomeScreen;
