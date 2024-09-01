import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const HomeScreen = () => {
  const [query, setQuery] = useState('');

  const searchBooks = async () => {
    const response = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?',
      {
        params: {
          q: query,
        },
      },
    );

    return response.data.items;
  };

  const {data, refetch} = useQuery({
    queryKey: [query],
    queryFn: searchBooks,
    enabled: false,
  });

  console.log(data);

  return (
    <View style={styles.container}>
      <SearchBar value={query} setValue={setQuery} onPress={refetch} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
});
