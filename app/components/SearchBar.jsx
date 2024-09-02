
import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <View className="flex-row items-center bg-gray-200 rounded-full p-2 mb-4">
      <Ionicons name="search" size={20} color="gray" className="mr-2" />
      <TextInput
        className="flex-1"
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholderTextColor="gray"
        style={{ fontSize: 16, paddingHorizontal: 8 }}
      />
    </View>
  );
};

export default SearchBar;
