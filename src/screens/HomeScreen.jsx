import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';

const HomeScreen = () => {
  const [query, setQuery] = useState('');

  const {data, refetch} = useSearch(query);

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
